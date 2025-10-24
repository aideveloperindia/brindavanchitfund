import Image from 'next/image'
import Navigation from '@/components/Navigation'

export default function TeamPage() {
  const teamMembers = {
    management: [
      { name: "P. Srinivas", designation: "Managing Director", department: "Management", isHOD: true }
    ],
    accounting: [
      { name: "G. Satheesh", designation: "Accountant", department: "Accounting", isHOD: true },
      { name: "K. Santhosh Kumar", designation: "Accountant", department: "Accounting", isHOD: false }
    ],
    verification: [
      { name: "N. Krishna", designation: "Verification Officer", department: "Verification", isHOD: true },
      { name: "N. Durga Prasad", designation: "Verification Officer", department: "Verification", isHOD: false },
      { name: "M. Srinivas", designation: "Verification Officer", department: "Verification", isHOD: false },
      { name: "B. Sanjeev", designation: "Verification Officer", department: "Verification", isHOD: false }
    ],
    development: [
      { name: "G. Ramesh", designation: "Development Officer", department: "Development", isHOD: true },
      { name: "G. Hanmandlu", designation: "Development Officer", department: "Development", isHOD: false }
    ],
    collection: [
      { name: "A. Kumara Swamy", designation: "Collection Officer", department: "Collection", isHOD: true },
      { name: "M. Maruthi", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "A. Venugopal", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "L. Venkatesh Babu", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "K. Sravan Kumar", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "M. Kannaiah", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "P. Sathish", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "K. Kishan", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "G. Sandeep", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "S. Rajashekar", designation: "Collection Officer", department: "Collection", isHOD: false },
      { name: "P. Vineeth", designation: "Collection Officer", department: "Collection", isHOD: false }
    ]
  }

  const departmentColors = {
    management: "from-purple-500 to-purple-600",
    accounting: "from-blue-500 to-blue-600", 
    verification: "from-green-500 to-green-600",
    development: "from-orange-500 to-orange-600",
    collection: "from-red-500 to-red-600"
  }

  const departmentIcons = {
    management: "👔",
    accounting: "💰",
    verification: "✅",
    development: "🚀",
    collection: "📋"
  }

  return (
    <div className='w-full h-full bg-white text-gray-800'>
      <Navigation />

      {/* Hero Section */}
      <section className='pt-24 p-6 bg-gradient-to-br from-green-50 to-white'>
        <div className="max-w-6xl mx-auto text-center">
          <h1 className='text-4xl md:text-5xl font-bold text-green-700 mb-6'>Our Professional Team</h1>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto mb-8'>
            A dedicated team of 22 professionals ensuring trust, transparency, and excellent service
          </p>
          
          {/* Team Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-green-700">22</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-green-700">5</div>
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-green-700">17+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-green-700">30K+</div>
              <div className="text-sm text-gray-600">Members Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team by Departments */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Team by Departments</h2>
          
          {Object.entries(teamMembers).map(([department, members]) => (
            <div key={department} className="mb-12">
              <div className={`bg-gradient-to-r ${departmentColors[department as keyof typeof departmentColors]} text-white p-4 rounded-t-xl`}>
                <h3 className="text-2xl font-semibold flex items-center">
                  <span className="text-3xl mr-3">{departmentIcons[department as keyof typeof departmentIcons]}</span>
                  {department.charAt(0).toUpperCase() + department.slice(1)} Department
                  <span className="ml-3 text-lg opacity-90">({members.length} members)</span>
                </h3>
              </div>
              
              <div className="bg-gray-50 p-6 rounded-b-xl shadow-lg">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {members.map((member, index) => (
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-green-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                          <span className="text-green-700 font-bold text-lg">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{member.name}</h4>
                          <p className="text-sm text-gray-600">
                            {member.designation}
                            {member.isHOD && <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-semibold">HOD</span>}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Department Overview */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-green-700 mb-8 text-center'>Department Overview</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">👔</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Management</h3>
              <p className="text-gray-600 text-sm text-center">
                Strategic leadership and overall company direction under the guidance of our Managing Director.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">💰</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Accounting</h3>
              <p className="text-gray-600 text-sm text-center">
                Financial management, bookkeeping, and ensuring accurate financial records and transactions.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">✅</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Verification</h3>
              <p className="text-gray-600 text-sm text-center">
                Document verification, member validation, and ensuring compliance with all regulatory requirements.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Development</h3>
              <p className="text-gray-600 text-sm text-center">
                Business development, member acquisition, and expanding our services to new markets.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center mb-4">
                <span className="text-4xl">📋</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3 text-center">Collection</h3>
              <p className="text-gray-600 text-sm text-center">
                Monthly subscription collection, member follow-up, and maintaining regular communication.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Team */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-600 to-green-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Need to Contact Our Team?</h2>
            <p className="text-green-100 mb-6">
              Our professional team is ready to assist you with all your chit fund needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:08782269666" className="bg-white text-green-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Call Us: 0878-2269666
              </a>
              <a href="mailto:info@brindavanchits.in" className="bg-green-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-green-900 transition-colors border-2 border-white">
                Email Us
              </a>
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
