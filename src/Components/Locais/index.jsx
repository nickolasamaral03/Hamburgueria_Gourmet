import { Link } from "react-router-dom"
import styled from "styled-components"

const Locais = () => {

    const Tudo = styled.div`
    max-width: 600px;
    margin: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 2px 0 4px #FFB800;
    padding: 10px 30px;

    @media(max-width: 768px){
        max-width: 320px;
        h2{
            font-size: 1.2rem;
        }
    }
`

   const Hamburgueria = styled.p`
    color: white;
    font-size: 1.1rem;
    margin: 15px 0 15px 0;
    background-color: #562323;
    max-width: 600px;
    padding: 7px;
    border-radius: 5%;
    &:hover{
            color: #9d940b;
            transition: 500ms;
            }

    @media(max-width: 768px){
        font-size: 1rem;
    }
    `

    return(
        <Tudo>
        <h2 style={{color: 'white'}}>Conheça Nossas Principais Unidades:</h2>
            <Link to="/Orla" style={{ textDecoration: 'none' }}><Hamburgueria>Hamburgueria Gourmet: Orla do Guaíba</Hamburgueria></Link>
            <Link to="/CidadeBaixa" style={{ textDecoration: 'none' }}><Hamburgueria>Hamburgueria Gourmet: Cidade Baixa</Hamburgueria></Link>
            <Link to="/Floripa" style={{ textDecoration: 'none' }}><Hamburgueria>Hamburgueria Gourmet: Florianópolis</Hamburgueria></Link>
            <Link to="/Balneario" style={{ textDecoration: 'none' }}><Hamburgueria>Hamburgueria Gourmet: Balneário Camboriú</Hamburgueria></Link>
        </Tudo>
    )
}

export default Locais