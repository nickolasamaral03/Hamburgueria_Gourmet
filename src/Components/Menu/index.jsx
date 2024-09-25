import { Link } from "react-router-dom";
import styled from 'styled-components'
import paris from '../../imagens/parisiense.jpg'
import americanoClassico from '../../imagens/americano_classico.jpg'
import nyotkDouble from '../../imagens/new_yotk_double.jpg'
import londonClassic from '../../imagens/London_classic.jpg'
import rioGrande from '../../imagens/rio_grande_supreme.jpg'
import sydney from '../../imagens/sydney_stack.jpg'
import buenosAires from '../../imagens/buenos_aires_grande.jpg'
import bigApple from '../../imagens/big_apple_triple.jpg'
import saoPaulo from '../../imagens/sao_paulo.jpg'
import bavarich from '../../imagens/bavarich.jpg'
import carrinho from '../../imagens/vista-lateral-vazia-do-carrinho-de-compras.png'
import { v4 as uuidv4 } from 'uuid';


const TodosElementos = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin: auto;
    padding-bottom: 10px;
    /* padding-top: 10px; */
    margin-top: -16px;

    @media(max-width: 768px){
        display: grid;
        margin-top: -30px;
        /* flex-direction: row;
        overflow-x: auto;
        scroll-behavior: smooth; */
        /* width: 100%; */
    }
`

const OpcoesMenu = styled.div`
    width: 350px;
    height: 400px;
    flex: 0 0 auto ;
    box-shadow: 2px 0 4px #FFB800;
    margin: 15px;
    border-radius: 5%;
    p{
        font-size: 0.95rem;
        padding: 0px 18px;
        color: #ffffff;
        font-family: 'Courier New', Courier, monospace;
    }
    button{
        height: 25px;
        margin-top: 10px;
        background-color: yellow;
        font-size: 0.75rem;
        border-color: transparent;
        border-radius: 5%;
        cursor: pointer;

        &:hover{
        background-color: #9d940b;
        transition: 500ms;
        }
    }

    @media(max-width: 768px){
        /* width: 250px; */
    }
`

const SeparatingThree = styled.div`
    display: flex;

    @media(max-width: 768px){
        display: grid;
    }

    @media (max-width: 1024px) and (min-width: 768px){
        display: grid;
    }
`

const Image = styled.img`
    height: 190px;
    width: 200px;
    border-radius: 8%;
    margin-left: 75px;
    margin-top: 8px;

    
`

const Title = styled.h3`
    color: ${props => props.color || 'white'};
`

const PriceButton = styled.div`
    display: flex;
    width: 300px;
    justify-content: space-around;
    margin-left: 10px;

    p{
        font-weight: bold;
    }
`


const IconeCarrinho = styled.img`
    background-color: ${props => props.ativo ? '#ffff00ed' : '#ffb700a5'} ;
    border-radius: 50%;
    padding: 15px;
    height: 30px;
    width: 30px;
    position: fixed;
    box-shadow: ${props => props.ativo ? '2px 5px 20px #FFB800' : ''};

    @media(max-width: 768px){
        height: 25px;
        width: 25px;
    }

    @media (max-width: 1024px) and (min-width: 768px){
        height: 40px;
        width: 40px;
    }
    `

const CarrinhoDiv = styled.div`
     display: flex;
     justify-content: flex-end;
     margin-right: 80px;
     margin-bottom: 35px;

     @media(max-width: 768px){
        margin-right: 70px;
     }
