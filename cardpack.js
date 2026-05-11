// ═══════════════════════════════════════════════════════════════════
//  packed.js  —  Ben 10: Card Clash  |  Paket Sistemi
//  Bütün kart paket dizaynları, qiymətlər, ehtimallar
//  və pack açma məntiqi bu faylda saxlanır.
// ═══════════════════════════════════════════════════════════════════


// ───────────────────────────────────────────────────────────────────
//  BASE64 HEROİ ŞƏKILLƏR
//  Hər paket üçün hero şəkilini buraya base64 formatında yapışdır.
//  Boş saxlasanız hero görünməyəcək, bütün başqa dizayn işləyir.
// ───────────────────────────────────────────────────────────────────

const PACK_HERO_IMAGES = {
  common   : '',   // S1 Adi  — base64 hero şəkili
  rare     : '',   // S1 Nadir
  epic     : '',   // S1 Epik
  common2  : '',   // S2 Adi
  rare2    : '',   // S2 Nadir
  epic2    : '',   // S2 Epik
  cosmic   : '',   // Cosmic
  ultimate : '',   // Ultimate
};


// ───────────────────────────────────────────────────────────────────
//  PAKET KONFİQURASİYALARI
//  Hər paketin BÜTÜN dizayn və data detalları burada ayrı-ayrıdır.
//  İstənilən paketi asanlıqla dəyişə bilərsiniz.
// ───────────────────────────────────────────────────────────────────

