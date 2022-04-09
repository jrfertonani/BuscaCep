
import { useState } from 'react' ;
import { FiSearch } from 'react-icons/fi';
import './styles.css';


function App() {

  const [input, setInput] = useState('')

  function handleSearch(){
    alert('valor do input' + input)
  }

  return (
    <div className="container">
       <h1 className="title">Busca Cep</h1>

       <div className="containerInput">
          <input type="text" placeholder="Digite seu cep..." 
          value={ input }
          onChange={(e) =>setInput(e.target.value)}
          />
          

           <buttom className="buttonSearch" onClick={handleSearch}>
            <FiSearch size={25} color='#a1a'/> 
            </buttom>
        </div>

        <main className="main">
          <h2>CEP: 87023702</h2>

          <span>Rua pioneiro Jose</span>
          <span>Complemento: A melhor e mais feliz Casa</span>
          <span>js. Vtiria</span>
          <span>Maringa</span>

        </main>

     </div>
  );
}

export default App;
