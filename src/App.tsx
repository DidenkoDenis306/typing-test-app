/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import { Header } from './components/Header';
import { Words } from './components/Words';
import { CountdownTimer } from './components/CountdownTimer';
import { RestartButton } from './components/RestartButton';
import { Result } from './components/Result';
import { UserTypings } from './components/UserTypings';
import { useEngine } from './hooks/useEngine';
import { calculateAccuracyPercentage } from './utils/helpers';
import { WordsContainer } from './components/WordsContainer';

const timeArr = [15, 30, 60];

export const App = () => {
  const [time, setTime] = useState<number>(30);

  const wos = time * 3;

  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine(wos, time);

  return (
    <>
      <div>
        <Header />

        <div>
          {timeArr.map(t => (
            <button
              className="w-8 m-2 border-blue-300 border-2"
              key={t}
              onClick={() => {
                setTime(t);
                restart();
              }}
            >
              {t}
            </button>
          ))}
        </div>

        <CountdownTimer 
          timeLeft={timeLeft}
        />
        <WordsContainer>
          <Words words={words} />
          <UserTypings
            className="absolute inset-0 p-32"
            userInput={typed}
            words={words}
          />
        </WordsContainer>
        <RestartButton 
          clName="mx-auto mt-1 text-slate-500"
          onRestart={restart}
        />
      </div>

      <Result 
        className="m-auto"
        state={state}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
        time={time}
        onRestart={restart}
      />
    </>
  );
};