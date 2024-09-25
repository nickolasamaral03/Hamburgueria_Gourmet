import styled from 'styled-components';
import Qrcode from '../../imagens/qCode.jpg'
import hamburguer from '../../imagens/hamburguer-de-queijo.png'
// import fundo from '../../imagens/new_yotk_double.jpg'

const TodaArea = styled.div`
margin: auto;
text-align: center;
justify-content: center;
background-color: #9d932067;
width: 500px;
padding: 20px 15px;
border-radius: 3%;
box-shadow: 1px 0 3px #dabf7a;

@media(max-width: 768px){
    width: 300px;
  h3{
    font-size: 0.9rem;
  }
}

h3{
    color: #ddddddcc
}
`
const BurgerG = styled.h3`
    font-size: 0.9rem;
    color: #dddddd;
    margin-right: 350px;

    img{
        width: 20px;
        height: 20px;
        margin-left: 4px;
        margin-bottom: -4px;
    }
`

const ImageQrCode = styled.img`
width: 200px;
height: 200px;
box-shadow: 2px 0 5px #dabf7a;
border-radius: 10%;

@media(max-width: 768px){
    width: 150px;
    height: 150px; 
}
`

const Pix = () => {
    return (
        <>
        <TodaArea>
        <BurgerG>Burguer Gourmet<img src={hamburguer} alt="" /></BurgerG>
        <h3>Escanei o QrCode e aproveite o melhor hambúrguer do Sul:</h3>
        <ImageQrCode src={Qrcode} alt="" />
        </TodaArea>
        </>
    )
}

export default Pix;