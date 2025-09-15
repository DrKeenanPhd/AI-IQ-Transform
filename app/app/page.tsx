
'use client';

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { 
  Brain, 
  Users, 
  TrendingUp, 
  Shield, 
  Clock, 
  Trophy,
  Sparkles,
  Target,
  BookOpen,
  BarChart3,
  Zap,
  ExternalLink
} from 'lucide-react'

export default function Home() {
  const testUsers = [
    {
      name: "John Smith",
      contactId: "12345",
      sessionId: "session001", 
      score: 125,
      level: "free",
      description: "Average user, free tier"
    },
    {
      name: "Sarah Johnson", 
      contactId: "67890",
      sessionId: "session002",
      score: 142,
      level: "basic", 
      description: "High performer, basic plan with chat"
    },
    {
      name: "Mike Chen",
      contactId: "11111", 
      sessionId: "session003",
      score: 98,
      level: "free",
      description: "Lower score, needs encouragement"
    },
    {
      name: "Emily Davis",
      contactId: "22222",
      sessionId: "session004", 
      score: 156,
      level: "advanced",
      description: "Exceptional score, advanced plan with voice"
    },
    {
      name: "Alex Rodriguez",
      contactId: "33333",
      sessionId: "session005",
      score: 110, 
      level: "basic",
      description: "Average score, basic plan with chat"
    }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 via-white to-slate-50">
      {/* Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 to-purple-600/5"></div>
        <div className="relative max-w-7xl mx-auto px-6 py-16">
          <div className="text-center space-y-8">
            {/* Main Title */}
            <div className="space-y-4">
              <div className="flex justify-center">
                <Badge className="bg-red-100 text-red-800 border-red-200 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  EVALUATION ONLY - Pipeline Test
                </Badge>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
                🧪 EVALUATION ONLY
                <br />
                Deployment Test
              </h1>
              
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                🚧 TESTING PIPELINE: Vercel deployment, URL handling, static/dynamic functionality, integrations (GitHub, GHL, Vapi, Supabase). 
                Content and features are placeholder only - NOT PRODUCTION READY.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Test URLs Section */}
      <div className="max-w-7xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            🧪 Testing URL Parameters & Dynamic Loading
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Testing deployment functionality: URL parameter handling, dynamic data loading, template switching.
            <br /><strong>⚠️ PLACEHOLDER CONTENT - Testing deployment pipeline only</strong>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testUsers.map((user, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg">{user.name}</CardTitle>
                  <Badge className={`${
                    user.level === 'advanced' ? 'bg-amber-100 text-amber-800' :
                    user.level === 'basic' ? 'bg-purple-100 text-purple-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {user.level === 'advanced' ? 'Advanced Plan' :
                     user.level === 'basic' ? 'Basic Plan' : 'Free Tier'}
                  </Badge>
                </div>
                <CardDescription className="text-sm">
                  {user.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-600 mb-1">{user.score}</div>
                    <div className="text-sm text-slate-600">IQ Score</div>
                  </div>
                  
                  <div className="text-xs text-slate-500 space-y-1">
                    <div><strong>Contact:</strong> {user.contactId}</div>
                    <div><strong>Session:</strong> {user.sessionId}</div>
                    <div><strong>Level:</strong> {user.level}</div>
                  </div>
                  
                  <Link href={`/results?contact=${user.contactId}&session=${user.sessionId}&level=${user.level}`}>
                    <Button className="w-full" variant={user.level === 'advanced' ? 'default' : 'outline'}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Results Page
                    </Button>
                  </Link>
                  
                  {user.level !== 'free' && (
                    <div className="text-xs text-center text-slate-600">
                      ✨ Includes {user.level === 'advanced' ? 'Voice' : 'Chat'} AI Assistant
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
          
          {/* Invalid URL Test */}
          <Card className="border-2 border-dashed border-slate-300">
            <CardHeader>
              <CardTitle className="text-lg text-slate-600">Invalid User Test</CardTitle>
              <CardDescription className="text-sm">
                Test error handling for non-existent user
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-slate-400 mb-1">???</div>
                  <div className="text-sm text-slate-500">Not Found</div>
                </div>
                
                <div className="text-xs text-slate-500 space-y-1">
                  <div><strong>Contact:</strong> invalid123</div>
                  <div><strong>Session:</strong> invalid456</div>
                  <div><strong>Level:</strong> free</div>
                </div>
                
                <Link href="/results?contact=invalid123&session=invalid456&level=free">
                  <Button className="w-full" variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Test Error Page
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Features Explanation */}
      <div className="bg-slate-50 py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
              What This Demo Shows
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              This mockup demonstrates the key functionality for your real AI IQ test results system.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">Unique User Data</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Each URL loads different user data with unique names, scores, and test results. 
                  Shows personalized content for each contact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Service Level Templates</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Free tier shows basic results + upgrade prompts. Basic shows detailed analysis + chat AI. 
                  Advanced shows complete analysis + voice AI.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-amber-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Brain className="h-6 w-6 text-amber-600" />
                </div>
                <CardTitle className="text-xl">AI Widget Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Basic plan includes interactive chat AI that knows the user's test results. 
                  Advanced plan includes voice AI assistant with full conversation capability.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-green-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">URL Parameter Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  URLs contain contact ID, session ID, and service level. System loads appropriate 
                  data and template based on these parameters.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl">Error Handling</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Graceful handling of invalid URLs with helpful error messages and 
                  available test data options for debugging.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardHeader>
                <div className="bg-teal-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <BarChart3 className="h-6 w-6 text-teal-600" />
                </div>
                <CardTitle className="text-xl">Supabase Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  Built as a static Next.js app that can be easily hosted on Supabase. 
                  Ready for your real data integration and deployment.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* Next Steps */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Real System?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            This mockup demonstrates all the key functionality. The next step is building the real system 
            with your AI IQ test data, Supabase integration, and Vapi voice agents.
          </p>
          
          <div className="text-left bg-white/10 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-white mb-4">What's Working:</h3>
            <ul className="text-blue-100 space-y-2 text-sm">
              <li>✅ URL parameter handling (contact, session, level)</li>
              <li>✅ Dynamic user data loading</li>  
              <li>✅ Service level templates (free, basic, advanced)</li>
              <li>✅ Chat AI widget (basic plan)</li>
              <li>✅ Voice AI widget (advanced plan)</li>
              <li>✅ Error handling for invalid URLs</li>
              <li>✅ Supabase hosting compatible</li>
            </ul>
          </div>
          
          <Button 
            size="lg" 
            className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            onClick={() => {
              alert('This is a mockup. In the real project, this would provide detailed technical specifications.');
            }}
          >
            <Sparkles className="mr-2 h-5 w-5" />
            Get Detailed Specifications
          </Button>
        </div>
      </div>
    </div>
  )
}

