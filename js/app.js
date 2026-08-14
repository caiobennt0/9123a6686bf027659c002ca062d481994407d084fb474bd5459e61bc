// ── BAIRROS ────────────────────────────────────────
const BAIRROS = {
  recife: ["Aflitos", "Afogados", "Água Fria", "Alto do Mandu", "Alto José Bonifácio", "Alto José do Pinho", "Alto Santa Terezinha", "Apipucos", "Areias", "Arruda", "Bairro do Recife", "Barro", "Beberibe", "Boa Viagem", "Boa Vista", "Bomba do Hemetério", "Bongi", "Brasília Teimosa", "Brejo da Guabiraba", "Brejo de Beberibe", "Cabanga", "Caçote", "Cajueiro", "Campina do Barreto", "Campo Grande", "Casa Amarela", "Casa Forte", "Caxangá", "Cidade Universitária", "Coelhos", "Cohab", "Coqueiral", "Cordeiro", "Córrego do Jenipapo", "Curado", "Derby", "Dois Irmãos", "Dois Unidos", "Encruzilhada", "Engenho do Meio", "Espinheiro", "Estância", "Fundão", "Graças", "Guabiraba", "Hipódromo", "Ibura", "Ilha do Leite", "Ilha do Retiro", "Ilha Joana Bezerra", "Imbiribeira", "Ipsep", "Iputinga", "Jaqueira", "Jardim São Paulo", "Jiquiá", "Jordão", "Linha do Tiro", "Macaxeira", "Madalena", "Mangabeira", "Mangueira", "Monteiro", "Morro da Conceição", "Mustardinha", "Nova Descoberta", "Paissandu", "Parnamirim", "Passarinho", "Pau-Ferro", "Peixinhos", "Pina", "Poço da Panela", "Ponto de Parada", "Porto da Madeira", "Prado", "Rosarinho", "San Martin", "Sancho", "Santana", "Santo Amaro", "Santo Antônio", "São José", "Sítio dos Pintos", "Soledade", "Tamarineira", "Tejipió", "Torre", "Torreão", "Torrões", "Totó", "Várzea", "Vasco da Gama", "Zumbi"],
  olinda: ["Águas Compridas", "Aguazinha", "Alto da Bondade", "Alto da Conquista", "Alto da Nação", "Alto do Sol Nascente", "Amaro Branco", "Amparo", "Bairro Novo", "Bonsucesso", "Bultrins", "Caixa d\u0027Água", "Carmo", "Casa Caiada", "Cidade Tabajara", "Fragoso", "Guadalupe", "Jardim Atlântico", "Jardim Brasil", "Ouro Preto", "Passarinho", "Peixinhos", "Rio Doce", "Salgadinho", "Santa Teresa", "São Benedito", "Sapucaia", "Sítio Novo", "Varadouro", "Vila Popular"],
  paulista: ["Arthur Lundgren I", "Arthur Lundgren II", "Bairro do Nobre", "Centro", "Cidade Tabajara", "Engenho Maranguape", "Enseadinha", "Fragoso", "Jaguarana", "Janga", "Jardim Maranguape", "Jardim Paulista", "Jardim Velho", "Maranguape I", "Maranguape II", "Maria Farinha", "Mirueira", "Nossa Senhora da Conceição", "Nossa Senhora do Ó", "Paratibe", "Parque do Janga", "Pau Amarelo", "Poty", "Vila Torres Galvão"]
};

const MUNICIPIOS_PE = ["Abreu e Lima", "Afogados da Ingazeira", "Afrânio", "Agrestina", "Água Preta", "Águas Belas", "Alagoinha", "Aliança", "Altinho", "Amaraji", "Angelim", "Araçoiaba", "Araripina", "Arcoverde", "Barra de Guabiraba", "Barreiros", "Belém de Maria", "Belém de São Francisco", "Belo Jardim", "Betânia", "Bezerros", "Bodocó", "Bom Conselho", "Bom Jardim", "Bonito", "Brejão", "Brejinho", "Brejo da Madre de Deus", "Buenos Aires", "Buíque", "Cabo de Santo Agostinho", "Cabrobó", "Cachoeirinha", "Caetés", "Calçado", "Calumbi", "Camaragibe", "Camocim de São Félix", "Camutanga", "Canhotinho", "Capoeiras", "Carnaíba", "Carnaubeira da Penha", "Carpina", "Caruaru", "Casinhas", "Catende", "Cedro", "Chã de Alegria", "Chã Grande", "Condado", "Correntes", "Cortês", "Cumaru", "Cupira", "Custódia", "Dormentes", "Escada", "Exu", "Feira Nova", "Fernando de Noronha", "Ferreiros", "Flores", "Floresta", "Frei Miguelinho", "Gameleira", "Garanhuns", "Glória do Goitá", "Goiana", "Granito", "Gravatá", "Iati", "Ibimirim", "Ibirajuba", "Igarassu", "Iguaraci", "Ilha de Itamaracá", "Inajá", "Ingazeira", "Ipojuca", "Ipubi", "Itacuruba", "Itaíba", "Itambé", "Itapetim", "Itapissuma", "Itaquitinga", "Jaboatão dos Guararapes", "Jaqueira", "Jataúba", "Jatobá", "João Alfredo", "Joaquim Nabuco", "Jucati", "Jupi", "Jurema", "Lagoa do Carro", "Lagoa do Itaenga", "Lagoa do Ouro", "Lagoa dos Gatos", "Lagoa Grande", "Lajedo", "Limoeiro", "Macaparana", "Machados", "Manari", "Maraial", "Mirandiba", "Moreilândia", "Moreno", "Nazaré da Mata", "Olinda", "Orobó", "Orocó", "Ouricuri", "Palmares", "Palmeirina", "Panelas", "Paranatama", "Parnamirim", "Passira", "Paudalho", "Paulista", "Pedra", "Pesqueira", "Petrolândia", "Petrolina", "Poção", "Pombos", "Primavera", "Quipapá", "Quixaba", "Recife", "Riacho das Almas", "Ribeirão", "Rio Formoso", "Sairé", "Salgadinho", "Salgueiro", "Saloá", "Sanharó", "Santa Cruz", "Santa Cruz da Baixa Verde", "Santa Cruz do Capibaribe", "Santa Filomena", "Santa Maria da Boa Vista", "Santa Maria do Cambucá", "Santa Terezinha", "São Benedito do Sul", "São Bento do Una", "São Caitano", "São João", "São Joaquim do Monte", "São José da Coroa Grande", "São José do Belmonte", "São José do Egito", "São Lourenço da Mata", "São Vicente Ferrer", "Serra Talhada", "Serrita", "Sertânia", "Sirinhaém", "Solidão", "Surubim", "Tabira", "Tacaimbó", "Tacaratu", "Tamandaré", "Taquaritinga do Norte", "Terezinha", "Terra Nova", "Timbaúba", "Toritama", "Tracunhaém", "Trindade", "Triunfo", "Tupanatinga", "Tuparetama", "Venturosa", "Verdejante", "Vertente do Lério", "Vertentes", "Vicência", "Vitória de Santo Antão", "Xexéu"];

