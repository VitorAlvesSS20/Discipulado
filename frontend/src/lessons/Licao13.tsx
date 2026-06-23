import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';
import imagemBatismo from '../assets/batismo.jpg';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao13({ onVoltar }: LicaoProps) {
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
          if (data.respostasQuestionarios && data.respostasQuestionarios['o-batismo-em-aguas']) {
            const salvas = data.respostasQuestionarios['o-batismo-em-aguas'];
            setRespostas({
              q1: salvas['1) Qual é o significado original da palavra "batismo" e qual forma física ele exige devido a esse significado?'] || '',
              q2: salvas['2) O batismo em águas possui o poder de salvar o homem? Justifique com base no texto estudado:'] || '',
              q3: salvas['3) Teologicamente, o que simbolizam a morte, o sepultamento e a ressurreição no ato da imersão?'] || '',
              q4: salvas['4) Por que o exemplo de Jesus sendo batizado aos trinta anos serve de argumento contra o batismo de recém-nascidos?'] || '',
              q5: salvas['5) Quais são os três requisitos essenciais que o candidato precisa apresentar antes de se batizar?'] || ''
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
      '1) Qual é o significado original da palavra "batismo" e qual forma física ele exige devido a esse significado?': respostas.q1,
      '2) O batismo em águas possui o poder de salvar o homem? Justifique com base no texto estudado:': respostas.q2,
      '3) Teologicamente, o que simbolizam a morte, o sepultamento e a ressurreição no ato da imersão?': respostas.q3,
      '4) Por que o exemplo de Jesus sendo batizado aos trinta anos serve de argumento contra o batismo de recém-nascidos?': respostas.q4,
      '5) Quais são os três requisitos essenciais que o candidato precisa apresentar antes de se batizar?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'o-batismo-em-aguas': payloadRespostas
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
          <h1>Lição 13: O Batismo em Águas</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Portanto, ide, ensinai todas as nações, batizando-as em nome do Pai, e do Filho, e do Espírito Santo."
            <cite>— Mateus 28:19</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O Significado e a Ordem do Batismo</h2>
          <p>
            O batismo em águas é uma das ordenanças sagradas deixadas pelo Senhor Jesus Cristo para a Sua Igreja. 
            Mais do que um rito, ele simboliza o novo nascimento espiritual e a regeneração operada pelo Espírito Santo 
            na vida daqueles que aceitam a Cristo e desejam professar publicamente a sua fé (João 3:5-6; Tito 3:5).
          </p>
          <p>
            Embora dicionários comuns definam o batismo como um sacramento para afastar o pecado original, o significado da 
            palavra original grega (<em>baptizo</em>) é <strong>mergulhar ou imergir</strong>. 
          </p>
          
          <div className="licao-imagem-wrapper">
            <img src={imagemBatismo} alt="Simbolismo do Batismo em Águas" className="licao-imagem" />
          </div>

          {/* Corrigido aqui: adicionado o caractere '<' omitido anteriormente */}
          <blockquote className="doutrina-fundamental-box">
            <strong>Doutrina Fundamental:</strong> O batismo não tem poder de salvar (a salvação vem unicamente pela graça mediante a fé, conforme João 3:16 e Atos 4:12). Se um crente, por circunstâncias imprevistas, falecer antes de descer às águas, sua posição de salvo permanece inalterada. Contudo, negligenciar voluntariamente o batismo é desobedecer a uma ordem direta de Jesus (Marcos 16:16).
          </blockquote>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. A Importância e os Exemplos Bíblicos</h2>
          <p>O batismo em águas funciona na vida da igreja local como uma espécie de "registro de nascimento". Ele é indispensável para:</p>
          <ul className="lista-cozy">
            <li><strong>Cumprir o mandamento divino:</strong> Alinhando-se à ordem expressa de Cristo (Mateus 28:19).</li>
            <li><strong>Identificação como discípulo:</strong> Tornar-se publicamente associado ao nome de Jesus.</li>
            <li><strong>Integração e Comunhão:</strong> Unir-se formalmente ao Corpo de Cristo e à congregação local (1 Coríntios 12; Hebreus 10:25).</li>
            <li><strong>Direitos Congregacionais:</strong> Habilitar o crente a usufruir da Santa Ceia, exercer ministérios e assumir lideranças locais.</li>
          </ul>

          <h3>O Exemplo Prático na Igreja Primitiva:</h3>
          <p>A igreja no livro de Atos batizava imediatamente aqueles que abraçavam a fé consciente:</p>
          <ul>
            <li>Os três mil convertidos no dia de Pentecostes (Atos 2:41).</li>
            <li>Os samaritanos e o oficial etíope batizados por Filipe (Atos 8:12, 38).</li>
            <li>Os primeiros gentios na casa de Cornélio (Atos 10:48).</li>
            <li>Lídia e o carcereiro de Filipos com suas respectivas famílias (Atos 16:15, 33).</li>
          </ul>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Características Físicas e Teológicas</h2>
          <p>O batismo bíblico possui regras e simbolismos muito claros que precisam ser respeitados:</p>
          
          <div className="nota-teologica">
            <h3>A Fórmula e a Forma:</h3>
            <p><strong>A Fórmula:</strong> Deve ser ministrado estritamente em nome do Pai, do Filho e do Espírito Santo (Mateus 28:19).</p>
            <p><strong>A Forma (Imersão Completa):</strong> O ato exige água em volume suficiente para cobrir o candidato (Romanos 6:4). Esse movimento retrata três realidades espirituais:</p>
            <ol>
              <li><strong>Morte:</strong> Declaramos que não comungamos mais com os desejos e práticas deste mundo.</li>
              <li><strong>Sepultamento:</strong> Enterramos em definitivo o controle da nossa velha natureza pecaminosa.</li>
              <li><strong>Ressurreição:</strong> Emergimos das águas apontando para uma nova vida focada na obediência a Cristo.</li>
            </ol>
          </div>

          <p>
            <strong>O Exemplo de Jesus:</strong> O próprio Senhor Jesus se submeteu ao batismo por imersão aos trinta anos de idade pelas mãos de João Batista para "cumprir toda a justiça" (Mateus 3:13-16). Esse fato reforça que o batismo requer consciência plena, o que invalida a prática em bebês ou crianças pequenas.
          </p>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>4. Requisitos para o Candidato</h2>
          <p>Para descer às águas batismais, a liderança da igreja observa passos elementares na vida do novo convertido:</p>
          <ul className="lista-cozy">
            <li><strong>Arrependimento sincero:</strong> Reconhecer os pecados e abandoná-los (Atos 2:38; 3:19).</li>
            <li><strong>Fé consciente em Jesus:</strong> Crer de todo o coração que Cristo é o único Salvador, sem pressões externas (Marcos 16:16).</li>
            <li><strong>Assimilação da Doutrina:</strong> Compreender os fundamentos básicos da fé cristã, bem como assumir os deveres práticos com a comunidade local (contribuição, costumes e serviço).</li>
          </ul>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões com base no estudo do Batismo em Águas:</p>
          
          <div className="form-group">
            <label>1) Qual é o significado original da palavra "batismo" e qual forma física ele exige devido a esse significado?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) O batismo em águas possui o poder de salvar o homem? Justifique com base no texto estudado:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Teologicamente, o que simbolizam a morte, o sepultamento e a ressurreição no ato da imersão?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Por que o exemplo de Jesus sendo batizado aos trinta anos serve de argumento contra o batismo de recém-nascidos?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Quais são os três requisitos essenciais que o candidato precisa apresentar antes de se batizar?</label>
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
                <li><strong>R1:</strong> Significa "mergulhar" ou "imergir". Ele exige a imersão completa do corpo em um volume de água que cubra totalmente o candidato.</li>
                <li><strong>R2:</strong> Não, o batismo não salva. A salvação é obtida pela graça mediante a fé em Jesus. O batismo serves como uma profissão pública dessa fé e obediência já iniciadas no coração.</li>
                <li><strong>R3:</strong> A morte simboliza o rompimento com o pecado do mundo; o sepultamento representa a renúncia total à vida velha; a ressurreição aponta para uma nova vida em sujeição e obediência a Cristo.</li>
                <li><strong>R4:</strong> Porque demonstra que o batismo exige consciência plena, arrependimento pessoal e decisão de fé voluntária, capacidades que um bebê ou criança inconsciente não possuem.</li>
                <li><strong>R5:</strong> Arrependimento sincero, crer em Jesus Cristo de inteiro coração e assimilar os pontos elementares e compromissos da doutrina bíblica local.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}