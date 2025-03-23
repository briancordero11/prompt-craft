import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { HelpCircle, MessageSquare, Bug, Lightbulb } from "lucide-react"

export default function SupportPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Support Center</h1>
          <p className="mt-4 text-xl text-gray-600">We're here to help you get the most out of PromptCraft</p>
        </div>

        <Tabs defaultValue="contact" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="contact" className="flex items-center">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Us
            </TabsTrigger>
            <TabsTrigger value="bug" className="flex items-center">
              <Bug className="h-4 w-4 mr-2" />
              Report Bug
            </TabsTrigger>
            <TabsTrigger value="feature" className="flex items-center">
              <Lightbulb className="h-4 w-4 mr-2" />
              Feature Request
            </TabsTrigger>
            <TabsTrigger value="help" className="flex items-center">
              <HelpCircle className="h-4 w-4 mr-2" />
              Help Guides
            </TabsTrigger>
          </TabsList>

          <TabsContent value="contact">
            <Card>
              <CardHeader>
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Have a question or need assistance? Send us a message and we'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="Your email address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" placeholder="What is your message about?" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea id="message" placeholder="Please describe your issue or question in detail" rows={5} />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Send Message</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="bug">
            <Card>
              <CardHeader>
                <CardTitle>Report a Bug</CardTitle>
                <CardDescription>
                  Found something that's not working correctly? Let us know so we can fix it.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bug-name">Name</Label>
                    <Input id="bug-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bug-email">Email</Label>
                    <Input id="bug-email" type="email" placeholder="Your email address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bug-location">Where did you encounter the bug?</Label>
                  <Input id="bug-location" placeholder="e.g., Play page, Leaderboard, etc." />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="bug-description">Bug Description</Label>
                  <Textarea
                    id="bug-description"
                    placeholder="Please describe what happened, what you expected to happen, and steps to reproduce the issue"
                    rows={5}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Bug Report</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="feature">
            <Card>
              <CardHeader>
                <CardTitle>Feature Request</CardTitle>
                <CardDescription>Have an idea to make PromptCraft better? We'd love to hear it!</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="feature-name">Name</Label>
                    <Input id="feature-name" placeholder="Your name" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="feature-email">Email</Label>
                    <Input id="feature-email" type="email" placeholder="Your email address" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feature-title">Feature Title</Label>
                  <Input id="feature-title" placeholder="A short title for your feature idea" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="feature-description">Feature Description</Label>
                  <Textarea
                    id="feature-description"
                    placeholder="Please describe your feature idea in detail. What problem would it solve? How would it improve PromptCraft?"
                    rows={5}
                  />
                </div>
              </CardContent>
              <CardFooter>
                <Button className="w-full">Submit Feature Request</Button>
              </CardFooter>
            </Card>
          </TabsContent>

          <TabsContent value="help">
            <Card>
              <CardHeader>
                <CardTitle>Help Guides</CardTitle>
                <CardDescription>Quick guides to help you get the most out of PromptCraft</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="/learn/getting-started" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Getting Started</h3>
                    <p className="text-gray-600">Learn the basics of PromptCraft and how to play your first game</p>
                  </a>
                  <a href="/learn/prompt-writing" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Prompt Writing Tips</h3>
                    <p className="text-gray-600">Improve your prompt writing skills with these expert tips</p>
                  </a>
                  <a href="/learn/account-settings" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Account Settings</h3>
                    <p className="text-gray-600">Manage your profile, preferences, and account settings</p>
                  </a>
                  <a href="/learn/leaderboards" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Leaderboards & Scoring</h3>
                    <p className="text-gray-600">Understand how scoring works and how to climb the leaderboards</p>
                  </a>
                  <a href="/learn/advanced-techniques" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Advanced Techniques</h3>
                    <p className="text-gray-600">Master advanced prompt engineering techniques</p>
                  </a>
                  <a href="/learn/troubleshooting" className="block p-4 border rounded-lg hover:bg-gray-50">
                    <h3 className="font-medium text-lg mb-2">Troubleshooting</h3>
                    <p className="text-gray-600">Solutions to common issues and problems</p>
                  </a>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button variant="outline" asChild>
                  <a href="/learn">View All Learning Resources</a>
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}

