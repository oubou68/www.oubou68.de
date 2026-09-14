import { Body, Controller, HttpException, HttpStatus, Post } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags, ApiProperty } from '@nestjs/swagger';

export class ContactDto {
  @ApiProperty({ example: 'Max Mustermann' })
  name!: string;

  @ApiProperty({ example: 'max@example.com' })
  email!: string;

  @ApiProperty({ example: 'Hello! I am interested in collaborating on www.oubou68.de.' })
  message!: string;
}

@ApiTags('Contact')
@Controller('contact')
export class ContactController {
  @Post()
  @ApiOperation({ summary: 'Submit an inquiry message' })
  @ApiResponse({ status: 201, description: 'Message received successfully' })
  @ApiResponse({ status: 400, description: 'Invalid input parameters' })
  submitContact(@Body() body: ContactDto) {
    const { name, email, message } = body || {};

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      throw new HttpException(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please provide name, email, and message.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    // Basic email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
      throw new HttpException(
        {
          success: false,
          error: 'Validation failed',
          message: 'Please provide a valid email address.',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    return {
      success: true,
      message: `Thank you, ${name.trim()}! Your message has been safely received by the oubou68 backend.`,
      receivedAt: new Date().toISOString(),
      data: {
        name: name.trim(),
        email: email.trim(),
        messageLength: message.trim().length,
      },
    };
  }
}