const SESSION_TOKEN_KEY = 'mm_session_token';
let currentUser = null;
let painelAcoesOffset = 0;
let acoesFiltroAtual = 'todas';
let participacoesAcoes = {};
let authModalMode = 'login';
let authModalEmail = '';
let rankingPeriodoAtual = 'dia';

const BOTTON_MODELOS = {
  1: {
    classe: 'b1',
    html: '<div class="bt-slogan">Vem com a Tropa! •</div><div class="bt-maos"><span class="mao-ico mao-sm"></span></div><div class="bt-nome">Elias Jabbour</div>',
    rotulo: 'Botton Modelo 1',
    descricao: 'Modelo escolhido ao se inscrever',
  },
  2: {
    classe: 'b2',
    html: '<div class="bt-Elias">Elias</div><div class="bt-Jabbour">Jabbour</div><span class="mao-ico mao-sm"></span>',
    rotulo: 'Botton Modelo 2',
    descricao: 'Modelo escolhido ao se inscrever',
  },
  3: {
    classe: 'b3',
    html: '<div class="bt-to">Vem com</div><div class="bt-comano">Elias<br>Jabbour</div>',
    rotulo: 'Botton Modelo 3',
    descricao: 'Modelo escolhido ao se inscrever',
  },
};

const SELOS_JORNADA = [
  { slug: 'campo', nome: 'Campo', icone: '🚪', metaTexto: '1 ação de campo concluída' },
  { slug: 'digital', nome: 'Digital', icone: '📱', metaTexto: '1 ação digital concluída' },
  { slug: 'reuniao', nome: 'Reunião', icone: '🎤', metaTexto: '1 reunião concluída' },
];

const SELO_FALLBACK_POR_SLUG = {
  campo: SELOS_JORNADA[0],
  porta: SELOS_JORNADA[0],
  panfleto: SELOS_JORNADA[0],
  digital: SELOS_JORNADA[1],
  ligacoes: SELOS_JORNADA[1],
  reuniao: SELOS_JORNADA[2],
};

const RECOMPENSAS_PAINEL = [
  {
    nome: 'Botton exclusivo',
    icone: '🎁',
    descricao: 'Escolhido ao se inscrever',
    estado: () => ({ classe: 'ok', badge: 'rok', texto: '✓ Conquistado' }),
  },
  {
    nome: 'Adesivo exclusivo',
    icone: '🩹',
    descricao: 'Conquistado na primeira ação',
    estado: (ctx) => (ctx.acoes >= 1 ? { classe: 'ok', badge: 'rok', texto: '✓ Conquistado' } : { classe: 'prox', badge: 'rprx', texto: 'Falta 1 ação' }),
  },
  {
    nome: 'Boné bordado',
    icone: '🧢',
    descricao: 'Conquistado ao realizar duas ações',
    estado: (ctx) => (ctx.acoes >= 2 ? { classe: 'ok', badge: 'rok', texto: '✓ Conquistado' } : { classe: 'prox', badge: 'rprx', texto: `Faltam ${Math.max(0, 2 - ctx.acoes)}` }),
  },
  {
    nome: 'Camiseta do movimento',
    icone: '👕',
    descricao: 'Conquistado ao realizar cinco ações',
    estado: (ctx) => (ctx.acoes >= 5 ? { classe: 'ok', badge: 'rok', texto: '✓ Conquistado' } : { classe: 'prox', badge: 'rprx', texto: `Faltam ${Math.max(0, 5 - ctx.acoes)}` }),
  },
  {
    nome: 'Bandana colecionável',
    icone: '🎀',
    descricao: 'Conquistado ao realizar oito ações',
    estado: (ctx) => (ctx.acoes >= 8 ? { classe: 'ok', badge: 'rok', texto: '✓ Conquistado' } : { classe: 'prox', badge: 'rprx', texto: `Faltam ${Math.max(0, 8 - ctx.acoes)}` }),
  },
  {
    nome: 'Pôster exclusivo de artistas apoiadores',
    icone: '🖼️',
    descricao: 'Conquistado ao trazer cinquenta apoiadores',
    estado: (ctx) => (ctx.apoiadores >= 50 ? { classe: 'ok', badge: 'rok', texto: '✓ Conquistado' } : { classe: 'prox', badge: 'rprx', texto: `Faltam ${Math.max(0, 50 - ctx.apoiadores)}` }),
  },
];

function cidadeKey(value){
  return String(value || '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase();
}

function cidadeBairroKey(value){
  const key = cidadeKey(value);
  if (key === 'recife') return 'recife';
  if (key === 'paulista') return 'paulista';
  if (key === 'olinda') return 'olinda';
  return '';
}

function preencherSelectMunicipios(selectId, placeholder) {
  const select = document.getElementById(selectId);
  if (!select) return;
  const current = select.value || '';
  select.innerHTML = `<option value="">${placeholder}</option>` + MUNICIPIOS_PE.map((cidade) => `<option value="${cidade}">${cidade}</option>`).join('');
  if (current && MUNICIPIOS_PE.includes(current)) select.value = current;
}

function inicializarSelectsMunicipios() {
  preencherSelectMunicipios('f-cidade', 'Selecione sua cidade');
  preencherSelectMunicipios('mc-cidade', 'Selecione');
  preencherSelectMunicipios('el-cidade', 'Selecione');
  preencherSelectMunicipios('ag-cidade', 'Selecione sua cidade');
}

function getSessionToken(){
  return localStorage.getItem(SESSION_TOKEN_KEY) || '';
}
function setSessionToken(token){
  if(token) localStorage.setItem(SESSION_TOKEN_KEY, token);
}
function clearSessionToken(){
  localStorage.removeItem(SESSION_TOKEN_KEY);
  currentUser = null;
}
async function apiFetch(url, options = {}){
  const token = getSessionToken();
  const headers = { ...(options.headers || {}) };
  if (token) headers['x-session-token'] = token;
  return fetch(url, { ...options, headers });
}

// ── CIDADE → BAIRROS (formulário cadastro) ────────
function onCidadeChange() {
  const sel = document.getElementById('f-cidade');
  const wrap = document.getElementById('f-bairro-wrap');
  const bSel = document.getElementById('f-bairro');
  const bairroKey = cidadeBairroKey(sel.value);
  if (bairroKey) {
    wrap.classList.add('vis');
    bSel.innerHTML = '<option value="">Selecione o bairro</option>' +
      BAIRROS[bairroKey].map(b => `<option value="${b}">${b}</option>`).join('');
  } else {
    wrap.classList.remove('vis');
  }
}

// ── BAIRROS NOS MODAIS ─────────────────────────────
function mostrarBairroModal(selId, wrapId) {
  const sel = document.getElementById(selId);
  const wrap = document.getElementById(wrapId);
  const bSel = wrap.querySelector('select');
  if (!bSel) return;
  const bairroKey = cidadeBairroKey(sel.value);
  if (bairroKey) {
    wrap.classList.add('vis');
    bSel.innerHTML = '<option value="">Selecione o bairro</option>' +
      BAIRROS[bairroKey].map(b => `<option value="${b}">${b}</option>`).join('');
  } else {
    wrap.classList.remove('vis');
  }
}

// ── SAUDAÇÃO ──────────────────────────────────────
function definirSaudacao(nome) {
  const h = new Date().getHours();
  let emoji, periodo;
  if (h>=5&&h<12){emoji='🌅';periodo='Bom dia';}
  else if(h>=12&&h<18){emoji='☀️';periodo='Boa tarde';}
  else{emoji='🌙';periodo='Boa noite';}
  const primeiro = (nome || '').trim().split(' ')[0];
  const el=document.getElementById('saud-msg');
  if(!el) return;
  if (primeiro) {
    el.innerHTML=`${periodo}, <em>${primeiro}</em>! ${emoji}`;
    return;
  }
  el.textContent = `${periodo}! ${emoji}`;
}
definirSaudacao();

// ── NAV ───────────────────────────────────────────
function closeMobileNav(){
  const nav = document.querySelector('nav');
  const toggle = document.getElementById('nav-toggle');
  if(!nav || !toggle) return;
  nav.classList.remove('menu-open');
  toggle.setAttribute('aria-expanded', 'false');
}

function setupMobileNav(){
  const nav = document.querySelector('nav');
  const toggle = document.getElementById('nav-toggle');
  const links = document.getElementById('nav-links');
  if(!nav || !toggle || !links) return;

  toggle.addEventListener('click', () => {
    const abrir = !nav.classList.contains('menu-open');
    nav.classList.toggle('menu-open', abrir);
    toggle.setAttribute('aria-expanded', abrir ? 'true' : 'false');
  });

  links.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', () => {
      if(window.innerWidth <= 960) closeMobileNav();
    });
  });

  window.addEventListener('resize', () => {
    if(window.innerWidth > 960) closeMobileNav();
  });
}

