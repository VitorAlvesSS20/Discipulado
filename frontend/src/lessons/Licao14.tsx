import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';
import imagemCeia from '../assets/ceia.jpg';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao14({ onVoltar }: LicaoProps) {
  const [respostas, setRespostas] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: ''
  });
  const [mostrarGabarito, setMostrarGabarito] = useState(false);
  const [salvando, setSalvando] = useState(false);
  const [toast, setToast] = useState<{ mensagem: string; tipo: 'success' | 'error' } | null>(null);

  useEffect(() => {
    const carregarRespostas = async () => {
      const user = auth.currentUser;
      if (!user) return;

      try {
        const docRef = doc(db, 'users_progress', user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data.respostasQuestionarios && data.respostasQuestionarios['a-ceia-do-senhor']) {
            const salvas = data.respostasQuestionarios['a-ceia-do-senhor'];
            setRespostas({
              q1: salvas['1) Quais são as duas ordenanças deixadas por Jesus à Igreja e qual a diferença de frequência entre elas?'] || '',
              q2: salvas['2) O que representam o pão e o vinho na Ceia e quais lições fundamentais do Evangelho eles nos lembram?'] || '',
              q3: salvas['3) Por que a doutrina da Transubstanciação é considerada biblicamente incorreta?'] || '',
              q4: salvas['4) Qual é o perfil bíblico de quem está apto a participar da Ceia do Senhor?'] || '',
              q5: salvas['5) O que significa participar da Ceia "indignamente" segundo a advertência de Paulo aos Coríntios?'] || ''
            });
          }
        }
      } catch (error) {
        console.error('Erro ao carregar respostas:', error);
      }
    };

    carregarRespostas();
  }, []);

  const exibirToast = (mensagem: string, tipo: 'success' | 'error') => {
    setToast({ mensagem, tipo });
    setTimeout(() => setToast(null), 4000);
  };

  const handleSalvarRespostas = async () => {
    const user = auth.currentUser;
    if (!user) {
      exibirToast('Você precisa estar autenticado para salvar suas respostas.', 'error');
      return;
    }

    setSalvando(true);

    const payloadRespostas = {
      '1) Quais são as duas ordenanças deixadas por Jesus à Igreja e qual a diferença de frequência entre elas?': respostas.q1,
      '2) O que representam o pão e o vinho na Ceia e quais lições fundamentais do Evangelho eles nos lembram?': respostas.q2,
      '3) Por que a doutrina da Transubstanciação é considerada biblicamente incorreta?': respostas.q3,
      '4) Qual é o perfil bíblico de quem está apto a participar da Ceia do Senhor?': respostas.q4,
      '5) O que significa participar da Ceia "indignamente" segundo a advertência de Paulo aos Coríntios?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'a-ceia-do-senhor': payloadRespostas
        }
      }, { merge: true });

      exibirToast('Respostas salvas com sucesso. Você pode visualizá-las no seu Perfil.', 'success');
    } catch (error) {
      console.error('Erro ao salvar respostas:', error);
      exibirToast('Erro ao salvar as respostas. Tente novamente.', 'error');
    } finally {
      setSalvando(false);
    }
  };

  return (
    <div className="licao-page">
      {toast && (
        <div className="toast-container">
          <div className={`custom-toast toast-${toast.tipo}`}>
            <span>{toast.mensagem}</span>
          </div>
        </div>
      )}

      <button className="back-btn" onClick={onVoltar}>
        &larr; Voltar ao Menu
      </button>

      <article className="licao-container">
        <header className="licao-header">
          <span className="licao-badge">Módulo: Liturgias</span>
          <h1>Lição 14: A Ceia do Senhor</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Porque, todas as vezes que comerdes este pão e beberdes este cálice, anunciais a morte do Senhor, até que venha."
            <cite>— 1 Coríntios 11:26</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Introdução à Ceia do Senhor</h2>
          <p>
            A Ceia do Senhor é a segunda e última ordenança deixada por Jesus Cristo à Sua Igreja. Instituída na véspera de Sua morte expiatória durante a Páscoa (Mateus 26:26-30), ela se constitui no rito distintivo da adoração cristã. Consiste na participação solene do <strong>pão</strong> e do <strong>vinho</strong>, apresentados em memória do sacrifício inigualável na cruz.
          </p>
          <p>
            Diferente do batismo — que é realizado uma única vez como sinal do início da jornada cristã —, a Ceia deve ser observada continuamente ao longo de toda a vida do crente, servindo como testemunho de sua comunhão contínua com Jesus e com a Igreja. Negligenciá-la voluntariamente equivale a enfraquecer a própria saúde espiritual (João 6:53; 1 Coríntios 11:30).
          </p>

          <div className="licao-imagem-wrapper">
            <img src={imagemCeia} alt="A Ceia do Senhor" className="licao-imagem" />
          </div>
        </section>

        <div className="section-separator"><span>🍷</span></div>

        <section className="licao-section">
          <h2>2. O Significado Espiritual e os Elementos</h2>
          <p>Os elementos que compõem a Ceia possuem representações específicas e espirituais:</p>
          <ul className="lista-cozy">
            <li><strong>O Pão:</strong> Representa o <em>corpo de Cristo</em> que foi partido e moído por nossos pecados (Mateus 26:26; Isaías 53:5). Lembra-nos da <strong>Encarnação</strong> — o Verbo que se fez carne e desceu do céu para dar vida ao mundo.</li>
            <li><strong>O Vinho (Cálice):</strong> Representa o <em>sangue de Cristo</em> derramado para a remissão de pecados (Mateus 26:27-28). Lembra-nos da <strong>Expiação</strong> — a Nova Aliança selada com sangue, garantindo segurança e perdão pleno aos que se aproximam de Deus.</li>
          </ul>

          <div className="nota-teologica">
            <h3>Refutando a Transubstanciação</h3>
            <p>
              A doutrina da <strong>transubstanciação</strong> afirma erradamente que, após a oração de consagração, o pão e o vinho se convertem literalmente na substância física do corpo e do sangue de Cristo. 
            </p>
            <p>
              <strong>Isto está incorreto!</strong> Quando Jesus instituiu a Ceia e disse <em>"isto é o meu corpo"</em>, Ele ainda não havia morrido; logo, Seu corpo físico estava ali presente e intacto. Portanto, a presença de Jesus nos elementos é <strong>simbólica</strong> e a Sua presença no ambiente é <strong>espiritual</strong>, alimentando a nossa alma pela fé.
            </p>
          </div>
        </section>

        <div className="section-separator"><span>🍞</span></div>

        <section className="licao-section">
          <h2>3. Propósitos e Alvo Futuro</h2>
          <p>A celebração da Ceia do Senhor aponta para três direções temporais diferentes:</p>
          <ul>
            <li><strong>Passado (Memória):</strong> Recordar com profunda gratidão o sacrifício substitutivo de Jesus na cruz, libertando-nos do cativeiro do pecado.</li>
            <li><strong>Presente (Unidade e Alimento):</strong> Nutrir a alma dos fiéis e evidenciar visivelmente a unidade da Igreja como um só corpo (1 Coríntios 10:17; Salmos 133:1).</li>
            <li><strong>Futuro (Esperança):</strong> Aponta diretamente para uma refeição gloriosa e futura na presença de Deus: as Bodas do Cordeiro (Mateus 26:29; Apocalipse 19:9).</li>
          </ul>
          
          {/* Corrigido aqui: adicionado o caractere '<' omitido anteriormente */}
          <blockquote className="clima-celebracao-box">
            <strong>Clima de Celebração:</strong> A Ceia não deve ser um momento de lamento fúnebre ou desespero alimentado por medo. É um momento solene e reverente, mas de intensa <strong>festa e alegria espiritual</strong> pelo livramento e vitória garantidos pelo sangue de Cristo!
          </blockquote>
        </section>

        <div className="section-separator"><span>🛡️</span></div>

        <section className="licao-section">
          <h2>4. Quem Pode Participar e a Responsabilidade do Autoexame</h2>
          <p>
            Biblicamente, a Ceia é destinada aos membros do corpo de Cristo: pessoas que creram verdadeiramente, passaram pelo batismo em águas (o sinal público externo da conversão) e caminham em conformidade com a doutrina local.
          </p>
          <p>
            O Apóstolo Paulo traz uma advertência severa em 1 Coríntios 11:27-29 sobre participar <strong>indignamente</strong>. É preciso compreender o real teor dessa advertência:
          </p>
          <ul className="lista-cozy">
            <li><strong>Não somos dignos por nós mesmos:</strong> Nenhum ser humano possui méritos próprios; é a graça do Senhor que nos capacita e nos torna dignos.</li>
            <li><strong>A indignidade das ações:</strong> Paulo repreendia a falta de reverência, divisões e a desconsideração pelo significado dos elementos (como os coríntios que se embriagavam ou promoviam exclusão na mesa).</li>
            <li><strong>O Autoexame:</strong> Antes de comer do pão e beber do cálice, o cristão deve examinar seu relacionamento com Deus e com os irmãos, buscando consertar as brechas e atitudes que quebram a comunhão.</li>
          </ul>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões avaliando os fundamentos bíblicos da Ceia do Senhor:</p>
          
          <div className="form-group">
            <label>1) Quais são as duas ordenanças deixadas por Jesus à Igreja e qual a diferença de frequência entre elas?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) O que representam o pão e o vinho na Ceia e quais lições fundamentais do Evangelho eles nos lembram?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Por que a doutrina da Transubstanciação é considerada biblicamente incorreta?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Qual é o perfil bíblico de quem está apto a participar da Ceia do Senhor?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) O que significa participar da Ceia "indignamente" segundo a advertência de Paulo aos Coríntios?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q5} 
              onChange={(e) => setRespostas({...respostas, q5: e.target.value})}
            />
          </div>

          <div className="btn-group-questionario">
            <button 
              className="btn-gabarito" 
              onClick={handleSalvarRespostas}
              disabled={salvando}
            >
              {salvando ? 'Salvando...' : 'Salvar Respostas'}
            </button>

            <button 
              className="btn-gabarito btn-gabarito-flex" 
              onClick={() => setMostrarGabarito(!mostrarGabarito)}
            >
              {mostrarGabarito ? "Ocultar Gabarito de Estudo" : "Conferir Gabarito de Respostas"}
            </button>
          </div>

          {mostrarGabarito && (
            <div className="gabarito-box">
              <h4>Gabarito das respostas:</h4>
              <ul>
                <li><strong>R1:</strong> O Batismo (realizado uma única vez, marcando o início da vida cristã) e a Ceia do Senhor (celebrada continuamente ao longo da vida como sinal de comunhão contínua).</li>
                <li><strong>R2:</strong> O pão representa o corpo de Cristo (lembra a Encarnação e Seu sofrimento); o vinho representa Seu sangue (lembra a Expiação e a Nova Aliança de perdão).</li>
                <li><strong>R3:</strong> Porque quando Jesus instituiu a ordenança, Ele ainda não havia morrido. Seu corpo físico estava perfeitamente ali, provando que os elementos são símbolos sagrados e não a carne e o sangue literais.</li>
                <li><strong>R4:</strong> Pessoas que creem verdadeiramente em Cristo, mostram frutos de conversão, passaram pelo batismo em águas e zelam pela comunhão com Deus e com a igreja local.</li>
                <li><strong>R5:</strong> Refere-se à indignidade nas ações e atitudes: falta de reverência, falta de discernimento espiritual do sacrifício, divisões, egoísmo e atitudes que ferem a comunhão coletiva e a santidade do momento.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}