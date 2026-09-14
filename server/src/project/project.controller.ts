import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile & Projects')
@Controller('project')
export class ProjectController {
  @Get()
  @ApiOperation({ summary: 'Get Dr. Carl Heckmann personal profile, expertise pillars, and project metadata' })
  @ApiResponse({ status: 200, description: 'Profile and project information retrieved successfully' })
  getProjectInfo() {
    return {
      name: 'Dr. Carl Heckmann',
      title: 'Executive Leader in Energy IT, Process Optimization & AI Agents',
      domain: 'oubou68.de',
      website: 'https://www.oubou68.de',
      linkedin: 'https://www.linkedin.com/in/carl-heckmann-21273631/',
      github: 'https://github.com/oubou68',
      summary:
        'Dr. Carl Heckmann drives digital transformation at the convergence of the energy transition (Energiewende), scalable business process automation, and autonomous multi-agent systems. Combining deep academic research (KIT / Uni Mannheim) with senior executive execution in software and BPO.',
      pillars: [
        {
          id: 'utilities',
          icon: '⚡',
          title: 'Utilities & Energy Transformation',
          tagline: 'Smart Grids, Dynamic Tariffs & NextGen Billing',
          description:
            'Architecting mission-critical platforms for the liberalized energy market: dynamic pricing pursuant to § 41a EnWG, 15-minute smart meter time-series ingestion (iMSys / TAF 1-14), EPEX Spot market integration, and BNetzA market communication (MaKo / AS4 / EDIFACT).',
          highlights: [
            'NextGen Energy Billing Engine (EBE-DE)',
            'Dynamic Tariffs (§ 41a EnWG) & EPEX Spot Coupling',
            'Smart Meter Gateway Ingestion (iMSys / TAF)',
            'Regulatory Compliance (EnWG, MsbG, StromStG, GoBD)',
          ],
        },
        {
          id: 'process-optimization',
          icon: '⚙️',
          title: 'Business Process Optimization',
          tagline: 'IT Ambidexterity & Lean Operational Scaling',
          description:
            'Bridging operational efficiency with rapid digital innovation. Leveraging IT Ambidexterity principles to modernize legacy architectures, streamline Business Process Outsourcing (BPO), eliminate operational clearing bottlenecks, and enable straight-through processing (STP).',
          highlights: [
            'IT Ambidexterity (Exploitation vs. Exploration)',
            'Business Process Outsourcing (BPO) Automation',
            'Supplier Switching & Market Clearing Modernization',
            'BEMD Standardization & Process Frameworks',
          ],
        },
        {
          id: 'ai-agents',
          icon: '🤖',
          title: 'Autonomous AI Agents',
          tagline: 'Multi-Agent Orchestration & Enterprise Intelligence',
          description:
            'Pioneering agentic architectures that automate high-complexity enterprise tasks. Deploying specialized multi-agent swarms for autonomous anomaly detection, automated reconciliation in high-volume utility billing, conversational energy agents, and human-in-the-loop decision support.',
          highlights: [
            'Multi-Agent Collaborative Workflows',
            'Autonomous Exception & Billing Discrepancy Handling',
            'Conversational AI Agents & Consumption Feedback',
            'Deterministic Guardrails & Auditable Action Traces',
          ],
        },
      ],
      academicBackground: {
        institutions: [
          'Karlsruhe Institute of Technology (KIT)',
          'University of Mannheim',
        ],
        focus: [
          'IT Ambidexterity in Enterprise Information Systems',
          'Digital Feedback Systems & Smart Energy Consumption',
          'Conversational Agents and Human-Computer Interaction',
        ],
      },
      technologyStack: {
        languages: ['TypeScript', 'JavaScript', 'Python', 'SQL'],
        frontend: ['React 19', 'Vite', 'Vanilla CSS3', 'HTML5 Canvas'],
        backend: ['NestJS 12', 'Node.js', 'Express', 'Swagger / OpenAPI', 'Vitest'],
        architecture: ['Event-Driven Microservices', 'Time-Series Data', 'Multi-Agent Swarms', 'REST & GraphQL'],
      },
    };
  }
}
