import './Header.css'
import { TennisBall } from './icons/TennisBall'


function Header() {
  // const iconBig = { 
  //   with:'333px',
  //   height:'333px',
  // };
  return (
    <div className="header-container">

      <h1 >Super Farmarcia da Marcia</h1>
      <img  className="logoP"src="./images/farmarcia-logo-pq.png" alt="imagem de estadio de lego" />
     
      {/* <TennisBall style={iconBig}/> */}

    </div>
  )
}

export default Header
