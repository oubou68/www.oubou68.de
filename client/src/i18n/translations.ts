export type Language = 'de' | 'en';

export interface TranslationSchema {
  nav: {
    brandSubtitle: string;
    about: string;
    experience: string;
    publications: string;
    pillars: string;
    contact: string;
    apiLive: string;
    apiConnecting: string;
    apiOffline: string;
    linkedin: string;
  };
  hero: {
    badge: string;
    subtitle: string;
    titleLine1: string;
    titleGradient: string;
    subhead: string;
    affilHsag: string;
    affilBemd: string;
    affilKit: string;
    affilMannheim: string;
    btnCv: string;
    btnPublications: string;
    btnPillars: string;
    btnLinkedin: string;
    portraitBadge: string;
    portraitName: string;
    portraitRole: string;
  };
  about: {
    tag: string;
    heading: string;
    lead: string;
    paragraph1: string;
    quote: string;
    paragraph2: string;
    stat1Number: string;
    stat1Label: string;
    stat1Detail: string;
    stat2Number: string;
    stat2Label: string;
    stat2Detail: string;
    stat3Number: string;
    stat3Label: string;
    stat3Detail: string;
  };
  experience: {
    tag: string;
    heading: string;
    desc: string;
    officialSiteBtn: string;
    affiliations: {
      id: string;
      name: string;
      role: string;
      period: string;
      badge: string;
      description: string;
      link: string;
      highlights: string[];
    }[];
  };
  publications: {
    tag: string;
    heading: string;
    desc: string;
    filterAll: string;
    filterAmbidexterity: string;
    filterEnergy: string;
    filterAi: string;
    calloutTitle: string;
    calloutText1: string;
    calloutLinkRg: string;
    calloutText2: string;
    calloutLinkKit: string;
    items: {
      id: string;
      title: string;
      year: number;
      authors: string;
      venue: string;
      category: 'ambidexterity' | 'energy' | 'ai';
      categoryLabel: string;
      abstract: string;
      primaryLink: {
        label: string;
        url: string;
      };
      secondaryLink?: {
        label: string;
        url: string;
      };
    }[];
  };
  pillars: {
    tag: string;
    heading: string;
    desc: string;
    filterAll: string;
    filterUtilities: string;
    filterProcess: string;
    filterAi: string;
    items: {
      id: string;
      category: 'utilities' | 'process' | 'ai';
      badge: string;
      title: string;
      subtitle: string;
      image: string;
      imageAlt: string;
      description: string;
      icon: string;
      accent: string;
      subItems: {
        title: string;
        desc: string;
      }[];
      stats: {
        label: string;
        value: string;
      }[];
    }[];
  };
  stack: {
    tag: string;
    heading: string;
    desc: string;
    groups: {
      title: string;
      icon: string;
      items: string[];
    }[];
  };
  telemetry: {
    title: string;
    desc: string;
    btnRefresh: string;
    btnRawJson: string;
    statusLabel: string;
    statusHealthy: string;
    statusConnecting: string;
    statusOffline: string;
    serviceFallback: string;
    latencyLabel: string;
    latencySub: string;
    uptimeLabel: string;
    uptimeSub: string;
    memoryLabel: string;
    memorySubTotal: string;
    memorySubFallback: string;
  };
  contact: {
    tag: string;
    heading: string;
    desc: string;
    infoTitle: string;
    infoLead: string;
    metaProfileTitle: string;
    metaFocusTitle: string;
    metaFocusDesc: string;
    metaLocationTitle: string;
    metaLocationDesc: string;
    labelName: string;
    placeholderName: string;
    labelEmail: string;
    placeholderEmail: string;
    labelTopic: string;
    topics: {
      value: string;
      label: string;
    }[];
    labelMessage: string;
    placeholderMessage: string;
    btnSubmit: string;
    btnSubmitting: string;
    alertSuccessDefault: string;
    alertErrorDefault: string;
    alertNetworkError: string;
  };
  footer: {
    title: string;
    desc: string;
    credits: string;
    colPillarsTitle: string;
    colPlatformTitle: string;
    colConnectTitle: string;
    linkUtilities: string;
    linkProcess: string;
    linkAi: string;
    linkTelemetry: string;
    linkSwagger: string;
    linkLinkedin: string;
    linkGithub: string;
    linkContact: string;
  };
}

