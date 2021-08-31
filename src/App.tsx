import { Dashboard } from './components/Dashboard/Index';
import Modal from 'react-modal';
import { Header } from './components/Header/index';
import { GlobalStyled } from "./styles/global";
import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal/index';
import {  TransactionsProvider } from '../src/hooks/useTransactions';


Modal.setAppElement('#root')


export function App() {

  const [isNewTransactionModalOpen, setIsNewTransactionalModalOpen] = useState(false);
        
  function handleOpenNewTransactionModal(){ //abir
    setIsNewTransactionalModalOpen(true);
  }

  function handleCloseNewTransactionModal(){ // fechar
    setIsNewTransactionalModalOpen(false);
  }

  return ( 
    <TransactionsProvider>  
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <Dashboard/>    
       <NewTransactionModal 
       isOpen={isNewTransactionModalOpen} 
       onRequestClose={handleCloseNewTransactionModal}
       />     
      <GlobalStyled/>
     </TransactionsProvider>   
  );
}


