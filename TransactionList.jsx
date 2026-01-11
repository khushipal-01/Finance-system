import { useFinance } from "../context/FinanceContext";

export default function TransactionList() {
  const { transactions } = useFinance();

  return (
    <div className="card">
      <h3 className="font-bold mb-2">Transactions</h3>
      {transactions.map((t, i) => (
        <div key={i} className="flex justify-between border-b py-1">
          <span>{t.text}</span>
          <span>₹ {t.amount}</span>
        </div>
      ))}
    </div>
  );
}
