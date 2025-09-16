
// ⚠️ DEMO DATA ONLY - For Testing Pipeline Deployment
// This file contains mock test results for infrastructure validation
// Replace with real data integration in production

export interface TestResult {
  contactId: string;
  sessionId: string;
  contactName: string;
  email: string;
  overallScore: number;
  percentile: number;
  categories: {
    name: string;
    score: number;
    maxScore: number;
  }[];
  strengths: string[];
  improvementAreas: string[];
  recommendations: string[];
  completionTime: string;
  accuracy: number;
  dateCompleted: string;
}

export const mockTestResults: TestResult[] = [
  {
    contactId: '12345',
    sessionId: 'session001',
    contactName: 'John Smith',
    email: 'john.smith@email.com',
    overallScore: 125,
    percentile: 85,
    categories: [
      { name: "Logical Reasoning", score: 130, maxScore: 160 },
      { name: "Pattern Recognition", score: 125, maxScore: 160 },
      { name: "Spatial Intelligence", score: 120, maxScore: 160 },
      { name: "Numerical Reasoning", score: 128, maxScore: 160 },
      { name: "Verbal Comprehension", score: 122, maxScore: 160 }
    ],
    strengths: ['Logical Reasoning', 'Numerical Analysis', 'Problem Solving'],
    improvementAreas: ['Spatial Intelligence', 'Processing Speed'],
    recommendations: [
      'Focus on visual-spatial exercises to enhance 3D thinking',
      'Practice timed cognitive challenges to improve processing speed',
      'Continue developing your strong analytical foundation'
    ],
    completionTime: "22 minutes",
    accuracy: 82,
    dateCompleted: "September 15, 2024"
  },
  {
    contactId: '67890',
    sessionId: 'session002',
    contactName: 'Sarah Johnson',
    email: 'sarah.johnson@company.com',
    overallScore: 142,
    percentile: 96,
    categories: [
      { name: "Logical Reasoning", score: 145, maxScore: 160 },
      { name: "Pattern Recognition", score: 148, maxScore: 160 },
      { name: "Spatial Intelligence", score: 144, maxScore: 160 },
      { name: "Numerical Reasoning", score: 141, maxScore: 160 },
      { name: "Verbal Comprehension", score: 132, maxScore: 160 }
    ],
    strengths: ['Pattern Recognition', 'Logical Reasoning', 'Creative Problem Solving'],
    improvementAreas: ['Verbal Comprehension', 'Time Management'],
    recommendations: [
      'Challenge yourself with advanced cognitive puzzles',
      'Consider pursuing leadership roles in analytical fields',
      'Practice verbal reasoning to round out your exceptional profile'
    ],
    completionTime: "18 minutes",
    accuracy: 94,
    dateCompleted: "September 16, 2024"
  },
  {
    contactId: '11111',
    sessionId: 'session003',
    contactName: 'Mike Chen',
    email: 'mike.chen@startup.io',
    overallScore: 98,
    percentile: 65,
    categories: [
      { name: "Logical Reasoning", score: 95, maxScore: 160 },
      { name: "Pattern Recognition", score: 105, maxScore: 160 },
      { name: "Spatial Intelligence", score: 92, maxScore: 160 },
      { name: "Numerical Reasoning", score: 100, maxScore: 160 },
      { name: "Verbal Comprehension", score: 98, maxScore: 160 }
    ],
    strengths: ['Pattern Recognition', 'Persistence', 'Creative Thinking'],
    improvementAreas: ['Spatial Intelligence', 'Processing Speed'],
    recommendations: [
      'Practice 3D visualization and spatial reasoning exercises',
      'Work on timed cognitive challenges to boost processing speed',
      'Build confidence through consistent practice and problem-solving'
    ],
    completionTime: "28 minutes",
    accuracy: 76,
    dateCompleted: "September 17, 2024"
  },
  {
    contactId: '22222',
    sessionId: 'session004',
    contactName: 'Emily Davis',
    email: 'emily.davis@consulting.com',
    overallScore: 156,
    percentile: 99,
    categories: [
      { name: "Logical Reasoning", score: 160, maxScore: 160 },
      { name: "Pattern Recognition", score: 155, maxScore: 160 },
      { name: "Spatial Intelligence", score: 158, maxScore: 160 },
      { name: "Numerical Reasoning", score: 154, maxScore: 160 },
      { name: "Verbal Comprehension", score: 153, maxScore: 160 }
    ],
    strengths: ['Logical Reasoning', 'Analytical Excellence', 'Comprehensive Intelligence'],
    improvementAreas: ['Emotional Intelligence', 'Practical Application'],
    recommendations: [
      'Explore leadership opportunities in complex problem-solving contexts',
      'Consider mentoring others to apply your exceptional analytical abilities',
      'Focus on translating analytical insights into practical solutions'
    ],
    completionTime: "15 minutes",
    accuracy: 98,
    dateCompleted: "September 18, 2024"
  },
  {
    contactId: '33333',
    sessionId: 'session005',
    contactName: 'Alex Rodriguez',
    email: 'alex.rodriguez@creative.agency',
    overallScore: 110,
    percentile: 75,
    categories: [
      { name: "Logical Reasoning", score: 108, maxScore: 160 },
      { name: "Pattern Recognition", score: 118, maxScore: 160 },
      { name: "Spatial Intelligence", score: 115, maxScore: 160 },
      { name: "Numerical Reasoning", score: 105, maxScore: 160 },
      { name: "Verbal Comprehension", score: 104, maxScore: 160 }
    ],
    strengths: ['Pattern Recognition', 'Creative Problem Solving', 'Adaptability'],
    improvementAreas: ['Numerical Reasoning', 'Processing Speed'],
    recommendations: [
      'Leverage your pattern recognition skills in creative and design fields',
      'Practice mathematical concepts to strengthen numerical reasoning',
      'Build on your creative strengths with innovative problem-solving exercises'
    ],
    completionTime: "25 minutes",
    accuracy: 79,
    dateCompleted: "September 19, 2024"
  }
];

export function getTestResult(contactId: string, sessionId: string): TestResult | null {
  return mockTestResults.find(result => 
    result.contactId === contactId && result.sessionId === sessionId
  ) || null;
}

export function getServiceLevelConfig(level: string) {
  const configs = {
    free: { 
      color: 'bg-blue-100 text-blue-800', 
      label: 'Free Tier',
      features: ['Basic score overview', 'Limited analysis'],
      widget: null
    },
    basic: { 
      color: 'bg-purple-100 text-purple-800', 
      label: 'Basic Plan',
      features: ['Detailed breakdown', 'Category analysis', 'Chat AI assistant'],
      widget: 'chat'
    },
    advanced: { 
      color: 'bg-amber-100 text-amber-800', 
      label: 'Advanced Plan',
      features: ['Complete analysis', 'PDF reports', 'Voice AI assistant', 'Personalized recommendations'],
      widget: 'voice'
    }
  };
  
  return configs[level as keyof typeof configs] || configs.free;
}
