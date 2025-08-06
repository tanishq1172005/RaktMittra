import { Footer, Header } from "../components/index";

export default function Contact() {
  return (
    <>
    <Header/>
    <div className="bg-gray-50 text-gray-800 min-h-screen">

      <section className="bg-red-600 text-white py-16 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg max-w-2xl mx-auto">
          Have questions, suggestions, or need support? We’re here to help!
        </p>
      </section>

      <section className="py-16 px-6 max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
  
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-6 text-red-600">
            Send us a message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-red-400"
            ></textarea>
            <button
              type="submit"
              className="bg-red-600 text-white px-6 py-2 rounded-md font-semibold hover:bg-red-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

  
        <div className="space-y-6 flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-red-600">
            Our Contact Information
          </h2>
          <p>
            <span className="font-semibold">Email:</span> support@raktmittra.org
          </p>
          <p>
            <span className="font-semibold">Phone:</span> +91 98765 43210
          </p>
          <p>
            <span className="font-semibold">Address:</span> 123 Health Lane, 
            New Delhi, India
          </p>
          <p className="text-gray-600">
            We typically respond within 24-48 hours. Thank you for reaching out to us.
          </p>
        </div>
      </section>

    
      <section className="w-full h-64">
        <iframe
          title="Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.583708688422!2d77.2090214!3d28.6139391!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd50c1e565c1%3A0xc6c37b02c4b5f5de!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sin!4v1671234567890!5m2!1sen!2sin"
          className="w-full h-full border-0"
          loading="lazy"
        ></iframe>
      </section>
    </div>
    <Footer/>
    </>
  );
}
