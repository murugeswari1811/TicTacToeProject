import './board.css'
export default function Strike({strikeClass}){
    return(
    <>
    <div className={`strike ${strikeClass}`}></div>
    </>
    )
}