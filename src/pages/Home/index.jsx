import React from 'react';
import dadosIniciais from '../../data/dados_iniciais.json';
import BannerMain from '../../components/BannerMain';
import Carousel from '../../components/Carousel';
import Menu from '../../components/Menu';
import Footer from '../../components/Footer';

function Home() {
  // eslint-disable-next-line no-console
  console.log(typeof dadosIniciais);
  return (
    <div style={{ background: 'var(--black)' }}>
      <Menu />

      <BannerMain
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="Em 2016 o guitarrista David Gilmour se apresentou na lendária cidade de Pompeia, na Itália. O show marcou o retorno do guitarrista ao mesmo local onde, 45 anos antes, o Pink Floyd fez história ao se apresentar e lançar o histórico Live At Pompeii."
      />

      <Carousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
      />

      <Carousel
        category={dadosIniciais.categorias[1]}
      />

      <Carousel
        category={dadosIniciais.categorias[2]}
      />

      <Carousel
        category={dadosIniciais.categorias[3]}
      />

      <Carousel
        category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </div>
  );
}

export default Home;
