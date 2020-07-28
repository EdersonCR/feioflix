/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import SlickSlider from 'react-slick';
import styled from 'styled-components';

const Container = styled.ul`
  padding: 0;
  margin: 0;

  .slick-prev,
  .slick-next {
    z-index: 50;
    top: 0;
    bottom: 0;
    margin: auto;
    width: 30px;
    height: 30px;
    transform: initial;
    

    &:before {
      font-size: 30px;
    }
  }
  
  .slick-prev {
    left: 16px;
  }

  .slick-next {
    right: 16px;
  }
`;

export const SliderItem = styled.li`
  margin-right: 16px;

  img {
    margin: 16px;
    width: 298px;
    height: 197px;
    object-fit: cover;
  }
`;

const Slider = ({ children }) => (
  <Container>
    <SlickSlider {...{
      dots: false,
      infinite: true,         // Altera para Carrossel Infinito   
      speed: 1200,
      centerMode: false,
      variableWidth: true,
      adaptiveHeight: true,
      slidesToScroll: 4,      // Define para mover 4 videos ao mesmo tempo 
      responsive: [           // Define para mover menos videos ao mesmo tempo para telas menores (1303px, 974px e 642px)
        {
          breakpoint: 1303,
          settings: {
            slidesToScroll: 3,
            speed: 900,
          }
        },
        {
          breakpoint: 974,
          settings: {
            slidesToScroll: 2,
            speed: 600,
          }
        },
        {
          breakpoint: 642,
          settings: {
            slidesToScroll: 1,
            speed: 300,
          }
        }
      ],
    }}
    >
      {children}
    </SlickSlider>
  </Container>
);

export default Slider; 