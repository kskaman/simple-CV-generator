interface Props {
  stepNumber: number;
  tag: string;
}

const StepDiv = ({ stepNumber, tag }: Props) => {
  return (
    <div>
      <div>1</div>
      <div>
        <span>Step {stepNumber} : </span>
        <span>{tag}</span>
      </div>
    </div>
  );
};

export default StepDiv;
