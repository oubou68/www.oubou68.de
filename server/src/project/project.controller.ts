import { Controller, Get } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile & CV')
@Controller('project')
export class ProjectController {
  @Get()
  @ApiOperation({ summary: 'Get Dr. Carl Heckmann personal CV, affiliations, publications with direct links, and strategic pillars' })
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
        researchGate: 'https://www.researchgate.net/profile/Carl-Heckmann',
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
          id: 'pub-balance',
          title: 'IT ambidexterity for business processes: the importance of balance',
          year: 2018,
          authors: 'Carl Simon Heckmann, Alexander Maedche',
          venue: 'Business Process Management Journal, Vol. 24 No. 4, pp. 977-998',
          category: 'IT Ambidexterity',
          abstract:
            'Introduces the Business Process IT (BPIT) Capability Framework and proves empirically that maintaining a balance between exploitative and explorative IT investments drives superior performance.',
          directLinks: {
            doi: 'https://doi.org/10.1108/BPMJ-04-2016-0078',
            researchGate: 'https://www.researchgate.net/publication/325785025_IT_ambidexterity_for_business_processes_the_importance_of_balance',
          },
        },
        {
          id: 'pub-performance',
          title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
          year: 2015,
          authors: 'Carl Heckmann',
          venue: '23rd European Conference on Information Systems (ECIS 2015), Münster',
          category: 'IT Ambidexterity',
          abstract:
            'A comprehensive quantitative empirical study in the German utilities sector testing how combinations of explorative and exploitative IT capabilities impact process agility and cost performance.',
          directLinks: {
            aisELibrary: 'https://aisel.aisnet.org/ecis2015_cr/84/',
            researchGate: 'https://www.researchgate.net/publication/282772591_The_Impact_of_Business_Process_IT_Ambidexterity_on_Business_Process_Performance',
          },
        },
        {
          id: 'pub-conversational',
          title: 'Designing Conversational Agents for Energy Feedback',
          year: 2018,
          authors: 'Ulrich Gnewuch, Stefan Morana, Carl Heckmann, Alexander Maedche',
          venue: 'Designing for a Digital and Globalized World (LNCS, Vol. 10844), Springer, pp. 18-33',
          category: 'Conversational AI',
          abstract:
            'Derives design principles for conversational agents providing interactive household energy feedback, demonstrating high user receptivity and actionable consumption nudging.',
          directLinks: {
            doi: 'https://doi.org/10.1007/978-3-319-91800-6_2',
            researchGate: 'https://www.researchgate.net/publication/325437810_Designing_Conversational_Agents_for_Energy_Feedback',
          },
        },
        {
          id: 'pub-smarticity',
          title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
          year: 2015,
          authors: 'Carl Heckmann, Alexander Mädche',
          venue: 'Energy, Science, Technology 2015, Karlsruhe, Germany',
          category: 'Energy Informatics',
          abstract:
            'Presents the SMARTICITY architecture: integrating smart meter gateway lastgänge with granular tariff rating algorithms to provide real-time cost visibility and demand-side energy optimization.',
          directLinks: {
            researchGate: 'https://www.researchgate.net/publication/282772583_SMARTICITY_-_A_Feedback_System_for_Energy_Consumption_and_Costs',
          },
        },
        {
          id: 'pub-gamified-feedback',
          title: 'The Energy Revolution towards Smart Meters and the Neglected User',
          year: 2016,
          authors: 'Diaa Abdelaziz, Carl Heckmann, Alexander Mädche',
          venue: 'Multikonferenz Wirtschaftsinformatik (MKWI 2016), Ilmenau',
          category: 'Smart Metering UX',
          abstract:
            'Evaluates consumer engagement challenges during smart meter rollouts and presents a gamified feedback system prototype tailored to increase household energy awareness.',
          directLinks: {
            researchGate: 'https://www.researchgate.net/publication/301648079_The_energy_revolution_towards_smart_meters_and_the_neglected_user_a_gamified_energy_feedback_system_prototype',
          },
        },
        {
          id: 'pub-human-ai-2026',
          title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
          year: 2026,
          authors: 'Carl Heckmann',
          venue: 'KIT Knowledge Week Human x AI (Karlsruhe Institute of Technology)',
          category: 'Autonomous AI',
          abstract:
            'Analyzes the integration of autonomous agent swarms into knowledge-intensive enterprise workflows, examining trust boundaries, human-in-the-loop oversight, and organizational ambidexterity.',
          directLinks: {
            event: 'https://karlsruhe.digital/event/woche-des-wissens-mensch-x-ki/',
            kitLab: 'https://h-cs.iism.kit.edu/',
          },
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
