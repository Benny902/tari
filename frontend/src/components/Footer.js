import wa from '../assets/wa.png';
import instagram from '../assets/insta.png';
import fb from '../assets/fb.png';
import git from '../assets/git.png';

const Footer = () => {
  const styles2 = {
    color:'black',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };
    return (
      <header>
        <br/> © כל הזכויות שמורות לטרי טרי
          
      <h2 style={styles2}>
      
        <a href="https://facebook.com"><img src={fb} width="45px" alt="fb"/></a>
        <a style={{paddingRight: '50px'}} href="https://instagram.com"><img src={instagram} width="45px" alt="insta"/></a>
        <a style={{paddingRight: '48px'}} href="https://wa.me/972533383079"><img src={wa} width="52px" alt="wa"/></a>
      </h2>
      
      <div className="container2">
           <h4><a href="https://github.com/Benny902/tari"><img src={git} alt="fb" style={{marginTop: -30, width: 50, position:'relative', top:5}}/></a>➜ Created by Benny ♕ </h4>
          
        </div>
          
        
        
      </header>
    )
  }
  
  export default Footer