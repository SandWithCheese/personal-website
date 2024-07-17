interface ProgressCSSProps extends React.CSSProperties {
  "--progress-width": number;
  "--buffered-width": number;
}

interface AudioProgressBarProps
  extends React.ComponentPropsWithoutRef<"input"> {
  duration: number;
  currentProgress: number;
  buffered: number;
}

export default function AudioProgressBar(props: AudioProgressBarProps) {
  const { duration, currentProgress, buffered, ...rest } = props;

  const progressBarWidth = isNaN(currentProgress / duration)
    ? 0
    : currentProgress / duration;
  const bufferedWidth = isNaN(buffered / duration) ? 0 : buffered / duration;

  const progressStyles: ProgressCSSProps = {
    "--progress-width": progressBarWidth,
    "--buffered-width": bufferedWidth,
  };

  return (
    <div className="group absolute -top-[4px] left-0 right-0 h-1">
      <input
        type="range"
        name="progress"
        className={`progress-bar absolute inset-0 m-0 h-full w-full cursor-pointer appearance-none bg-primary accent-accent transition-all before:absolute before:inset-0 before:h-full before:w-full before:origin-left before:bg-accent after:absolute after:h-full after:w-full after:bg-accent/50 hover:accent-accent group-hover:h-2 dark:bg-primary`}
        style={progressStyles}
        min={0}
        max={duration}
        value={currentProgress}
        {...rest}
      />
    </div>
  );
}
