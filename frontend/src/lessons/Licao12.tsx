import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao12({ onVoltar }: LicaoProps) {
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
          <span className="licao-badge">Módulo: Liturgias</span>
          <h1>Lição 12: O Culto</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional."
            <cite>— Romanos 12:1</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O Conceito Correto de Culto</h2>
          <p>
            Muitas pessoas possuem um conceito errôneo acerca do culto, enxergando-o apenas como um momento focado em buscar e receber algo. 
            Na verdade, a perspectiva bíblica nos ensina o oposto: <strong>o culto é um momento de entrega e devoção sincera a Deus.</strong>
          </p>
          <p>
            O termo "culto" origina-se de um vocábulo latino que significa adoração, reverência ou homenagem que se presta a um ser supremo. 
            Ele pode ser exercido de forma <strong>individual</strong> (em nossa vida devocional diária) ou <strong>coletiva</strong> (quando nos reunimos como corpo), 
            e precisa ser sempre um ato voluntário e consciente (Romanos 12:1).
          </p>

          <blockquote>
            <strong>O que é Liturgia?</strong> Todo culto possui uma liturgia, que é a ordem prática dos atos religiosos. A liturgia das Assembleias de Deus no Brasil é composta, basicamente, por cinco elementos fundamentais: 
            <br />
            <strong>Oração — Louvor — Testemunho — Oferta — Palavra.</strong>
          </blockquote>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. A Essência da Adoração</h2>
          <p>
            Não existe culto sem adoração. Adorar significa, em sua raiz, render culto à divindade. Assim sendo, a adoração consiste nos atos 
            e atitudes internas e externas que reverenciam a soberania e a majestade do grande Deus, Criador dos céus e da terra.
          </p>
          <p>
            Adorar a Deus não é uma responsabilidade restrita a um grupo de pessoas ou ministros de música; 
            <strong> todas as coisas criadas foram projetadas para o louvor da Sua glória</strong> (Salmos 98:4-9; 150:6).
          </p>

          <div className="nota-teologica">
            <h3>Como Deve Ser a Nossa Adoração?</h3>
            <ol>
              <li><strong>Espontânea:</strong> Fluindo do Espírito, não por força ou violência humana (Zacarias 4:6).</li>
              <li><strong>Consciente:</strong> Fruto de um entendimento real, o chamado "culto racional" (Romanos 12:1).</li>
              <li><strong>Em Espírito e em Verdade:</strong> Sintonizada com o Espírito Santo e fundamentada na sinceridade da Palavra (João 4:23-24).</li>
              <li><strong>Com Maturidade:</strong> Deixando de lado atitudes infantis para focar no crescimento espiritual (1 Coríntios 13:11).</li>
              <li><strong>Ordeira e Decente:</strong> Fluindo de maneira organizada, respeitando a ordem do ambiente de culto (1 Coríntios 14:40).</li>
            </ol>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. A Reverência na Casa de Deus e a Eternidade</h2>
          <p>
            A negligência ou o desrespeito ao dever da adoração e à glória devida a Deus podem trazer consequências sérias para o ser humano. 
            O livro de Atos nos mostra o exemplo trágico do rei Herodes, que foi ferido por não dar glória a Deus (Atos 12:21-23). 
          </p>
          <p>
            Por essa razão, devemos guardar as sábias palavras de Salomão em Eclesiastes 5:1: 
            <em> "Guarda o teu pé quando entrares na casa de Deus..."</em>, sinalizando que devemos entrar no santuário com temor, respeito e postura de servo.
          </p>

          <div className="quadro-negro-box">
            <p>
              O culto é o momento de entrega total ao Senhor, onde reconhecemos Sua grandeza e majestade. E lembre-se: a adoração não terminará nesta Terra; ela continuará no céu por toda a eternidade!
            </p>
            <span className="autor-fonte">— Apocalipse 4:3-11</span>
          </div>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "Dai ao Senhor a glória devida ao seu nome; adorai o Senhor na beleza da sua santidade."
            </p>
            <span className="citacao-biblica-ref">— Salmos 29:2</span>
          </div>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões com base nos ensinamentos da Lição 12:</p>
          
          <div className="form-group">
            <label>1) Qual é o conceito correto de "culto" segundo a Palavra de Deus e qual o erro comum que as pessoas cometem?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Quais são os cinco elementos básicos que compõem a liturgia das Assembleias de Deus no Brasil?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) De acordo com João 4:23-24, qual é a principal exigência estabelecida para os verdadeiros adoradores?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O que a expressão bíblica "Guarda o teu pé quando entrares na casa de Deus" nos ensina na prática?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Onde e por quanto tempo a adoração ao Senhor continuará acontecendo, segundo o livro de Apocalipse?</label>
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
                <li><strong>R1:</strong> O conceito correto é que o culto é um momento de entrega, devoção e adoração a Deus. O erro comum é achar que o culto serve apenas como um momento para buscar e receber bênçãos humanas.</li>
                <li><strong>R2:</strong> Oração, Louvor, Testemunho, Oferta e Palavra.</li>
                <li><strong>R3:</strong> Que os verdadeiros adoradores adorem ao Pai em espírito e em verdade.</li>
                <li><strong>R4:</strong> Ensina que devemos ter profunda reverência, temor, cuidado e uma postura consciente de respeito ao entrarmos no ambiente de culto ao Senhor.</li>
                <li><strong>R5:</strong> Continuará acontecendo no céu, de forma contínua por toda a eternidade (Apocalipse 4:3-11).</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}