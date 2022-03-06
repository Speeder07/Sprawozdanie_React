import { GameList } from "./GameList";
import { useState } from "react";

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


export function Center(params) {

    const [year, setYear] = useState(0);
    const [month, setMonth] = useState(12);
    

    let years = new Array();

    function SetMonth(params) {
        setMonth(params);
    }

    function SetYear(params) {
        setYear(params);
    }

    let gamelists = new Array();

    params.games.forEach(element => {
            let bool = false;
            gamelists.forEach(list => {
                if (element.date.getDate() == list.date.getDate() && element.date.getMonth() == list.date.getMonth() && element.date.getFullYear() == list.date.getFullYear()) {
                    if (params.text!="") {
                        if (element.name.includes(params.text)) {
                            list.list.push(element);
                        }
                    }
                    else{
                        list.list.push(element);
                    }
                    bool = true;
                }
                
            });
            if (!bool) {
                if (params.text!="") {
                    if (element.name.includes(params.text)) {
                        gamelists.push(new GameList(element.date, new Array(element)));
                    }
                }
                else{
                    gamelists.push(new GameList(element.date, new Array(element)));
                }
                if (!years.includes(element.date.getFullYear())) {
                    years.push(element.date.getFullYear());
                }
            }
    });

    return(
        <div id="center">
            <Filter SetMonth={SetMonth} SetYear={SetYear} years={years} year={year} month={month}/>
            {gamelists.map((item, index)=>{
                if (year!=0) {
                    if (month==12 && item.date.getFullYear()==year) {
                        return <GameList_Displayer item={item}/>
                    }
                    else if(month==item.date.getMonth()&&item.date.getFullYear()==year){
                        return <GameList_Displayer item={item}/>
                    }
                }
                else{
                    if (month==12) {
                        return <GameList_Displayer item={item}/>
                    }
                    else if(month==item.date.getMonth()){
                        return <GameList_Displayer item={item}/>
                    }
                }
            })}
        </div>
    )
}

function Filter(params) {
    
    return(
        <div>
            <div className="year_filter">
                <button className={params.year==0?"chosen":""} onClick={()=>{params.SetYear(0)}}>X</button>
                {params.years.map((item, index)=>{
                    return(<button className={params.year==item?"chosen":""} onClick={()=>{params.SetYear(item)}}>{item}</button>)
                })}
            </div>
            <div className="month_filter">
            <button className={params.month==12?"chosen":""} onClick={()=>{params.SetMonth(12)}}>X</button>
                {months.map((item, index)=>{
                    return(<button className={params.month==index?"chosen":""} onClick={()=>{params.SetMonth(index)}}>{item}</button>)
                })}
            </div>
        </div>
        
    )
}

function GameList_Displayer(params) {
    
    return(
        <div className="box">
            <div className="date">
                {""+params.item.date.getFullYear()+" "+months[params.item.date.getMonth()]+" "+params.item.date.getDate()}
            </div>
            <div className="list">
            {params.item.list.map((item, index)=>{
            return <GameImage item={item}/>
            })}
            </div>
        </div>
        
    )
}

function GameImage(params) {
    let img;

    try {
        img = require("./Images/"+params.item.img_src);
    } catch (error) {
        
    }

    return(
        <div className="game_image">
            <img src={img} className="image"></img><br/>
            <NewlineText text={params.item.name}></NewlineText>
        </div>
    )
}

function NewlineText(props) {
    const text = props.text;
    return text.split('\n').map(str => <span>{str}<br/></span>);
}