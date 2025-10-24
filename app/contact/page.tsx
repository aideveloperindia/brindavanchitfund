import Navigation from '@/components/Navigation'

export default function ContactPage() {
  const branches = [
    {
      name: "Head Office",
      address: "7-2-616, Mankamma Thota",
      city: "Karimnagar – 505001",
      phone: "0878-2269666",
      cell: "9705166110",
      email: "info@brindavanchits.in"
    },
    {
      name: "Jagtial Branch",
      address: "NGO's Building, Thahasil Chowrastha",
      city: "Jagtial – 505327",
      phone: "career",
      cell: "9705166444",
      email: "jagtial@brindavanchits.in"
    },
    {
      name: "Ramagundam Branch",
      address: "FCI 'X' Road, Godavarikhani",
      city: "Ramagundam – 505209",
      phone: "08728-274166",
      cell: "9705166000",
      email: "ramagundam@brindavanchits.in"
    }
  ]

  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 p-6 bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>Contact Us</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            Get in touch with our team for all your chit fund needs and inquiries
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Our Branches</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {branches.map((branch, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 border-t-4 border-green-500 hover:shadow-xl transition-shadow">
                <div className="text-center mb-6">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-green-600">🏢</span>
                  </div>
                  <h3 className="text-xl font-semibold text-green-800 mb-2">{branch.name}</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📍</span>
                    <div>
                      <p className="text-gray-700 font-medium">Address</p>
                      <p className="text-gray-600">{branch.address}</p>
                      <p className="text-gray-600">{branch.city}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📞</span>
                    <div>
                      <p className="text-gray-700 font-medium">Phone</p>
                      <p className="text-gray-600">{branch.phone}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">📱</span>
                    <div>
                      <p className="text-gray-700 font-medium">Mobile</p>
                      <p className="text-gray-600">{branch.cell}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <span className="text-green-600 mt-1">✉️</span>
                    <div>
                      <p className="text-gray-700 font-medium">Email</p>
                      <p className="text-gray-600">{branch.email}</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 pt-4 border-t border-gray-200">
                  <div className="flex space-x-3">
                    <a href={`tel:${branch.cell}`} className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg text-center hover:bg-green-700 transition-colors">
                      Call Now
                    </a>
                    <a href={`mailto:${branch.email}`} className="flex-1 bg-gray-600 text-white py-2 px-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                      Email
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Send Us a Message</h2>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your email"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    placeholder="Enter your phone number"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Subject</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent">
                    <option>General Inquiry</option>
                    <option>Chit Scheme Information</option>
                    <option>Online Auction Support</option>
                    <option>Account Related</option>
                    <option>Complaint</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <textarea
                  rows={4}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  placeholder="Enter your message here..."
                ></textarea>
              </div>
              
              <div className="text-center">
                <button
                  type="submit"
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Business Hours */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Business Hours</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-green-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-800 mb-4">Office Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Monday - Friday</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Saturday</span>
                  <span className="font-semibold text-gray-800">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Sunday</span>
                  <span className="font-semibold text-gray-800">Closed</span>
                </div>
              </div>
            </div>
            
            <div className="bg-blue-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-blue-800 mb-4">Online Support</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-700">Email Support</span>
                  <span className="font-semibold text-gray-800">24/7 Available</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Phone Support</span>
                  <span className="font-semibold text-gray-800">Office Hours</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-700">Online Auction</span>
                  <span className="font-semibold text-gray-800">As Scheduled</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Quick Links</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <a href="/schedules" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">💰</div>
              <h3 className="font-semibold text-gray-800">View Schedules</h3>
              <p className="text-gray-600 text-sm">Check available chit schemes</p>
            </a>
            
            <a href="/how-it-works" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">📖</div>
              <h3 className="font-semibold text-gray-800">How It Works</h3>
              <p className="text-gray-600 text-sm">Learn about chit funds</p>
            </a>
            
            <a href="/team" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">👥</div>
              <h3 className="font-semibold text-gray-800">Our Team</h3>
              <p className="text-gray-600 text-sm">Meet our professionals</p>
            </a>
            
            <a href="/gallery" className="bg-white p-6 rounded-xl shadow-lg text-center hover:shadow-xl transition-shadow">
              <div className="text-3xl mb-3">📸</div>
              <h3 className="font-semibold text-gray-800">Gallery</h3>
              <p className="text-gray-600 text-sm">View our photos & videos</p>
            </a>
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
