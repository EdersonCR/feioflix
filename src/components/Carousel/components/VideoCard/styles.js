import styled from 'styled-components';

export const VideoCardContainer = styled.a`
  text-decoration: none;
  overflow: hidden;
  cursor: pointer;
  color: white;
  flex: 0 0 298px;
  width: 298px;
  height: 197px;
  background-image: ${({ url }) => `url(${url})`};
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  position: relative;
  display: flex;
  align-items: flex-end;
  border: 1px solid;

  &:hover,
  &:focus {
    border: 4px solid;
    width: 327.8px;
    height: 216.7px;
    transition: all .7s;
  }

  &:not(:hover) {
    border: 1px solid;
    width: 298px;
    height: 197px;
    transition: all .5s .25s;
  }
  
  &:not(:first-child) {
    margin-left: 20px;
  }

  @media (max-width: 360px) {
    &:hover {
      width: 298px;
      height: 197px;
    }
  }
`;

export default VideoCardContainer;

VideoCardContainer.Title = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  background-color: rgba(12,12,12, 0.8);

  ${VideoCardContainer}:hover &{
    opacity: 1;
    transition: all .7s .35s;
  }

  ${VideoCardContainer}:not(:hover) &{
    opacity: 0;
    transition: all .5s;
  }
`;

VideoCardContainer.Title.Text = styled.p`
  color: var(--white);
  font-size: 16px;
  position: absolute;
  bottom: 0;
  margin: 0;
  padding: 16px;
`;
