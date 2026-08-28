import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Owner from './components/Owner'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      <div className="flex justify-end border-b-2 border-black-500 m-2">
        <Navbar />
      </div>

      <div className="m-8">
        <Hero />
      </div>

      <Owner />

    </div>
  );
}
