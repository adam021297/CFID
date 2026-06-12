// 中林国际 CFID 官网内容数据 - 中英文双语
// Design: 「大地之韵」有机自然主义

export interface ContentData {
  nav: {
    home: string;
    about: string;
    operations: string;
    careers: string;
    contact: string;
  };
  hero: {
    companyName: string;
    companyNameEn: string;
    tagline: string;
  };
  about: {
    sectionTitle: string;
    sectionTitleEn: string;
    paragraphs: string[];
    stats: { value: string; label: string }[];
    team: {
      title: string;
      titleEn: string;
      description: string;
      images: { src: string; alt: string }[];
    };
    culture: {
      title: string;
      titleEn: string;
      items: { title: string; description: string; image: string }[];
    };
  };
  operations: {
    sectionTitle: string;
    sectionTitleEn: string;
    strategy: { title: string; description: string };
    items: {
      id: string;
      title: string;
      description: string;
      image: string;
    }[];
  };
  careers: {
    sectionTitle: string;
    sectionTitleEn: string;
    description: string;
    items: { title: string; description: string }[];
  };
  contact: {
    sectionTitle: string;
    sectionTitleEn: string;
    company: string;
    phone: string;
    email: string;
    address: string;
  };
  footer: {
    copyright: string;
    icp: string;
  };
}

export const zhContent: ContentData = {
  nav: {
    home: "首页",
    about: "关于我们",
    operations: "产业布局",
    careers: "人才招聘",
    contact: "联系我们",
  },
  hero: {
    companyName: "中林国际",
    companyNameEn: "CHINA FORESTRY INTERNATIONAL DEVELOPMENT",
    tagline: "扎根非洲沃土，共筑绿色未来",
  },
  about: {
    sectionTitle: "关于我们",
    sectionTitleEn: "ABOUT US",
    paragraphs: [
      '中林国际（China Forestry International Development Limited，以下简称"中林"），于2017年创立于"非洲明珠"乌干达，是东非农林行业的领军企业。作为一家集种植、加工与贸易于一体的农林类制造型企业，中林已在乌干达、坦桑尼亚、莫桑比克设立分支机构，业务覆盖经济林种植、林化产品采集及深加工、人造板制造、咖啡种植加工与贸易等多个领域，产品及服务面向全球市场。',
      "中林致力于通过科学化管理与人性化关怀相结合的方式，构建持久的组织竞争力。依托非洲丰富的自然资源与人力资源优势，中林已成为非洲农林行业的领军企业。",
      '在人才发展方面，中林秉持以人为本的理念，为优秀的奋斗者搭建实现个人价值与财富增长的平台。同时，积极响应"一带一路"倡议，持续为当地创造高质量就业机会，切实履行企业社会责任。',
    ],
    stats: [
      { value: "2017", label: "创立年份" },
      { value: "10,000+", label: "员工规模" },
      { value: "3", label: "海外分支机构" },
      { value: "4", label: "核心产业板块" },
    ],
    team: {
      title: "我们的团队",
      titleEn: "OUR TEAM",
      description:
        "致力于学习型组织打造，强大的团队凝聚力和创造力是中林团队最大的标签。",
      images: [
        { src: "/images/team-group.png", alt: "中林团队合影" },
        { src: "/images/team-hands.png", alt: "团队凝聚力" },
      ],
    },
    culture: {
      title: "企业文化",
      titleEn: "CULTURE",
      items: [
        {
          title: "创业不止",
          description:
            "创业是我们的事业，是公司的格局，是一群有情有义有理想的人共同的抱负。",
          image: "/images/culture-entrepreneurship.png",
        },
        {
          title: "奋斗不息",
          description:
            "奋斗是企业的性格，是公司的幸福之源，是实现企业价值和人生价值的途径。",
          image: "/images/culture-striving.png",
        },
        {
          title: "好学不耻",
          description:
            "好学是成功的方法，是企业发展的动力，是组织迭代和个人成长的基石。",
          image: "/images/culture-learning.png",
        },
      ],
    },
  },
  operations: {
    sectionTitle: "产业布局",
    sectionTitleEn: "OPERATIONS",
    strategy: {
      title: "全产业链整合 · 跨国协同发展",
      description:
        "以林产资源的可持续利用为核心，推动上下游产业深度整合，实现资源效益最大化与生态价值的良性循环。",
    },
    items: [
      {
        id: "plantation",
        title: "经济林种植",
        description:
          "坚持可持续、可循环的林业经营理念，通过科学规划与精细化管理，实现林产资源的自给自足，在创造经济价值的同时最大化生态效益。",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/forest-plantation-nKJYujtFKCjk4QjhZkfRbK.webp",
      },
      {
        id: "coffee",
        title: "咖啡种植与贸易",
        description:
          "立足东非咖啡种植黄金带，推行高标准种植、生态化培育与产业化运营，从源头保障咖啡品质，为精深加工和大宗商品贸易提供稳定的原料供应。",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/coffee-plantation-AgiRi3pjb4xPHJqcfAaYMu.webp",
      },
      {
        id: "forestchemicals",
        title: "林化产业",
        description:
          "中林所用松脂均由自有团队在自有或合作林场中科学采割，从源头把控品质。凭借规范化的采集流程与稳定的林地资源，确保原料质量上乘、供应持续可靠。",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/pine-resin-oUPGUYkPg7y9RHhFYVzu6q.webp",
      },
      {
        id: "panels",
        title: "人造板制造",
        description:
          "以优质木材及非木质植物纤维为原料，经现代化生产线精密加工，生产高品质胶合板，并推进中纤板生产线建设，产品广泛应用于建筑、家具及装饰领域。",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/wood-panel-factory-6z7incH54pY5WB3eWS5jZq.webp",
      },
    ],
  },
  careers: {
    sectionTitle: "人才招聘",
    sectionTitleEn: "CAREERS",
    description:
      "中林正处于快速发展阶段，高度重视人才的培养与职业发展。我们诚邀各界有志之士加入，共同开创事业新篇章。",
    items: [
      {
        title: "社会招聘",
        description:
          "如果你富有经验、渴望挑战，期待在国际化平台上施展才华，这里有高薪酬、高成长、高挑战的机会等你来。",
      },
      {
        title: "校园招聘",
        description:
          "如果你年轻有为、不甘平庸，愿意在实践中快速成长，中林将为你提供广阔的发展空间和完善的培养体系。",
      },
    ],
  },
  contact: {
    sectionTitle: "联系我们",
    sectionTitleEn: "CONTACT US",
    company: "中林国际（境内主体：广东军辉达进出口贸易有限公司）",
    phone: "13326894715",
    email: "service@cfid-ug.com",
    address: "广东省东莞市松山湖天安云谷10栋1101",
  },
  footer: {
    copyright: "版权所有 © 中林国际（境内主体：广东军辉达进出口贸易有限公司）",
    icp: "粤ICP备2022014426号",
  },
};

