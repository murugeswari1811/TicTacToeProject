import './home.css'
import Player from '../../player'
import { useNavigate } from 'react-router-dom'
export default function Home(){
  const navigate=useNavigate();
    return(
        <>
          <div id="container">
          <Player name="gayu" symbol="x"/>
          <Player name="karthika" symbol="o"/>
            <h2 class="mt-4 text-4xl font-bold text-center text-yellow-300 ">Welcome to Tic Tac Toe !!!</h2>
            <img src="https://media.licdn.com/dms/image/C5612AQHm4tg5c35tLg/article-cover_image-shrink_600_2000/0/1584175590822?e=2147483647&v=beta&t=qm5hr2_27kVDNVn_sE3GbMazFcsr0i-6HeQrF807dEw"/>
            <div class="text-center">
            <button class=" bg-yellow-400 hover:bg-black text-white font-bold py-3 px-9 rounded" type="button" onClick={()=>navigate('/tttgame')}>Play</button>
            </div>
          </div>
        </>
    )
}