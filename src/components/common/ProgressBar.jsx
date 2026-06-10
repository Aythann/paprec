export default function ProgressBar({ step, totalSteps = 9 }) {
  const progress = `${(step / totalSteps) * 100}%`;

  return (
    <div className="progress-bar" aria-hidden="true">
      <div className="progress-bar__fill" style={{ width: progress }} />
    </div>
  );
}