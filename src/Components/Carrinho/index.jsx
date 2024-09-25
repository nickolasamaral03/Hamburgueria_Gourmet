import styled from "styled-components"
import trash from '../../Icones/trash-can.png'
import { useState } from "react"
import { Link } from "react-router-dom"

const Item = styled.div`
    display: flex;
    margin: auto;
    justify-content: space-around;
    text-align: center;
    background-color: #88511e71;
    max-width: 600px;
    padding: 20px;
    margin-bottom: 15px ;
    border-radius: 10px;

    @media(max-width: 768px){
        margin: 0 10px 20px 10px;
    }
`

const TotalValue = styled.div`
    display: flex;
    margin: auto;
    text-align: center;
    background-color: #00000065;
    max-width: 600px;
    padding: 20px;
    margin-bottom: 15px ;
    border-radius: 10px;
    margin-bottom: 50px;

    p{
        text-align: center;
        justify-content: center;
        margin: auto;
        font-size: 1.2rem;
        color: white;
    }

    @media(max-width: 768px){
        margin: 0 10px 15px 10px;
        p{
            font-size: 1rem;
        }
    }
`

const ImageCarrinho = styled.img`
    height: 100px;
    width: 100px;
    border-radius: 10px;
`

const Price = styled.p`
    margin-top: 40px;
    color: white;
    font-size: 1.1rem;

    @media(max-width: 768px){
        font-size: 1rem;
    }
`
const DeleteButton = styled.button`
   background-color: #e64949d7;
   border: none;
   height: 29px;
   width: 30px;
   color: #c8b7b7;
   margin-top: 35px;
   border-radius: 3px;
   cursor: pointer;

   img{
       height: 15px;
       width: 15px;
       margin-top: 3px;
}

   &:hover{
    background-color: #592222;
    transition: 1s;
   }
`

const ButtonMath = styled.button`
   background-color: #d7b5b5d7;
   border: none;
   height: 25px;
   width: 35px;
   color: #ffffff;
   margin-top: 38px;
   border-radius: 10px;
   cursor: pointer;

   &:hover{
    background-color: #c2c256;
    transition: 500ms;
   }
`
const FormaDePagamento = styled.div`
    padding: 20px;
    margin: 0 10px 0 10px;
    margin: auto;
    text-align: center;
    max-width: 600px;
    justify-content: center;
    background-color: #82824c;
    border-radius: 10px;
    color: white;
    font-size: 1.05rem;
    margin-bottom: 50px;

    @media(max-width: 768px){
        margin: 60px 10px 25px 10px;
    }
`
const Pagamento = styled.button`
max-width: 90px ;
max-height: 90px;
margin-left: 10px;
background-color: #d7d7cc;
border: none;
border-radius: 10%;
cursor: pointer;

&:hover{
        background-color: #c5be5c;
        transition: 500ms;
        color: white;
    }
`
const Carrinho = ({cartItems, DeleteItem, Pix}) => {

const [itemQuantity, setItemQuantity] = useState(cartItems.map(() => 1)) //Gera o número 1 para cada cartItems, através de um novo array [1]

const IncreaseQuantity = (index) => { 
    setItemQuantity(prevQuantity => prevQuantity.map((quantity, itemIndex) => 
    itemIndex === index ? quantity + 1 : quantity
    ))
}

const DecreaseQuantity = (index) => {
    setItemQuantity(prevQuantity => prevQuantity.map((quantity, itemIndex) => 
    itemIndex === index && quantity > 1 ? quantity - 1 : quantity
        ))
}

const TotalPrice = () => {
    return cartItems.reduce((total, item, index) => {
        const price = parseFloat(item.price) || 0;
        return total + (price * itemQuantity[index])
    }, 0)
}



// O método reduce() executa uma função reducer (fornecida por você) para cada elemento do array, resultando num único valor de retorno.
// Acumulador (acc)
// Valor Atual (cur)
// Index Atual (idx)
// Array original (src)

    return(
        <div style={{overflow:'hidden'}}>
            {cartItems && cartItems.length > 0 ?
                cartItems.map((item, index) => (
                    <Item key={index}>
                        <ImageCarrinho src={item.image} alt={item.name} />
                        <Price>R${item.price},00</Price>
                        <ButtonMath onClick={() => DecreaseQuantity(index)}>-</ButtonMath>
                        <Price>{itemQuantity[index]}</Price>
                        <ButtonMath onClick={() => IncreaseQuantity(index)}>+</ButtonMath>
                        <DeleteButton><img src={trash} alt="" onClick={() => DeleteItem(item.id)}/></DeleteButton>
                    </Item>
                )) : <p style={{textAlign:'center', fontSize:'24px', color: 'white'}}>Carrinho Vazio</p>}
                <TotalValue><p>Valor Total: R${TotalPrice().toFixed(2)}</p></TotalValue>
                <FormaDePagamento>
                    Aceitamos somente:
                        <Link to="/pixArea"><Pagamento>Pix</Pagamento></Link>
                </FormaDePagamento>
        </div>

        // Adicionar a parte lógica com a mudança dos valores dinamicamente
    )
}

export default Carrinho