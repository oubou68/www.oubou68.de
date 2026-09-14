import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Project')
@Controller('project')
export class ProjectController {
  @Get()
  @ApiOperation({ summary: 'Get application metadata, architectural specs, and stack info' })
  @ApiResponse({ status: 200, description: 'Project information retrieved successfully' })
  getProjectInfo() {
    return {
      name: 'www.oubou68.de',
      domain: 'oubou68.de',
      title: 'Oubou68 Digital Platform',
      tagline: 'High-Performance Full-Stack Web Engineering',
      author: 'oubou68',
      version: '1.0.0',
      description: 'Official digital platform and showcase for oubou68, powered by React 19 and NestJS 12.',
      features: [
        {
          id: 'fullstack',
          icon: '⚡',
          title: 'Full-Stack Modern Architecture',
          description: 'React single page client coupled with an enterprise-grade NestJS REST backend.',
        },
        {
          id: 'telemetry',
          icon: '📊',
          title: 'Live Telemetry & Health Monitoring',
          description: 'Real-time endpoint metrics inspecting uptime, memory consumption, and response latency.',
        },
        {
          id: 'design',
          icon: '🎨',
          title: 'Curated Vanilla Design System',
          description: 'Bespoke dark mode UI, glowing gradients, glassmorphism, and smooth micro-interactions without bloat.',
        },
        {
          id: 'api-docs',
          icon: '📖',
          title: 'OpenAPI & Swagger Integration',
          description: 'Auto-generated interactive API documentation for seamless developer exploration.',
        },
      ],
      techStack: {
        frontend: [
          { name: 'React', version: '19' },
          { name: 'TypeScript', version: '5.x' },
          { name: 'Vite', version: '6.x' },
          { name: 'Vanilla CSS', version: 'Modern CSS3' },
        ],
        backend: [
          { name: 'NestJS', version: '12.x' },
          { name: 'Node.js', version: '24.x LTS' },
          { name: 'Swagger UI', version: 'OpenAPI 3.0' },
          { name: 'Vitest', version: '4.x' },
        ],
        infrastructure: [
          { name: 'GitHub', role: 'Source & CI/CD' },
          { name: 'REST Architecture', role: 'Standardized API' },
        ],
      },
    };
  }
}
