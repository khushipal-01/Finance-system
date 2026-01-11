import { createContext, useContext, useState } from "react";

const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (tx) =>
    setTransactions([...transactions, tx]);

  return (
    <FinanceContext.Provider value={{ transactions, addTransaction }}>
      {children}
    </FinanceContext.Provider>
  );
};

export const useFinance = () => useContext(FinanceContext);
