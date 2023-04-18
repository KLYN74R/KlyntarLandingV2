import telegram from '../assets/socials/telegram.png';
import twitter from '../assets/socials/twitter.png';
import github from '../assets/socials/github.png';
import medium from '../assets/socials/medium.png';

import reddit from '../assets/socials/reddit.png';
import facebook from '../assets/socials/facebook.png';
import discord from '../assets/socials/discord.png';
import tor from '../assets/socials/tor.png';

import React from 'react';



const icons = {
    telegram,
    github,
    twitter,
    medium,
    reddit,
    facebook,
    discord,
    tor
}

const socialsRefs = {

    github: 'https://github.com/KLYN74R',
    medium: 'https://klyntar.medium.com/',
    telegram: 'https://t.me/KLYN74R',
    twitter: 'https://twitter.com/KLYN74R',
    reddit:'https://www.reddit.com/r/KLYN74R',
    facebook:'https://www.facebook.com/KLYN74R',
    discord:'https://discord.gg/f7e7fCp97r',
    tor:'http://klyntar66kjwhyirucco6sjgyp2f7lfznelzgpjcp6oha2olzb4rlead.onion/'

}


const SocialsWidgets = () => {

    return (
        
        <div>
        
            <h2 id={"our_social_media"}>our social media</h2>

            {<ul id={'social-container'}>
              
              {Object.keys(socialsRefs).map((item,idx) => (
                  <li key={idx}>
                      <a href={socialsRefs[item]} target='_blank' rel='noreferrer'>
                          <img
                              src={icons[item]}
                              alt={item}
                              width={40}
                              height={40}
                          />
                      </a>
                  </li>
              ))}

            </ul>}

            <hr/>

        </div>
  
    );

};

export default SocialsWidgets;