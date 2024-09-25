import styled from 'styled-components'
import floripa from '../../../Img_Restaurantes/hamburgueria_floripa.png'

const Floripa = () => {

    const All = styled.div`
    margin: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 2px 0 4px #707165d1;
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
        margin-bottom: 8px;
    }
    `

    const Title = styled.h2`
    color: #707165;
    text-align: center;
    justify-content: center;

    @media(max-width: 768px){
        font-size: 1.2rem;
    }
    `

    const Ambiente = styled.div`
    box-shadow: 2px 0 4px #707165d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 210px;
    width: 300px;

    @media(max-width: 768px){
        max-width: 300px;
        max-height: 190px;
        margin-top: 10px;
        margin-bottom: 0px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Evento = styled.div`
    box-shadow: 2px 0 4px #707165d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    margin-top: 15px;
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
    box-shadow: 2px 0 4px #707165d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 140px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        height: 120px;
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
        <Title>Hamburgueria Gourmet: Floripa</Title>
        <All>
        <Image src={floripa} alt="" />
        <Ambiente>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Ambiente e Experiência:</p> Localizado na "Ilha da Magia" oferecemos não somente um dos melhores hamburgueres mas um dos melhores ambientes de TODOS. Próximo a praia do Campeche ao sul da ilha. Combo perfeito, não? Hamburguer Gourmet, praia TOP, energia ÚNICA! Venha nos conhecer em Floripa!</p>
        </Ambiente>
        <Evento>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Eventos:</p>Em alguns dias especiais temos: Música Ao Vivo, Noite de Cerveja Artesanal, Festival de Molhos Especiais </p>
        </Evento>
        <Localização>
        <p><p style={{color: 'white', fontSize: "1.1rem"}}>Localização:</p> Vibe litorânea, juntamente com o cardápio de nossos hamburgueres, oferecemos opções amplas de bebidas para que sua experiência em Floripa seja a MELHOR possível!</p>
        </Localização>
        </All>
        </>
    )
}

export default Floripa