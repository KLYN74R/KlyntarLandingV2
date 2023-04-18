import {Header} from './components/Header';
import WhatIs from './components/WhatIs';
import LatestUpdates from './components/LatestUpdates';
import Stats from './components/Stats/Stats.js';
import KnowledgeBase from './components/KnowledgeBase/KnowledgeBase';
import StillInDev from './components/StilInDev';
import Footer from './components/Footer';

import Test from './components/Test';

import './styles/App.css';


export default () => (

  <div className="App">
      <Header/>
      <WhatIs/>
      <LatestUpdates/>
      <Test/>
      <Stats/>
      <KnowledgeBase/>
      <StillInDev/>
      <Footer/>
    </div>

);