function ir(pg){
  if (pg === 'painel' && !getSessionToken()) {
    iniciarLoginFluxo();
    return;
  }
  document.querySelectorAll('.pg').forEach(p=>p.classList.remove('ativa'));
  document.querySelectorAll('.nav-btn').forEach(b=>b.classList.remove('ativo'));
  document.getElementById('pg-'+pg).classList.add('ativa');
  window.scrollTo(0,0);
  if (pg === 'mapa') {
    loadAcoesStats();
    loadCidadesAtivas();
    loadProximasAcoes('todas');
  } else if (pg === 'comites') {
    loadPontosEncontro();
  } else if (pg === 'painel') {
    loadPainelResumo();
    loadApoiadoresPainel();
  }
  closeMobileNav();
}

// ── FORM STEPS ────────────────────────────────────
function avancar(n){
  if (n !== 1) return;
  document.querySelectorAll('.form-bloco').forEach(b=>b.classList.remove('ativo'));
  document.getElementById('bloco-1').classList.add('ativo');
}
function toggle(el){el.classList.toggle('sel');}

function getCurrentCadastroStep(){
  return 1;
}

function validarBloco1(){
  const nome = (document.getElementById('f-nome')?.value || '').trim();
  const telefone = (document.getElementById('f-tel')?.value || '').trim();
  const email = (document.getElementById('f-email')?.value || '').trim();
  const cidade = document.getElementById('f-cidade')?.value || '';
  const bairroWrap = document.getElementById('f-bairro-wrap');
  const bairro = document.getElementById('f-bairro')?.value || '';

  if (!nome || !telefone || !email || !cidade) {
    toast('⚠️ Preencha nome, WhatsApp, email e cidade para continuar');
    return false;
  }

  if (bairroWrap?.classList.contains('vis') && !bairro) {
    toast('⚠️ Selecione também o bairro para continuar');
    return false;
  }

  return true;
}

function renderPainelBotton(modelo){
  const painel = document.getElementById('painel-botton');
  if (!painel) return;
  const botton = BOTTON_MODELOS[Number(modelo)] || BOTTON_MODELOS[1];
  painel.innerHTML = `
    <div class="be-circle ${botton.classe}" style="width:90px;height:90px">${botton.html}</div>
    <div style="font-size:12px;color:var(--txt2)">${botton.rotulo} · ${botton.descricao}</div>
  `;
}

function renderPainelSelos(selos){
  const itensBrutos = Array.isArray(selos?.itens) ? selos.itens : [];
  const itens = (itensBrutos.length ? itensBrutos : SELOS_JORNADA).map((item) => {
    const fallback = SELO_FALLBACK_POR_SLUG[item.slug] || {};
    return {
      ...fallback,
      ...item,
      nome: item.nome || fallback.nome || 'Emblema',
      icone: item.icone || fallback.icone || '🏅',
      metaTexto: item.metaTexto || fallback.metaTexto || 'Concluir uma ação',
      conquistado: Boolean(item.conquistado),
    };
  });
  const grid = document.getElementById('painel-selos-grid');
  const fill = document.getElementById('painel-selos-fill');
  const label = document.getElementById('painel-selos-label');
  const next = document.getElementById('painel-selos-next');

  if (grid && itens.length) {
    const proximoIndex = itens.findIndex((item) => !item.conquistado);
    grid.innerHTML = itens.map((item, index) => {
      const state = item.conquistado ? 'ok' : index === proximoIndex ? 'prox' : 'lock';
      const midia = item.imagem_url
        ? `<img src="${item.imagem_url}" alt="${item.nome}" class="selo-img">`
        : `<div class="selo-ico">${item.icone}</div>`;
      return `<div class="selo ${state}">${midia}<div class="selo-n">${item.nome}</div><div class="selo-meta">${item.metaTexto || ''}</div>${item.conquistado ? '<div class="chk">✓</div>' : ''}</div>`;
    }).join('');
  }

  const total = Number(selos?.total || itens.length || 0);
  const conquistados = Number(selos?.conquistados || itens.filter((item) => item.conquistado).length || 0);
  const pct = total ? Math.round((conquistados / total) * 100) : 0;
  if (fill) fill.style.width = pct + '%';
  if (label) label.textContent = `${conquistados} de ${total} emblemas`;

  const proximo = itens.find((item) => !item.conquistado);
  if (next) {
    next.innerHTML = proximo
      ? `Próximo: <strong>${proximo.nome}</strong> (${proximo.metaTexto})`
      : 'Próximo: <strong>Jornada concluída</strong> (todos os emblemas desbloqueados)';
  }
}

