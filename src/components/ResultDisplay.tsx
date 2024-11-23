import React from 'react';
import { CheckCircle, XCircle } from 'lucide-react';
import { AccountingProblem } from '../types/accounting';

interface ResultDisplayProps {
  result: boolean | null;
  problem: AccountingProblem;
}

export const ResultDisplay: React.FC<ResultDisplayProps> = ({ result, problem }) => {
  if (result === null) return null;

  return (
    <div
      className={`mt-6 p-4 rounded-lg flex items-center gap-3 ${
        result ? 'bg-green-50 text-green-700' : 'bg-red-50 text-red-700'
      }`}
    >
      {result ? (
        <>
          <CheckCircle className="w-6 h-6" />
          <span>正解です！</span>
        </>
      ) : (
        <>
          <XCircle className="w-6 h-6" />
          <span>
            {problem.type === 'free' ? (
              '不正解です。正しい仕訳は「借方：普通預金（または現金）、貸方：売上高（または売上）」です。'
            ) : (
              '不正解です。正しい仕訳は「借方：交際費、貸方：役員借入金」です。'
            )}
          </span>
        </>
      )}
    </div>
  );
};