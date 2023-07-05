import { FC } from 'react';

interface Props {
  timeLeft: number;
}

export const CountdownTimer: FC<Props>  = ({ timeLeft }) => {
  return (
    <h2 className="text-yellow-400 font-medium">
      Time: {timeLeft}
    </h2>
  );
};