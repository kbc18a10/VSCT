import React from 'react';
import {Link} from 'react-router-dom'
import homeLogo from "../image/homeLogo.png"
import homeLogo2 from "../image/homeLogo2.png"
import homehaikei from "../image/homehaikei.jpg"
import Homestyle from "../Home.css"

const Home = () => {
    return (
        <html>
        <body background={homehaikei} >
            
            <div className="Home"> 
                <h1><img src={homeLogo} width="600" height="250"/></h1>
                <Link to="/lobby" ><div className="link"><img src={homeLogo2}width="200" height="100"/></div></Link>
            </div>
        </body>
<<<<<<< Updated upstream
=======
        
>>>>>>> Stashed changes
        <link rel="stylesheet" href={Homestyle}></link>
        </html>
    );
}
export default Home
