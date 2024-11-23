import React from 'react';
import { AccountingProblem } from '../types/accounting';

interface AccountingQuestionProps {
  problem: AccountingProblem;
}

export const AccountingQuestion: React.FC<AccountingQuestionProps> = ({ problem }) => (
  <div className="bg-blue-50 p-4 rounded-lg mb-8">
    <h2 className="text-lg font-semibold text-gray-700 mb-2">問題 {problem.id}:</h2>
    <p className="text-gray-600">{problem.question}</p>
    
    {problem.type === 'free' && (
      <div className="mt-4 p-3 bg-white rounded-lg">
        <p className="text-sm text-gray-600 font-medium">使用可能な勘定科目:</p>
        <div className="mt-2 flex flex-wrap gap-2">
          {['普通預金', '現金', '売掛金', '売上高', '売上'].map((account) => (
            <span key={account} className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
              {account}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>
);