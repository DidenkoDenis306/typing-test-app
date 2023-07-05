import React from 'react';
import { Header } from './components/Header';
import { TimeButtons } from './components/TimeButtons';
import { Words } from './components/Words';
import { CountdownTimer } from './components/CountdownTimer';
import { RestartButton } from './components/RestartButton';
import { Result } from './components/Result';

export const App = () => {
  return (
    <>
      <Header />
      <TimeButtons />
      <CountdownTimer 
        timeLeft={30}
      />
      <Words />
      <RestartButton 
        clName="mx-auto mt-10 text-slate-500"
        onRestart={() => null}
      />
      <Result 
        className="mt-10"
        errors={10}
        accuracyPercentage={100}
        total={200}
      />
    </>
  );
};
