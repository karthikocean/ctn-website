import blogImg1 from '../assets/event1.jpg';
import blogImg2 from '../assets/event2.jpg';
import blogImg3 from '../assets/event3.jpg';
import blogImg4 from '../assets/event4.jpg';
import blogImg5 from '../assets/event5.jpg';
import blogImg6 from '../assets/event6.jpg';
import blogImg7 from '../assets/event1.jpg'; // reuse images
import blogImg8 from '../assets/event2.jpg';
import blogImg9 from '../assets/event3.jpg';

export const blogs = [
  {
    id: '1',
    title: 'Building a Strong Business Network',
    image: blogImg1,
    content: `\n## Introduction\nIn today’s competitive market, a robust network can be the differentiator that propels your business forward.\n\n## Main Content\nNetworking isn’t just about exchanging cards; it’s about creating value through strategic relationships. By attending industry events, leveraging online platforms, and fostering genuine connections, you open doors to mentorship, partnerships, and new opportunities.\n\n## Conclusion\nInvest time in nurturing your network, and you’ll reap long‑term benefits that accelerate growth and resilience.`,
    relatedIds: ['2', '3', '4'],
  },
  {
    id: '2',
    title: 'Startup Pitch Strategies for Success',
    image: blogImg2,
    content: `\n## Introduction\nPitching your startup effectively can mean the difference between funding and stalling.\n\n## Main Content\nCraft a concise narrative that highlights the problem, solution, market size, and traction. Use storytelling techniques to engage investors emotionally while backing claims with data. Practice delivery to maintain confidence and adapt to feedback.\n\n## Conclusion\nA well‑structured pitch showcases vision and execution capability, increasing the likelihood of securing investment.`,
    relatedIds: ['1', '5', '6'],
  },
  {
    id: '3',
    title: 'Leadership Lessons from Top CEOs',
    image: blogImg3,
    content: `\n## Introduction\nGreat leaders inspire, empower, and drive transformation.\n\n## Main Content\nKey traits include emotional intelligence, clear communication, and the ability to make data‑driven decisions. Successful CEOs also cultivate a culture of accountability and continuous learning.\n\n## Conclusion\nAdopt these habits to elevate your leadership impact and steer your organization toward sustained success.`,
    relatedIds: ['1', '7', '8'],
  },
  {
    id: '4',
    title: 'Digital Marketing Trends for 2025',
    image: blogImg4,
    content: `\n## Introduction\nThe digital landscape evolves rapidly, and staying ahead is crucial for brand visibility.\n\n## Main Content\nEmerging trends include AI‑generated content, shoppable short videos, and hyper‑personalized email campaigns. Leveraging data analytics enables precise audience targeting and measurable ROI.\n\n## Conclusion\nIntegrate these trends into your strategy to enhance engagement and outpace competitors.`,
    relatedIds: ['1', '5', '9'],
  },
  {
    id: '5',
    title: 'Effective Fundraising for SMEs',
    image: blogImg5,
    content: `\n## Introduction\nAccess to capital remains a primary challenge for small and medium enterprises.\n\n## Main Content\nExplore alternative financing options such as revenue‑based financing, peer‑to‑peer lending, and government grants. Build a compelling business case with clear cash‑flow projections to attract investors.\n\n## Conclusion\nDiversifying funding sources reduces reliance on traditional banks and accelerates growth.`,
    relatedIds: ['2', '4', '6'],
  },
  {
    id: '6',
    title: 'Scaling Operations Efficiently',
    image: blogImg6,
    content: `\n## Introduction\nScaling a business requires balancing speed with operational stability.\n\n## Main Content\nImplement standardized processes, invest in automation, and empower teams through clear KPIs. Prioritize customer experience while expanding capacity to maintain trust.\n\n## Conclusion\nStrategic scaling sustains growth without sacrificing quality or brand reputation.`,
    relatedIds: ['2', '5', '7'],
  },
  {
    id: '7',
    title: 'Women Entrepreneurship: Breaking Barriers',
    image: blogImg7,
    content: `\n## Introduction\nWomen entrepreneurs are reshaping industries, yet face unique challenges.\n\n## Main Content\nAccess to mentorship, funding, and networks are critical. Cultivating supportive ecosystems and inclusive policies drives innovation and economic growth.\n\n## Conclusion\nEmpowering women founders unlocks untapped potential and fosters diverse leadership.`,
    relatedIds: ['3', '6', '8'],
  },
  {
    id: '8',
    title: 'Future of Remote Work in India',
    image: blogImg8,
    content: `\n## Introduction\nRemote work has become a permanent fixture in the modern workplace.\n\n## Main Content\nAdopt hybrid models, invest in collaboration tools, and establish clear performance metrics. Emphasize employee well‑being to sustain productivity.\n\n## Conclusion\nA thoughtful remote‑work strategy enhances talent acquisition and organizational agility.`,
    relatedIds: ['3', '7', '9'],
  },
  {
    id: '9',
    title: 'Sustainable Business Practices for Growth',
    image: blogImg9,
    content: `\n## Introduction\nSustainability is no longer optional; it drives brand loyalty and long‑term profitability.\n\n## Main Content\nIntegrate eco‑friendly operations, circular economy principles, and transparent reporting. Align sustainability goals with core business objectives to create shared value.\n\n## Conclusion\nCommit to sustainable practices to differentiate your brand and attract conscious consumers.`,
    relatedIds: ['4', '8', '1'],
  },
];
