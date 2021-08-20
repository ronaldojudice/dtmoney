import {Container} from './style';
import  Modal  from 'react-modal';

interface NewTransactionModalProps{
  isOpen:boolean;
  onRequestClose:() =>void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  return(
  
    <Modal 
    isOpen= {isOpen} 
    onRequestClose ={onRequestClose}
    overlayClassName="react-modal-overlay"      
    className = "react-modal-content"
    >
     <Container>
  
        <p>Cadastro de transação</p>     
        <input placeholder="Título"/>
        <input placeholder="Valor" />
        <input placeholder="Categoria" />

        <button type="submit">Cadastrar</button>

      </Container>
    

    </Modal>
  
  
  );
}