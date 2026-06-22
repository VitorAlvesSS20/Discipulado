import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao15({ onVoltar }: LicaoProps) {
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
          <span className="licao-badge">Módulo: Vida Cristã</span>
          <h1>Lição 15: O Dízimo e as Ofertas</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes."
            <cite>— Malaquias 3:10</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O Significado do Dízimo</h2>
          <p>
            O termo "dízimo" provém do latim <em>decimus</em> e refere-se estritamente à <strong>décima parte (10%)</strong> de algo. Na prática cristã, é um ato regular e voluntário pelo qual o fiel, fundamentado em sua devoção, separa dez por cento de suas rendas brutas para entregar à igreja local. Esse ato expressa o reconhecimento de que Deus é o Senhor absoluto e o provedor de todas as coisas (Salmos 24:1; Ageu 2:8).
          </p>
          <p>
            Contribuir com o dízimo não se trata de uma "negociata" com o Criador, tampouco uma tentativa de comprar favores ou barganhar milagres. Significa, genuinamente, devolver uma pequena parte daquilo que a própria fonte de todo bem já nos concedeu. Quando há recusa voluntária em entregar o dízimo, o crente demonstra que ainda não compreendeu totalmente o senhorio e a bondade de Deus em suas finanças.
          </p>

          <blockquote>
            <strong>Adoração Prática:</strong> O dízimo faz parte integrante da adoração coletiva (1 Coríntios 16:1-4). Deve ser entregue por fé e amor. Sem fé, o ato esvazia-se em mero legalismo religioso, pois a Bíblia afirma com clareza que sem fé é impossível agradar a Deus (Hebreus 11:6).
          </blockquote>
        </section>

        <div className="section-separator"><span>🪙</span></div>

        <section className="licao-section">
          <h2>2. O Dízimo no Velho Testamento</h2>
          <p>
            No Antigo Testamento, o dízimo existia antes mesmo da instituição da Lei de Moisés como um ato puramente espontâneo e de gratidão:
          </p>
          <ul>
            <li><strong>Abraão:</strong> Entregou o dízimo de tudo ao sacerdote Melquisedeque após uma grande vitória (Gênesis 14:20).</li>
            <li><strong>Jacó:</strong> Fez um voto solene de devolver a décima parte de tudo o que o Senhor lhe prosperasse (Gênesis 28:20-22).</li>
          </ul>
          <p>
            Posteriormente, sob a Lei de Moisés, o dízimo tornou-se uma instituição oficial (Levítico 27:30-32). Seu propósito primário era garantir o sustento material da <strong>tribo de Levi (os levitas e sacerdotes)</strong>, visto que eles não receberam herança de terras em Canaã por estarem integralmente dedicados ao serviço do Tabernáculo e à liturgia (Números 18:21-24). 
          </p>
          
          <div className="nota-teologica">
            <h3>As Quatro Promessas ao Dizimista em Malaquias:</h3>
            <ol>
              <li><strong>Suprimento na Obra:</strong> Garantia de recursos necessários para que o trabalho da casa do Senhor não pare (Malaquias 3:10a).</li>
              <li><strong>Bênçãos Espirituais:</strong> Abertura das "janelas do céu" derramando favores imprevistos (Malaquias 3:10b).</li>
              <li><strong>Proteção e Produtividade:</strong> Repreensão ao devorador, trazendo estabilidade e frutos nos campos e negócios (Malaquias 3:11).</li>
              <li><strong>Bom Testemunho Público:</strong> O reconhecimento público e internacional das bênçãos divinas sobre a vida do servo de Deus (Malaquias 3:12).</li>
            </ol>
          </div>
        </section>

        <div className="section-separator"><span>📖</span></div>

        <section className="licao-section">
          <h2>3. O Dízimo e a Generosidade no Novo Testamento</h2>
          <p>
            No Novo Testamento, Jesus validou a prática do dízimo ao confrontar os escribas e fariseus. Ele os exortou por darem o dízimo de ervas minuciosas (como o hortelã e o cominho), mas omitirem os preceitos mais importantes da Lei: a justiça, a misericórdia e a fé. O Senhor foi categórico: <em>"Devíeis, porém, fazer estas coisas [a justiça, a misericórdia, a fé], sem omitir aquelas [o dízimo]"</em> (Mateus 23:23).
          </p>
          <p>
            Na Igreja Primitiva, o princípio da generosidade foi expandido de forma extraordinária. Sob o impacto do Espírito Santo, os primeiros cristãos possuíam profunda unidade e "tinham tudo em comum", vendendo propriedades para suprir integralmente os necessitados e depositar os valores aos pés dos apóstolos (Atos 2:44-45; 4:34).
          </p>
          <p>Hoje, na igreja local, a entrega dos dízimos e das ofertas permanece vital para três pilares:</p>
          <ul className="lista-cozy">
            <li><strong>Manutenção do Templo:</strong> Custos físicos, estruturais e operacionais do local de reunião.</li>
            <li><strong>Sustento dos Obreiros:</strong> Manutenção digna dos pastores e missionários dedicados integralmente à obra.</li>
            <li><strong>Socorro aos Necessitados:</strong> Assistência social e ações de amor prático aos membros carentes.</li>
          </ul>
        </section>

        <div className="section-separator"><span>🙌</span></div>

        <section className="licao-section">
          <h2>4. O que é a Oferta e Como Deve Ser Entregue?</h2>
          <p>
            Diferente do dízimo, que possui uma porcentagem fixa estabelecida (10%), a <strong>oferta</strong> é um valor voluntário, sem limites ou frequência obrigatória. Tanto no Antigo quanto no Novo Testamento, a finalidade da oferta é apoiar construções (como o Tabernáculo e o Templo), suprir demandas emergenciais e impulsionar a obra missionária.
          </p>
          <p>Segundo as diretrizes paulinas em 2 Coríntios 9 e 1 Coríntios 16, a oferta bíblica apresenta quatro marcas:</p>
          <ul className="lista-cozy">
            <li><strong>Voluntária e Decidida:</strong> Deve nascer de um propósito firme, planejado e deliberado no coração (1 Crônicas 29:5; 2 Coríntios 9:7).</li>
            <li><strong>Alegre e Generosa:</strong> Deus ama quem oferta com alegria, e não por constrangimento, tristeza ou obrigação legalista (2 Coríntios 9:7).</li>
            <li><strong>Proporcional às Condições:</strong> Cada um deve contribuir conforme a sua prosperidade financeira real (1 Coríntios 16:2).</li>
            <li><strong>Por Fé e Obediência:</strong> Ciente de que quem semeia com abundância, colherá em igual fartura material e espiritual (2 Coríntios 9:6).</li>
          </ul>
          
          <div className="conclusao-box">
            <h4>Conclusão</h4>
            <p>
              Como cristãos salvos e regenerados por Cristo, nossa contribuição financeira é um reflexo visível da gratidão por nossa redenção. Cooperar com dízimos e ofertas é exercer nossa cidadania no Reino de Deus, adorando ao Senhor com fidelidade, generosidade e profundo amor pela expansão do Evangelho.
            </p>
          </div>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Responda às questões avaliando a base bíblica e doutrinária sobre Dízimos e Ofertas:</p>
          
          <div className="form-group">
            <label>1) Qual é o significado literal da palavra "dízimo" e qual a diferença básica entre o ato de dizimar e o ato de ofertar?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) No Antigo Testamento, qual era o propósito principal do dízimo estabelecido na Lei de Moisés?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Cite dois exemplos bíblicos de homens que entregaram dízimos ao Senhor de forma espontânea antes da instituição da Lei:</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) O que Jesus afirmou aos escribas e fariseus em Mateus 23:23 a respeito da prática de entregar os dízimos?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) De acordo com o Novo Testamento, quais devem ser as atitudes do coração do cristão ao entregar uma oferta?</label>
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
                <li><strong>R1:</strong> Dízimo significa a "décima parte" (10%) de todas as rendas, sendo um valor percentual fixo. A oferta é um valor totalmente voluntário, flexível, sem limite de quantidade ou frequência pré-estabelecida.</li>
                <li><strong>R2:</strong> Destinava-se ao sustento da Tribo de Levi (levitas e sacerdotes), visto que eles não possuíam propriedades e heranças de terra, dedicando-se exclusivamente ao serviço do Templo e à liturgia.</li>
                <li><strong>R3:</strong> Abraão (ao entregar o dízimo de tudo a Melquisedeque em Gênesis 14) e Jacó (ao fazer o voto de devolver o dízimo em Betel em Gênesis 28).</li>
                <li><strong>R4:</strong> Jesus repreendeu a hipocrisia deles por priorizarem pequenos dízimos botânicos enquanto esqueciam a justiça, a fé e a misericórdia. O Senhor afirmou que eles deveriam praticar essas virtudes sem, contudo, deixar de dízimar.</li>
                <li><strong>R5:</strong> A oferta deve ser entregue com voluntariedade (decidida previamente no coração), com alegria e entusiasmo espiritual (não por tristeza ou obrigação), e de forma proporcional à sua real condição financeira.</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}