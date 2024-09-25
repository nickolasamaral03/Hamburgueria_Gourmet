import styled from 'styled-components'
import hamburguer from '../../imagens/hamburguer-de-queijo.png'
import newYork from '../../imagens/new_yotk_double.jpg'
import beunosAires from '../../imagens/buenos_aires_grande.jpg'


const ConteudoMain = styled.div`
    display: flex;
    justify-content: space-around;

    img{
        height: 500px;
        width: 300px;
        border-radius: 6%;
        box-shadow: 1px 0 7px #FFB800;
    }

    @media(max-width: 768px){
        display: grid;
        margin: auto;
        text-align: center;
        justify-content: center;
       img{
        height: 300px;
        width: 200px;
        margin: auto;
        text-align: center;
        justify-content: center;
       }
    }

    @media (max-width: 1024px) and (min-width: 768px){
        display: grid;
        margin: auto;
        text-align: center;
        justify-content: center;
       img{
        height: 300px;
        width: 250px;
        margin: auto;
        text-align: center;
        justify-content: center;
       }
    }
    ` 

const Apresentacao = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Playpen+Sans:wght@100..800&display=swap');    
    width: 600px;
    border: 2px;
    padding: 0px 20px;
    border-radius: 2%;
    background-color: #d8982213;
    box-shadow: 2px 0 3px #FFB800;

    p{
        color: #ffffffde;
        font-weight: 600;
        font-size: 1.2rem;
        padding: 5px;
        font-family: "Playpen Sans", cursive;
    }
    img{
        height: 24px;
        width: 24px;
        border-radius: 10%;
    }


    @media(max-width: 768px){
        width: 300px;
        margin-bottom: 20px;
        p{
            font-size: 0.95rem;
            /* font-weight: 500; */
            font-family: 'Times New Roman', Times, serif;
        }
    }

    
`

const ImagemTexto = styled.div`
    display: grid;
    p{
        font-size: 12px;
        color: #d3c5c5;
    }

    @media (max-width: 1024px) and (min-width: 768px){
        margin-top: 30px;
        margin-bottom: 10px;

        img{
            height: 300px;
            width: 300px;
        }
    }

    @media(max-width: 768px){
        margin-bottom: 10px;
        margin-top: 8px;

        p{
            color: #f3ececed;
        }
    }

`

const Main = () => {
    return(
        <ConteudoMain>
        <Apresentacao>
            <p>Bem-vindo ao Burguer Gourmet! </p>

            <p>Desde nossa inauguração em 1994, somos sinônimo de qualidade e tradição. Orgulhamo-nos de ter mais de 4 unidades na região Sul do Brasil, cada uma oferecendo uma experiência gastronômica incomparável.</p>  

            <p>Nosso compromisso é proporcionar não apenas uma refeição, mas uma experiência completa, com atendimento acolhedor e ambiente convidativo.</p>

             <p>Utilizamos ingredientes premium para garantir sabor e frescor em cada prato. Nossos chefs inovam constantemente, criando receitas que surpreendem seu paladar. Descubra por que somos um dos melhores restaurantes do Brasil no ramo de hambúrgueres gourmet.</p>

            <p>Esperamos por você!</p><img src={hamburguer} alt="" />
        </Apresentacao>
        <ImagemTexto>
                <img src={newYork} alt="" />
                <p>“Uma mordida nesse hambúrguer e você vai para o céu e volta.”</p>
            </ImagemTexto>

            <ImagemTexto>
                 <img src={beunosAires} alt="" />
                 <p>“Sem dúvidas o melhor do Sul”</p>
            </ImagemTexto>
        
        </ConteudoMain>
    )
}

export default Main