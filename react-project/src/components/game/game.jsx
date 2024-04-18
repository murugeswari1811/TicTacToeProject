import Board from "./board"
import { useState,useEffect } from "react"
import DisplayWinner from "./displaywinner";
import { GameState } from "./gamestate";


const player_x="X";
const player_o="O";

export default function Game(){
    const [tiles,setTiles]=useState(Array(9).fill(null))
    const [playerTurn,setPlayerTurn]=useState(player_x)
    const [strikeClass,setStrikeClass]=useState()
    const [gameState,setGameState]=useState(GameState.inprogress)

    const checkingWinner=[
        {
            indexCombo:[0,1,2],
            strikeClass:"strike-row-1"
        },
        {
            indexCombo:[3,4,5],
            strikeClass:"strike-row-2"
        },
        {
            indexCombo:[6,7,8],
            strikeClass:"strike-row-3"
        },
        {
            indexCombo:[0,3,6],
            strikeClass:"strike-column-1"
        },
        {
            indexCombo:[1,4,7],
            strikeClass:"strike-column-2"
        },
        {
            indexCombo:[2,5,8],
            strikeClass:"strike-column-3"
        },
        
        {
            indexCombo:[0,4,8],
            strikeClass:"strike-diagonal-1"
        },
        {
            indexCombo:[2,4,6],
            strikeClass:"strike-diagonal-2"
        }
    ]   
 
    const checkWinner=(tiles,setStrikeClass)=>{
        for( const {indexCombo,strikeClass} of checkingWinner){
            const tile1=tiles[indexCombo[0]]
            const tile2=tiles[indexCombo[1]]
            const tile3=tiles[indexCombo[2]]

            if(tile1!==null && tile1===tile2 &&tile1===tile3){
                setStrikeClass(strikeClass);
                if(tile1===player_x){
                    setGameState(GameState.playerxwins)
                }
                else{
                    setGameState(GameState.playerowins)
                }
                return;
            }
        }
        const allTilesFilled=tiles.every((tile)=>tile!==null);
        if(allTilesFilled){
            setGameState(GameState.draw)
        }
    }



    useEffect(()=>{
        checkWinner(tiles,setStrikeClass)
    },[tiles])

    const handleClickTile=(index)=>{
        if(gameState!==GameState.inprogress){
            return;
        }

        if (tiles[index]!==null){
            return;
        }



        const newTiles=[...tiles];
        newTiles[index]=playerTurn;
        setTiles(newTiles)
        if(playerTurn===player_x){
            setPlayerTurn(player_o)
        }
        else{
            setPlayerTurn(player_x)
        }
    }
    return(
        <>
            <Board playerTurn={playerTurn} tiles={tiles} handleClickTile={handleClickTile} strikeClass={strikeClass}    />
            <DisplayWinner gameState={gameState}/>
            

        </>
    )
}