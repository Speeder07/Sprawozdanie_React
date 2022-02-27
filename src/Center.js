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
    

    return(
        <div id="center">
            {params.games.map((item, index)=>{
            return <Game_List item={item}/>
            })}
        </div>
    )
}

function Game_List(params) {
    
    return(
        <div className="box" id={params.item.date.getFullYear()+" "+params.item.date.getMonth()+" "+params.item.date.getDate()}>
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
    return(
        <div className="game_image">
            <img src={params.item.img_src}></img><br/>
            {params.item.name}
        </div>
    )
}

