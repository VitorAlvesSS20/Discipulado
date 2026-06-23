import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao4({ onVoltar }: LicaoProps) {
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
          // ALTERADO: Mudado de 'licao-4' para 'o-espirito-santo'
          if (data.respostasQuestionarios && data.respostasQuestionarios['o-espirito-santo']) {
            const salvas = data.respostasQuestionarios['o-espirito-santo'];
            setRespostas({
              q1: salvas['1) Cite três evidências bíblicas ou características que provam que o Espírito Santo é uma Pessoa e não uma força da natureza:'] || '',
              q2: salvas['2) Qual é a missão prioritária do Espírito Santo atualmente na terra em relação ao mundo?'] || '',
              q3: salvas['3) Quais são os 7 símbolos bíblicos atribuídos ao Espírito Santo mencionado nesta lição?'] || '',
              q4: salvas['4) Qual é a diferença prática entre a experiência do "Batismo com o Espírito Santo" e a "Plenitude do Espírito Santo"?'] || '',
              q5: salvas['5) O que se entende por "blasfêmia contra o Espírito Santo" segundo o contexto bíblico apresentado?'] || ''
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
      '1) Cite três evidências bíblicas ou características que provam que o Espírito Santo é uma Pessoa e não uma força da natureza:': respostas.q1,
      '2) Qual é a missão prioritária do Espírito Santo atualmente na terra em relação ao mundo?': respostas.q2,
      '3) Quais são os 7 símbolos bíblicos atribuídos ao Espírito Santo mencionado nesta lição?': respostas.q3,
      '4) Qual é a diferença prática entre a experiência do "Batismo com o Espírito Santo" e a "Plenitude do Espírito Santo"?': respostas.q4,
      '5) O que se entende por "blasfêmia contra o Espírito Santo" segundo o contexto bíblico apresentado?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'o-espirito-santo': payloadRespostas // ALTERADO: Mudado de 'licao-4' para 'o-espirito-santo'
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
          <span className="licao-badge">Módulo: Doutrinas</span>
          <h1>Lição 4: O Espírito Santo</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Não vos deixarei órfãos; voltarei para vós."
            <cite>— João 14:18</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Quem é o Espírito Santo?</h2>
          <p>
            Antes de Jesus ser assunto aos céus, disse aos seus discípulos que não os deixaria 
            órfãos, antes, enviaria o Espírito Santo, para estar conosco e habitar em nossos corações 
            (João 14:18). Portanto, o Espírito Santo é o <strong>"substituto" de Cristo na terra</strong> (João 14:16).
          </p>
          <p>
            Muitos pensam equivocadamente que o Espírito Santo é apenas uma força ativa da natureza ou um produto do 
            pentecostalismo. No entanto, a Bíblia o apresenta claramente como uma <strong>Pessoa</strong>:
          </p>

          <ul className="lista-cozy">
            <li><strong>Possui nome próprio:</strong> Consolador (João 15:26).</li>
            <li><strong>Possui personalidade:</strong> (João 16:7).</li>
            <li><strong>Possui sentimentos:</strong> (Efésios 4:30; Tiago 4:5; Romanos 14:17).</li>
            <li>
              <strong>Possui ofícios:</strong> Ele é Mestre na arte de ensinar (João 14:26); Agenciador 
              missionário (Atos 13:2, 4); Conselheiro (Atos 15:28); e Embaixador (Romanos 8:26).
            </li>
          </ul>

          <div className="licao-imagem-wrapper">
            <img 
              src="https://i.pinimg.com/736x/cd/49/58/cd49583b69df0a942072dc445937977d.jpg" 
              alt="Ilustração do Espírito Santo" 
              className="licao-imagem"
            />
          </div>

          <p>
            Atualmente, o Espírito Santo está na terra, habitando no coração de todos os que 
            receberam Cristo Jesus como seu salvador (João 14:17). Sua missão prioritária é <strong>convencer o 
            mundo do pecado, da justiça e do juízo</strong> (João 16:8-11). É Éle quem nos capacita para 
            pregarmos o Evangelho (Lucas 12:12), nos ajuda em nossas fraquezas e intercede por nós 
            junto ao Pai com gemidos inexprimíveis (Romanos 8:26).
          </p>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>2. Símbolos do Espírito Santo</h2>
          <p>
            Para ilustrar Seu caráter, Seus efeitos e Sua atuação multiforme, a Bíblia utiliza diversos símbolos e figuras:
          </p>

          <div className="tabela-cozy-wrapper">
            <table className="tabela-cozy">
              <thead>
                <tr>
                  <th>Símbolo</th>
                  <th>Referência Bíblica</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>Água</strong></td><td>Tito 3:5</td></tr>
                <tr><td><strong>Pomba</strong></td><td>Mateus 3:16</td></tr>
                <tr><td><strong>Vento</strong></td><td>João 3:8</td></tr>
                <tr><td><strong>Fogo</strong></td><td>Salmos 78:14</td></tr>
                <tr><td><strong>Chuva</strong></td><td>Salmos 72:6</td></tr>
                <tr><td><strong>Óleo</strong></td><td>Isaías 61:1</td></tr>
                <tr><td><strong>Penhor</strong></td><td>2 Coríntios 1:22</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. O Batismo no Espírito Santo</h2>
          <p>
            O batismo com o Espírito Santo é uma das experiências mais glorórias na vida de um 
            cristão. É uma capacitação sobrenatural dada por Deus ao crente objetivando 
            <strong> poder, graça e ousadia na Palavra</strong>, para o cumprimento do imperativo de pregar o Evangelho (Marcos 16:15; Atos 1:8).
          </p>

          <div className="nota-teologica">
            <h3>Diferenças Importantes:</h3>
            <ul>
              <li><strong>Batismo vs. Plenitude:</strong> O Batismo refere-se ao revestimento de poder para um fim específico (Lucas 24:49; Atos 1:8). A Plenitude refere-se à "dose plena" do Espírito Santo na vida diária daquele que crê (João 14:17).</li>
              <li><strong>Batismo com o Espírito vs. Batismo em Águas:</strong> O batismo em águas simboliza o "sepultamento de pecados". O batismo com o Espírito representa "revestimento de poder". Uma pessoa pode, inclusive, receber o batismo no Espírito antes de passar pelas águas (Atos 10:44-47).</li>
            </ul>
          </div>

          <p>
            <strong>Como saber se foi batizado?</strong> O batismo com o Espírito Santo é inicialmente evidenciado pelo 
            <strong> "falar em outras línguas"</strong> (Atos 2:4). Essas línguas são de natureza divina e, em alguns casos, podem ser humanas, tornando-se "estranhas" apenas para quem as profere (Atos 2:7-8).
          </p>

          <h3>Propósitos do Batismo:</h3>
          <ol className="lista-cozy">
            <li>Revestimento de Poder (Atos 1:8);</li>
            <li>Glorificar o nome do Senhor (Atos 2:11);</li>
            <li>Edificação pessoal (1 Coríntios 14:4).</li>
          </ol>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>4. Requisitos e o Alerta sobre a Blasfêmia</h2>
          <p>
            Sendo o batismo uma promessa, precisamos buscá-lo ativamente através de três pilares básicos:
          </p>

          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>1. Arrependimento</h4>
              <p>O passo inicial. Um coração quebrantado e contrito agrada ao Senhor (Atos 2:38; Salmos 51:17).</p>
            </div>
            <div className="pilar-card">
              <h4>2. Perseverança</h4>
              <p>Buscar sem desanimar, assim como os discípulos que esperaram fielmente em Jerusalém (Lucas 24:49).</p>
            </div>
            <div className="pilar-card">
              <h4>3. Fé</h4>
              <p>A ponte para o sobrenatural. É necessário crer que ele existe, e que é galardoador dos que o buscam (Hebreus 11:6).</p>
            </div>
          </div>

          <div className="quadro-negro-box">
            <h3>Aviso: A Blasfêmia contra o Espírito Santo</h3>
            <p>
              Jesus advertiu que todo pecado será perdoado, exceto a blasfêmia contra o Espírito Santo (Marcos 3:29; Lucas 12:10). 
              Ela ocorre quando alguém atribui de forma deliberada as obras puras do Espírito Santo como sendo de origem maligna ou de responsabilidade do diabo.
            </p>
            <span className="autor-fonte">— Advertência de Cristo (Marcos 3:22-30)</span>
          </div>

          <p>
            O Espírito Santo é um ser sensível; por isso, não devemos entristecê-lo (Efésios 4:30). É Ele quem nos 
            conduzirá perfeitamente ante a presença de Cristo no dia da Sua gloriosa vinda (Apocalipse 22:17). 
            <em> Maranata — Ora, vem, Senhor Jesus!</em>
          </p>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo com base nos ensinamentos da Lição 4:</p>
          
          <div className="form-group">
            <label>1) Cite três evidências bíblicas ou características que provam que o Espírito Santo é uma Pessoa e não uma força da natureza:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Qual é a missão prioritária do Espírito Santo atualmente na terra em relação ao mundo?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Quais são os 7 símbolos bíblicos atribuídos ao Espírito Santo mencionados nesta lição?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Qual é a diferença prática entre a experiência do "Batismo com o Espírito Santo" e a "Plenitude do Espírito Santo"?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) O que se entende por "blasfêmia contra o Espírito Santo" segundo o contexto bíblico apresentado?</label>
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
                <li><strong>R1:</strong> Possui nome próprio (Consolador), possui personalidade, possui sentimentos ou possui ofícios (Mestre, Conselheiro, etc.).</li>
                <li><strong>R2:</strong> Convencer o mundo do pecado, da justiça e do juízo (João 16:8-11).</li>
                <li><strong>R3:</strong> Água, Pomba, Vento, Fogo, Chuva, Óleo e Penhor.</li>
                <li><strong>R4:</strong> O Batismo é o revestimento sobrenatural de poder para um fim específico; já a Plenitude é a comunhão e habitação na "dose plena" do Espírito na vida diária do crente.</li>
                <li><strong>R5:</strong> É o ato de atribuir de forma consciente as obras do Espírito Santo ao diabo ou a forças malignas.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}