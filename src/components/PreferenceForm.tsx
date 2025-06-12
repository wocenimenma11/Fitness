import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Button } from "@/components/ui/button";

interface PreferenceFormProps {
  onSubmit?: (preferences: WorkoutPreferences) => void;
}

export interface WorkoutPreferences {
  duration: number;
  fitnessLevel: string;
  equipment: string[];
  targetMuscleGroups: string[];
}

const PreferenceForm: React.FC<PreferenceFormProps> = ({
  onSubmit = () => {},
}) => {
  const [preferences, setPreferences] = useState<WorkoutPreferences>({
    duration: 30,
    fitnessLevel: "beginner",
    equipment: [],
    targetMuscleGroups: [],
  });

  const handleDurationChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPreferences({
      ...preferences,
      duration: parseInt(e.target.value) || 30,
    });
  };

  const handleFitnessLevelChange = (value: string) => {
    setPreferences({
      ...preferences,
      fitnessLevel: value,
    });
  };

  const handleEquipmentChange = (equipment: string, checked: boolean) => {
    setPreferences((prev) => {
      if (checked) {
        return { ...prev, equipment: [...prev.equipment, equipment] };
      } else {
        return {
          ...prev,
          equipment: prev.equipment.filter((item) => item !== equipment),
        };
      }
    });
  };

  const handleMuscleGroupChange = (muscleGroup: string, checked: boolean) => {
    setPreferences((prev) => {
      if (checked) {
        return {
          ...prev,
          targetMuscleGroups: [...prev.targetMuscleGroups, muscleGroup],
        };
      } else {
        return {
          ...prev,
          targetMuscleGroups: prev.targetMuscleGroups.filter(
            (item) => item !== muscleGroup,
          ),
        };
      }
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(preferences);
  };

  return (
    <Card className="w-full max-w-md bg-white">
      <CardContent className="pt-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Workout Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration" className="text-sm font-medium">
              Workout Duration
            </Label>
            <Input
              id="duration"
              type="number"
              min="10"
              max="120"
              value={preferences.duration}
              onChange={handleDurationChange}
              className="w-full"
            />
            <p className="text-xs text-gray-500">Minutes</p>
          </div>

          {/* Fitness Level */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Fitness Level</Label>
            <RadioGroup
              value={preferences.fitnessLevel}
              onValueChange={handleFitnessLevelChange}
              className="flex flex-col space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="beginner" id="beginner" />
                <Label htmlFor="beginner">Beginner</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="intermediate" id="intermediate" />
                <Label htmlFor="intermediate">Intermediate</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="advanced" id="advanced" />
                <Label htmlFor="advanced">Advanced</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Available Equipment */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Available Equipment</Label>
            <p className="text-xs text-gray-500">
              Select all equipment you have access to
            </p>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="dumbbells"
                  checked={preferences.equipment.includes("dumbbells")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("dumbbells", checked === true)
                  }
                />
                <Label htmlFor="dumbbells">Dumbbells</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="barbell"
                  checked={preferences.equipment.includes("barbell")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("barbell", checked === true)
                  }
                />
                <Label htmlFor="barbell">Barbell</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="kettlebell"
                  checked={preferences.equipment.includes("kettlebell")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("kettlebell", checked === true)
                  }
                />
                <Label htmlFor="kettlebell">Kettlebell</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="resistance-bands"
                  checked={preferences.equipment.includes("resistance-bands")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("resistance-bands", checked === true)
                  }
                />
                <Label htmlFor="resistance-bands">Resistance Bands</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="bench"
                  checked={preferences.equipment.includes("bench")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("bench", checked === true)
                  }
                />
                <Label htmlFor="bench">Bench</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="pull-up-bar"
                  checked={preferences.equipment.includes("pull-up-bar")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("pull-up-bar", checked === true)
                  }
                />
                <Label htmlFor="pull-up-bar">Pull-up Bar</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="cable-machine"
                  checked={preferences.equipment.includes("cable-machine")}
                  onCheckedChange={(checked) =>
                    handleEquipmentChange("cable-machine", checked === true)
                  }
                />
                <Label htmlFor="cable-machine">Cable Machine</Label>
              </div>
            </div>
          </div>

          {/* Target Muscle Groups */}
          <div className="space-y-2">
            <Label className="text-sm font-medium">Target Muscle Groups</Label>
            <div className="grid grid-cols-2 gap-2">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="chest"
                  checked={preferences.targetMuscleGroups.includes("chest")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("chest", checked === true)
                  }
                />
                <Label htmlFor="chest">Chest</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="back"
                  checked={preferences.targetMuscleGroups.includes("back")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("back", checked === true)
                  }
                />
                <Label htmlFor="back">Back</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="legs"
                  checked={preferences.targetMuscleGroups.includes("legs")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("legs", checked === true)
                  }
                />
                <Label htmlFor="legs">Legs</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="shoulders"
                  checked={preferences.targetMuscleGroups.includes("shoulders")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("shoulders", checked === true)
                  }
                />
                <Label htmlFor="shoulders">Shoulders</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="arms"
                  checked={preferences.targetMuscleGroups.includes("arms")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("arms", checked === true)
                  }
                />
                <Label htmlFor="arms">Arms</Label>
              </div>
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="core"
                  checked={preferences.targetMuscleGroups.includes("core")}
                  onCheckedChange={(checked) =>
                    handleMuscleGroupChange("core", checked === true)
                  }
                />
                <Label htmlFor="core">Core</Label>
              </div>
            </div>
          </div>

          <Button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          >
            Generate Workout
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default PreferenceForm;