export const translations: Record<Language, TranslationSchema> = {
  de: {
    nav: {
      brandSubtitle: 'Heckmann',
      about: 'Profil',
      experience: 'Werdegang & CV',
      publications: 'Publikationen',
      pillars: 'Schwerpunkte',
      contact: 'Kontakt',
      apiLive: 'API Online',
      apiConnecting: 'Verbinde...',
      apiOffline: 'API Offline',
      linkedin: 'LinkedIn ↗',
    },
    hero: {
      badge: 'Dr. rer. pol. Carl Heckmann',
      subtitle: 'Führungskraft • Wissenschaftler • Experte für Software & BPO',
      titleLine1: 'Die Zukunft gestalten in',
      titleGradient: 'Energiewirtschaft, Prozess-Ambidextrie & KI',
      subhead:
        'Verbindung von akademischer Forschung mit industrieller Software- und BPO-Umsetzung. Prokurist und Bereichsleiter Produkt- und Implementierungsmanagement bei der hsag Heidelberger Services AG, Arbeitskreisleiter beim BEMD e.V. sowie Forscher und Lehrbeauftragter am Karlsruher Institut für Technologie (KIT).',
      affilHsag: '🏛️ hsag Heidelberger Services AG',
      affilBemd: '⚖️ BEMD e.V.',
      affilKit: '🎓 KIT (Karlsruhe)',
      affilMannheim: '📜 Univ. Mannheim (Dr. rer. pol.)',
      btnCv: '📜 Werdegang & CV',
      btnPublications: '📚 Publikationen (130+ Zitationen)',
      btnPillars: '⚡ Strategische Schwerpunkte',
      btnLinkedin: 'LinkedIn Profil ↗',
      portraitBadge: 'Aktive Führung & Beratung',
      portraitName: 'Dr. Carl Heckmann',
      portraitRole: 'Energy IT Executive & Research Fellow',
    },
    about: {
      tag: 'Führungsprofil',
      heading: 'Wissenschaftliche Tiefe trifft industrielle Umsetzungsstärke',
      lead:
        'Ich bewege mich an der Schnittstelle von Unternehmenssoftware, energiewirtschaftlicher Regulatorik und autonomen KI-Systemen.',
      paragraph1:
        'Seit meiner Promotion (Dr. rer. pol.) in Wirtschaftsinformatik an der Universität Mannheim bis hin zu meiner Führungsverantwortung als Prokurist bei der hsag Heidelberger Services AG steht eine Kernfrage im Mittelpunkt meiner Arbeit:',
      quote:
        '„Wie gelingt es hochgradig regulierten Organisationen, maximale operative Ausfallsicherheit zu garantieren und gleichzeitig radikale digitale Innovationen schnell zu realisieren?“',
      paragraph2:
        'Die Antwort lautet IT-Ambidextrie. In der Energiewirtschaft bedeutet dies: heute unternehmenskritische Abrechnungs- und Marktkommunikationsprozesse sicher zu skalieren, während man gleichzeitig native 15-Minuten-Zeitreihenverarbeitung (§ 41a EnWG), intelligente Messsysteme (iMSys) und autonome KI-Agenten für morgen baut.',
      stat1Number: '10+',
      stat1Label: 'Jahre Energie-IT & BPO',
      stat1Detail: 'Transformation von Abrechnungs-, Clearing- und Marktprozessen für Stadtwerke & Versorger.',
      stat2Number: '130+',
      stat2Label: 'Wissenschaftliche Zitationen',
      stat2Detail: 'Forschungsarbeiten zu IT-Ambidextrie und interaktiven Energie-Feedback-Systemen.',
      stat3Number: '3',
      stat3Label: 'Institutionelle Säulen',
      stat3Detail: 'Führung (hsag) • Branchenstandards (BEMD) • Forschung & Lehre (KIT).',
    },
    experience: {
      tag: 'Karriere & Führungsverantwortung',
      heading: 'Affiliationen & Werdegang',
      desc:
        'Ein synergetischer Weg aus hochrangiger industrieller Führungsverantwortung im Bereich Software & BPO und anspruchsvoller akademischer Forschung an führenden Institutionen.',
      officialSiteBtn: 'Offizielle Website ↗',
      affiliations: [
        {
          id: 'hsag',
          name: 'hsag Heidelberger Services AG',
          role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
          period: 'Führungsebene',
          badge: 'Software & BPO-Exzellenz',
          description:
            'Leitung der Produktstrategie, Software-Implementierungen und Business Process Outsourcing (BPO) Lösungen für die deutsche Energiewirtschaft. Konzeption moderner Cloud-Billing-Module, hochvolumiger Marktkommunikation und automatisierter Clearing-Engines für Stadtwerke und überregionale Energieversorger.',
          link: 'https://www.hsag.info',
          highlights: [
            'Rollout NextGen Energy Billing Engine (EBE-DE)',
            'Implementierung dynamischer Tarife (§ 41a EnWG)',
            'Dunkelverarbeitung (STP) für Lieferantenwechsel & Meter-to-Cash',
            'Direkte unternehmerische Ergebnis- und Lieferverantwortung',
          ],
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
          highlights: [
            'Standardisierung von BPO-Leistungskatalogen für Stadtwerke',
            'Regulatorische Abstimmung mit BNetzA MaKo & AS4-Vorgaben',
            'Branchenübergreifende Expertenpanels und Best-Practice-Frameworks',
          ],
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
          highlights: [
            'Woche des Wissens Mensch x KI (KI als Kollege)',
            'Design von Conversational Agents für Energie-Feedback',
            'Lehrveranstaltungen auf Master- und Doktorandenebene zu IS-Methoden',
          ],
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
          highlights: [
            'Promotion (Dr. rer. pol.) mit Auszeichnung',
            'Empirische Großstudien zu IT-Fähigkeiten in Geschäftsprozessen',
            'Publikationen auf internationalen Spitzenkonferenzen (ICIS / ECIS)',
          ],
        },
      ],
    },
    publications: {
      tag: 'Wissenschaftliche Publikationen & Forschung',
      heading: 'Ausgewählte Forschung & Publikationen',
      desc:
        'Direkte Links zu begutachteten Journal-Artikeln, Konferenzbänden und Buchbeiträgen. Über 130 Zitationen in den Bereichen IT-Ambidextrie und Energieinformatik.',
      filterAll: 'Alle Direktlinks',
      filterAmbidexterity: '⚖️ IT-Ambidextrie',
      filterEnergy: '⚡ Energie & Smart Metering',
      filterAi: '🤖 KI & Conversational Agents',
      calloutTitle: 'Forschungsprofile & Zitationsmetriken',
      calloutText1: 'Metriken, Volltexte und das wissenschaftliche Netzwerk direkt einsehen auf dem ',
      calloutLinkRg: 'ResearchGate Profil (Dr. Carl Heckmann) ↗',
      calloutText2: ' sowie über das ',
      calloutLinkKit: 'KIT Institut für Informationswirtschaft und Marketing (IISM) ↗',
      items: [
        {
          id: 'pub-balance',
          title: 'IT ambidexterity for business processes: the importance of balance',
          year: 2018,
          authors: 'Carl Simon Heckmann, Alexander Maedche',
          venue: 'Business Process Management Journal, Vol. 24 No. 4, pp. 977-998',
          category: 'ambidexterity',
          categoryLabel: 'IT-Ambidextrie',
          abstract:
            'Etabliert das Business Process IT (BPIT) Capability Framework und belegt empirisch, dass eine bewusste Balance zwischen exploitativer und explorativer IT-Nutzung signifikante Performance-Vorteile erzielt.',
          primaryLink: {
            label: 'Emerald Insight (DOI: 10.1108/BPMJ-04-2016-0078) ↗',
            url: 'https://doi.org/10.1108/BPMJ-04-2016-0078',
          },
          secondaryLink: {
            label: 'ResearchGate Volltext ↗',
            url: 'https://www.researchgate.net/publication/325785025_IT_ambidexterity_for_business_processes_the_importance_of_balance',
          },
        },
        {
          id: 'pub-performance',
          title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
          year: 2015,
          authors: 'Carl Heckmann',
          venue: '23rd European Conference on Information Systems (ECIS 2015), Münster',
          category: 'ambidexterity',
          categoryLabel: 'IT-Ambidextrie',
          abstract:
            'Umfassende quantitative empirische Studie in der deutschen Versorgungswirtschaft, die untersucht, wie IT-Ambidextrie die Prozessagilität und Kosteneffizienz determiniert.',
          primaryLink: {
            label: 'AIS eLibrary (Direktzugriff) ↗',
            url: 'https://aisel.aisnet.org/ecis2015_cr/84/',
          },
          secondaryLink: {
            label: 'ResearchGate ↗',
            url: 'https://www.researchgate.net/publication/282772591_The_Impact_of_Business_Process_IT_Ambidexterity_on_Business_Process_Performance',
          },
        },
        {
          id: 'pub-conversational',
          title: 'Designing Conversational Agents for Energy Feedback',
          year: 2018,
          authors: 'Ulrich Gnewuch, Stefan Morana, Carl Heckmann, Alexander Maedche',
          venue: 'Designing for a Digital and Globalized World (LNCS, Vol. 10844), Springer, pp. 18-33',
          category: 'ai',
          categoryLabel: 'Conversational AI',
          abstract:
            'Leitet Gestaltungsprinzipien für dialogbasierte KI-Agenten im Energie-Feedback ab und weist signifikant höhere Nutzerakzeptanz und Verhaltensänderungen gegenüber statischen Dashboards nach.',
          primaryLink: {
            label: 'SpringerLink (DOI: 10.1007/978-3-319-91800-6_2) ↗',
            url: 'https://doi.org/10.1007/978-3-319-91800-6_2',
          },
          secondaryLink: {
            label: 'ResearchGate Volltext ↗',
            url: 'https://www.researchgate.net/publication/325437810_Designing_Conversational_Agents_for_Energy_Feedback',
          },
        },
        {
          id: 'pub-smarticity',
          title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
          year: 2015,
          authors: 'Carl Heckmann, Alexander Mädche',
          venue: 'Energy, Science, Technology 2015, Karlsruhe, Germany',
          category: 'energy',
          categoryLabel: 'Energie & Smart Metering',
          abstract:
            'Präsentiert die SMARTICITY-Architektur: Kopplung von Smart-Meter-Gateway-Lastgängen mit granularen Tarifierungsalgorithmen zur Echtzeit-Kostentransparenz und verbraucherseitigen Lastverschiebung.',
          primaryLink: {
            label: 'ResearchGate (Publikation) ↗',
            url: 'https://www.researchgate.net/publication/282772583_SMARTICITY_-_A_Feedback_System_for_Energy_Consumption_and_Costs',
          },
        },
        {
          id: 'pub-gamified-feedback',
          title: 'The Energy Revolution towards Smart Meters and the Neglected User',
          year: 2016,
          authors: 'Diaa Abdelaziz, Carl Heckmann, Alexander Mädche',
          venue: 'Multikonferenz Wirtschaftsinformatik (MKWI 2016), Ilmenau',
          category: 'energy',
          categoryLabel: 'Smart Metering UX',
          abstract:
            'Untersucht Herausforderungen bei der Endkunden-Adoption von Smart Metern und stellt einen spielerischen Feedback-System-Prototyp zur Steigerung des Energiebewusstseins vor.',
          primaryLink: {
            label: 'ResearchGate (Publikation) ↗',
            url: 'https://www.researchgate.net/publication/301648079_The_energy_revolution_towards_smart_meters_and_the_neglected_user_a_gamified_energy_feedback_system_prototype',
          },
        },
        {
          id: 'pub-human-ai-2026',
          title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
          year: 2026,
          authors: 'Carl Heckmann',
          venue: 'KIT Woche des Wissens Mensch x KI (Karlsruher Institut für Technologie)',
          category: 'ai',
          categoryLabel: 'Mensch-KI-Kollaboration',
          abstract:
            'Analysiert die Einbindung autonomer Agenten-Schwärme in wissensintensive Unternehmensprozesse mit Fokus auf Vertrauensgrenzen, Human-in-the-Loop und organisatorische Ambidextrie.',
          primaryLink: {
            label: 'Karlsruhe.digital Veranstaltungsübersicht ↗',
            url: 'https://karlsruhe.digital/event/woche-des-wissens-mensch-x-ki/',
          },
          secondaryLink: {
            label: 'KIT Human-Centered Systems Lab ↗',
            url: 'https://h-cs.iism.kit.edu/',
          },
        },
      ],
    },
    pillars: {
      tag: 'Fachliche Kernkompetenzen',
      heading: 'Strategische Schwerpunkte & Führungsthemen',
      desc:
        'Verbindung von strategischer Geschäftsführung mit tiefer technologischer Meisterschaft zur Bewältigung der anspruchsvollsten Herausforderungen moderner Infrastrukturen.',
      filterAll: 'Alle Fachbereiche',
      filterUtilities: '⚡ Energiewirtschaft & IT',
      filterProcess: '⚙️ Prozessoptimierung',
      filterAi: '🤖 Autonome KI-Agenten',
      items: [
        {
          id: 'utilities',
          category: 'utilities',
          badge: 'Energie-IT & Wende',
          title: 'Energiewirtschaft & NextGen Märkte',
          subtitle: 'Dynamische Tarife, Smart Metering (iMSys) & Skalierbare Abrechnung',
          image: '/images/smart-energy-grid.jpg',
          imageAlt: 'Smart Energy Grid und dynamische Stromtarife Architektur',
          description:
            'Der deutsche und europäische Energiemarkt vollzieht den Wandel zur hochgranularen 15-Minuten-Bilanzierung. Dr. Carl Heckmann ist spezialisiert auf cloud-native Billing-Architekturen nach § 41a EnWG, direkte Spotmarkt-Preiskopplung (EPEX Spot) und Smart-Meter-Gateway-Kommunikation.',
          icon: '⚡',
          accent: 'var(--accent-cyan)',
          subItems: [
            {
              title: 'NextGen Energy Billing Engine',
              desc: 'Modulare Zeitreihen-Tarifierungs- und Invoicing-Engine als Ersatz für monolithische Altsysteme.',
            },
            {
              title: 'Dynamische Tarife (§ 41a EnWG)',
              desc: 'Algorithmische 15-Minuten-Intervallabrechnung gekoppelt an Day-Ahead- und Intraday-Börsenstrompreise.',
            },
            {
              title: 'Smart-Meter-Gateway-Anbindung',
              desc: 'Hochperformante Verarbeitung BSI TR-03109 konformer iMSys-Messdaten (TAF 1 bis TAF 14).',
            },
            {
              title: 'Regulatorik & Marktkommunikation',
              desc: 'Vollständige Einhaltung von BNetzA MaKo 2024/2026, AS4-Verschlüsselung, EDIFACT, XRechnung und GoBD.',
            },
          ],
          stats: [
            { label: 'Abrechnungstakt', value: '15 Min' },
            { label: 'Regulatorischer Rahmen', value: 'EnWG / MsbG' },
            { label: 'Daten-Ingestion', value: 'TAF 1–14' },
          ],
        },
        {
          id: 'process',
          category: 'process',
          badge: 'Operative Exzellenz',
          title: 'Geschäftsprozessoptimierung',
          subtitle: 'IT-Ambidextrie, BPO-Modernisierung & Lean Scaling',
          image: '/images/process-optimization.jpg',
          imageAlt: 'IT-Ambidextrie: Balance aus Optimierung und Innovation',
          description:
            'Fundiert durch Promotionsforschung am Karlsruher Institut für Technologie (KIT) und an der Universität Mannheim treibt Dr. Heckmann IT-Ambidextrie voran – die Kunst, traditionelle Effizienz (Exploitation) zu maximieren und gleichzeitig agile digitale Innovation (Exploration) umzusetzen.',
          icon: '⚙️',
          accent: 'var(--accent-primary)',
          subItems: [
            {
              title: 'Führung in IT-Ambidextrie',
              desc: 'Auflösung von Schnittstellenproblemen zwischen starren Kern-ERPs und agilen Cloud-Microservices.',
            },
            {
              title: 'Business Process Outsourcing (BPO)',
              desc: 'End-to-End automatisierte Workflows für Lieferantenwechsel, Klärfallbearbeitung und Onboarding.',
            },
            {
              title: 'Dunkelverarbeitung (STP)',
              desc: 'Beseitigung manueller Abstimmungsrückstände durch deterministische Regelwerke und Plausibilitätsprüfungen.',
            },
            {
              title: 'Branchenverband BEMD',
              desc: 'Aktive Gremienarbeit zur Standardisierung von BPO-Leistungskatalogen für deutsche Energieversorger.',
            },
          ],
          stats: [
            { label: 'Akademische Basis', value: 'KIT / Mannheim' },
            { label: 'Leitdoktrin', value: 'Ambidextrie' },
            { label: 'Prozessziel', value: 'Reibungslose Dunkelverarbeitung' },
          ],
        },
        {
          id: 'ai',
          category: 'ai',
          badge: 'Agentic AI Architekturen',
          title: 'Autonome KI-Agenten',
          subtitle: 'Agenten-Orchestrierung & Enterprise Reasoning Swarms',
          image: '/images/autonomous-ai-agents.jpg',
          imageAlt: 'Autonomes Multi-Agenten-KI-System und Workflow Ingestion',
          description:
            'Über statische Prognosemodelle hinaus zu deterministischen Agenten-Workflows. Konzeption von Multi-Agenten-Schwärmen mit spezialisierten Tools zur Klärung von Rechnungsdifferenzen, Telemetrieabgleich und dialogbasiertem Energie-Feedback für Endverbraucher.',
          icon: '🤖',
          accent: 'var(--accent-fuchsia)',
          subItems: [
            {
              title: 'Kollaborative Multi-Agenten-Schwärme',
              desc: 'Koordinierte Agenten (Ingest, Sentinel, Reconciler) zur asynchronen Validierung komplexer Prozesse.',
            },
            {
              title: 'Autonome Klärfallbehebung',
              desc: 'Selbstheilende Fehlerbehandlung in hochvolumigen Energiedatenströmen mit revisionssicherem Protokoll.',
            },
            {
              title: 'Conversational Utility Agents',
              desc: 'Natürlichsprachliche Assistenten für Kunden zu Verbrauchsanalysen, Tarifwahl und Einsparpotenzialen.',
            },
            {
              title: 'Deterministische Leitplanken',
              desc: 'Hybride Architekturen aus LLM-Reasoning, strenger finanzrechtlicher GoBD-Konformität und Human-in-the-Loop.',
            },
          ],
          stats: [
            { label: 'Paradigma', value: 'Multi-Agenten' },
            { label: 'Ausführung', value: 'Autonom' },
            { label: 'Sicherheitsleitplanken', value: 'Deterministisch' },
          ],
        },
      ],
    },
    stack: {
      tag: 'Technologie-Stack',
      heading: 'Modern, Modular & Skalierbar',
      desc: 'Sorgfältig ausgewählte Industriestandards und Frameworks für maximale Zuverlässigkeit und Zukunftssicherheit.',
      groups: [
        {
          title: 'Frontend-Ökosystem',
          icon: '🎨',
          items: [
            'React 19',
            'TypeScript 5.x',
            'Vite 6',
            'Vanilla CSS3',
            'Google Fonts (Plus Jakarta Sans)',
            'JetBrains Mono',
          ],
        },
        {
          title: 'Backend-Ökosystem',
          icon: '⚙️',
          items: [
            'NestJS 12',
            'Node.js 24 LTS',
            'Swagger / OpenAPI',
            'Express Platform',
            'Vitest Test Runner',
            'Oxlint / Prettier',
          ],
        },
        {
          title: 'DevOps & Tooling',
          icon: '🚀',
          items: [
            'Git Versionskontrolle',
            'GitHub CLI (gh)',
            'Concurrently Monorepo',
            'RESTful Standards',
            'Clean Architecture',
            'oubou68 Production DNS',
          ],
        },
      ],
    },
    telemetry: {
      title: 'Live Backend-Telemetrie',
      desc: 'Echtzeit-Metriken direkt von der NestJS REST API',
      btnRefresh: '↻ Ping aktualisieren',
      btnRawJson: 'Roh-JSON ↗',
      statusLabel: 'Dienst-Status',
      statusHealthy: '● Betriebsbereit',
      statusConnecting: 'Verbinde...',
      statusOffline: '○ Nicht erreichbar',
      serviceFallback: 'NestJS Core Engine',
      latencyLabel: 'API-Latenz',
      latencySub: 'Round-Trip Messung',
      uptimeLabel: 'Laufzeit',
      uptimeSub: 'Kontinuierliche Ausführung',
      memoryLabel: 'Heap-Speicher',
      memorySubTotal: 'Gesamt',
      memorySubFallback: 'V8 Garbage Collected',
    },
    contact: {
      tag: 'Direkter Austausch',
      heading: 'Kontakt mit Dr. Carl Heckmann aufnehmen',
      desc:
        'Initiieren Sie ein Gespräch bezüglich Executive Advisory, IT-Transformation in der Energiewirtschaft, IT-Ambidextrie oder Multi-Agenten-Systemen.',
      infoTitle: 'Direkte Kommunikation',
      infoLead:
        'Übermitteln Sie Ihre Anfrage über diese verschlüsselte Full-Stack-Pipeline direkt an das NestJS Unternehmens-Backend.',
      metaProfileTitle: 'Berufliches Profil',
      metaFocusTitle: 'Schwerpunktthemen',
      metaFocusDesc: 'Energiewirtschaft • IT-Ambidextrie • Autonome KI-Schwärme',
      metaLocationTitle: 'Standort & Organisation',
      metaLocationDesc: 'Heidelberg / Deutschland • hsag Heidelberger Services AG • BEMD',
      labelName: 'Ihr vollständiger Name',
      placeholderName: 'z.B. Dr. Julia Becker',
      labelEmail: 'Geschäftliche E-Mail',
      placeholderEmail: 'z.B. j.becker@unternehmen.de',
      labelTopic: 'Themengebiet',
      topics: [
        {
          value: 'Utilities & Dynamische Tarife (§ 41a EnWG)',
          label: '⚡ Energiewirtschaft & Dynamische Tarife (§ 41a EnWG)',
        },
        {
          value: 'Geschäftsprozessoptimierung & BPO',
          label: '⚙️ Geschäftsprozessoptimierung & BPO',
        },
        {
          value: 'Autonome KI-Agenten-Architekturen',
          label: '🤖 Autonome KI-Agenten-Architekturen',
        },
        {
          value: 'Executive Advisory & Keynotes',
          label: '🎤 Executive Advisory & Keynotes',
        },
      ],
      labelMessage: 'Projektbeschreibung oder Nachricht',
      placeholderMessage: 'Beschreiben Sie Ihre Initiative, Zielsetzungen oder Beratungsbedarfe...',
      btnSubmit: 'Nachricht an Dr. Heckmann senden ➔',
      btnSubmitting: 'Übertrage...',
      alertSuccessDefault: 'Vielen Dank! Ihre Nachricht wurde erfolgreich übermittelt.',
      alertErrorDefault: 'Fehler beim Senden der Nachricht. Bitte versuchen Sie es erneut.',
      alertNetworkError: 'Backend nicht erreichbar unter',
    },
    footer: {
      title: 'Dr. Carl Heckmann',
      desc: 'Führungskraft in Energie-IT, Prozessoptimierung & Autonomen KI-Agenten.',
      credits: '© {year} Dr. Carl Heckmann (oubou68.de). Entwickelt mit React 19 & NestJS 12.',
      colPillarsTitle: 'Schwerpunkte',
      colPlatformTitle: 'Plattform',
      colConnectTitle: 'Netzwerk',
      linkUtilities: 'Energiewirtschaft',
      linkProcess: 'Prozessoptimierung',
      linkAi: 'Autonome KI-Agenten',
      linkTelemetry: 'Live-Telemetrie',
      linkSwagger: 'OpenAPI Swagger',
      linkLinkedin: 'LinkedIn Profil ↗',
      linkGithub: 'GitHub (@oubou68) ↗',
      linkContact: 'Kontaktformular',
    },
  },
  en: {
    nav: {
      brandSubtitle: 'Heckmann',
      about: 'About',
      experience: 'Experience & CV',
      publications: 'Publications',
      pillars: 'Pillars',
      contact: 'Contact',
      apiLive: 'API Live',
      apiConnecting: 'Connecting...',
      apiOffline: 'API Offline',
      linkedin: 'LinkedIn ↗',
    },
    hero: {
      badge: 'Dr. rer. pol. Carl Heckmann',
      subtitle: 'Executive • Researcher • Software & BPO Leader',
      titleLine1: 'Engineering the Future of',
      titleGradient: 'Utilities, Process Ambidexterity & AI',
      subhead:
        'Bridging academic research with industrial software and BPO execution. Serving as Prokurist and Head of Product & Implementation at hsag Heidelberger Services AG, Working Group Leader at BEMD e.V., and Researcher/Lecturer at the Karlsruhe Institute of Technology (KIT).',
      affilHsag: '🏛️ hsag Heidelberger Services AG',
      affilBemd: '⚖️ BEMD e.V.',
      affilKit: '🎓 KIT (Karlsruhe)',
      affilMannheim: '📜 Univ. Mannheim (Dr. rer. pol.)',
      btnCv: '📜 CV & Affiliations',
      btnPublications: '📚 Publications (130+ Citations)',
      btnPillars: '⚡ Strategic Pillars',
      btnLinkedin: 'LinkedIn Profile ↗',
      portraitBadge: 'Active Leadership & Advisory',
      portraitName: 'Dr. Carl Heckmann',
      portraitRole: 'Energy IT Executive & Research Fellow',
    },
    about: {
      tag: 'Executive Profile',
      heading: 'Bridging Rigorous Science with Industrial Execution',
      lead:
        'I operate at the intersection of enterprise software, regulatory energy market dynamics, and advanced autonomous systems.',
      paragraph1:
        'Throughout my career—from earning my doctorate (Dr. rer. pol.) in Information Systems at the University of Mannheim to executive leadership as Prokurist at hsag Heidelberger Services AG—my central mission has been answering one critical question:',
      quote:
        '“How can complex, highly regulated organizations maintain rock-solid operational stability while simultaneously executing radical digital innovation?”',
      paragraph2:
        'The answer lies in IT Ambidexterity. In the utility industry, this means scaling mission-critical billing and market communications today, while proactively engineering native 15-minute time-series processing (§ 41a EnWG), smart meter gateway rollouts (iMSys), and autonomous AI agent workflows for tomorrow.',
      stat1Number: '10+',
      stat1Label: 'Years in Energy IT & BPO',
      stat1Detail: 'Transforming billing, clearing, and market processes for German utilities.',
      stat2Number: '130+',
      stat2Label: 'Academic Citations',
      stat2Detail: 'Research on IT Ambidexterity and Conversational Energy Feedback Systems.',
      stat3Number: '3',
      stat3Label: 'Core Institutional Pillars',
      stat3Detail: 'Executive (hsag) • Standards (BEMD) • Science & Teaching (KIT).',
    },
    experience: {
      tag: 'Career & Leadership',
      heading: 'Affiliations & Executive Trajectory',
      desc:
        'A cohesive trajectory uniting high-level industry leadership in software and BPO with rigorous academic research at Germany’s premier institutions.',
      officialSiteBtn: 'Official Site ↗',
      affiliations: [
        {
          id: 'hsag',
          name: 'hsag Heidelberger Services AG',
          role: 'Prokurist & Bereichsleiter Produkt- und Implementierungsmanagement',
          period: 'Executive Leadership',
          badge: 'Software & BPO Execution',
          description:
            'Leading product strategy, software implementations, and Business Process Outsourcing (BPO) solutions tailored for the German energy and utilities market. Architecting modern cloud billing modules, high-volume market communication, and automated clearing engines for municipal utilities (Stadtwerke) and national energy suppliers.',
          link: 'https://www.hsag.info',
          highlights: [
            'NextGen Energy Billing Engine (EBE-DE) rollouts',
            'Dynamic tariff implementation (§ 41a EnWG)',
            'Straight-through processing for supplier switching and meter-to-cash',
            'Direct executive accountability for product & service delivery',
          ],
        },
        {
          id: 'bemd',
          name: 'BEMD e.V. (Bundesverband der Energiemarktdienstleister)',
          role: 'Arbeitskreisleiter & Industry Expert',
          period: 'Committee & Standards',
          badge: 'Industry Benchmark',
          description:
            'Guiding industry-wide harmonization as a working group leader. Defining standardized service catalogs (Standardleistungsverzeichnis) and process benchmarks for German energy market service providers.',
          link: 'https://www.bemd.de',
          highlights: [
            'Standardization of BPO service catalogs for utilities',
            'Regulatory alignment with BNetzA MaKo & AS4 guidelines',
            'Cross-industry expert panels and best-practice frameworks',
          ],
        },
        {
          id: 'kit',
          name: 'Karlsruhe Institute of Technology (KIT)',
          role: 'Scientific Researcher & Lecturer (IISM / WIN)',
          period: 'Academic Appointment',
          badge: 'Research & Human-AI',
          description:
            'Conducting pioneering research at the Institute of Information Systems and Marketing (IISM) and Human-Centered Systems Lab. Investigating the organizational impact of AI as a coworker, smart energy feedback systems, and IT Ambidexterity.',
          link: 'https://www.kit.edu',
          highlights: [
            'Knowledge Week Human x AI (AI as Colleague)',
            'Design of Conversational Agents for Energy Feedback',
            'Doctoral & Master-level coursework on IS research methods',
          ],
        },
        {
          id: 'mannheim',
          name: 'University of Mannheim',
          role: 'Dr. rer. pol. (Doctorate in Information Systems)',
          period: 'Doctoral Foundation',
          badge: 'Dr. rer. pol.',
          description:
            'Completed doctoral dissertation on "IT Ambidexterity in Business Processes", establishing quantitative and qualitative models that prove how balancing operational efficiency (exploitation) with rapid innovation (exploration) delivers market-leading resilience.',
          link: 'https://www.uni-mannheim.de',
          highlights: [
            'Doctorate (Dr. rer. pol.) with distinction',
            'Empirical studies on business process IT capabilities',
            'International conference publications (ICIS / ECIS)',
          ],
        },
      ],
    },
    publications: {
      tag: 'Scientific & Academic Impact',
      heading: 'Selected Publications & Research',
      desc:
        'Direct links to peer-reviewed journal papers, conference proceedings, and book chapters. Over 130+ scientific citations across IT Ambidexterity and Energy Informatics.',
      filterAll: 'All Direct Links',
      filterAmbidexterity: '⚖️ IT Ambidexterity',
      filterEnergy: '⚡ Energy & Smart Metering',
      filterAi: '🤖 AI & Conversational Agents',
      calloutTitle: 'Direct Research Profiles & Citations',
      calloutText1: 'Inspect citation metrics, full texts, and co-author networks directly on my ',
      calloutLinkRg: 'ResearchGate Profile (Dr. Carl Heckmann) ↗',
      calloutText2: ' or via the ',
      calloutLinkKit: 'KIT Institute of Information Systems and Marketing (IISM) ↗',
      items: [
        {
          id: 'pub-balance',
          title: 'IT ambidexterity for business processes: the importance of balance',
          year: 2018,
          authors: 'Carl Simon Heckmann, Alexander Maedche',
          venue: 'Business Process Management Journal, Vol. 24 No. 4, pp. 977-998',
          category: 'ambidexterity',
          categoryLabel: 'IT Ambidexterity',
          abstract:
            'Introduces the Business Process IT (BPIT) Capability Framework and proves empirically that maintaining a conscious balance between exploitative and explorative IT investments drives market-leading performance.',
          primaryLink: {
            label: 'Emerald Insight (DOI: 10.1108/BPMJ-04-2016-0078) ↗',
            url: 'https://doi.org/10.1108/BPMJ-04-2016-0078',
          },
          secondaryLink: {
            label: 'ResearchGate Full-Text ↗',
            url: 'https://www.researchgate.net/publication/325785025_IT_ambidexterity_for_business_processes_the_importance_of_balance',
          },
        },
        {
          id: 'pub-performance',
          title: 'The Impact of Business Process IT Ambidexterity on Business Process Performance',
          year: 2015,
          authors: 'Carl Heckmann',
          venue: '23rd European Conference on Information Systems (ECIS 2015), Münster',
          category: 'ambidexterity',
          categoryLabel: 'IT Ambidexterity',
          abstract:
            'A comprehensive quantitative empirical study in the German utilities sector testing how combinations of explorative and exploitative IT capabilities impact process agility and cost performance.',
          primaryLink: {
            label: 'AIS eLibrary (Direct Access) ↗',
            url: 'https://aisel.aisnet.org/ecis2015_cr/84/',
          },
          secondaryLink: {
            label: 'ResearchGate ↗',
            url: 'https://www.researchgate.net/publication/282772591_The_Impact_of_Business_Process_IT_Ambidexterity_on_Business_Process_Performance',
          },
        },
        {
          id: 'pub-conversational',
          title: 'Designing Conversational Agents for Energy Feedback',
          year: 2018,
          authors: 'Ulrich Gnewuch, Stefan Morana, Carl Heckmann, Alexander Maedche',
          venue: 'Designing for a Digital and Globalized World (LNCS, Vol. 10844), Springer, pp. 18-33',
          category: 'ai',
          categoryLabel: 'Conversational AI',
          abstract:
            'Derives design principles for conversational agents providing interactive household energy feedback, demonstrating high user receptivity and actionable consumption nudging compared to static dashboards.',
          primaryLink: {
            label: 'SpringerLink (DOI: 10.1007/978-3-319-91800-6_2) ↗',
            url: 'https://doi.org/10.1007/978-3-319-91800-6_2',
          },
          secondaryLink: {
            label: 'ResearchGate Full-Text ↗',
            url: 'https://www.researchgate.net/publication/325437810_Designing_Conversational_Agents_for_Energy_Feedback',
          },
        },
        {
          id: 'pub-smarticity',
          title: 'SMARTICITY – A Feedback System for Energy Consumption and Costs',
          year: 2015,
          authors: 'Carl Heckmann, Alexander Mädche',
          venue: 'Energy, Science, Technology 2015, Karlsruhe, Germany',
          category: 'energy',
          categoryLabel: 'Energy & Smart Metering',
          abstract:
            'Presents the SMARTICITY architecture: integrating smart meter gateway lastgänge with granular tariff rating algorithms to provide real-time cost visibility and demand-side energy optimization.',
          primaryLink: {
            label: 'ResearchGate (Direct Publication) ↗',
            url: 'https://www.researchgate.net/publication/282772583_SMARTICITY_-_A_Feedback_System_for_Energy_Consumption_and_Costs',
          },
        },
        {
          id: 'pub-gamified-feedback',
          title: 'The Energy Revolution towards Smart Meters and the Neglected User',
          year: 2016,
          authors: 'Diaa Abdelaziz, Carl Heckmann, Alexander Mädche',
          venue: 'Multikonferenz Wirtschaftsinformatik (MKWI 2016), Ilmenau',
          category: 'energy',
          categoryLabel: 'Smart Metering UX',
          abstract:
            'Evaluates consumer engagement challenges during smart meter rollouts and presents a gamified feedback system prototype tailored to increase household energy awareness and tariff responsiveness.',
          primaryLink: {
            label: 'ResearchGate (Direct Publication) ↗',
            url: 'https://www.researchgate.net/publication/301648079_The_energy_revolution_towards_smart_meters_and_the_neglected_user_a_gamified_energy_feedback_system_prototype',
          },
        },
        {
          id: 'pub-human-ai-2026',
          title: 'AI as a Colleague: Psychological and Organizational Dynamics of Human x AI Integration',
          year: 2026,
          authors: 'Carl Heckmann',
          venue: 'KIT Knowledge Week Human x AI (Karlsruhe Institute of Technology)',
          category: 'ai',
          categoryLabel: 'Human x AI Swarms',
          abstract:
            'Analyzes the integration of autonomous agent swarms into knowledge-intensive enterprise workflows, examining trust boundaries, human-in-the-loop oversight, and organizational ambidexterity.',
          primaryLink: {
            label: 'Karlsruhe.digital Event Session ↗',
            url: 'https://karlsruhe.digital/event/woche-des-wissens-mensch-x-ki/',
          },
          secondaryLink: {
            label: 'KIT Human-Centered Systems Lab ↗',
            url: 'https://h-cs.iism.kit.edu/',
          },
        },
      ],
    },
    pillars: {
      tag: 'Core Areas of Impact',
      heading: 'Strategic Focus & Domain Leadership',
      desc:
        'Bridging senior executive leadership with deep technical mastery to solve the most demanding challenges in modern infrastructure.',
      filterAll: 'All Expertise',
      filterUtilities: '⚡ Utilities & Energy',
      filterProcess: '⚙️ Process Optimization',
      filterAi: '🤖 AI Agents',
      items: [
        {
          id: 'utilities',
          category: 'utilities',
          badge: 'Energy IT & Transition',
          title: 'Utilities & NextGen Energy Markets',
          subtitle: 'Dynamic Pricing, Smart Metering (iMSys) & Scalable Billing Engines',
          image: '/images/smart-energy-grid.jpg',
          imageAlt: 'Smart Energy Grid and Dynamic Electricity Tariff Architecture',
          description:
            'The German and European energy market is transitioning to hyper-granular 15-minute settlement. Dr. Carl Heckmann specializes in engineering cloud-native billing architectures compliant with § 41a EnWG, direct spot-market price coupling (EPEX Spot), and smart meter gateway communication.',
          icon: '⚡',
          accent: 'var(--accent-cyan)',
          subItems: [
            {
              title: 'NextGen Energy Billing Engine',
              desc: 'Modular time-series rating and invoicing engine replacing legacy monolithic billing platforms.',
            },
            {
              title: 'Dynamic Tariffs (§ 41a EnWG)',
              desc: 'Algorithmic 15-minute interval tariff calculation connected directly to Day-Ahead and Intraday spot prices.',
            },
            {
              title: 'Smart Meter Gateway Ingestion',
              desc: 'High-throughput parsing of BSI TR-03109 compliant iMSys meters (TAF 1 to TAF 14).',
            },
            {
              title: 'Regulatory & Market Communication',
              desc: 'Full compliance with BNetzA MaKo 2024/2026, AS4 security, EDIFACT, XRechnung, and GoBD standards.',
            },
          ],
          stats: [
            { label: 'Settlement Resolution', value: '15 Min' },
            { label: 'Regulatory Scope', value: 'EnWG / MsbG' },
            { label: 'Data Ingestion', value: 'TAF 1–14' },
          ],
        },
        {
          id: 'process',
          category: 'process',
          badge: 'Operational Excellence',
          title: 'Business Process Optimization',
          subtitle: 'IT Ambidexterity, BPO Modernization & Lean Scaling',
          image: '/images/process-optimization.jpg',
          imageAlt: 'IT Ambidexterity: Balancing Optimization and Innovation',
          description:
            'Rooted in doctoral research at the Karlsruhe Institute of Technology (KIT) and University of Mannheim, Dr. Heckmann pioneers IT Ambidexterity—the strategic discipline of simultaneously maximizing legacy operational efficiency (exploitation) while executing high-velocity digital innovation (exploration).',
          icon: '⚙️',
          accent: 'var(--accent-primary)',
          subItems: [
            {
              title: 'IT Ambidexterity Leadership',
              desc: 'Resolving organizational friction between rigid legacy ERPs and agile cloud-native microservices.',
            },
            {
              title: 'Business Process Outsourcing (BPO)',
              desc: 'Architecting end-to-end automated workflows for supplier switching, clearing, and customer onboarding.',
            },
            {
              title: 'Straight-Through Processing (STP)',
              desc: 'Eliminating manual reconciliation backlogs with deterministic rule engines and automated plausibility checks.',
            },
            {
              title: 'Industry Association & BEMD',
              desc: 'Active leadership in industry workgroups shaping standardized service catalogs for German energy suppliers.',
            },
          ],
          stats: [
            { label: 'Academic Root', value: 'KIT / Mannheim' },
            { label: 'Focus Doctrine', value: 'Ambidexterity' },
            { label: 'Process Goal', value: 'Zero-Friction STP' },
          ],
        },
        {
          id: 'ai',
          category: 'ai',
          badge: 'Agentic AI Architecture',
          title: 'Autonomous AI Agents',
          subtitle: 'Multi-Agent Orchestration & Enterprise Reasoning Swarms',
          image: '/images/autonomous-ai-agents.jpg',
          imageAlt: 'Autonomous Multi-Agent AI System and Workflow Ingestion',
          description:
            'Moving beyond static predictive models into deterministic agentic workflows. Designing multi-agent swarms equipped with specialized tools to autonomously investigate billing variances, reconcile energy market telemetry, and provide real-time conversational feedback to consumers.',
          icon: '🤖',
          accent: 'var(--accent-fuchsia)',
          subItems: [
            {
              title: 'Multi-Agent Collaborative Swarms',
              desc: 'Coordinated specialized agents (Ingest, Sentinel, Reconciler) executing asynchronous validation tasks.',
            },
            {
              title: 'Autonomous Exception Resolution',
              desc: 'Self-healing anomaly handling in high-volume utility pipelines with auditable verification logs.',
            },
            {
              title: 'Conversational Utility Agents',
              desc: 'Natural language interfaces guiding consumers through consumption feedback, tariff choices, and energy conservation.',
            },
            {
              title: 'Deterministic Guardrails',
              desc: 'Hybrid architectures pairing LLM reasoning with strict financial GoBD compliance and human-in-the-loop fallback.',
            },
          ],
          stats: [
            { label: 'Paradigm', value: 'Multi-Agent' },
            { label: 'Execution', value: 'Autonomous' },
            { label: 'Safety Guardrails', value: 'Deterministic' },
          ],
        },
      ],
    },
    stack: {
      tag: 'Engineering Stack',
      heading: 'Modern, Modular & Scalable',
      desc: 'Curated selection of industry-standard tools and frameworks ensuring long-term maintainability.',
      groups: [
        {
          title: 'Frontend Ecosystem',
          icon: '🎨',
          items: [
            'React 19',
            'TypeScript 5.x',
            'Vite 6',
            'Vanilla CSS3',
            'Google Fonts (Plus Jakarta Sans)',
            'JetBrains Mono',
          ],
        },
        {
          title: 'Backend Ecosystem',
          icon: '⚙️',
          items: [
            'NestJS 12',
            'Node.js 24 LTS',
            'Swagger / OpenAPI',
            'Express Platform',
            'Vitest Test Runner',
            'Oxlint / Prettier',
          ],
        },
        {
          title: 'DevOps & Tooling',
          icon: '🚀',
          items: [
            'Git Version Control',
            'GitHub CLI (gh)',
            'Concurrently Monorepo',
            'RESTful Standards',
            'Clean Architecture',
            'oubou68 Production DNS',
          ],
        },
      ],
    },
    telemetry: {
      title: 'Live Backend Telemetry',
      desc: 'Real-time metrics dispatched from the NestJS REST API',
      btnRefresh: '↻ Refresh Ping',
      btnRawJson: 'Raw JSON ↗',
      statusLabel: 'Service Health',
      statusHealthy: '● Healthy',
      statusConnecting: 'Connecting...',
      statusOffline: '○ Unreachable',
      serviceFallback: 'NestJS Core Engine',
      latencyLabel: 'API Latency',
      latencySub: 'Round-trip benchmark',
      uptimeLabel: 'Process Uptime',
      uptimeSub: 'Continuous execution',
      memoryLabel: 'Heap Memory',
      memorySubTotal: 'Total',
      memorySubFallback: 'V8 Garbage Collected',
    },
    contact: {
      tag: 'Direct Collaboration',
      heading: 'Connect with Dr. Carl Heckmann',
      desc:
        'Initiate a conversation regarding executive advisory, energy transition IT, business process ambidexterity, or autonomous multi-agent engineering.',
      infoTitle: 'Executive Communication',
      infoLead:
        'Submit an inquiry directly through this encrypted full-stack pipeline connecting to the NestJS enterprise backend.',
      metaProfileTitle: 'Professional Profile',
      metaFocusTitle: 'Core Focus Areas',
      metaFocusDesc: 'Utilities • IT Ambidexterity • AI Agent Swarms',
      metaLocationTitle: 'Location & Affiliation',
      metaLocationDesc: 'Heidelberg / Germany • hsag Heidelberger Services AG • BEMD',
      labelName: 'Your Full Name',
      placeholderName: 'e.g. Dr. Jane Miller',
      labelEmail: 'Business Email',
      placeholderEmail: 'e.g. j.miller@enterprise.de',
      labelTopic: 'Inquiry Topic',
      topics: [
        {
          value: 'Utilities & Dynamic Tariffs (§ 41a EnWG)',
          label: '⚡ Utilities & Dynamic Tariffs (§ 41a EnWG)',
        },
        {
          value: 'Business Process Optimization & BPO',
          label: '⚙️ Business Process Optimization & BPO',
        },
        {
          value: 'Autonomous AI Agent Architectures',
          label: '🤖 Autonomous AI Agent Architectures',
        },
        {
          value: 'Executive Advisory & Speaking',
          label: '🎤 Executive Advisory & Speaking',
        },
      ],
      labelMessage: 'Project Details or Message',
      placeholderMessage: 'Describe your initiative, timeline, or consultation objectives...',
      btnSubmit: 'Send Inquiry to Dr. Heckmann ➔',
      btnSubmitting: 'Transmitting...',
      alertSuccessDefault: 'Thank you! Your message has been received.',
      alertErrorDefault: 'Failed to transmit message. Please try again.',
      alertNetworkError: 'Unable to reach the backend at',
    },
    footer: {
      title: 'Dr. Carl Heckmann',
      desc: 'Executive Leadership in Energy IT, Process Optimization & Autonomous AI Agents.',
      credits: '© {year} Dr. Carl Heckmann (oubou68.de). Built with React 19 & NestJS 12.',
      colPillarsTitle: 'Pillars',
      colPlatformTitle: 'Platform',
      colConnectTitle: 'Connect',
      linkUtilities: 'Utilities & Energy',
      linkProcess: 'Process Optimization',
      linkAi: 'Autonomous AI Agents',
      linkTelemetry: 'Live Telemetry',
      linkSwagger: 'OpenAPI Swagger',
      linkLinkedin: 'LinkedIn Profile ↗',
      linkGithub: 'GitHub (@oubou68) ↗',
      linkContact: 'Inquiry Form',
    },
  },
};
