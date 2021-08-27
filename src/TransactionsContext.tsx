import {createContext,useState, useEffect, ReactNode} from 'react';
import { api } from './services/api';


export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
  );

interface Transaction{
  id:number;
  title:string;
  value:number;
  category:string;
  type:string;
  createdAt: string;

}

interface TransactionProviderProps{
  children: ReactNode;
}

interface TransactionsContextData{
  transactions: Transaction[];
  createTransaction:(transaction: TransactionInput)=>void;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>;


export function TransactionsProvider(props: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
      api.get('transactions')     
      .then(response =>setTransactions(response.data.transactions))
  },[]);

   function createTransaction(transaction: TransactionInput){  
      api.post('/transactions', transaction);
  }
  
  return(
    <TransactionsContext.Provider value={{transactions,createTransaction}}>
      {props.children}
    </TransactionsContext.Provider>
  );
}
