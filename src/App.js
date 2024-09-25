import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './Components/Main';
import Header from './Components/Header';
import styled from 'styled-components';
import EstilosGlobais from './Components/EstilosGlobais';
import Menu from './Components/Menu';
import Carrinho from './Components/Carrinho';
import Locais from './Components/Locais';
import RedesSociais from './Components/RedesSociais';
import PixArea from './Components/Pix';
import { useEffect, useState } from 'react';
import Orla from './Components/Locais/Orla';
import CidadeBaixa from './Components/Locais/CidadeBaixa';
import Balneario from './Components/Locais/Balneário';
import Floripa from './Components/Locais/Floripa';

const Fundo = styled.div`
background: #3D2819;
width: 100%;
min-height: 100vh;
`

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const itemSave = localStorage.getItem('cartItems')
    return itemSave ? JSON.parse(itemSave) : []
  })

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems))
  }, [cartItems])

    const AddCart = (items) => {
        const itemExist = cartItems.some(cartItems => cartItems.name === items.name)

        itemExist ? setCartItems(cartItems) : setCartItems([...cartItems, items])
    }

    // O método some() testa se ao menos um dos elementos no array passa no teste implementado pela função atribuída e retorna um valor true ou false.

    const DeleteItem = (id) => {
      setCartItems(cartItems.filter(cartItems => cartItems.id !== id ))
      console.log('Deletar action')
    }

  return (
<Fundo>
  <EstilosGlobais/>
    <BrowserRouter>
      <Header/>
        <Routes>
          <Route path="/" element={<Main/>}/>
          <Route path="/menu" element={<Menu AddCart={AddCart} cartItems={cartItems}/>} />
          <Route path="/carrinho" element={<Carrinho cartItems={cartItems} DeleteItem={DeleteItem}/>}/>
          <Route path="/locais" element={<Locais/>}/>
          <Route path="/redes" element={<RedesSociais/>}/>
          <Route path="/pixArea" element={<PixArea/>}/>
          <Route path='/Orla' element={<Orla/>}/>
          <Route path='/CidadeBaixa' element={<CidadeBaixa/>}/>
          <Route path='/Balneario' element={<Balneario/>}/>
          <Route path='/Floripa' element={<Floripa/>}/>
        </Routes>
    </BrowserRouter>
</Fundo>
  );
}

export default App;
