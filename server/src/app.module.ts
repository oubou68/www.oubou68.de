import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { HealthModule } from './health/health.module.js';
import { ProjectModule } from './project/project.module.js';
import { ContactModule } from './contact/contact.module.js';

@Module({
  imports: [HealthModule, ProjectModule, ContactModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
