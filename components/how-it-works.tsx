"use client"

export function HowItWorks() {
  const steps = [
    {
      id: "01",
      title: "Choose a game mode",
      description: "Select from beginner, intermediate, expert, or time challenge modes based on your skill level.",
    },
    {
      id: "02",
      title: "Describe the image",
      description: "Study the image carefully and write a detailed prompt that captures all key elements.",
    },
    {
      id: "03",
      title: "Get instant feedback",
      description: "Receive a score and detailed feedback comparing your prompt to the ideal description.",
    },
    {
      id: "04",
      title: "Track your progress",
      description: "Watch your skills improve over time with detailed analytics and performance tracking.",
    },
  ]

  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">How It Works</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Simple steps to master prompt engineering
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 mx-auto">
            Our structured approach helps you improve your skills systematically.
          </p>
        </div>

        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div key={step.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200 shadow-sm">
                <div className="flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white text-xl font-bold mb-4">
                  {step.id}
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">{step.title}</h3>
                <p className="text-base text-gray-500">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

