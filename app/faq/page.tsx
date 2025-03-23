import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function FAQPage() {
  const faqs = [
    {
      question: "What is PromptCraft?",
      answer:
        "PromptCraft is an interactive platform designed to help you improve your prompt engineering skills through gamified practice. You'll describe images with precision and learn to craft the perfect prompts for AI image generation.",
    },
    {
      question: "How does the scoring system work?",
      answer:
        "Your score is calculated based on how well your prompt matches the ideal description. We analyze key object identification, attribute accuracy (colors, sizes, positions), contextual understanding, and descriptive quality.",
    },
    {
      question: "Do I need to create an account to play?",
      answer:
        "While you can play a few games without an account, creating a free account allows you to track your progress, save your scores, and compete on the leaderboard.",
    },
    {
      question: "What are the different game modes?",
      answer:
        "PromptCraft offers four game modes: Beginner (Easy), Intermediate (Medium), Expert (Hard), and Time Challenge. Each mode increases in difficulty and complexity of the images you'll need to describe.",
    },
    {
      question: "How can I improve my prompt engineering skills?",
      answer:
        "Regular practice is key! Pay attention to the feedback after each submission, learn from the ideal prompts, and gradually incorporate more detail and precision in your descriptions. The Learn section also provides tutorials and tips.",
    },
    {
      question: "Can I use PromptCraft on mobile devices?",
      answer:
        "Yes! PromptCraft is fully responsive and works on smartphones and tablets, allowing you to practice your prompt engineering skills on the go.",
    },
    {
      question: "How often is the leaderboard updated?",
      answer:
        "The leaderboard is updated in real-time as players complete games. We also feature daily, weekly, and monthly leaderboards to showcase consistent top performers.",
    },
    {
      question: "Is there a limit to how many games I can play?",
      answer:
        "Free accounts can play up to 10 games per day. For unlimited games and additional features, consider becoming a sponsor.",
    },
    {
      question: "How can I report a bug or suggest a feature?",
      answer:
        "Visit our Support page to report bugs or suggest new features. We value your feedback and continuously work to improve PromptCraft.",
    },
    {
      question: "Can I use PromptCraft for team training or educational purposes?",
      answer:
        "Many organizations use PromptCraft to train their teams on effective prompt engineering. Contact us about our Enterprise sponsorship tier for custom solutions.",
    },
  ]

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900">Frequently Asked Questions</h1>
          <p className="mt-4 text-xl text-gray-600">Find answers to common questions about PromptCraft</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Common Questions</CardTitle>
            <CardDescription>Everything you need to know about PromptCraft</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-medium">{faq.question}</AccordionTrigger>
                  <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </CardContent>
        </Card>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">Still have questions? We're here to help!</p>
          <div className="flex justify-center space-x-4">
            <a
              href="/support"
              className="px-6 py-3 bg-indigo-600 text-white rounded-md hover:bg-indigo-500 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="/learn"
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors"
            >
              Visit Learning Center
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

