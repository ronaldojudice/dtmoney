import {Container, NewTransactionModalType, RadioBox} from './style';
import  Modal  from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {useState} from 'react';


interface NewTransactionModalProps{
  isOpen:boolean;
  onRequestClose:() =>void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const [type, setType] = useState('deposit');



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
          <RadioBox
          type="button"
          onClick={()=> {setType('deposit');}}
          isActive={type === 'deposit'}
          ActiveColor= "green"
          > 
            <img src={incomeImg} alt="Entradas" />
            <span>Entradas</span>
          </RadioBox>
          <RadioBox 
          type="button"
          onClick={()=> {setType('withdraw');}}
          isActive={type === 'withdraw'}
          ActiveColor= "red"
          > 
            <img src={outcomeImg} alt="Saídas" />
            <span> Saídas</span>
          </RadioBox>
        </NewTransactionModalType>


        <input placeholder="Categoria" />

        <button type="submit">
          Cadastrar
          </button>

      </Container>
    

    </Modal>
  
  
  );
}