import React, { useState } from 'react';
import { AccountingQuestion } from './components/AccountingQuestion';
import { AccountingForm } from './components/AccountingForm';
import { MultipleChoiceForm } from './components/MultipleChoiceForm';
import { DragDropForm } from './components/DragDropForm';
import { ResultDisplay } from './components/ResultDisplay';
import { Hints } from './components/Hints';
import { validateEntry } from './utils/accountingValidation';
import { problems } from './types/accounting';

function App() {
  const [currentProblem, setCurrentProblem] = useState(0);
  const [debitAccount, setDebitAccount] = useState('');
  const [creditAccount, setCreditAccount] = useState('');
  const [selectedChoice, setSelectedChoice] = useState<number | null>(null);
  const [result, setResult] = useState<boolean | null>(null);

  const problem = problems[currentProblem];

  const checkAnswer = () => {
    if (problem.type === 'free') {
      const isCorrect = validateEntry(debitAccount, creditAccount);
      setResult(isCorrect);
    } else if (problem.type === 'choice') {
      const isCorrect = selectedChoice === 1;
      setResult(isCorrect);
    } else if (problem.type === 'drag') {
      const isCorrect = true; // Implement drag-drop validation
      setResult(isCorrect);
    }
  };

  const resetForm = () => {
    setDebitAccount('');
    setCreditAccount('');
    setSelectedChoice(null);
    setResult(null);
  };

  const switchProblem = () => {
    setCurrentProblem((prev) => (prev + 1) % problems.length);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">会計仕訳練習</h1>
            <button
              onClick={switchProblem}
              className="px-4 py-2 text-sm bg-indigo-100 text-indigo-700 rounded-md hover:bg-indigo-200 transition-colors"
            >
              次の問題へ
            </button>
          </div>
          
          <AccountingQuestion problem={problem} />
          
          {problem.type === 'free' && (
            <AccountingForm
              debitAccount={debitAccount}
              creditAccount={creditAccount}
              onDebitChange={setDebitAccount}
              onCreditChange={setCreditAccount}
              onCheck={checkAnswer}
              onReset={resetForm}
            />
          )}

          {problem.type === 'choice' && (
            <MultipleChoiceForm
              choices={problem.choices!}
              selectedChoice={selectedChoice}
              onSelect={setSelectedChoice}
              onSubmit={checkAnswer}
              onReset={resetForm}
            />
          )}

          {problem.type === 'drag' && (
            <DragDropForm
              problem={problem}
              onCheck={checkAnswer}
              onReset={resetForm}
            />
          )}

          <ResultDisplay result={result} problem={problem} />
          
          <Hints />
        </div>
      </div>
    </div>
  );
}

export default App;