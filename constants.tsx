
import { Service } from './types';

export const SERVICES: Service[] = [
  {
    id: 'ai-qa-generation',
    title: 'AI-Generated Question & Answer Sets from Reading Passages',
    description: 'Educational Assessment Generation: 1.5M curriculum-aligned items for grades 1-12.',
    longDescription: 'Created a comprehensive educational assessment database containing 1.5 million multiple-choice questions derived from 300,000+ authentic reading passages. Each passage generated 5 unique questions with verified answer keys, designed to match real examination standards used in K-12 education.',
    imageUrl: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Questions Generated', value: '1.5 Million', icon: 'CheckCircle' },
      { label: 'Reading Passages', value: '300,000+', icon: 'BookOpen' },
      { label: 'Grade Range', value: '1-12', icon: 'Users' },
      { label: 'Format', value: 'JSON', icon: 'Code' }
    ],
    detailContent: [
      {
        title: 'Phase 1: Content Sourcing & Discovery',
        challenge: 'Locating bulk repositories of high-quality, child-appropriate articles suitable for educational assessment.',
        solution: 'Identified and cataloged multiple content sources across diverse subject domains (Science, Travel, Cooking, Space Exploration).',
        points: [
          'Prioritized educational publishers and science magazines.',
          'Ensured content variety for all grade levels.',
          'Secured access to sufficient article inventory for 300k+ passages.'
        ]
      },
      {
        title: 'Phase 2: Data Extraction Pipeline',
        challenge: 'Extracting article content from multiple web sources with different structures and anti-bot restrictions.',
        approach: 'Two-tier scraping system with authenticated session handling and custom Python parsing logic.',
        points: [
          'Anti-Bot Detection: Implemented rate limiting and distributed scraping.',
          'Subscription Barriers: Developed session handling for premium content.',
          'Content Noise: Created source-specific Python scripts to isolate clean text from ads/navigation.'
        ]
      },
      {
        title: 'Phase 3: Content Quality Control',
        points: [
          'Length Filtering: Removed passages under 200 words.',
          'Content Cleaning: Stripped promotional content and navigation elements.',
          'Format Preservation: Maintained original line breaks and paragraph structure.'
        ]
      },
      {
        title: 'Phase 4: AI-Powered Question Generation',
        challenge: 'Generating 1.5 million high-quality questions within budget while maintaining exam-standard quality.',
        solution: 'Optimized model selection (quality vs. cost) and batch processing system for API efficiency.',
        points: [
          'Questions aligned with actual exam formats (1 correct + 3 distractors).',
          'Grade-appropriate vocabulary and complexity.',
          'Automated validation checks for answer accuracy.'
        ]
      }
    ]
  },
  {
    id: '3d-ai-web-dev',
    title: 'High-End 3D Interactive Web Design & AI Development',
    description: 'Immersive $10k+ value brand experiences featuring 3D animations, custom CMS, and AI-driven UI.',
    longDescription: 'We specialize in building high-fidelity, interactive digital products that combine the power of AI-driven development with immersive 3D design. Using tools like Spline and Bolt.new, we create websites that don’t just display content—they elevate brands and drive high-value retailer conversions.',
    imageUrl: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Project Value', value: '$10,000+', icon: 'Zap' },
      { label: '3D Integration', value: 'Spline Native', icon: 'Box' },
      { label: 'Admin Control', value: 'Full CMS', icon: 'Terminal' },
      { label: 'UX Fidelity', value: 'High-Motion', icon: 'Activity' }
    ],
    detailContent: [
      {
        title: 'Case Study: Hoops Basketball Manufacturing',
        challenge: 'A basketball manufacturer needed to elevate their brand presence to attract premium retailers and showcase their "Advanced Ball Technology" through a $10,000+ quality experience.',
        solution: 'Developed a motion-first, 3D interactive landing page using AI prototyping for the UI and Spline for real-time 3D asset rendering.',
        points: [
          'Floating Navigation: Modern glassmorphism UI with rounded, transparent containers.',
          '3D Hero Section: Integrated an interactive 3D basketball as a responsive background.',
          'Custom Grid Backgrounds: Deep purple-blue sophisticated grids for technical sections.',
          'Dynamic CMS: Built a custom admin panel for blog and news management.'
        ]
      },
      {
        title: 'Technical Implementation: Floating UI',
        approach: 'Using advanced Tailwind utility classes to achieve the "floating navigation" aesthetic described by top-tier motion designers.',
        codeSnippet: `<nav className="fixed top-4 left-1/2 -translate-x-1/2 w-[90%] max-w-4xl 
  bg-white/80 backdrop-blur-md border rounded-full px-8 py-3 z-50 shadow-xl">
  {/* Modern floating navigation structure */}
</nav>`,
        codeLanguage: 'tsx'
      },
      {
        title: 'Advanced 3D Asset Pipeline (Spline)',
        points: [
          'Remixing high-quality community 3D assets to match brand identity.',
          'Optimizing 3D models for performance and high-speed loading.',
          'Integrating Spline scenes into React components via runtime libraries.'
        ],
        codeSnippet: `// Spline Integration Prompt Logic
"Please make this spline animation the background of my home hero.
Ensure it maintains interactive properties on hover and click."`,
        codeLanguage: 'markdown'
      },
      {
        title: 'Content Management System (CMS)',
        challenge: 'Allowing non-technical staff to update the blog and product collections without touching code.',
        solution: 'Engineered a dynamic routing system where clicks on blog previews lead to unique, automatically generated article pages.',
        points: [
          'Admin Dashboard for creating, editing, and deleting posts.',
          'Image URL integration for real-time visual updates.',
          'Dynamic author attribution and category management.'
        ]
      }
    ]
  },
  {
    id: 'ecommerce-intelligence',
    title: 'Competitive Intelligence & E-Commerce Analytics Platform',
    description: 'Multi-Company Analysis | Revenue Tracking | Market Share Calculation | Interactive Dashboards.',
    longDescription: 'Developed an end-to-end competitive intelligence system capable of tracking and analyzing company performance across any industry vertical. The platform extracts data from Amazon, e-commerce channels, and public sources to deliver actionable market insights through automated analysis and visual reporting.',
    imageUrl: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Market Analysis', value: 'Multi-Industry', icon: 'Globe' },
      { label: 'Verified Sources', value: '100+ Citations', icon: 'Database' },
      { label: 'Report Sheets', value: '17 Per Brand', icon: 'Layers' },
      { label: 'Accuracy', value: '±8%', icon: 'Activity' }
    ],
    detailContent: [
      {
        title: 'Phase 1: Company Selection & Market Segmentation',
        approach: 'Industry-agnostic framework for coffee, consumer goods, electronics, beauty, and more.',
        points: [
          'Tier 1: Market Leaders (Large)',
          'Tier 2: Emerging/Specialty (Small-Medium)',
          'Tier 3: Additional Market Players'
        ],
        codeSnippet: `# Universal company selection framework
target_companies = [
    "Blue Bottle Coffee", "Intelligentsia Coffee", 
    "Kahawa Coffee", "Blk & Bold", "Onyx Coffee Lab"
]
# Outcome: Balanced portfolio representing different market segments`,
        codeLanguage: 'python'
      },
      {
        title: 'Phase 2: Data Collection Architecture',
        points: [
          'Financial Metrics: Annual revenue estimates, channel breakdown, profit margins.',
          'Amazon Metrics: BSR ranking, review volume, fulfillment methods (FBA/FBM).',
          'E-Commerce Data: Monthly traffic, conversion funnel, discount strategies.',
          'Operational Data: Owned physical locations, retail partners (Whole Foods, Target, Walmart).'
        ]
      },
      {
        title: 'Phase 3: Data Extraction & Processing',
        challenge: 'Universal scraping methodology for Amazon data across any product category.',
        codeSnippet: `def scrape_amazon_brand(brand_name, category_filter=None):
    # Extract product listings, prices, and performance metrics
    base_url = f"https://www.amazon.com/s?k={brand_name}"
    # Headers to avoid bot detection
    headers = {'User-Agent': 'Mozilla/5.0...'}
    # ... extraction logic ...
    return pd.DataFrame(products)

# Usage: scrape_amazon_brand('Glossier', 'beauty')`,
        codeLanguage: 'python'
      },
      {
        title: 'Phase 4: Revenue Estimation Model',
        approach: 'Industry-adaptive calculation using multiple factors (Cafes, E-com, Wholesale).',
        codeSnippet: `def estimate_company_revenue(company_data, industry_type):
    if industry_type == 'coffee':
        cafe_rev = company_data['num_cafes'] * avg_rev_per_cafe
        ecom_rev = company_data['website_traffic'] * conv_rate * aov * 12
        wholesale_rev = retail_partner_count * avg_partner_rev
    return sum([cafe_rev, ecom_rev, wholesale_rev])`,
        codeLanguage: 'python'
      }
    ]
  },
  {
    id: 'shopify-product-upload',
    title: 'Multi-Platform E-Commerce Product Upload System',
    description: 'Bulk Upload Automation | Platform-Specific Formatting | Image Processing | Data Validation.',
    longDescription: 'Developed an end-to-end product upload automation system that transforms a single product catalog into platform-ready formats for simultaneous deployment across Amazon, Shopify, WooCommerce, Etsy, and eBay. The system handles data conversion, image optimization, validation, and API-based uploads.',
    imageUrl: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Batch Scale', value: '10,000+', icon: 'Database' },
      { label: 'Platforms', value: '7+ Major', icon: 'Globe' },
      { label: 'Rejection Rate', value: '<5%', icon: 'CheckCircle' },
      { label: 'Time Saved', value: '95% Reduction', icon: 'Activity' }
    ],
    detailContent: [
      {
        title: 'Phase 1: Universal Data Model',
        challenge: 'Each platform has unique data structures and requirements.',
        solution: 'Standardized product schema mapping SKU, Title, Variants, and Etsy/Amazon specific taxonomies.',
        points: [
          'Amazon browse nodes and bullet points mapping.',
          'Shopify handle and collection management.',
          'Etsy taxonomy and material listing requirements.'
        ]
      },
      {
        title: 'Phase 2: Data Import & Normalization',
        codeSnippet: `def import_products(source_file):
    # Read CSV/Excel/JSON
    raw_data = read_file(source_file)
    for row in raw_data:
        product = UniversalProduct()
        product.sku = clean_sku(row['SKU'])
        product.price = parse_price(row['Price'])
        # Normalize weights, dimensions, and images
    return products`,
        codeLanguage: 'python'
      },
      {
        title: 'Phase 4: Automated Image Processing',
        challenge: 'Amazon requires white backgrounds; Shopify prefers high-res 2048px.',
        codeSnippet: `def process_images_for_platform(products, platform):
    specs = {
        'amazon': {'size': (1000, 1000), 'background': 'white'},
        'shopify': {'size': (2048, 2048)}
    }
    # Download -> Resize -> Background Filter -> Optimize
    return optimized_images`,
        codeLanguage: 'python'
      },
      {
        title: 'Phase 5: Validation Engine',
        points: [
          'Pre-Upload Checks: Title length, SKU format, missing images.',
          'Platform Rules: Amazon 200-char title limit, Etsy 140-char limit.',
          'Warning System: Highlights low review counts or invalid pricing.'
        ]
      }
    ]
  },
  {
    id: 'rag-llm-ai',
    title: 'RAG / LLM / AI Agent Development',
    description: 'Custom AI Agents | RAG Pipelines | LLM Integration | Automated Workflows.',
    longDescription: 'Built production-ready AI agent systems combining RAG architecture with LLMs to create intelligent assistants for document Q&A, customer support, data analysis, and automated workflows. These systems process continuous streams of data to provide human-like spoken or text responses.',
    imageUrl: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Accuracy', value: '95%+', icon: 'CheckCircle' },
      { label: 'Latency', value: '<2.0s', icon: 'Activity' },
      { label: 'Automation', value: '80% deflection', icon: 'Cpu' },
      { label: 'Reliability', value: '99.8% Uptime', icon: 'Shield' }
    ],
    detailContent: [
      {
        title: '1. RAG System (Document Q&A)',
        approach: 'Document ingestion -> Chunking -> Vector DB -> Semantic search -> LLM response.',
        codeSnippet: `def query_documents(question, vectorstore):
    # Retrieve relevant context
    docs = vectorstore.similarity_search(question, k=5)
    context = "\\n\\n".join([doc.page_content for doc in docs])
    
    # Query LLM (GPT-4) with citations
    llm = ChatOpenAI(model="gpt-4-turbo", temperature=0)
    prompt = f"Answer using Context: {context}\\n\\nQ: {question}"
    return llm.invoke(prompt)`,
        codeLanguage: 'python'
      },
      {
        title: '2. AI Agent with Tools',
        points: [
          'Tool usage: search_kb, check_order_status, create_ticket.',
          'Autonomous reasoning: Agent analyzes query and selects the best tool.',
          'Memory retention: Maintaining conversation state for complex troubleshooting.'
        ],
        codeSnippet: `tools = [
    Tool(name="search_kb", func=search_kb),
    Tool(name="check_order", func=check_order),
    Tool(name="create_ticket", func=create_ticket)
]
agent = create_openai_tools_agent(llm, tools)
# Usage: "I haven't received my order ORD-12345"`,
        codeLanguage: 'python'
      },
      {
        title: '3. Production System Optimization',
        points: [
          'Cost Monitoring: tiktoken based token counting and real-time pricing estimates.',
          'Semantic Caching: lru_cache for frequent queries to avoid redundant API calls.',
          'Streaming: Incremental response delivery for better UX.'
        ],
        codeSnippet: `class ProductionRAG:
    @lru_cache(maxsize=1000)
    def cached_search(self, query):
        return self.vectorstore.similarity_search(query, k=5)
        
    def stream_query(self, question):
        for chunk in self.llm.stream(prompt):
            yield chunk.content`,
        codeLanguage: 'python'
      }
    ]
  },
  {
    id: 'pdf-data-extraction',
    title: 'PDF Data Extraction & Structured Analysis',
    description: 'Processing pipeline engineered to convert 500,000+ unstructured PDFs into high-fidelity datasets.',
    longDescription: 'A high-performance processing pipeline engineered to convert 500,000+ unstructured PDF documents into machine-readable datasets. This project focuses on the automated extraction of trapped information from complex layouts, delivering precision-verified data.',
    imageUrl: 'https://images.unsplash.com/photo-1568667256549-094345857637?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Total Assets', value: '500,000+', icon: 'Database' },
      { label: 'Accuracy Rate', value: '99%+', icon: 'CheckCircle' },
      { label: 'Formats', value: 'JSON/CSV', icon: 'FileText' },
      { label: 'Resolution', value: '>224 DPI', icon: 'Maximize' }
    ],
    detailContent: [
      {
        title: 'Task Architectures',
        points: [
          'Type A: Tabular PDF Extraction - Identify and reconstruct complex tables with merged cells.',
          'Type B: Key-Value Pair (KVP) Extraction - Spatial Anchoring to link labels to values.',
          'Type C: Full-Text Semantic Parsing - Identifying section headers and hierarchical nesting.'
        ]
      }
    ]
  },
  {
    id: 'image-puzzle-dataset',
    title: 'Image Puzzle & Spot-the-Difference Dataset',
    description: 'Created a collection of 300,000 images to train AI models in visual logic and anomaly detection.',
    longDescription: 'Developed a collection of 300,000 images focusing on finding missing puzzle pieces, matching related objects, and spotting differences. This data helps train computers to understand visual logic games and fine-grained anomalies.',
    imageUrl: 'https://images.unsplash.com/photo-1516259762381-22954d7d3ad2?auto=format&fit=crop&q=80&w=1000',
    outcomes: [
      { label: 'Total Images', value: '300,000', icon: 'Image' },
      { label: 'Categories', value: '3 Types', icon: 'Layers' },
      { label: 'Min Resolution', value: '224x224px', icon: 'Maximize' },
      { label: 'Annotation', value: 'JSON', icon: 'Code' }
    ],
    detailContent: [
      {
        title: 'Scope of Work & Task Categories',
        points: [
          'Type A: Puzzle – Missing-Part Matching (100k Units)',
          'Type B: Puzzle – Correspondence Matching (100k Units)',
          'Type C: Multi-Image Spot-the-Difference (100k Units)'
        ]
      },
      {
        title: 'Quality Assurance (QA)',
        points: [
          'Resolution Check: Automated scripts ensured no sub-image fell below 224px.',
          'Logic Verification: Random sampling to ensure answers are logically solvable.',
          'Filtering: Removed low-quality AI distortions to ensure dataset integrity.'
        ]
      }
    ]
  },
  {
    id: 'workflow-automation',
    title: 'Workflow Automation / CRM & API Integration',
    description: 'Connect your tools and automate repetitive business tasks.',
    longDescription: 'Expert integration between Salesforce, HubSpot, custom APIs, and legacy systems to streamline operations and automate repetitive tasks across departments.',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'custom-dev-scraping',
    title: 'Python / PHP / Scraping / Google Apps Script',
    description: 'Tailored development for data harvesting and internal tools.',
    longDescription: 'Custom script development for specific business needs, from Google Sheets automation to high-scale web scraping and distributed requests.',
    imageUrl: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'cms-ecommerce-listing',
    title: 'Shopify / WordPress / Product Listing / Debugging',
    description: 'Technical maintenance and optimization for CMS platforms.',
    longDescription: 'Solving performance bottlenecks, theme bugs, and catalog synchronization issues across WordPress and Shopify ecosystems.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'data-aggregate-export',
    title: 'Data Aggregate / Pdf / Product Export',
    description: 'Consolidate diverse data sources into ready-to-use formats.',
    longDescription: 'Cleaning, merging, and exporting large-scale datasets into CSV, JSON, or custom PDF reporting formats with strict schema adherence.',
    imageUrl: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80&w=1000',
  },
  {
    id: 'data-analytics',
    title: 'Data Analysis / Data Analytics',
    description: 'Turn raw data into visual insights and strategic decisions.',
    longDescription: 'Exploratory data analysis, predictive modeling, and business intelligence dashboarding for data-driven planning.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1000',
  }
];
