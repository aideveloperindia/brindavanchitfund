import Image from 'next/image'
import Link from 'next/link'
import Navigation from '@/components/Navigation'

export default function AboutPage() {
  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 p-6 bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>About Brindavan Chits</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Your trusted partner in chit fund management since 2007
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className='text-3xl font-semibold text-green-700 mb-6'>Our Story</h2>
                <p className='mb-6 leading-relaxed text-lg text-gray-700'>
                  Founded in 2007, Brindavan Chits Karimnagar (India) Private Limited is one of Telangana's most trusted chit fund institutions. 
                  With a strong base of over 30,000 served members, we specialize in transparent chit management and reliable customer relationships.
                </p>
                <p className='mb-6 leading-relaxed text-lg text-gray-700'>
                  Our commitment to transparency, integrity, and customer satisfaction has made us a preferred choice for chit fund investments 
                  across Telangana. We believe in building long-term relationships with our members through honest and efficient service.
                </p>
              </div>
              <div className="text-center">
                <Image
                  src="/LOGO.png"
                  alt="Brindavan Chits Logo"
                  width={300}
                  height={300}
                  className="mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Company Details */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className='text-3xl font-semibold text-green-700 mb-6 text-center'>Company Information</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Registration Details</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-gray-800">Company Name:</span>
                    <p className="text-gray-700">Brindavan Chits Karimnagar (India) Pvt. Ltd.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">CIN:</span>
                    <p className="text-gray-700 font-mono">U65992TG2007PTC056020</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Established:</span>
                    <p className="text-gray-700">2007</p>
                  </div>
                  <div>
                    <span className="font-semibold text-gray-800">Registration Address:</span>
                    <p className="text-gray-700">7-2-616, Mankamma Thota, Karimnagar, Telangana, India - 505001</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Achievements</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏆</span>
                    <div>
                      <p className="font-semibold text-gray-800">30,000+ Members Served</p>
                      <p className="text-sm text-gray-600">Since inception</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">👥</span>
                    <div>
                      <p className="font-semibold text-gray-800">2,500+ Active Users</p>
                      <p className="text-sm text-gray-600">This year</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">⏰</span>
                    <div>
                      <p className="font-semibold text-gray-800">17+ Years Experience</p>
                      <p className="text-sm text-gray-600">Trusted service</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="text-2xl mr-3">🏢</span>
                    <div>
                      <p className="font-semibold text-gray-800">3 Branch Locations</p>
                      <p className="text-sm text-gray-600">Across Telangana</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Board of Directors</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-green-100 to-green-50 p-6 rounded-lg border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-green-800 mb-2">Chairman</h3>
                <p className="text-gray-700 font-medium">Vavilala Hanumantha Reddy</p>
              </div>
              
              <div className="bg-gradient-to-br from-blue-100 to-blue-50 p-6 rounded-lg border-l-4 border-blue-500">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">Managing Director</h3>
                <p className="text-gray-700 font-medium">Penta Srinivas</p>
              </div>
              
              <div className="bg-gradient-to-br from-purple-100 to-purple-50 p-6 rounded-lg border-l-4 border-purple-500 md:col-span-2 lg:col-span-1">
                <h3 className="text-lg font-semibold text-purple-800 mb-2">Directors</h3>
                <p className="text-gray-700 text-sm">
                  Gasireddy Janardhan Reddy, Kanna Krishna, Vala Hanmanth Reddy, 
                  Srinivas Rao Adi, Chandra Shekar Chinta, Chakravarthula Venugopala Chary, 
                  Veera Reddy Thada, Vasavi Tummala
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Values */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Our Mission & Values</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-green-800 mb-4">Our Mission</h3>
                <p className="text-gray-700 leading-relaxed">
                  To provide transparent, reliable, and efficient chit fund services that help our members achieve their 
                  financial goals while maintaining the highest standards of integrity and customer service.
                </p>
              </div>
              
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-blue-800 mb-4">Our Values</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Transparency in all operations
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Trust and reliability
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Customer satisfaction
                  </li>
                  <li className="flex items-center">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
                    Innovation and technology
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust & Reliability */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg text-center">
            <h2 className="text-3xl font-bold mb-4">Trusted & Reliable</h2>
            <h3 className="text-2xl font-semibold mb-4">17+ Years of Excellence</h3>
            <p className="text-xl text-green-100 mb-6">
              Serving our community with transparency, integrity, and commitment to excellence. 
              Your trust is our foundation!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href='/schedules' className='bg-white text-green-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors'>
                View Schedules
              </Link>
              <Link href='/contact' className='bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors border-2 border-white'>
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white p-6">
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
          <div className="mb-4">
            <Link href="/quotation" className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition-colors font-semibold">
              Get Project Quote
            </Link>
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
  );
}
