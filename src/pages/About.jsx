import { Header,Footer } from "../components/index";

export default function About() {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 text-gray-800 min-h-screen">
      {/* Hero Section */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">About RaktMittra</h1>
        <p className="text-lg max-w-3xl mx-auto">
          RaktMittra is a community-driven platform designed to support Thalassemia patients, 
          empower hospitals, and connect donors — all through one seamless experience.
        </p>
      </section>

      {/* Our Mission */}
      <section className="py-16 px-6 max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-semibold mb-6">Our Mission</h2>
        <p className="text-lg leading-relaxed mb-10">
          We aim to simplify blood donation and transfusion management by leveraging 
          technology and AI. With RaktMittra, hospitals can quickly book blood units 
          for patients, donors can easily find nearby donation camps, and patients 
          can stay informed with AI-powered health education.
        </p>

        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-600">For Patients</h3>
            <p>
              Access real-time information on blood availability, understand your 
              treatment better, and stay updated with our educational chatbot.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-600">For Hospitals</h3>
            <p>
              Book and manage blood units efficiently, get emergency fallback 
              assistance, and streamline communication with patients.
            </p>
          </div>
          <div className="p-6 bg-white shadow rounded-lg">
            <h3 className="text-xl font-semibold mb-2 text-red-600">For Donors</h3>
            <p>
              Discover donation drives nearby, track your impact, and earn 
              non-cash incentives for your life-saving contributions.
            </p>
          </div>
        </div>
      </section>

      {/* AI Section */}
      <section className="bg-gray-100 py-16 px-6 text-center">
        <h2 className="text-3xl font-semibold mb-6">AI-Powered Awareness</h2>
        <p className="max-w-3xl mx-auto text-lg leading-relaxed">
          Our AI chatbot is available to all users to answer questions about Thalassemia, 
          blood donation, and healthcare support. With interactive learning and 
          personalized insights, we aim to spread awareness and improve outcomes.
        </p>
      </section>

      {/* Closing CTA */}
      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Join the Movement</h2>
        <p className="text-lg mb-8">
          Whether you are a patient, hospital, or donor, RaktMittra is here to help. 
          Together, we can ensure timely access to blood and support Thalassemia patients.
        </p>
        <button className="bg-white text-red-600 px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Get Started
        </button>
      </section>
    </div>
    <Footer/>
    </>
  );
}
