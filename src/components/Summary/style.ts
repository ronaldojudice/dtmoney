import styled from 'styled-components';

export const Container = styled.div`
max-width: 1120px;
  margin: 0 auto;
  padding: 2rem 1rem 12rem ;
  align-items: center;
  display: grid;
  grid-template-columns: repeat(3,1fr);
  gap:2rem;
  margin-top: -10rem;
  justify-content:space-between;

  div{
    background: var(--shape);
    padding: 2rem;
    border-radius:0.25rem;
    color: var(--text-tittle);    
 

header{
  display: flex;
  align-items: center;
  justify-content: space-between;

}

img{
  size: 8px;

}

p{

left: 9.09%;
right: 70.45%;
top: 18.52%;
bottom: 63.7%;

font-family: Poppins;
font-weight: normal;
font-size: 13px;
line-height: 24px;


}

strong{
    display: block;
    margin-top:1rem;
    font-size: 2rem;
    font-weight: 500;
    line-height: 3rem;
}
&.highlight-background{
  background: var(--green);
  color:#fff;
  }
}
`;