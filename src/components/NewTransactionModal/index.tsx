import {Container, NewTransactionModalType, RadioBox} from './style';
import  Modal  from 'react-modal';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import {useState, FormEvent} from 'react';
import { useTransactions } from '../../hooks/useTransactions';



interface NewTransactionModalProps{
  isOpen:boolean;
  onRequestClose:() =>void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps){
  const {createTransaction} = useTransactions();

  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');    
  const [type, setType] = useState('deposit');


  async function handleCreateNewTransaction(event: FormEvent){    
    event.preventDefault();

    await createTransaction({
      title,
      value,
      category,
      type,      
    })   
      setTitle('');
      setValue(0);
      setCategory('');
      setType('deposit');
      onRequestClose();
  }

  
 
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

     <Container onSubmit = {handleCreateNewTransaction} >
  
        <p>Cadastro de transação</p>     
        <input placeholder="Título" value={title} onChange={event=> setTitle(event.target.value)} />
        <input placeholder="Valor" type="number" value={value} onChange={event=> setValue(Number(event.target.value))} />

     

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


        <input placeholder="Categoria" value={category} onChange={event=> setCategory(event.target.value)}/>
        

        <button type="submit">
          Cadastrar
          </button>

      </Container>
    

    </Modal>
  
  
  );
  }
