export function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">PromptCraft</h3>
            <p className="text-gray-400">
              Master the art of prompt engineering through gamified practice and challenges.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/play" className="text-gray-400 hover:text-white">
                  Play
                </a>
              </li>
              <li>
                <a href="/learn" className="text-gray-400 hover:text-white">
                  Learn
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="text-gray-400 hover:text-white">
                  Leaderboard
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="/blog" className="text-gray-400 hover:text-white">
                  Blog
                </a>
              </li>
              <li>
                <a href="/tutorials" className="text-gray-400 hover:text-white">
                  Tutorials
                </a>
              </li>
              <li>
                <a href="/faq" className="text-gray-400 hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  Discord
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  GitHub
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} PromptCraft. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

