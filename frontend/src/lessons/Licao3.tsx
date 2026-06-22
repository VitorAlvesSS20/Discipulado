import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao3({ onVoltar }: LicaoProps) {
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
          <h1>Lição 3: Jesus, o Cristo</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "E conhecereis a verdade e a verdade vos libertará."
            <cite>— João 8:32</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Uma Pessoa Real e Maravilhosa</h2>
          <p>
            Jesus é uma pessoa real e maravilhosa! Isaías profetizou que seu nome seria 
            <strong> "Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade e Príncipe da Paz"</strong> (Isaías 9:6). 
            Durante sua estadia na terra realizou milagres, curou enfermos, libertou pessoas da opressão 
            do maligno, alimentou multidões, ensinou o caminho da verdade, praticou a justiça, e além 
            disso, não fazia acepção de pessoas (Mateus 4:23; Atos 10:34; Romanos 2:11).
          </p>

          <div className="licao-imagem-wrapper">
            <img 
              src="https://i.pinimg.com/736x/32/69/05/326905de2a4a561f83fe951f28429e2a.jpg" 
              alt="Ilustração de Jesus" 
              className="licao-imagem"
            />
          </div>

          <p>
            Nasceu em Belém de Judá (Miquéias 5:2; Mateus 2:1), de uma virgem chamada Maria, 
            que estava desposada com José (Mateus 1:18). Seus pais eram pessoas humildes e 
            habitavam em Nazaré, Cidade da Galileia (Mateus 21:11). Ali ele cresceu e desenvolveu-se, e 
            quando atingiu a maioridade, saiu pelas regiões de Judá para anunciar o Evangelho (boas 
            novas) do Reino de Deus (Mateus 4:13-17). Sua missão era <strong>"buscar e salvar o que se havia 
            perdido"</strong> (Lucas 19:10). No entanto, os Judeus (seus patrícios) não o receberam como seu 
            “salvador” (João 1:11). Daí, a promessa da salvação se estendeu para todos os povos (João 1:12).
          </p>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. Divindade e Sacrifício na Cruz</h2>
          <p>
            Os Evangelhos segundo Mateus, Marcos e Lucas relatam sua biografia. O Apóstolo 
            João valoriza a deidade (divindade) de Jesus, como sendo o Cristo (ungido) de Deus. 
            Jesus desfez de sua glória, veio a este mundo e morreu na cruz in prol da salvação da 
            humanidade (Filipenses 2:5-11). Assim sendo, somente em Cristo temos a garantia da vida 
            eterna (João 3:16-18).
          </p>

          <div className="citacao-biblica-card">
            <p className="citacao-biblica-text">
              "Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniquidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados."
            </p>
            <span className="citacao-biblica-ref">— Isaías 53:5</span>
          </div>

          <p>
            O sangue vertido por Jesus na cruz do calvário tem poder purificador (1 João 1:7). 
            Isaías, o profeta, declarou: <em>“ainda que os vossos pecados sejam como a escarlata, eles se 
            tornarão brancos como a neve; ainda que sejam vermelhos como o carmesim, se tornarão 
            como a branca lã”</em> (Isaías 1:18). Para obtermos o perdão dos pecados, precisamos suplicar a 
            Jesus (1 João 2:1-2).
          </p>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Ressurreição e a Grande Comissão</h2>
          <p>
            Jesus, após a sua morte, ao terceiro dia, ressuscitou dentre os mortos e foi visto por 
            mais de quinhentas pessoas, que ainda nos dias do Apóstolo Paulo, algumas delas estavam 
            vivas (1 Coríntios 15:6).
          </p>
          <p>
            Após sua ressurreição, antes de ser assunto aos céus, disse aos seus discípulos que 
            deveriam dar continuidade em sua missão (Mateus 28:19-20; Marcos 16:15-20). 
            Para conhecermos mais sobre Jesus, é preciso ler a bíblia e, principalmente, recebê-lo 
            em nossas vidas (João 5:39; 8:32, 36).
          </p>

          <div className="quadro-negro-box">
            <p>
              "Portanto, não perca tempo, venha para Jesus, pois ele está de braços abertos para 
              recebê-lo!"
            </p>
            <span className="autor-fonte">— Fundamento do Discipulado</span>
          </div>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões abaixo com base nos ensinamentos da Lição 3:</p>
          
          <div className="form-group">
            <label>1) Quais são os cinco nomes profetizados por Isaías (Isaías 9:6) atribuídos a Jesus?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Onde Jesus nasceu e em qual cidade ele cresceu e desenvolveu-se?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) De acordo com Lucas 19:10, qual era a missão principal de Jesus na terra?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O que aconteceu ao terceiro dia após a morte de Jesus, e por quantas pessoas estimadas ele foi visto?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) O que é necessário fazermos para conhecermos mais sobre Jesus e obtermos o perdão dos nossos pecados?</label>
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
                <li><strong>R1:</strong> Maravilhoso, Conselheiro, Deus Forte, Pai da Eternidade e Príncipe da Paz.</li>
                <li><strong>R2:</strong> Nasceu em Belém de Judá e cresceu na cidade de Nazaré, na Galileia.</li>
                <li><strong>R3:</strong> Buscar e salvar o que se havia perdido.</li>
                <li><strong>R4:</strong> Ele ressuscitou dentre os mortos e foi visto por mais de quinhentas pessoas.</li>
                <li><strong>R5:</strong> É preciso ler a Bíblia, suplicar a Ele o perdão e, principalmente, recebê-Lo em nossas vidas.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}