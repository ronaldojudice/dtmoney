import logodt from '../../assets/logo.svg'
import { Container, Content } from './style'

export function Header() {
  return(  
    <Container>
      <Content>
      <img src={logodt} alt="dt Money" />
      <button type="button"> Nova Transação</button>   
      </Content>
    </Container>
  )
}