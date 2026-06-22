import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao16({ onVoltar }: LicaoProps) {
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
          <span className="licao-badge">Módulo: Missões</span>
          <h1>Lição 16: Discípulo Gerando Discípulo</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "E disse-lhes: Ide por todo o mundo, pregai o evangelho a toda criatura."
            <cite>— Marcos 16:15</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. A Missão Integral da Igreja</h2>
          <p>
            É dever intransferível de todo discípulo do Senhor Jesus pregar o evangelho a todas as pessoas. Fomos chamados por Deus para dar continuidade à missão do próprio Cristo aqui na terra: <strong>"buscar e salvar o que se havia perdido"</strong> (Lucas 19:10). Isso se refere diretamente àqueles que, por conta do pecado, romperam a comunhão com Deus e encontram-se distantes do caminho da salvação (Isaías 59:2).
          </p>
          <p>
            Sabendo que Jesus é o único Caminho, a Verdade e a Vida (João 14:6), nossa obrigação é conscientizar o mundo sobre a necessidade de retornar a Ele para encontrar o verdadeiro descanso para as suas almas (Mateus 11:28-30).
          </p>
        </section>

        <div className="section-separator"><span>🌍</span></div>

        <section className="licao-section">
          <h2>2. O Evangelismo Pessoal e a Ação do Espírito Santo</h2>
          <p>
            Evangelizar significa **comunicar o evangelho no poder do Espírito Santo**. Essa comunicação não é um mero repasse de informações intelectuais, mas sim o ato de tornar comum o conhecimento salvador de Cristo. Embora seja um chamado glorioso, pregar o evangelho pode apresentar barreiras, dificuldades e oposições (1 Coríntios 2:1-5; Apocalipse 1:9).
          </p>
          <p>É por isso que dependemos inteiramente do Espírito Santo. No livro de Atos, vemos que Ele:</p>
          <ul className="lista-cozy">
            <li><strong>Dá poder e autoridade</strong> para testemunhar (Atos 1:8).</li>
            <li><strong>Encoraja</strong> os crentes diante das ameaças (Atos 4:31).</li>
            <li><strong>Cria oportunidades</strong> divinas e estratégicas (Atos 8:20; 10:9).</li>
            <li><strong>Quebra as barreiras</strong> culturais e religiosas (Atos 10).</li>
            <li><strong>Direciona geograficamente</strong> a quem se dirigir (Atos 16:6-10).</li>
            <li><strong>Prepara e abre os corações</strong> para acolher a mensagem (Atos 16:14).</li>
          </ul>

          <div className="nota-teologica">
            <h3>Os Dois Conceitos de Evangelização:</h3>
            <p><strong>Verbal:</strong> Evangelizar por meio de palavras explicitamente faladas.</p>
            <p><strong>Pessoal:</strong> Evangelizar de modo prático por meio do nosso testemunho de vida.</p>
            <p><em>Esses dois conceitos andam fundidos. Nossas palavras só terão autoridade se as nossas ações validarem aquilo que pregamos, evitando a hipocrisia de apontar o erro alheio vivendo na mesma prática (Mateus 7:5).</em></p>
          </div>
        </section>

        <div className="section-separator"><span>🔥</span></div>

        <section className="licao-section">
          <h2>3. O Método de Jesus e o Conteúdo da Pregação</h2>
          <p>
            Ao observar o encontro de Jesus com a mulher samaritana em João 4, aprendemos os passos fundamentais para uma abordagem evangelística eficaz:
          </p>
          <ul>
            <li><strong>Ir em busca das pessoas:</strong> Sair da zona de conforto e ir ao encontro delas (v. 3).</li>
            <li><strong>Demonstrar interesse real:</strong> Quebrar o gelo estabelecendo um diálogo simples (v. 7).</li>
            <li><strong>Despertar a curiosidade espiritual:</strong> Conectar a conversa com realidades cotidianas e profundas (v. 7-9).</li>
            <li><strong>Dosar a mensagem:</strong> Falar a verdade na medida certa, sem saturar o ouvinte com excesso de palavras.</li>
          </ul>
          <p>
            <strong>O que devemos falar?</strong> Devemos falar estritamente de <strong>JESUS</strong>. Evangelizar é "cristianizar", ou seja, apresentar às pessoas o propósito de Sua vinda, Seu sacrifício expiatório e o plano perfeito de salvação. Para isso, o discípulo precisa estudar as Escrituras continuamente para não errar nem desviar-se do alvo (João 5:39; Mateus 22:29).
          </p>
        </section>

        <div className="section-separator"><span>🛡️</span></div>

        <section className="licao-section">
          <h2>4. Prática, Métodos e Comportamento do Evangelizador</h2>
          <p>Evangelizar é de suma importância porque difunde a mensagem de Cristo, traz luz às trevas, gera a conversão de almas e promove o crescimento saudável da igreja local. Afinal, <em>"como ouvirão, se não há quem pregue?"</em> (Romanos 10:14).</p>
          
          <h3>Formas Práticas de Evangelizar:</h3>
          <p>Podemos alcançar os não cristãos e os desviados através de estudos bíblicos nos lares, distribuição de folhetos, visitas de casa em casa, pregações em praças ou transportes públicos, mensagens eletrônicas e manifestações artísticas (música e teatro).</p>

          <blockquote>
            <strong>Manual de Conduta no Evangelismo:</strong> 
            Ao abordar alguém, procure estar bem apresentado e seja sempre educado. Seja breve, objetivo e humilde nas palavras, evitando debates ou discussões religiosas. Pergunte o nome da pessoa para intercessão, faça um convite caloroso para os cultos e lembre-se de agradecer cordialmente pela atenção dispensada.
          </blockquote>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões avaliando o dever bíblico do evangelismo e do discipulado:</p>
          
          <div className="form-group">
            <label>1) De acordo com o texto, qual é a missão integral da Igreja na terra e a quem ela se direciona primariamente?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Cite pelo menos três ações fundamentais que o Espírito Santo realiza no livro de Atos para capacitar os evangelizadores:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Qual é a diferença entre os conceitos de evangelização "Verbal" e "Pessoal", e por que eles precisam andar juntos?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Baseando-se no encontro de Jesus com a mulher samaritana (João 4), cite dois passos práticos que servem de modelo para o evangelismo:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Qual deve ser o comportamento prático e ético do discípulo no momento de abordar uma pessoa para evangelizar?</label>
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
                <li><strong>R1:</strong> Dar continuidade à missão de Cristo de "buscar e salvar o que se havia perdido". Direciona-se às pessoas que estão em pecado e perderam a comunhão com Deus, precisando retornar ao caminho da salvação.</li>
                <li><strong>R2:</strong> O candidato pode citar três dentre: dá poder para testemunhar, encoraja diante de oposições, cria oportunidades estratégicas, quebra barreiras culturais, direciona geograficamente ou prepara corações.</li>
                <li><strong>R3:</strong> A evangelização verbal usa as palavras faladas; a pessoal usa o testemunho prático da própria vida. Devem andar juntos porque a palavra perde a força e a convicção se as ações do crente contradisserem o que ele prega.</li>
                <li><strong>R4:</strong> O candidato pode escolher dois dentre: ir ativamente em busca das almas, demonstrar interesse genuíno estabelecendo diálogo, despertar a curiosidade espiritual conectada à realidade ou dosar a quantidade de palavras.</li>
                <li><strong>R5:</strong> Deve estar bem apresentado, ser educado e humilde, falar de forma breve e objetiva, não criar resistência ou discussões teológicas, pedir o nome para intercessão, convidar para o culto e agradecer pela atenção recebida.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}