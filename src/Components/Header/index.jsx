import styled from 'styled-components'
import hamburguer from '../../imagens/hamburguer-de-queijo.png'
import { Link } from 'react-router-dom'

const Cabecalho = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 20px 25px 0px 35px;
    background-color: #0000002b;
    margin-bottom: 35px;
`

const Marca = styled.div`
    display: flex;
    text-decoration: underline;
    text-decoration-color: #FAB400;
    margin-top: -10px;
    h1{
        color: #dddddd;
        font-size: 2.3rem;
        font-family: cursive;

        &:hover{
            color: #bdb10a;
            transition: 700ms;
            }
    }

    img{
        height: 40px;
        width: 40px;
        margin-top: 24px;
        margin-left: 5px;
        filter: drop-shadow(1px 0 2px #FAB400); 
    }

    @media(max-width: 768px) {
        h1{
            font-size: 1rem;
            font-family: 'Times New Roman', Times, serif;
        }

        img{
            height: 20px;
            width: 20px;
            margin-left: 2px;
            margin-right: 60px;
            margin-top: 28px;
            
        }

        }

        @media (max-width: 1024px) and (min-width: 768px){
            h1{
                font-size: 1.5rem;
            }

            img{
                margin-right: 160px;
                margin-top: 38px;
                height: 30px;
                width: 30px;
            }
        }
`

const Sociais = styled.div`
    display: flex;
    justify-content: space-around;
    width: 600px;
    margin-top: 3px;
    p{
        font-size: 1.4rem;
        color: white;

        &:hover{
            color: #9d940b;
            transition: 500ms;
            }
    }

    @media(max-width: 768px){
        width: 300px;
        margin-top: 0;
        p{
            font-size: 1rem;
        }
    }

`

const Header = () => {
    return(
        <>
        <Cabecalho>
            <Marca>
                <Link to={"/"} style={{ textDecoration: 'none' }}><h1>Burguer Gourmet</h1></Link>
                <img src={hamburguer} alt="" />
            </Marca>

            <Sociais>
                <Link to={"/menu"} style={{ textDecoration: 'none' }}><p>Menu</p></Link>
                <Link to={"/locais"} style={{ textDecoration: 'none' }}><p>Locais</p></Link>
                <Link to={"/redes"} style={{ textDecoration: 'none' }}> <p>Redes Sociais</p></Link>
            </Sociais>
        </Cabecalho>
        </>
    )
}

export default Header