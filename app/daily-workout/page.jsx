'use client'
import { useEffect, useState, useContext } from 'react';
import { WorkoutContext } from "@/app/contexts/workout-context"
import { useRouter } from 'next/navigation';
import { useSession } from "next-auth/react";
import NewWorkoutModal from '@/components/newWorkoutModal/NewWorkoutModal';
import NavBar from '@/components/navbar/NavBar';
import { GiMuscleUp } from 'react-icons/gi';


export default function DailyWorkoutsPage() {
  const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext)
  const [choice, setChoice] = useState('Full Body')

  console.log(finalWorkout);
  const { data: session, status } = useSession()
  const userEmail = session?.user?.email

  const WORKOUT_DATA = process.env.NEXT_PUBLIC_BACKEND_CONNECTION

  const router = useRouter()

  async function handleSave() {
    try {
      await fetch(`${WORKOUT_DATA}/daily-workout/newWorkout`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userEmail,
          exercises: finalWorkout,
        })
      })
    } catch (error) {
      console.log('could not send exercise choice over to backend', error)
    }
    router.push("daily-workout/workout-details")
  }

  const Workouts = finalWorkout ? (finalWorkout.map((workout, index) => (
    <div key={workout._id} className="bg-pink-100 rounded-lg shadow-lg p-4 m-4">
      <GiMuscleUp size={20} color="purple" />
      <h2 className="text-xl font-semibold mb-2">{index + 1}. {workout.name}</h2>
      <h2 className="text-base text-gray-600">Target Muscle: {workout.target}</h2>
    </div>
  )))  : null

  return (
    <div className=''>
      <NavBar />
      <h1 className="text-2xl font-semibold mb-4">How about these workouts?</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {Workouts}
      </ul>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h3 className="text-xl font-semibold my-4 ">Happy with this workout?</h3>
        <button
          className="btn btn-purple px-4 py-2 rounded-md sm:my-0 my-4"
          onClick={handleSave}
        >
          Begin
        </button>
        <h3 className="text-xl font-semibold my-4">Or</h3>
        <NewWorkoutModal choice={choice} setChoice={setChoice} />
      </div>
    </div>

  )
}
