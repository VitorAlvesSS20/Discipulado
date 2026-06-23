import { useState, useEffect } from 'react';
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebase';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao6({ onVoltar }: LicaoProps) {
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
          if (data.respostasQuestionarios && data.respostasQuestionarios['a-salvacao']) {
            const salvas = data.respostasQuestionarios['a-salvacao'];
            setRespostas({
              q1: salvas['1) Defina, com base no texto, o que é Salvação:'] || '',
              q2: salvas['2) Quais são os dois aspectos fundamentais da salvação e o que caracteriza cada um?'] || '',
              q3: salvas['3) Quais são os efeitos principais que a Regeneração DO indivíduo produz na vida do indivíduo?'] || '',
              q4: salvas['4) O que significa ser santo do ponto de vista bíblico e doutrinário?'] || '',
              q5: salvas['5) Quais são as três áreas da vida humana que precisam passar pelo processo de santificação?'] || ''
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
      '1) Defina, com base no texto, o que é Salvação:': respostas.q1,
      '2) Quais são os dois aspectos fundamentais da salvação e o que caracteriza cada um?': respostas.q2,
      '3) Quais são os efeitos principais que a Regeneração DO indivíduo produz na vida do indivíduo?': respostas.q3,
      '4) O que significa ser santo do ponto de vista bíblico e doutrinário?': respostas.q4,
      '5) Quais são as três áreas da vida humana que precisam passar pelo processo de santificação?': respostas.q5,
    };

    try {
      const docRef = doc(db, 'users_progress', user.uid);
      await setDoc(docRef, {
        respostasQuestionarios: {
          'a-salvacao': payloadRespostas
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
          <h1>Lição 6: A Salvação</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Crê no Senhor Jesus Cristo, e serás salvo, tu e a tua casa."
            <cite>— Atos 16:31</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O Conceito e os Dois Aspectos da Salvação</h2>
          <p>
            A palavra <strong>Salvação</strong> carrega significados profundos. Nos dicionários da língua portuguesa, 
            significa o ato ou efeito de salvar-se, adquirir de novo, resgatar, libertar-se de um ônus ou livrar do cativeiro 
            do pecado. Com base nos idiomas originais (latim, grego e hebraico), expressa a ação ou resultado de 
            livramento e preservação de algum perigo ou enfermidade, subentendendo segurança, saúde e prosperidade.
          </p>
          <p>
            Para compreendermos perfeitamente a Salvação, precisamos analisá-la sob dois aspectos essenciais:
          </p>

          <div className="nota-teologica">
            <ul>
              <li><strong>Aspecto Divino:</strong> É caracterizado pela participação direta de Deus na <em>regeneração</em> (Tiago 1:18), na <em>adoção</em> (Romanos 8:14-17), na <em>justificação</em> (Atos 13:39) e na <em>santificação</em> (1 Tessalonicenses 4:3-4).</li>
              <li><strong>Aspecto Humano:</strong> É caracterizado pela resposta e participação do homem através do <em>arrependimento</em> (Atos 2:38) — que é sentir tristeza pelo pecado a ponto de abandoná-lo — e por intermédio da <em>Fé</em> oriunda do coração (Romanos 10:8-10).</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>2. Aspectos Divinos: Justificação e Regeneração</h2>
          
          <h3>Justificação</h3>
          <p>
            É o ato instantâneo de Deus em declarar o pecador inocente. Pela Sua própria vontade, Ele absolve o homem 
            de sua culpa e o declara justo (Atos 13:39; Isaías 43:25).
          </p>
          <ul className="lista-cozy">
            <li><strong>Fonte:</strong> A Graça — um favor totalmente imerecido que provém do trono de Deus (Hebreus 4:16) e se manifesta cabalmente in Cristo (João 1:14).</li>
            <li><strong>Fundamentos:</strong> Manifesta-se pela Santidade de Deus (Miqueias 6:8), por Sua Graça soberana (Efésios 2:7-8) e pela fé depositada em Cristo Jesus (Romanos 3:22; 5:1).</li>
            <li><strong>Instrumento Divino:</strong> O sangue de Jesus Cristo (Romanos 3:25; Hebreus 9:23-28).</li>
            <li><strong>Efeitos Práticos:</strong> Paz com Deus, com o próximo e consigo mesmo (Romanos 5:1); Frutos em abundância (Filipenses 1:11; João 15:5); e Prosperidade, entendida como a plena satisfação obtida em Deus (Provérbios 4:18).</li>
          </ul>

          <h3>Regeneração</h3>
          <p>
            É o ato divino pelo qual o homem experimenta uma radical mudança e reconstrução em seu interior (Tiago 1:18). A Bíblia a descreve através de conceitos bem definidos:
          </p>
          <ul className="lista-cozy">
            <li><strong>Novo Nascimento (Recriação):</strong> Deixamos a natureza decaída de Adão e passamos a participar da natureza divina em retidão (2 Coríntios 5:17; João 3:3-5).</li>
            <li><strong>Lavagem (Purificação):</strong> O homem imundo e doente é purificado pela Palavra de Deus e pelo sangue do Cordeiro (Efésios 5:26; Apocalipse 1:5).</li>
            <li><strong>Ressurreição Espiritual:</strong> Livramento da condenação e da segunda morte (Efésios 2:5-6).</li>
            <li><strong>Renovação e Transladação:</strong> Despir-se do velho homem e ser transportado do domínio do diabo para o Reino do Filho de Deus (Colossenses 3:10; 1:13).</li>
          </ul>
          <p>
            A regeneração é gerada pela <strong>obra do Espírito Santo, pela Palavra de Deus, pela soberana vontade do Pai, pela obra expiatória e pela ressurreição de Cristo</strong>. Seus efeitos diretos incluem o acesso ao Reino de Deus, uma vida vitoriosa sobre o mal, o desapego às práticas do mundo e a filiação divina (João 3:5; Romanos 8:37; 12:2; João 1:12-13).
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Aspectos Divinos: Adoção e Santificação</h2>

          <h3>Adoção</h3>
          <p>
            Assim como no direito civil, a adoção espiritual é o ato jurídico divino no qual Deus assume permanentemente como filho aquele que antes não pertencia à Sua família biológica (Romanos 8:14-17).
          </p>
          <ul className="lista-cozy">
            <li><strong>Privilégios e Bênçãos:</strong> Estar para sempre com o Senhor, receber um novo nome, integrar uma nova família, ter intimidade total com o Pai e co-herdar todas as coisas com Cristo (1 Tessalonicenses 4:17; Apocalipse 2:17; Efésios 2:19; Romanos 8:17).</li>
            <li><strong>Reflexos no Adotado:</strong> Filhos legítimos andam em estrita obediência, buscam a semelhança com o Pai e promovem a Sua glória na terra (1 Pedro 1:14; Mateus 5:16, 44-48).</li>
          </ul>

          <h3>Santificação</h3>
          <p>
            É um processo gradativo que significa: <strong>separação para o uso exclusivo de Deus</strong> (Romanos 1:1). É a vontade expressa do Senhor para todo crente (1 Tessalonicenses 4:3; 1 Pedro 1:15-16). É executada por meio do <em>sangue de Jesus</em>, da <em>Palavra de Deus</em> e da <em>ação do Espírito Santo</em> (1 João 1:7; Salmos 119:11; Romanos 15:16).
          </p>

          <div className="tabela-cozy-wrapper">
            <table className="tabela-cozy">
              <thead>
                <tr>
                  <th>Área de Santificação</th>
                  <th>Operação e Significado Bíblico</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Espírito</strong></td>
                  <td>Ligado ao intelecto e entendimento. Devemos oferecer a Deus um culto racional (Romanos 12:2; João 4:23-24).</td>
                </tr>
                <tr>
                  <td><strong>Alma</strong></td>
                  <td>Sede dos desejos e emoções humanas. Nossos anseios devem glorificar ao Senhor (Mateus 15:19; 5:16).</td>
                </tr>
                <tr>
                  <td><strong>Corpo</strong></td>
                  <td>Santuário e morada do Espírito Santo. Santificado através do autocontrole, vigilância e abstendo-se da aparência do mal (1 Coríntios 6:18-19; 1 Tessalonicenses 5:22).</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>4. Aspectos Humanos: Arrependimento e Fé</h2>
          <p>
            O aspecto humano compreende a resposta ativa e a responsabilidade do homem diante do convite divino.
          </p>

          <h3>Arrependimento</h3>
          <p>
            É o ponto de partida da caminhada cristã. Define-se como um ato pessoal e consciente de contrição, onde o ser humano decide dar uma "meia-volta" (mudança de direção) em relação aos atos pecaminosos (João 16:8). 
          </p>
          <blockquote>
            <strong>Atenção:</strong> Arrependimento é diferente de remorso. O remorso tenta fazer justiça pelas próprias mãos (como no caso de Judas em Mateus 27:5), enquanto o arrependimento gera verdadeira confissão, lágrimas, oração, fé e real conversão (Atos 13:19; Salmos 51).
          </blockquote>

          <h3>Fé</h3>
          <p>
            Significa crer e confiar piamente. Ela é completa porque abrange e envolve toda a personalidade humana em três pilares:
          </p>

          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>Intelecto</h4>
              <p>Crença racional nas verdades bíblicas sobre Deus e Cristo (lembrando que crer apenas intelectualmente não é suficiente para a salvação, conforme Tiago 2:19).</p>
            </div>
            <div className="pilar-card">
              <h4>Emoção</h4>
              <p>Confiar profundamente e comover-se diante das verdades e do amor captados pela mente.</p>
            </div>
            <div className="pilar-card">
              <h4>Vontade</h4>
              <p>A aceitação prática e a dedicação total às obrigações decorrentes da fé e da salvação (Romanos 10:9-10).</p>
            </div>
          </div>

          <div className="quadro-negro-box">
            <p>
              "Que cada um de nós encontre a graça necessária para submeter-se à plena vontade de Deus, vivendo em completo estado de santificação, até a vinda do Senhor Jesus Cristo."
            </p>
            <span className="autor-fonte">— 1 Tessalonicenses 5:23</span>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section questionario-section">
          <h2>Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo com base nos ensinamentos da Lição 6:</p>
          
          <div className="form-group">
            <label>1) Defina, com base no texto, o que é Salvação:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Quais são os dois aspectos fundamentais da salvação e o que caracteriza cada um?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Quais são os efeitos principais que a Regeneração produz na vida do indivíduo?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O que significa ser santo do ponto de vista bíblico e doutrinário?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Quais são as três áreas da vida humana que precisam passar pelo processo de santificação?</label>
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
                <li><strong>R1:</strong> É o ato de salvar-se, resgatar ou livrar-se do pecado. Envolve a ação de livramento e preservação de perigos/enfermidades, trazendo segurança, saúde e satisfação plena em Deus.</li>
                <li><strong>R2:</strong> Aspecto Divino (caracterizado pela ação de Deus na justificação, regeneração, adoção e santificação) e Aspecto Humano (caracterizado pela resposta do homem através do arrependimento genuíno e da fé sincera).</li>
                <li><strong>R3:</strong> Acesso pleno ao Reino de Deus (vida eterna), uma vida diária vitoriosa sobre o mal, desapego visível às coisas e práticas escandalosas do mundo, e a recepção da legítima filiação divina.</li>
                <li><strong>R4:</strong> Significa separação total e contínua do pecado para o uso exclusivo do Senhor e para o serviço da Sua obra.</li>
                <li><strong>R5:</strong> Espírito (relacionado ao intelecto/culto racional), Alma (sede dos sentimentos e desejos) e Corpo (templo do Espírito Santo, controlado e livre da aparência do mal).</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}