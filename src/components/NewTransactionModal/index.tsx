import {Container, NewTransactionModalType} from './style';
import  Modal  from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';


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
      <button type="button" className="react-modal-close" onClick={onRequestClose}>
        <img src={closeImg} alt="fechar" />
      </button>

     <Container>
  
        <p>Cadastro de transação</p>     
        <input placeholder="Título"/>
        <input placeholder="Valor" type="number" />


        <NewTransactionModalType>
          <button> 
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </button>
          <button> 
            <img src={outcomeImg} alt="Saídas" />
            <span> Saídas</span>
          </button>
        </NewTransactionModalType>


        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
          </button>

      </Container>
    

    </Modal>
  
  
  );
}