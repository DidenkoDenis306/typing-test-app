import { FC } from 'react';

interface Props {
  timeLeft: number;
}

export const CountdownTimer: FC<Props>  = ({ timeLeft }) => {
  return (
    <h2 className="text-green-500 font-semibold text-5xl text-center mt-20">
      {timeLeft}
    </h2>
  );
};