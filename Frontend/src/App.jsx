import Main from "./components/Main"
import Navbar from "./components/Navbar"
import PastPapers from "./components/PastPapers"
import Register from "./components/Register"
import WhyTechMyPrep from "./components/WhyTechMyPrep"
import Announcements from './components/Announcements'; 
import Footer from './components/Footer';

function App() {
 
  return (
    <div className="w-full h-screen bg-[#3B82F6]">
      <Navbar />
      <Main />
      <WhyTechMyPrep />
    <Announcements/> 
    <Footer/>
    </div>
  )
}

export default App
