const normalizeAccount = (account: string): string => {
  account = account.trim().toLowerCase();
  
  // 借方の正解パターン
  const validDebitAccounts = ['普通預金', '現金', '現金預金'];
  const normalizedDebitAccounts = validDebitAccounts.map(acc => acc.toLowerCase());
  
  // 貸方の正解パターン
  const validCreditAccounts = ['売上高', '売上'];
  const normalizedCreditAccounts = validCreditAccounts.map(acc => acc.toLowerCase());
  
  // 正規化されたアカウントが正解パターンに含まれているかチェック
  if (normalizedDebitAccounts.includes(account)) {
    return '普通預金';
  }
  if (normalizedCreditAccounts.includes(account)) {
    return '売上高';
  }
  
  return account;
};

export const validateEntry = (debitAccount: string, creditAccount: string): boolean => {
  const normalizedDebit = normalizeAccount(debitAccount);
  const normalizedCredit = normalizeAccount(creditAccount);
  
  return (
    (normalizedDebit === '普通預金' || normalizedDebit === '現金' || normalizedDebit === '現金預金') &&
    (normalizedCredit === '売上高' || normalizedCredit === '売上')
  );
};