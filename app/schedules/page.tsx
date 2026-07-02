'use client'

import Link from 'next/link'
import Navigation from '@/components/Navigation'
import { useLanguage } from '@/contexts/LanguageContext'

export default function SchedulesPage() {
  const { language } = useLanguage()
  const downloadPDF = () => {
    // Create PDF content
    const pdfContent = `
Brindavan Chits Karimnagar (India) Pvt. Ltd.
Chit Fund Schedules - 2024

Company Information:
- Company: Brindavan Chits Karimnagar (India) Pvt. Ltd.
- Established: 2007
- Contact: 0878-2269666

Available Chit Schemes:

1. Short Term Schemes:
   - Chit Value: ₹1,00,000
   - Series: ST B
   - Duration: 25 months
   - Members: 25
   - Max Bidding: 30%
   
   - Chit Value: ₹2,00,000
   - Series: ST D
   - Duration: 25 months
   - Members: 25
   - Max Bidding: 30%

2. 30-Term Scheme:
   - Chit Value: ₹30,00,000
   - Series: TT Z
   - Duration: 30 months
   - Members: 30
   - Max Bidding: 30%

3. 40-Term Scheme:
   - Chit Value: ₹5,00,000
   - Series: FT D
   - Duration: 40 months
   - Members: 40
   - Max Bidding: 35%

4. Long Term Scheme:
   - Chit Value: ₹25,00,000
   - Series: LT Z
   - Duration: 50 months
   - Members: 50
   - Max Bidding: 40%

Branch Locations:
1. Head Office: 7-2-616, Mankamma Thota, Karimnagar – 505001
   Phone: 0878-2269666 | Cell: 9705166110

2. Jagtial Branch: NGO's Building, Thahasil Chowrastha, Jagtial – 505327
   Phone: 08724-226966 | Cell: 9705166444

3. Ramagundam Branch: FCI 'X' Road, Godavarikhani – 505209
   Phone: 08728-274166 | Cell: 9705166000

Email: info@brindavanchits.in

Note: This is a comprehensive list of available chit schemes. For detailed terms and conditions, please contact our nearest branch office.

        © 2025 Brindavan Chits Karimnagar (India) Pvt. Ltd.
    `;

    // Create and download the file
    const element = document.createElement('a');
    const file = new Blob([pdfContent], { type: 'text/plain' });
    element.href = URL.createObjectURL(file);
    element.download = 'Brindavan_Chits_Schedules_2024.txt';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
  };
  const chitSchedules = [
    { value: '₹1,00,000', series: 'ST B', months: 25, members: 25, maxBidding: '30%', category: 'Short Term' },
    { value: '₹2,00,000', series: 'ST D', months: 25, members: 25, maxBidding: '30%', category: 'Short Term' },
    { value: '₹30,00,000', series: 'TT Z', months: 30, members: 30, maxBidding: '30%', category: '30-Term' },
    { value: '₹5,00,000', series: 'FT D', months: 40, members: 40, maxBidding: '35%', category: '40-Term' },
    { value: '₹25,00,000', series: 'LT Z', months: 50, members: 50, maxBidding: '40%', category: 'Long Term' },
  ]

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
            {language === 'te' ? 'చిట్టీ వేలం షెడ్యూల్స్' : 'Chit Auction Schedules'}
          </h1>
          <p className='text-xl md:text-2xl text-white/90 max-w-3xl mx-auto'>
            {language === 'te' 
              ? 'చిట్టీ వేలం షెడ్యూల్స్'
              : 'Chit auction schedules'
            }
          </p>
        </div>
      </section>

      {/* Schedule Table */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="mb-8">
              <h2 className="text-2xl font-semibold text-sky-700 mb-4">Available Chit Schemes</h2>
              <p className="text-gray-600">Choose from our Short, 30-Term, 40-Term, and Long-Term chit series</p>
            </div>
            
            <div className='overflow-x-auto'>
              <table className='table-auto w-full border text-sm'>
                <thead className='bg-sky-100'>
                  <tr>
                    <th className='p-4 border font-semibold text-sky-800'>Category</th>
                    <th className='p-4 border font-semibold text-sky-800'>Chit Value</th>
                    <th className='p-4 border font-semibold text-sky-800'>Series</th>
                    <th className='p-4 border font-semibold text-sky-800'>Duration</th>
                    <th className='p-4 border font-semibold text-sky-800'>Members</th>
                    <th className='p-4 border font-semibold text-sky-800'>Max Bidding</th>
                  </tr>
                </thead>
                <tbody>
                  {chitSchedules.map((schedule, index) => (
                    <tr key={index} className="hover:bg-slate-50 transition-colors">
                      <td className='border p-4'>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          schedule.category === 'Short Term' ? 'bg-blue-100 text-blue-800' :
                          schedule.category === '30-Term' ? 'bg-sky-100 text-sky-800' :
                          schedule.category === '40-Term' ? 'bg-yellow-100 text-yellow-800' :
                          'bg-purple-100 text-purple-800'
                        }`}>
                          {schedule.category}
                        </span>
                      </td>
                      <td className='border p-4 font-bold text-sky-700'>{schedule.value}</td>
                      <td className='border p-4 font-semibold'>{schedule.series}</td>
                      <td className='border p-4'>{schedule.months} months</td>
                      <td className='border p-4'>{schedule.members}</td>
                      <td className='border p-4 text-cyan-600 font-semibold'>{schedule.maxBidding}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            
            <div className="text-center mt-8">
              <button 
                onClick={downloadPDF}
                className='bg-cyan-600 hover:bg-sky-700 text-white px-8 py-3 rounded-full transition-colors shadow-lg font-semibold'
              >
                Download Full Schedule (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Scheme Categories */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-sky-700 mb-8 text-center'>Scheme Categories</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-blue-600">⚡</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Short Term</h3>
              <p className="text-gray-600 text-sm">Quick returns in 25 months</p>
              <p className="text-cyan-600 font-semibold mt-2">₹1L - ₹2L</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-cyan-600">📅</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">30-Term</h3>
              <p className="text-gray-600 text-sm">Balanced duration for growth</p>
              <p className="text-cyan-600 font-semibold mt-2">₹30L</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-yellow-600">💰</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">40-Term</h3>
              <p className="text-gray-600 text-sm">Extended investment period</p>
              <p className="text-cyan-600 font-semibold mt-2">₹5L</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl text-purple-600">🎯</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Long Term</h3>
              <p className="text-gray-600 text-sm">Maximum returns in 50 months</p>
              <p className="text-cyan-600 font-semibold mt-2">₹25L</p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Join */}
      <section className='p-6 bg-white'>
        <div className="max-w-6xl mx-auto">
          <h2 className='text-3xl font-semibold text-sky-700 mb-8 text-center'>How to Join Our Chit Schemes</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-700">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Choose Your Scheme</h3>
              <p className="text-gray-600">Select the chit scheme that best fits your financial goals and investment capacity.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-700">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Submit Documents</h3>
              <p className="text-gray-600">Provide necessary documents and complete the registration process with our team.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-sky-700">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-3">Start Investing</h3>
              <p className="text-gray-600">Begin your monthly payments and participate in auctions to win the chit amount.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact for Registration */}
      <section className='p-6 bg-gray-50'>
        <div className="max-w-6xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-600 to-sky-700 text-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Ready to Join Our Chit Schemes?</h2>
            <p className="text-sky-100 mb-6">
              Contact our team today to get started with your chit fund investment
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="tel:08782269666" className="bg-white text-sky-700 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
                Call Now: 0878-2269666
              </a>
              <Link href="/contact" className="bg-sky-800 text-white px-8 py-3 rounded-full font-semibold hover:bg-slate-900 transition-colors border-2 border-white">
                Visit Our Office
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}