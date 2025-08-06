import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Landing,About,Contact} from "./pages/page";

export default function App(){
    return(
    <>
    <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/contact" element={<Contact/>}/>
    </Routes>
    </>
    )
    
}