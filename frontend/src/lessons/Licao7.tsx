import './Licao1.css';

interface LicaoProps {
  onVoltar: () => void;
}

export default function Licao7({ onVoltar }: LicaoProps) {
  return (
    <div className="licao-page">
      <button className="back-btn" onClick={onVoltar}>
        &larr; Voltar ao Menu
      </button>

      <article className="licao-container">
        <header className="licao-header">
          <span className="licao-badge">Módulo: Doutrinas</span>
          <h1>Lição 7: Noções de Escatologia</h1>
          <div className="decor-line"></div>
          
          <div className="nota-teologica" style={{ borderLeftColor: '#d9534f', backgroundColor: '#fff5f5', margin: '20px 0' }}>
            <h3 style={{ color: '#d9534f', marginTop: 0 }}>Nota:</h3>
            <p style={{ margin: 0, fontSize: '0.95rem', lineHeight: '1.5' }}>
              A <strong>Escatologia</strong> (o estudo das últimas coisas) é um campo teológico vastíssimo, complexo e repleto de detalhes. 
              Esta lição tem como objetivo apresentar apenas um panorama resumido e simplificado dos principais eventos futuros. 
              Para um estudo mais aprofundado, recomendamos a leitura de obras especializadas e a consulta de fontes confiáveis.
            </p>
          </div>

          <blockquote className="versiculo-chave">
            "E, quando eu for e vos preparar lugar, virei outra vez e vos levarei para mim mesmo, para que, onde eu estiver, estejais vós também."
            <cite>— João 14:3</cite>
          </blockquote>
        </header>

        <section className="licao-section">
          <h2>1. O Arrebatamento da Igreja</h2>
          <p>
            O Arrebatamento é a primeira etapa ou aspecto da segunda vinda de Jesus. Trata-se de uma promessa preciosa 
            feita pelo próprio Salvador (João 14:3) e aguardada com profunda expectativa pela Igreja ao longo dos séculos.
          </p>

          <h3>Testemunho das Escrituras:</h3>
          <ul className="lista-cozy">
            <li><strong>Iminência:</strong> Poderá ocorrer a qualquer momento; esse dia virá de surpresa, como um ladrão na noite (2 Pedro 3:10).</li>
            <li><strong>Restrito:</strong> Apenas os salvos o contemplarão e com Ele darão entrada nas mansões celestiais.</li>
            <li><strong>Ordem dos Eventos:</strong> Os mortos em Cristo ressuscitarão primeiro; em seguida, os salvos que estiverem vivos serão transformados (1 Tessalonicenses 4:16-17).</li>
            <li><strong>Velocidade:</strong> O fato ocorrerá em uma fração de segundo, "num abrir e fechar de olhos" (1 Coríntios 15:51).</li>
            <li><strong>Glorificação:</strong> O corpo mortal e corruptível se revestirá de imortalidade e incorruptibilidade (1 Coríntios 15:52-53). Seremos finalmente semelhantes a Cristo (1 João 3:2), para a plena satisfação do Senhor (João 17:24).</li>
          </ul>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>2. O Tribunal de Cristo e as Bodas do Cordeiro</h2>
          <p>
            Após o arrebatamento, durante o período de sete anos em que a Terra enfrentará a <strong>Grande Tribulação</strong> 
            (tempo de horror para o mundo gentílico e de angústia para Israel), os salvos passarão por dois grandes eventos no céu:
          </p>

          <ul className="lista-cozy">
            <li><strong>O Tribunal de Cristo:</strong> Um evento exclusivo para os salvos, onde não se julgará a salvação, mas sim as obras e as reais intenções e motivações do coração de cada crente (2 Coríntios 5:10; 1 Coríntios 3:11-15).</li>
            <li><strong>As Bodas do Cordeiro:</strong> A grande celebração que consumará a união eterna entre Cristo e a Sua noiva, a Igreja. Todos os remidos do Antigo e do Novo Testamento se assentarão à mesa e o próprio Cristo os servirá (João 17:24; Mateus 8:11).</li>
          </ul>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>3. A Manifestação de Cristo em Glória</h2>
          <p>
            Logo após as Bodas do Cordeiro, ocorre a segunda etapa da volta de Jesus: a Sua <strong>Manifestação em Glória</strong> 
            (também chamada de <em>Parousia</em>). Diferente do arrebatamento, que será invisível ao mundo, nesta etapa <strong>todo olho O verá</strong> (Mateus 24:30; Atos 1:11).
          </p>

          <h3>Significado e Desdobramentos da Manifestação:</h3>
          <ol className="lista-cozy">
            <li><strong>Livramento de Israel:</strong> Cristo Se revelará a Israel, salvando a nação do exército inimigo sob a regência do Anticristo. Israel centralizará suas atenções nEle e haverá pranto e quebrantamento (Zacarias 12:10).</li>
            <li><strong>Glorificação Pública da Igreja:</strong> O mundo contemplará a Igreja que antes era espezinhada e perseguida, agora manifestada in glória com o seu Senhor.</li>
            <li><strong>Pavor dos Ímpios:</strong> Os rebeldes entrarão em desespero absoluto, clamando aos montes que caiam sobre eles diante da manifestação da Ira do Cordeiro (Apocalipse 6:16-17).</li>
            <li><strong>Vitória Sobrenatural:</strong> Cristo destruirá as forças inimigas miraculosamente pelo sopro e pela palavra que sai da Sua boca (Apocalipse 19:21). O Anticristo e o Falso Profeta serão lançados no Lago de Fogo, e Satanás será aprisionado por mil anos (Apocalipse 19:20; 20:2).</li>
          </ol>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>4. O Reino Milenial de Cristo</h2>
          <p>
            Com a prisão de Satanás e a derrota do governo do Anticristo, será inaugurado o Reino Milenial de Cristo 
            literalmente aqui na Terra por mil anos. A sede do governo mundial de Cristo será em Jerusalém e Ele governará 
            como o Príncipe da Paz (Isaías 9:6).
          </p>

          <div className="nota-teologica">
            <h3>Características Extraordinárias do Milênio:</h3>
            <ul>
              <li>Ausência total de antagonismo e guerras entre os homens;</li>
              <li>O progresso, a ciência e a agricultura atingirão o seu propósito perfeito;</li>
              <li>As fronteiras entre as nações serão abertas e as casas não precisarão de fechaduras;</li>
              <li>Doenças terríveis e moléstias não ceifarão mais as vidas humanas;</li>
              <li>Os exércitos serão extintos e as armas serão fundidas e transformadas em ferramentas agrícolas (Isaías 2:2-4; 65:18-22).</li>
            </ul>
          </div>
        </section>

        <div className="section-separator"><span>◆</span></div>

        <section className="licao-section">
          <h2>5. O Juízo do Grande Trono Branco e a Eternidade</h2>
          <p>
            Ao término dos mil anos, Satanás será solto por um breve período para enganar as nações, sendo finalmente 
            derrotado de forma definitiva e lançado no Lago de Fogo (Apocalipse 20:7-10). Na sequência, estabelece-se o 
            <strong>Juízo do Trono Branco</strong>, onde Cristo atuará como o Juiz por excelência (Atos 17:31).
          </p>

          <ul className="lista-cozy">
            <li>Os livros de registros serão abertos, incluindo o <strong>Livro da Vida</strong>. Aquele cujo nome não for encontrado escrito ali será lançado no lago de fogo (Apocalipse 20:15).</li>
            <li>Os salvos estarão presentes e seguros da condenação eterna (Romanos 8:1).</li>
            <li>O julgamento de Deus será conduzido com absoluta retidão, justiça e imparcialidade.</li>
          </ul>

          <p>
            Consumado o juízo final, cumpre-se a palavra apostólica de que todas as coisas foram sujeitas debaixo dos pés 
            de Cristo (1 Coríntios 15:27). 
          </p>

          <div className="quadro-negro-box">
            <p>
              Finalmente, Cristo e a Sua Igreja, em um só e glorioso cortejo, darão entrada na eternidade, que será adornada 
              por um <strong>Novo Céu e uma Nova Terra</strong>, onde habita a plena justiça de Deus e onde o Senhor será tudo em todos (Apocalipse 21).
            </p>
          </div>

          <div className="citacao-biblica-card" style={{ marginTop: '30px' }}>
            <p className="citacao-biblica-text" style={{ fontStyle: 'italic', color: '#2c3e50' }}>
              "É possível perceber um frescor, uma sensação deliciosa e inexprimível que silencia o nosso interior e desperta o desejo sincero de que este dia fosse hoje! Aleluias! Lutemos, firmes na Rocha, para não perdermos esta grande bênção."
            </p>
            <span className="citacao-biblica-ref">— Amém. Maranata!</span>
          </div>
        </section>
      </article>
    </div>
  );
}