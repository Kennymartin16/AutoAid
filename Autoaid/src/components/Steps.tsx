import React from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: "01",
    title: "Get a Quote",
    description: "Through True Rich Attended does no end it his mother since real had half every",
  },
  {
    number: "02",
    title: "Book an Appointment",
    description: "Through True Rich Attended does no end it his mother since real",
  },
  {
    number: "03",
    title: "Get your Service Done",
    description: "Ecstatic unsatiable saw his giving Remain expense you position concluded.",
  },
];

const StepComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      {steps.map((step, index) => (
        <div key={index} className="flex items-start mb-8">
          {/* Circle with step number */}
          <div className="flex flex-col items-center mr-4">
            <div className="flex items-center justify-center w-12 h-12 bg-secondary rounded-full text-white font-bold text-lg">
              {step.number}
            </div>

            {/* Dashed line, only show if not the last step */}
            {index < steps.length - 1 && (
              <div className="h-16 border-l-2 border-dashed border-primary mt-2"></div>
            )}
          </div>

          {/* Text content */}
          <div>
            <p className="text-black text-2xl font-semibold">{step.title}</p>
            <p className="text-steal-gray text-base">{step.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StepComponent;
