import styles from '../../styles/for_button.css';


const KnowledgeBaseButton = () => {

    return (

            <a href="https://mastering.klyntar.org" target="_blank" rel="noopener noreferrer">

                <button className="cybrBtn">


                Explore
            
                <span aria-hidden className="cybrBtn__glitch">Now!</span>
                <span aria-hidden className="cybrBtn__tag">KLY</span>

                </button>

            </a>

    );


}


export default KnowledgeBaseButton;