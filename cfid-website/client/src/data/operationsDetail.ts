// 产业详情子页面数据 - 中英文双语
// Design: 「大地之韵」有机自然主义

export interface OperationDetail {
  id: string;
  title: string;
  subtitle: string;
  heroImage: string;
  introduction: string[];
  highlights: { icon: string; title: string; description: string }[];
  processSteps: { step: string; title: string; description: string }[];
  stats: { value: string; label: string }[];
  features: { title: string; description: string }[];
}

// ===== 中文版 =====

export const zhOperationDetails: Record<string, OperationDetail> = {
  plantation: {
    id: "plantation",
    title: "经济林种植",
    subtitle: "可持续林业 · 绿色发展",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/forest-plantation-nKJYujtFKCjk4QjhZkfRbK.webp",
    introduction: [
      "中林国际坚持可持续、可循环的林业经营理念，在乌干达、坦桑尼亚和莫桑比克建立了大规模经济林种植基地。通过科学规划与精细化管理，实现林产资源的自给自足，在创造经济价值的同时最大化生态效益。",
      "专注于农林行业，坚持走可持续发展路线，建立从种植、碳减排、原料加工、成品制造的全产业链闭环；将地球上最珍贵的可再生资源——树木的生态价值及经济价值最大化。",
      "中林的种植基地覆盖多种经济树种，包括松树、桉树等速生林木，为下游林化产品和人造板制造提供充足、优质的原材料保障。",
    ],
    highlights: [
      {
        icon: "leaf",
        title: "可持续经营",
        description:
          "采用科学的轮伐制度与生态化种植模式，确保林地资源的可持续利用与生态系统的长期稳定。",
      },
      {
        icon: "globe",
        title: "多国布局",
        description:
          "在乌干达、坦桑尼亚、莫桑比克三国建立种植基地，充分利用东非优越的气候与土壤条件。",
      },
      {
        icon: "recycle",
        title: "碳汇价值",
        description:
          "大规模经济林种植有效固碳减排，为全球碳中和目标贡献力量，同时创造碳汇交易的经济价值。",
      },
    ],
    processSteps: [
      { step: "01", title: "选地规划", description: "科学评估土壤、气候条件，选择最适宜的种植区域与树种。" },
      { step: "02", title: "育苗培育", description: "建立标准化苗圃基地，培育优质种苗，确保成活率与生长速度。" },
      { step: "03", title: "科学种植", description: "采用现代化种植技术，合理密植，配合水肥一体化管理。" },
      { step: "04", title: "抚育管理", description: "定期巡护、病虫害防治、间伐修枝，保障林木健康生长。" },
      { step: "05", title: "可持续采伐", description: "按照轮伐周期科学采伐，同步开展迹地更新，实现资源永续利用。" },
    ],
    stats: [
      { value: "3", label: "种植国家" },
      { value: "多种", label: "经济树种" },
      { value: "100%", label: "自有团队管理" },
      { value: "可持续", label: "经营模式" },
    ],
    features: [
      { title: "全产业链闭环", description: "种植基地直接为下游林化产品和人造板制造提供原材料，实现从种植到成品的完整产业链闭环。" },
      { title: "生态与经济并重", description: "在追求经济效益的同时，注重生态环境保护，实现绿色可持续发展。" },
      { title: "科学化管理", description: "引入现代林业管理技术，建立标准化的种植、抚育和采伐流程，提升林地产出效率。" },
    ],
  },

  coffee: {
    id: "coffee",
    title: "咖啡种植与贸易",
    subtitle: "东非咖啡黄金带 · 从种植到贸易",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/coffee-plantation-AgiRi3pjb4xPHJqcfAaYMu.webp",
    introduction: [
      "2024年，中林正式进军咖啡产业，开启公司发展的第二增长曲线。立足东非咖啡种植黄金带，推行高标准种植、生态化培育与产业化运营，从源头保障咖啡品质。",
      "东非地区拥有得天独厚的咖啡种植条件——高海拔、火山土壤、充沛降雨和适宜温度，是全球优质咖啡豆的重要产区。中林充分利用这一自然优势，建立从种植到加工到贸易的一体化咖啡产业链。",
      "中林的咖啡业务涵盖阿拉比卡和罗布斯塔两大品种，通过标准化的种植管理和精细化的加工流程，为全球客户提供稳定、优质的咖啡原料供应。",
    ],
    highlights: [
      {
        icon: "coffee",
        title: "黄金产区",
        description:
          "位于东非咖啡种植黄金带，高海拔、火山土壤、充沛降雨，天然孕育优质咖啡豆。",
      },
      {
        icon: "factory",
        title: "一体化运营",
        description:
          "从种植、采摘、加工到贸易的全链条运营，确保品质可控、供应稳定。",
      },
      {
        icon: "truck",
        title: "全球贸易",
        description:
          "产品面向全球市场，为精深加工企业和大宗商品贸易商提供稳定的原料供应。",
      },
    ],
    processSteps: [
      { step: "01", title: "精选种植", description: "选择优质阿拉比卡和罗布斯塔品种，在最适宜的海拔和土壤条件下种植。" },
      { step: "02", title: "生态培育", description: "采用遮荫种植、有机肥料等生态化培育方式，保障咖啡豆的风味与品质。" },
      { step: "03", title: "精细采摘", description: "在最佳成熟期手工采摘咖啡鲜果，确保每一颗咖啡豆的品质。" },
      { step: "04", title: "标准加工", description: "采用水洗法和日晒法等标准化加工流程，从生豆到熟豆的精细处理。" },
      { step: "05", title: "品质贸易", description: "严格的品控体系保障出口品质，面向全球市场开展大宗商品贸易。" },
    ],
    stats: [
      { value: "2024", label: "正式进军" },
      { value: "2", label: "咖啡品种" },
      { value: "全链条", label: "产业覆盖" },
      { value: "全球", label: "市场面向" },
    ],
    features: [
      { title: "第二增长曲线", description: "咖啡产业是中林2024年开启的全新业务板块，被视为公司未来发展的重要增长引擎。" },
      { title: "双品种布局", description: "同时布局阿拉比卡和罗布斯塔两大品种，满足不同市场和客户的多元化需求。" },
      { title: "产地直供", description: "从东非产地直接供应全球市场，减少中间环节，确保品质和价格竞争力。" },
    ],
  },

  forestchemicals: {
    id: "forestchemicals",
    title: "林化产业",
    subtitle: "科学采割 · 精深加工",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/pine-resin-oUPGUYkPg7y9RHhFYVzu6q.webp",
    introduction: [
      "中林所用松脂均由自有团队在自有或合作林场中科学采割，从源头把控品质。凭借规范化的采集流程与稳定的林地资源，确保原料质量上乘、供应持续可靠。",
      "林化产业是中林的核心业务板块之一，主要从事松脂的采集与深加工。松脂是一种重要的可再生天然资源，广泛应用于化工、医药、食品、日化等多个领域。",
      "中林建立了从林地管理、松脂采集到精深加工的完整产业链，通过标准化的生产流程和严格的质量控制，生产高品质的松香、松节油等林化产品，产品远销海内外市场。",
    ],
    highlights: [
      {
        icon: "droplets",
        title: "源头把控",
        description:
          "所有松脂均由自有团队在自有或合作林场中科学采割，从源头保障原料品质。",
      },
      {
        icon: "flask",
        title: "精深加工",
        description:
          "配备现代化加工设备，将松脂精炼为松香、松节油等高附加值林化产品。",
      },
      {
        icon: "shield",
        title: "品质保障",
        description:
          "建立严格的质量管理体系，从采集到成品全流程品质可追溯。",
      },
    ],
    processSteps: [
      { step: "01", title: "林地管理", description: "对自有和合作林场进行科学管理，确保松树健康生长，提高产脂量。" },
      { step: "02", title: "科学采割", description: "由专业团队按照标准化流程进行松脂采割，确保采集效率和树木健康。" },
      { step: "03", title: "原料收集", description: "建立高效的原料收集和运输网络，确保松脂新鲜度和品质。" },
      { step: "04", title: "精炼加工", description: "采用先进的蒸馏和精炼技术，将松脂加工为松香和松节油。" },
      { step: "05", title: "产品销售", description: "高品质林化产品面向全球化工、医药、食品等行业客户销售。" },
    ],
    stats: [
      { value: "100%", label: "自有团队采割" },
      { value: "全流程", label: "品质可追溯" },
      { value: "多领域", label: "产品应用" },
      { value: "全球", label: "销售网络" },
    ],
    features: [
      { title: "自有资源优势", description: "依托自有和合作林场的丰富松林资源，确保原材料的稳定供应和品质可控。" },
      { title: "可再生天然资源", description: "松脂是可再生的天然资源，林化产业的发展符合绿色可持续发展理念。" },
      { title: "高附加值产品", description: "通过精深加工将初级松脂转化为高附加值的松香、松节油等产品，提升产业价值。" },
    ],
  },

  panels: {
    id: "panels",
    title: "人造板制造",
    subtitle: "现代化生产 · 品质卓越",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/wood-panel-factory-6z7incH54pY5WB3eWS5jZq.webp",
    introduction: [
      "以优质木材及非木质植物纤维为原料，经现代化生产线精密加工，生产高品质胶合板、刨花板等人造板产品，广泛应用于建筑、家具及装饰领域。",
      "人造板是以木材或其他木质纤维素材料为原料，经机械加工分离成各种单元材料后，施加胶粘剂（或不加胶粘剂）和其他添加剂，经压制或模压而成的板材产品。",
      "中林的人造板制造业务依托自有种植基地的优质原材料供应，配备先进的生产设备和工艺技术，产品质量达到国际标准，广泛应用于东非及全球市场的建筑、家具和室内装饰领域。",
    ],
    highlights: [
      {
        icon: "layers",
        title: "多品类产品",
        description:
          "生产胶合板、刨花板等多种人造板产品，满足建筑、家具、装饰等不同领域需求。",
      },
      {
        icon: "cog",
        title: "现代化产线",
        description:
          "配备先进的生产设备和自动化控制系统，确保产品精度和一致性。",
      },
      {
        icon: "award",
        title: "国际品质",
        description:
          "产品质量达到国际标准，通过多项质量认证，赢得全球客户信赖。",
      },
    ],
    processSteps: [
      { step: "01", title: "原料备料", description: "从自有种植基地获取优质木材，经剥皮、切削等工序制备原料。" },
      { step: "02", title: "单元制备", description: "将原料加工为单板、刨花、纤维等不同规格的单元材料。" },
      { step: "03", title: "施胶组坯", description: "按照产品配方施加胶粘剂和添加剂，进行组坯铺装。" },
      { step: "04", title: "热压成型", description: "通过高温高压热压工艺，将组坯压制成型为板材。" },
      { step: "05", title: "精加工", description: "经砂光、裁边、质检等精加工工序，确保成品质量达标。" },
    ],
    stats: [
      { value: "多品类", label: "产品线" },
      { value: "自有", label: "原料供应" },
      { value: "国际", label: "品质标准" },
      { value: "3大", label: "应用领域" },
    ],
    features: [
      { title: "原料自给优势", description: "依托自有种植基地的充足原材料供应，有效降低生产成本，保障供应链稳定。" },
      { title: "全产业链协同", description: "与上游种植基地和林化产业形成协同效应，实现资源的高效利用和价值最大化。" },
      { title: "市场覆盖广泛", description: "产品广泛应用于建筑、家具和室内装饰三大领域，服务东非及全球市场客户。" },
    ],
  },
};

