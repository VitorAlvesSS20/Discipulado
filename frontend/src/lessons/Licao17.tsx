import { useState } from 'react';
import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao17({ onVoltar }: LicaoProps) {
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
          <span className="licao-badge">Módulo: Apologética</span>
          <h1>Lição 17: Seitas e Heresias</h1>
          <div className="decor-line"></div>
          <blockquote className="versiculo-chave">
            "Acautelai-vos, que ninguém vos engane; porque muitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos."
            <cite>— Mateus 24:4-5</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. Introdução à Apologética</h2>
          <p>
            Como discípulos de Cristo, precisamos estar preparados para defender a pureza do Evangelho. Ao longo da história, diversos movimentos distorceram as Escrituras Sagradas, criando divisões e heresias perniciosas. Analisaremos as principais seitas sob três aspectos: fundação, princípios doutrinários e a respectiva refutação bíblica.
          </p>
        </section>

        <div className="section-separator"><span>🔮</span></div>

        <section className="licao-section">
          <h2>2. Análise de Seitas de Grande Vulto (Parte 1)</h2>
          
          <h3>I. Espiritismo</h3>
          <p><strong>Origem:</strong> É o mais antigo engano religioso (Deuteronômio 18:9-14). A vertente moderna teve início com as irmãs Fox (EUA, 1847) e foi codificada pelo francês Allan Kardec (1856). Divide-se em comum (adivinhação/astrologia), baixo espiritismo (rituais afro-brasileiros), científico (esoterismo) e kardecista.</p>
          <p><strong>Erros Doutrinários:</strong> Defesa da reencarnação, comunicação com mortos, caridade como salvação e visão de Jesus apenas como um "médium ou reformador".</p>
          <p><strong>Refutação Bíblica:</strong> Ao homem está ordenado morrer uma única vez, vindo depois disso o juízo (Hebreus 9:27). Jesus não é médium; Ele é Deus, Sacerdote e Rei absoluto (Filipenses 2:9-11).</p>

          <h3>II. Mormonismo (Igreja de Jesus Cristo dos Santos dos Últimos Dias)</h3>
          <p><strong>Origem:</strong> Fundada no século XIX por Joseph Smith (EUA), que alegou receber visões angélicas para restaurar uma suposta igreja que havia sumido da terra.</p>
          <p><strong>Erros Doutrinários:</strong> Afirmam que a Bíblia é incompleta/errônea, realizam batismo pelos mortos, creem que Deus já foi homem (casado com Eva no Éden) e que o casamento se estende eternamente no céu.</p>
          <p><strong>Refutação Bíblica:</strong> A Bíblia é perfeita e divinamente inspirada (2 Timóteo 3:16). Deus é Espírito, imutável e eterno (João 4:24; Malaquias 3:6). No céu, os salvos serão como os anjos, não se casando nem se dando em casamento (Mateus 22:30).</p>

          <h3>III. Adventismo do Sétimo Dia</h3>
          <p><strong>Origem:</strong> Iniciou-se com Guilherme Miller (que marcou erroneamente datas para a volta de Cristo) e foi estruturado por Joseph Bates e Ellen White.</p>
          <p><strong>Erros Doutrinários:</strong> Obrigatoriedade da guarda do sábado como cláusula de salvação, inconsciência da alma pós-morte ("sono da alma"), aniquilamento final dos ímpios e negação de que a expiação foi concluída na cruz (doutrina do santuário de 1844).</p>
          <p><strong>Refutação Bíblica:</strong> Cristo cumpriu e aboliu as ordenanças cerimoniais da Lei, fazendo-se Senhor do sábado (Marcos 2:27-28; Romanos 14:5-6). A alma mantém a consciência imediatamente após a morte (Lucas 16:22-30) e a expiação de Cristo foi efetuada de uma vez por todas na cruz (Hebreus 10:14).</p>
        </section>

        <div className="section-separator"><span>📜</span></div>

        <section className="licao-section">
          <h2>3. Análise de Seitas de Grande Vulto (Parte 2)</h2>

          <h3>IV. Testemunhas de Jeová</h3>
          <p><strong>Origem:</strong> Fundada por Charles Taze Russel em 1872 (EUA), com fortes influências do adventismo inicial.</p>
          <p><strong>Erros Doutrinários:</strong> Rejeição à Doutrina da Trindade (alegam que veio de Satanás), negação da divindade e eternidade de Cristo, afirmação de que o inferno não existe e limite fixo de apenas 144 mil salvos no céu.</p>
          <p><strong>Refutação Bíblica:</strong> A Trindade é evidente nas Escrituras (Mateus 3:16-17; 28:19). Jesus é eterno, Alfa e Ômega (Apocalipse 22:13). O inferno é um lugar real de suplício eterno (Mateus 5:22; 2 Pedro 2:4). Os 144 mil descritos em Apocalipse 7 são judeus selados, enquanto os salvos formam uma multidão incontável de todas as nações (Apocalipse 7:9).</p>

          <h3>V. Unicismo ("Só Jesus")</h3>
          <p><strong>Origem:</strong> Raízes no heresiarca Sabélio (Século III) e ressurgido no século XX com John S. Scheppe.</p>
          <p><strong>Erros Doutrinários:</strong> Negam a distinção das pessoas da Trindade, alegando que o Pai e o Espírito Santo são apenas títulos ou modos de manifestação de Jesus. Exigem batismo formulado rigidamente "só em nome de Jesus".</p>
          <p><strong>Refutação Bíblica:</strong> O Pai, o Filho e o Espírito Santo são três pessoas distintas que testemunham entre si (João 16:13-15). O próprio Jesus ordenou batizar em nome do Pai, e do Filho, e do Espírito Santo (Mateus 28:19).</p>

          <div className="nota-teologica">
            <h3>Outros Movimentos Menores Refutados:</h3>
            <ul>
              <li><strong>Bahaismo:</strong> Defende o panteísmo ("tudo é Deus"). A Bíblia ensina que Deus é o Criador transcendente e pessoal, e o pecado é uma realidade que afasta o homem de Deus (Romanos 3:23).</li>
              <li><strong>Ciência Cristã:</strong> Afirma que Deus é apenas um princípio impessoal. A Bíblia mostra que Deus possui personalidade, amor e vontade própria (João 4:24).</li>
              <li><strong>Evolucionismo:</strong> Declara que o homem descende biologicamente do macaco. A Bíblia afirma categoricamente a criação divina direta do homem (Gênesis 2:7).</li>
              <li><strong>Seicho-no-iê:</strong> Mistura Budismo e Xintoísmo, alegando que o pecado e as doenças são ilusões da mente. A Bíblia relata a dureza real do pecado e a necessidade de arrependimento (Ezequiel 18:20).</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>⛪</span></div>

        <section className="licao-section">
          <h2>4. Desvios Eclesiásticos: Ecumenismo e Catolicismo Romano</h2>
          
          <h3>VI. Ecumenismo</h3>
          <p>
            Movimento que visa fundir todas as religiões e ramificações eclesiásticas sob uma liderança global única (frequentemente associada à tutela papal). Biblicamente, este movimento pode servir de infraestrutura para a "superigreja apóstata", fornecendo suporte místico ao governo do Anticristo após o arrebatamento. A verdadeira unidade da Igreja dá-se na verdade da Palavra e na pessoa de Jesus Cristo, nunca na relativização doutrinária.
          </p>

          <h3>VII. Catolicismo Romano</h3>
          <p>
            Embora compartilhe das origens históricas do cristianismo, a Igreja Romana sofreu severa degeneração moral e teológica a partir do século IV, quando o Imperador Constantino oficializou o cristianismo no Império. Massas de pagãos foram batizadas sem conversão real, introduzindo seus deuses ancestrais sob a roupagem de "santos".
          </p>
          <p>Com o estabelecimento do papado (ano 600 d.C.), consolidaram-se dogmas contrários à Bíblia:</p>
          <ul className="lista-cozy">
            <li><strong>Idolatria e Mediação:</strong> Veneração de imagens e atribuição a Maria do papel de medianeira. A Bíblia afirma: há um só Deus e <em>um só Mediador</em> entre Deus e os homens, Jesus Cristo (1 Timóteo 2:5).</li>
            <li><strong>O Purgatório:</strong> Crença em um lugar de purificação pós-morte. A Bíblia declara que o sangue de Jesus Cristo nos purifica de <em>todo</em> pecado (1 João 1:7).</li>
            <li><strong>Livros Apócrifos:</strong> Inclusão de sete livros sem inspiração divina no cânon bíblico.</li>
          </ul>
        </section>

        <div className="section-separator"><span>📝</span></div>

        <section className="licao-section questionario-section">
          <h2>📝 Questionário do Discípulo</h2>
          <p className="sub-q">Avalie seus conhecimentos apologéticos respondendo às perguntas abaixo:</p>
          
          <div className="form-group">
            <label>1) Por que a doutrina espírita da reencarnação é considerada biblicamente falsa? Cite a referência bíblica que a refuta.</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q1} 
              onChange={(e) => setRespostas({...respostas, q1: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>2) Qual é o erro doutrinário dos Adventistas quanto ao descanso sabático e como o Novo Testamento responde a isso?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q2} 
              onChange={(e) => setRespostas({...respostas, q2: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>3) Como podemos refutar a afirmação das Testemunhas de Jeová de que a doutrina da Trindade não possui base bíblica?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q3} 
              onChange={(e) => setRespostas({...respostas, q3: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>4) Qual é a heresia defendida pelos grupos Unicistas ("Só Jesus") e qual texto bíblico desmonta essa tese?</label>
            <input 
              type="text" 
              placeholder="..." 
              value={respostas.q4} 
              onChange={(e) => setRespostas({...respostas, q4: e.target.value})}
            />
          </div>

          <div className="form-group">
            <label>5) Explique biblicamente por que os dogmas católicos do "Purgatório" e da mediação de Maria são incorretos:</label>
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
                <li><strong>R1:</strong> Porque a Bíblia afirma taxativamente em Hebreus 9:27 que ao homem está ordenado morrer uma única vez, vindo depois o juízo, eliminando qualquer possibilidade de retornos sucessivos (reencarnação).</li>
                <li><strong>R2:</strong> Eles impõem o sábado como dever de salvação. O Novo Testamento ensina que Jesus cumpriu e aboliu a obrigatoriedade da lei cerimonial na cruz, tornando-se o Senhor do sábado, dando liberdade ao cristão (Romanos 14:5-6; Marcos 2:27-28).</li>
                <li><strong>R3:</strong> Apresentando textos bíblicos claros que revelam a manifestação simultânea e a distinção das três pessoas divinas, como no batismo de Jesus (Mateus 3:16-17) e na ordem da grande comissão (Mateus 28:19).</li>
                <li><strong>R4:</strong> Eles negam a Trindade afirmando que o Pai e o Espírito Santo são apenas modos ou nomes do próprio Jesus. O erro é refutado em Mateus 28:19, onde Jesus ordena batizar expressamente em nome das três pessoas distintas: Pai, Filho e Espírito Santo.</li>
                <li><strong>R5:</strong> O Purgatório é anulado porque o sacrifício de Jesus é perfeito e Seu sangue nos limpa de "todo" o pecado (1 João 1:7). A mediação de Maria é falsa porque a Bíblia estipula que há um só Mediador entre Deus e os homens: Jesus Cristo (1 Timóteo 2:5).</li>
              </ul>
            </div>
          )}
        </section>
      </article>
    </div>
  );
}