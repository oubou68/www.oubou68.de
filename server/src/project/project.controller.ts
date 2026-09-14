import { Controller, Get, Query } from '@nestjs/common';
import { ApiOperation, ApiQuery, ApiResponse, ApiTags } from '@nestjs/swagger';

@ApiTags('Profile & CV')
@Controller('project')
export class ProjectController {
  @Get()
  @ApiOperation({
    summary:
      'Get Dr. Carl Heckmann personal CV, affiliations, publications with direct links, and strategic pillars in German or English',
  })
  @ApiQuery({
    name: 'lang',
    required: false,
    enum: ['de', 'en'],
    description: 'Language code (de = German, en = English; default is de)',
  })
  @ApiResponse({ status: 200, description: 'CV and profile retrieved successfully' })
  getProjectInfo(@Query('lang') lang: string = 'de') {
    const isEn = lang?.toLowerCase() === 'en';

    return {
      language: isEn ? 'en' : 'de',
      personal: {
        name: 'Dr. Carl Heckmann',
        degree: 'Dr. rer. pol.',
        domain: 'oubou68.de',
        website: 'https://www.oubou68.de',
        linkedin: 'https://www.linkedin.com/in/carl-heckmann-21273631/',
        github: 'https://github.com/oubou68',
        researchGate: 'https://www.researchgate.net/profile/Carl-Heckmann',
        location: isEn ? 'Heidelberg & Karlsruhe, Germany' : 'Heidelberg & Karlsruhe, Deutschland',
        title: isEn
          ? 'Executive Leader in Energy IT, Process Ambidexterity & Autonomous AI'
          : 'Führungskraft in Energie-IT, Prozess-Ambidextrie & Autonomen KI-Agenten',
        bio: isEn
          ? 'I bridge deep academic rigor with executive industry execution. Over more than a decade, I have focused on solving the structural challenges of the German energy transition (Energiewende) through IT Ambidexterity—simultaneously driving lean operational efficiency in legacy environments while unleashing high-velocity digital innovation through autonomous multi-agent systems and dynamic energy pricing.'
          : 'Ich verbinde wissenschaftliche Tiefe mit industrieller Umsetzungsstärke. Seit über einem Jahrzehnt widme ich mich den strukturellen Herausforderungen der deutschen Energiewende durch IT-Ambidextrie – die gleichzeitige Maximierung operativer Effizienz in Legacy-Systemen und die Beschleunigung digitaler Innovation durch autonome Multi-Agenten-Systeme und dynamische Tarife.',
      },
      affiliations: isEn
        ? [
            {
              id: 'hsag',
              name: 'hsag Heidelberger Services AG',
              role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
              period: 'Executive Leadership',
              badge: 'Software & BPO Execution',
              description:
                'Leading product and implementation management across software solutions and Business Process Outsourcing (BPO) for the German utility market. Spearheading NextGen billing, smart metering integrations, and automated market communications.',
              link: 'https://www.hsag.info',
            },
            {
              id: 'bemd',
              name: 'BEMD e.V. (Bundesverband der Energiemarktdienstleister)',
              role: 'Arbeitskreisleiter & Industry Expert',
              period: 'Committee & Standards',
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
              role: 'Dr. rer. pol. (Doctorate in Information Systems)',
              period: 'Doctoral Foundation',
              badge: 'Academic Foundation',
              description:
                'Doctoral research exploring IT Ambidexterity—how enterprise IT architectures can balance cost-effective operational exploitation with agile digital exploration.',
              link: 'https://www.uni-mannheim.de',
            },
          ]
        : [
            {
              id: 'hsag',
              name: 'hsag Heidelberger Services AG',
              role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
              period: 'Führungsebene',
              badge: 'Software & BPO-Exzellenz',
              description:
                'Leitung der Produktstrategie, Software-Implementierungen und Business Process Outsourcing (BPO) Lösungen für die deutsche Energiewirtschaft. Konzeption moderner Cloud-Billing-Module, hochvolumiger Marktkommunikation und automatisierter Clearing-Engines für Stadtwerke und überregionale Energieversorger.',
              link: 'https://www.hsag.info',
            },
            {
              id: 'bemd',
              name: 'BEMD e.V. (Bundesverband der Energiemarktdienstleister)',
              role: 'Arbeitskreisleiter & Branchenexperte',
              period: 'Gremienarbeit & Standards',
              badge: 'Branchen-Benchmark',
              description:
                'Förderung bundesweiter Harmonisierung als Arbeitskreisleiter. Definition standardisierter Leistungskataloge (Standardleistungsverzeichnis) und Prozess-Benchmarks für Energiemarktdienstleister und EVU.',
              link: 'https://www.bemd.de',
            },
            {
              id: 'kit',
              name: 'Karlsruher Institut für Technologie (KIT)',
              role: 'Wissenschaftlicher Mitarbeiter & Dozent (IISM / WIN)',
              period: 'Wissenschaftliche Ernennung',
              badge: 'Forschung & Human-AI',
              description:
                'Forschungsarbeiten am Institut für Informationswirtschaft und Marketing (IISM) und Human-Centered Systems Lab. Erforschung der organisatorischen Auswirkungen von KI als Arbeitskollege (AI as a Colleague), intelligenten Energie-Feedback-Systemen und IT-Ambidextrie.',
              link: 'https://www.kit.edu',
            },
            {
              id: 'mannheim',
              name: 'Universität Mannheim',
              role: 'Dr. rer. pol. (Promotion in Wirtschaftsinformatik)',
              period: 'Wissenschaftliche Promotion',
              badge: 'Dr. rer. pol.',
              description:
                'Dissertation zum Thema „IT Ambidexterity in Business Processes“. Entwicklung quantitativer und qualitativer Modelle, die empirisch belegen, wie die Balance aus operativer Effizienz (Exploitation) und digitaler Innovation (Exploration) nachhaltige Marktführerschaft sichert.',
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
          category: isEn ? 'IT Ambidexterity' : 'IT-Ambidextrie',
          abstract: isEn
            ? 'Introduces the Business Process IT (BPIT) Capability Framework and proves empirically that maintaining a balance between exploitative and explorative IT investments drives superior performance.'
            : 'Etabliert das Business Process IT (BPIT) Capability Framework und belegt empirisch, dass eine bewusste Balance zwischen exploitativer und explorativer IT-Nutzung signifikante Performance-Vorteile erzielt.',
          directLinks: {
            doi: 'https://doi.org/10.1108/BPMJ-04-2016-0078',
            researchGate:
              'https://www.researchgate.net/publication/325785025_IT_ambidexterity_for_business_processes_the_importance_of_balance',
          },
        },
        {
          id: 'pub-performance',
          title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
          year: 2015,
          authors: 'Carl Heckmann',
          venue: '23rd European Conference on Information Systems (ECIS 2015), Münster',
          category: isEn ? 'IT Ambidexterity' : 'IT-Ambidextrie',
          abstract: isEn
            ? 'A comprehensive quantitative empirical study in the German utilities sector testing how combinations of explorative and exploitative IT capabilities impact process agility and cost performance.'
            : 'Umfassende quantitative empirische Studie in der deutschen Versorgungswirtschaft, die untersucht, wie IT-Ambidextrie die Prozessagilität und Kosteneffizienz determiniert.',
          directLinks: {
            aisELibrary: 'https://aisel.aisnet.org/ecis2015_cr/84/',
            researchGate:
              'https://www.researchgate.net/publication/282772591_The_Impact_of_Business_Process_IT_Ambidexterity_on_Business_Process_Performance',
          },
        },
        {
          id: 'pub-conversational',
          title: 'Designing Conversational Agents for Energy Feedback',
          year: 2018,
          authors: 'Ulrich Gnewuch, Stefan Morana, Carl Heckmann, Alexander Maedche',
          venue: 'Designing for a Digital and Globalized World (LNCS, Vol. 10844), Springer, pp. 18-33',
          category: isEn ? 'Conversational AI' : 'Conversational KI',
          abstract: isEn
            ? 'Derives design principles for conversational agents providing interactive household energy feedback, demonstrating high user receptivity and actionable consumption nudging.'
            : 'Leitet Gestaltungsprinzipien für dialogbasierte KI-Agenten im Energie-Feedback ab und weist signifikant höhere Nutzerakzeptanz und Verhaltensänderungen gegenüber statischen Dashboards nach.',
          directLinks: {
            doi: 'https://doi.org/10.1007/978-3-319-91800-6_2',
            researchGate:
              'https://www.researchgate.net/publication/325437810_Designing_Conversational_Agents_for_Energy_Feedback',
          },
        },
        {
          id: 'pub-smarticity',
          title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
          year: 2015,
          authors: 'Carl Heckmann, Alexander Mädche',
          venue: 'Energy, Science, Technology 2015, Karlsruhe, Germany',
          category: isEn ? 'Energy Informatics' : 'Energieinformatik',
          abstract: isEn
            ? 'Presents the SMARTICITY architecture: integrating smart meter gateway lastgänge with granular tariff rating algorithms to provide real-time cost visibility and demand-side energy optimization.'
            : 'Präsentiert die SMARTICITY-Architektur: Kopplung von Smart-Meter-Gateway-Lastgängen mit granularen Tarifierungsalgorithmen zur Echtzeit-Kostentransparenz und verbraucherseitigen Lastverschiebung.',
          directLinks: {
            researchGate:
              'https://www.researchgate.net/publication/282772583_SMARTICITY_-_A_Feedback_System_for_Energy_Consumption_and_Costs',
          },
        },
        {
          id: 'pub-gamified-feedback',
          title: 'The Energy Revolution towards Smart Meters and the Neglected User',
          year: 2016,
          authors: 'Diaa Abdelaziz, Carl Heckmann, Alexander Mädche',
          venue: 'Multikonferenz Wirtschaftsinformatik (MKWI 2016), Ilmenau',
          category: isEn ? 'Smart Metering UX' : 'Smart Metering UX',
          abstract: isEn
            ? 'Evaluates consumer engagement challenges during smart meter rollouts and presents a gamified feedback system prototype tailored to increase household energy awareness.'
            : 'Untersucht Herausforderungen bei der Endkunden-Adoption von Smart Metern und stellt einen spielerischen Feedback-System-Prototyp zur Steigerung des Energiebewusstseins vor.',
          directLinks: {
            researchGate:
              'https://www.researchgate.net/publication/301648079_The_energy_revolution_towards_smart_meters_and_the_neglected_user_a_gamified_energy_feedback_system_prototype',
          },
        },
        {
          id: 'pub-human-ai-2026',
          title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
          year: 2026,
          authors: 'Carl Heckmann',
          venue: 'KIT Knowledge Week Human x AI (Karlsruhe Institute of Technology)',
          category: isEn ? 'Autonomous AI' : 'Autonome KI',
          abstract: isEn
            ? 'Analyzes the integration of autonomous agent swarms into knowledge-intensive enterprise workflows, examining trust boundaries, human-in-the-loop oversight, and organizational ambidexterity.'
            : 'Analysiert die Einbindung autonomer Agenten-Schwärme in wissensintensive Unternehmensprozesse mit Fokus auf Vertrauensgrenzen, Human-in-the-Loop und organisatorische Ambidextrie.',
          directLinks: {
            event: 'https://karlsruhe.digital/event/woche-des-wissens-mensch-x-ki/',
            kitLab: 'https://h-cs.iism.kit.edu/',
          },
        },
      ],
      pillars: isEn
        ? [
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
          ]
        : [
            {
              id: 'utilities',
              icon: '⚡',
              title: 'Energiewirtschaft & NextGen Märkte',
              subtitle: 'Dynamische Tarife, Smart Metering (iMSys) & Skalierbare Abrechnung',
            },
            {
              id: 'process',
              icon: '⚙️',
              title: 'Geschäftsprozessoptimierung & Ambidextrie',
              subtitle: 'Operative Exzellenz trifft agile digitale Innovation',
            },
            {
              id: 'ai',
              icon: '🤖',
              title: 'Autonome KI-Agenten & Multi-Agenten-Systeme',
              subtitle: 'Deterministische Workflows, Klärfallbearbeitung & Mensch-KI-Kollaboration',
            },
          ],
    };
  }
}
