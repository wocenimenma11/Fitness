import React, { useState } from "react";
import { Button } from "./ui/button";
import PreferenceForm from "./PreferenceForm";
import WorkoutRoutine from "./WorkoutRoutine";

const Home = () => {
  const [showResults, setShowResults] = useState(false);
  const [workoutGenerated, setWorkoutGenerated] = useState(false);

  const handleGenerateWorkout = () => {
    // In a real app, this would process the form data and generate a workout
    setWorkoutGenerated(true);
    setShowResults(true);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b border-gray-200 bg-white py-4">
        <div className="container mx-auto flex items-center justify-between px-4">
          <div className="flex items-center">
            <div className="mr-2 h-8 w-8 rounded-md bg-blue-600 flex items-center justify-center">
              <span className="text-white font-bold">F</span>
            </div>
            <h1 className="text-lg font-bold text-blue-600">Fitness ProMax</h1>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  About
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-blue-900 mb-2">
            Your Perfect
          </h2>
          <h2 className="text-4xl font-bold text-blue-600 mb-6">
            Workout Routine
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600 mb-8">
            Generate personalized workout routines tailored to your fitness
            level, available equipment, and target goals, all created in under
            60 seconds.
          </p>
          <div className="flex justify-center space-x-4 mb-8">
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-600">No signup required</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-600">Instant generation</span>
            </div>
            <div className="flex items-center">
              <div className="h-2 w-2 rounded-full bg-green-500 mr-2"></div>
              <span className="text-sm text-gray-600">Track your results</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container mx-auto px-4 pb-16">
        {!showResults ? (
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
            <div className="p-8">
              <h3 className="text-xl font-semibold text-center mb-6">
                Customize Your Workout
              </h3>
              <p className="text-gray-600 text-center mb-8">
                Tell us about your preferences and we'll create the perfect
                routine for you
              </p>

              <PreferenceForm onSubmit={handleGenerateWorkout} />
            </div>
          </div>
        ) : (
          <WorkoutRoutine
            onBack={() => setShowResults(false)}
            onGenerateNew={handleGenerateWorkout}
          />
        )}
      </main>
    </div>
  );
};

export default Home;
