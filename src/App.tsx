import { Dashboard } from './components/Dashboard/Index';
import { Header } from './components/Header/index';
import { GlobalStyled } from "./styles/global";
import {TransactionTable} from './components/TransactionsTable/index';


export function App() {
  return ( 
    <>  
      <Header/>
      <Dashboard/>
      <TransactionTable/>
      <GlobalStyled/>
     </>   
  );
}


