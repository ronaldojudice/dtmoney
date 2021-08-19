
import styled from 'styled-components';


export const Container = styled.header`
background: var(--blue);
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem ;
  align-items: center;
  display: flex;
  justify-content:space-between;

  button{
    font-size: 1rem;
    height: 3rem;
    color: #fff;
    background: var(--blue-light);
    border: 0;
    border-radius:0.25rem;
    padding: 0 2rem;
    transition: filter 0.2s;
    &:hover{
      filter: brightness(0.9);

    }
  }
`;

