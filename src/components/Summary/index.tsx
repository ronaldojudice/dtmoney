import React from 'react';
import { Container } from "./style";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/Total.svg";
import {useTransactions} from "../../hooks/useTransactions";



export function Summary(){
 
  const {transactions} = useTransactions();

  const summary = transactions.reduce((acc, transaction) =>{
    if(transaction.type ==='deposit'){
     acc.deposits += transaction.value;
     acc.total += transaction.value;
    }else{
      acc.withdraws += transaction.value;
      acc.total -= transaction.value;
    }
    return acc
  },{
    deposits:0,
    withdraws:0,
    total:0,

  })    
  return(   
      <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas"  />
        </header>
        <strong>
        {Intl.NumberFormat('pt-br',{
         style:'currency',
         currency:'BRL'
         }).format(summary.deposits)}
        </strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="saídas"  />
        </header>
        <strong>- 
        {Intl.NumberFormat('pt-br',{
         style:'currency',
         currency:'BRL'
         }).format(summary.withdraws)}
        </strong>
      </div>

      <div className="highlight-background">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="Total"  />
        </header>
        <strong>  {Intl.NumberFormat('pt-br',{
         style:'currency',
         currency:'BRL',
         }).format(summary.total)}       
         </strong>
      </div>

      </Container>
  );
}
  
