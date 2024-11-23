import React from 'react';

export const Hints: React.FC = () => (
  <div className="mt-8 border-t pt-6">
    <h3 className="text-lg font-semibold text-gray-700 mb-3">ヒント:</h3>
    <ul className="list-disc list-inside text-gray-600 space-y-2">
      <li>現金を受け取る場合は、借方に資産科目が来ます</li>
      <li>売上が発生した場合は、貸方に収益科目が来ます</li>
      <li>銀行口座での受け取りは「普通預金」や「現金預金」を使用します</li>
      <li>掛取引の場合は、債権・債務の勘定科目を使用します</li>
      <li>3分法では商品勘定を使用せず、仕入と売上を分けて記帳します</li>
      <li>手形取引は受取手形・支払手形を使用します</li>
      <li>前払いの費用は資産として「前払費用」に計上します</li>
      <li>源泉徴収した税金は「預り金」として処理します</li>
      <li>小切手での受け取りは「当座預金」を使用します</li>
    </ul>
  </div>
);