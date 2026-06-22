import { useState, useEffect } from 'react';
import './App.css';
import seloConcluido from './assets/concluido.png';

import Licao1 from './lessons/Licao1';
import Licao2 from './lessons/Licao2';
import Licao3 from './lessons/Licao3'; 
import Licao4 from './lessons/Licao4'; 
import Licao5 from './lessons/Licao5'; 
import Licao6 from './lessons/Licao6'; 
import Licao7 from './lessons/Licao7'; 
import Licao8 from './lessons/Licao8'; 
import Licao9 from './lessons/Licao9'; 
import Licao10 from './lessons/Licao10'; 
import Licao11 from './lessons/Licao11'; 
import Licao12 from './lessons/Licao12'; 
import Licao13 from './lessons/Licao13'; 
import Licao14 from './lessons/Licao14'; 
import Licao15 from './lessons/Licao15'; 
import Licao16 from './lessons/Licao16'; 
import Licao17 from './lessons/Licao17'; 

interface Licao {
  id: number;
  slug: string;
  titulo: string;
}

interface Modulo {
  id: string;
  categoria: string;
  licoes: Licao[];
}

const sumarioDiscipulado: Modulo[] = [
  {
    id: 'doutrinas',
    categoria: 'DOUTRINAS',
    licoes: [
      { id: 1, slug: 'a-biblia', titulo: 'A Bíblia' },
      { id: 2, slug: 'deus', titulo: 'Deus' },
      { id: 3, slug: 'jesus-cristo', titulo: 'Jesus Cristo' },
      { id: 4, slug: 'o-espirito-santo', titulo: 'O Espírito Santo' },
      { id: 5, slug: 'o-pecado', titulo: 'O Pecado' },
      { id: 6, slug: 'a-salvacao', titulo: 'A Salvação' },
      { id: 7, slug: 'nocoes-de-escatologia', titulo: 'Noções de Escatologia' },
    ]
  },
  {
    id: 'transparencia',
    categoria: 'TRANSPARÊNCIA CRISTÃ',
    licoes: [
      { id: 8, slug: 'o-cristao', titulo: 'O Cristão' },
      { id: 9, slug: 'a-conduta-crista', titulo: 'A Conduta Cristã' },
      { id: 10, slug: 'a-oracao', titulo: 'A Oração' },
      { id: 11, slug: 'o-jejum', titulo: 'O Jejum' },
    ]
  },
  {
    id: 'liturgias',
    categoria: 'LITURGIAS',
    licoes: [
      { id: 12, slug: 'o-culto', titulo: 'O Culto' },
      { id: 13, slug: 'o-batismo-em-aguas', titulo: 'O Batismo em Águas' },
      { id: 14, slug: 'a-ceia', titulo: 'A Ceia' },
      { id: 15, slug: 'o-dizimo', titulo: 'O Dízimo' },
    ]
  },
  {
    id: 'missoes',
    categoria: 'MISSÕES',
    licoes: [
      { id: 16, slug: 'discipulo-gerando-discipulo', titulo: 'Discípulo Gerando Discípulo' },
      { id: 17, slug: 'seitas-e-heresias', titulo: 'Seitas e Heresias' },
    ]
  }
];

