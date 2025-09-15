
'use client';

import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  TrendingUp, 
  Trophy, 
  Target, 
  BarChart3, 
  Sparkles, 
  Crown, 
  Zap,
  ArrowLeft,
  Download,
  Share2,
  Star
} from 'lucide-react';
import Link from 'next/link';

// Mock test results data
const mockResults = {
  overallScore: 142,
  percentile: 96,
  categories: [
    { name: "Logical Reasoning", score: 145, maxScore: 160 },
    { name: "Pattern Recognition", score: 138, maxScore: 160 },
    { name: "Spatial Intelligence", score: 144, maxScore: 160 },
    { name: "Numerical Reasoning", score: 141, maxScore: 160 },
    { name: "Verbal Comprehension", score: 139, maxScore: 160 }
  ],
  completionTime: "18 minutes",
  accuracy: 87,
  dateCompleted: "September 15, 2024"
};

function ResultsContent() {
  const searchParams = useSearchParams();
  const contact = searchParams?.get('contact') || 'Guest User';
  const session = searchParams?.get('session') || '00000';
  const level = searchParams?.get('level') || 'free';

  // Extract first name from email
  const firstName = contact?.includes('@') 
    ? contact.split('@')[0].split('.').map(name => 
        name.charAt(0).toUpperCase() + name.slice(1)
      ).join(' ')
    : contact;

  const ServiceLevelBadge = () => {
    const badgeConfig = {
      free: { color: 'bg-blue-100 text-blue-800', icon: Brain, label: 'Free' },
      basic: { color: 'bg-purple-100 text-purple-800', icon: Zap, label: 'Basic' },
      advanced: { color: 'bg-amber-100 text-amber-800', icon: Crown, label: 'Advanced' }
    };
    
    const config = badgeConfig[level as keyof typeof badgeConfig] || badgeConfig.free;
    const Icon = config.icon;
    
    return (
      <Badge className={`${config.color} border-0 px-3 py-1`}>
        <Icon className="h-3 w-3 mr-1" />
        {config.label}
      </Badge>
    );
  };

  const FreeTemplate = () => (
    <div className="space-y-6">
      {/* Basic Results */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Trophy className="h-5 w-5 mr-2 text-amber-500" />
            Your IQ Score
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center">
            <div className="text-6xl font-bold text-blue-600 mb-2">{mockResults.overallScore}</div>
            <p className="text-slate-600 mb-4">Above Average Intelligence</p>
            <Progress value={mockResults.percentile} className="w-full h-3" />
            <p className="text-sm text-slate-500 mt-2">
              {mockResults.percentile}th percentile
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade CTA */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">Unlock Detailed Analysis</CardTitle>
          <CardDescription className="text-purple-600">
            Upgrade to see comprehensive breakdowns, personalized insights, and detailed comparisons
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-purple-600 hover:bg-purple-700"
            onClick={() => {
              alert('This is a mockup. In a real app, this would redirect to upgrade page or payment flow.');
            }}
          >
            <Sparkles className="mr-2 h-4 w-4" />
            Upgrade Now
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const BasicTemplate = () => (
    <div className="space-y-6">
      {/* Enhanced Results */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <Trophy className="h-5 w-5 mr-2 text-amber-500" />
              Overall Score
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center">
              <div className="text-5xl font-bold text-blue-600 mb-2">{mockResults.overallScore}</div>
              <p className="text-slate-600">Superior Intelligence</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-slate-800">
              <TrendingUp className="h-5 w-5 mr-2 text-green-500" />
              Performance Metrics
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex justify-between">
              <span className="text-slate-600">Accuracy:</span>
              <span className="font-semibold">{mockResults.accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Time:</span>
              <span className="font-semibold">{mockResults.completionTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Percentile:</span>
              <span className="font-semibold">{mockResults.percentile}th</span>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Category Breakdown */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <BarChart3 className="h-5 w-5 mr-2 text-blue-500" />
            Category Breakdown
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockResults.categories.slice(0, 3).map((category, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="text-sm font-medium text-slate-700">{category.name}</span>
                  <span className="text-sm text-slate-600">{category.score}/{category.maxScore}</span>
                </div>
                <Progress value={(category.score / category.maxScore) * 100} className="h-2" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Premium Upgrade */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Get Complete Analysis</CardTitle>
          <CardDescription className="text-amber-700">
            Unlock all categories, personalized recommendations, and PDF reports
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button 
            className="w-full bg-amber-600 hover:bg-amber-700"
            onClick={() => {
              alert('This is a mockup. In a real app, this would redirect to advanced tier upgrade.');
            }}
          >
            <Crown className="mr-2 h-4 w-4" />
            Upgrade to Advanced
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  const AdvancedTemplate = () => (
    <div className="space-y-6">
      {/* Comprehensive Dashboard */}
      <div className="grid md:grid-cols-3 gap-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-blue-600">{mockResults.overallScore}</CardTitle>
            <CardDescription>Overall IQ Score</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < 4 ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <p className="text-sm text-slate-600">Superior Intelligence</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-600">{mockResults.percentile}th</CardTitle>
            <CardDescription>Percentile Ranking</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600 mb-2">Better than {mockResults.percentile}% of test takers</p>
            <Progress value={mockResults.percentile} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-purple-600">{mockResults.accuracy}%</CardTitle>
            <CardDescription>Accuracy Rate</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600">Completed in {mockResults.completionTime}</p>
            <div className="mt-2">
              <Badge className="bg-green-100 text-green-800">Excellent</Badge>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Full Category Analysis */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Target className="h-5 w-5 mr-2 text-blue-500" />
            Detailed Category Analysis
          </CardTitle>
          <CardDescription>
            Your performance across all cognitive domains
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {mockResults.categories.map((category, index) => (
              <div key={index} className="p-4 bg-slate-50 rounded-lg">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-800">{category.name}</span>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-600">{category.score}</span>
                    <span className="text-slate-500">/{category.maxScore}</span>
                  </div>
                </div>
                <Progress value={(category.score / category.maxScore) * 100} className="h-3 mb-2" />
                <p className="text-sm text-slate-600">
                  {category.score >= 140 ? 'Exceptional performance in this area' : 
                   category.score >= 130 ? 'Strong performance with room for growth' :
                   'Average performance with improvement opportunities'}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex flex-wrap gap-3">
        <Button 
          className="flex-1 bg-blue-600 hover:bg-blue-700"
          onClick={() => {
            alert('This is a mockup. In a real app, this would generate and download a PDF report.');
          }}
        >
          <Download className="mr-2 h-4 w-4" />
          Download Report
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={async () => {
            if (navigator?.share) {
              try {
                await navigator.share({
                  title: 'My AI IQ Test Results',
                  text: `I scored ${mockResults.overallScore} on my AI IQ test!`,
                  url: window.location.href,
                });
              } catch (err) {
                console.log('Error sharing:', err);
                alert('This is a mockup. In a real app, this would share your results.');
              }
            } else {
              alert('This is a mockup. In a real app, this would share your results via social media or email.');
            }
          }}
        >
          <Share2 className="mr-2 h-4 w-4" />
          Share Results
        </Button>
      </div>
    </div>
  );

  const renderTemplate = () => {
    switch (level) {
      case 'basic':
        return <BasicTemplate />;
      case 'advanced':
        return <AdvancedTemplate />;
      default:
        return <FreeTemplate />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-6">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center space-x-3 mb-2">
                <h1 className="text-2xl font-bold text-slate-900">
                  Hello, {firstName}!
                </h1>
                <ServiceLevelBadge />
              </div>
              <p className="text-slate-600">
                Session: {session} • Completed: {mockResults.dateCompleted}
              </p>
            </div>
            <Link href="/">
              <Button variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back
              </Button>
            </Link>
          </div>
        </div>
      </div>

      {/* Results Content */}
      <div className="max-w-4xl mx-auto px-6 py-8">
        {renderTemplate()}
      </div>
    </div>
  );
}

export default function ResultsPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Brain className="h-12 w-12 animate-spin text-blue-600 mx-auto mb-4" />
          <p className="text-slate-600">Loading your results...</p>
        </div>
      </div>
    }>
      <ResultsContent />
    </Suspense>
  );
}
