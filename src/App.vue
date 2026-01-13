<script setup>
const profile = {
  name: "Francisco Carlos de Sousa",
  title: "Técnico de TI no IFC | Analista de Sistemas | Consultor de TI | Dados & Cibersegurança",
  location: "São Bento do Sul – SC • Brasil",
  email: "carlosifpi@gmail.com",
  // Troque seu número no formato internacional (DDI+DDD+numero), sem espaços.
  whatsapp: "https://wa.me/5548991092775",
  github: "https://github.com/FranciscoCarlos1",
  // Se você não tiver LinkedIn, pode deixar como "#"
  linkedin: "https://www.linkedin.com/in/francisco-carlos-de-sousa/"
}

const highlights = [
  { label: "Setor Público", value: "IFC (Campus São Bento do Sul)" },
  { label: "Stack", value: "Vue • Vite • FastAPI • Laravel • PostgreSQL" },
  { label: "Foco", value: "Sistemas • Dados • Segurança" },
]

const areas = [
  {
    title: "Implantação & Migração (ERP/Sistemas)",
    text: "Acompanhamento técnico, auditoria de importação, consistência de dados e suporte ao go-live com checklist e relatório final.",
    tags: ["Migração", "Auditoria", "Go-live", "Processos"],
  },
  {
    title: "Desenvolvimento Web (Full Stack)",
    text: "Plataformas e painéis administrativos com autenticação, níveis de acesso, integrações e organização de código para evolução.",
    tags: ["Vue 3", "Vite", "FastAPI", "Laravel"],
  },
  {
    title: "Dashboards & BI (Python)",
    text: "Dashboards para análise operacional e tomada de decisão: KPIs, filtros, exportação e relatórios para gestão.",
    tags: ["Python", "Streamlit", "KPIs", "Relatórios"],
  },
  {
    title: "Infraestrutura & Redes",
    text: "Estruturação de rede corporativa, segmentação por setor, boas práticas e base pronta para CFTV/controle de acesso.",
    tags: ["Wi‑Fi", "VLAN", "Roteamento", "Boas práticas"],
  },
  {
    title: "Cibersegurança & Governança",
    text: "Boas práticas de segurança, LGPD e controles para reduzir risco, aumentar visibilidade e melhorar postura de segurança.",
    tags: ["LGPD", "CIS Controls", "Hardening", "Governança"],
  },
  {
    title: "Automação & Integrações",
    text: "Integrações entre sistemas, validações e automações para reduzir retrabalho, aumentar confiabilidade e acelerar entregas.",
    tags: ["APIs", "Automação", "Integração", "Eficiência"],
  },
]

const projects = [
  {
    name: "SCS SynCond",
    subtitle: "Gestão de condomínios (multiusuário)",
    description:
      "Plataforma para gestão de condomínios com reservas, visitantes, financeiro e manutenção, níveis de acesso e notificações em tempo real.",
    stack: ["FastAPI", "Vue 3", "Vite", "PostgreSQL", "WebSocket"],
    links: [
      { label: "Repositório", href: "https://github.com/FranciscoCarlos1" },
      { label: "Case (PDF)", href: "#" },
    ],
  },
  {
    name: "Gestão Cidadã",
    subtitle: "Demandas comunitárias com geolocalização",
    description:
      "Sistema para registro e acompanhamento de solicitações (bairro/rua/CEP), com mapa, status e painel administrativo.",
    stack: ["Laravel", "Vue", "PostgreSQL", "Mapas", "ViaCEP"],
    links: [
      { label: "Repositório", href: "https://github.com/FranciscoCarlos1" },
      { label: "Demo", href: "#" },
    ],
  },
  {
    name: "MeuDiaNaEscola",
    subtitle: "Comunicação família-escola e registros",
    description:
      "Plataforma para rotina escolar com registros, presença, relatórios e dashboards, aproximando responsáveis e equipe escolar.",
    stack: ["Laravel/Vue", "ou FastAPI/Vue", "PostgreSQL", "Notificações"],
    links: [
      { label: "Repositório", href: "https://github.com/FranciscoCarlos1" },
      { label: "Documento", href: "#" },
    ],
  },
  {
    name: "CarbonTrack AI",
    subtitle: "IoT + analytics para emissões veiculares",
    description:
      "Proposta de solução baseada em IoT para monitoramento e análise de emissões, com painel de indicadores ambientais.",
    stack: ["IoT", "API", "Dashboard", "Analytics"],
    links: [
      { label: "Artigo/Resumo", href: "#" },
      { label: "Repositório", href: "https://github.com/FranciscoCarlos1" },
    ],
  },
]

