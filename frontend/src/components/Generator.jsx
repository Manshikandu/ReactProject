import React,{useState} from 'react'
import SectionWrapper from './SectionWrapper'
import { SCHEMES, WORKOUTS } from '../utlis/swoldier'
import Button from './Button'


function Header(props){
  const{ index , title , description} = props
  return(
    <div  className='flex flex-col gap-4'>
  <div className='flex items-center justify-center gap-2'>
    <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
    <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>

  </div>
  <p className='text-sm sm:text-base mx-auto'>{description}</p>
    </div>
  )
}
export default function Generator(props) {
  const{muscles,setMuscles,poison,setPoison,goals,setGoals,updateWorkout} = props
  const [showModal,setshowModal] = useState(false)
  
  //let showModal = false;
  function toggleModal(){
    setshowModal(!showModal)
  }

  function updateMuscles(musclesGroup) {

     if(muscles.includes(musclesGroup)) {
      setMuscles(muscles.filter(val => val !== musclesGroup ))
      return
    }

    if (muscles.length> 2) {
      return
    }
    if(poison !=='individual') {
     setMuscles([musclesGroup])
     setshowModal(false)
     return
    }
  
   
    setMuscles([...muscles , musclesGroup])
    if(muscles.length===2)
      setshowModal(false)
  }
  return (
    // <div className='min-h-screen'>
     
    // </div>
    <SectionWrapper header={"Genrate your Workout"} title = {['It\'s' , 'Huge' , 'o\'clock']}>
      <Header index={'01'} title={'pick your poison'} description={'Select the workout you wish to endure'}/>
      <div className='grid grid-cols-2 sm:grid-cols-4 gap-4'>
         {Object.keys(WORKOUTS).map((type, typeIndex) => {
        return (
          <button onClick={()=>{
            setMuscles([])
            setPoison(type)
          }} className ={ 'bg-slate-950 border border-blue-400  duration-200 px-4 hover:border-blue-600 py-3 rounded-lg  ' + ( type === poison ? 'border-blue-600 ' : 'border-blue-400')} key={typeIndex}>
            <p className='capitalize'>{type.replaceAll('_'," ")}</p>
          </button>
        )
      })}
      </div>

      <Header index={'02'} title={'Lock on targets'} description={'Select the muscles judged for annihilation.'}/>
      <div className='bg-slate-950 p-3 border border-solid border-blue-400 rounded-lg flex flex-col'>
        <button onClick={toggleModal}className='relative  p-3 flex items-center justify-center'>
              <p className='capitalize'>{muscles.length == 0 ? 'Select muscles group' : muscles.join('')} </p>
              <i class="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
        </button>
      { showModal && (
         <div className='flex flex-col p-3 p-x-3'>
          {(poison === 'individual'? WORKOUTS[poison] : Object.keys(WORKOUTS[poison])).map((musclesGroup, musclesGroupIndex) => {
            return(
             
              <button onClick={()=> {  
                 updateMuscles(musclesGroup)
              }} key={musclesGroupIndex} className={'hover:text-blue-400 duration-200 '  + (muscles.includes(musclesGroup) ? 'text-blue-400' : ' ')} >
                <p className='uppercase'>{musclesGroup.replaceAll('_', ' ')}</p>
              </button>
          )
          })}
         </div>
        
       )}
      
       </div>

     
      <Header index={'03'} title={'Become Juggernaut'} description={'Select your ultimative objective'}/>
      <div className='grid grid-cols-1 sm:grid-cols-3  gap-4'>
         {Object.keys(SCHEMES).map((scheme, schemeIndex) => {
       
        return (
          <button onClick={()=>{
            setGoals(scheme)
          }} className ={ 'bg-slate-950 border border-blue-400  duration-200 hover:border-blue-600 py-3 rounded-lg px-4 ' + ( scheme === goals ? 'border-blue-600 ' : 'border-blue-400 ')} key={schemeIndex}>
            <p className='capitalize'>{scheme.replaceAll('_'," ")}</p>
          </button>
        )

      })}
       
      </div>
      <Button func={updateWorkout} text={"Formulate"}></Button>
    </SectionWrapper>
  )
}
