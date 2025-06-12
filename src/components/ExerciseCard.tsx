import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Info, ChevronDown, ChevronUp } from "lucide-react";

interface ExerciseCardProps {
  name?: string;
  imageUrl?: string;
  sets?: number;
  reps?: number;
  equipment?: string;
  instructions?: string[];
  targetMuscle?: string;
}

const ExerciseCard = ({
  name = "Barbell Bench Press",
  imageUrl = "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=600&q=80",
  sets = 3,
  reps = 10,
  equipment = "Barbell, Bench",
  instructions = [
    "Lie on the bench with your feet flat on the ground",
    "Grip the barbell with hands slightly wider than shoulder-width",
    "Lower the barbell to your chest",
    "Press the barbell back up to starting position",
  ],
  targetMuscle = "Chest",
}: ExerciseCardProps) => {
  const [expanded, setExpanded] = React.useState(false);

  return (
    <Card className="w-full max-w-md overflow-hidden bg-white border shadow-sm">
      <div className="relative">
        <img
          src={imageUrl}
          alt={`${name} exercise form`}
          className="w-full h-48 object-cover"
        />
        <Badge className="absolute top-2 right-2 bg-blue-600">
          {targetMuscle}
        </Badge>
      </div>

      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-bold">{name}</CardTitle>
        <CardDescription className="flex items-center gap-2">
          <span className="font-medium">
            {sets} sets × {reps} reps
          </span>
          <span className="text-sm text-gray-500">• {equipment}</span>
        </CardDescription>
      </CardHeader>

      <CardContent className="pb-2">
        {expanded && (
          <div className="mt-2 space-y-2">
            <h4 className="font-semibold text-sm">Instructions:</h4>
            <ol className="list-decimal pl-5 text-sm space-y-1">
              {instructions.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </div>
        )}
      </CardContent>

      <CardFooter className="pt-0 flex justify-between">
        <Button
          variant="ghost"
          size="sm"
          className="text-blue-600 hover:text-blue-800 p-0"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? (
            <>
              <ChevronUp className="h-4 w-4 mr-1" />
              <span>Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="h-4 w-4 mr-1" />
              <span>Show More</span>
            </>
          )}
        </Button>

        <Button
          variant="outline"
          size="sm"
          className="text-blue-600 border-blue-600 hover:bg-blue-50"
        >
          <Info className="h-4 w-4 mr-1" />
          <span>View Details</span>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ExerciseCard;
