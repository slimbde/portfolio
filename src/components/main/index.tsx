import { useState } from "react"
import { MySkills } from "./content/MySkills"
import "./main.scss"
import { VerticalLinearStepper } from "./VerticalStepper"

export const Main: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0)

  const stepsContent = [
    <MySkills />
  ]


  return <main>
    <div className="side">
      <VerticalLinearStepper setCurrentStep={setCurrentStep} />
    </div>
    <div className="content">{stepsContent[currentStep]}</div>
  </main>
}