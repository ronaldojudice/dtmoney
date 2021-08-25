import {createContext,useState, useEffect, ReactNode} from 'react';
import { api } from './services/api';





export const TransactionsContext = createContext<Transaction[]>([]);

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

export function TransactionsProvider(props: TransactionProviderProps){
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(()=>{
      api.get('transactions')     
      .then(response =>setTransactions(response.data.transactions))
  },[]);

  return(
    <TransactionsContext.Provider value={transactions}>
      {props.children}
    </TransactionsContext.Provider>
  );

}