const experience = [
  {
    title: "Instituto Federal Catarinense (IFC) — Técnico de TI",
    period: "Atual",
    text: "Atuação com suporte, infraestrutura, sistemas e melhoria contínua, com foco em soluções aplicadas para ambientes reais do setor público.",
  },
  {
    title: "Consultoria em TI — Implantação, dados e processos",
    period: "Projetos",
    text: "Apoio em implantação/migração de sistemas, auditoria de dados e suporte a equipes em entrada em produção.",
  },
]

function scrollToId(id){
  const el = document.getElementById(id)
  if(el) el.scrollIntoView({ behavior: "smooth", block: "start" })
}
</script>

<template>
  <div class="nav">
    <div class="container navbar">
      <div class="brand">{{ profile.name }}</div>
      <div class="navlinks">
        <a class="btn" href="#sobre" @click.prevent="scrollToId('sobre')">Sobre</a>
        <a class="btn" href="#atuacao" @click.prevent="scrollToId('atuacao')">Atuação</a>
        <a class="btn" href="#projetos" @click.prevent="scrollToId('projetos')">Projetos</a>
        <a class="btn" href="#contato" @click.prevent="scrollToId('contato')">Contato</a>
      </div>
    </div>
  </div>

  <!-- HERO -->
  <section class="section">
    <div class="container">
      <div class="hero-wrap">
        <div class="card">
          <span class="badge">{{ profile.location }}</span>
          <h1>{{ profile.title }}</h1>
          <p>
            Atuo com tecnologia aplicada à gestão, dados e segurança da informação.
            Desenvolvo plataformas web, dashboards e soluções práticas para o setor público e privado,
            com foco em confiabilidade, usabilidade e entrega.
          </p>

          <div class="kpis">
            <div v-for="(k, i) in highlights" :key="i" class="kpi">
              <div style="font-weight:800">{{ k.label }}</div>
              <div class="small" style="color:var(--muted)">{{ k.value }}</div>
            </div>
          </div>

          <div style="display:flex; gap:.75rem; flex-wrap:wrap; margin-top:1.2rem">
            <a class="btn primary" href="#projetos" @click.prevent="scrollToId('projetos')">Ver projetos</a>
            <a class="btn secondary" :href="profile.whatsapp" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="btn" :href="profile.github" target="_blank" rel="noreferrer">GitHub</a>
            <a class="btn" :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
            <a class="btn" :href="`mailto:${profile.email}`">E-mail</a>
          </div>

          <div class="hr"></div>
          <p class="small">
            <strong style="color:var(--text)">Dica rápida:</strong> adicione 1 print por projeto e um README forte.
            Seu portfólio fica “nível recrutador” em 30 minutos.
          </p>
        </div>

        <div class="hero-side">
          <div class="card">
            <h3>O que eu entrego</h3>
            <div class="list" style="margin-top:.6rem">
              <div class="list-item">
                <div class="dot"></div>
                <div>
                  <div style="font-weight:800">Diagnóstico e plano de ação</div>
                  <div class="small" style="color:var(--muted)">O que melhorar, priorizar e medir.</div>
                </div>
              </div>
              <div class="list-item">
                <div class="dot"></div>
                <div>
                  <div style="font-weight:800">Execução com checklist</div>
                  <div class="small" style="color:var(--muted)">Implantação/migração com controle e rastreabilidade.</div>
                </div>
              </div>
              <div class="list-item">
                <div class="dot"></div>
                <div>
                  <div style="font-weight:800">Entrega documentada</div>
                  <div class="small" style="color:var(--muted)">Relatório, evidências e próximos passos.</div>
                </div>
              </div>
            </div>
          </div>

          <div class="card">
            <h3>Contato direto</h3>
            <p class="small">
              E-mail: <strong style="color:var(--text)">{{ profile.email }}</strong><br/>
              GitHub: <strong style="color:var(--text)">/FranciscoCarlos1</strong>
            </p>
            <a class="btn secondary" :href="profile.whatsapp" target="_blank" rel="noreferrer">Chamar no WhatsApp</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- SOBRE -->
  <section id="sobre" class="section">
    <div class="container">
      <h2>Sobre</h2>
      <div class="grid cols-2">
        <div class="card">
          <p>
            Sou Técnico de Tecnologia da Informação no IFC (Campus São Bento do Sul) e desenvolvedor com foco em
            sistemas web, automação e análise de dados. Também atuo como consultor de TI em projetos de implantação/migração
            e melhoria de processos, buscando soluções aplicáveis, seguras e mensuráveis.
          </p>
          <div class="hr"></div>
          <p class="small">
            Interesses: transformação digital no setor público, governança e segurança (LGPD/CIS Controls),
            IoT aplicada e plataformas SaaS multiusuário.
          </p>
        </div>

        <div class="card">
          <div v-for="(e, i) in experience" :key="i" style="margin-bottom:1rem">
            <div style="display:flex; align-items:center; justify-content:space-between; gap:.8rem">
              <div style="font-weight:900">{{ e.title }}</div>
              <span class="badge">{{ e.period }}</span>
            </div>
            <p style="margin-top:.35rem">{{ e.text }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ATUAÇÃO -->
  <section id="atuacao" class="section">
    <div class="container">
      <h2>Áreas de atuação</h2>
      <div class="grid cols-3">
        <div v-for="(a, i) in areas" :key="i" class="card">
          <div style="font-weight:900; font-size:1.05rem">{{ a.title }}</div>
          <p>{{ a.text }}</p>
          <div style="display:flex; gap:.45rem; flex-wrap:wrap; margin-top:.6rem">
            <span class="badge" v-for="(t, j) in a.tags" :key="j">{{ t }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- PROJETOS -->
  <section id="projetos" class="section">
    <div class="container">
      <h2>Projetos em destaque</h2>
      <div class="grid cols-2">
        <div v-for="(p, i) in projects" :key="i" class="card">
          <div style="display:flex; align-items:flex-start; justify-content:space-between; gap:1rem">
            <div>
              <div style="font-weight:900; font-size:1.15rem">{{ p.name }}</div>
              <div class="small" style="color:var(--muted); margin-top:.12rem">{{ p.subtitle }}</div>
            </div>
            <span class="badge">Projeto</span>
          </div>

          <p>{{ p.description }}</p>

          <div style="display:flex; gap:.45rem; flex-wrap:wrap; margin-top:.6rem">
            <span class="badge" v-for="(s, j) in p.stack" :key="j">{{ s }}</span>
          </div>

          <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:1rem">
            <a v-for="(l, k) in p.links" :key="k" class="btn" :href="l.href" target="_blank" rel="noreferrer">
              {{ l.label }}
            </a>
          </div>
        </div>
      </div>

      <div class="card" style="margin-top:1rem">
        <div style="font-weight:900">Quer ver mais?</div>
        <p class="small">No GitHub você encontra repositórios, documentação, protótipos e exemplos de implementação.</p>
        <a class="btn primary" :href="profile.github" target="_blank" rel="noreferrer">Abrir GitHub</a>
      </div>
    </div>
  </section>

  <!-- CONTATO -->
  <section id="contato" class="section">
    <div class="container">
      <h2>Contato</h2>
      <div class="grid cols-2">
        <div class="card">
          <div style="font-weight:900">Vamos conversar?</div>
          <p>
            Se você quer falar sobre consultoria, implantação/migração, desenvolvimento de sistemas ou dashboards,
            me chame. Eu retorno com uma proposta objetiva.
          </p>
          <div style="display:flex; gap:.6rem; flex-wrap:wrap; margin-top:1rem">
            <a class="btn secondary" :href="profile.whatsapp" target="_blank" rel="noreferrer">WhatsApp</a>
            <a class="btn" :href="`mailto:${profile.email}`">E-mail</a>
            <a class="btn" :href="profile.linkedin" target="_blank" rel="noreferrer">LinkedIn</a>
          </div>
          <p class="small" style="margin-top:1rem">
            E-mail: <strong style="color:var(--text)">{{ profile.email }}</strong>
          </p>
        </div>

        <div class="card">
          <div style="font-weight:900">Checklist rápido (para ficar forte)</div>
          <p class="small">
            ✅ Adicione 1 imagem por projeto (print das telas).<br/>
            ✅ Em cada repositório, crie um README com: objetivo, stack, prints, como rodar.<br/>
            ✅ Crie um PDF “Case” de 1 página por projeto (problema → solução → resultado).<br/>
            ✅ Coloque link do site no seu LinkedIn e assinatura de e-mail.
          </p>
        </div>
      </div>
    </div>
  </section>

  <footer class="footer">
    <div class="container small">
      © {{ new Date().getFullYear() }} {{ profile.name }} • Feito com Vue 3 + Vite • GitHub Pages
    </div>
  </footer>
</template>
