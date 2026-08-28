import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home'
import Owner from './pages/Owner'

export default function App() {
  return (
    // <div className="min-h-screen bg-gray-300">
    //   <div className="flex justify-end border-b-2 border-black-500 m-2">
    //     <Navbar />
    //   </div>
    <div className="min-h-screen bg-gray-300">
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/owner" element={<Owner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