// ===== 英文版 =====

export const enOperationDetails: Record<string, OperationDetail> = {
  plantation: {
    id: "plantation",
    title: "Commercial Forest Plantations",
    subtitle: "Sustainable Forestry · Green Growth",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/forest-plantation-nKJYujtFKCjk4QjhZkfRbK.webp",
    introduction: [
      "CFID is committed to sustainable and circular forestry practices, having established large-scale commercial forest plantations across Uganda, Tanzania, and Mozambique. Through scientific planning and precision management, we achieve resource self-sufficiency while maximizing both economic and ecological value.",
      "Specializing in the agriculture and forestry sector, we pursue a sustainable development path by building a fully integrated, closed-loop industrial chain — spanning plantation, carbon sequestration, raw material processing, and finished product manufacturing — to maximize the ecological and economic value of trees, one of the planet's most precious renewable resources.",
      "Our plantations encompass multiple commercial tree species, including pine and eucalyptus fast-growing timber, providing a stable and high-quality raw material supply for downstream forest chemicals and engineered wood panel manufacturing.",
    ],
    highlights: [
      {
        icon: "leaf",
        title: "Sustainable Management",
        description:
          "Employing scientific rotation systems and ecologically sound planting models to ensure long-term sustainability and ecosystem stability.",
      },
      {
        icon: "globe",
        title: "Multi-Country Presence",
        description:
          "Plantation bases established across Uganda, Tanzania, and Mozambique, leveraging East Africa's exceptional climate and soil conditions.",
      },
      {
        icon: "recycle",
        title: "Carbon Sequestration",
        description:
          "Large-scale commercial plantations effectively capture carbon, contributing to global carbon neutrality goals while creating carbon credit value.",
      },
    ],
    processSteps: [
      { step: "01", title: "Site Selection", description: "Scientific assessment of soil and climate conditions to identify optimal planting zones and species." },
      { step: "02", title: "Nursery Cultivation", description: "Standardized nursery operations to cultivate premium seedlings with high survival and growth rates." },
      { step: "03", title: "Precision Planting", description: "Modern planting techniques with optimized spacing and integrated water-fertilizer management." },
      { step: "04", title: "Forest Tending", description: "Regular patrols, pest management, and selective thinning to ensure healthy tree growth." },
      { step: "05", title: "Sustainable Harvesting", description: "Scientific harvesting on rotation cycles with concurrent site regeneration for perpetual resource use." },
    ],
    stats: [
      { value: "3", label: "Countries" },
      { value: "Multiple", label: "Tree Species" },
      { value: "100%", label: "In-House Teams" },
      { value: "Sustainable", label: "Business Model" },
    ],
    features: [
      { title: "Closed-Loop Value Chain", description: "Plantation bases directly supply raw materials for downstream forest chemicals and panel manufacturing, creating a complete industrial chain." },
      { title: "Ecology Meets Economy", description: "Pursuing economic returns while prioritizing environmental stewardship for truly sustainable green development." },
      { title: "Scientific Management", description: "Adopting modern forestry management technologies with standardized planting, tending, and harvesting processes to maximize land productivity." },
    ],
  },

  coffee: {
    id: "coffee",
    title: "Coffee Cultivation, Processing & Trading",
    subtitle: "East Africa's Coffee Belt · From Farm to Market",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/coffee-plantation-AgiRi3pjb4xPHJqcfAaYMu.webp",
    introduction: [
      "In 2024, CFID officially entered the coffee industry, igniting the company's second growth engine. Situated within East Africa's prime coffee-growing belt, we promote high-standard cultivation, ecologically sound practices, and an integrated industrial approach to ensure quality from the source.",
      "East Africa offers unparalleled coffee-growing conditions — high altitude, volcanic soils, abundant rainfall, and ideal temperatures — making it one of the world's premier origins for specialty coffee. CFID leverages these natural advantages to build an integrated coffee value chain from cultivation through processing to global trading.",
      "Our coffee operations encompass both Arabica and Robusta varieties. Through standardized cultivation management and meticulous processing, we deliver a stable, premium-quality coffee supply to customers worldwide.",
    ],
    highlights: [
      {
        icon: "coffee",
        title: "Prime Growing Region",
        description:
          "Located in East Africa's coffee belt — high altitude, volcanic soils, and abundant rainfall naturally produce exceptional coffee beans.",
      },
      {
        icon: "factory",
        title: "Integrated Operations",
        description:
          "End-to-end operations from cultivation, harvesting, and processing to trading, ensuring quality control and supply stability.",
      },
      {
        icon: "truck",
        title: "Global Trading",
        description:
          "Serving global markets with reliable supply for specialty processors and commodity traders alike.",
      },
    ],
    processSteps: [
      { step: "01", title: "Selective Planting", description: "Choosing premium Arabica and Robusta varieties planted at optimal altitudes and soil conditions." },
      { step: "02", title: "Ecological Cultivation", description: "Shade-grown methods and organic fertilization to preserve flavor profiles and bean quality." },
      { step: "03", title: "Precision Harvesting", description: "Hand-picking coffee cherries at peak ripeness to ensure every bean meets quality standards." },
      { step: "04", title: "Standard Processing", description: "Washed and natural processing methods for meticulous treatment from green to roasted beans." },
      { step: "05", title: "Quality Trading", description: "Rigorous quality control systems ensuring export-grade quality for global commodity markets." },
    ],
    stats: [
      { value: "2024", label: "Market Entry" },
      { value: "2", label: "Coffee Varieties" },
      { value: "Full Chain", label: "Coverage" },
      { value: "Global", label: "Market Reach" },
    ],
    features: [
      { title: "Second Growth Engine", description: "The coffee division, launched in 2024, represents a strategic new business pillar and a key driver of future growth." },
      { title: "Dual-Variety Strategy", description: "Cultivating both Arabica and Robusta to serve diverse market segments and customer requirements." },
      { title: "Origin-Direct Supply", description: "Supplying global markets directly from East African origins, reducing intermediaries to ensure quality and price competitiveness." },
    ],
  },

  forestchemicals: {
    id: "forestchemicals",
    title: "Forest Chemicals",
    subtitle: "Scientific Tapping · Deep Processing",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/pine-resin-oUPGUYkPg7y9RHhFYVzu6q.webp",
    introduction: [
      "All pine resin processed by CFID is scientifically tapped by our in-house teams from company-owned or cooperative plantations, ensuring quality control from the source. Our standardized collection processes and stable forest resources guarantee consistently high-quality raw materials and reliable supply.",
      "The forest chemicals division is one of CFID's core business segments, focused on pine resin collection and deep processing. Pine resin is a vital renewable natural resource with broad applications across chemicals, pharmaceuticals, food, and personal care industries.",
      "CFID has established a complete value chain from forest management and resin collection to deep processing. Through standardized production and rigorous quality control, we produce premium-grade rosin, turpentine, and other forest chemical products for domestic and international markets.",
    ],
    highlights: [
      {
        icon: "droplets",
        title: "Source Control",
        description:
          "All pine resin is scientifically tapped by in-house teams from company-owned or cooperative plantations, ensuring raw material quality from the source.",
      },
      {
        icon: "flask",
        title: "Deep Processing",
        description:
          "Equipped with modern processing facilities to refine pine resin into high-value rosin, turpentine, and derivative products.",
      },
      {
        icon: "shield",
        title: "Quality Assurance",
        description:
          "A rigorous quality management system ensures full traceability from collection through to finished products.",
      },
    ],
    processSteps: [
      { step: "01", title: "Forest Management", description: "Scientific management of company-owned and cooperative forests to ensure healthy tree growth and optimal resin yield." },
      { step: "02", title: "Scientific Tapping", description: "Professional teams follow standardized procedures for efficient resin collection while maintaining tree health." },
      { step: "03", title: "Raw Material Collection", description: "An efficient collection and transportation network ensures resin freshness and quality." },
      { step: "04", title: "Refining & Processing", description: "Advanced distillation and refining technologies transform raw resin into rosin and turpentine." },
      { step: "05", title: "Product Distribution", description: "Premium forest chemical products are distributed to global clients in chemicals, pharmaceuticals, and food industries." },
    ],
    stats: [
      { value: "100%", label: "In-House Tapping" },
      { value: "Full Chain", label: "Traceability" },
      { value: "Multi-Sector", label: "Applications" },
      { value: "Global", label: "Distribution" },
    ],
    features: [
      { title: "Proprietary Resource Advantage", description: "Leveraging abundant pine forest resources from owned and cooperative plantations to ensure stable supply and quality control." },
      { title: "Renewable Natural Resource", description: "Pine resin is a renewable natural resource, aligning the forest chemicals business with green and sustainable development principles." },
      { title: "High Value-Added Products", description: "Deep processing transforms raw resin into high value-added rosin, turpentine, and derivatives, elevating the industry's value contribution." },
    ],
  },

  panels: {
    id: "panels",
    title: "Engineered Wood Panel Manufacturing",
    subtitle: "Modern Production · Premium Quality",
    heroImage:
      "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/wood-panel-factory-6z7incH54pY5WB3eWS5jZq.webp",
    introduction: [
      "Using premium timber and non-wood plant fibers as raw materials, our modern production lines manufacture high-quality plywood, particleboard, and other engineered wood products for construction, furniture, and interior design applications.",
      "Engineered wood panels are products made from wood or other lignocellulosic materials that are mechanically processed into various unit elements, then bonded with adhesives — with or without additional additives — and formed into boards through pressing or molding.",
      "CFID's panel manufacturing operations draw on high-quality raw materials from our own plantations, equipped with advanced production equipment and process technologies. Our products meet international quality standards and serve the construction, furniture, and interior design markets across East Africa and globally.",
    ],
    highlights: [
      {
        icon: "layers",
        title: "Diverse Product Range",
        description:
          "Manufacturing plywood, particleboard, and other engineered wood products to serve construction, furniture, and interior design sectors.",
      },
      {
        icon: "cog",
        title: "Modern Production Lines",
        description:
          "Equipped with advanced production equipment and automated control systems to ensure product precision and consistency.",
      },
      {
        icon: "award",
        title: "International Quality",
        description:
          "Products meet international standards with multiple quality certifications, earning the trust of global customers.",
      },
    ],
    processSteps: [
      { step: "01", title: "Raw Material Preparation", description: "Sourcing premium timber from our own plantations, processed through debarking and chipping." },
      { step: "02", title: "Unit Preparation", description: "Processing raw materials into veneers, particles, or fibers of various specifications." },
      { step: "03", title: "Gluing & Assembly", description: "Applying adhesives and additives per product formulations, then assembling mat formations." },
      { step: "04", title: "Hot Pressing", description: "High-temperature, high-pressure pressing to form assembled mats into finished boards." },
      { step: "05", title: "Finishing", description: "Sanding, trimming, and quality inspection to ensure finished products meet specifications." },
    ],
    stats: [
      { value: "Multiple", label: "Product Lines" },
      { value: "In-House", label: "Raw Materials" },
      { value: "International", label: "Quality Standards" },
      { value: "3 Major", label: "Application Fields" },
    ],
    features: [
      { title: "Raw Material Self-Sufficiency", description: "Drawing on ample raw material supply from our own plantations to effectively reduce costs and ensure supply chain stability." },
      { title: "Full Value Chain Synergy", description: "Creating synergies with upstream plantations and forest chemicals operations for efficient resource utilization and value maximization." },
      { title: "Broad Market Coverage", description: "Products serve the construction, furniture, and interior design sectors across East Africa and global markets." },
    ],
  },
};
