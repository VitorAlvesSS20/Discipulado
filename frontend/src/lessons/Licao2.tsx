import { useState } from 'react';
import './Licao1.css'; 


interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao2({ onVoltar }: LicaoProps) {
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
          <h1>Lição 2: Conhecendo a Deus</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Aquele que não ama não conhece a Deus, porque Deus é amor."
            <cite>— 1 João 4:8</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Quem é Deus?</h2>
          <p>
            Estudar sobre Deus requer profunda reverência e atenção. Dada a Sua infinitude eterna, nem todos os papéis e livros 
            existentes no mundo seriam capazes de conter a grandeza de Suas obras e o mistério de Sua existência. 
            Ele representa a maior expressão de amor que a humanidade pode experimentar.
          </p>
          <p>
            Teologicamente, definimos Deus como um <strong>Ser supremo, infinito, autoexistente</strong> (que existe por si mesmo, 
            sem ter sido criado), Criador e Sustentador de absolutamente todas as coisas que há no universo, sejam elas 
            visíveis ou invisíveis (Gênesis 1:1; Colossenses 1:16). A natureza essencial de Sua essência é puramente 
            <strong> espiritual</strong> (João 4:24).
          </p>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "No princípio, criou Deus os céus e a terra... Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis..."
            </p>
            <span className="citacao-biblica-ref">— Gênesis 1:1; Colossenses 1:16</span>
          </div>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>2. O Mistério da Trindade (Três em Um)</h2>
          <p>
            As Escrituras declaram de forma categórica que <strong>Deus é único</strong> (Deuteronômio 6:4). No entanto, este Deus único 
            revela-se eternamente em três Pessoas distintas: o <strong>Pai</strong> (Jeová), o <strong>Filho</strong> (Jesus Cristo) e o 
            <strong> Espírito Santo</strong> (o Consolador). A essa união e distinção na Divindade cognominamos de <strong>Trindade</strong>.
          </p>

          <div className="licao-imagem-wrapper">
            <img 
              src="https://i.pinimg.com/1200x/d2/6a/ed/d26aed9a7bd43b912e89beb79dc884d6.jpg" 
              alt="Diagrama clássico do Triângulo da Trindade" 
              className="licao-imagem"
            />
          </div>

          <p>
            Para compreendermos didaticamente a Trindade, podemos analisar a figura geométrica de um <strong>triângulo equilátero</strong>:
          </p>
          <ul className="lista-cozy">
            <li><strong>Peça Única:</strong> O triângulo é uma só figura geométrica inteira.</li>
            <li><strong>Três Lados Distinctos:</strong> Possui exatamente três lados que formam sua estrutura.</li>
            <li><strong>Mesmas Dimensões:</strong> Todos os lados possuem rigorosamente o mesmo tamanho e peso.</li>
          </ul>

          <p>
            De forma análoga, Deus é único (o triângulo), manifestando-se em três representações divinas (os lados): Pai, Filho e Espírito Santo. 
            Cada uma das Pessoas possui as mesmíssimas características, dignidade e atributos divinos (dimensões iguais). 
            Eles cooperam perfeitamente em unidade (Mateus 28:19; 2 Coríntios 13:14; 1 João 5:7).
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Atributos Exclusivos de Deus</h2>
          <p>
            Os atributos exclusivos são qualidades divinas que pertencem 
            <strong> única e exclusivamente</strong> a Deus. Nenhuma criatura no universo compartilha dessas capacidades:
          </p>

          <div className="pilares-grid">
            <div className="pilar-card">
              <h4>Onipotência</h4>
              <p>Seu poder é absoluto e não conhece limites morais ou físicos (Salmos 91:1; Mateus 28:18).</p>
            </div>
            <div className="pilar-card">
              <h4>Onipresença</h4>
              <p>Capacidade soberana de estar presente em todo lugar, simultaneamente (Salmos 139:7-12).</p>
            </div>
            <div className="pilar-card">
              <h4>Onisciência</h4>
              <p>Conhecimento total e pleno de todas as coisas, passadas, presentes e futuras (Salmos 139:1-6).</p>
            </div>
          </div>

          <div className="nota-teologica">
            <h3>Eternidade, Imutabilidade e Santidade</h3>
            <p>Além dos três "Onis", a Bíblia destaca características estruturais de Sua existência:</p>
            <ul>
              <li><strong>Eternidade:</strong> Ele subsiste de eternidade a eternidade, sem início e sem fim (Salmos 102:12; João 8:58).</li>
              <li><strong>Imutabilidade:</strong> Deus não muda, não sofre variações nem evoluções. Ele é inalterável (Malaquias 3:6).</li>
              <li><strong>Santidade e Perfeição:</strong> Ele é totalmente isento de falhas ou pecados, sendo perfeitamente justo (Levítico 11:44-45).</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>▲</span></div>

        <section className="licao-section">
          <h2>4. Atributos Morais de Deus</h2>
          <p>
            Os atributos morais são qualidades que Deus possui em plenitude infinita, mas que Ele 
            <strong> compartilha ou reflete</strong> de forma limitada nos seres humanos criados à Sua imagem e semelhança:
          </p>

          <div className="tabela-cozy-wrapper">
            <table className="tabela-cozy">
              <thead>
                <tr>
                  <th>Atributo Moral</th>
                  <th>Significado Prático para o Discípulo</th>
                  <th>Referência Bíblica</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td><strong>Amor & Bondade</strong></td>
                  <td>Deus busca o bem-estar de Suas criaturas de forma incondicional.</td>
                  <td>João 3:16; Salmos 25:8</td>
                </tr>
                <tr>
                  <td><strong>Misericórdia & Clemência</strong></td>
                  <td>Sua disposição em reter o castigo merecido e estender perdão.</td>
                  <td>Êxodo 34:6; Lam. 3:22</td>
                </tr>
                <tr>
                  <td><strong>Compaixão & Paciência</strong></td>
                  <td>Ele é tardio em irar-se, demonstrando profunda empatia pelo homem.</td>
                  <td>Salmos 86:15; Números 14:18</td>
                </tr>
                <tr>
                  <td><strong>Verdade & Fidelidade</strong></td>
                  <td>Deus cumpre todas as Suas promessas, agindo com honestidade imutável.</td>
                  <td>Salmos 31:5; Deut. 7:9</td>
                </tr>
                <tr>
                  <td><strong>Justiça</strong></td>
                  <td>Sua conduta e Seus julgamentos são perfeitamente corretos e equitativos.</td>
                  <td>Deuteronômio 32:4</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="quadro-negro-box">
            <p>
              "Portanto, Deus é maravilhoso e para conseguir descrevê-lo verdadeiramente é necessário experimentá-lo. 
              Não fique apenas na teoria dos livros: busque ter a sua própria experiência pessoal com o Criador!"
            </p>
            <span className="autor-fonte">— Fundamento do Discipulado</span>
          </div>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo com base nos ensinamentos da Lição 2:</p>
          
          <div className="form-group">
            <label>1) Qual a definição teológica sobre Deus?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Qual a definição de Trindade?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Qual a figura geométrica utilizada para ilustrar didaticamente a Trindade?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Cite 03 atributos exclusivos de Deus:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Cite 03 atributos morais de Deus:</label>
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
                <li><strong>R1:</strong> Deus é um ser supremo, infinito, existente por si mesmo, criador e sustentador de todas as coisas visíveis e invisíveis. Sua natureza é espiritual.</li>
                <li><strong>R2:</strong> É a verdade de que Deus é único, mas se apresenta e subsiste eternamente in três representações ou Pessoas: Pai (Jeová), Filho (Jesus Cristo) e Espírito Santo.</li>
                <li><strong>R3:</strong> O triângulo equilátero (peça única com três lados de dimensões idênticas).</li>
                <li><strong>R4:</strong> Onipotência, Onipresença, Onisciência, Eternidade ou Imutabilidade.</li>
                <li><strong>R5:</strong> Amor, Bondade, Misericórdia, Compaixão, Paciência, Verdade, Fidelidade ou Justiça.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}