`

const Menu = ({AddCart, cartItems}) => {
    const ativo = cartItems.length > 0;
    
    return(
        <>
    <CarrinhoDiv>
        <Link to="/carrinho"><IconeCarrinho src={carrinho} ativo={ativo}/></Link>
    </CarrinhoDiv> 
    <TodosElementos>
    <SeparatingThree>
        <OpcoesMenu>
            <Image src={paris} alt="" />
            <p><Title color="#B1A2EA">Parisiense Perfeito:</Title> Hambúrguer de carne bovina, queijo brie, cogumelos sauté, cebolas, molho de mostarda dijon, e pão brioche.</p>
            <PriceButton>
                <p>$40,00</p>
                <button onClick={() => AddCart({name: 'Parisiense Perfeito', price: '40', image: paris, id: uuidv4()})}>Adicione ao carrinho</button>
            </PriceButton>
            
        </OpcoesMenu>
        <div>
        <OpcoesMenu>
            <Image src={americanoClassico} alt="" />
            <p><Title color="#E1869C">Americano Clássico:</Title> Hambúrguer de carne bovina, queijo cheddar, bacon crocante, alface, tomate, picles, e molho especial, pão de hambúrguer clássico.</p>
            <PriceButton>
            <p>R$60,00</p>
            <button onClick={() => AddCart({name: 'Americano Clássico', price: '60', image: americanoClassico, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        <div>
        <OpcoesMenu>
            <Image src={nyotkDouble} alt="" />
            <p><Title color="#DC9E41">New York Double:</Title> Duas carnes bovinas suculentas, queijo cheddar, cebola roxa, molho especial e pão brioche.</p>
            <PriceButton>
            <p>R$75,00</p>
            <button onClick={() => AddCart({name: 'New York Double', price: '75', image: nyotkDouble, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        </SeparatingThree>
    <SeparatingThree>
        <div>
        <OpcoesMenu>
            <Image src={londonClassic} alt="" />
            <p><Title color="#7AB5FB">London Classic:</Title> Hambúrguer de carne bovina, queijo cheddar, cebola roxa, picles e molho de maionese com mostarda, servido em pão brioche.</p>
            <PriceButton>
            <p>R$35,00</p>
            <button onClick={() => AddCart({name: 'London Classic', price: '35', image: londonClassic, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        <div>
        <OpcoesMenu>
            <Image src={rioGrande} alt="" />
            <p><Title color="#6FC273">Rio Grande Supreme:</Title> Duas carnes bovinas, queijo pepper jack, tomate, jalapeños, e um molho especial, servido em pão brioche.</p>
            <PriceButton>
            <p>R$80,00</p>
            <button onClick={() => AddCart({name: 'Rio Grande Supreme', price: '80', image: rioGrande, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        <div>
        <OpcoesMenu>
            <Image src={sydney} alt="" />
            <p><Title color="#C688F7">Sydney Stack:</Title> Hambúrguer de carne bovina, queijo brie, cogumelos sauté, cebolas, molho de mostarda dijon, e pão brioche.</p>
            <PriceButton>
            <p>R$65,00</p>
            <button onClick={() => AddCart({name: 'Sydney Stack', price: '65', image: sydney, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
    </SeparatingThree>
    <SeparatingThree>
        <div>
        <OpcoesMenu>
            <Image src={buenosAires} alt="" />
            <p><Title color="#8AC0E8">Buenos Aires Grande:</Title> Hambúrguer de carne bovina, queijo provolone, ovo frito, tomate, alface, cebola, molho chimichurri e pão brioche.</p>
            <PriceButton>
            <p>R$60,00</p>
            <button onClick={() => AddCart({name: 'Buenos Aires Grande', price: '60', image: buenosAires, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        <div>
        <OpcoesMenu>
            <Image src={bigApple} alt="" />
            <p><Title color="#F13A3A">Big Apple Triple:</Title> Três hambúrgueres de carne bovina, queijo cheddar, tomate, alface, picles, molho especial, e pão brioche.</p>
            <PriceButton>
            <p>R$90,00</p>
            <button onClick={() => AddCart({name: 'Big Apple Triple', price: '90', image: bigApple, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
        <div>
        <OpcoesMenu>
            <Image src={saoPaulo} alt="" />
            <p><Title color="#EDA926">São Paulo Classic:</Title> Hambúrguer de carne bovina, queijo cheddar, picles, alface, tomate, e pão brioche.</p>
            <PriceButton>
            <p>R$55,00</p>
            <button onClick={() => AddCart({name: 'São Paulo Classic', price: '55', image: saoPaulo, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
    </SeparatingThree>
        <div>
        <OpcoesMenu>
            <Image src={bavarich} alt="" />
            <p><Title color="#BFBFBF">Bavarian Brunch:</Title> Hambúrguer de carne dupla, queijo emmental, cebola , alface, tomate, mostarda doce e pão pretzel.</p>
            <PriceButton>
            <p>R$70,00</p>
            <button onClick={() => AddCart({name: 'Bavarian Brunch', price: '70', image: bavarich, id: uuidv4()})}>Adicionar ao carrinho</button>
            </PriceButton>
        </OpcoesMenu>
        </div>
    </TodosElementos>
 </>
   
    )
}

export default Menu;