function renderPainelRecompensas(d){
  const rec = document.getElementById('painel-recompensas');
  if (!rec) return;
  const ctx = {
    acoes: Number(d?.stats?.acoes || 0),
    apoiadores: Number(d?.stats?.apoiadores || 0),
  };
  rec.innerHTML = RECOMPENSAS_PAINEL.map((item) => {
    const estado = item.estado(ctx);
    return `
      <div class="recomp-it ${estado.classe}">
        <div class="recomp-ico">${item.icone}</div>
        <div class="recomp-info">
          <div class="recomp-nome">${item.nome}</div>
          <div class="recomp-desc">${item.descricao}</div>
        </div>
        <div class="rst ${estado.badge}">${estado.texto}</div>
      </div>
    `;
  }).join('');
}

async function concluir(){
  if (!validarBloco1()) {
    return;
  }

  const nome=(document.getElementById('f-nome')?.value||'').trim()||'Voluntária(o)';
  const telefone=(document.getElementById('f-tel')?.value||'').trim();
  const email=(document.getElementById('f-email')?.value||'').trim();
    const cidadeSel=document.getElementById('f-cidade');
  const cidadeVal=cidadeSel?.value||'';
  const cidadeTxt=cidadeSel?.options[cidadeSel.selectedIndex]?.text||'Rio de Janeiro';
  if(!telefone||!cidadeVal||!email){
    toast('⚠️ Preencha WhatsApp, email e cidade para continuar');
    return;
  }
  const bairroSel=document.getElementById('f-bairro');
  const bairro=bairroSel?.value||'';
  try {
    const regRes = await fetch('/api/voluntarios',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({
        nome, telefone, email, cidade:cidadeVal, bairro,
      })
    });
    if (!regRes.ok) {
      const payload = await regRes.json().catch(()=>({}));
      toast('⚠️ ' + (payload.error || 'Não foi possível concluir seu cadastro agora.'));
      return;
    }
  } catch (e) {
    toast('⚠️ Erro de conexão ao cadastrar.');
  }

  // Update success screen
  document.getElementById('cp-nome').textContent=nome;
  document.getElementById('cp-reg').textContent='📍 '+cidadeTxt+(bairro?' — '+bairro:'');
  definirSaudacao(nome);
  document.querySelectorAll('.form-bloco').forEach(b=>b.classList.remove('ativo'));
  document.getElementById('bloco-ok').classList.add('ativo');
  ['fs1'].forEach(id=>{const el=document.getElementById(id);if(el)el.classList.add('ok');});
  if(bairro){
    const bairroKey = cidadeBairroKey(cidadeVal);
    if (bairroKey) registrarBairroNoCalor(bairroKey,bairro);
  }
}

// ── ELEITORES ────────────────────────────────────
function salvarEleitor(){
  const nome=document.getElementById('el-nome').value.trim();
  const telefone=document.getElementById('el-tel').value.trim();
  const cidadeSel=document.getElementById('el-cidade');
  const cidade=cidadeSel.options[cidadeSel.selectedIndex]?.text||'PE';
  const bairroSel=document.getElementById('el-bairro-wrap')?.querySelector('select');
  const bairro=bairroSel?.value||'';
  if(!nome||!telefone||!cidadeSel.value){toast('⚠️ Preencha todos os campos obrigatórios');return;}
  apiFetch('/api/painel/apoiadores',{
    method:'POST',
    headers:{'Content-Type':'application/json'},
    body:JSON.stringify({nome,telefone,cidade,bairro})
  }).then(async (res)=>{
    if(!res.ok){
      const err=await res.json().catch(()=>({}));
      toast('⚠️ '+(err.error||'Erro ao salvar apoiador'));
      return;
    }
    fecharModal('modal-eleitor');
    toast('🗳️ Apoiador(a) adicionado(a) com sucesso! 💗');
    document.getElementById('el-nome').value='';
    document.getElementById('el-tel').value='';
    cidadeSel.value='';
    document.getElementById('el-bairro-wrap').classList.remove('vis');
    if(bairroSel) bairroSel.innerHTML='<option value="">Selecione o bairro</option>';
    loadApoiadoresPainel();
    loadPainelResumo();
  }).catch(()=>toast('⚠️ Erro de conexão'));
}

function renderEleitores(eleitores){
  const lista=document.getElementById('eleit-lista');
  if(!lista)return;
  lista.innerHTML=(eleitores||[]).map(e=>{
    const ini=e.nome.split(' ').filter(Boolean).map(p=>p[0]).slice(0,2).join('').toUpperCase();
    const loc=e.cidade+(e.bairro?' — '+e.bairro:'');
    return `<div class="el-item"><div class="el-av">${ini}</div><div class="el-info"><div class="el-nome">${e.nome}</div><div class="el-meta">${loc}</div></div><div class="el-badge">✓ Confirmado</div></div>`;
  }).join('');
  const tot=document.getElementById('el-total');
  if(tot) tot.innerHTML=`<strong>${(eleitores||[]).length} apoiadores</strong> registrados · Meta: 50 por voluntária(o)`;
}

// ── MAPA ─────────────────────────────────────────
const cidadesAtivas = new Set(['Recife','Paulista','Olinda','Caruaru','Petrolina','Serra Talhada']);

function ativarCidade(el){
  const nome=el.dataset.nome;
  const tooltip=document.getElementById('mapa-tooltip');
  const info=el.classList.contains('acao') ? '✅ '+nome+' — com ação ativa!' : '📍 '+nome;
  tooltip.textContent=info;
  const rect=el.getBoundingClientRect();
  tooltip.style.left=(rect.left+rect.width/2)+'px';
  tooltip.style.top=rect.top+'px';
  tooltip.style.display='block';
  clearTimeout(tooltip._t);
  tooltip._t=setTimeout(()=>{tooltip.style.display='none';},2000);
}

function adicionarCidadeNoMapa(nome){
  const els=document.querySelectorAll('.municipio[data-nome="'+nome+'"]');
  els.forEach(el=>{
    el.classList.add('acao');
    cidadesAtivas.add(nome);
  });
  atualizarCidadesAtivas();
}

function atualizarCidadesAtivas(){
  const el=document.getElementById('cidades-ativas');
  if(!el)return;
  el.innerHTML=[...cidadesAtivas].map(c=>`<span class="cidade-ativa-badge">📍 ${c}</span>`).join('');
}

// ── FILTROS ──────────────────────────────────────
function filtrar(btn,tipo){
  btn.closest('.filtros').querySelectorAll('.filtro-btn').forEach(b=>b.classList.remove('ativo'));
  btn.classList.add('ativo');
  loadProximasAcoes(tipo);
}
function filtrarComite(btn,polo){
  btn.closest('.filtros').querySelectorAll('.filtro-btn').forEach(b=>b.classList.remove('ativo'));
  btn.classList.add('ativo');
  document.querySelectorAll('.comite-card-it').forEach(c=>{
    c.style.display=(polo==='todos'||c.dataset.polo===polo)?'block':'none';
  });
}

// ── MODAIS ────────────────────────────────────────
function abrirModal(id){document.getElementById(id).classList.add('open');}
function fecharModal(id){document.getElementById(id).classList.remove('open');}
document.querySelectorAll('.modal-ov').forEach(m=>{
  m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('open');});
});

