import KnowledgeBaseButton from "./Button"
import Marquee from "react-fast-marquee"
import Card from './Card'



const Final = () => {

    return (
        
        <div id="kb-container">

            <hr/>

            <h1>Knowledge base🤖</h1>

            <KnowledgeBaseButton/>

            <div className="container">

                 <div id="marquee">

                <Marquee speed={150} direction="right" pauseOnClick={true}>

                    <Card cardName="explore Wasm based Kly-vm" url="https://klyntar.medium.com/klyntar-virtual-machines-part-1-kly-vm-a-wasm-based-mutable-extendable-native-klyntar-vm-94aafe76ae0f"/>
                    <Card cardName="Klyntar intro" url="https://klyntar.medium.com/klyntar-or-how-we-spent-several-years-to-build-the-gigachad-of-crypto-industry-8e38bb055117"/>
                    <Card cardName="explore Kly-evm" url="https://klyntar.medium.com/klyntar-virtual-machines-part-0-kly-evm-shardable-low-level-managed-mutable-and-wasm-improved-5b5c653965d7?source=user_profile---------3----------------------------"/>
                    <Card cardName="multistaking" url="https://klyntar.medium.com/klyntar-basics-part-1-multistaking-for-the-theoretical-maximum-security-decentralization-2102dbec2c7?source=user_profile---------4----------------------------"/>

                </Marquee>


                <Marquee speed={150} direction="left" pauseOnClick={true}>

                    <Card cardName="create rwX contract" url="#"/>
                    <Card cardName="implement improvement proposal" url="#"/>
                    <Card cardName="multilevel sharding" url="https://klyntar.medium.com/klyntar-basics-part-2-symbiotes-and-multi-level-sharding-362877a04798"/>
                    <Card cardName="architecture" url="https://klyntar.medium.com/klyntar-basics-part-0-architecture-%EF%B8%8F-fb948f89d73f"/>
                    <Card cardName="types of accounts" url="https://klyntar.medium.com/cryptoland-part-1-types-of-addresses-on-klyntar-post-quantum-multisig-tbls-ed25519-981277963ced?source=user_profile---------6----------------------------"/>

                </Marquee>

            </div>

            </div>
            
        </div>

    )

}


export default Final;