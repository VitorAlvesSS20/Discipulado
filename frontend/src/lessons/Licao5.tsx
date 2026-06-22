import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao5({ onVoltar }: LicaoProps) {
  const [respostas, setRespostas] = useState({
    q1: '', q2: '', q3: '', q4: '', q5: ''
  });
  const [mostrarGabarito, setMostrarGabarito] = useState(false);

  return (
    <div className="licao-page">
      <button className="back-btn" onClick={onVoltar}>
        &larr; Voltar ao Menu
      </button>

      <article className="licao-container">
        <header className="licao-header">
          <span className="licao-badge">Módulo: Doutrinas</span>
          <h1>Lição 5: O Pecado</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Portanto, como por um homem entrou o pecado no mundo, e pelo pecado a morte, assim também a morte passou a todos os homens por isso que todos pecaram."
            <cite>— Romanos 5:12</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. A Origem e as Consequências do Pecado</h2>
          <p>
            O pecado é um mal que se espalhou pela humanidade a partir da desobediência de nossos 
            primeiros pais — Adão e Eva (Gênesis 3). Porém, seu originador foi o diabo (1 João 3:8). 
            O pecado é a causa de todos os problemas existentes no mundo. Com seu ingresso, a raça 
            humana passou a experimentar coisas que não faziam parte do plano original divino para a 
            humanidade, tais como:
          </p>

          <ul className="lista-cozy">
            <li><strong>Morte física:</strong> (Hebreus 9:27);</li>
            <li><strong>Morte espiritual:</strong> (Efésios 5:14);</li>
            <li><strong>Morte eterna:</strong> (Apocalipse 20:15);</li>
            <li><strong>Perda da comunhão divina:</strong> (Isaías 59:2);</li>
            <li><strong>Doenças no corpo e na alma:</strong> (Mateus 9:2);</li>
            <li><strong>Engano:</strong> (Hebreus 3:13);</li>
            <li><strong>Aflição:</strong> (Salmos 38:18);</li>
            <li><strong>Escravidão:</strong> (João 8:34); Entre outros...</li>
          </ul>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. O Que é Pecado e sua Universalidade</h2>
          <p>
            Pecado é originalmente — <strong>Errar o alvo</strong>. A Bíblia nos diz em 1 Coríntios 10:31: 
            <em> "Portanto, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus"</em>. 
            Assim sendo, todas as vezes que fizermos algo que não seja para a glória de Deus, estamos pecando.
          </p>
          <p>
            A Bíblia também nos traz outras referências sobre o que é pecado, a saber:
          </p>

          <ul className="lista-cozy">
            <li><strong>Transgressão da Lei Divina:</strong> (Romanos 2:23);</li>
            <li><strong>Omissão na prática do bem:</strong> (Tiago 4:17);</li>
            <li><strong>Toda Iniquidade:</strong> (1 João 5:4).</li>
          </ul>

          <h3>Todos são pecadores?</h3>
          <p>
            O pecado é um mal tão abrangente, que a Bíblia define sua universalidade de forma clara:
          </p>
          <ul className="lista-cozy">
            <li><em>"Todos Pecaram"</em> (Romanos 3:23);</li>
            <li><em>"Não há nenhum justo"</em> (Romanos 3:10, 11);</li>
            <li><em>"Não há homem justo sobre a terra que faça o bem e nunca peque"</em> (Eclesiastes 7:20).</li>
          </ul>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. A Libertação e a Responsabilidade do Perdão</h2>
          <p>
            Os nossos pecados são perdoados através da pessoa do Senhor Jesus Cristo. Ele foi enviado 
            por Deus ao mundo para morrer na cruz do calvário em nosso favor (João 3:16). João Batista 
            declara que Jesus é o cordeiro de Deus que tira o pecado do mundo (João 1:29). Portanto, 
            devemos confessar a Ele todas as nossas culpas (1 João 1:9).
          </p>
          <p>
            O fato de Jesus perdoar não significa que estaremos imunes das consequências promovidas pelo 
            pecado. Então, o melhor a se fazer é não pecar (1 João 2:1).
          </p>

          <div className="nota-teologica">
            <h3>A Reciprocidade do Perdão:</h3>
            <p>
              O perdão de pecados está estritamente relacionado à nossa postura com relação aos que nos 
              ofendem. Jesus disse que se não perdoarmos aos homens as suas ofensas, também nosso Pai 
              não nos perdoará (Mateus 6:15). Assim sendo, o perdão é um ato recíproco. Existem muitas 
              pessoas que perderão seu direito à vida eterna por não liberarem perdão ao próximo.
            </p>
          </div>

          <p>
            Existem pecados que precisam ser confessados à congregação (Atos 19:18), outros ao seu próximo 
            (Tiago 5:16). Contudo, todos devem ser confessados perante o Senhor, após as situações serem 
            acertadas (Mateus 5:23-24). Omitir pecados atrai maldições (Josué 7) e impede a bênção divina 
            sobre nossas vidas (Provérbios 28:13).
          </p>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>4. Passos para Vencermos o Pecado</h2>
          <p>
            Não podemos brincar com o pecado! Jesus nos deixou um alerta fundamental de vigilância. 
            Para andarmos em vitória, devemos seguir quatro passos práticos capitaneados pelas Escrituras:
          </p>

          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>1. Identifique-o</h4>
              <p>(Provérbios 27:12; Mateus 13:33a).</p>
            </div>
            <div className="pilar-card">
              <h4>2. Fuja</h4>
              <p>(1 Tessalonicenses 5:22).</p>
            </div>
            <div className="pilar-card">
              <h4>3. Previna-se</h4>
              <p>(Efésios 4:27).</p>
            </div>
            <div className="pilar-card">
              <h4>4. Resista</h4>
              <p>Resista à ação do diabo (Tiago 4:7).</p>
            </div>
          </div>

          <div className="quadro-negro-box">
            <p>
              "Vigiai e orai, para que não entreis em tentação; na verdade, o espírito está pronto, mas a carne é fraca."
            </p>
            <span className="autor-fonte">— Mateus 26:41</span>
          </div>

          <p>
            Portanto, não vamos permitir que o pecado nos domine. Que nossa natureza caída esteja 
            crucificada em Cristo (Gálatas 2:20).
          </p>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "O que encobre as suas transgressões nunca prosperará, mas o que as confessa e deixa, alcançará misericórdia."
            </p>
            <span className="citacao-biblica-ref">— Provérbios 28:13</span>
          </div>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo com base nos ensinamentos da Lição 5:</p>
          
          <div className="form-group">
            <label>1) Originalmente, o que significa a palavra pecado?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Cite algumas das consequências trazidas pelo ingresso do pecado na humanidade:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Quais são as outras três definições de pecado apresentadas pela Bíblia nesta lição?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O fato de Jesus perdoar os nossos pecados significa que estaremos imunes às suas consequências? Explique.</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Quais são os quatro passos práticos citados para vencermos o pecado no dia a dia?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q5} 
              onChange={(e) => setRespostas({...respostas, q5: e.target.value})}
            />
          </div>

          <button className="btn-gabarito" onClick={() => setMostrarGabarito(!mostrarGabarito)}>
            {mostrarGabarito ? "Ocultar Gabarito de Estudo" : "Conferir Gabarito de Respostas"}
          </button>

          {mostrarGabarito && (
            <div className="gabarito-box">
              <h4>Gabarito das respostas:</h4>
              <ul>
                <li><strong>R1:</strong> Significa "Errar o alvo" (fazer qualquer coisa que não redunde para a glória de Deus).</li>
                <li><strong>R2:</strong> Morte física, morte espiritual, morte eterna, perda da comunhão divina, doenças no corpo e na alma, engano, aflição e escravidão.</li>
                <li><strong>R3:</strong> Transgressão da Lei Divina (Romanos 2:23), Omissão na prática do bem (Tiago 4:17) e Toda Iniquidade (1 João 5:4).</li>
                <li><strong>R4:</strong> Não. O perdão remove a culpa espiritual e a condenação eterna, mas não nos deixa imunes às consequências naturais e históricas que o ato do pecado promove. O melhor a fazer é não pecar.</li>
                <li><strong>R5:</strong> 1) Identificar o pecado; 2) Fugir dele; 3) Prevenir-se; 4) Resistir à ação do diabo.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}