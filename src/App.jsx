import React, { useState } from 'react';
import './App.css';
import LandingPage from './components/LandingPage';
import AreYouReady from './components/AreYouReady';
import WeekSelection from './components/WeekSelection';
import DaySelection from './components/DaySelection';
import TimeSelection from './components/TimeSelection';
import Summary from './components/Summary';

function App() {
  const [step, setStep] = useState('landing');
  const [selections, setSelections] = useState({
    week: null,
    day: null,
    time: null
  });

  const handleStart = () => setStep('are-you-ready');

  const handleReady = () => setStep('week');

  const handleWeekSelect = (week) => {
    setSelections(prev => ({ ...prev, week }));
    setStep('day');
  };

  const handleDaySelect = (day) => {
    setSelections(prev => ({ ...prev, day }));
    setStep('time');
  };

  const handleTimeSelect = (time) => {
    setSelections(prev => ({ ...prev, time }));
    setStep('summary');
  };

  const handleReset = () => {
    setSelections({ week: null, day: null, time: null });
    setStep('landing');
  };

  const handleBack = () => {
    if (step === 'day') setStep('week');
    if (step === 'time') setStep('day');
  };

  return (
    <div className="app-container">
      {step === 'landing' && <LandingPage onStart={handleStart} />}
      {step === 'are-you-ready' && <AreYouReady onYes={handleReady} />}
      {step === 'week' && <WeekSelection onSelect={handleWeekSelect} />}
      {step === 'day' && <DaySelection week={selections.week} onSelect={handleDaySelect} onBack={handleBack} />}
      {step === 'time' && <TimeSelection day={selections.day} onSelect={handleTimeSelect} onBack={handleBack} />}
      {step === 'summary' && <Summary selections={selections} onReset={handleReset} />}
    </div>
  );
}

export default App;