export const enContent: ContentData = {
  nav: {
    home: "Home",
    about: "About Us",
    operations: "Operations",
    careers: "Careers",
    contact: "Contact Us",
  },
  hero: {
    companyName: "CFID",
    companyNameEn: "CHINA FORESTRY INTERNATIONAL DEVELOPMENT",
    tagline: "Rooted in Africa, Building a Greener Future",
  },
  about: {
    sectionTitle: "About Us",
    sectionTitleEn: "ABOUT US",
    paragraphs: [
      'China Forestry International Development Limited (hereinafter referred to as "CFID") was founded in 2017 in Uganda — the Pearl of Africa — and has since grown into a leading enterprise in East Africa\'s agriculture and forestry sector. As a vertically integrated agro-forestry company encompassing plantation, processing, and trading operations, CFID has established subsidiaries in Uganda, Tanzania, and Mozambique. Our business spans commercial forest plantations, forest chemicals extraction and processing, engineered wood panel manufacturing, as well as coffee cultivation, processing, and trading — serving markets worldwide.',
      "CFID is committed to building lasting organizational strength through a management philosophy that combines scientific discipline with genuine care for our people. By leveraging Africa's exceptional natural resources and vibrant workforce, we have rapidly established ourselves as a benchmark enterprise in the region's agro-forestry industry.",
      "In talent development, CFID upholds a people-first approach, creating platforms for outstanding individuals to achieve both professional fulfillment and personal growth. In alignment with the Belt and Road Initiative, we continue to generate high-quality employment opportunities for local communities, fulfilling our corporate social responsibility.",
    ],
    stats: [
      { value: "2017", label: "Founded" },
      { value: "10,000+", label: "Employees" },
      { value: "3", label: "Countries" },
      { value: "4", label: "Core Sectors" },
    ],
    team: {
      title: "Our Team",
      titleEn: "OUR TEAM",
      description:
        "Committed to building a learning organization, CFID's team is defined by strong cohesion, creativity, and shared growth.",
      images: [
        { src: "/images/team-group.png", alt: "CFID team group photo" },
        { src: "/images/team-hands.png", alt: "Team cohesion" },
      ],
    },
    culture: {
      title: "Culture",
      titleEn: "CULTURE",
      items: [
        {
          title: "Entrepreneurship",
          description:
            "Entrepreneurship is our cause, our corporate horizon, and the shared ambition of people with loyalty, purpose, and ideals.",
          image: "/images/culture-entrepreneurship.png",
        },
        {
          title: "Endless Striving",
          description:
            "Striving is the character of the company, the source of organizational vitality, and the path to realizing both enterprise and personal value.",
          image: "/images/culture-striving.png",
        },
        {
          title: "Lifelong Learning",
          description:
            "Learning is the method of success, the driver of enterprise development, and the foundation for organizational iteration and personal growth.",
          image: "/images/culture-learning.png",
        },
      ],
    },
  },
  operations: {
    sectionTitle: "Operations",
    sectionTitleEn: "OPERATIONS",
    strategy: {
      title: "Full Value Chain Integration · Cross-Border Expansion",
      description:
        "Centered on the sustainable utilization of forest resources, we drive deep integration across the value chain to maximize resource efficiency while fostering a virtuous cycle of ecological value.",
    },
    items: [
      {
        id: "plantation",
        title: "Commercial Forest Plantations",
        description:
          "Committed to sustainable and circular forestry practices, we achieve resource self-sufficiency through scientific planning and precision management, maximizing ecological benefits alongside economic value.",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/forest-plantation-nKJYujtFKCjk4QjhZkfRbK.webp",
      },
      {
        id: "coffee",
        title: "Coffee Cultivation, Processing & Trading",
        description:
          "Situated within East Africa's prime coffee-growing belt, we promote high-standard cultivation, ecologically sound practices, and an integrated industrial approach, ensuring reliable upstream supply for coffee processing and commodity trading.",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/coffee-plantation-AgiRi3pjb4xPHJqcfAaYMu.webp",
      },
      {
        id: "forestchemicals",
        title: "Forest Chemicals",
        description:
          "All pine resin processed by CFID is scientifically tapped by our in-house teams from company-owned or cooperative plantations. Our standardized collection processes and stable forest resources ensure consistently high-quality raw materials and reliable supply.",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/pine-resin-oUPGUYkPg7y9RHhFYVzu6q.webp",
      },
      {
        id: "panels",
        title: "Engineered Wood Panel Manufacturing",
        description:
          "Using premium timber and non-wood plant fibers as raw materials, our modern production lines manufacture high-quality plywood while advancing MDF production capacity for construction, furniture, and interior design applications.",
        image:
          "https://d2xsxph8kpxj0f.cloudfront.net/310519663507257093/T5tGXvARSyoxmqcg5LybPU/wood-panel-factory-6z7incH54pY5WB3eWS5jZq.webp",
      },
    ],
  },
  careers: {
    sectionTitle: "Careers",
    sectionTitleEn: "CAREERS",
    description:
      "As CFID enters a phase of rapid growth, we place a strong emphasis on nurturing talent and fostering career development. We welcome ambitious professionals from all backgrounds to join us in shaping the future.",
    items: [
      {
        title: "Professional Recruitment",
        description:
          "If you are experienced, driven, and eager to make an impact on an international platform, we offer competitive compensation, rapid growth opportunities, and meaningful challenges.",
      },
      {
        title: "Campus Recruitment",
        description:
          "If you are a young talent ready to grow through hands-on experience, CFID provides a broad development path and a comprehensive training program to help you thrive.",
      },
    ],
  },
  contact: {
    sectionTitle: "Contact Us",
    sectionTitleEn: "CONTACT US",
    company:
      "China Forestry International Development Limited (China Headquarters: Guangdong Junhuida Import & Export Trading Co., Ltd.)",
    phone: "13326894715",
    email: "service@cfid-ug.com",
    address:
      "Room 1101, Building 10, Tianan Yungu, Songshan Lake, Dongguan, Guangdong, China",
  },
  footer: {
    copyright:
      "© China Forestry International Development Limited (China Headquarters: Guangdong Junhuida Import & Export Trading Co., Ltd.)",
    icp: "粤ICP备2022014426号",
  },
};
