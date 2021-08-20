import logodt from '../../assets/logo.svg';
import { Container, Content } from './style';

interface Headerprops{
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Headerprops ) {
  return(  
    <Container>
      <Content>
      <img src={logodt} alt="dt Money" />
      <button type="button" onClick= {onOpenNewTransactionModal}> Nova Transação</button>   
      </Content>
    </Container>
  )
}