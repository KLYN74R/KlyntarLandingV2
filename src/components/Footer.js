import KLY_LOGO from '../assets/KLY_LOGO_BLACK.png'



const Footer = () => {

    return (
        
        <footer>

            <div id="lists">

            <ul>
                <p>media</p>
                <li><a target="_blank" rel="noopener noreferrer" href="https://klyntar.medium.com">blog</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="https://mastering.klyntar.org">mastering Kly</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="#">mentions</a></li>
            </ul>
            <ul>
                <p>ecosystem</p>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">RWX contracts</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">projects</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntarscan.org">services</a></li>
            </ul>
            <ul>
                <p>misc</p>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">Grants</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">bughunting</a></li>
                <li><a target="_blank" rel="noopener noreferrer" href="http://klyntar.org">Report</a></li>
            </ul>

            </div>

            <div id="final_footer">

                <img id="kly_logo_in_footer" src={KLY_LOGO}/>
                <p>Klyntar, inc</p>
                <p>all Rights Reserved</p>
                <p>{new Date().getFullYear()}</p>
           
            </div>
             
        </footer>

    )


}


export default Footer;