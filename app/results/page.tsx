
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
  Star,
  AlertCircle
} from 'lucide-react';
import Link from 'next/link';
import { getTestResult, getServiceLevelConfig, TestResult } from '@/lib/mockData';
import AIWidget from '@/components/AIWidget';

function ResultsContent() {
  const searchParams = useSearchParams();
  const contactId = searchParams?.get('contact') || '';
  const sessionId = searchParams?.get('session') || '';
  const level = searchParams?.get('level') || 'free';

  // Get user's test results
  const userResults = getTestResult(contactId, sessionId);
  const serviceConfig = getServiceLevelConfig(level);

  // Handle case where user is not found
  if (!userResults) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white flex items-center justify-center">
        <Card className="max-w-md w-full mx-4">
          <CardHeader className="text-center">
            <AlertCircle className="h-12 w-12 text-amber-500 mx-auto mb-4" />
            <CardTitle>Results Not Found</CardTitle>
            <CardDescription>
              We couldn't find test results for contact {contactId} and session {sessionId}.
            </CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600 mb-4">
              Available test data for:
            </p>
            <div className="space-y-2 text-sm">
              <div><strong>Contact:</strong> 12345, <strong>Session:</strong> session001</div>
              <div><strong>Contact:</strong> 67890, <strong>Session:</strong> session002</div>
              <div><strong>Contact:</strong> 11111, <strong>Session:</strong> session003</div>
              <div><strong>Contact:</strong> 22222, <strong>Session:</strong> session004</div>
              <div><strong>Contact:</strong> 33333, <strong>Session:</strong> session005</div>
            </div>
            <Link href="/" className="mt-4 inline-block">
              <Button>
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

  const firstName = userResults.contactName.split(' ')[0];

  const ServiceLevelBadge = () => {
    const icons = { free: Brain, basic: Zap, advanced: Crown };
    const Icon = icons[level as keyof typeof icons] || Brain;
    
    return (
      <Badge className={`${serviceConfig.color} border-0 px-3 py-1`}>
        <Icon className="h-3 w-3 mr-1" />
        {serviceConfig.label}
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
            <div className="text-6xl font-bold text-blue-600 mb-2">{userResults.overallScore}</div>
            <p className="text-slate-600 mb-4">
              {userResults.overallScore >= 140 ? 'Superior Intelligence' : 
               userResults.overallScore >= 120 ? 'Above Average Intelligence' : 
               userResults.overallScore >= 110 ? 'High Average Intelligence' : 'Average Intelligence'}
            </p>
            <Progress value={userResults.percentile} className="w-full h-3" />
            <p className="text-sm text-slate-500 mt-2">
              {userResults.percentile}th percentile
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Upgrade CTA */}
      <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-purple-200">
        <CardHeader>
          <CardTitle className="text-purple-800">Unlock Detailed Analysis</CardTitle>
          <CardDescription className="text-purple-600">
            Upgrade to see comprehensive breakdowns, personalized insights, and AI chat assistant
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="text-sm text-purple-700 space-y-1">
              <li>• Complete category breakdown</li>
              <li>• Personalized recommendations</li>
              <li>• AI chat assistant for guidance</li>
            </ul>
            <Button 
              className="w-full bg-purple-600 hover:bg-purple-700"
              onClick={() => {
                alert('This is a mockup. In a real app, this would redirect to upgrade page.');
              }}
            >
              <Sparkles className="mr-2 h-4 w-4" />
              Upgrade to Basic Plan
            </Button>
          </div>
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
              <div className="text-5xl font-bold text-blue-600 mb-2">{userResults.overallScore}</div>
              <p className="text-slate-600">
                {userResults.overallScore >= 140 ? 'Superior Intelligence' : 
                 userResults.overallScore >= 120 ? 'Above Average Intelligence' : 
                 userResults.overallScore >= 110 ? 'High Average Intelligence' : 'Average Intelligence'}
              </p>
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
              <span className="font-semibold">{userResults.accuracy}%</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Time:</span>
              <span className="font-semibold">{userResults.completionTime}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-600">Percentile:</span>
              <span className="font-semibold">{userResults.percentile}th</span>
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
          <CardDescription>Your performance across cognitive domains</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {userResults.categories.map((category, index) => (
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

      {/* AI Chat Assistant */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Zap className="h-5 w-5 mr-2 text-purple-500" />
            Your AI Assistant
          </CardTitle>
          <CardDescription>Chat with your personal AI to understand your results better</CardDescription>
        </CardHeader>
        <CardContent>
          <AIWidget 
            type="chat" 
            contactName={userResults.contactName} 
            testScore={userResults.overallScore} 
          />
        </CardContent>
      </Card>

      {/* Premium Upgrade */}
      <Card className="bg-gradient-to-r from-amber-50 to-orange-50 border-amber-200">
        <CardHeader>
          <CardTitle className="text-amber-800">Unlock Voice AI Assistant</CardTitle>
          <CardDescription className="text-amber-700">
            Upgrade to Advanced for voice conversations, PDF reports, and premium insights
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            <ul className="text-sm text-amber-700 space-y-1">
              <li>• Voice AI conversations</li>
              <li>• Downloadable PDF reports</li>
              <li>• Advanced recommendations</li>
              <li>• Progress tracking</li>
            </ul>
            <Button 
              className="w-full bg-amber-600 hover:bg-amber-700"
              onClick={() => {
                alert('This is a mockup. In a real app, this would redirect to advanced tier upgrade.');
              }}
            >
              <Crown className="mr-2 h-4 w-4" />
              Upgrade to Advanced Plan
            </Button>
          </div>
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
            <CardTitle className="text-3xl font-bold text-blue-600">{userResults.overallScore}</CardTitle>
            <CardDescription>Overall IQ Score</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <div className="flex items-center justify-center space-x-2 mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className={`h-4 w-4 ${i < Math.floor(userResults.overallScore / 30) ? 'text-amber-400 fill-current' : 'text-slate-300'}`} />
              ))}
            </div>
            <p className="text-sm text-slate-600">
              {userResults.overallScore >= 140 ? 'Superior Intelligence' : 
               userResults.overallScore >= 120 ? 'Above Average Intelligence' : 
               userResults.overallScore >= 110 ? 'High Average Intelligence' : 'Average Intelligence'}
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-green-600">{userResults.percentile}th</CardTitle>
            <CardDescription>Percentile Ranking</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600 mb-2">Better than {userResults.percentile}% of test takers</p>
            <Progress value={userResults.percentile} className="h-2" />
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl font-bold text-purple-600">{userResults.accuracy}%</CardTitle>
            <CardDescription>Accuracy Rate</CardDescription>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-sm text-slate-600">Completed in {userResults.completionTime}</p>
            <div className="mt-2">
              <Badge className={`${userResults.accuracy >= 90 ? 'bg-green-100 text-green-800' : 
                                userResults.accuracy >= 80 ? 'bg-blue-100 text-blue-800' : 
                                'bg-amber-100 text-amber-800'}`}>
                {userResults.accuracy >= 90 ? 'Excellent' : 
                 userResults.accuracy >= 80 ? 'Good' : 'Average'}
              </Badge>
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
            {userResults.categories.map((category, index) => (
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
                   category.score >= 110 ? 'Good performance' :
                   'Average performance with improvement opportunities'}
                </p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Strengths and Recommendations */}
      <div className="grid md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-green-700">
              <TrendingUp className="h-5 w-5 mr-2" />
              Your Strengths
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {userResults.strengths.map((strength, index) => (
                <li key={index} className="flex items-center text-sm">
                  <Badge variant="outline" className="mr-2 text-green-700 border-green-200">
                    {strength}
                  </Badge>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center text-blue-700">
              <Target className="h-5 w-5 mr-2" />
              Recommendations
            </CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="space-y-2">
              {userResults.recommendations.slice(0, 3).map((rec, index) => (
                <li key={index} className="text-sm text-slate-700">
                  • {rec}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Voice AI Assistant */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center text-slate-800">
            <Crown className="h-5 w-5 mr-2 text-amber-500" />
            Your Advanced AI Assistant
          </CardTitle>
          <CardDescription>Discuss your results with our advanced voice AI</CardDescription>
        </CardHeader>
        <CardContent>
          <AIWidget 
            type="voice" 
            contactName={userResults.contactName} 
            testScore={userResults.overallScore} 
          />
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
          Download PDF Report
        </Button>
        <Button 
          variant="outline" 
          className="flex-1"
          onClick={async () => {
            if (navigator?.share) {
              try {
                await navigator.share({
                  title: 'My IQ Test Results',
                  text: `I scored ${userResults.overallScore} on my IQ test!`,
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
      {/* Demo Banner */}
      <div className="bg-red-50 border-b border-red-200">
        <div className="max-w-4xl mx-auto px-6 py-3">
          <div className="flex items-center justify-center">
            <Badge className="bg-red-100 text-red-800 border-red-200 px-4 py-2">
              <Zap className="h-4 w-4 mr-2" />
              DEMO RESULTS - Test Data Only
            </Badge>
          </div>
        </div>
      </div>
      
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
                Session: {sessionId} • Completed: {userResults.dateCompleted}
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
        
        {/* Debug Info */}
        <Card className="mt-8 bg-slate-50">
          <CardHeader>
            <CardTitle className="text-sm text-slate-600">Debug Info</CardTitle>
          </CardHeader>
          <CardContent className="text-xs text-slate-500">
            <p>Contact ID: {contactId} | Session: {sessionId} | Level: {level}</p>
            <p>URL Parameters: contact={contactId}&session={sessionId}&level={level}</p>
          </CardContent>
        </Card>
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
