import React, { useState } from 'react';
import {
  ImFacebook,
  ImTwitter,
  ImInstagram,
  ImPinterest,
  ImYoutube,
} from 'react-icons/im';

const Socials = () => {
  const [glowIndex, setGlowIndex] = useState(null);

  const handleMouseEnter = (index) => {
    setGlowIndex(index);
  };

  const handleMouseLeave = () => {
    setGlowIndex(null);
  };

  const socialIcons = [
    { icon: <ImFacebook />, link: 'http://www.facebook.com' },
    { icon: <ImTwitter />, link: 'http://www.twitter.com' },
    { icon: <ImInstagram />, link: 'http://www.instagram.com' },
  ];

  return (
    <div className='hidden xl:flex ml-14'>
      <ul className='flex gap-x-4'>
        {socialIcons.map((social, index) => (
          <li key={index}>
            <a
              href={social.link}
              target='_blank'
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div
                style={{
                  fontSize: '24px',
                  color: glowIndex === index ? '#007bff' : '#ff6666',
                  transition: 'color 0.2s, text-shadow 0.2s',
                  textShadow:
                    glowIndex === index
                      ? '0 0 8px #007bff'
                      : 'none',
                  marginRight: '50px', // Increased marginRight to move icons 45px to the right
                }}
              >
                {social.icon}
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Socials;
