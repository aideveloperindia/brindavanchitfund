'use client'

import Image from 'next/image'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function TeamPage() {
  const { language } = useLanguage()
  const teamMembers = {
    management: [
      { name: "P. Srinivas", designation: "Managing Director", department: "Management", isHOD: false, experience: "30 Years" }
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
    verification: "from-slate-500 to-cyan-600",
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

      {/* Premium Hero Section */}
      <section className='pt-32 pb-20 px-6 bg-gradient-to-br from-[#0F2747] via-[#245C8E] to-[#0F2747] text-white relative overflow-hidden'>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D9A441] rounded-full blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h1 className='text-5xl md:text-6xl lg:text-7xl font-black mb-6 animate-fade-in-up'>
            {language === 'te' ? 'సిబ్బంది, హైరార్కీ' : 'Staff, Hierarchy'}
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto mb-8'>
            {language === 'te' 
              ? 'సిబ్బంది, హైరార్కీ వివరాలు'
              : 'Staff, hierarchy'
            }
          </p>
          
          {/* Team Statistics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-sky-700">22</div>
              <div className="text-sm text-gray-600">Team Members</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-sky-700">5</div>
              <div className="text-sm text-gray-600">Departments</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-sky-700">17+</div>
              <div className="text-sm text-gray-600">Years Experience</div>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-4">
              <div className="text-2xl font-bold text-sky-700">30K+</div>
              <div className="text-sm text-gray-600">Members Served</div>
            </div>
          </div>
        </div>
      </section>

      {/* Team by Departments */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-sky-700 mb-8 text-center'>Team by Departments</h2>
          
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
                    <div key={index} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow border-l-4 border-cyan-500">
                      <div className="flex items-center space-x-3">
                        <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                          <span className="text-sky-700 font-bold text-lg">
                            {member.name.split(' ').map(n => n[0]).join('')}
                          </span>
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-gray-800">{member.name}</h4>
                          <p className="text-sm text-gray-600">
                            {member.designation}
                            {member.isHOD && <span className="ml-2 bg-sky-100 text-sky-800 px-2 py-1 rounded-full text-xs font-semibold">HOD</span>}
                          </p>
                          {'experience' in member && member.experience && (
                            <p className="text-xs font-semibold text-[#0F2747] mt-1">{member.experience} Experience</p>
                          )}
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
          <h2 className='text-3xl font-semibold text-sky-700 mb-8 text-center'>Department Overview</h2>
          
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
          <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Need to Contact Our Team?</h2>
            <p className="text-sky-100 mb-6">
              Our professional team is ready to assist you with all your chit fund needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:08782269666" className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Call Us: 0878-2269666
              </a>
              <a href="mailto:info@brindavanchits.in" className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-colors border-2 border-white">
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}