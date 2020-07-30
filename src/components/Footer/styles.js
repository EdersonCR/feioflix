import styled from 'styled-components';

export const FooterBase = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;

  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const TextLinkImage = styled.p`
  margin: auto;
  vertical-align: middle;
`;

export const Image = styled.img`
  max-width: 75px;
  vertical-align: middle;

  @media (max-width: 800px) {
    max-width: 50px;
  }
`;
