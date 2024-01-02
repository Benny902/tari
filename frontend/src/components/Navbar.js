import { Link } from 'react-router-dom'
import tari from '../assets/tari.png';

const Navbar = () => {
  const styles = {
    //color:'#80F24B',
    color:'white',
    //fontSize: '80px'
  };
  return (
    
    <header >
      <div className="container">
        <Link to="/">   
        
        <h1 style={styles}><img src={tari} alt="tari" width="200px"/></h1>   
        </Link>
      </div> 
    </header>
  )
}

export default Navbar