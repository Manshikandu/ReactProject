
import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Generator from './components/Generator'
// import Genrtor from './components/Generator'
import Hero from './components/hero'
import Workout from './components/Workout'
import { generateWorkout } from './utlis/function'

function App() {
  const [workout,setWorkout] = useState(null)
  const[poison , setPoison] = useState('individual')
  const[muscles, setMuscles] = useState([])
  const[goals , setGoals] = useState('strength_power')

  function updateWorkout () {
    if (muscles.length < 1 ){
      return
    }
    let newWorkout = generateWorkout({poison , muscles,goals})
    console.log(newWorkout)
    setWorkout(newWorkout)
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r from-slate-800 to-slate-950 text-white text-sm sm:text-base'>
      <Hero/>
      <Generator poison={poison} setPoison={setPoison}
      muscles={muscles}
      setMuscles={setMuscles}
      goals={goals}
      setGoals={setGoals}
      updateWorkout={updateWorkout}
      />
      {workout && (<Workout workout={workout} />)}
      
      {/* <Workout /> */}
    </main>
  )
}

export default App
