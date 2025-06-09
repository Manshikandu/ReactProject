
import './App.css'
import Button from './components/Button'
import Generator from './components/Generator'
// import Genrtor from './components/Generator'
import Hero from './components/hero'
import Workout from './components/Workout'

function App() {
  
  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator/>
      <Workout />
      
      
    </main>
  )
}

export default App
