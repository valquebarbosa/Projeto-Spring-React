import logo from '../../assets/Imagens/logo.svg'
import './style.css'

function Header() {
    return(
        <header>
        <div className="dsmeta-logo-container">
            <img src={logo} alt="Logo da DSMETA"/>
            <h1>DSMeta</h1>
            <p>
                Desenvolvido por 
                <a href="https://www.instagram.com/valquebarbosa/" target="_blank">@valquebarbosa</a>
            </p>
        </div>        
    </header>     
      
    )
}

export default Header
  