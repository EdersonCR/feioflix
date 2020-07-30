import React from 'react';
import logo from '../../assets/img/logo.png';
import logoImersao from '../../assets/img/logo-imersao.svg';
import { FooterBase, TextLinkImage, Image } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img className="Logo" src={logo} alt="Logo da Feioflix" />
      </a>
      <TextLinkImage>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          <Image src={logoImersao} alt="Logo da Imersão React Alura" />
        </a>
      </TextLinkImage>
    </FooterBase>
  );
}

export default Footer;
