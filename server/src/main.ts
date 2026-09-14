import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module.js';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Enable Cross-Origin Resource Sharing
  app.enableCors({
    origin: '*',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  // Global prefix for all endpoints
  app.setGlobalPrefix('api');

  // Configure Swagger OpenAPI documentation
  const config = new DocumentBuilder()
    .setTitle('www.oubou68.de API')
    .setDescription('Enterprise REST API for www.oubou68.de digital platform')
    .setVersion('1.0')
    .addTag('Health', 'System telemetry and status checks')
    .addTag('Project', 'Platform specifications and stack metadata')
    .addTag('Contact', 'Inquiry processing endpoints')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api/docs', app, document);

  const port = process.env.PORT ?? 3000;
  await app.listen(port);
  console.log(`[NestJS] Application is running on: http://localhost:${port}/api`);
  console.log(`[Swagger] OpenAPI Docs available at: http://localhost:${port}/api/docs`);
}

await bootstrap();
