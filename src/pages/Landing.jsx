import  {Banner, Header,Button, Card,Footer,Thalassemia, Chatbot}  from "../components/index";
import { FaHospital, FaUserMd, FaHeart } from "react-icons/fa";

export default function Landing(){
    
    return(
    <>
    <Header/>
    <div className="max-w-7xl mx-auto px-4 overflow-x-hidden">
    <div className="my-5 mb-10 gap-6 flex justify-center items-center max-w-screen overflow-x-hidden px-4">
      <img src="https://tse3.mm.bing.net/th/id/OIP.JTiXZuQVJgIy55O2J19uKgAAAA?rs=1&pid=ImgDetMain&o=7&rm=3" alt="icon" className="w-60 h-60" />
      <div className="flex flex-col max-w-3xl justify-center  gap-3">
        <h1 className="font-bold xl:text-3xl text-red-800">Saving Lives One Drop at a Time</h1>
        <p>For Thalassemia patients, every day is a battle. Your blood donation can give them hope, strength, and life.Your one pint can save three lives. Be someone’s hero today – donate blood and give the gift of life.</p>
        <Button className="w-25 h-10">Donate</Button>
      </div>
    </div>
    <Thalassemia/>
    <Banner/>
    <p className="my-10 font-semibold xl:mx-30 text-center">Every year, thousands of children are born with Thalassemia because of lack of awareness and early screening. By donating blood and spreading awareness, you can give them a chance to live a healthy, dignified life.Thalassemia doesn’t just affect patients—it affects entire families. With your awareness and support, we can ensure no one suffers alone. Together, we can fight this.</p>
    <div className="border border-gray-500"></div>
    <div className="flex space-x-5 justify-center mt-6">
    </div>
    <div className="flex flex-col items-center">
        <h1 className="font-bold mt-10 md:text-xl xl:text-2xl">Why RaktMittra?</h1></div>
      <div className="mx-2 grid grid-cols-1 md:grid-cols-3 gap-2 p-4">
        <Card 
          icon={<FaHospital />} 
          title="For Hospitals" 
          description="Seamlessly manage blood bookings, track availability, and handle emergency requests with ease."
          actionText="Learn More"
          onAction={() => alert("Hospitals Info")}
        />
        <Card 
          icon={<FaUserMd />} 
          title="For Patients" 
          description="View nearby blood banks and stay informed about emergency fallback systems in real time."
          actionText="Learn More"
          onAction={() => alert("Patients Info")}
        />
        <Card 
          icon={<FaHeart />} 
          title="For Donors" 
          description="Find donation centers near you and receive non-cash incentives for your life-saving contribution."
          actionText="Learn More"
          onAction={() => alert("Donors Info")}
        />
    </div>
    <section className="bg-red-600 text-white py-16 px-6 text-center">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-4">
          Be a Lifesaver, Donate Blood Today
        </h2>
        <p className="text-lg mb-8">
          Your single act of kindness can save multiple lives. Join the movement to 
          support Thalassemia patients and ensure they never run out of hope.
        </p>
        <button className="bg-white cursor-pointer text-red-600 font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition">
          Register as donor
        </button>
      </div>
    </section>
    <Chatbot/>
    </div>
    <Footer/>  
    </>)
}