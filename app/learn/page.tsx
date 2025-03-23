import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BookOpen, Code, Lightbulb, Award, Target, Clock } from "lucide-react"

export default function LearnPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Learning Center</h1>
          <p className="mt-4 text-xl text-gray-600">
            Master the art of prompt engineering with our comprehensive tutorials and guides
          </p>
        </div>

        <Tabs defaultValue="tutorials" className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="tutorials" className="flex items-center">
              <BookOpen className="h-4 w-4 mr-2" />
              Tutorials
            </TabsTrigger>
            <TabsTrigger value="practice" className="flex items-center">
              <Target className="h-4 w-4 mr-2" />
              Practice Exercises
            </TabsTrigger>
            <TabsTrigger value="resources" className="flex items-center">
              <Lightbulb className="h-4 w-4 mr-2" />
              Resources
            </TabsTrigger>
          </TabsList>

          <TabsContent value="tutorials">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Getting Started</CardTitle>
                  <CardDescription>Learn the basics of prompt engineering</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-2 text-xs font-bold">
                        1
                      </div>
                      Introduction to Prompt Engineering
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-2 text-xs font-bold">
                        2
                      </div>
                      Understanding AI Image Generation
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-2 text-xs font-bold">
                        3
                      </div>
                      Key Elements of Effective Prompts
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-indigo-100 text-indigo-800 flex items-center justify-center mr-2 text-xs font-bold">
                        4
                      </div>
                      Common Mistakes to Avoid
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/learn/getting-started">Start Learning</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Intermediate Techniques</CardTitle>
                  <CardDescription>Take your prompt skills to the next level</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center mr-2 text-xs font-bold">
                        1
                      </div>
                      Descriptive Language Patterns
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center mr-2 text-xs font-bold">
                        2
                      </div>
                      Spatial Relationships & Composition
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center mr-2 text-xs font-bold">
                        3
                      </div>
                      Color Theory & Mood Setting
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-yellow-100 text-yellow-800 flex items-center justify-center mr-2 text-xs font-bold">
                        4
                      </div>
                      Style & Artistic Direction
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/learn/intermediate">Start Learning</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card className="flex flex-col h-full">
                <CardHeader>
                  <CardTitle>Advanced Mastery</CardTitle>
                  <CardDescription>Expert-level prompt engineering</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 text-xs font-bold">
                        1
                      </div>
                      Psychological Aspects of Description
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 text-xs font-bold">
                        2
                      </div>
                      Technical Parameters & Modifiers
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 text-xs font-bold">
                        3
                      </div>
                      Domain-Specific Terminology
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-6 h-6 rounded-full bg-red-100 text-red-800 flex items-center justify-center mr-2 text-xs font-bold">
                        4
                      </div>
                      Prompt Optimization Strategies
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/learn/advanced">Start Learning</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="practice">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Target className="h-5 w-5 text-indigo-500 mr-2" />
                    Guided Practice
                  </CardTitle>
                  <CardDescription>Step-by-step exercises with immediate feedback</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Our guided practice mode walks you through the process of writing effective prompts with real-time
                    guidance and feedback.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Structured learning path
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Detailed explanations
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Progressive difficulty
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Instant feedback
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/learn/practice/guided">Start Guided Practice</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-5 w-5 text-indigo-500 mr-2" />
                    Challenge Exercises
                  </CardTitle>
                  <CardDescription>Test your skills with timed challenges</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Ready to put your skills to the test? Our challenge exercises simulate real-world prompt engineering
                    scenarios with time pressure.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Industry-specific challenges
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Timed exercises
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Comparative scoring
                    </li>
                    <li className="flex items-center text-gray-700">
                      <div className="w-2 h-2 rounded-full bg-indigo-500 mr-2"></div>
                      Performance analytics
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" asChild>
                    <Link href="/learn/practice/challenges">Start Challenges</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="resources">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <BookOpen className="h-5 w-5 text-indigo-500 mr-2" />
                    Prompt Engineering Guide
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">
                    A comprehensive guide to prompt engineering principles, techniques, and best practices.
                  </p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/resources/guide">View Guide</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Code className="h-5 w-5 text-indigo-500 mr-2" />
                    Prompt Templates
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Ready-to-use prompt templates for various scenarios and image types.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/resources/templates">View Templates</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Award className="h-5 w-5 text-indigo-500 mr-2" />
                    Expert Examples
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">Study examples of expert-level prompts and their resulting images.</p>
                </CardContent>
                <CardFooter>
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/learn/resources/examples">View Examples</Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </TabsContent>
        </Tabs>

        <div className="mt-12 bg-indigo-50 p-6 rounded-lg">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-2/3 mb-6 md:mb-0 md:pr-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Ready to put your skills to the test?</h2>
              <p className="text-gray-700">
                Apply what you've learned in our game modes. Start with Easy mode and work your way up to the Challenge
                mode as your skills improve.
              </p>
            </div>
            <div className="md:w-1/3 flex justify-center">
              <Button size="lg" className="px-8" asChild>
                <Link href="/play">Play Now</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