const PACKS_CONFIG = {

  // ════════════════════════════════
  //  SERİYA 1 — Kartlar 1-20
  // ════════════════════════════════

  common: {
    // ── Kimliyi ──────────────────
    key          : 'common',
    seriesGroup  : '🟩 SERİYA 1 — KARTLAR 1-20',

    // ── Mətn/Etiket ──────────────
    displayName  : 'ADİ PAKET S1',         // Mağazada görünən ad
    packLabel    : 'COMMON PACK',           // Pakentin içindəki başlıq
    seriesLabel  : 'STARTER · 5 CARD',     // Pakentin ikinci sətiri
    buyBtnText   : 'AL',                    // Al düyməsi yazısı
    openBtnText  : 'AÇ',                    // Stokdakı paketin düyməsi

    // ── Qiymət ───────────────────
    price        : 500,

    // ── Rəng Palet ───────────────
    tintColor    : '#7a9a80',              // Ana tint rəng (border, glow, yazı)
    nameTextColor: '#7a9a80',             // Başlıq rəngi (pack-name)
    buyBtnColor  : '#7a9a80',             // Düymə rəngi

    // ── CSS Sinifləri ─────────────
    cardClass    : 'pack-card pack-common',  // Paket kartının class-ı
    iconBgClass  : 'pi-common',              // Sol ikonun arxa fon class-ı
    nameCssClass : 'cn',                     // pack-name üçün rəng class-ı
    dotClass     : 'common',                 // Stokdakı nöqtənin class-ı
    openBtnClass : 'common',                 // Stokdakı düymənin class-ı
    burstClass   : 'common',                 // Pack açma ekranındakı class
    burstEmoji   : '🟢',                     // Pack açma ekranındakı emoji

    // ── Odds (%) ─────────────────
    odds: {
      common   : 70,
      rare     : 25,
      epic     : 5,
      legendary: 0,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>70%</span> · NADİR <span>25%</span> · EPİK <span>5%</span>',

    // ── Kart Pool ────────────────
    cardPool     : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    cardPoolLabel: 'Kartlar 1–20',
  },

  // ─────────────────────────────────────────

  rare: {
    key          : 'rare',
    seriesGroup  : null,   // null = əvvəlki grupun altında göstər

    displayName  : 'NADİR PAKET S1',
    packLabel    : 'RARE PACK',
    seriesLabel  : 'STARTER · 5 CARD',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 2000,

    tintColor    : '#4a8aff',
    nameTextColor: '#4a8aff',
    buyBtnColor  : '#4a8aff',

    cardClass    : 'pack-card pack-rare',
    iconBgClass  : 'pi-rare',
    nameCssClass : 'rn',
    dotClass     : 'rare',
    openBtnClass : 'rare',
    burstClass   : 'rare',
    burstEmoji   : '🔵',

    odds: {
      common   : 50,
      rare     : 30,
      epic     : 18,
      legendary: 2,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>50%</span> · NADİR <span>30%</span> · EPİK <span>18%</span> · LEG <span>2%</span>',

    cardPool     : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    cardPoolLabel: 'Kartlar 1–20',
  },

  // ─────────────────────────────────────────

  epic: {
    key          : 'epic',
    seriesGroup  : null,

    displayName  : 'EPİK PAKET S1',
    packLabel    : 'EPİC PACK',
    seriesLabel  : 'STARTER · 5 CARD',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 5000,

    tintColor    : '#aa44ff',
    nameTextColor: '#aa44ff',
    buyBtnColor  : '#aa44ff',

    cardClass    : 'pack-card pack-epic',
    iconBgClass  : 'pi-epic',
    nameCssClass : 'en',
    dotClass     : 'epic',
    openBtnClass : 'epic',
    burstClass   : 'epic',
    burstEmoji   : '🟣',

    odds: {
      common   : 30,
      rare     : 30,
      epic     : 30,
      legendary: 10,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>30%</span> · NADİR <span>30%</span> · EPİK <span>30%</span> · LEG <span>10%</span>',

    cardPool     : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    cardPoolLabel: 'Kartlar 1–20',
  },


  // ════════════════════════════════
  //  SERİYA 2 — Kartlar 21-36 + 50
  // ════════════════════════════════

  common2: {
    key          : 'common2',
    seriesGroup  : '🟦 SERİYA 2 — KARTLAR 21-36 + 50',

    displayName  : 'ADİ PAKET S2',
    packLabel    : 'COMMON PACK',
    seriesLabel  : 'FORCE · 5 CARD',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 500,

    tintColor    : '#7a9a80',
    nameTextColor: '#7a9a80',
    buyBtnColor  : '#7a9a80',

    cardClass    : 'pack-card pack-common',
    iconBgClass  : 'pi-common',
    nameCssClass : 'cn',
    dotClass     : 'common',
    openBtnClass : 'common',
    burstClass   : 'common',
    burstEmoji   : '🟢',

    odds: {
      common   : 70,
      rare     : 25,
      epic     : 5,
      legendary: 0,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>70%</span> · NADİR <span>25%</span> · EPİK <span>5%</span>',

    cardPool     : [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
    cardPoolLabel: 'Kartlar 21–36 + 50',
  },

  // ─────────────────────────────────────────

  rare2: {
    key          : 'rare2',
    seriesGroup  : null,

    displayName  : 'NADİR PAKET S2',
    packLabel    : 'RARE PACK',
    seriesLabel  : 'FORCE · 5 CARD',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 2000,

    tintColor    : '#4a8aff',
    nameTextColor: '#4a8aff',
    buyBtnColor  : '#4a8aff',

    cardClass    : 'pack-card pack-rare',
    iconBgClass  : 'pi-rare',
    nameCssClass : 'rn',
    dotClass     : 'rare',
    openBtnClass : 'rare',
    burstClass   : 'rare',
    burstEmoji   : '🔵',

    odds: {
      common   : 50,
      rare     : 30,
      epic     : 18,
      legendary: 2,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>50%</span> · NADİR <span>30%</span> · EPİK <span>18%</span> · LEG <span>2%</span>',

    cardPool     : [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
    cardPoolLabel: 'Kartlar 21–36 + 50',
  },

  // ─────────────────────────────────────────

  epic2: {
    key          : 'epic2',
    seriesGroup  : null,

    displayName  : 'EPİK PAKET S2',
    packLabel    : 'EPİC PACK',
    seriesLabel  : 'FORCE · 5 CARD',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 5000,

    tintColor    : '#aa44ff',
    nameTextColor: '#aa44ff',
    buyBtnColor  : '#aa44ff',

    cardClass    : 'pack-card pack-epic',
    iconBgClass  : 'pi-epic',
    nameCssClass : 'en',
    dotClass     : 'epic',
    openBtnClass : 'epic',
    burstClass   : 'epic',
    burstEmoji   : '🟣',

    odds: {
      common   : 30,
      rare     : 30,
      epic     : 30,
      legendary: 10,
      ultimate : 0,
    },
    oddsDisplay: 'ADİ <span>30%</span> · NADİR <span>30%</span> · EPİK <span>30%</span> · LEG <span>10%</span>',

    cardPool     : [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
    cardPoolLabel: 'Kartlar 21–36 + 50',
  },


  // ════════════════════════════════
  //  XÜSUSİ PAKETLƏR
  // ════════════════════════════════

  cosmic: {
    key          : 'cosmic',
    seriesGroup  : '🌌 XÜSUSİ PAKETLƏR',

    displayName  : 'COSMİC PAKET',
    packLabel    : 'AGGREGOR',
    seriesLabel  : 'COLLECTİON',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 3000,

    tintColor    : '#00ccff',
    nameTextColor: '#aa44ff',    // epik rəngdə görünür (pack-name.en)
    buyBtnColor  : '#aa44ff',

    cardClass    : 'pack-card pack-epic',
    iconBgClass  : 'pi-epic',
    nameCssClass : 'en',
    dotClass     : 'epic',
    openBtnClass : 'epic',
    burstClass   : 'epic',
    burstEmoji   : '🌌',

    odds: {
      common   : 0,
      rare     : 0,
      epic     : 90,
      legendary: 10,
      ultimate : 0,
    },
    oddsDisplay: 'EPİK <span>90%</span> · Xüsusi <span>10%</span>',

    // Xüsusi kart pool-u — cosmic paket öz pull məntiqi ilə işləyir
    cardPool     : [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50,36,37,38,39,40,41,42],
    cardPoolLabel: 'Kosmik Kartlar + Epik Xüsusillər',

    // Cosmic üçün xüsusi pull şansı (10% şansla xüsusi cosmic kartı)
    specialPullChance : 0.10,
    specialPullIds    : [36,37,38,39,40,41,42],
  },

  // ─────────────────────────────────────────

  ultimate: {
    key          : 'ultimate',
    seriesGroup  : null,

    displayName  : 'ULTIMATE PAKET',
    packLabel    : 'ULTIMATE',
    seriesLabel  : 'ALİENS',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 5000,

    tintColor    : '#ff2200',
    nameTextColor: '#ff4400',
    buyBtnColor  : '#ff4400',

    cardClass    : 'pack-card pack-epic',      // border üçün inline override var
    iconBgClass  : 'pi-ult',
    nameCssClass : 'un',
    dotClass     : 'epic',
    openBtnClass : 'epic',
    burstClass   : 'common',
    burstEmoji   : '⚡',

    // Ultimate paket üçün fərqli border rəngi
    customBorderStyle : 'border-color:#ff4400',
    customBuyBtnStyle : 'color:#ff4400;border-color:#ff4400',

    odds: {
      common   : 0,
      rare     : 0,
      epic     : 70,
      legendary: 20,
      ultimate : 10,
    },
    oddsDisplay: 'EPİK <span>70%</span> · LEGEND <span>20%</span> · ULT <span>10%</span>',

    cardPool     : [16,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50,40,43,44,45,46,47,48,49],
    cardPoolLabel: 'Ultimate + Legendary Kartlar',

    // Ultimate üçün xüsusi pull (10% şansla ultimate kartı)
    specialPullChance : 0.10,
    specialPullIds    : [43,44,45,46,47,48,49],
  },

};

// ───────────────────────────────────────────────────────────────────
//  Köhnə formatla uyğunluq üçün köprü dəyişənlər
//  (oyunun qalan hissəsi bunları istifadə edir)
// ───────────────────────────────────────────────────────────────────

const PACK_PRICE = Object.fromEntries(
  Object.entries(PACKS_CONFIG).map(([k, v]) => [k, v.price])
);

const PACK_ODDS = Object.fromEntries(
  Object.entries(PACKS_CONFIG).map(([k, v]) => [k, v.odds])
);

const PACK_CARD_POOL = Object.fromEntries(
  Object.entries(PACKS_CONFIG).map(([k, v]) => [k, v.cardPool])
);


// ───────────────────────────────────────────────────────────────────
//  NADİRLİK AZERBAYCAN ADLARI
// ───────────────────────────────────────────────────────────────────

const RARITY_AZ = {
  common   : 'ADİ',
  rare     : 'NADİR',
  epic     : 'EPİK',
  legendary: 'LEGENDƏRİ',
  ultimate : 'ULTIMATE',
};


// ───────────────────────────────────────────────────────────────────
//  PACK VİZUAL QURUCUSU
//  Hər paketin sol tərəfindəki 3D paket görünüşünü yaradır.
// ───────────────────────────────────────────────────────────────────

function buildPackVisual(packLabel, seriesLabel, tintColor, heroB64) {
  const heroTag = heroB64
    ? `<img class="pack-vis-hero-img" src="data:image/png;base64,${heroB64}" alt="hero">`
    : '';

  return `
    <div class="pack-visual-wrap">
      <div class="pack-vis-teeth-top">
        ${Array(9).fill('<div class="pack-vis-tooth"></div>').join('')}
      </div>
      <div class="pack-vis-body">
        <div class="pack-vis-shimmer"><div class="pack-vis-beam"></div></div>
        <div class="pack-vis-inner">
          <div class="pack-vis-name"
               style="color:${tintColor};text-shadow:0 0 8px ${tintColor}88">
            ${packLabel}
          </div>
          <div class="pack-vis-series">${seriesLabel}</div>
          <div class="pack-vis-hero">
            <div class="pack-vis-glow"
                 style="background:radial-gradient(ellipse,${tintColor}70 0%,transparent 70%)">
            </div>
            ${heroTag}
          </div>
          <div class="pack-vis-brand">
            <div class="pack-vis-brand-dot" style="background:${tintColor}88"></div>
            <div class="pack-vis-brand-name">COSMIC HEROES</div>
            <div class="pack-vis-brand-dot" style="background:${tintColor}88"></div>
          </div>
        </div>
      </div>
      <div class="pack-vis-teeth-bot">
        ${Array(9).fill('<div class="pack-vis-tooth"></div>').join('')}
      </div>
    </div>`;
}


// ───────────────────────────────────────────────────────────────────
//  PACK KARTı HTML QURUCUSU
//  PACKS_CONFIG-dan oxuyaraq bir paketin tam HTML-ini qaytarır.
// ───────────────────────────────────────────────────────────────────

function buildPackCardHTML(cfg) {
  const heroB64    = PACK_HERO_IMAGES[cfg.key] || '';
  const visualHtml = buildPackVisual(cfg.packLabel, cfg.seriesLabel, cfg.tintColor, heroB64);

  const cardStyle  = cfg.customBorderStyle ? ` style="${cfg.customBorderStyle}"` : '';
  const btnStyle   = cfg.customBuyBtnStyle
    ? ` style="${cfg.customBuyBtnStyle}"`
    : '';

  return `
    <div class="${cfg.cardClass}"${cardStyle} onclick="buyPack('${cfg.key}')">
      <div class="pack-icon ${cfg.iconBgClass}"
           style="padding:0;overflow:visible;min-width:100px">
        ${visualHtml}
      </div>
      <div class="pack-right">
        <div>
          <div class="pack-name ${cfg.nameCssClass}">${cfg.displayName}</div>
          <div class="pack-odds">${cfg.oddsDisplay}</div>
          <div class="pack-price">🪙 ${cfg.price}</div>
        </div>
        <button class="pack-buy-btn"${btnStyle}
                onclick="event.stopPropagation();buyPack('${cfg.key}')">
          ${cfg.buyBtnText}
        </button>
      </div>
    </div>`;
}


// ───────────────────────────────────────────────────────────────────
//  PAKETLƏR SEKMESİNİ RENDER ET
// ───────────────────────────────────────────────────────────────────

function renderPacksTab() {
  const el = document.getElementById('shopInner');
  if (!el) return;

  let html = '';
  let lastGroup = null;

  Object.values(PACKS_CONFIG).forEach(cfg => {
    // Qrup başlığı
    if (cfg.seriesGroup && cfg.seriesGroup !== lastGroup) {
      html += `<div class="shop-section-title"${lastGroup ? ' style="margin-top:8px"' : ''}>${cfg.seriesGroup}</div>`;
      lastGroup = cfg.seriesGroup;
    }
    html += buildPackCardHTML(cfg);
  });

  html += `
    <div class="shop-section-title" style="margin-top:4px">STOKDAKI PAKETLƏR</div>
    <div class="stocked-packs" id="stockedPacks"></div>`;

  el.innerHTML = html;
  renderStockedPacks();
}


// ───────────────────────────────────────────────────────────────────
//  STOKDAKI PAKETLƏR
// ───────────────────────────────────────────────────────────────────

function renderStockedPacks() {
  const el = document.getElementById('stockedPacks');
  if (!el) return;

  const rows = Object.values(PACKS_CONFIG)
    .filter(cfg => (packetStock[cfg.key] || 0) > 0);

  if (!rows.length) {
    el.innerHTML = '<div style="font-size:11px;color:var(--text-dim);padding:8px 0">Heç bir paket yoxdur</div>';
    return;
  }

  el.innerHTML = rows.map(cfg => `
    <div class="stocked-pack-row">
      <div class="stocked-pack-info">
        <div class="stocked-pack-dot ${cfg.dotClass}"></div>
        <div class="stocked-pack-name">${cfg.displayName}</div>
        <div class="stocked-pack-count">x${packetStock[cfg.key]}</div>
      </div>
      <button class="stocked-open-btn ${cfg.openBtnClass}"
              onclick="openPack('${cfg.key}')">
        ${cfg.openBtnText}
      </button>
    </div>`).join('');
}


// ───────────────────────────────────────────────────────────────────
//  PAKET ALIŞI
// ───────────────────────────────────────────────────────────────────

function buyPack(type) {
  const cfg = PACKS_CONFIG[type];
  if (!cfg) return;

  if (playerCoins < cfg.price) {
    showToast(`Kifayət qədər coin yoxdur! Lazım: 🪙${cfg.price}`);
    return;
  }

  playerCoins -= cfg.price;
  packetStock[type] = (packetStock[type] || 0) + 1;
  updateCoinDisplay();
  saveAll();
  showToast('Paket alındı!');
  renderStockedPacks();
}


// ───────────────────────────────────────────────────────────────────
//  NƏDİRLİK ROLL — PACK_ODDS konfiqurasiyasından oxuyur
// ───────────────────────────────────────────────────────────────────

function rollRarity(packType) {
  const cfg = PACKS_CONFIG[packType];
  if (!cfg) return 'common';

  const o = cfg.odds;
  const r = Math.random() * 100;

  const ultCeil  = o.ultimate  || 0;
  const legCeil  = ultCeil  + (o.legendary || 0);
  const epicCeil = legCeil  + (o.epic      || 0);
  const rareCeil = epicCeil + (o.rare      || 0);

  if (r < ultCeil)  return 'ultimate';
  if (r < legCeil)  return 'legendary';
  if (r < epicCeil) return 'epic';
  if (r < rareCeil) return 'rare';
  return 'common';
}


// ───────────────────────────────────────────────────────────────────
//  PAKET GENERASİYASI — 5 kart qaytarır
// ───────────────────────────────────────────────────────────────────

function generatePack(packType) {
  const cfg = PACKS_CONFIG[packType];
  if (!cfg) return [];

  const ORDER = { common:0, rare:1, epic:2, legendary:3, ultimate:4 };
  const results = [];

  const allowedCards = CARDS.filter(c => cfg.cardPool.includes(c.id));

  for (let i = 0; i < 5; i++) {
    // Xüsusi pull şansı (cosmic / ultimate)
    if (cfg.specialPullChance && Math.random() < cfg.specialPullChance) {
      const specPool = CARDS.filter(c => cfg.specialPullIds.includes(c.id));
      results.push(specPool[Math.floor(Math.random() * specPool.length)]);
      continue;
    }

    const rarity = rollRarity(packType);
    const pool   = allowedCards.filter(c => c.rarity === rarity);
    const chosen = pool.length ? pool : allowedCards;
    results.push(chosen[Math.floor(Math.random() * chosen.length)]);
  }

  return results.sort((a, b) => ORDER[a.rarity] - ORDER[b.rarity]);
}


// ───────────────────────────────────────────────────────────────────
//  PAKET AÇMA OVERLAY
// ───────────────────────────────────────────────────────────────────

let pendingRevealCards  = [];
let currentOpenPackType = '';

function openPack(type) {
  const cfg = PACKS_CONFIG[type];
  if (!cfg || !packetStock[type] || packetStock[type] <= 0) return;

  currentOpenPackType = type;
  pendingRevealCards  = generatePack(type);

  // Overlay sıfırla
  document.getElementById('packOpenStep1').style.display = 'flex';
  document.getElementById('packOpenStep2').style.display = 'none';
  document.getElementById('revealCardsRow').innerHTML    = '';
  document.getElementById('btnCollect').style.display    = 'none';

  // Etiket
  document.getElementById('packOpenLabel').textContent = cfg.displayName;

  // Burst düyməsi
  const burst = document.getElementById('packBurst');
  burst.className          = `pack-burst ${cfg.burstClass}`;
  burst.textContent        = cfg.burstEmoji;
  burst.style.transform    = '';
  burst.style.opacity      = '';
  burst.style.animation    = '';

  document.getElementById('packOpenOverlay').classList.add('show');
}

async function startReveal() {
  const burst = document.getElementById('packBurst');
  burst.style.animation = 'none';
  burst.style.transform = 'scale(1.4)';
  burst.style.opacity   = '0';
  await delay(280);

  document.getElementById('packOpenStep1').style.display = 'none';
  document.getElementById('packOpenStep2').style.display = 'flex';

  const row = document.getElementById('revealCardsRow');

  for (let i = 0; i < pendingRevealCards.length; i++) {
    const card = pendingRevealCards[i];
    const div  = document.createElement('div');
    div.className = `reveal-card rarity-${card.rarity}`;
    div.innerHTML = `
      <div class="reveal-card-art">
        <img src="cards/${card.id}.png" alt="${card.name}"
             onerror="this.style.display='none';this.parentNode.innerHTML='<span style=\\'font-size:36px\\'>👾</span>'">
      </div>
      <div class="reveal-card-footer">
        <div class="reveal-card-name">${card.name}</div>
        <div class="reveal-card-rarity rarity-${card.rarity}">${RARITY_AZ[card.rarity]}</div>
      </div>`;

    row.appendChild(div);

    const REVEAL_DELAYS = { common:320, rare:480, epic:680, legendary:900, ultimate:1100 };
    await delay(REVEAL_DELAYS[card.rarity] || 400);

    div.classList.add('show');

    if (['legendary','epic','ultimate'].includes(card.rarity)) {
      spawnParticles(div, card.rarity);
    }
    if (card.rarity === 'legendary' || card.rarity === 'ultimate') {
      showToast(`⭐ ${RARITY_AZ[card.rarity]}: ${card.name}!`);
    }
  }

  await delay(500);
  document.getElementById('btnCollect').style.display = 'block';
}

function collectCards() {
  pendingRevealCards.forEach(card => {
    playerInventory[card.id] = (playerInventory[card.id] || 0) + 1;
  });

  packetStock[currentOpenPackType]--;
  if (packetStock[currentOpenPackType] <= 0) {
    delete packetStock[currentOpenPackType];
  }

  saveAll();
  document.getElementById('packOpenOverlay').classList.remove('show');
  renderStockedPacks();
  showToast('Kartlar kolleksiyaya əlavə edildi!');
}


// ───────────────────────────────────────────────────────────────────
//  PARTİKEL EFFEKTİ
// ───────────────────────────────────────────────────────────────────

const PARTICLE_COLORS = {
  epic     : '#aa44ff',
  legendary: '#ffaa00',
  ultimate : '#ff2200',
};

function spawnParticles(el, rarity) {
  const color = PARTICLE_COLORS[rarity] || '#ffffff';
  const rect  = el.getBoundingClientRect();
  const cx    = rect.left + rect.width  / 2;
  const cy    = rect.top  + rect.height / 2;

  for (let i = 0; i < 12; i++) {
    const p     = document.createElement('div');
    p.className = 'particle';
    const angle = Math.PI * 2 * i / 12;
    const dist  = 50 + Math.random() * 50;

    p.style.cssText = [
      `left:${cx}px`,
      `top:${cy}px`,
      `background:${color}`,
      `--dx:${Math.cos(angle) * dist}px`,
      `--dy:${Math.sin(angle) * dist}px`,
      `animation:particleFly 0.7s ease-out forwards`,
      `position:fixed`,
      `z-index:800`,
    ].join(';');

    document.body.appendChild(p);
    setTimeout(() => p.remove(), 800);
  }
}
