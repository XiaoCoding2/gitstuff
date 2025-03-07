import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold mb-6">Welcome to Our Math Club</h1>
          <p className="text-xl mb-8">Discover the beauty of mathematics through collaboration, competitions, and fun!</p>
          <Link 
            href="/join"
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors"
          >
            Join Our Club
          </Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Weekly Meetings</h3>
              <p>Join us every week for engaging problem-solving sessions and mathematical discussions.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Math Competitions</h3>
              <p>Participate in various mathematics competitions and represent our school.</p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Study Groups</h3>
              <p>Form study groups to prepare for competitions and help each other excel in mathematics.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Upcoming Events</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 font-semibold mb-2">March 15, 2024</div>
              <h3 className="text-xl font-semibold mb-2">Math Olympiad Prep Session</h3>
              <p>Prepare for the upcoming Mathematics Olympiad with our experienced mentors.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-blue-600 font-semibold mb-2">March 22, 2024</div>
              <h3 className="text-xl font-semibold mb-2">Pi Day Celebration</h3>
              <p>Join us for fun activities, games, and pizza to celebrate Pi Day!</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="mb-6">Have questions about our math club? We'd love to hear from you!</p>
            <Link 
              href="/contact"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
} 