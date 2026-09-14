import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile & CV')
@Controller('project')
export class ProjectController {
  @Get()
  @ApiOperation({ summary: 'Get Dr. Carl Heckmann personal CV, affiliations, publications, and strategic pillars' })
  @ApiResponse({ status: 200, description: 'CV and profile retrieved successfully' })
  getProjectInfo() {
    return {
      personal: {
        name: 'Dr. Carl Heckmann',
        title: 'Executive Leader in Energy IT, Process Ambidexterity & Autonomous AI',
        degree: 'Dr. rer. pol.',
        domain: 'oubou68.de',
        website: 'https://www.oubou68.de',
        linkedin: 'https://www.linkedin.com/in/carl-heckmann-21273631/',
        github: 'https://github.com/oubou68',
        location: 'Heidelberg & Karlsruhe, Germany',
        bio: 'I bridge deep academic rigor with executive industry execution. Over more than a decade, I have focused on solving the structural challenges of the German energy transition (Energiewende) through IT Ambidexterity—simultaneously driving lean operational efficiency in legacy environments while unleashing high-velocity digital innovation through autonomous multi-agent systems and dynamic energy pricing.',
      },
      affiliations: [
        {
          id: 'hsag',
          name: 'hsag Heidelberger Services AG',
          role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
          period: 'Current',
          badge: 'Executive Leadership',
          description:
            'Leading product and implementation management across software solutions and Business Process Outsourcing (BPO) for the German utility market. Spearheading NextGen billing, smart metering integrations, and automated market communications.',
          link: 'https://www.hsag.info',
        },
        {
          id: 'bemd',
          name: 'BEMD e.V. (Bundesverband der Energiemarktdienstleister)',
          role: 'Arbeitskreisleiter & Industry Expert',
          period: 'Ongoing',
          badge: 'Industry Standardization',
          description:
            'Active leadership in defining standardized service specifications (Standardleistungsverzeichnis) and modern process benchmarks for energy service providers and German utilities (EVU).',
          link: 'https://www.bemd.de',
        },
        {
          id: 'kit',
          name: 'Karlsruhe Institute of Technology (KIT)',
          role: 'Researcher & Lecturer (IISM / Human-Centered Systems Lab)',
          period: 'Academic Appointment',
          badge: 'Research & Teaching',
          description:
            'Conducting research on Human-AI collaboration, conversational systems for energy feedback, and IT Ambidexterity. Keynote speaker and contributor to public initiatives like Knowledge Week Human x AI.',
          link: 'https://www.kit.edu',
        },
        {
          id: 'mannheim',
          name: 'University of Mannheim',
          role: 'Doctoral Candidate / Dr. rer. pol. (Information Systems)',
          period: 'Doctorate',
          badge: 'Academic Foundation',
          description:
            'Doctoral research exploring IT Ambidexterity—how enterprise IT architectures can balance cost-effective operational exploitation with agile digital exploration.',
          link: 'https://www.uni-mannheim.de',
        },
      ],
      publications: [
        {
          id: 'pub-ambidexterity-balance',
          title: 'IT ambidexterity for business processes: the importance of balance',
          year: 2018,
          authors: 'Carl Heckmann et al.',
          venue: 'Journal of Information Systems / Business Process Management',
          category: 'IT Ambidexterity',
          abstract:
            'Investigates the empirical balance between exploitative and exploratory IT capabilities in business processes, demonstrating that balanced ambidextrous alignment yields superior operational performance.',
        },
        {
          id: 'pub-ambidexterity-performance',
          title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
          year: 2015,
          authors: 'Carl Heckmann et al.',
          venue: 'International Conference on Information Systems (ICIS / ECIS)',
          category: 'IT Ambidexterity',
          abstract:
            'Presents quantitative evidence linking business process agility and operational efficiency directly to the degree of architectural ambidexterity implemented in enterprise systems.',
        },
        {
          id: 'pub-conversational-agents',
          title: 'Designing Conversational Agents for Energy Feedback',
          year: 2020,
          authors: 'Carl Heckmann et al.',
          venue: 'Springer / Human-Computer Interaction',
          category: 'Conversational AI',
          abstract:
            'Explores the design principles of conversational AI agents to deliver real-time, actionable energy consumption feedback and nudge sustainable user behavior in smart home environments.',
        },
        {
          id: 'pub-smarticity',
          title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
          year: 2017,
          authors: 'Carl Heckmann et al.',
          venue: 'Energy Informatics & Smart Metering Research',
          category: 'Energy Informatics',
          abstract:
            'Presents the architecture and user trial results of SMARTICITY, a cloud-native smart meter analytics platform offering granular cost visibility and dynamic tariff responsiveness.',
        },
        {
          id: 'pub-human-ai-2026',
          title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
          year: 2026,
          authors: 'Carl Heckmann',
          venue: 'KIT Knowledge Week Human x AI',
          category: 'Autonomous AI',
          abstract:
            'Analyzes the integration of autonomous agent swarms into knowledge-intensive enterprise workflows, examining trust boundaries, human-in-the-loop oversight, and organizational ambidexterity.',
        },
      ],
      pillars: [
        {
          id: 'utilities',
          icon: '⚡',
          title: 'Utilities & NextGen Energy Markets',
          subtitle: 'Dynamic Pricing, Smart Metering (iMSys) & Scalable Billing Engines',
        },
        {
          id: 'process',
          icon: '⚙️',
          title: 'Business Process Optimization & Ambidexterity',
          subtitle: 'Operational Exploitation meets Agile Digital Exploration',
        },
        {
          id: 'ai',
          icon: '🤖',
          title: 'Autonomous AI Agents & Multi-Agent Swarms',
          subtitle: 'Deterministic Workflows, Anomaly Clearing & Human-AI Collaboration',
        },
      ],
    };
  }
}
