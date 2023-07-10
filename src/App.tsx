/* eslint-disable no-console */
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
import cn from 'classnames';


const timeArr = [15, 30, 60];

export const App = () => {
  const [time, setTime] = useState<number>(30);

  const wordsAmount = time * 2;

  const { state, words, timeLeft, typed, errors, restart, totalTyped } = useEngine(wordsAmount, time);

  return (
    <>
      <div>
        <Header />

        <div className="ml-96 mt-12 w-80 flex justify-around border-green-600 border-2 rounded-lg">
          {timeArr.map(t => (
            <button
              className={cn('box-border h-12 grow text-2xl hover:bg-green-600 hover:text-slate-100 transition duration-300', {
                'bg-green-600 text-slate-100': t === time,
              })}
              key={t}
              onClick={() => {
                if (t !== time) {
                  setTime(t);
                  restart();
                }
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
            className="absolute inset-0 pb-0 p-32 "
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