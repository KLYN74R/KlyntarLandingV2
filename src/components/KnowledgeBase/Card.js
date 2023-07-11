import '../../styles/knowledge_base_cards.scss'


const Card = props => {

    return (
        
        <div className="card_instance_kb">
            <a className="card1_kb" href={props.url}>
                <h3 className="stats_card_name">{props.cardName}</h3>
            </a>
        </div>

    )


}


export default Card;