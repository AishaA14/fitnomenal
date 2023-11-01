// make this page dynamic somehow?
'use client'
import { useState, useContext } from "react";
import { WorkoutContext } from "@/app/contexts/workout-context"
import { useSession } from "next-auth/react"
import NavBar from "@/components/navbar/NavBar";
import { useRouter } from 'next/navigation'
import Link from "next/link";

export default function WorkoutDetails() {
  const router = useRouter()
  const { finalWorkout, setFinalWorkout } = useContext(WorkoutContext)
  console.log('final workout details page log', finalWorkout)

  const [showInstructions, setShowInstructions] = useState(false)
  const toggleInstructions = () => {
    setShowInstructions(!showInstructions);
  };

  const DATABASE_CONNECTION = process.env.NEXT_PUBLIC_BACKEND_CONNECTION
  const { data: session, status } = useSession()
  const userEmail = session.user.email
  const handleComplete = async () => {
    try {
     const response = await fetch(`${DATABASE_CONNECTION}/workout-history/markCompleted`, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          userId: userEmail
        })
      })
      
      if (response.ok){
        router.push('/history')
      }
      
    } catch (error) {
      console.log('problem marking it as complete', error)
    } 
    
  }

  return (
    <>
      <NavBar />
      <div className="bg-light-purple flex flex-col space-y-4 justify-center items-center">

        {finalWorkout.map((workout, index) => (
          <div key={workout._id} style={{ backgroundColor: "#F5F5F5", margin: "10px", padding: "10px" }}>


            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
              <a href="#">
                <img className="rounded-t-lg" src={workout.gifUrl} alt="" />
              </a>
              <div className="p-5">
                <a href="#">
                  <h4 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{workout.name}</h4>
                </a>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Target Muscles: {workout.target}</p>
                {showInstructions ? (
                  <div>
                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">Instructions: {workout.instructions}</p>
                    <ol>
                    </ol>
                  </div>
                ) : null}
                <a
                  href="#"
                  onClick={toggleInstructions}
                  className="btn btn-purple"
                >
                  {showInstructions ? 'Show Less' : 'Read More'}
                  <svg
                    className="w-3.5 h-3.5 ml-2"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5h12m0 0L9 1m4 4L9 9"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="bg-light-purple flex flex-row justify-end">
        <Link
         href="/"
          onClick={handleComplete}
          className="sticky top-0 focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-lg px-8 py-3 mb-4 mr-4 dark:focus:ring-yellow-900"
        >Finished it!</Link>
      </div>

    </>
  );
}
