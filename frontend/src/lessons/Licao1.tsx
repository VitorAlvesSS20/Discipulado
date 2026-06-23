import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao1({ onVoltar }: LicaoProps) {
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
          // ALTERADO: Mudado de 'licao-1' para 'a-biblia'
          if (data.respostasQuestionarios && data.respostasQuestionarios['a-biblia']) {
            const salvas = data.respostasQuestionarios['a-biblia'];
            setRespostas({
              q1: salvas['1) Mencione, pelo menos, três títulos dados à Bíblia:'] || '',
              q2: salvas['2) Quais os idiomas originais em que a Bíblia foi escrita?'] || '',
              q3: salvas['3) O que significa o vocábulo Bíblia?'] || '',
              q4: salvas['4) Em quantos anos aproximadamente a Bíblia foi formada?'] || '',
              q5: salvas['5) Quantos escritores humanos participaram da escrita da Bíblia?'] || ''
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
      '1) Mencione, pelo menos, três títulos dados à Bíblia:': respostas.q1,
      '2) Quais os idiomas originais em que a Bíblia foi escrita?': respostas.q2,
      '3) O que significa o vocábulo Bíblia?': respostas.q3,
      '4) Em quantos anos aproximadamente a Bíblia foi formada?': respostas.q4,
      '5) Quantos escritores humanos participaram da escrita da Bíblia?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'a-biblia': payloadRespostas // ALTERADO: Mudado de 'licao-1' para 'a-biblia'
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
            {/* Emojis removidos daqui de dentro */}
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
          <h1>Lição 1: A Bíblia Sagrada</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Lâmpada para os meus pés é a tua palavra e luz para o meu caminho."
            <cite>— Salmos 119:105</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. A Necessidade da Revelação Divina</h2>
          <p>
            Após o ingresso do pecado na raça humana, retratado no livro de <strong>Gênesis (Capítulo 3)</strong>, 
            o homem perdeu a comunhão plena e face a face que possuía com o Criador. O pecado gerou separação espiritual. 
            Para resgatar essa ponte e não deixar a humanidade em trevas morais, houve a profunda necessidade de Deus se revelar ao homem de forma específica.
          </p>
          <p>
            Deus, em Sua infinita graça, moveu o coração de pessoas específicas ao longo da história. Sob a supervisão, 
            aspiração e preservação do <strong>Espírito Santo</strong>, eles deitaram em letras as Palavras eternas de Deus, 
            reunindo-as em um único compêndio de revelação divina que hoje conhecemos e reverenciamos como a <strong>Bíblia Sagrada</strong>.
          </p>

          <div className="nota-teologica">
            <h3>A Doutrina da Inspiração</h3>
            <p>O Apóstolo Pedro confirma esse misterioso e cooperação divino-humana:</p>
            <p className="citacao-biblica">
              "Porque a profecia nunca foi produzida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo." 
              <span>— 2 Pedro 1:21</span>
            </p>
          </div>
        </section>

        <section className="licao-section">
          <h2>2. O Que Significa "Bíblia" e Seus Nomes</h2>
          <p>
            O termo <strong>“Bíblia”</strong> tem origem no grego <em>"Biblos"</em>, que significa literalmente 
            <strong> "coleção de pequenos livros"</strong> ou "biblioteca". Ela não é apenas um livro, mas uma coletânea sagrada. 
            Nas próprias páginas sagradas e na história da Igreja, ela recebe títulos de altíssima autoridade:
          </p>
          <ul className="lista-cozy">
            <li><strong>As Escrituras:</strong> Foco no registro sagrado e imutável (João 5:39).</li>
            <li><strong>Palavra de Deus:</strong> Enfatiza sua origem, poder e autoridade viva (Hebreus 4:12; 1 Pedro 4:11).</li>
            <li><strong>A Lei:</strong> Aponta para seus preceitos normativos e instrutivos (Gálatas 4:4).</li>
          </ul>
          
          <div className="quadro-negro-box">
            <p>
              "A Bíblia se constitui na única regra de fé e conduta do cristão. Ela contém a mente de Deus, 
              o estado espiritual do homem, o caminho da salvação, a condenação dos impenitentes e a felicidade dos justos."
            </p>
            <span className="autor-fonte">— Alfalit (Bibliologia)</span>
          </div>
        </section>

        <section className="licao-section">
          <h2>3. A Estrutura Meticulosa das Escrituras</h2>
          <p>
            Embora seja perfeitamente unificada em sua mensagem central, a Bíblia é dividida didaticamente em duas grandes porções: 
            o <strong>Antigo Testamento (AT)</strong>, que prepara e profetiza a vinda do Messias, e o <strong>Novo Testamento (NT)</strong>, 
            o qual cumpre as promessas e apresenta a obra redentora de Jesus.
          </p>

          <div className="tabela-cozy-wrapper">
            <table className="tabela-cozy">
              <thead>
                <tr>
                  <th>Estrutura</th>
                  <th>Antigo Testamento (AT)</th>
                  <th>Novo Testamento (NT)</th>
                  <th>Bíblia Completa</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Livros</strong></td>
                  <td>39 livros</td>
                  <td>27 livros</td>
                  <td><strong>66 livros</strong></td>
                </tr>
                <tr>
                  <td><strong>Capítulos</strong></td>
                  <td>929 capítulos</td>
                  <td>260 capítulos</td>
                  <td><strong>1.189 capítulos</strong></td>
                </tr>
                <tr>
                  <td><strong>Versículos</strong></td>
                  <td>23.214 versículos</td>
                  <td>7.959 versículos</td>
                  <td><strong>31.173 versículos</strong></td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="licao-section">
          <h2>4. Quatro Pilares Inabaláveis da Bíblia</h2>
          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>Deus é o seu Autor</h4>
              <p>A origem teológica de cada mensagem provém da mente soberana do Criador.</p>
            </div>
            <div className="pilar-card">
              <h4>O Espírito Santo é o Intérprete</h4>
              <p>A mesma mente que inspirou o texto é Quem ilumina o leitor para compreendê-lo.</p>
            </div>
            <div className="pilar-card">
              <h4>Jesus Cristo é o Assunto</h4>
              <p>O AT aponta para Ele, os Evangelhos O revelam e as Cartas explicam Sua glória.</p>
            </div>
            <div className="pilar-card">
              <h4>Ela é Única</h4>
              <p>Não existem duas Bíblias espiritualmente falando; a revelação que salva é perfeitamente uma só.</p>
            </div>
          </div>

          <p className="alerta-jesus">
            Jesus nos advertiu severamente em Mateus 22:29: <em>“Errais por não conhecer as Escrituras e nem o poder de Deus”</em>. 
            Daí nasce a extrema necessidade da meditação diária e constante (Salmos 1:3).
          </p>
        </section>

        <section className="licao-section">
          <h2>5. Menu de Orientação para Leitura e Hermenêutica</h2>
          <p>Para extrair o puro alimento da Palavra sem distorções, siga o método clássico de estudo:</p>
          <ol className="passos-leitura">
            <li><strong>Ore antes de abrir:</strong> Peça direcionamento ao Espírito Santo.</li>
            <li><strong>Observe atentamente:</strong> Atente-se aos fatos, dados, personagens e contexto.</li>
            <li><strong>Sonde cuidadosamente:</strong> Não faça uma leitura veloz, examine cada termo.</li>
            <li><strong>Descubra o propósito:</strong> Entenda o que o texto quer transmitir originalmente.</li>
            <li><strong>Parafraseie:</strong> Descreva com suas próprias palavras o texto lido para fixação.</li>
            <li><strong>Busque a intenção original:</strong> Qual era o objetivo do autor humano ao escrever aquilo?</li>
            <li><strong>Autoexplicação:</strong> Explique para você mesmo o significado prático e devocional.</li>
          </ol>
          
          <div className="conclusao-box">
            <p>
              A Palavra de Deus é o verdadeiro pão e sustento para a sobrevivência da nossa alma (Mateus 4:4). 
              Invista tempo no conhecimento bíblico e guarde-o no coração!
            </p>
            <p className="citacao-final">
              "Bem-aventurado aquele que lê, e os que ouvem as palavras desta profecia, e guardam as coisas que nela estão escritas; porque o tempo está próximo."
              <span>— Apocalipse 1:3</span>
            </p>
          </div>
        </section>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda abaixo para testar seus conhecimentos obtidos nesta lição:</p>
          
          <div className="form-group">
            <label>1) Mencione, pelo menos, três títulos dados à Bíblia:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Quais os idiomas originais em que a Bíblia foi escrita?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) O que significa o vocábulo Bíblia?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Em quantos anos aproximadamente a Bíblia foi formada? </label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Quantos escritores humanos participaram da escrita da Bíblia? </label>
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
                <li><strong>R1:</strong> Escrituras (João 5:39), Palavra de Deus (Hebreus 4:12) e Lei (Gálatas 4:4).</li>
                <li><strong>R2:</strong> O Antigo Testamento foi escrito em <strong>Hebraico</strong> (com pequenos trechos em Aramaico) e o Novo Testamento em <strong>Grego de base popular (Koiné)</strong>.</li>
                <li><strong>R3:</strong> Significa "Coleção de pequenos livros".</li>
                <li><strong>R4:</strong> A Bíblia levou um período aproximado de <strong>1600 anos</strong> para ser totalmente redigida.</li>
                <li><strong>R5:</strong> Cerca de <strong>40 homens / escritores humanos</strong> de diferentes épocas e profissões, todos guiados pelo Espírito Santo.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}