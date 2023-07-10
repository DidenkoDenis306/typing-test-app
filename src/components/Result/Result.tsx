/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import  { motion } from 'framer-motion';
import { formatPercentage } from '../../utils/helpers';
import { State } from '../../hooks/useEngine';
import CloseIcon from '@mui/icons-material/Close';
import { time } from '../../App';

interface Props {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
  onRestart: () => void;
}

export const Result: FC<Props> = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className,
  onRestart,
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (state !== 'finish') {
    return null;
  }

  const WPM = Math.ceil(total / 5 - errors / 5) / (time / 60);

  return (
    <div className="absolute top-0 left-0 flex h-screen w-screen bg-slate-600 bg-opacity-80">
      <motion.div className={`relative flex items-center h-2/6
      rounded-xl justify-center space-x-12 w-1/2 ${className} m-auto bg-slate-300`}>
        <CloseIcon
          className="absolute top-5 right-5 cursor-pointer"
          onClick={onRestart}
        />

        <motion.div
          className="text-5xl text-black font-semibold"
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 0 }}
        >
          WPM: {WPM}
        </motion.div>

        <motion.div
          className="text-3xl text-black font-semibold"
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 0.5 }}        
        >
          Accuracy: {formatPercentage(accuracyPercentage)}
        </motion.div>

        <motion.div
          className="text-red-500  text-3xl"
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 1 }}  
        >
          Errors: {errors}
        </motion.div>

        <motion.div
          className="text-black text-3xl"
          initial={initial}
          animate={animate}
          transition={{ ...duration, delay: 1.3 }}  
        >
          Typed: {total}
        </motion.div>
      </motion.div>
    </div>
  );
};
