
import { useState } from 'react' ;
import { FiSearch } from 'react-icons/fi';
import './styles.css';
import api from './services/api';

function App() {

  const [input, setInput] = useState('')
  const [cep, setCep] = useState({});


  async function handleSearch(){
    // 01310930/json/
    if(input === ''){
      alert('Preencha algum cep')
      return;
    }

    try{

      const response = await api.get(`${input}/json`)
      setCep(response.data)
      setInput(" ");

    }catch{
      alert("Ops erro de busca");
      setImput("")

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
          <h2>CEP: {cep.cep}</h2>

          <span> {cep.logradouro }</span>
          <span>Complemento: {cep.complemento}</span>
          <span>{cep.bairro}</span>
          <span>{cep.localidade} - {cep .if</span>

        </main>

     </div>
  );
}

export default App;