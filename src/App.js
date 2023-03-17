import './App.css';
import axios from 'axios'
import {useState} from 'react'


function App() {
    const [quote, setQuote] = useState('null');

    const getQuote = () => {
        axios.get('https://api.adviceslip.com/advice')
        .then(res => {
          console.log(res.data.slip)
          setQuote(res.data.slip)
        })
        .catch(error => {
          console.log(error)
        })
    }

  return (
    // <div class="main">
    //     <h1> 
    //         {<div class="advice-Num">
    //             Inspire to Maguire for Today Nō <span id="advice-Num"></span>
    //         </div>}
    //     </h1>

    //     <div class="main-advice">
    //         "<span id="main-advice"></span>"
    //     </div>
    
    //     <br>
    //     <img src="images/pattern-divider-desktop.svg" alt="line breaker" width="300px">
    
    //     <div id="die" class="dice">
    //         <button>
    //             <img src="images/icon-dice.svg" alt="a rolling dice" width="18px">
    //         </button>
    //     </div>
    // </div>
  
    <div className="App main" Container maxWidth="sm">
      <div>
        <h1>
          Inspire To Maguire of The Day Nō {quote && <span>{quote.id}</span>}
        </h1>
      </div>
      <div className='main-advice'>
          {quote  &&  <span id="main-advice">{quote.advice}</span>}
      </div>

      <div id="die" className='dice'>
          <button onClick={getQuote}>RUN</button>
      </div>
     
    </div>
  );
}

export default App;
