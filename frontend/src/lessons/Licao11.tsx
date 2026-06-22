import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao11({ onVoltar }: LicaoProps) {
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
          <span className="licao-badge">Módulo: Transparência Cristã</span>
          <h1>Lição 11: O Jejum</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Mas tu, quando jejuares, unge a tua cabeça, e lava o teu rosto, para não pareceres aos homens que jejuas, mas a teu Pai, que está em secreto..."
            <cite>— Mateus 6:17-18</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Uma Arma Secreta Espiritual</h2>
          <p>
            O Jejum, atuando em perfeita sinergia com a oração, é uma arma espiritual poderosa concedida à Igreja para combater 
            as forças inimigas e fortalecer o homem interior. Nas Escrituras, a prática do jejum é frequentemente associada ao 
            ato de <em>"afligir a alma"</em>, demonstrando total quebrantamento e dependência diante do Criador.
          </p>
          <p>
            Grandes servos de Deus utilizaram essa ferramenta em momentos cruciais de suas jornadas: Moisés (Êxodo 34:28), 
            Elias (1 Reis 19:8), Ana (1 Samuel 1:7), Davi (2 Samuel 1:12), Paulo (Atos 9:9) e o próprio Senhor Jesus (Mateus 4:2).
          </p>

          <h3>Tipos de Jejum Descritos na Bíblia:</h3>
          <ul className="lista-cozy">
            <li><strong>1. Jejum Típico (ou Normal):</strong> Consiste na abstinência total de alimentos sólidos, permitindo-se apenas a ingestão de líquidos (água). Os estudiosos apontam que Jesus utilizou este modelo no deserto, pois o texto afirma que, decorridos os 40 dias, Ele <em>teve fome</em>, mas não cita sede (Mateus 4:2).</li>
            <li><strong>2. Jejum Parcial:</strong> Restrição ou abstinência de certos tipos de alimentos específicos ou iguarias finas durante um período de tempo determinado (como fez Daniel).</li>
            <li><strong>3. Jejum Completo (ou Absoluto):</strong> Abstinência total tanto de sólidos quanto de líquidos (Atos 9:9). Exige cautela extrema e nunca deve ser prolongado devido aos severos riscos à saúde do corpo humano.</li>
          </ul>
        </section>

        <div className="section-separator"><span>✝️</span></div>

        <section className="licao-section">
          <h2>2. Duração e Perigos que Devem ser Evitados</h2>
          <p>
            A Bíblia não estipula uma regra rígida de tempo; a duração é relativa e varia de acordo com a disponibilidade, o propósito e as condições biológicas de cada indivíduo:
          </p>
          <ul>
            <li>O jejum comum dos judeus costumava durar um dia completo, indo de um pôr do sol a outro (Juízes 20:26).</li>
            <li>A rainha Ester, suas servas e os judeus em Susã jejuaram de forma absoluta por três dias e três noites (Ester 4:16).</li>
            <li>Moisés, Elias e Jesus jejuaram pelo período profético de quarenta dias em contextos específicos de revelação.</li>
          </ul>

          <div className="quadro-negro-box">
            <h4>⚠️ Alerta sobre os Perigos do Jejum Incorreto:</h4>
            <ul>
              <li><strong>Jejum sem Oração:</strong> Torna-se mera greve de fome ou privação dietética, perdendo totalmente o valor e o propósito espiritual diante de Deus.</li>
              <li><strong>O Perigo da Hipocrisia:</strong> Jejuar com semblante contristado e rostos desfigurados para ostentar espiritualidade e ser elogiado por homens (Mateus 6:16; Lucas 18:12).</li>
              <li><strong>Legalismo:</strong> Praticar o jejum de maneira mecânica apenas para atingir metas humanas ou tentar "comprar" favores divinos.</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. Por Que e Como Jejuar de Forma Eficaz?</h2>
          
          <h3>Motivos Relevantes para Consagrar um Jejum:</h3>
          <p>
            Jejuamos em virtude do estado moral e espiritual da sociedade; por causas individuais ou coletivas (Daniel 10:2-3); 
            em momentos de profunda aflição (1 Samuel 1:7); antes de tomarmos decisões cruciais — como Jesus fez ao inaugurar Seu ministério (Mateus 4:2) 
            e a igreja em Antioquia ao enviar os primeiros missionários (Atos 13:2); e para expressar nossa mais sincera adoração e gratidão.
          </p>

          <div className="nota-teologica">
            <h3>Passo a Passo Prático para o Discípulo:</h3>
            <ol>
              <li><strong>Planejamento:</strong> Estipule o tempo de duração. Se for iniciante, comece com períodos mais curtos.</li>
              <li><strong>Foco em Oração e Palavra:</strong> Reserve janelas de tempo durante o jejum para clamar e meditar em versículos específicos alinhados com o seu propósito.</li>
              <li><strong>Arrependimento e Perdão:</strong> Purifique as intenções do coração (Salmos 69:10). Ira, ressentimentos e discórdias costumam aflorar; vença-os em espírito.</li>
              <li><strong>Divórcio da Falsa Piedade:</strong> Lave o rosto e aja normalmente. O seu jejum deve ser um segredo guardado entre você e o Pai Celestial (Mateus 6:17-18).</li>
            </ol>
          </div>

          <p>
            O jejum regular expande o nosso discernimento e autoridade no reino espiritual. Os seus maiores frutos e galardões serão revelados na eternidade!
          </p>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Avalie os seus conhecimentos sobre a prática espiritual do jejum:</p>
          
          <div className="form-group">
            <label>1) Espiritualmente falando, qual é o propósito do jejum quando associado à oração?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Diferencie as características do Jejum Típico (Normal) e do Jejum Completo (Absoluto):</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) O que acontece quando um cristão se abstém de alimentos, mas não dedica tempo à oração?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Cite duas situações ou motivos bíblicos que justificam a necessidade de abrir um período de jejum:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) De acordo com os ensinamentos de Jesus em Mateus 6:16-18, como deve ser a postura externa do crente enquanto jejua?</label>
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
                <li><strong>R1:</strong> Funciona como uma arma espiritual para subjugar a carne, fortalecer a comunhão com Deus, trazer quebrantamento da alma e combater as forças espirituais do mal.</li>
                <li><strong>R2:</strong> O Jejum Típico consiste na abstinência de alimentos sólidos, permitindo a ingestão de água. O Jejum Completo ou Absoluto é a privação total tanto de alimentos sólidos quanto líquidos.</li>
                <li><strong>R3:</strong> O ato perde totalmente o seu valor espiritual perante Deus, tornando-se apenas uma mera restrição alimentar ou greve de fome comum.</li>
                <li><strong>R4:</strong> Pode ser motivado por grandes decisões (como o início de ministérios/missões), por causas de profunda aflição e crise, ou para clamar pelo despertamento moral e espiritual da nação.</li>
                <li><strong>R5:</strong> Deve ser uma postura discreta e natural (lavar o rosto, ungir a cabeça), sem semblantes tristes ou desfigurados, ocultando o ato das outras pessoas para que permaneça em secreto diante do Pai.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}