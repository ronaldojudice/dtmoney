import { useEffect,useState } from "react";
import { Container } from "./style";
import {api} from '../../services/api';

interface Transaction{
    id:number;
    title:string;
    value:number;
    category:string;
    type:string;
    createdAt: string;
    
}

export function TransactionsTable(){
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transactions')     
        .then(response =>setTransactions(response.data.transactions))
    },[]);
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                  {transactions.map(transaction=> {
                      return(
                          <tr key={transaction.id}>
                              <td>{transaction.title}</td>
                              <td className={transaction.type}>
                                 {Intl.NumberFormat('pt-br',{
                                     style:'currency',
                                     currency:'BRL'
                                 }).format(transaction.value)}
                                 </td>
                              <td>{transaction.category}</td>
                              <td>
                                 {new Intl.DateTimeFormat('pt-BR').format(
                                     new Date(transaction.createdAt)
                                    )}
                             </td>

                          </tr>
                      );
                  })}
                   
                </tbody>
            </table>
        </Container>
    );
}