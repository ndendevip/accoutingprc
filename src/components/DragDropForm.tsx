import React, { useState } from 'react';
import { AccountingProblem } from '../types/accounting';

interface DragDropFormProps {
  problem: AccountingProblem;
  onCheck: () => void;
  onReset: () => void;
}

interface DragState {
  accounts: string[];
  debit: string[];
  credit: string[];
}

export const DragDropForm: React.FC<DragDropFormProps> = ({ problem, onCheck, onReset }) => {
  const [entries, setEntries] = useState<DragState>({
    accounts: problem.availableAccounts || [],
    debit: [],
    credit: []
  });

  const [draggedItem, setDraggedItem] = useState<{ item: string; sourceList: keyof DragState } | null>(null);

  const handleDragStart = (e: React.DragEvent, item: string, sourceList: keyof DragState) => {
    setDraggedItem({ item, sourceList });
    e.dataTransfer.effectAllowed = 'move';
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  const handleDrop = (e: React.DragEvent, targetList: keyof DragState) => {
    e.preventDefault();
    if (!draggedItem) return;

    const { item, sourceList } = draggedItem;
    
    const newEntries = { ...entries };
    newEntries[sourceList] = newEntries[sourceList].filter(i => i !== item);
    
    if (!newEntries[targetList].includes(item)) {
      newEntries[targetList] = [...newEntries[targetList], item];
    }
    
    setEntries(newEntries);
    setDraggedItem(null);
  };

  const renderList = (id: keyof DragState, items: string[], title: string) => (
    <div
      onDragOver={handleDragOver}
      onDrop={(e) => handleDrop(e, id)}
      className="min-h-32 p-4 bg-gray-100 rounded-lg"
    >
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="space-y-2">
        {items.map((item) => (
          <div
            key={item}
            draggable
            onDragStart={(e) => handleDragStart(e, item, id)}
            className="p-2 bg-white rounded shadow cursor-move hover:bg-gray-50 transition-colors"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-4">
        {renderList('accounts', entries.accounts, '勘定科目')}
        {renderList('debit', entries.debit, '借方')}
        {renderList('credit', entries.credit, '貸方')}
      </div>

      <div className="flex gap-4">
        <button
          onClick={onCheck}
          className="flex-1 bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition-colors"
        >
          回答を確認
        </button>
        <button
          onClick={() => {
            setEntries({
              accounts: problem.availableAccounts || [],
              debit: [],
              credit: []
            });
            onReset();
          }}
          className="flex-1 bg-gray-200 text-gray-700 px-6 py-2 rounded-md hover:bg-gray-300 transition-colors"
        >
          リセット
        </button>
      </div>
    </div>
  );
};