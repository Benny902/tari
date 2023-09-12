import { Link } from 'react-router-dom'
import wa from '../assets/wa.png';
import instagram from '../assets/insta.png';
import fb from '../assets/fb.png';

const Navbar = () => {
  const styles = {
    color:'#80F24B',
    fontSize: '110px'
  };
  const styles2 = {
    color:'black',
  };
  return (
    
    <header >
      <div className="container">
        <Link to="/">   
        <h1 style={styles}>טרי טרי</h1>   
        </Link>
      </div>
      <h2 style={styles2}><a href="https://facebook.com"><img src={fb} width="45px" alt="fb"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="https://instagram.com"><img src={instagram} width="45px" alt="insta"/></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <a href="https://wa.me/972533383079"><img src={wa} width="52px" alt="wa"/></a></h2>
      
    </header>
  )
}

export default Navbar