import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao8({ onVoltar }: LicaoProps) {
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
          if (data.respostasQuestionarios && data.respostasQuestionarios['o-cristao']) {
            const salvas = data.respostasQuestionarios['o-cristao'];
            setRespostas({
              q1: salvas['1) De acordo com a lição, o que verdadeiramente significa ser um Cristão?'] || '',
              q2: salvas['2) Em qual cidade histórica os discípulos foram chamados de Cristãos pela primeira vez?'] || '',
              q3: salvas['3) Qual é a definição teológica de "Igreja" apresentada no texto?'] || '',
              q4: salvas['4) Quais são os três principais símbolos ou comparações da Igreja encontrados na Bíblia?'] || '',
              q5: salvas['5) Escreva com suas palavras qual deve ser a sua relação prática diária com a Igreja local:'] || ''
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
      '1) De acordo com a lição, o que verdadeiramente significa ser um Cristão?': respostas.q1,
      '2) Em qual cidade histórica os discípulos foram chamados de Cristãos pela primeira vez?': respostas.q2,
      '3) Qual é a definição teológica de "Igreja" apresentada no texto?': respostas.q3,
      '4) Quais são os três principais símbolos ou comparações da Igreja encontrados na Bíblia?': respostas.q4,
      '5) Escreva com suas palavras qual deve ser a sua relação prática diária com a Igreja local:': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'o-cristao': payloadRespostas
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
          <h1>Lição 8: O Cristão</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "E sucedeu que todo um ano se reuniram naquela igreja, e ensinaram muita gente; e em Antioquia foram os discípulos, pela primeira vez, chamados cristãos."
            <cite>— Atos 11:26</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O que Significa ser um Cristão?</h2>
          <p>
            O que nos torna verdadeiramente cristãos não é o simples fato de possuirmos uma Bíblia, nem tampouco por 
            frequentarmos os cultos de uma determinada denominação evangélica. Ser cristão vai muito além do mero 
            cumprimento de regras de uma religião: <strong>ser Cristão é servir e seguir a Cristo de coração.</strong>
          </p>
          <p>
            Quando a igreja primitiva nasceu no dia de Pentecostes (por volta do ano 30 d.C., conforme registrado em Atos 2), 
            dos discípulos ainda não possuíam esse codinome. Somente por volta do ano 43 d.C., na cidade de 
            <strong> Antioquia</strong>, é que os seguidores de Jesus foram chamados pela primeira vez de "Cristãos" (Atos 11:26).
          </p>

          <div className="nota-teologica">
            <h3>Como se tornar um Cristão?</h3>
            <p>
              Você precisa, primeiramente, receber a Cristo Jesus em sua vida por meio de uma decisão de aceitação pública e sincera:
            </p>
            <p>
              <em>"Se com a tua boca confessares ao Senhor Jesus, e em teu coração creres que Deus o ressuscitou dentre os mortos, serás salvo."</em> — <strong>Romanos 10:9</strong>
            </p>
          </div>

          <p>
            O Cristão é aquela pessoa que se submete voluntariamente aos ensinos de Jesus e molda a sua vida conforme as 
            orientações deixadas por Ele na Sua Palavra (João 8:31-32). Ao se tornar um cristão genuíno, você passa automaticamente 
            a fazer parte da família espiritual de Jesus: a Sua <strong>Igreja</strong>.
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>2. O Que é A Igreja?</h2>
          <p>
            Denomina-se <strong>Igreja</strong> o corpo místico de Cristo (Colossenses 1:18). Trata-se do grupo de pessoas 
            lavadas e remidas pelo sangue de Jesus, que experimentaram e assumiram a salvação. 
          </p>
          <p>
            Sob a perspectiva teológica, não tratamos a igreja no âmbito individual, pois individualmente somos apenas 
            membros (1 Coríntios 12:19). Coletivamente, porém, organizados em unidade, nós formamos o corpo de Cristo (1 Coríntios 12:20).
          </p>

          <blockquote>
            <strong>Esclarecimento de Expressão:</strong> Por força do hábito, costumamos chamar o templo físico de "Igreja". 
            Esse conceito não está totalmente errado, desde que seja compreendido sob o ponto de vista de uma 
            <strong> organização</strong> (instituição, local de reunião) e não como o <strong>organismo</strong> vivo (que somos nós, os salvos).
          </blockquote>

          <p>
            Apesar de existirem inúmeras denominações históricas e contemporâneas (como Assembleia de Deus, Batista, Quadrangular, etc.), 
            la Igreja de Cristo em essência é <strong>única</strong> (Efésios 4:4), composta por milhares de membros espalhados por todo o mundo, 
            incluindo aqueles que já dormiram no Senhor na esperança da ressurreição (1 Tessalonicenses 4:13-17).
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. A Igreja e Seus Símbolos</h2>
          <p>
            Para nos ajudar a compreender o papel e a profundidade da Igreja, as Escrituras Sagradas utilizam algumas analogias e símbolos representativos. Veja os três principais:
          </p>

          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>1. Noiva de Cristo</h4>
              <p>Simboliza o amor, a fidelidade, a união futura e a santidade com a qual a Igreja se guarda para o seu Noivo celestial (Efésios 5:24-27).</p>
            </div>
            <div className="pilar-card">
              <h4>2. Templo de Deus</h4>
              <p>Representa a morada do Espírito Santo na Terra, edificada sobre o fundamento dos apóstolos e profetas (1 Coríntios 3:16; Efésios 2:20-22).</p>
            </div>
            <div className="pilar-card">
              <h4>3. Corpo de Cristo</h4>
              <p>Indica a interdependência mútua dos membros e a total submissão a Cristo, que é a Cabeça e o líder supremo (1 Coríntios 12:14-27).</p>
            </div>
          </div>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "Posso todas as coisas naquele que me fortalece."
            </p>
            <span className="citacao-biblica-ref">— Filipenses 4:13</span>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo para fixação do aprendizado da Lição 8:</p>
          
          <div className="form-group">
            <label>1) De acordo com a lição, o que verdadeiramente significa ser um Cristão?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Em qual cidade histórica os discípulos foram chamados de Cristãos pela primeira vez?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Qual é a definição teológica de "Igreja" apresentada no texto?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Quais são os três principais símbolos ou comparações da Igreja encontrados na Bíblia?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Escreva com suas palavras qual deve ser a sua relação prática diária com a Igreja local:</label>
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
                <li><strong>R1:</strong> Significa ir além de regras religiosas ou carregar uma Bíblia; ser cristão é servir e seguir a Cristo, submetendo-se à Sua Palavra.</li>
                <li><strong>R2:</strong> Na cidade de Antioquia, por volta do ano 43 d.C. (Atos 11:26).</li>
                <li><strong>R3:</strong> É o corpo místico de Cristo; um organismo vivo composto pelo grupo de pessoas lavadas e remidas pelo sangue de Jesus que experimentaram a salvação.</li>
                <li><strong>R4:</strong> 1) Noiva de Cristo; 2) Templo (morada) de Deus; 3) Corpo de Cristo.</li>
                <li><strong>R5:</strong> Resposta Pessoal (Espera-se que o discípulo compreenda que, como membro individual, ele deve atuar em unidade, comunhão, amor e submissão à liderança de Cristo).</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}