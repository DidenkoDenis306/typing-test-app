/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import { Header } from './components/Header';
import { Words } from './components/Words';
import { CountdownTimer } from './components/CountdownTimer';
import { RestartButton } from './components/RestartButton';
import { Result } from './components/Result';
import { UserTypings } from './components/UserTypings';
import { useEngine } from './hooks/useEngine';
import { calculateAccuracyPercentage } from './utils/helpers';
import { WordsContainer } from './components/WordsContainer';

export const App = () => {
  const { words, timeLeft, typed, errors, restart, totalTyped } = useEngine(40, 10);

  return (
    <>
      <div className="hidden">
        <Header />
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
          clName="mx-auto mt-10 text-slate-500"
          onRestart={restart}
        />
      </div>

      <Result 
        className="mt-10"
        state={'finish'}
        errors={errors}
        accuracyPercentage={calculateAccuracyPercentage(errors, totalTyped)}
        total={totalTyped}
      />
    </>
  );
};