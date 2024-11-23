import React from 'react';

interface AccountingFormProps {
  debitAccount: string;
  creditAccount: string;
  onDebitChange: (value: string) => void;
  onCreditChange: (value: string) => void;
  onCheck: () => void;
  onReset: () => void;
}

export const AccountingForm: React.FC<AccountingFormProps> = ({
  debitAccount,
  creditAccount,
  onDebitChange,
  onCreditChange,
  onCheck,
  onReset,
}) => (
  <div className="space-y-6">
    <div className="grid grid-cols-2 gap-4">
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          借方（デビット）
        </label>
        <input
          type="text"
          value={debitAccount}
          onChange={(e) => onDebitChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="勘定科目を入力"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          貸方（クレジット）
        </label>
        <input
          type="text"
          value={creditAccount}
          onChange={(e) => onCreditChange(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="勘定科目を入力"
        />
      </div>
    </div>

    <div className="flex gap-4">
      <button
        onClick={onCheck}
        className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
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