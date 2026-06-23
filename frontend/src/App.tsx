import { useState, useEffect } from 'react';
import { onAuthStateChanged, signOut, type User } from 'firebase/auth';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { auth, db } from './config/firebase';
import { Auth } from './Auth';
import { Perfil } from './Perfil';
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

type ViewState = 'home' | 'lesson' | 'profile';

const componentMap: { [key: string]: React.ComponentType<{ onVoltar: () => void }> } = {
  'a-biblia': Licao1,
  'deus': Licao2,
  'jesus-cristo': Licao3,
  'o-espirito-santo': Licao4,
  'o-pecado': Licao5,
  'a-salvacao': Licao6,
  'nocoes-de-escatologia': Licao7,
  'o-cristao': Licao8,
  'a-conduta-crista': Licao9,
  'a-oracao': Licao10,
  'o-jejum': Licao11,
  'o-culto': Licao12,
  'o-batismo-em-aguas': Licao13,
  'a-ceia': Licao14,
  'o-dizimo': Licao15,
  'discipulo-gerando-discipulo': Licao16,
  'seitas-e-heresias': Licao17,
};

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
  const [user, setUser] = useState<User | null>(null);
  const [authChecking, setAuthChecking] = useState<boolean>(true);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [currentLessonSlug, setCurrentLessonSlug] = useState<string | null>(null);
  const [licoesConcluidas, setLicoesConcluidas] = useState<{ [key: string]: boolean }>({});
  const [menuOpen, setMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    let previousUser: User | null = null;

    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser && !previousUser) {
        toast.success(`Bem-vindo, ${currentUser.displayName || 'Usuário'}!`);
      }
      
      previousUser = currentUser;
      setUser(currentUser);
      
      if (currentUser) {
        try {
          const docRef = doc(db, 'users_progress', currentUser.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const data = docSnap.data();
            const progressoFiltrado: { [key: string]: boolean } = {};
            Object.keys(data).forEach((key) => {
              if (typeof data[key] === 'boolean') {
                progressoFiltrado[key] = data[key];
              }
            });
            setLicoesConcluidas(progressoFiltrado);
          } else {
            setLicoesConcluidas({});
          }
        } catch (error) {
          console.error(error);
        }
      } else {
        setLicoesConcluidas({});
      }
      setAuthChecking(false);
    });

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;

    const iniciarTemporizadorLeitura = () => {
      if (currentView === 'lesson' && currentLessonSlug && user) {
        if (licoesConcluidas[currentLessonSlug]) return;

        timer = setTimeout(async () => {
          const updatedProgress = { ...licoesConcluidas, [currentLessonSlug]: true };
          setLicoesConcluidas(updatedProgress);
          try {
            await setDoc(doc(db, 'users_progress', user.uid), { [currentLessonSlug]: true }, { merge: true });
          } catch (error) {
            console.error('Erro ao salvar progresso:', error);
          }
        }, 40000); 
      }
    };

    iniciarTemporizadorLeitura();

    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [currentLessonSlug, currentView, user, licoesConcluidas]);

  const handleLicaoClick = (slug: string) => {
    setCurrentLessonSlug(slug);
    setCurrentView('lesson');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleVoltarMenu = () => {
    setCurrentLessonSlug(null);
    setCurrentView('home');
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleIrParaPerfil = () => {
    setCurrentView('profile');
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setCurrentLessonSlug(null);
      setCurrentView('home');
      setMenuOpen(false);
      toast.info('Você saiu da sua conta. Até logo!');
    } catch (error) {
      console.error(error);
      toast.error('Erro ao tentar sair da conta.');
    }
  };

  const renderDynamicLesson = () => {
    if (!currentLessonSlug) return null;
    
    const Component = componentMap[currentLessonSlug];
    if (Component) {
      return <Component onVoltar={handleVoltarMenu} />;
    }

    return (
      <div className="lesson-container-dynamic">
        <button className="back-btn" onClick={handleVoltarMenu}>
          &larr; Voltar para o Sumário
        </button>
        <div className="lesson-placeholder">
          <h2>Conteúdo da Lição: {currentLessonSlug.replace(/-/g, ' ').toUpperCase()}</h2>
          <p>O conteúdo estruturado e teológico desta lição será carregado em breve!</p>
        </div>
      </div>
    );
  };

  const renderContent = () => {
    if (authChecking) {
      return (
        <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center' }}>
          <p style={{ fontFamily: 'var(--font-serif)', fontSize: '1.5rem', color: 'var(--primary)' }}>
            Carregando ambiente...
          </p>
        </div>
      );
    }

    if (!user) {
      return (
        <div className="app-container" style={{ justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
          <Auth onAuthSuccess={handleVoltarMenu} />
        </div>
      );
    }

    return (
      <div className="app-container">
        <header className="main-header">
          <div className="header-content">
            <h1 onClick={handleVoltarMenu} className="brand-logo">
              Discipulado Cristão
            </h1>
            <p className="header-subtitle">Edificando a vida na Rocha</p>
            
            <button 
              className={`hamburger-btn ${menuOpen ? 'open' : ''}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
              <span className="hamburger-line"></span>
            </button>

            <div className={`header-menu-container ${menuOpen ? 'active' : ''}`}>
              <button onClick={handleIrParaPerfil} className="menu-btn-profile">
                Meu Perfil
              </button>
              <button onClick={handleSignOut} className="menu-btn-logout">
                Sair
              </button>
            </div>
          </div>
        </header>

        <main className="main-content">
          {currentView === 'profile' && (
            <Perfil onVoltar={handleVoltarMenu} />
          )}

          {currentView === 'lesson' && renderDynamicLesson()}

          {currentView === 'home' && (
            <div className="home-view">
              <section className="instrucoes-box">
                <h4>Instruções de Estudo Importantes:</h4>
                <p>
                  Antes de iniciar suas lições, <strong>pegue um caderno</strong> para fazer suas anotações pessoais e 
                  <strong> tenha sua Bíblia em mãos</strong> para conferir detalhadamente a veracidade de todas as informações, 
                  referências e versículos citados ao longo do material.
                </p>
                <p style={{ marginTop: '10px' }}>
                  Ao final de cada lição há um simples questionário para que possa refletir com perguntas. Recomendamos que as responda em seu caderno. 
                </p>
              </section>

              <section className="intro-section">
                <h2>Princípios Básicos Doutrinários</h2>
                <p className="greeting">Graça e Paz vos sejam multiplicadas!</p>
                <p>
                  É com prazer que disponibilizamos a você este material de estudo da Bíblia, 
                  pois é de suma importância que tenhamos o conhecimento acerca de Deus e dos 
                  aspect gerais relacionados à sua obra.
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

              <section className="bibliografia-box">
                <h4>BIBLIOGRAFIA DE REFERÊNCIA:</h4>
                <ul>
                  <li>Bíblia de Estudo Pentecostal</li>
                  <li>Bíblia de Estudo Alfalit</li>
                  <li>Pequena Enciclopédia Bíblica — Orlando Boyer</li>
                  <li>Dicionário Teológico — CPAD</li>
                </ul>
              </section>
            </div>
          )}
        </main>

        <footer className="main-footer">
          <p>&copy; {new Date().getFullYear()} Discipulado Cristão. Todos os direitos reservados.</p>
        </footer>
      </div>
    );
  };

  return (
    <>
      <style>{`
        .custom-cafe-toast {
          background-color: #3e2723 !important;
          color: #f5f5dc !important;
          font-family: var(--font-serif, Georgia, serif) !important;
          border: 1px solid #d7ccc8 !important;
          border-radius: 4px !important;
          box-shadow: 4px 4px 0px rgba(62, 39, 35, 0.2) !important;
        }
        .custom-cafe-toast .Toastify__toast-icon svg {
          fill: #d7ccc8 !important;
        }
        .custom-cafe-toast .Toastify__close-button {
          color: #f5f5dc !important;
          opacity: 0.7;
        }
        .custom-cafe-progress {
          background: #8d6e63 !important;
        }
        
        .header-content {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .hamburger-btn {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 30px;
          height: 21px;
          background: transparent;
          border: none;
          cursor: pointer;
          padding: 0;
          z-index: 1001;
          position: absolute;
          top: 10px;
          right: 10px;
        }

        .hamburger-line {
          width: 30px;
          height: 3px;
          background-color: var(--bg-primary);
          transition: all 0.3s linear;
          transform-origin: 1px;
        }

        .hamburger-btn.open .hamburger-line:nth-child(1) {
          transform: rotate(45deg);
        }

        .hamburger-btn.open .hamburger-line:nth-child(2) {
          opacity: 0;
          transform: translateX(20px);
        }

        .hamburger-btn.open .hamburger-line:nth-child(3) {
          transform: rotate(-45deg);
        }

        .header-menu-container {
          display: flex;
          gap: 10px;
          position: absolute;
          top: 20px;
          right: 20px;
        }

        .menu-btn-profile {
          background: var(--accent);
          border: 1px solid var(--border-color);
          color: white;
          padding: 6px 14px;
          cursor: pointer;
          borderRadius: 4px;
          fontSize: '0.8rem';
          fontWeight: 'bold';
          boxShadow: '2px 2px 0px var(--border-color)';
        }

        .menu-btn-logout {
          background: transparent;
          border: 1px solid var(--bg-primary);
          color: var(--bg-primary);
          padding: 6px 12px;
          cursor: pointer;
          borderRadius: 4px;
          fontSize: '0.8rem';
          fontWeight: 'bold';
        }

        @media (max-width: 768px) {
          .hamburger-btn {
            display: flex;
          }

          .header-menu-container {
            display: none;
            flex-direction: column;
            position: absolute;
            top: 50px;
            right: 10px;
            background-color: var(--primary-light);
            border: 2px solid var(--border-color);
            padding: 15px;
            border-radius: 4px;
            box-shadow: 4px 4px 0px var(--border-color);
            z-index: 1000;
            gap: 12px;
            width: 160px;
          }

          .header-menu-container.active {
            display: flex;
          }

          .menu-btn-profile, .menu-btn-logout {
            width: 100%;
            text-align: center;
            box-sizing: border-box;
          }
          
          .menu-btn-logout {
            background: rgba(255, 255, 255, 0.1);
          }
        }
      `}</style>
      <ToastContainer 
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        toastClassName="custom-cafe-toast"
        progressClassName="custom-cafe-progress"
      />
      {renderContent()}
    </>
  );
}