import styled from 'styled-components'
import instagram from '../../Icones/instagram.png'
import facebook from '../../Icones/facebook.png'
import tiktok from '../../Icones/tiktok.png'

const Redes = styled.div`
background: #88511e7d;
border-radius: 2%;
margin: auto;
justify-content: center;
max-width: 600px;
padding: 10px;

@media(max-width: 768px){
    width: 350px;
}
`

const CadaRede = styled.div`
    display: flex;
    justify-content: center;
    margin: 50px 0;
    color: white;
    img{
        height: 20px;
        width: 20px;
        margin-right: 5px;
    }
`

const RedesSociais = () => {
    return(
        <Redes>
            <CadaRede>
                <img src={instagram} alt="" />
                Instagram: @BourgetGourmetOfficial
            </CadaRede>
            <CadaRede>
                <img src={tiktok} alt="" />
                TikTok: @BourgetGourmetTheBest
            </CadaRede>
            <CadaRede>
                <img src={facebook} alt="" />
                Facebook: @BourgetGourmetOfficial
            </CadaRede>
        </Redes>
    )
}

export default RedesSociais