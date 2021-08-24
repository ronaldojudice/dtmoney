import styled from "styled-components";
import {darken, transparentize} from 'polished'


export const Container = styled.form`

h2{
  
 color: var(--color-text-title);
 font-size: 1.5rem;
 margin-bottom: 2rem;
}

input{
  width: 100%;
  padding: 0 1.5rem ;
  height: 4rem;
  border: 1px solid #d7d7d7;
  border-radius: 0.25rem;
  background: #e7e9ee;
  font-weight: 400;
  font-size:1rem;

 &::placeholder{
    color: var(--text-body);
 }


  & + input{
    margin-top: 1rem;
  }
}

button[type="submit"]{
    width:100%;
    padding: 1.5rem;
    height: 4rem;
    margin-top:1.5rem;
    background: var(--green);
    border-radius: 0.25rem;
    border:0;
    font-weight: 600;
  transition: 0.2s;
    &:hover{
      filter: brightness(0.9);
    }
  }
`;

export const NewTransactionModalType = styled.div`
margin: 1rem 0;
display: grid;
grid-template-columns: 1fr 1fr ;
gap:0.3rem;
  img{
    width: 20px;
    height: 20px;

  }

  span{
      display: inline-block;
      margin-left: 1rem;
      font-size: 1rem;
      color:var(--text-title);
  }

`;

interface propsRadioBox{
  isActive: boolean;
  ActiveColor:'red'| 'green';
}

const colors = {
  red:'e52e4d',
  green:'33cc95'
}

export const RadioBox = styled.button<propsRadioBox>`

    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius:0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;

    background: ${(props)=>props.isActive 
    ? transparentize(0.9, colors[props.ActiveColor])
    : 'transparent'};

    &:hover{
      border-color: ${darken(0.3, '#d7d7d7')};
    }
  

`;