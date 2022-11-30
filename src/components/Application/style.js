import styled, {keyframes} from "styled-components"

export const ContentCard  = styled.div `

    display: grid;
    grid-template-columns:  1fr 1fr 1fr 1fr;
    gap: 20px;

    margin-top: 20px;
    margin-bottom: 50px;

    @media (max-width: 992px){
        grid-template-columns:  1fr 1fr;
    }

    @media (max-width: 600px){
        grid-template-columns:  1fr;
    }        
`

const fade = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

export const Loader  = styled.div `
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
    background-color: rgba(0,0,0,0.5);
    backdrop-filter: blur(3px);

    display: flex;
    align-items: center;
    justify-content: center;

    img{
        animation: ${fade} 1s infinite;
    }
`

export const ButtonLoadMore = styled.button `
background-color: var(--greenLight);
color: white;
border: none;
display: block;
margin: 0 auto 70px auto;
cursor: pointer;
width: 200px;
border-radius: 5px;
padding: 10px 0;

&:hover{
  background-color: var(--greenPrimary);
}
&:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}

`