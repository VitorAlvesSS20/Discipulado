import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao9({ onVoltar }: LicaoProps) {
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
          if (data.respostasQuestionarios && data.respostasQuestionarios['a-conduta-crista']) {
            const salvas = data.respostasQuestionarios['a-conduta-crista'];
            setRespostas({
              q1: salvas['1) Com base na lição, defina o que é a Conduta Cristã:'] || '',
              q2: salvas['2) Quais foram as duas características marcantes atribuídas por Jesus aos Seus discípulos em Mateus 5:13-16?'] || '',
              q3: salvas['3) O que a metáfora da "luz" representa especificamente na vida prática do crente?'] || '',
              q4: salvas['4) O que o "sal" simboliza na vida do cristão e quais as suas duas propriedades descritas na lição?'] || '',
              q5: salvas['5) De que forma sutil o diabo tem agido nestes dias modernos para tentar neutralizar o cristão?'] || ''
            });
          }
        }
      } catch (error) {
        console.error(error);
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
      '1) Com base na lição, defina o que é a Conduta Cristã:': respostas.q1,
      '2) Quais foram as duas características marcantes atribuídas por Jesus aos Seus discípulos em Mateus 5:13-16?': respostas.q2,
      '3) O que a metáfora da "luz" representa especificamente na vida prática do crente?': respostas.q3,
      '4) O que o "sal" simboliza na vida do cristão e quais as suas duas propriedades descritas na lição?': respostas.q4,
      '5) De que forma sutil o diabo tem agido nestes dias modernos para tentar neutralizar o cristão?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'a-conduta-crista': payloadRespostas
        }
      }, { merge: true });

      exibirToast('Respostas salvas com sucesso. Você pode visualizá-las no seu Perfil.', 'success');
    } catch (error) {
      console.error(error);
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
          <span className="licao-badge">Módulo: Transparência Cristã</span>
          <h1>Lição 9: A Conduta Cristã</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "E digo isto, e testifico no Senhor, para que não andeis mais como andam também os outros gentios, na vaidade da sua mente."
            <cite>— Efésios 4:17</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Uma Nova Identidade, uma Nova Postura</h2>
          <p>
            Ao aceitar Jesus como o Salvador da sua vida, você passa a ter uma nova identidade espiritual: torna-se filho de Deus (João 1:12). Como filhos legítimos, devemos nos submeter às condições que Ele nos orientou através da Sua Palavra. Como está escrito em Efésios 5:8: 
            <em> "Porque noutro tempo éreis trevas, mas agora sois luz no Senhor; andai como filhos da luz"</em>. Cognominamos essa atitude prática de <strong>Conduta Cristã</strong>.
          </p>
          <p>
            A conduta cristã fala-nos do comportamento que o Cristão deve exercer em todos os aspectos da sua vida: 
            <strong> social, pública, moral, religiosa e espiritual</strong>. O grande objetivo é fazer com que o nome do Senhor Jesus Cristo seja glorificado através de nossas atitudes (Salmos 103:1-2; 1 Pedro 1:13-16). Em suma, a conduta cristã se resume em <strong>refletirmos o caráter de Cristo</strong> para o mundo.
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>2. Sal da Terra e Luz do Mundo</h2>
          <p>
            Jesus nos deixou a nobre e séria incumbência de sermos o diferencial na sociedade através de duas metáforas poderosas descritas em Mateus 5:13-16:
          </p>

          <div className="quadro-negro-box">
            <p>
              "Vós sois o sal da terra; e se o sal for insípido, com que se há de salgar? Para nada mais presta senão para se lançar fora, e ser pisado pelos homens. Vós sois a luz do mundo; não se pode esconder uma cidade edificada sobre um monte..."
            </p>
            <span className="autor-fonte">— Mateus 5:13-14</span>
          </div>

          <h3>O Significado da Luz</h3>
          <p>
            A <strong>luz</strong> fala diretamente do nosso <strong>testemunho</strong> público. Como cristãos inseridos em uma sociedade em trevas, temos o dever de dar um bom testemunho diante daqueles que nos cercam (1 Timóteo 3:7).
          </p>

          <h3>O Significado do Sal</h3>
          <p>
            O sal (cloreto de sódio) simboliza a <strong>graça de Deus</strong> operando na vida do cristão. Na prática, o texto aponta duas funções vitais para o sal:
          </p>
          
          <ul className="lista-cozy">
            <li>
              <strong>1. O sal como tempero (Dar Sabor):</strong> Serve para dar sabor. O seu excesso pode ser prejudicial e a sua ausência torna o alimento insípido. Espiritualmente, isso nos ensina que o cristão precisa manter um equilíbrio saudável e ter um excelente relacionamento com todas as pessoas (Hebreus 12:14).
            </li>
            <li>
              <strong>2. O sal como conserva (Preservar):</strong> O sal evita a putrefação. Como cristãos, precisamos conservar a nossa comunhão diária com Cristo, mantendo o corpo em santidade, honra (1 Tessalonicenses 4:4) e totalmente livre do domínio e poder do pecado (João 8:36).
            </li>
          </ul>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. A Imutabilidade da Palavra contra as Sutilezas do Inimigo</h2>
          <p>
            O diabo (nosso adversário espiritual) tem agido com extrema sutileza nestes últimos dias. O seu principal desejo é desmoralizar a Igreja e apagar o testemunho dos crentes. 
          </p>
          <p>
            Ele costuma fermentar e espalhar a ideia de que, por estarmos vivendo em um mundo moderno e globalizado, certas práticas que antes eram tidas como pecado, hoje já não fazem mal algum. 
          </p>
          
          <div className="nota-teologica">
            <h3>Isto é uma Mentira!</h3>
            <p>
              A Palavra de Deus é eterna e as Suas doutrinas morais são preceitos imutáveis que não se moldam às eras ou modismos da sociedade.
            </p>
            <p>
              <em>"Passará o céu e a terra, mas as minhas palavras não passarão."</em> — <strong>Mateus 24:35</strong> (Ver também Salmos 119:44, 142).
            </p>
          </div>

          <p>
            Por essa razão, as Escrituras nos alertam com seriedade: 
            <em> "Sede sóbrios e vigiai, pois o diabo, que é o vosso adversário, ele anda ao derredor rugindo como leão buscando a quem possa tragar"</em> (1 Pedro 5:8).
          </p>
          <p>
            Portanto, que possamos manter uma conduta reta e santa para que as pessoas vejam a diferença do brilho de Deus estampado em nossa vida cotidiana.
          </p>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "Então voltareis e vereis a diferença entre o justo e o ímpio; entre o que serve a Deus, e o que não o serve."
            </p>
            <span className="citacao-biblica-ref">— Malaquias 3:18</span>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões com base no texto estudado:</p>
          
          <div className="form-group">
            <label>1) Com base na lição, defina o que é a Conduta Cristã:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Quais foram as duas características marcantes atribuídas por Jesus aos Seus discípulos em Mateus 5:13-16?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) O que a metáfora da "luz" representa especificamente na vida prática do crente?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O que o "sal" simboliza na vida do cristão e quais as suas duas propriedades descritas na lição?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) De que forma sutil o diabo tem agido nestes dias modernos para tentar neutralizar o cristão?</label>
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
                <li><strong>R1:</strong> É o comportamento santo que o Cristão deve exercer em todas as esferas da vida (social, pública, moral, religiosa e espiritual), visando refletir o caráter de Cristo e glorificar o nome do Senhor.</li>
                <li><strong>R2:</strong> "Sal da terra" e "Luz do mundo".</li>
                <li><strong>R3:</strong> Representa o nosso testemunho público diário, que deve resplandecer diante dos homens através de boas obras.</li>
                <li><strong>R4:</strong> Simboliza a graça de Deus. Suas duas propriedades são: 1) Temperar (equilíbrio e bom relacionamento com o próximo) e 2) Conservar (manter a comunhão com Cristo e o corpo em santidade).</li>
                <li><strong>R5:</strong> Ele tenta relativizar o pecado, utilizando o pretexto da modernidade e da globalização para fazer parecer que as doutrinas bíblicas não se aplicam aos dias de hoje.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}