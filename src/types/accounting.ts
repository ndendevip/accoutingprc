export interface AccountingChoice {
  id: number;
  debit: string;
  credit: string;
}

export interface AccountingProblem {
  id: number;
  question: string;
  type: 'free' | 'choice' | 'drag';
  choices?: AccountingChoice[];
  correctDebit?: string[];
  correctCredit?: string[];
  availableAccounts?: string[];
}

export const problems: AccountingProblem[] = [
  {
    id: 1,
    question: 'コンサルティングを実施し、100万円の売り上げを銀行口座で受け取りました。この取引の正しい仕訳を入力してください。',
    type: 'free',
    correctDebit: ['普通預金', '現金', '現金預金'],
    correctCredit: ['売上高', '売上']
  },
  {
    id: 2,
    question: '役員がポケットマネーから手出しで会社の経費として交際費10,000円を払いました。この取引の正しい仕訳を選択してください。',
    type: 'choice',
    choices: [
      { id: 1, debit: '交際費', credit: '役員借入金' },
      { id: 2, debit: '交際費', credit: '現金' },
      { id: 3, debit: '現金', credit: '役員借入金' },
      { id: 4, debit: '役員貸付金', credit: '交際費' }
    ]
  },
  {
    id: 3,
    question: '文具店から事務用品を掛けで5,000円分購入しました。適切な勘定科目をドラッグ＆ドロップで配置してください。',
    type: 'drag',
    correctDebit: ['消耗品費'],
    correctCredit: ['買掛金'],
    availableAccounts: ['現金', '売掛金', '買掛金', '備品', '消耗品費', '売上', '仕入', '雑費']
  },
  {
    id: 4,
    question: '得意先に販売した商品の代金30万円を、約束手形で受け取りました。',
    type: 'choice',
    choices: [
      { id: 1, debit: '受取手形', credit: '売掛金' },
      { id: 2, debit: '現金', credit: '売掛金' },
      { id: 3, debit: '受取手形', credit: '売上' },
      { id: 4, debit: '売掛金', credit: '受取手形' }
    ]
  },
  {
    id: 5,
    question: '仕入先から仕入れた商品の代金50万円を、銀行振込で支払いました。',
    type: 'drag',
    correctDebit: ['買掛金'],
    correctCredit: ['普通預金'],
    availableAccounts: ['現金', '普通預金', '買掛金', '支払手形', '仕入', '売上', '未払金', '前払金']
  },
  {
    id: 6,
    question: '商品を40万円で掛けで販売しました。原価は28万円です。（3分法）',
    type: 'free',
    correctDebit: ['売掛金'],
    correctCredit: ['売上']
  },
  {
    id: 7,
    question: '取引先から、以前販売した商品の返品を受けました。販売価格は8万円、原価は5万円です。',
    type: 'choice',
    choices: [
      { id: 1, debit: '売上返品', credit: '売掛金' },
      { id: 2, debit: '売掛金', credit: '売上' },
      { id: 3, debit: '仕入', credit: '買掛金' },
      { id: 4, debit: '現金', credit: '売上返品' }
    ]
  },
  {
    id: 8,
    question: '従業員に対して、今月分の給料手取り25万円を銀行振込で支払いました。源泉所得税2万円は預かっています。',
    type: 'drag',
    correctDebit: ['給料手当'],
    correctCredit: ['普通預金', '預り金'],
    availableAccounts: ['現金', '普通預金', '給料手当', '預り金', '未払金', '立替金', '仮払金', '雑費']
  },
  {
    id: 9,
    question: '事務所の家賃15万円を、今月分と来月分、2ヶ月分まとめて現金で支払いました。',
    type: 'choice',
    choices: [
      { id: 1, debit: ['地代家賃', '前払費用'], credit: '現金' },
      { id: 2, debit: '地代家賃', credit: '現金' },
      { id: 3, debit: '現金', credit: '前受収益' },
      { id: 4, debit: '前払費用', credit: '現金' }
    ]
  },
  {
    id: 10,
    question: '得意先から、売掛金の一部として、20万円を小切手で受け取りました。',
    type: 'drag',
    correctDebit: ['当座預金'],
    correctCredit: ['売掛金'],
    availableAccounts: ['現金', '当座預金', '売掛金', '受取手形', '売上', '未収金', '前受金', '預り金']
  }
];