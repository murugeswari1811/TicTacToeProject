import Tile from "./tile"
import Strike from "./strike"
import './board.css'

export default function Board({tiles,handleClickTile,playerTurn,strikeClass}){

    return(
        <>
        <div  id    = "container1">
        <h1   class = "ml-32 text-4xl font-bold text-yellow-300">TIC TAC TOE</h1>
        <div  class = "board">
        <Tile 
        value = {tiles[0]} 
        onClick = { ()=>handleClickTile(0)} 
        className = "right-border bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[1]} 
        onClick = { ()=>handleClickTile(1)} 
        className = "right-border bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[2]} 
        onClick = { ()=>handleClickTile(2)} 
        className = "bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[3]} 
        onClick = { ()=>handleClickTile(3)} 
        className = "right-border bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[4]} 
        onClick = { ()=>handleClickTile(4)} 
        className = "right-border bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[5]} 
        onClick = { ()=>handleClickTile(5)} 
        className = "bottom-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[6]} 
        onClick = { ()=>handleClickTile(6)} 
        className = "right-border"
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[7]} 
        onClick = { ()=>handleClickTile(7)} 
        className = "right-border "
        playerTurn={playerTurn}
        />
        <Tile 
        value = {tiles[8]} 
        onClick = { ()=>handleClickTile(8)}
        playerTurn={playerTurn}
        />
            </div>
            <Strike strikeClass={strikeClass}/>
            </div>
        </>
    )
}