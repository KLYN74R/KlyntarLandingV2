import Card from './Card'


const Stats = () => {

    return (
        
        <div id="stats-container">

            <hr/>

            <p>ecosystem stats</p>

            <div className="container">

                <Card cardName="General Kly tps" cardValue="1b+"/>
                <Card cardName="total staked" cardValue="12t $"/>
                <Card cardName="median time to finality" cardValue="0.37s"/>
                <Card cardName="symbiotes" cardValue="1337"/>
                <Card cardName="rwX live" cardValue="5 011 337 733"/>
                <Card cardName="total txs" cardValue="5 011 337 733"/>
                <Card cardName="hostchains" cardValue="280"/>
                <Card cardName="accounts" cardValue="5 011 337 733"/>
                

            </div>
            
        </div>

    )

}


export default Stats;