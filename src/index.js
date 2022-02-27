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

class Menager extends React.Component
{
  constructor(props)
  {
    super(props);
    //----------ARRAY-START---------------------
    let array = [];
    array.push(new Game_List.GameList(new Date(2022, 11, 11), new Array(new Game.Game("/null", "GRA_001"), new Game.Game("./null", "Monopoly"))));
    array.push(new Game_List.GameList(new Date(2022, 0, 23), new Array(new Game.Game("/null", "Chef"), new Game.Game("./null", "Coś"), new Game.Game("./null", "10 Sec"))));





    //----------ARRAY-END----------------------
    this.state = {
      games: array,
    };

  }

  render()
  {
    return(
      <div id='main'>
        <Header/>
        <div className='mcontainer'>
          <Center.Center games={this.state.games}/>
          <LinkCenter games={this.state.games}/>
        </div>
        
      </div>
      
    )
  }
}


function Header(params) {
  
  return(
    <div id='header'>
      <div className='nav'>
        <a>Nowości</a>
        <a>Rankingi</a>
        <a>Współpraca</a>
        <a>Blog</a>
        </div>
        <h1>
          Aplikacja Mobilna Planszeo
        </h1>
    </div>
  )
}

function LinkCenter(params) {
  return(
      <div className="box_adress">
          {params.games.map((item, index)=>{
            return <a href={"#"+item.date.getFullYear()+" "+item.date.getMonth()+" "+item.date.getDate()}>{""+item.date.getFullYear()+" "+months[item.date.getMonth()]+" "+item.date.getDate()}</a>
          })}
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
