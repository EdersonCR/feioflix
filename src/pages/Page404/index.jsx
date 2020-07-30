import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';

function CadastroVideo() {
  return (
    <PageDefault>
      <h1>Erro 404 - Page not found.</h1>
      <p>
        A página que você está tentando acessar não existe ou o link que você utilizou está
        quebrado. Verifique se a url que você está utilizando está correta e tente novamente.
      </p>
      <Link to="/">Ir para Home</Link>
    </PageDefault>
  );
}

export default CadastroVideo;
