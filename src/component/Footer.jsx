import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faLinkedinIn, faFacebookF, faInstagram, faYoutube, } from '@fortawesome/free-brands-svg-icons';
import bussines from '../images/b.svg'

function Footer() {
  return (
    <footer className='footer'>
      <div className='conteiner'>
        <div className='footer_info'>
          <div className='outher'>
            <ul>
              <li>
                <h4>Другое</h4>
              </li>
              <li><a href="#">Про нас</a></li>
              <li><a href="#">Блог</a></li>
            </ul>
          </div>
          <div className='contact_us'>
            <ul>
              <li>
                <h4>Сотрудничество с нами</h4>
              </li>
              <li><a href="#">Реклама на сайте</a></li>
              <li><a href="#">Партнерская программа</a></li>
              <li><a href="#">Контакты</a></li>
            </ul>
          </div>
          <div className='our_links'>
            <a href="#">
              <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faFacebookF} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#">
              <FontAwesomeIcon icon={faYoutube} />
            </a>
            <a href="#">
              <img src={bussines} />
            </a>
          </div>
          <div className='copyright'>
            <span>Privacy Policy</span>
            <span>© 2021  All rights reserved</span>
            <span>Terms of Use</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
