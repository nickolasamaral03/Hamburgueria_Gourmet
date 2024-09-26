import styled from 'styled-components'
import balneario from '../../../Img_Restaurantes/hamburgueria_balneario.webp'

const Balneario = () => {

    const All = styled.div`
    margin: auto;
    text-align: center;
    justify-content: center;
    box-shadow: 2px 0 4px #78bd72d1;
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
    }
    `

    const Title = styled.h2`
    color: #78bd72d1;
    text-align: center;
    justify-content: center;

    @media(max-width: 768px){
        font-size: 1.2rem;
    }
    `

    const Ambiente = styled.div`
    box-shadow: 2px 0 4px #78bd72d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 220px;
    width: 300px;

    @media(max-width: 768px){
        max-width: 300px;
        max-height: 180px;
        margin-top: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `

    const Evento = styled.div`
    box-shadow: 2px 0 4px #78bd72d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    margin-top: 15px;
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
    box-shadow: 2px 0 4px #78bd72d1;
    background-color: #7e7eab18;
    margin-left: 20px;
    height: 150px;
    width: 300px;

    @media(max-width: 768px){
        width: 303px;
        height: 125px;
        margin-bottom: 10px;
        p{
            font-size: 0.9rem;
        }
    }
    `
    return(
        <> 
        <Title>Hamburgueria Gourmet: Balneário</Title>
        <All>
        <Image src={balneario} alt="" />
        <Ambiente>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Ambiente e Experiência:</p> A unidade da nossa hamburgueria em Balneário Camboriú está localizada em um dos lugares mais icônicos e paradisíacos da região: a Praia das Laranjeiras. Rodeada por uma paisagem deslumbrante de águas cristalinas e vegetação exuberante, é o destino ideal para quem busca um ambiente relaxante à beira-mar.</p>
        </Ambiente>
        <Evento>
            <p><p style={{color: 'white', fontSize: "1.1rem"}}>Eventos:</p>Em alguns dias especiais temos: Música Ao Vivo, Noite de Cerveja Artesanal, Festival de Molhos Especiais </p>
        </Evento>
        <Localização>
        <p><p style={{color: 'white', fontSize: "1.1rem"}}>Localização:</p> Localizada próximo à praia e em um ambiente mais distante da cidade e mais próxima da natureza! Quer relaxar, desfrutar de um bom hambúrguer com a energia de Balneário? Venha! </p>
        </Localização>
        </All>
        </>
    )
}

export default Balneario