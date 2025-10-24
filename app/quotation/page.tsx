import Link from 'next/link'
import Image from 'next/image'

export default function QuotationPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/LOGO.png"
                alt="Brindavan Chits Logo"
                width={50}
                height={50}
                className="mr-3"
              />
              <div>
                <h1 className="text-lg font-bold text-green-700">Brindavan Chits</h1>
                <p className="text-xs text-gray-600">Project Quotation</p>
              </div>
            </Link>
            <Link href="/" className="text-green-700 hover:text-green-800 transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-green-700 mb-4">Project Quotation</h1>
            <p className="text-gray-600">Brindavan Chits Karimnagar (India) Pvt. Ltd.</p>
            <p className="text-sm text-gray-500">CIN: U65992TG2007PTC056020</p>
          </div>

          {/* Project Overview */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Project Overview</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <p className="text-gray-700 leading-relaxed mb-4">
                This quotation outlines the comprehensive web development project for Brindavan Chits Karimnagar (India) Pvt. Ltd., 
                a trusted chit fund institution established in 2007, serving over 30,000 members across Telangana.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Project Scope</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Modern responsive website development</li>
                    <li>• Professional company website</li>
                    <li>• Information and contact pages</li>
                    <li>• Gallery and team showcase</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-2">Technologies</h3>
                  <ul className="text-sm text-gray-700 space-y-1">
                    <li>• Next.js 14 with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Responsive design</li>
                    <li>• Modern UI/UX components</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Features Breakdown */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Features & Components</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">🏠 Home Page</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Company introduction</li>
                  <li>• Key statistics display</li>
                  <li>• Call-to-action buttons</li>
                  <li>• Modern hero section</li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">🏢 About Section</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Company history & mission</li>
                  <li>• Board of directors</li>
                  <li>• Registration details</li>
                  <li>• Trust & reliability messaging</li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">💰 Chit Schedules</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Interactive schedule table</li>
                  <li>• Multiple chit categories</li>
                  <li>• PDF download option</li>
                  <li>• Real-time updates</li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">👥 Team Section</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• 22-member team display</li>
                  <li>• Role-based organization</li>
                  <li>• Professional presentation</li>
                  <li>• Contact information</li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">🧾 How It Works</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Step-by-step process</li>
                  <li>• Visual workflow</li>
                  <li>• Easy understanding</li>
                  <li>• Interactive elements</li>
                </ul>
              </div>
              
              <div className="bg-white border border-green-200 rounded-lg p-4">
                <h3 className="font-semibold text-green-800 mb-2">📞 Contact & Branches</h3>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>• Multiple branch locations</li>
                  <li>• Contact information</li>
                  <li>• Interactive maps</li>
                  <li>• Email integration</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Technical Specifications */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Technical Specifications</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Frontend Technologies</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Next.js 14 with App Router
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      TypeScript for type safety
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Tailwind CSS for styling
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Responsive design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      SEO optimization
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3">Features & Benefits</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Modern, professional design
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Mobile-first approach
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Fast loading performance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Accessibility compliance
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                      Cross-browser compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Project Timeline */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Project Timeline</h2>
            <div className="bg-white border border-green-200 rounded-lg p-6">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-semibold">1</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Project Setup & Planning</h3>
                    <p className="text-sm text-gray-600">Initial setup, design mockups, and project structure</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-semibold">2</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Development Phase</h3>
                    <p className="text-sm text-gray-600">Core development, component creation, and integration</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-semibold">3</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Testing & Optimization</h3>
                    <p className="text-sm text-gray-600">Quality assurance, performance optimization, and bug fixes</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-green-700 font-semibold">4</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Deployment & Launch</h3>
                    <p className="text-sm text-gray-600">Final deployment, domain setup, and go-live</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Pricing Information */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Investment & Pricing</h2>
            <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-8 rounded-lg">
              <div className="text-center">
                <h3 className="text-3xl font-bold mb-4">Premium Website Package</h3>
                <div className="text-5xl font-bold mb-2">₹23,000</div>
                <p className="text-green-100 mb-6">Complete premium website solution for your chit fund business</p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">What's Included:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Multi-page responsive website</li>
                      <li>✓ Professional design & branding</li>
                      <li>✓ Team showcase & gallery</li>
                      <li>✓ Contact forms & inquiry system</li>
                      <li>✓ SEO optimization</li>
                      <li>✓ Mobile responsive design</li>
                    </ul>
                  </div>
                  <div className="bg-white bg-opacity-20 p-4 rounded-lg">
                    <h4 className="font-semibold mb-3">Premium Features:</h4>
                    <ul className="space-y-2 text-sm">
                      <li>✓ Professional animations & effects</li>
                      <li>✓ Interactive components</li>
                      <li>✓ Advanced styling & UX</li>
                      <li>✓ Performance optimization</li>
                      <li>✓ 6 months free maintenance</li>
                      <li>✓ Training & documentation</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Support & Maintenance */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-green-700 mb-4">Support & Maintenance</h2>
            <div className="bg-green-50 p-6 rounded-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">Post-Launch Support</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• 6 months free maintenance</li>
                    <li>• Content updates assistance</li>
                    <li>• Performance monitoring</li>
                    <li>• Technical support</li>
                    <li>• Bug fixes & updates</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-green-800 mb-3">Future Enhancements</h3>
                  <ul className="space-y-2 text-sm text-gray-700">
                    <li>• Additional page development</li>
                    <li>• Content management system</li>
                    <li>• Advanced animations</li>
                    <li>• Performance improvements</li>
                    <li>• Additional integrations</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="text-center">
            <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-lg">
              <h2 className="text-2xl font-semibold mb-4">Ready to Get Started?</h2>
              <p className="mb-6">Contact us for detailed project discussion and custom pricing</p>
              <div className="space-y-2">
                <p>📧 Email: <a href="mailto:info@brindavanchits.in" className="underline">info@brindavanchits.in</a></p>
                <p>📞 Phone: 0878-2269666 | 9705166110</p>
                <p>🏢 Address: 7-2-616, Mankamma Thota, Karimnagar, Telangana - 505001</p>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6 mt-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center mb-4">
            <Image
              src="/LOGO.png"
              alt="Brindavan Chits Logo"
              width={40}
              height={40}
              className="mr-3"
            />
            <span className="font-semibold">Brindavan Chits Karimnagar (India) Pvt. Ltd.</span>
          </div>
          <p className="text-gray-400 text-sm mb-4">© 2025 Brindavan Chits. All rights reserved. | CIN: U65992TG2007PTC056020</p>
          
          {/* AI Developer India Branding */}
          <div className="border-t border-gray-600 pt-4">
            <div className="flex items-center justify-center space-x-2 text-gray-400 text-sm">
              <span>Built by</span>
              <a href="https://aideveloperindia.store/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 hover:text-white transition-colors">
                <Image
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
  )
}
