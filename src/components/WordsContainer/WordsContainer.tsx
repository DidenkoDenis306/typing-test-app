/* eslint-disable max-len */
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const WordsContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="relative text-3xl max-x-xl leading-relaxed whitespace-break-spaces mt-3 p-32">
      {children}
    </div>
  );
};
