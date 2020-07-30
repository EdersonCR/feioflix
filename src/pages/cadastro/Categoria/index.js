import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';


function CadastroCategoria(){
  
  const valoresIniciais = {
    nome: '',
    descricao: '',
    cor: '#1DB954'
  };
  
  const [values, setValues] = useState(valoresIniciais);
  const [categorias, setCategorias] = useState([
    { nome: 'Musica',
      descricao: 'Minhas musicas preferidas',
      cor: '#1DB954' },
    { nome: 'Ciência',
      descricao: 'Videos de ciência',
      cor: '#1d00d4' },
    { nome: 'Cinema',
      descricao: 'Criticas de filmes',
      cor: '#540554' }
  ]); // Valores iniciais para teste

  function setValue(key, value){
    setValues({
      ...values,
      [key]: value,
    });
  }
  
  function handleChange(evento){
    setValue(evento.target.getAttribute('name'), evento.target.value);
  }

  function handleSubmit(evento){
    evento.preventDefault();
    
    setCategorias([
      ...categorias,
      values
    ]);

    setValues(valoresIniciais);
  }

  return (
    <PageDefault>
     
      <h1>Cadastro de Categoria</h1>

      <form onSubmit={handleSubmit}>

        <FormField 
          label='Nome da Categoria: '
          type='text'
          name='nome'
          value={values.nome}
          onChange={handleChange}
        />

        <FormField as="textarea"
          label='Descrição: '
          type='textarea'
          name='descricao'
          value={values.descricao}
          onChange={handleChange}
        />

        <FormField 
          label='Cor: '
          type='color'
          name='cor'
          value={values.cor}
          onChange={handleChange}
        />

        <button>
          Cadastrar
        </button>
      </form>

      <ul>
        {categorias.map((categoria, indice) => {
          return (
          <li key={`${categoria}${indice}`} style={{ color:categoria.cor}}>
            {categoria.nome} - {categoria.descricao}
          </li>
          );
        })}
      </ul>

      <Link to="/">Ir para Home</Link>

    </PageDefault>
  );
}

export default CadastroCategoria;