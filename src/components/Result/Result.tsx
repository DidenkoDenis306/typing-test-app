/* eslint-disable import/no-extraneous-dependencies */
import { FC } from 'react';
import  { motion } from 'framer-motion';
import { formatPercentage } from '../../utils/helpers';
import { State } from '../../hooks/useEngine';

interface Props {
  state: State;
  errors: number;
  accuracyPercentage: number;
  total: number;
  className?: string;
}

export const Result: FC<Props> = ({
  state,
  errors,
  accuracyPercentage,
  total,
  className,
}) => {
  const initial = { opacity: 0 };
  const animate = { opacity: 1 };
  const duration = { duration: 0.3 };

  if (state !== 'finish') {
    return null;
  }

  return (
    <motion.ul className={`flex flex-col items-center text-green-400 space-y-3 ${className}`}>
      <motion.li
        className="text-xl font-semibold"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0 }}
      >
        Results
      </motion.li>

      <motion.li
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 0.5 }}        
      >
        Accuracy: {formatPercentage(accuracyPercentage)}
      </motion.li>

      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1 }}  
      >
        Errors: {errors}
      </motion.li>

      <motion.li
        className="text-red-500"
        initial={initial}
        animate={animate}
        transition={{ ...duration, delay: 1.3 }}  
      >
        Typed: {total}
      </motion.li>
    </motion.ul>
  );
};
