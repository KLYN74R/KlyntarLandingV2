import '../../styles/for_stats_cards.scss'


const Card = props => {

    return (
        
        <div className="card_instance">
            <a className="card1" href="http://klyntarscan.org" target="_blank" rel="noopener noreferrer">
                <h3 className="stats_card_name">{props.cardName}</h3>
                <p className="stats_content">{props.cardValue}</p>
            </a>
        </div>

    )


}


export default Card;