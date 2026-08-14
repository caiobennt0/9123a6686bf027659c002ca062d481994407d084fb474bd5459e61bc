const INVITE_SLUG_KEY = 'mm_invite_slug_origem';
let resetPasswordToken = '';

function getInviteSlugFromUrl() {
  const params = new URLSearchParams(window.location.search || '');
  return String(params.get('convite') || '').trim().toLowerCase();
}

function getStoredInviteSlug() {
  return String(localStorage.getItem(INVITE_SLUG_KEY) || '').trim().toLowerCase();
}

function setStoredInviteSlug(slug) {
  if (!slug) return;
  localStorage.setItem(INVITE_SLUG_KEY, slug);
}

function normalizeDigits(value) {
  return String(value || '').replace(/\D+/g, '');
}

function formatWhatsapp(value) {
  const digits = normalizeDigits(value).slice(0, 11);
  const ddd = digits.slice(0, 2);
  const prefix = digits.slice(2, 7);
  const suffix = digits.slice(7, 11);

  if (!ddd) return '';
  if (!prefix) return `(${ddd}`;
  if (!suffix) return `(${ddd}) ${prefix}`;
  return `(${ddd}) ${prefix}-${suffix}`;
}

function isValidWhatsapp(value) {
  return /^\d{11}$/.test(normalizeDigits(value));
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(value || '').trim());
}

function applyInviteMessageOnSignup() {
  const msg = document.getElementById('convite-origem-msg');
  if (!msg) return;
  const slug = getStoredInviteSlug();
  if (!slug) {
    msg.style.display = 'none';
    msg.textContent = '';
    return;
  }
  msg.style.display = 'block';
  msg.textContent = `Você chegou por um link de convite (${slug}). Esse vínculo será registrado automaticamente.`;
}

async function carregarCidadesRJCadastro() {
  const select = document.getElementById('f-cidade');
  if (!select) return;

  try {
    const res = await fetch('/api/config/cidades-rj');
    if (!res.ok) return;
    const payload = await res.json();
    const cidades = Array.isArray(payload.data) ? payload.data : [];
    if (!cidades.length) return;

    select.innerHTML = '<option value="">Selecione sua cidade</option>' + cidades
      .map((cidade) => `<option value="${cidade}">${cidade}</option>`)
      .join('');
  } catch (_err) {}
}

function setupSignupMasks() {
  const whatsappInput = document.getElementById('f-tel');
  if (whatsappInput && !whatsappInput.dataset.maskReady) {
    whatsappInput.dataset.maskReady = '1';
    whatsappInput.addEventListener('input', () => {
      whatsappInput.value = formatWhatsapp(whatsappInput.value);
    });
    whatsappInput.addEventListener('blur', () => {
      whatsappInput.value = formatWhatsapp(whatsappInput.value);
    });
  }
}

window.onCidadeChange = function onCidadeChangeSimplificado() {
  const wrap = document.getElementById('f-bairro-wrap');
  if (wrap) wrap.classList.add('vis');
};

