import KLY_LOGO from '../assets/KLY_LOGO_BLACK.png'



const Footer = () => {

    return (
        
        <footer>

            <div id="lists">

            <ul>
                <p>MediA</p>
                <li><a target="_blank" rel="noopener noreferrer" href="https://klyntar.medium.com">blog</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://mastering.klyntar.org">MAstering KlyntAR</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="#">Mentions</a></li>
            </ul>
            <ul>
                <p>ecosystem</p>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">RWX contrActs</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">projects</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">services</a></li>
            </ul>
            <ul>
                <p>Misc</p>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">GrAnts</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">bughunting</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">Report</a></li>
            </ul>

            </div>

            <div id="final_footer">

                <img id="kly_logo_in_footer" src={KLY_LOGO}/>
                <p>KlyntaR, inc</p>
                <p>All Rights Reserved</p>
                <p>{new Date().getFullYear()}</p>
           
            </div>
             
        </footer>

    )


}


export default Footer;