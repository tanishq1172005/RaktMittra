import  {Banner, Header,Button, Card}  from "../components/index";
import { FaHospital, FaUserMd, FaHeart } from "react-icons/fa";

export default function Landing(){
    
    return(
    <>
    <Header/>
    <div className="my-5 gap-2 flex flex-col justify-center items-center">
    <h1 className="font-bold xl:text-3xl text-red-800">Saving Lives One Drop at a Time</h1>
    </div>
    <Banner/>
    <div className="flex space-x-5 justify-center mt-6">
        <Button>Donate now</Button>
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
    </>)
}