function abrirModalAuth(mode, email){
  authModalMode = mode || 'login';
  authModalEmail = email || '';
  abrirModal('modal-auth');
}

function fecharModalAuth(){
  fecharModal('modal-auth');
  authModalMode = 'login';
  authModalEmail = '';
}

async function submitAuthModal(){
  toast('⚠️ Fluxo de login movido para senha.');
}

// ── VIDEO ─────────────────────────────────────────
function simularVideo(){toast('▶ Carregando vídeo...');}
async function loadVideoConfig(){
  try{
    const res=await fetch('/api/config');
    const {video}=await res.json();
    const card=document.getElementById('video-card');
    if(!card)return;
    const orientation = video?.orientation || 'landscape';
    const aspectRatio = video?.aspectRatio || (orientation === 'portrait' ? '9 / 16' : orientation === 'square' ? '1 / 1' : '16 / 9');
    card.style.setProperty('--video-ratio', aspectRatio);
    card.classList.toggle('is-portrait', orientation === 'portrait');
    card.classList.toggle('is-square', orientation === 'square');
    if(video.type==='youtube'){
      card.innerHTML=`<iframe class="video-frame" src="https://www.youtube.com/embed/${video.id}" title="Mensagem do Elias Jabbour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
    } else if(video.type==='local'){
      card.innerHTML=`<div class="video-frame"><video controls playsinline preload="metadata"><source src="${video.url}" type="video/mp4">Seu navegador não suporta vídeo.</video></div>`;
    }
  }catch(e){}
}

// ── SHARE ─────────────────────────────────────────
function shareWhatsApp(){
  const msg=encodeURIComponent('💗 Vem com Elias Jabbour! Junte-se ao movimento popular do Rio de Janeiro: '+window.location.origin);
  window.open('https://wa.me/?text='+msg,'_blank');
}
function shareTelegram(){
  const url=encodeURIComponent(window.location.origin);
  const text=encodeURIComponent('💗 Vem com Elias Jabbour! Movimento popular no RJ');
  window.open('https://t.me/share/url?url='+url+'&text='+text,'_blank');
}
function shareInstagram(){
  navigator.clipboard.writeText(window.location.origin).then(()=>{
    toast('🔗 Link copiado! Abra o Instagram e cole no seu perfil ou story 📸');
  }).catch(()=>{
    toast('📸 Copie o link e cole no Instagram: '+window.location.origin);
  });
}
async function compartilharMovimento(){
  const shareData={title:'Vem com Elias Jabbour 💗',text:'Doe para a candidatura de Elias Jabbour e ajude o movimento popular do Rio de Janeiro a chegar mais longe!',url:'https://queroapoiar.com.br/elias-jabbour'};
  if(navigator.share){
    try{await navigator.share(shareData);return;}catch(e){}
  }
  try{await navigator.clipboard.writeText(window.location.origin);}catch(e){}
  toast('🔗 Link copiado para a área de transferência! Compartilhe com quem você ama 💗');
}

// ── HOME: AGENDA PÚBLICA ─────────────────────────
async function loadAgendaPublica(){
  const lista=document.getElementById('agenda-lista');
  if(!lista)return;
  try{
    const res=await fetch('/api/agenda/publica');
    const {data}=await res.json();
    if(!data||!data.length){
      lista.innerHTML='<div style="padding:1rem;text-align:center;color:var(--txt3);font-size:13px">Nenhum evento público agendado no momento.</div>';
      return;
    }
    const safeDateTime = (dateStr, timeStr) => {
      if (!dateStr || !timeStr) return null;
      const iso = `${String(dateStr).slice(0,10)}T${String(timeStr).slice(0,8)}`;
      const dt = new Date(iso);
      return Number.isNaN(dt.getTime()) ? null : dt;
    };

    lista.innerHTML=data.map(e=>{
      const d=safeDateTime(e.data,e.hora);
      if(!d){
        return `<div class="ag-item"><div class="ag-info"><div class="ag-titulo">${e.titulo||'Compromisso'}</div><div class="ag-local">📍 ${e.local_evento||'Local a confirmar'}</div></div><div class="ag-hora">A confirmar</div></div>`;
      }
      const dia=d.getDate().toString().padStart(2,'0');
      const mes=d.toLocaleString('pt-BR',{month:'short'}).replace('.','');
      const hora=String(e.hora||'').substring(0,5).replace(':','h');
      const localLabel = e.local_evento || 'Local a confirmar';
      return `<div class="ag-item"><div class="ag-data"><div class="ag-dia">${dia}</div><div class="ag-mes">${mes}</div></div><div class="ag-info"><div class="ag-titulo">${e.titulo}</div><div class="ag-local">📍 ${localLabel}</div></div><div class="ag-hora">${hora}</div></div>`;
    }).join('');
  }catch(e){}
}

// ── HOME: FORMULÁRIO DE AGENDA ───────────────────
async function submitAgendaForm(){
  const nome=(document.getElementById('ag-nome')?.value||'').trim();
  const telefone=(document.getElementById('ag-tel')?.value||'').trim();
  const cidade=(document.getElementById('ag-cidade')?.value||'').trim();
  const local=(document.getElementById('ag-local')?.value||'').trim();
  const data_preferida=document.getElementById('ag-data')?.value||'';
  const hora_inicio=document.getElementById('ag-hora-inicio')?.value||'';
  const hora_fim=document.getElementById('ag-hora-fim')?.value||'';
  if(!nome||!telefone||!cidade||!local||!data_preferida||!hora_inicio||!hora_fim){
    toast('⚠️ Preencha todos os campos obrigatórios (*)');
    return;
  }
  if(hora_fim<=hora_inicio){
    toast('⚠️ A hora final precisa ser maior que a hora inicial.');
    return;
  }
  const publico_esperado=document.getElementById('ag-publico')?.value||'';
  const descricao=(document.getElementById('ag-desc')?.value||'').trim();
  try{
    const res=await fetch('/api/agenda/solicitar',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({nome,telefone,cidade,local,data_preferida,hora_inicio,hora_fim,publico_esperado,descricao})
    });
    if(res.ok){
      fecharModal('modal-agenda');
      toast('✅ Solicitação enviada! A equipe do Elias vai te contatar em breve 💗');
    } else {
      toast('⚠️ Erro ao enviar. Tente novamente.');
    }
  }catch(e){
    toast('⚠️ Erro de conexão. Verifique sua internet.');
  }
}

// ── AÇÕES: CARREGAR STATS, MAPA, LISTA ───────────
async function loadAcoesStats(){
  try{
    const res=await fetch('/api/acoes/stats');
    const stats=await res.json();
    const map=[{id:'stat-recife',k:'recife'},{id:'stat-paulista',k:'paulista'},{id:'stat-olinda',k:'olinda'},{id:'stat-outras',k:'outras'}];
    map.forEach(({id,k})=>{
      const el=document.getElementById(id);
      if(el) el.textContent=stats[k]??0;
    });
  }catch(e){}
}

async function loadCidadesAtivas(){
  try{
    const res=await fetch('/api/acoes/cidades-ativas');
    const {cidades}=await res.json();
    document.querySelectorAll('.municipio.acao').forEach(el=>el.classList.remove('acao'));
    cidades.forEach(nome=>{
      document.querySelectorAll(`.municipio[data-nome="${nome}"]`).forEach(el=>el.classList.add('acao'));
    });
    const el=document.getElementById('cidades-ativas');
    if(el) el.innerHTML=cidades.length?cidades.map(c=>`<span class="cidade-ativa-badge">📍 ${c}</span>`).join(''):'<span style="color:var(--txt3);font-size:13px">Nenhuma ação ativa no momento.</span>';
  }catch(e){}
}

async function loadProximasAcoes(tipo='todas'){
  acoesFiltroAtual = tipo || 'todas';
  const lista=document.getElementById('acoes-lista');
  if(!lista)return;
  lista.innerHTML='<div style="padding:2rem;text-align:center;color:var(--txt3)">Carregando ações...</div>';
  try{
    const url=acoesFiltroAtual==='todas'?'/api/acoes/proximas':'/api/acoes/proximas?tipo='+acoesFiltroAtual;
    const [res, partRes] = await Promise.all([
      fetch(url),
      getSessionToken() ? apiFetch('/api/painel/acoes/participacoes') : Promise.resolve(null),
    ]);
    const {data}=await res.json();

    participacoesAcoes = {};
    if (partRes && partRes.ok) {
      const payload = await partRes.json().catch(()=>({}));
      (payload.data || []).forEach((item) => {
        participacoesAcoes[String(item.acao_id)] = item;
      });
    }

    if(!data||!data.length){
      lista.innerHTML='<div style="padding:2rem;text-align:center;color:var(--txt3);font-size:13px">Nenhuma ação programada no momento.</div>';
      return;
    }
    lista.innerHTML=data.map(renderAcaoCard).join('');
  }catch(e){
    lista.innerHTML='<div style="padding:2rem;text-align:center;color:var(--txt3);font-size:13px">Erro ao carregar ações.</div>';
  }
}

function renderAcaoCard(a){
  const iconMap={campo:'🚪',digital:'📱',reuniao:'🎤'};
  const classMap={campo:'tc',digital:'td',reuniao:'tr2'};
  const d=new Date(a.data+'T'+a.hora);
  const dataFmt=d.toLocaleDateString('pt-BR',{weekday:'short',day:'numeric',month:'short'});
  const hora=a.hora.substring(0,5).replace(':','h');
  const local=a.cidade?(a.cidade+(a.local?' · '+a.local:'')):'Online';
  const polo=a.cidade||'Todos os polos';
  const hasToken = !!getSessionToken();
  const status = String(participacoesAcoes[String(a.id)]?.status || '').toLowerCase();
  const isSolicitado = status === 'pendente' || status === 'aprovado';
  const label = isSolicitado ? 'Cancelar' : 'Participar';
  const click = isSolicitado ? `cancelarParticipacaoAcao(${a.id})` : `participarAcao(${a.id})`;
  const title = hasToken ? '' : ' title="Faça login no painel para participar"';

  return `<div class="acao-c" data-tipo="${a.tipo}"><div class="acao-tipo ${classMap[a.tipo]||'tc'}">${iconMap[a.tipo]||'📌'}</div><div class="acao-info"><div class="acao-tit">${a.nome}</div><div class="acao-meta">📅 ${dataFmt} · ${hora} · ${local}</div></div><div class="acao-polo">${polo}</div><button class="btn-part${isSolicitado ? ' is-cancel' : ''}" onclick="${click}"${title}>${label}</button></div>`;
}
async function participarAcao(id){
  if(!getSessionToken()){
    iniciarLoginFluxo();
    return;
  }
  try{
    const res = await apiFetch('/api/painel/acoes/'+id+'/participar',{ method:'POST' });
    const payload = await res.json().catch(()=>({}));
    if(res.ok){
      toast('✅ Participação enviada e aguardando validação do admin');
      participacoesAcoes[String(id)] = { acao_id: id, status: 'pendente' };
      loadProximasAcoes(acoesFiltroAtual);
    } else {
      toast('⚠️ '+(payload.error || 'Não foi possível registrar participação'));
    }
  } catch(e){
    toast('⚠️ Erro de conexão');
  }
}

async function cancelarParticipacaoAcao(id){
  if(!getSessionToken()){
    iniciarLoginFluxo();
    return;
  }
  try{
    const res = await apiFetch('/api/painel/acoes/'+id+'/participar',{ method:'DELETE' });
    const payload = await res.json().catch(()=>({}));
    if(res.ok){
      delete participacoesAcoes[String(id)];
      toast('✅ Solicitação removida');
      loadProximasAcoes(acoesFiltroAtual);
    } else {
      toast('⚠️ '+(payload.error || 'Não foi possível cancelar participação'));
    }
  } catch(e){
    toast('⚠️ Erro de conexão');
  }
}

// ── PONTOS DE ENCONTRO ────────────────────────────
async function loadPontosEncontro(){
  const grid=document.getElementById('comites-grid');
  if(!grid)return;
  try{
    const res=await fetch('/api/pontos-encontro?status=aprovado');
    const {data,total}=await res.json();
    const countBadge = document.getElementById('pe-total-count');
    if(countBadge) countBadge.textContent = String(total || 0);
    if(!data||!data.length){
      grid.innerHTML='<div style="padding:2rem;text-align:center;color:var(--txt3);font-size:13px;grid-column:1/-1">Nenhum Ponto de Encontro aprovado ainda.</div>';
      return;
    }
    grid.innerHTML=data.map(renderPontoCard).join('');
  }catch(e){}
}

async function buscarIndicador(valor){
  const list = document.getElementById('indicado-sugestoes');
  if(!list) return;
  if(!valor || valor.trim().length < 2){
    list.innerHTML = '';
    return;
  }
  try {
    const res = await fetch('/api/usuarios/buscar?q='+encodeURIComponent(valor.trim()));
    const { data } = await res.json();
    list.innerHTML = (data || []).map(u=>`<option value="${u.nome}"></option>`).join('');
  } catch(e) {}
}

function fmtMesAno(dateIso){
  const d = new Date(dateIso);
  if (Number.isNaN(d.getTime())) return 'data desconhecida';
  return d.toLocaleDateString('pt-BR', { month: 'short', year: 'numeric' });
}

async function iniciarLoginFluxo(){
  abrirModalAuth('login');
}

async function logout(){
  try { await apiFetch('/api/auth/logout', { method: 'POST' }); } catch(e){}
  clearSessionToken();
  atualizarNavAuth();
  definirSaudacao('amiga(o)');
  toast('Você saiu da sua conta.');
  ir('home');
}

function atualizarNavAuth(){
  const btn = document.getElementById('btn-nav-auth');
  if(!btn) return;
  if(getSessionToken()){
    btn.innerHTML = '🚪 Sair';
    btn.onclick = logout;
  } else {
    btn.innerHTML = '<span class="mao-ico mao-sm"></span> Vem com a Tropa!!';
    btn.onclick = () => ir('cadastro');
  }
  loadProximasAcoes('todas');
}

async function hydrateCurrentUser(){
  if(!getSessionToken()) return;
  try {
    const res = await apiFetch('/api/auth/me');
    if(!res.ok){ clearSessionToken(); return; }
    const payload = await res.json();
    currentUser = payload.data || null;
    if(currentUser?.nome) definirSaudacao(currentUser.nome);
  } catch(e){
    clearSessionToken();
  }
}

async function loadPainelResumo(){
  if(!getSessionToken()) return;
  try {
    const res = await apiFetch('/api/painel/resumo');
    if(!res.ok) return;
    const payload = await res.json();
    const d = payload.data || {};
    const u = d.user || {};
    const s = d.stats || {};
    const emblemas = d.emblemas || d.selos || {};
    document.getElementById('painel-av').textContent = u.iniciais || '??';
    document.getElementById('painel-nome').textContent = u.nome || '-';
    document.getElementById('painel-polo').textContent = `📍 ${u.cidade || 'PE'}${u.bairro ? ' · '+u.bairro : ''} · Desde ${fmtMesAno(u.desde)}`;
    document.getElementById('painel-categoria').textContent = `⚡ ${u.categoria || 'Apoiadora'}`;
    document.getElementById('painel-stat-acoes').textContent = String(s.acoes || 0);
    document.getElementById('painel-stat-recrutadas').textContent = String(s.recrutadas || 0);
    document.getElementById('painel-stat-portas').textContent = String(s.portas || 0);
    renderPainelBotton(u.botton_modelo);
    renderPainelSelos(emblemas);
    renderPainelRecompensas(d);
  } catch(e){}
}

function renderRankingHome(items) {
  const lista = document.getElementById('ranking-lista');
  if (!lista) return;

  if (!Array.isArray(items) || !items.length) {
    lista.innerHTML = '<div class="ranking-loading">Ainda não há pontuação no período selecionado.</div>';
    return;
  }

  lista.innerHTML = items.map((item) => {
    const pos = Number(item.posicao || 0) || '-';
    const pontos = Number(item.pontos || 0);
    const cidade = item.cidade || 'PE';
    const bairro = item.bairro ? ` · ${item.bairro}` : '';
    return `<div class="ranking-item"><div class="ranking-pos">${pos}</div><div class="ranking-info"><div class="ranking-nome">${item.nome || 'Voluntária(o)'}</div><div class="ranking-meta">${cidade}${bairro}</div></div><div class="ranking-pontos">${pontos} pts</div></div>`;
  }).join('');
}

async function loadRankingHome(periodo) {
  rankingPeriodoAtual = periodo || rankingPeriodoAtual;
  const lista = document.getElementById('ranking-lista');
  if (lista) {
    lista.innerHTML = '<div class="ranking-loading">Carregando ranking...</div>';
  }

  try {
    const res = await fetch(`/api/usuarios/ranking?periodo=${encodeURIComponent(rankingPeriodoAtual)}&limit=20`);
    if (!res.ok) {
      renderRankingHome([]);
      return;
    }
    const payload = await res.json().catch(() => ({}));
    renderRankingHome(payload.data || []);
  } catch (_err) {
    renderRankingHome([]);
  }
}

function trocarRankingPeriodo(periodo, btnEl) {
  document.querySelectorAll('.ranking-tab').forEach((el) => el.classList.remove('ativo'));
  if (btnEl) btnEl.classList.add('ativo');
  loadRankingHome(periodo);
}

window.trocarRankingPeriodo = trocarRankingPeriodo;

async function loadApoiadoresPainel(){
  if(!getSessionToken()) return;
  try {
    const res = await apiFetch('/api/painel/apoiadores');
    if(!res.ok) return;
    const payload = await res.json();
    renderEleitores(payload.data || []);
  } catch(e) {}
}

async function loadAcoesRealizadas(reset){
  if(!getSessionToken()) return;
  if(reset) painelAcoesOffset = 0;
  try {
    const res = await apiFetch(`/api/painel/acoes-realizadas?offset=${painelAcoesOffset}&limit=3`);
    if(!res.ok) return;
    const payload = await res.json();
    const list = document.getElementById('painel-acoes-list');
    if(!list) return;
    const items = payload.data || [];
    if(reset) list.innerHTML = '';
    if(!items.length && reset){
      list.innerHTML = '<div style="padding:8px;color:var(--txt3)">Nenhuma ação aprovada ainda.</div>';
    } else {
      const html = items.map((a)=>{
        const icon = a.tipo === 'campo' ? '🚪' : a.tipo === 'digital' ? '📱' : '🎤';
        const data = new Date(a.data+'T'+a.hora);
        const quando = data.toLocaleDateString('pt-BR', { day:'2-digit', month:'short' });
        return `<div style="display:flex;align-items:center;gap:8px;padding:8px;border-radius:var(--rs);background:var(--bg)"><span style="font-size:16px">${icon}</span><div style="flex:1;font-size:13px">${a.nome}<div style="font-size:11px;color:var(--txt3)">${quando} · ${a.cidade || 'PE'}</div></div></div>`;
      }).join('');
      list.insertAdjacentHTML('beforeend', html);
    }
    painelAcoesOffset = payload.nextOffset || painelAcoesOffset;
    const btnMais = document.getElementById('painel-btn-ver-mais');
    if(btnMais) btnMais.style.display = items.length === 3 ? 'block' : 'none';
  } catch(e) {}
}

function carregarMaisAcoesRealizadas(){
  loadAcoesRealizadas(false);
}

function poloFromCidade(cidade){
  const c=(cidade||'').toLowerCase();
  if(c==='recife') return {polo:'recife',label:'🔵 Polo Recife'};
  if(c==='paulista') return {polo:'paulista',label:'🟠 Polo Paulista'};
  if(c==='olinda') return {polo:'olinda',label:'🟣 Polo Olinda'};
  return {polo:'outras-cidades',label:'🟢 Outras cidades'};
}

function renderPontoCard(p){
  const {polo,label}=poloFromCidade(p.cidade);
  return `<div class="comite-card-it" data-polo="${polo}"><div class="cc-top"><div class="cc-ico">🏡</div><div><div class="cc-nome">${p.nome}</div><div class="cc-end">${p.endereco}${p.bairro?' — '+p.bairro:''}</div></div></div><div class="cc-polo">${label}</div><div class="cc-stats"><span>🪑 <strong>${p.capacidade}</strong></span><span>📅 <strong>${p.dias_disponiveis}</strong></span></div></div>`;
}

async function submitPontoEncontro(){
  const nome=(document.getElementById('mc-nome')?.value||'').trim();
  const endereco=(document.getElementById('mc-end')?.value||'').trim();
  const cidade=document.getElementById('mc-cidade')?.value||'';
  const capacidade=document.getElementById('mc-cap')?.value||'';
  const capacidadeNums=(capacidade.match(/\d+/g)||[]);
  const capacidade_pessoas=Number(capacidadeNums[capacidadeNums.length-1]||0);
  const dias=(document.getElementById('mc-dias')?.value||'').trim();
  const telefone=(document.getElementById('mc-tel')?.value||'').trim();
  const bairroSel=document.getElementById('mc-bairro-wrap')?.querySelector('select');
  const bairro=bairroSel?.value||'';
  if(!nome||!endereco||!cidade||!capacidade||!dias||!telefone){
    toast('⚠️ Preencha todos os campos obrigatórios');
    return;
  }
  try{
    const res=await fetch('/api/pontos-encontro',{
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({nome,endereco,cidade,bairro,capacidade,capacidade_pessoas,dias_disponiveis:dias,telefone})
    });
    if(res.ok){
      fecharModal('modal-comite');
      toast('🏡 Ponto de Encontro cadastrado! A coordenação vai te contatar em até 24h 💛');
    } else {
      const err=await res.json().catch(()=>({}));
      toast('⚠️ '+(err.error||'Erro ao cadastrar. Tente novamente.'));
    }
  }catch(e){
    toast('⚠️ Erro de conexão. Tente novamente.');
  }
}

// ── APOIAR (financiamento coletivo) ────────────────
const LINK_QUERO_APOIAR = 'https://queroapoiar.com.br/elias-jabbour';
let valorApoioSelecionado = 0;

function abrirApoio(valor){
  valorApoioSelecionado = valor;
  const txt = document.getElementById('ap-valor-txt');
  txt.textContent = valor > 0 ? ('R$ ' + valor.toLocaleString('pt-BR')) : 'um valor livre';
  abrirModal('modal-apoio');
}

function irParaQueroApoiar(){
  fecharModal('modal-apoio');
  window.open(LINK_QUERO_APOIAR, '_blank');
  toast('💗 Abrindo a plataforma oficial Quero Apoiar...');
}

// ── TOAST ─────────────────────────────────────────
function toast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;t.classList.add('show');
  clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),3200);
}

// ── MAPA DE CALOR DE BAIRROS ─────────────────────
// Contadores de voluntários por bairro (dados simulados + cresce com cadastros)
const contagemBairros = { recife:{}, paulista:{}, olinda:{} };

function seedContagem() {
  // Gera contagem inicial pseudo-aleatória mas estável por bairro
  Object.keys(BAIRROS).forEach(cidade => {
    BAIRROS[cidade].forEach((bairro, i) => {
      // hash simples baseado no nome para gerar número estável
      let hash = 0;
      for (let c of bairro) hash = (hash * 31 + c.charCodeAt(0)) % 97;
      contagemBairros[cidade][bairro] = hash % 13; // 0 a 12
    });
  });
  // Garantir que bairros conhecidos como polos fortes tenham números altos
  if (contagemBairros.paulista['Janga'] !== undefined) contagemBairros.paulista['Janga'] = 14;
  if (contagemBairros.paulista['Maria Farinha'] !== undefined) contagemBairros.paulista['Maria Farinha'] = 9;
  if (contagemBairros.recife['Casa Amarela'] !== undefined) contagemBairros.recife['Casa Amarela'] = 16;
  if (contagemBairros.recife['Afogados'] !== undefined) contagemBairros.recife['Afogados'] = 11;
  if (contagemBairros.recife['Boa Viagem'] !== undefined) contagemBairros.recife['Boa Viagem'] = 13;
  if (contagemBairros.olinda['Carmo'] !== undefined) contagemBairros.olinda['Carmo'] = 10;
  if (contagemBairros.olinda['Bonsucesso'] !== undefined) contagemBairros.olinda['Bonsucesso'] = 8;
}
seedContagem();

function corPorContagem(n) {
  if (n === 0) return { bg:'#F5DCE2', escuro:true };
  if (n <= 3) return { bg:'#E8909E', escuro:false };
  if (n <= 8) return { bg:'#D14D5F', escuro:false };
  return { bg:'#9B0000', escuro:false };
}

let cidadeCalorAtual = 'recife';

function renderMapaCalor(cidade) {
  cidadeCalorAtual = cidade;
  const grid = document.getElementById('bc-grid');
  const resumo = document.getElementById('bc-resumo');
  if (!grid) return;
  const bairros = BAIRROS[cidade] || [];
  const dados = contagemBairros[cidade] || {};

  grid.innerHTML = bairros.map(b => {
    const n = dados[b] || 0;
    const cor = corPorContagem(n);
    const classeTexto = cor.escuro ? 'escuro' : '';
    return `<div class="bc-bairro" style="background:${cor.bg}" title="${b}: ${n} voluntária(o)s">
      <div class="bc-bairro-nome ${classeTexto}">${b}</div>
      <div class="bc-bairro-num ${classeTexto}">${n}</div>
    </div>`;
  }).join('');

  const total = Object.values(dados).reduce((a,b)=>a+b,0);
  const bairroTop = Object.entries(dados).sort((a,b)=>b[1]-a[1])[0];
  const semVol = Object.values(dados).filter(v=>v===0).length;
  resumo.innerHTML = `<span><strong>${total}</strong> voluntárias(os) mapeadas(os) em ${bairros.length} bairros</span>
    <span>🏆 Bairro líder: <strong>${bairroTop ? bairroTop[0] : '-'}</strong> (${bairroTop ? bairroTop[1] : 0})</span>
    <span><strong>${semVol}</strong> bairros ainda sem voluntárias(os)</span>`;
}

function trocarCidadeCalor(btn, cidade) {
  document.querySelectorAll('.bc-tab').forEach(t=>t.classList.remove('ativo'));
  btn.classList.add('ativo');
  renderMapaCalor(cidade);
}

// Atualiza o mapa de calor quando alguém se cadastra com um bairro
function registrarBairroNoCalor(cidade, bairro) {
  if (!contagemBairros[cidade]) return;
  if (contagemBairros[cidade][bairro] === undefined) contagemBairros[cidade][bairro] = 0;
  contagemBairros[cidade][bairro]++;
  if (cidadeCalorAtual === cidade) renderMapaCalor(cidade);
}

// Inicializa o mapa de calor ao carregar (se a seção existir)
if (document.getElementById('bc-grid')) {
  renderMapaCalor('recife');
}

// ── INIT ─────────────────────────────────────────
setupMobileNav();
inicializarSelectsMunicipios();
loadVideoConfig();
loadAgendaPublica();
loadRankingHome('dia');
hydrateCurrentUser().then(()=>{
  atualizarNavAuth();
});
