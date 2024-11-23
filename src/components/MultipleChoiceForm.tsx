import React from 'react';
import { AccountingChoice } from '../types/accounting';

interface MultipleChoiceFormProps {
  choices: AccountingChoice[];
  selectedChoice: number | null;
  onSelect: (choiceId: number) => void;
  onSubmit: () => void;
  onReset: () => void;
}

export const MultipleChoiceForm: React.FC<MultipleChoiceFormProps> = ({
  choices,
  selectedChoice,
  onSelect,
  onSubmit,
  onReset,
}) => (
  <div className="space-y-6">
    <div className="space-y-3">
      {choices.map((choice) => (
        <label
          key={choice.id}
          className={`block p-4 rounded-lg border-2 cursor-pointer transition-all ${
            selectedChoice === choice.id
              ? 'border-blue-500 bg-blue-50'
              : 'border-gray-200 hover:border-blue-200'
          }`}
        >
          <input
            type="radio"
            name="accounting-choice"
            value={choice.id}
            checked={selectedChoice === choice.id}
            onChange={() => onSelect(choice.id)}
            className="hidden"
          />
          <div className="grid grid-cols-2 gap-4">
            <div>
              <span className="text-sm text-gray-500">借方</span>
              <p className="font-medium text-gray-700">{choice.debit}</p>
            </div>
            <div>
              <span className="text-sm text-gray-500">貸方</span>
              <p className="font-medium text-gray-700">{choice.credit}</p>
            </div>
          </div>
        </label>
      ))}
    </div>

    <div className="flex gap-4">
      <button
        onClick={onSubmit}
        disabled={selectedChoice === null}
        className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors disabled:bg-blue-300"
      >
        回答を確認
      </button>
      <button
        onClick={onReset}
        className="flex-1 bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
      >
        リセット
      </button>
    </div>
  </div>
);