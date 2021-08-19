import { Summary } from '../Summary';
import { TransactionsTable } from '../TransactionsTable';
import { Container } from './../Dashboard/style';


export function Dashboard(){
  return(
    <Container>
      
      <Summary/>
      <TransactionsTable/> 

    </Container>
  );
}