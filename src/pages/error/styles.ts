import styled from 'styled-components';

export const Background = styled.main`
   
    width: 100%;
    height: 100vh;
    align-items: center;
    background: linear-gradient(45deg, #DD571C, #FFA500, #fcae1e ,#FB6910);
    background-size: 300% 300%;
    animation: colors 10s ease infinite;

    @keyframes colors {

     0% {
      background-position: 0% 50%;

     }

     50% {
        background-position: 100% 50%
     }

     100% {
        background-position: 0% 50%;
     }

  
    }
   
  
    `


export const ContainerError = styled.div`
    
    width: 100vw;
    height: 100vh;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
 
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
     
     


   .message {
   
    z-index: 5000;
    font-size: 220px;
    color: #FFFFFF;
    
    &:hover {
        filter: opacity(0.9);
        -webkit-text-stroke-width: 3px;
        -webkit-text-stroke-color: #FFFFFF;
        color: transparent; 
    }


}
 .pagenotfound {
    z-index: 5000;
    color: #FFFFFF;
    font-size: 20px;
    .ignorar{ display: block;
  vertical-align: middle;
  text-align: center;}
 }


    `