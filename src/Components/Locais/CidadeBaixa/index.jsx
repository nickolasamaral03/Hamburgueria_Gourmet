import styled from 'styled-components'
import cidadebaixa from '../../../Img_Restaurantes/Captura de tela 2024-09-17 200157.png'

const CidadeBaixa = () => {

    const All = styled.div`
    margin: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 2px 0 4px #b1c614d1;
    padding: 10px;
    max-width: 750px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;
    
    h1{
        color: #3ca9d4d1;   
        font-size: 1.7rem;
    }

    p{
        margin: 10px 20px 0 20px;
        font-size: 1rem;
        color: #dfcbcb;
    }

    @media(max-width: 768px){
        max-width: 350px;
        height: 700px;
        padding-bottom: 20px;
    }
    
    h1{
        color: #3ca9d4d1;   
        font-size: 1.7rem;
    }

    p{
        margin: 10px 20px 0 20px;
        font-size: 1rem;
        color: #dfcbcb;
    }
    `

    const Image = styled.img`
    max-width: 340px;
    max-height: 250px;
    border-radius: 5%;

    @media(max-width: 768px){
        max-width: 280px;
        max-height: 200px;
        margin-bottom: 7px;
    }
    `

    const Title = styled.h2`
    color: #b1c614d1;
    text-align: center;
    justify-content: center;

    @media(max-width: 768px){
        font-size: 1.2rem;
    }
    `

    const Ambiente = styled.div`
    box-shadow: 2px 0 4px #b1c614d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 250px;
    width: 300px;
    padding-bottom: 10px;

    @media(max-width: 768px){
        max-width: 300px;
        max-height: 215px;
        margin-top: 10px;
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Evento = styled.div`
    box-shadow: 2px 0 4px #b1c614d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 100px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        max-height: 190px;
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Localização = styled.div`
    box-shadow: 2px 0 4px #b1c614d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 120px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        height: 100px;
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `
    return(
        <> 
        <Title>Hamburgueria Gourmet: Cidade Baixa</Title>
        <All>
        <Image src={cidadebaixa} alt="" />
        <Ambiente>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Ambiente e Experiência:</p> Nosso restaurante está situado na área mais vibrante e movimentada da cidade, rodeado pelos melhores bares, casas de festa e restaurantes renomados. Localizado no coração do epicentro de vida noturna, é o ponto perfeito para quem deseja desfrutar de um delicioso hambúrguer gourmet antes de mergulhar nas animadas opções de drinks e festas da região. A energia da área torna cada visita uma experiência pulsante e cheia de estilo.</p>
        </Ambiente>
        <Evento>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Eventos:</p>Em alguns dias especiais temos: Música Ao Vivo, Noite de Cerveja Artesanal, Festival de Molhos Especiais </p>
        </Evento>
        <Localização>
        <p><p style={{color: 'white', fontSize: "1.1rem"}}>Localização:</p> Com toda a energia da cidade baixa de Porto Alegre, venha desfrutar do melhor hamburguer gourmet da região Sul! </p>
        </Localização>
        </All>
        </>
    )
}

export default CidadeBaixa