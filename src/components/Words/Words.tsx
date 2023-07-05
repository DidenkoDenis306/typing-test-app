/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import { generate } from 'random-words';

const words: string = generate({ exactly: 20, join: ' ' });


export const Words = () => {
  return (
    <div className="text-4xl text-center text-slate-500">
      {words}
    </div>
  );
};

