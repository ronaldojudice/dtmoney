import {createGlobalStyle} from 'styled-components';

export const GlobalStyled =  createGlobalStyle`

:root{
    --background : #F0F2F5;;
    --red:#e52e4d;
    --blue:#5429cc;
    --green:#33cc95;
    --blue-light:#6933ff;

    --text-title:#363f5f;
    --text-body:#969cb3;

    --shape:#FFFFFF;


}

body, input, textarea, button{
    font-family: 'Poppins', sans-serif; 
    font-weight:400 ;
    background: var(--background);
  

} 
h1,h2,h3,h4,h5,h6{
    font-weight: 600;
}

*{
    margin:0px;
    padding:0px;
    box-sizing: border-box;
}

html{
    @media(max-width:1080px){
        font-size:  93.75%;
     
    }

    @media(max-width:720px){
        font-size:87.5%;
        
    }
}


body{
    -webkit-font-font-smooth:antialiased;
}

button{
    cursor: pointer;
}
[disabled]{
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay  {
    background: rgba(0,0,0,0.5);
    position: fixed;
    top:0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;


    

}   
.react-modal-content{
    width: 100%;
    max-width:576px ;
    background: var(--background);
    padding: 9rem;
    position: relative;
    border-radius: 0.25rem;

}

`