import styled from 'styled-components'
import orla from '../../../Img_Restaurantes/orla_hamburgueria.jpg'

const Orla = () => {

    const All = styled.div`
    margin: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 2px 0 4px #3ca9d4d1;
    padding: 10px;
    max-width: 750px;
    height: 400px;
    display: flex;
    flex-wrap: wrap;

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
        /* margin-bottom: 15px; */
    }
    `

    const Title = styled.h2`
    color: #3ca9d4d1;
    text-align: center;
    justify-content: center;

    @media(max-width: 768px){
        font-size: 1.2rem;
    }
    `

    const Ambiente = styled.div`
    box-shadow: 2px 0 4px #3ca9d4d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 250px;
    width: 300px;

    @media(max-width: 768px){
        max-width: 300px;
        max-height: 190px;
        margin-top: 10px;
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Evento = styled.div`
    box-shadow: 2px 0 4px #3ca9d4d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 100px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        max-height: 190px;
        /* margin-top: 10px; */
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Localização = styled.div`
    box-shadow: 2px 0 4px #3ca9d4d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 120px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        height: 100px;
        /* margin-top: 10px; */
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `
    return(
        // Ambiente e experiência: Localização: Avaliações e feedbacks de clientes: Promoções ou eventos:
        <> 
        <Title>Hamburgueria Gourmet: Orla do Guaíba</Title>
        <All>
        <Image src={orla} alt="" />
        <Ambiente>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Ambiente e Experiência:</p> Localizado à beira da famosa orla da cidade, nosso restaurante oferece uma experiência única com vista deslumbrante para a lago. O ambiente combina um estilo moderno e aconchegante, perfeito para apreciar momentos especiais. Seja ao pôr do sol ou sob a luz das estrelas, o cenário cria o clima ideal para desfrutar de uma refeição inesquecível.</p>
        </Ambiente>
        <Evento>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Eventos:</p>Em alguns dias especiais temos: Música Ao Vivo, Noite de Cerveja Artesanal, Festival de Molhos Especiais </p>
        </Evento>
        <Localização>
        <p><p style={{color: 'white', fontSize: "1.1rem"}}>Localização:</p> Localizada próximo ao centro histórico de Porto Alegre e em uma das orlas mais bonitas do mundo! Venha nos conhecer! </p>
        </Localização>
        </All>
        </>
    )
}

export default Orla