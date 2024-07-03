import React, { useState } from 'react';
import './Blog.css';
import BlogList from './BlogList';
import Img01 from '../../assets/Img 01.png';
import Img02 from '../../assets/Img 02.png';
import Img03 from '../../assets/Img 03.png';
import Img04 from '../../assets/Img 04.png';
import Img05 from '../../assets/Img 05.png';
import { Comment, BlogPost } from '../../Type';

const Blog: React.FC = () => {
  const [comments, setComments] = useState<Record<number, Comment[]>>({});
  const [ratings, setRatings] = useState<Record<number, number[]>>({});

  const blogPosts: BlogPost[] = [
    {
      id: 1,
      title: 'Como funciona a consulta com o Neuropediatra?',
      content: (
        <>
          <p>
            A consulta com o Neuropediatra é feita com a criança de forma integral e completa. Analisamos não só a queixa que levou a criança ao consultório, mas também seu desenvolvimento, história pregressa e familiar, desempenho escolar, comportamento, socialização, dinâmica familiar, dentre outros.
          </p>
          <p>
            É realizado, ainda, exame neurológico completo e adaptado para cada faixa etária, com uso de brinquedos e em espaço adequado para garantir o conforto da criança e da família.
          </p>
        </>
      ),
      imageUrl: Img01,
    },
    {
      id: 2,
      title: 'Epilepsia em crianças: o que fazer?',
      content: (
        <>
          <p>
            Crises epilépticas podem ocorrer na faixa etária pediátrica e devem ser acompanhadas por Neurologista Infantil.
          </p>
          <p>
            O tratamento deve ser instituído de forma precoce, fazendo uso de medicação contínua escolhida conforme eficácia e efeitos colaterais. O tratamento é sempre individualizado e continuamente acompanhado pelo Neurologista.
          </p>
          <p>
            Além disso, sempre devemos realizar propedêutica adequada, com exames que auxiliam a esclarecer a causa da epilepsia e podem ajudar na própria condução do caso.
          </p>
        </>
      ),
      imageUrl: Img02,
    },
    {
      id: 3,
      title: 'Quando a dor de cabeça deve ser preocupante?',
      content: (
        <>
          <p>
            A dor de cabeça acomete de forma significativa até 60% das crianças e adolescentes! Além de muito comum, o tratamento adequado das cefaleias é imprescindível! Crianças com enxaqueca faltam mais aulas, têm pior desempenho escolar e pior qualidade de vida.
          </p>
          <p>
            Quando, então, devemos nos preocupar e procurar o Neurologista Infantil? Existem sinais de alarme que devem ser observados e, se presentes, levar à busca de atendimento médico o mais rápido possível. Dentre eles, temos:
          </p>
          <ul>
            <li>Cefaleia de início recente e abrupto;</li>
            <li>Dor muito intensa;</li>
            <li>Dor durante o sono ou início da manhã;</li>
            <li>Dor que esteja piorando progressivamente em termos de frequência e intensidade;</li>
            <li>Cefaleia associada a vômitos;</li>
            <li>Cefaleia precipitada por exercício físicos;</li>
            <li>Mudança de comportamento ou declínio do rendimento escolar.</li>
          </ul>
          <p>
            A consulta com o Neurologista Infantil abordará características e frequência da dor, presença de comorbidades, história familiar, dentre outros. Além disso, realizamos exame físico e neurológico abrangente para exclusão de diagnósticos diferenciais. Quando necessário, podemos complementar a investigação com exames. O tratamento será direcionado para a causa da cefaleia.
          </p>
        </>
      ),
      imageUrl: Img03,
    },
    {
      id: 4,
      title: 'Meu filho está com dificuldades na escola! E agora?',
      content: (
        <>
          <p>
            Dificuldade escolar é uma das queixas mais frequentes em consultório! Nestes casos, é sempre importante procurar um profissional capacitado, como neurologistas infantis e psicopedagogos.
          </p>
          <p>
            No dia da consulta, não se esqueça de levar relatório escolar detalhando desempenho do aluno, comportamento dentro e fora de sala e relacionamento com colegas e funcionários. Além disso, é interessante levar cadernos, boletins e provas. Isso adianta, e muito, a avaliação por parte do neurologista.
          </p>
          <p>
            Na hora de avaliar a criança, vários diagnósticos possíveis são levados em conta como o TDAH (transtorno de déficit de atenção e hiperatividade) e transtornos de aprendizado (dislexia, discalculia, dentre outros).
          </p>
        </>
      ),
      imageUrl: Img04,
    },
    {
      id: 5,
      title: 'Tempo de tela: como devemos controlar a exposição das nossas crianças?',
      content: (
        <>
          <p>
            Um dos maiores dificultadores do desenvolvimento atual das crianças é o tempo de tela excessivo. O uso indiscriminado e sem supervisão de dispositivos eletrônicos (como tablets, celulares, computadores e TVs) além de afetar o desenvolvimento cerebral adequado na infância, acarreta alterações de sono, alimentação e aumento do risco de distúrbios psiquiátricos.
          </p>
          <p>
            A seguir, temos as recomendações mais recentes da Sociedade Brasileira de Pediatria para o tempo de tela das crianças:
          </p>
          <ol>
            <li>Evitar exposição de crianças com menos de 2 anos às telas (mesmo que passivamente);</li>
            <li>Entre 2 e 5 anos de idade: máximo 1 hora por dia, e sempre sob supervisão de adulto;</li>
            <li>Entre 6 e 10 anos de idade: máximo de 1 a 2 horas por dia, sempre com supervisão do responsável;</li>
            <li>Entre 11 e 18 anos de idade: máximo de 2 a 3 horas por dia.</li>
          </ol>
          <p>
            Além disso, para todas as idades, é importante limitar o uso de telas a ambientes comuns da casa, evitando "isolar" a criança ou adolescente. Crianças nunca devem usar telas durante as refeições e devem evitar o uso de 1 a 2 horas antes de dormir.
          </p>
        </>
      ),
      imageUrl: Img05,
    },
  ];

  const handleCommentSubmit = (postId: number, commentData: any) => {
    // Lógica para lidar com o envio de comentários
    setComments((prevComments) => ({
      ...prevComments,
      [postId]: [...(prevComments[postId] || []), commentData],
    }));
  };

  const handleRatingSubmit = (postId: number, rating: number) => {
    // Lógica para lidar com o envio de avaliações
    setRatings((prevRatings) => ({
      ...prevRatings,
      [postId]: [...(prevRatings[postId] || []), rating],
    }));
  };

  return (
    <div className="blog">
      <h1>Blog</h1>
      <BlogList
        posts={blogPosts}
        comments={comments}
        ratings={ratings}
        onCommentSubmit={handleCommentSubmit}
        onRatingSubmit={handleRatingSubmit}
      />
    </div>
  );
};

export default Blog;