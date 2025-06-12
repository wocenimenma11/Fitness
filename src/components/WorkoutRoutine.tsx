import React from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import ExerciseCard from "./ExerciseCard";
import { CheckCircle } from "lucide-react";

interface Exercise {
  id: string;
  name: string;
  sets: number;
  reps: number;
  equipment: string;
  muscleGroup: string;
  imageUrl: string;
  instructions: string;
}

interface WorkoutRoutineProps {
  exercises?: Exercise[];
  duration?: number;
  fitnessLevel?: string;
  targetMuscleGroups?: string[];
  onBack?: () => void;
  onGenerateNew?: () => void;
}

const WorkoutRoutine: React.FC<WorkoutRoutineProps> = ({
  exercises = [
    {
      id: "1",
      name: "Push-ups",
      sets: 3,
      reps: 12,
      equipment: "Bodyweight",
      muscleGroup: "Chest",
      imageUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=600&q=80",
      instructions:
        "Start in a plank position with hands shoulder-width apart. Lower your body until your chest nearly touches the floor, then push back up.",
    },
    {
      id: "2",
      name: "Dumbbell Rows",
      sets: 3,
      reps: 10,
      equipment: "Dumbbells",
      muscleGroup: "Back",
      imageUrl:
        "https://images.unsplash.com/photo-1603287681836-b174ce5074c2?w=600&q=80",
      instructions:
        "Bend at the waist with a dumbbell in one hand. Pull the dumbbell up to your side while keeping your back straight.",
    },
    {
      id: "3",
      name: "Squats",
      sets: 4,
      reps: 15,
      equipment: "Bodyweight",
      muscleGroup: "Legs",
      imageUrl:
        "https://images.unsplash.com/photo-1574680178050-55c6a6a96e0a?w=600&q=80",
      instructions:
        "Stand with feet shoulder-width apart. Lower your body by bending your knees and pushing your hips back as if sitting in a chair.",
    },
  ],
  duration = 30,
  fitnessLevel = "Intermediate",
  targetMuscleGroups = ["Chest", "Back", "Legs"],
  onBack = () => {},
  onGenerateNew = () => {},
}) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md w-full max-w-4xl mx-auto">
      <div className="mb-6 text-center">
        <div className="flex items-center justify-center mb-2">
          <CheckCircle className="text-green-500 mr-2" size={24} />
          <span className="text-green-500 font-medium">
            Workout Generated Successfully
          </span>
        </div>
        <h2 className="text-3xl font-bold text-blue-700 mb-2">
          Your Custom Workout Routine
        </h2>
        <p className="text-gray-600">
          Your personalized workout routine is ready! Each exercise is carefully
          selected to match your preferences and fitness goals.
        </p>
      </div>

      <div className="bg-blue-50 p-4 rounded-lg mb-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">
          Workout Summary
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-3 rounded shadow-sm">
            <span className="text-gray-500 text-sm">Duration</span>
            <p className="font-medium">{duration} minutes</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <span className="text-gray-500 text-sm">Fitness Level</span>
            <p className="font-medium">{fitnessLevel}</p>
          </div>
          <div className="bg-white p-3 rounded shadow-sm">
            <span className="text-gray-500 text-sm">Target Muscle Groups</span>
            <p className="font-medium">{targetMuscleGroups.join(", ")}</p>
          </div>
        </div>
      </div>

      <div className="mb-6">
        <h3 className="text-xl font-semibold text-blue-800 mb-4">Exercises</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {exercises.map((exercise) => (
            <ExerciseCard
              key={exercise.id}
              name={exercise.name}
              sets={exercise.sets}
              reps={exercise.reps}
              equipment={exercise.equipment}
              targetMuscle={exercise.muscleGroup}
              imageUrl={exercise.imageUrl}
              instructions={[exercise.instructions]}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        <Button variant="default" className="bg-blue-600 hover:bg-blue-700">
          Save Routine
        </Button>
        <Button
          variant="outline"
          className="border-blue-600 text-blue-600 hover:bg-blue-50"
        >
          Print Routine
        </Button>
        <Button variant="secondary" onClick={onGenerateNew}>
          Generate New Routine
        </Button>
        <Button variant="outline" onClick={onBack}>
          Back to Form
        </Button>
      </div>
    </div>
  );
};

export default WorkoutRoutine;