export default function App() {
  const [currentLessonSlug, setCurrentLessonSlug] = useState<string | null>(null);
  const [licoesConcluidas, setLicoesConcluidas] = useState<{[key: string]: boolean}>({});

  useEffect(() => {
    if (currentLessonSlug) {
      const timer = setTimeout(() => {
        setLicoesConcluidas((prev) => ({ ...prev, [currentLessonSlug]: true }));
      }, 40000);

      return () => clearTimeout(timer);
    }
  }, [currentLessonSlug]);

  const handleLicaoClick = (slug: string) => {
    setCurrentLessonSlug(slug);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVoltarMenu = () => {
    setCurrentLessonSlug(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const renderDynamicLesson = () => {
    switch (currentLessonSlug) {
      case 'a-biblia':
        return <Licao1 onVoltar={handleVoltarMenu} />;
      case 'deus':
        return <Licao2 onVoltar={handleVoltarMenu} />;
      case 'jesus-cristo': 
        return <Licao3 onVoltar={handleVoltarMenu} />;
      case 'o-espirito-santo': 
        return <Licao4 onVoltar={handleVoltarMenu} />;
      case 'o-pecado': 
        return <Licao5 onVoltar={handleVoltarMenu} />;
      case 'a-salvacao': 
        return <Licao6 onVoltar={handleVoltarMenu} />;
      case 'nocoes-de-escatologia': 
        return <Licao7 onVoltar={handleVoltarMenu} />;
      case 'o-cristao': 
        return <Licao8 onVoltar={handleVoltarMenu} />;
      case 'a-conduta-crista': 
        return <Licao9 onVoltar={handleVoltarMenu} />;
      case 'a-oracao': 
        return <Licao10 onVoltar={handleVoltarMenu} />;
      case 'o-jejum': 
        return <Licao11 onVoltar={handleVoltarMenu} />;
      case 'o-culto': 
        return <Licao12 onVoltar={handleVoltarMenu} />;
      case 'o-batismo-em-aguas': 
        return <Licao13 onVoltar={handleVoltarMenu} />;
      case 'a-ceia': 
        return <Licao14 onVoltar={handleVoltarMenu} />;
      case 'o-dizimo': 
        return <Licao15 onVoltar={handleVoltarMenu} />;
      case 'discipulo-gerando-discipulo': 
        return <Licao16 onVoltar={handleVoltarMenu} />;
      case 'seitas-e-heresias': 
        return <Licao17 onVoltar={handleVoltarMenu} />;
      default:
        return (
          <div className="lesson-container-dynamic">
            <button className="back-btn" onClick={handleVoltarMenu}>
              &larr; Voltar para o Sumário
            </button>
            <div className="lesson-placeholder">
              <h2>Conteúdo da Lição: {currentLessonSlug?.replace(/-/g, ' ').toUpperCase()}</h2>
              <p>O conteúdo estruturado e teológico desta lição será carregado em breve!</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="app-container">
      <header className="main-header">
        <div className="header-content">
          <h1 onClick={handleVoltarMenu} className="brand-logo">
            Discipulado Cristão
          </h1>
          <p className="header-subtitle">Edificando a vida na Rocha</p>
        </div>
      </header>

      <main className="main-content">
        {currentLessonSlug === null ? (
          <div className="home-view">
            
            <section className="instrucoes-box">
              <h4>📖 Instruções de Estudo Importantes:</h4>
              <p>
                Antes de iniciar suas lições, <strong>pegue um caderno</strong> para fazer suas anotações pessoais e 
                <strong> tenha sua Bíblia em mãos</strong> para conferir detalhadamente a veracidade de todas as informações, 
                referências e versículos citados ao longo do material.
              </p>
            </section>

            <section className="intro-section">
              <h2>Princípios Básicos Doutrinários</h2>
              <p className="greeting">Graça e Paz vos sejam multiplicadas!</p>
              <p>
                É com prazer que disponibilizamos a você este material de estudo da Bíblia, 
                pois é de suma importância que tenhamos o conhecimento acerca de Deus e dos 
                aspectos gerais relacionados à sua obra.
              </p>
              <p>
                Nestas lições estudaremos alguns princípios básicos a respeito do que nos diz as 
                Escrituras concernentes ao cristianismo, à conduta cristã, Deus, Jesus Cristo, o Espírito Santo, 
                entre outros princípios doutrinários que servirão como base para seu crescimento espiritual.
              </p>
              <div className="quote-box">
                <p>"Todo aquele, pois, que escuta as minhas palavras e as pratica, assemelhá-lo-ei ao homem prudente, que edificou a sua casa sobre a rocha. E desceu a chuva e correram rios, e assopraram os ventos, e combateram aquela casa, e não caiu, porque estava edificada sobre a rocha."</p>
                <span>— Mateus 7:24-25</span>
              </div>
            </section>

            <h3 className="section-title">Sumário do Curso</h3>
            <div className="modules-grid">
              {sumarioDiscipulado.map((modulo) => (
                <div key={modulo.id} className="modulo-card">
                  <h4 className="modulo-category">{modulo.categoria}</h4>
                  <ul className="licoes-list">
                    {modulo.licoes.map((licao) => (
                      <li 
                        key={licao.id} 
                        className="licao-item-link"
                        onClick={() => handleLicaoClick(licao.slug)}
                      >
                        <span className="licao-number">Lição {licao.id}:</span> {licao.titulo}
                        {licoesConcluidas[licao.slug] && (
                          <span className="concluido-seal">
                            <img src={seloConcluido} alt="Concluído" className="verificado-icon" />
                          </span>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Bloco de Bibliografia Adicionado */}
            <section className="bibliografia-box">
              <h4>📚 BIBLIOGRAFIA DE REFERÊNCIA:</h4>
              <ul>
                <li>Bíblia de Estudo Pentecostal</li>
                <li>Bíblia de Estudo Alfalit</li>
                <li>Pequena Enciclopédia Bíblica — Orlando Boyer</li>
                <li>Dicionário Teológico — CPAD</li>
              </ul>
            </section>

          </div>
        ) : (
          renderDynamicLesson()
        )}
      </main>

      <footer className="main-footer">
        <p>&copy; {new Date().getFullYear()} Discipulado Cristão. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
}