function criarMarkupPainelConviteETarefas() {
  const painel = document.querySelector('#pg-painel .painel-wrap');
  if (!painel || document.getElementById('painel-convite-url')) return;

  const anchor = painel.querySelector('.stats-row');
  if (!anchor) return;

  anchor.insertAdjacentHTML('afterend', `
    <div class="convite-card" id="painel-convite-card">
      <div class="cst">🔗 Seu link de convite</div>
      <div style="font-size:12px;color:var(--txt2)">Convide novas pessoas para a plataforma e acumule pontos de convite.</div>
      <div class="convite-url">
        <input id="painel-convite-url" type="text" readonly value="Carregando seu link...">
        <button class="btn-mini" type="button" onclick="copiarLinkConvite()">Copiar</button>
        <button class="btn-mini" type="button" id="painel-convite-save" onclick="salvarLinkConvite()" style="display:none">Salvar</button>
      </div>
      <div style="margin-top:8px;font-size:11px;color:var(--txt3)" id="painel-convite-stats">Convites: 0 · Pontos por convite: 0</div>
    </div>

    <div class="tarefas-card" id="painel-tarefas-card">
      <div class="cst">🎯 Tarefas e missões</div>
      <div style="font-size:12px;color:var(--txt2);margin-bottom:8px">Você pode enviar mais de uma tarefa de entrada, mas apenas a primeira aprovada no grupo de entrada pontua.</div>
      <div style="display:flex;justify-content:flex-end;margin-bottom:8px"><button class="btn-mini" type="button" onclick="abrirHistoricoTarefas()">Histórico pontuado</button></div>
      <div class="tarefas-list" id="painel-tarefas-list">
        <div style="color:var(--txt3);font-size:12px">Carregando tarefas...</div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-ov" id="modal-tarefa-submit">
      <div class="modal">
        <div class="modal-handle"></div>
        <h3 id="tarefa-modal-title">Enviar comprovação</h3>
        <div class="modal-sub" id="tarefa-modal-sub">Preencha os dados para enviar sua solicitação.</div>
        <form id="tarefa-submit-form">
          <input type="hidden" id="tarefa-submit-id">
          <div id="tarefa-form-delivery" style="display:none">
            <div class="form-row"><label>Endereço *</label><input id="td-endereco" type="text"></div>
            <div class="form-row"><label>Número *</label><input id="td-numero" type="text"></div>
            <div class="form-row"><label>Cidade *</label><input id="td-cidade" type="text"></div>
            <div class="form-row"><label>Bairro *</label><input id="td-bairro" type="text"></div>
            <div class="form-row"><label>CEP *</label><input id="td-cep" type="text"></div>
            <div class="form-row"><label>Complemento</label><input id="td-complemento" type="text"></div>
            <div class="form-row"><label>Ponto de referência</label><input id="td-referencia" type="text"></div>
            <div class="form-row"><label>Nome de quem recebe *</label><input id="td-recebedor" type="text"></div>
            <div class="form-row"><label>Telefone de quem recebe *</label><input id="td-telefone" type="text"></div>
          </div>
          <div class="form-row" id="tarefa-arquivo-row">
            <label>Arquivo de comprovação * (até 3 MB)</label>
            <input id="tarefa-arquivo" type="file" accept="image/*">
          </div>
          <div class="form-row" id="tarefa-rede-row" style="display:none">
            <label>Rede social da comprovação *</label>
            <select id="tarefa-rede-social"></select>
          </div>
          <div class="form-row">
            <label>Observação (opcional)</label>
            <textarea id="tarefa-observacao" placeholder="Adicione detalhes úteis para validação."></textarea>
          </div>
        </form>
        <div class="modal-footer">
          <button class="btn-cancel" type="button" onclick="fecharModal('modal-tarefa-submit')">Cancelar</button>
          <button class="btn-ok" type="button" onclick="enviarSubmissaoTarefa()">Enviar solicitação</button>
        </div>
      </div>
    </div>
  `);

  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-ov" id="modal-tarefas-historico">
      <div class="modal">
        <div class="modal-handle"></div>
        <h3>📚 Histórico de tarefas pontuadas</h3>
        <div class="modal-sub">Últimas tarefas aceitas e pontuadas para sua conta.</div>
        <div id="tarefas-historico-list" style="display:flex;flex-direction:column;gap:8px"></div>
        <div class="modal-footer">
          <button class="btn-cancel" onclick="fecharModal('modal-tarefas-historico')">Fechar</button>
          <button class="btn-ok" id="tarefas-historico-more" onclick="carregarMaisHistoricoTarefas()">Carregar mais</button>
        </div>
      </div>
    </div>
  `);
}

function statusSubmissaoLabel(status) {
  const map = {
    pendente: { label: 'Pendente', cls: 'st-pendente' },
    aprovado: { label: 'Aprovada', cls: 'st-aprovado' },
    rejeitado: { label: 'Rejeitada', cls: 'st-rejeitado' },
  };
  return map[status] || { label: 'Sem envio', cls: 'st-livre' };
}

function pegarUltimaSubmissao(submissoes) {
  if (!Array.isArray(submissoes) || !submissoes.length) return null;
  return submissoes[0];
}

let tarefasPainelCache = [];

function montarLinksTarefa(links) {
  if (!links || typeof links !== 'object') return '';
  const redes = links.redes && typeof links.redes === 'object' ? links.redes : null;
  if (redes) {
    const itensRedes = Object.entries(redes)
      .map(([slug, config]) => {
        if (typeof config === 'string') {
          return { slug, url: config, ativo: true, pontos: 0 };
        }
        if (!config || typeof config !== 'object') return null;
        return {
          slug,
          url: String(config.url || '').trim(),
          ativo: config.ativo !== false,
          pontos: Number(config.pontos || 0),
        };
      })
      .filter((item) => item && item.ativo && item.url);

    if (!itensRedes.length) return '';
    return `<div class="tarefa-links">${itensRedes.map((item) => `<a href="${item.url}" target="_blank" rel="noopener noreferrer">${item.slug.replace(/_/g, ' ')}${item.pontos > 0 ? ` (${item.pontos} pts)` : ''}</a>`).join(' · ')}</div>`;
  }

  const itens = Object.entries(links).filter(([, value]) => typeof value === 'string' && String(value || '').trim());
  if (!itens.length) return '';
  return `<div class="tarefa-links">${itens.map(([chave, valor]) => `<a href="${String(valor)}" target="_blank" rel="noopener noreferrer">${chave.replace(/_/g, ' ')}</a>`).join(' · ')}</div>`;
}

function redesDisponiveisDaTarefa(tarefa) {
  const redes = tarefa?.links?.redes;
  if (!redes || typeof redes !== 'object') return [];
  return Object.entries(redes)
    .map(([slug, cfg]) => {
      if (typeof cfg === 'string') {
        return { slug, url: cfg, ativo: true, pontos: 0 };
      }
      if (!cfg || typeof cfg !== 'object') return null;
      return {
        slug,
        url: String(cfg.url || '').trim(),
        ativo: cfg.ativo !== false,
        pontos: Number(cfg.pontos || 0),
      };
    })
    .filter((item) => item && item.ativo && item.url);
}

async function loadPainelConvite() {
  if (!window.getSessionToken || !getSessionToken()) return;
  const input = document.getElementById('painel-convite-url');
  const statsEl = document.getElementById('painel-convite-stats');
  if (!input) return;

  try {
    const res = await apiFetch('/api/painel/convite');
    if (!res.ok) return;
    const payload = await res.json();
    const data = payload.data || {};
    const card = document.getElementById('painel-convite-card');
    const saveBtn = document.getElementById('painel-convite-save');
    if (card) card.style.display = data.visible ? 'block' : 'none';
    if (!data.visible) return;
    input.value = data.convite_url || 'Link indisponível';
    input.readOnly = !data.can_edit;
    if (saveBtn) saveBtn.style.display = data.can_edit ? 'inline-block' : 'none';
    if (statsEl) {
      statsEl.textContent = `Convites: ${Number(data.total_convites || 0)} · Pontos de convite: ${Number(data.pontos_convites || 0)}`;
    }
  } catch (_err) {}
}

window.salvarLinkConvite = async function salvarLinkConvite() {
  const input = document.getElementById('painel-convite-url');
  if (!input) return;
  const current = String(input.value || '').trim();
  const slug = current.split('?convite=').pop();
  if (!slug) {
    toast('⚠️ Informe um sufixo válido para o link.');
    return;
  }

  try {
    const res = await apiFetch('/api/painel/convite', {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ slug }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível salvar o link.'));
      return;
    }
    input.value = payload.data?.convite_url || input.value;
    toast('✅ Link de convite atualizado.');
  } catch (_err) {
    toast('⚠️ Erro de conexão ao salvar o link.');
  }
};

let tarefasHistoricoOffset = 0;

window.abrirHistoricoTarefas = async function abrirHistoricoTarefas() {
  tarefasHistoricoOffset = 0;
  const list = document.getElementById('tarefas-historico-list');
  if (list) list.innerHTML = '';
  abrirModal('modal-tarefas-historico');
  await carregarMaisHistoricoTarefas(true);
};

window.carregarMaisHistoricoTarefas = async function carregarMaisHistoricoTarefas(reset) {
  const list = document.getElementById('tarefas-historico-list');
  const btn = document.getElementById('tarefas-historico-more');
  if (!list) return;
  if (reset) {
    tarefasHistoricoOffset = 0;
    list.innerHTML = '';
  }

  try {
    const res = await apiFetch(`/api/painel/tarefas/historico?offset=${tarefasHistoricoOffset}&limit=5`);
    if (!res.ok) return;
    const payload = await res.json();
    const items = Array.isArray(payload.data) ? payload.data : [];
    if (!items.length && tarefasHistoricoOffset === 0) {
      list.innerHTML = '<div style="font-size:12px;color:var(--txt3)">Nenhuma tarefa pontuada ainda.</div>';
    } else {
      list.insertAdjacentHTML('beforeend', items.map((item) => {
        const quando = item.decidido_em ? new Date(item.decidido_em).toLocaleDateString('pt-BR') : '-';
        return `<div class="tarefa-item"><div class="tarefa-top"><div><div class="tarefa-titulo">${item.tarefa_titulo}</div><div class="tarefa-meta">${quando}</div></div><span class="badge-status st-aprovado">+${Number(item.pontos_atribuidos || 0)} pts</span></div></div>`;
      }).join(''));
    }
    tarefasHistoricoOffset = payload.nextOffset || tarefasHistoricoOffset;
    if (btn) btn.style.display = items.length === 5 ? 'inline-block' : 'none';
  } catch (_err) {
    if (!list.innerHTML) {
      list.innerHTML = '<div style="font-size:12px;color:var(--txt3)">Erro ao carregar histórico.</div>';
    }
  }
};

async function loadPainelTarefas() {
  if (!window.getSessionToken || !getSessionToken()) return;
  const list = document.getElementById('painel-tarefas-list');
  if (!list) return;

  try {
    const res = await apiFetch('/api/painel/tarefas');
    if (!res.ok) {
      list.innerHTML = '<div style="color:var(--txt3);font-size:12px">Não foi possível carregar tarefas agora.</div>';
      return;
    }
    const payload = await res.json();
    const tarefas = Array.isArray(payload.data?.tarefas) ? payload.data.tarefas : [];
    tarefasPainelCache = tarefas;

    if (!tarefas.length) {
      list.innerHTML = '<div style="color:var(--txt3);font-size:12px">Nenhuma tarefa disponível no momento.</div>';
      return;
    }

    list.innerHTML = tarefas.map((tarefa) => {
      const ultima = pegarUltimaSubmissao(tarefa.submissoes);
      const status = statusSubmissaoLabel(ultima?.status);
      const bloqueada = tarefa.desbloqueada === false;
      const requerSubmissao = tarefa.requer_submissao !== false && tarefa.tipo_execucao === 'submissao_usuario';
      const btnLabel = bloqueada ? 'Bloqueada por nível' : 'Enviar comprovação';
      const redes = redesDisponiveisDaTarefa(tarefa);
      return `
        <div class="tarefa-item ${bloqueada ? 'tarefa-bloqueada' : ''}">
          <div class="tarefa-top">
            <div>
              <div class="tarefa-titulo">${tarefa.titulo}</div>
              <div class="tarefa-meta">${tarefa.pontos} pts · Nível mínimo: ${Number(tarefa.nivel_minimo || 0)}</div>
            </div>
            <span class="badge-status ${status.cls}">${status.label}</span>
          </div>
          ${tarefa.descricao ? `<div style="font-size:12px;color:var(--txt2);margin-top:6px">${tarefa.descricao}</div>` : ''}
          ${tarefa.observacao_regra_pontos ? `<div style="font-size:11px;color:var(--txt3);margin-top:4px">${tarefa.observacao_regra_pontos}</div>` : ''}
          ${tarefa.info_execucao ? `<div style="font-size:11px;color:var(--txt3);margin-top:4px">${tarefa.info_execucao}</div>` : ''}
          ${(tarefa.categoria === 'compartilhamento_redes' && redes.length) ? `<div style="font-size:11px;color:var(--txt3);margin-top:4px">Redes ativas: ${redes.map((item) => item.slug.replace(/_/g, ' ')).join(', ')}</div>` : ''}
          <div class="tarefa-acoes">
            ${requerSubmissao
              ? `<button class="btn-mini" type="button" ${bloqueada ? 'disabled' : ''} onclick="abrirModalSubmissaoTarefa(${tarefa.id})">${btnLabel}</button>`
              : '<span style="font-size:11px;color:var(--txt3)">Sem submissão por usuário</span>'}
          </div>
          ${montarLinksTarefa(tarefa.links)}
        </div>
      `;
    }).join('');
  } catch (_err) {
    list.innerHTML = '<div style="color:var(--txt3);font-size:12px">Erro de conexão ao carregar tarefas.</div>';
  }
}

function abrirModalSubmissaoTarefa(tarefaId) {
  const tarefa = tarefasPainelCache.find((item) => Number(item.id) === Number(tarefaId));
  if (!tarefa) return;

  document.getElementById('tarefa-submit-id').value = String(tarefaId);
  document.getElementById('tarefa-modal-title').textContent = `Enviar: ${tarefa.titulo}`;
  document.getElementById('tarefa-modal-sub').textContent = tarefa.instrucoes || 'Envie sua solicitação para análise administrativa.';
  document.getElementById('tarefa-observacao').value = '';
  const delivery = document.getElementById('tarefa-form-delivery');
  const fileRow = document.getElementById('tarefa-arquivo-row');
  const redeRow = document.getElementById('tarefa-rede-row');
  const redeSelect = document.getElementById('tarefa-rede-social');
  const fileInput = document.getElementById('tarefa-arquivo');

  if (delivery) delivery.style.display = tarefa.tipo_comprovacao === 'form_delivery' ? 'block' : 'none';
  if (fileRow) fileRow.style.display = tarefa.tipo_comprovacao === 'form_delivery' ? 'none' : 'block';
  const redes = redesDisponiveisDaTarefa(tarefa);
  if (redeRow && redeSelect) {
    const precisaRede = tarefa.categoria === 'compartilhamento_redes';
    redeRow.style.display = precisaRede ? 'block' : 'none';
    if (precisaRede) {
      redeSelect.innerHTML = '<option value="">Selecione a rede social</option>' + redes
        .map((item) => `<option value="${item.slug}">${item.slug.replace(/_/g, ' ')}${item.pontos > 0 ? ` (${item.pontos} pts)` : ''}</option>`)
        .join('');
    } else {
      redeSelect.innerHTML = '';
    }
  }
  if (fileInput) {
    fileInput.value = '';
    fileInput.required = tarefa.tipo_comprovacao !== 'form_delivery';
  }

  abrirModal('modal-tarefa-submit');
}

async function enviarSubmissaoTarefa() {
  const tarefaId = Number(document.getElementById('tarefa-submit-id').value || 0);
  if (!tarefaId) return;

  const tarefa = tarefasPainelCache.find((item) => Number(item.id) === tarefaId);
  if (!tarefa) return;

  const formData = new FormData();
  const observacao = (document.getElementById('tarefa-observacao').value || '').trim();
  if (observacao) formData.append('observacao_user', observacao);

  if (tarefa.tipo_comprovacao === 'form_delivery') {
    const payload = {
      endereco: (document.getElementById('td-endereco').value || '').trim(),
      numero: (document.getElementById('td-numero').value || '').trim(),
      cidade: (document.getElementById('td-cidade').value || '').trim(),
      bairro: (document.getElementById('td-bairro').value || '').trim(),
      cep: (document.getElementById('td-cep').value || '').trim(),
      complemento: (document.getElementById('td-complemento').value || '').trim(),
      ponto_referencia: (document.getElementById('td-referencia').value || '').trim(),
      nome_recebedor: (document.getElementById('td-recebedor').value || '').trim(),
      telefone_recebedor: (document.getElementById('td-telefone').value || '').trim(),
    };

    formData.append('form_data', JSON.stringify(payload));
  } else {
    const fileInput = document.getElementById('tarefa-arquivo');
    const file = fileInput?.files?.[0];
    if (!file) {
      toast('⚠️ Envie um arquivo de comprovação.');
      return;
    }
    if (Number(file.size || 0) > 3 * 1024 * 1024) {
      toast('⚠️ O arquivo deve ter no máximo 3 MB.');
      return;
    }

    if (tarefa.categoria === 'compartilhamento_redes') {
      const rede = String(document.getElementById('tarefa-rede-social')?.value || '').trim();
      if (!rede) {
        toast('⚠️ Selecione a rede social deste compartilhamento.');
        return;
      }
      formData.append('rede_social', rede);
    }

    formData.append('arquivo', file);
  }

  try {
    const res = await apiFetch(`/api/painel/tarefas/${tarefaId}/submissoes`, {
      method: 'POST',
      body: formData,
    });

    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível enviar sua solicitação.'));
      return;
    }

    toast('✅ Solicitação enviada. A pontuação entra após aprovação.');
    fecharModal('modal-tarefa-submit');
    await loadPainelTarefas();
    await loadPainelResumo();
  } catch (_err) {
    toast('⚠️ Erro de conexão ao enviar tarefa.');
  }
}

function copiarLinkConvite() {
  const input = document.getElementById('painel-convite-url');
  if (!input?.value) return;
  navigator.clipboard.writeText(input.value)
    .then(() => toast('🔗 Link de convite copiado!'))
    .catch(() => toast('⚠️ Não foi possível copiar o link agora.'));
}

window.abrirModalAuth = function abrirModalAuthOverride(_mode, email) {
  authModalMode = 'login';
  authModalEmail = email || '';

  const title = document.getElementById('auth-modal-title');
  const sub = document.getElementById('auth-modal-sub');
  const emailRow = document.getElementById('auth-email-row');
  const passwordRow = document.getElementById('auth-password-row');
  const emailInput = document.getElementById('auth-email');
  const passwordInput = document.getElementById('auth-password');
  const submitBtn = document.getElementById('auth-submit-btn');
  const forgotBtn = document.getElementById('auth-forgot-btn');

  if (title) title.textContent = '⭐ Entrar no painel';
  if (sub) sub.textContent = 'Informe seu email e sua senha para entrar no painel.';
  if (emailInput) emailInput.value = email || '';
  if (passwordInput) passwordInput.value = '';
  if (emailRow) emailRow.style.display = 'block';
  if (passwordRow) passwordRow.style.display = 'block';
  if (submitBtn) submitBtn.textContent = 'Entrar';
  if (forgotBtn) forgotBtn.style.display = 'inline';

  abrirModal('modal-auth');
};

window.fecharModalAuth = function fecharModalAuthOverride() {
  fecharModal('modal-auth');
  authModalMode = 'login';
  authModalEmail = '';
  const passwordInput = document.getElementById('auth-password');
  if (passwordInput) passwordInput.value = '';
};

window.submitAuthModal = async function submitAuthModalOverride() {
  const email = (document.getElementById('auth-email')?.value || '').trim();
  const senha = String(document.getElementById('auth-password')?.value || '');

  if (!email || !senha) {
    toast('⚠️ Informe email e senha.');
    return;
  }

  if (!isValidEmail(email)) {
    toast('⚠️ Informe um email válido.');
    return;
  }

  try {
    const res = await fetch('/api/auth/login-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível entrar no painel.'));
      return;
    }

    setSessionToken(payload.token);
    currentUser = payload.user || null;
    atualizarNavAuth();
    definirSaudacao(currentUser?.nome || 'amiga(o)');
    fecharModalAuth();
    ir('painel');
  } catch (_err) {
    toast('⚠️ Erro de conexão no login.');
  }
};

window.solicitarResetSenha = async function solicitarResetSenha() {
  const email = (document.getElementById('auth-email')?.value || '').trim();
  if (!email) {
    toast('⚠️ Informe seu email para recuperar a senha.');
    return;
  }

  if (!isValidEmail(email)) {
    toast('⚠️ Informe um email válido.');
    return;
  }

  try {
    const res = await fetch('/api/auth/forgot-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível solicitar a redefinição.'));
      return;
    }

    toast('✅ Se o email existir, enviaremos um link de redefinição.');
  } catch (_err) {
    toast('⚠️ Erro de conexão ao solicitar redefinição.');
  }
};

window.confirmarResetSenha = async function confirmarResetSenha() {
  const senha = String(document.getElementById('reset-password-input')?.value || '').trim();
  if (!resetPasswordToken) {
    toast('⚠️ Token de redefinição ausente.');
    return;
  }
  if (senha.length < 8) {
    toast('⚠️ A nova senha precisa ter ao menos 8 caracteres.');
    return;
  }

  try {
    const res = await fetch('/api/auth/reset-password', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ token: resetPasswordToken, senha }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível redefinir a senha.'));
      return;
    }

    fecharModal('modal-reset-password');
    resetPasswordToken = '';
    document.getElementById('reset-password-input').value = '';
    toast('✅ Senha redefinida com sucesso. Faça login com a nova senha.');
    abrirModalAuth('login');
  } catch (_err) {
    toast('⚠️ Erro de conexão ao redefinir a senha.');
  }
};

async function confirmarEmailPorTokenUrl() {
  const params = new URLSearchParams(window.location.search || '');
  const token = String(params.get('confirm_token') || '').trim();
  if (!token) return;

  try {
    const res = await fetch(`/api/auth/confirm-email?token=${encodeURIComponent(token)}`);
    const payload = await res.json().catch(() => ({}));

    if (res.ok && payload.token) {
      setSessionToken(payload.token);
      currentUser = payload.user || null;
      atualizarNavAuth();
      toast('✅ Email confirmado com sucesso!');
      params.delete('confirm_token');
      const clean = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
      window.history.replaceState({}, '', clean);
      ir('painel');
      return;
    }

    toast('⚠️ ' + (payload.error || 'Não foi possível confirmar o email.'));
  } catch (_err) {
    toast('⚠️ Erro de conexão ao confirmar email.');
  }
}

async function confirmarApoiadorPorTokenUrl() {
  const params = new URLSearchParams(window.location.search || '');
  const token = String(params.get('apoiador_token') || '').trim();
  if (!token) return;

  try {
    const res = await fetch(`/api/painel/apoiadores/confirmar?token=${encodeURIComponent(token)}`);
    const payload = await res.json().catch(() => ({}));
    if (res.ok) {
      toast('✅ Apoio confirmado com sucesso!');
    } else {
      toast('⚠️ ' + (payload.error || 'Não foi possível confirmar o apoio.'));
    }
  } catch (_err) {
    toast('⚠️ Erro de conexão ao confirmar o apoio.');
  } finally {
    params.delete('apoiador_token');
    const clean = window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
    window.history.replaceState({}, '', clean);
  }
}

function abrirResetSenhaPorTokenUrl() {
  const params = new URLSearchParams(window.location.search || '');
  const token = String(params.get('reset_token') || '').trim();
  if (!token) return;
  resetPasswordToken = token;
  abrirModal('modal-reset-password');
}

const originalConcluir = window.concluir;
window.concluir = async function concluirSimplificado() {
  const nome = (document.getElementById('f-nome')?.value || '').trim();
  const whatsapp = (document.getElementById('f-tel')?.value || '').trim();
  const email = (document.getElementById('f-email')?.value || '').trim();
  const cidade = (document.getElementById('f-cidade')?.value || '').trim();
  const bairro = (document.getElementById('f-bairro')?.value || '').trim();
  const senha = (document.getElementById('f-senha')?.value || '').trim();

  if (!nome || !whatsapp || !email || !cidade || !bairro || !senha) {
    toast('⚠️ Preencha nome, WhatsApp, email, cidade, bairro e senha.');
    return;
  }

  if (!isValidEmail(email)) {
    toast('⚠️ Informe um email válido.');
    return;
  }

  if (!isValidWhatsapp(whatsapp)) {
    toast('⚠️ Informe o WhatsApp no formato (DD) 99999-9999.');
    return;
  }

  if (senha.length < 8) {
    toast('⚠️ A senha precisa ter ao menos 8 caracteres.');
    return;
  }

  const conviteOrigem = getStoredInviteSlug();

  try {
    const regRes = await fetch('/api/voluntarios', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        nome,
        whatsapp,
        email,
        cidade,
        bairro,
        senha,
        convite_origem_slug: conviteOrigem || null,
      }),
    });

    const payload = await regRes.json().catch(() => ({}));
    if (!regRes.ok) {
      toast('⚠️ ' + (payload.error || 'Não foi possível concluir seu cadastro agora.'));
      return;
    }

    const cidadeSelect = document.getElementById('f-cidade');
    const cidadeTxt = cidadeSelect?.options?.[cidadeSelect.selectedIndex]?.text || cidade;

    const cpNome = document.getElementById('cp-nome');
    const cpReg = document.getElementById('cp-reg');
    if (cpNome) cpNome.textContent = nome;
    if (cpReg) cpReg.textContent = `📍 ${cidadeTxt}${bairro ? ` — ${bairro}` : ''}`;

    document.querySelectorAll('.form-bloco').forEach((el) => el.classList.remove('ativo'));
    const ok = document.getElementById('bloco-ok');
    if (ok) ok.classList.add('ativo');

    toast('✅ Cadastro enviado! Confirme seu e-mail pelo link recebido para ativar sua conta.');
  } catch (_err) {
    toast('⚠️ Erro de conexão ao cadastrar.');
  }
};

window.renderEleitores = function renderEleitoresOverride(eleitores) {
  const lista = document.getElementById('eleit-lista');
  if (!lista) return;
  const items = Array.isArray(eleitores) ? eleitores : [];
  lista.innerHTML = items.map((e) => {
    const ini = String(e.nome || '').split(' ').filter(Boolean).map((p) => p[0]).slice(0, 2).join('').toUpperCase();
    const loc = `${e.cidade || ''}${e.bairro ? ' — ' + e.bairro : ''}`;
    const badgeClass = e.status === 'confirmado' ? 'st-aprovado' : 'st-pendente';
    const badgeLabel = e.status === 'confirmado' ? 'Confirmado' : 'Pendente';
    return `<div class="el-item"><div class="el-av">${ini || 'AP'}</div><div class="el-info"><div class="el-nome">${e.nome}</div><div class="el-meta">${e.email || ''}${loc ? ' · ' + loc : ''}</div></div><div class="el-badge ${badgeClass}">${badgeLabel}</div></div>`;
  }).join('') || '<div style="font-size:12px;color:var(--txt3)">Nenhum apoiador cadastrado ainda.</div>';
};

window.salvarEleitor = async function salvarEleitorOverride() {
  const nome = (document.getElementById('el-nome')?.value || '').trim();
  const telefone = (document.getElementById('el-tel')?.value || '').trim();
  const email = (document.getElementById('el-email')?.value || '').trim();
  const cidadeSel = document.getElementById('el-cidade');
  const cidade = cidadeSel?.value || '';
  const bairroSel = document.getElementById('el-bairro-wrap')?.querySelector('select');
  const bairro = bairroSel?.value || '';

  if (!nome || !telefone || !email || !cidade) {
    toast('⚠️ Preencha nome, telefone, e-mail e cidade.');
    return;
  }
  if (!isValidEmail(email)) {
    toast('⚠️ Informe um e-mail válido.');
    return;
  }

  try {
    const res = await apiFetch('/api/painel/apoiadores', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, telefone, email, cidade, bairro }),
    });
    const payload = await res.json().catch(() => ({}));
    if (!res.ok) {
      toast('⚠️ ' + (payload.error || 'Erro ao cadastrar apoiador.'));
      return;
    }

    fecharModal('modal-eleitor');
    ['el-nome', 'el-tel', 'el-email'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) el.value = '';
    });
    if (cidadeSel) cidadeSel.value = '';
    toast('✅ Apoiador cadastrado. Falta a confirmação no e-mail para contabilizar.');
    await loadApoiadoresPainel();
    await loadPainelResumo();
  } catch (_err) {
    toast('⚠️ Erro de conexão ao cadastrar apoiador.');
  }
};

const originalLoadApoiadoresPainel = window.loadApoiadoresPainel;
window.loadApoiadoresPainel = async function loadApoiadoresPainelOverride() {
  if (!window.getSessionToken || !getSessionToken()) return;
  try {
    const res = await apiFetch('/api/painel/apoiadores');
    if (!res.ok) return;
    const payload = await res.json();
    renderEleitores(payload.data || []);
    const total = Number(payload.total || 0);
    const pendentes = Number(payload.pendentes || 0);
    const totalEl = document.getElementById('el-total');
    if (totalEl) totalEl.innerHTML = `<strong>${total} apoiadores</strong> confirmados · ${pendentes} pendentes`;
  } catch (_err) {
    if (typeof originalLoadApoiadoresPainel === 'function') {
      await originalLoadApoiadoresPainel();
    }
  }
};

const originalLoadPainelResumo = window.loadPainelResumo;
window.loadPainelResumo = async function loadPainelResumoGamificado() {
  if (typeof originalLoadPainelResumo === 'function') {
    await originalLoadPainelResumo();
  }

  try {
    const res = await apiFetch('/api/painel/resumo');
    if (!res.ok) return;
    const payload = await res.json();
    const nivel = payload.data?.nivel;
    const categoriaEl = document.getElementById('painel-categoria');
    if (categoriaEl && nivel) {
      categoriaEl.textContent = `⭐ Nível ${nivel.nivel_atual} - ${nivel.nivel_nome}`;
    }
  } catch (_err) {}

  await loadPainelConvite();
  await loadPainelTarefas();
};

(function initGamificacaoUi() {
  const fromUrl = getInviteSlugFromUrl();
  if (fromUrl) setStoredInviteSlug(fromUrl);

  criarMarkupPainelConviteETarefas();
  carregarCidadesRJCadastro();
  setupSignupMasks();
  applyInviteMessageOnSignup();
  confirmarEmailPorTokenUrl();
  confirmarApoiadorPorTokenUrl();
  abrirResetSenhaPorTokenUrl();
})();
