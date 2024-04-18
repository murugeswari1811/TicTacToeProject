import './board.css'
import { GameState } from "./gamestate"
export default function DisplayWinner({gameState}){
    switch(gameState){
        case GameState.inprogress:
            return <></>;
        case GameState.playerxwins:
            return(
            <div class="flex justify-center items-center">
            <span class="inline-block bg-blue-500 text-white text-xl font-semibold px-8 py-4 rounded-full">
              X win the match!!!
            </span>
          </div>
            )
        case GameState.playerowins:
            return(
                <div class="flex justify-center items-center">
                <span class="inline-block bg-blue-500 text-white text-xl font-semibold px-8 py-4 rounded-full">
                  O win the match!!!
                </span>
              </div>
                )        
                
        case GameState.draw:
            return(
                <div class="flex justify-center items-center">
                <span class="inline-block bg-blue-500 text-white text-xl font-semibold px-8 py-4 rounded-full">
                  Match Draw!!!
                </span>
              </div>
                )        
                
        default:
            return <></>
    }
}