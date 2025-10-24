import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function HowItWorksPage() {
  const steps = [
    {
      number: 1,
      title: "Join & Subscribe",
      description: "Subscriber joins a chit group and pays monthly subscription.",
      icon: "👥",
      details: "Register with us by choosing your preferred chit scheme and paying the initial subscription amount."
    },
    {
      number: 2,
      title: "Live Auction",
      description: "Foreman announces auction date and conducts live bidding (online or offline).",
      icon: "🎯",
      details: "Monthly auctions are conducted where members bid for the chit amount. Highest bidder wins."
    },
    {
      number: 3,
      title: "Win Prize",
      description: "Highest bidder wins the chit and receives prize amount after deductions.",
      icon: "🏆",
      details: "The winning bidder receives the chit amount minus the bid amount and foreman's commission."
    },
    {
      number: 4,
      title: "Share Dividend",
      description: "Foreman distributes dividend to all other members.",
      icon: "💰",
      details: "The bid amount is distributed as dividend among all non-winning members."
    },
    {
      number: 5,
      title: "Repeat Process",
      description: "Process repeats every month until all members receive prize.",
      icon: "🔄",
      details: "The process continues monthly until all members in the group have received their prize amount."
    }
  ]

  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 p-6 bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>How Chit Funds Work</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Understanding the simple and transparent process of chit fund investments
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>The Chit Fund Process</h2>
          
          <div className="space-y-8">
            {steps.map((step, index) => (
              <div key={step.number} className="bg-white rounded-xl shadow-lg p-8 border-l-4 border-green-500">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                  <div className="lg:col-span-2 text-center">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-3xl">{step.icon}</span>
                    </div>
                    <div className="text-2xl font-bold text-green-700">{step.number}</div>
                  </div>
                  
                  <div className="lg:col-span-10">
                    <h3 className="text-2xl font-semibold text-green-800 mb-3">{step.title}</h3>
                    <p className="text-lg text-gray-700 mb-3">{step.description}</p>
                    <p className="text-gray-600">{step.details}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Benefits of Chit Funds</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">💵</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Flexible Investment</h3>
              <p className="text-gray-600">Choose your investment amount and duration based on your financial goals.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Guaranteed Returns</h3>
              <p className="text-gray-600">Regular monthly returns through dividends and potential prize winnings.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Safe & Secure</h3>
              <p className="text-gray-600">Regulated by government authorities with transparent operations.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Better Returns</h3>
              <p className="text-gray-600">Higher returns compared to traditional savings accounts.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Regular Income</h3>
              <p className="text-gray-600">Monthly dividend payments provide regular income stream.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📞</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Customer Support</h3>
              <p className="text-gray-600">Dedicated customer support team for all your queries and assistance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Example Calculation */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Example Calculation</h2>
          
          <div className="bg-green-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Scheme Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>Chit Value:</strong> ₹1,00,000</li>
                  <li><strong>Duration:</strong> 25 months</li>
                  <li><strong>Members:</strong> 25</li>
                  <li><strong>Monthly Subscription:</strong> ₹4,000</li>
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-green-800 mb-4">Returns Scenario</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><strong>If you win in month 10:</strong> ₹70,000 (₹1L - ₹30K bid)</li>
                  <li><strong>Dividend for 9 months:</strong> ₹27,000 (₹3K × 9)</li>
                  <li><strong>Total Investment:</strong> ₹40,000 (₹4K × 10)</li>
                  <li><strong>Net Return:</strong> ₹57,000 profit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What documents are required to join?</h3>
              <p className="text-gray-600">You need identity proof, address proof, and income proof along with passport size photographs.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Can I join multiple schemes?</h3>
              <p className="text-gray-600">Yes, you can participate in multiple chit schemes simultaneously based on your eligibility.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">What happens if I miss a payment?</h3>
              <p className="text-gray-600">We have flexible payment options and grace periods. Contact our team for assistance.</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">How are auctions conducted?</h3>
              <p className="text-gray-600">Auctions are conducted monthly at our office premises with complete transparency and proper documentation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Start Your Chit Fund Journey?</h2>
            <p className="text-green-100 mb-6">
              Join thousands of satisfied members and start building your financial future today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/schedules" className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                View Available Schemes
              </Link>
              <Link href="/contact" className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors border-2 border-white">
                Contact Us Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <img src="/LOGO.png" alt="Brindavan Chits Logo" className="w-10 h-10 mr-3" />
            <span className="font-semibold">Brindavan Chits Karimnagar (India) Pvt. Ltd.</span>
          </div>
          <div className="mb-4">
            <a href="/quotation" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Get Project Quote
            </a>
          </div>
          <p className="text-gray-400 text-sm mb-4">© 2025 Brindavan Chits. All rights reserved. | CIN: U65992TG2007PTC056020</p>
          
          {/* AI Developer India Branding */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Built by</span>
              <a href="https://aideveloperindia.store/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <img
                  src="/A logo transparent.png"
                  alt="AI Developer India Logo"
                  width={20}
                  height={20}
                  className="ml-2"
                />
                <span className="font-medium">AI Developer India</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
