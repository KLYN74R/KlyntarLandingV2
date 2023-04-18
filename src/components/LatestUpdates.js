import {Timeline} from 'react-twitter-widgets'
import Marquee from "react-fast-marquee"


const LatestUpdates = () => {

    return (
        
        <div id="latest-updates">

            <p>latest news🔥</p>

            <div id="social_media_updates">

                {/* Twitter */}

                <div id="twitter_feed">

                    <Timeline

                        dataSource={{
                            sourceType: 'profile',
                            screenName: 'KLYN74R'
                        }}

                    options={{
                        
                        height:'400',
                        width:'400'
        
                    }}

                    />

                </div>

                {/* Discord */}
                
                <iframe src="https://discord.com/widget?id=937810185769074718&theme=dark" width="400" height="400" allowtransparency="true" frameborder="0" sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"></iframe>

                {/* Telegram */}

                <iframe id="preview_telegram" src="https://xn--r1a.website/s/klyn74r"></iframe>


                

            </div>


            <div id="marquee">

                <Marquee speed={50}>

                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>

                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>

                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>
                    <p>News1</p>

                </Marquee>

            </div>

        </div>

    )


}


export default LatestUpdates;