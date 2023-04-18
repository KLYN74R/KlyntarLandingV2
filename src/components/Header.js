//Components
import SocialsWidgets from './SocialsWidgets'
import Marquee from "react-fast-marquee"

//Styles
import '../styles/for_arrows.scss'
import '../styles/cyber.scss'

import {Component} from 'react'




export class Header extends Component {

    render() {

        return (

            <header>

            <div id="nav_container">



                <Marquee speed={150} gradient={false}>

                    <h2>the site is under construction</h2>

                </Marquee>



            </div>

                <div>
                
                    <div id="app">

    	                <div id="wrapper">

	    	                <h1 className={"glitch"} data-text="KlyntAR">KlyntAR</h1>
	            
                            <div className="sub">
                                The future starts her<span style={{letterSpacing:0}}>e</span>
                            </div>

                            <div className="arrow">
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                                <div className="chevron"></div>
                            </div>
               
                        </div>

                    </div>

                </div>

                <SocialsWidgets/>
            
            </header>

        )

    }
    
}