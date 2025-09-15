
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Brain, Zap, Star, ArrowRight } from 'lucide-react';

export default function HomePage() {
  const exampleUrls = [
    {
      title: "Free Tier Example",
      description: "Basic results display with limited features",
      url: "/results?contact=john.doe@example.com&session=12345&level=free",
      icon: Brain,
      color: "bg-blue-50 border-blue-200"
    },
    {
      title: "Basic Tier Example", 
      description: "Enhanced results with additional widgets",
      url: "/results?contact=jane.smith@example.com&session=67890&level=basic",
      icon: Zap,
      color: "bg-purple-50 border-purple-200"
    },
    {
      title: "Advanced Tier Example",
      description: "Premium layout with comprehensive analytics",
      url: "/results?contact=alex.johnson@example.com&session=11111&level=advanced",
      icon: Star,
      color: "bg-amber-50 border-amber-200"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
      <div className="bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="text-center">
            <div className="flex items-center justify-center mb-4">
              <Brain className="h-12 w-12 text-blue-600 mr-3" />
              <h1 className="text-4xl font-bold text-slate-900">AI IQ Test Results</h1>
            </div>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Test page structure for displaying personalized AI IQ test results with different service level templates
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-2xl font-semibold text-slate-800 mb-4">
            Service Level Examples
          </h2>
          <p className="text-slate-600">
            Click the examples below to see how different service levels display test results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {exampleUrls.map((example, index) => {
            const Icon = example.icon;
            return (
              <Card key={index} className={`${example.color} hover:shadow-lg transition-shadow duration-200`}>
                <CardHeader className="text-center">
                  <Icon className="h-12 w-12 mx-auto mb-3 text-slate-700" />
                  <CardTitle className="text-slate-800">{example.title}</CardTitle>
                  <CardDescription className="text-slate-600">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="text-center">
                  <Link href={example.url}>
                    <Button variant="outline" className="w-full group">
                      View Results
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Technical Details */}
        <Card className="bg-slate-50 border-slate-200">
          <CardHeader>
            <CardTitle className="text-slate-800">URL Parameter Structure</CardTitle>
            <CardDescription>
              The results page reads these URL parameters to customize the display:
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm font-medium">
                  contact
                </div>
                <div className="text-slate-600">User's email address for personalization</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                  session
                </div>
                <div className="text-slate-600">Unique session ID for test results</div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm font-medium">
                  level
                </div>
                <div className="text-slate-600">Service tier: free, basic, or advanced</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
