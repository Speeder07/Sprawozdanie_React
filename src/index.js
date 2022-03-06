import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as Center from './Center';
import * as Game_List from './GameList';
import * as Game from './Game';

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
]

let text_content = "";

class Menager extends React.Component
{
  constructor(props)
  {
    super(props);
    //----------ARRAY-START---------------------
    let array = [];
    array.push(new Game.Game("wenecja.webp", "Wenecja", new Date(2022, 11, 11)), new Game.Game("monopoly.webp", "Monopoly", new Date(2022, 11, 11)));
    array.push(new Game.Game("bits.webp", "Bits", new Date(2022, 5, 21)), new Game.Game("sabotazysta.webp", "Sabotażysta", new Date(2022, 5, 21)), new Game.Game("10sec.jpg", "10 Sec",new Date(2022, 5, 21)));
    array.push(new Game.Game("dziennik1907.webp", 'Dziennik: Wyprawa 1907\n Zakazane kopalnie', new Date(2021, 6, 9)));

    //----------ARRAY-END----------------------
    this.state = {
      games: array,
      text: "",
    };

    this.setText = this.setText.bind(this);
  }

  handleChange(e)
  {
    text_content=e.target.value;
    console.log(text_content);
  }

  setText(value)
  {
    this.setState({text: text_content});
  }



  render()
  {
    return(
      <div id='main'>
        <Header setText={this.setText}></Header>
        <Center.Center games={this.state.games} text={this.state.text} setText={this.setText}/>
      </div>
      
    )
  }
}


function Header(params) {

  function handleChange(e)
  {
    text_content=e.target.value;
    console.log(text_content);
  }
  
  return(
    <div id='header'>
          <div className='nav'>
            <div className='search'>
                <input type='text' onChange={handleChange}></input>
                <button onClick={params.setText}>Szukaj</button>
            </div>
            <div className='links'>
            <a>Nowości</a>
            <a>Rankingi</a>
            <a>Współpraca</a>
            <a>Blog</a>
            </div>
          </div>
            
          <h1>
            Aplikacja Mobilna Planszeo
          </h1>
        </div>
  )
}


ReactDOM.render(
  <div>
    <Menager/>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
