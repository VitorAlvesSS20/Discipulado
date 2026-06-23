import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao10({ onVoltar }: LicaoProps) {
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
          if (data.respostasQuestionarios && data.respostasQuestionarios['a-oracao']) {
            const salvas = data.respostasQuestionarios['a-oracao'];
            setRespostas({
              q1: salvas['1) O que é a oração e por que ela é considerada um diálogo e não um monólogo?'] || '',
              q2: salvas['2) Quais são as três condições fundamentais para que uma oração seja aceita por Deus?'] || '',
              q3: salvas['3) O posicionamento físico do corpo (como estar em pé ou de joelhos) determina a qualidade da nossa oração? Justifique:'] || '',
              q4: salvas['4) Cite pelo menos três obstáculos mencionados no texto que impedem o sucesso de uma oração:'] || '',
              q5: salvas['5) Explique o que acontece de forma prática quando pedimos "paciência" ou "força" a Deus nas nossas orações:'] || ''
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
      '1) O que é a oração e por que ela é considerada um diálogo e não um monólogo?': respostas.q1,
      '2) Quais são as três condições fundamentais para que uma oração seja aceita por Deus?': respostas.q2,
      '3) O posicionamento físico do corpo (como estar em pé ou de joelhos) determina a qualidade da nossa oração? Justifique:': respostas.q3,
      '4) Cite pelo menos três obstáculos mencionados no texto que impedem o sucesso de uma oração:': respostas.q4,
      '5) Explique o que acontece de forma prática quando pedimos "paciência" ou "força" a Deus nas nossas orações:': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'a-oracao': payloadRespostas
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
          <h1>Lição 10: A Oração</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Pedis, e não recebeis, porque pedis mal..."
            <cite>— Tiago 4:3</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O que é Oração?</h2>
          <p>
            Saber orar é algo fundamental para aqueles que se tornam discípulos de Cristo, pois a oração é o principal meio de comunicação do homem com Deus.
          </p>
          <p>
            Teologicamente, a oração é uma prece ou súplica dirigida diretamente ao Criador (Salmos 65:2; 141:2; Provérbios 15:29). 
            <strong> A oração não é um monólogo, e sim um diálogo</strong> (Jeremias 33:3). Quando oramos, conversamos com Deus, que se inclina para nos ouvir e nos responder.
          </p>
          <p>
            É falar com o Pai, é adoração, é cultuar. Ela funciona para o crente como uma chave que abre as portas dos tesouros celestiais que nos foram oferecidos por meio do sacrifício de Jesus Cristo.
          </p>

          <h3>Como deve ser a oração?</h3>
          <ul className="lista-cozy">
            <li><strong>Sincera:</strong> Feita de coração limpo e verdadeiro (Hebreus 10:22).</li>
            <li><strong>Com Fé:</strong> Dirigida com a certeza de que Ele nos ouve (Hebreus 11:6; Mateus 21:22).</li>
            <li><strong>No Nome de Jesus:</strong> Pautada e respaldada na autoridade do Filho (João 16:23-24).</li>
          </ul>

          <h3>Tipos de Orações Existentes:</h3>
          <p>A Bíblia nos mostra diferentes formas e contextos de oração:</p>
          <ul>
            <li><strong>Oração Oculta:</strong> Aquela que brota da alma, às vezes sem palavras audíveis (1 Samuel 1:12-13).</li>
            <li><strong>Oração Secreta:</strong> No secreto do quarto, focada na intimidade particular com Deus (Mateus 6:5-6).</li>
            <li><strong>Oração Pública:</strong> Feita de forma coletiva, no templo ou reuniões (Lucas 18:10-14).</li>
            <li><strong>Oração Intercessora:</strong> Quando clamamos em favor e na direção da vida de outras pessoas (Jó 42:8; 1 Timóteo 2:1).</li>
          </ul>

          <blockquote>
            <strong>Sobre a postura física:</strong> Há um jargão popular que diz: <em>"De joelhos é melhor!"</em>. No entanto, as Escrituras nos mostram variantes: de joelhos (1 Reis 8:54), prostrado (Gênesis 24:26-27), em pé (1 Reis 8:14) ou assentado (Atos 2:1-4). 
            <strong> O posicionamento físico não dita a qualidade da oração;</strong> o fator determinante é se aproximar com sinceridade, fé e devoção.
          </blockquote>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. O Modelo de Como Orar (Mateus 6:5-15)</h2>
          <p>Jesus nos deixou orientações claras sobre como nos comunicar com Deus de forma eficaz:</p>
          
          <ul className="lista-cozy">
            <li><strong>"Não como os hipócritas" (v. 5):</strong> Os religiosos da época queriam ser vistos e ovacionados pelos homens. A nossa oração deve buscar unicamente a atenção de Deus.</li>
            <li><strong>"Entra no teu aposento e fecha a porta" (v. 6):</strong> Retrata a necessidade de intimidade. Devemos também fechar a porta da nossa mente para as dúvidas, ansiedades e a incredulidade.</li>
            <li><strong>"Não useis de vãs repetições" (v. 7):</strong> Rezas repetitivas e mecânicas não têm valor, pois o Pai não é impressionado por discursos longos e vazios.</li>
            <li><strong>"Vosso Pai sabe do que necessitais" (v. 8):</strong> Reflete a total <em>onisciência</em> de Deus. Ele já nos conhece perfeitamente.</li>
          </ul>

          <div className="nota-teologica">
            <h3>As Diretrizes da Oração Dominical (O Pai Nosso):</h3>
            <p>Jesus estabeleceu um roteiro equilibrado contendo os seguintes pilares fundamentais:</p>
            <ol>
              <li><strong>Adoração:</strong> <em>"Pai nosso que estás no céu"</em> (v. 9)</li>
              <li><strong>Reverência:</strong> <em>"Santificado seja o teu nome"</em> (v. 9)</li>
              <li><strong>Súplicas:</strong> <em>"Venha o teu reino"</em> (v. 10)</li>
              <li><strong>Rogos:</strong> <em>"Seja feita a tua vontade"</em> (v. 10)</li>
              <li><strong>Provisão:</strong> <em>"O pão nosso de cada dia dai-nos hoje"</em> (v. 11)</li>
              <li><strong>Perdão:</strong> <em>"Perdoe as nossas dívidas"</em> (v. 12)</li>
              <li><strong>Amor ao próximo:</strong> <em>"Assim como perdoamos os nossos devedores"</em> (v. 12)</li>
              <li><strong>Proteção:</strong> <em>"Não nos deixes cair em tentação"</em> (v. 13)</li>
              <li><strong>Livramento:</strong> <em>"Livra-nos do mal"</em> (v. 13)</li>
              <li><strong>Soberania:</strong> <em>"Teu é o reino, o poder e a glória para sempre"</em> (v. 13)</li>
            </ol>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Onde, Quando, Por Quem Orar e os Obstáculos</h2>
          
          <p><strong>Onde orar?</strong> No quarto (Mt 6:6), no Templo (At 3:1) e em qualquer lugar (Jn 2:1).</p>
          <p><strong>Quando orar?</strong> Na prosperidade, na adversidade, na enfermidade, enfrentando perigos, tempos de trevas e necessidades. Em resumo: <strong>Sempre e em todo o tempo</strong> (1 Ts 5:17; Ef 6:18).</p>
          <p><strong>Por quem orar?</strong> Pelas autoridades no poder (1 Tm 2:2), pelo próximo (Jo 17:20), pelos inimigos (Mt 5:44) e por todos os homens.</p>

          <div className="quadro-negro-box">
            <h4>Obstáculos que bloqueiam a Oração:</h4>
            <p>Fique atento para não permitir que estes fatores impeçam as suas respostas:</p>
            <ul>
              <li>Dúvida e oscilação na fé (Marcos 11:24; Tiago 1:6-7)</li>
              <li>Indisposição para perdoar os outros (Marcos 11:25)</li>
              <li>Iniquidade e pecado guardado com prazer no coração (Salmos 66:18)</li>
              <li>Pedir fora da perfeita vontade de Deus (1 João 5:14)</li>
              <li>Falta de perseverança e insistência (Daniel 10:12; Mateus 7:7-8)</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>4. Conclusão e os Mananciais de Resposta</h2>
          <p>
            Nem sempre as respostas de Deus às nossas orações vêm da forma imediata ou agradável que imaginamos, mas o objetivo final dEle é sempre nos amadurecer e nos encher de bênçãos eternas:
          </p>
          <ul className="lista-cozy">
            <li>Quando pedimos <strong>paciência</strong>, surgem tribulações, pois é através da tribulação que a paciência é produzida (Romanos 5:3).</li>
            <li>Quando pedimos <strong>submissão e obediência</strong>, surgem sofrimentos e testes, pois foi sofrendo que o próprio Jesus aprendeu a obediência (Hebreus 5:8).</li>
            <li>Quando pedimos <strong>vitória</strong>, vêm as lutas, pois não há vitória sem que antes haja uma batalha travada (1 João 5:4).</li>
            <li>Quando pedimos <strong>forças</strong>, surgem momentos de fraqueza, porque é exatamente na nossa fraqueza que o poder divino se aperfeiçoa (2 Coríntios 12:9).</li>
          </ul>
          <p>
            O cristão que ora compreende que não pode viver sem Deus. Portanto, remova todos os obstáculos e use diariamente essa chave para abrir os tesouros celestiais!
          </p>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às perguntas com base no conteúdo estudado:</p>
          
          <div className="form-group">
            <label>1) O que é a oração e por que ela é considerada um diálogo e não um monólogo?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Quais são as três condições fundamentais para que uma oração seja aceita por Deus?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) O posicionamento físico do corpo (como estar em pé ou de joelhos) determina a qualidade da nossa oração? Justifique:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Cite pelo menos três obstáculos mencionados no texto que impedem o sucesso de uma oração:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Explique o que acontece de forma prática quando pedimos "paciência" ou "força" a Deus nas nossas orações:</label>
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
                <li><strong>R1:</strong> A oração é uma prece ou súplica dirigida a Deus. É um diálogo porque envolve falar com Deus, sabendo que Ele nos ouve e nos responde de forma ativa.</li>
                <li><strong>R2:</strong> Deve ser sincera (Hebreus 10:22), dirigida com fé (Hebreus 11:6) e pautada no nome de Jesus (João 16:23-24).</li>
                <li><strong>R3:</strong> Não influencia. O fator determinante não é a posição do corpo físico, mas sim aproximar-se do Senhor com sinceridade de coração, fé ativa e verdadeira devoção.</li>
                <li><strong>R4:</strong> A dúvida/incredulidade, a indisposição para perdoar o próximo e guardar iniquidade/pecado no coração (ou orar fora da vontade de Deus / falta de perseverança).</li>
                <li><strong>R5:</strong> Deus nos envia as situações corretas para desenvolver essas virtudes: para gerar paciência Ele permite que venham tribulações; para aperfeiçoar a força Ele permite que sintamos fraquezas, fazendo Seu poder se manifestar.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}