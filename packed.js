// ═══════════════════════════════════════════════════════════════════
//  packed.js  —  Ben 10: Card Clash  |  Paket Sistemi
// ═══════════════════════════════════════════════════════════════════


// ───────────────────────────────────────────────────────────────────
//  BASE64 HERO ŞƏKİLLƏRİ
// ───────────────────────────────────────────────────────────────────

const PACK_HERO_IMAGES = {
  common   : '',
  rare     : '',
  epic     : '',
  common2  : '',
  rare2    : '',
  epic2    : '',
  cosmic   : '',
  ultimate : '',
};


// ───────────────────────────────────────────────────────────────────
//  PAKET KONFİQURASİYALARI
// ───────────────────────────────────────────────────────────────────

const PACKS_CONFIG = {

  common: {
    key          : 'common',
    seriesGroup  : '🟩 SERİYA 1 — KARTLAR 1-20',

    displayName  : 'ADİ PAKET S1',
    packLabel    : 'COMMON PACK',
    seriesLabel  : 'STARTER · 5 CARD',
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

    cardPool     : [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
    cardPoolLabel: 'Kartlar 1–20',
  },

  rare: {
    key          : 'rare',
    seriesGroup  : null,

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

  epic: {
    key          : 'epic',
    seriesGroup  : null,

    displayName  : 'EPİK PAKET S1',
    packLabel    : 'EPIC PACK',
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

  cosmic: {
    key          : 'cosmic',
    seriesGroup  : '🌌 XÜSUSİ PAKETLƏR',

    displayName  : 'COSMIC PAKET',
    packLabel    : 'AGGREGOR',
    seriesLabel  : 'COLLECTION',
    buyBtnText   : 'AL',
    openBtnText  : 'AÇ',

    price        : 3000,

    tintColor    : '#00ccff',
    nameTextColor: '#aa44ff',
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

    cardPool     : [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50,37,38,39,40,41,42],
    cardPoolLabel: 'Kosmik Kartlar + Epik Xüsusilər',

    specialPullChance : 0.10,
    specialPullIds    : [36,37,38,39,40,41,42],
  }

};


// ───────────────────────────────────────────────────────────────────
//  KÖPRÜ DƏYİŞƏNLƏR
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
//  NADİRLİK ADLARI
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
// ───────────────────────────────────────────────────────────────────

function buildPackVisual(packLabel, seriesLabel, tintColor, heroB64) {

  const heroTag = heroB64
    ? `<img class="pack-vis-hero-img" src="data:image/png;base64,${heroB64}" alt="hero">`
    : '';

  return `
    <div class="pack-visual-wrap">
      <div class="pack-vis-body">
        <div class="pack-vis-inner">

          <div class="pack-vis-name"
               style="color:${tintColor};text-shadow:0 0 8px ${tintColor}88">
            ${packLabel}
          </div>

          <div class="pack-vis-series">${seriesLabel}</div>

          <div class="pack-vis-hero">
            ${heroTag}
          </div>

        </div>
      </div>
    </div>`;
}


// ───────────────────────────────────────────────────────────────────
//  PACK HTML
// ───────────────────────────────────────────────────────────────────

function buildPackCardHTML(cfg) {

  const heroB64 = PACK_HERO_IMAGES[cfg.key] || '';

  const visualHtml = buildPackVisual(
    cfg.packLabel,
    cfg.seriesLabel,
    cfg.tintColor,
    heroB64
  );

  return `
    <div class="${cfg.cardClass}" onclick="buyPack('${cfg.key}')">

      <div class="pack-icon ${cfg.iconBgClass}">
        ${visualHtml}
      </div>

      <div class="pack-right">

        <div>
          <div class="pack-name ${cfg.nameCssClass}">${cfg.displayName}</div>
          <div class="pack-odds">${cfg.oddsDisplay}</div>
          <div class="pack-price">🪙 ${cfg.price}</div>
        </div>

        <button class="pack-buy-btn"
                onclick="event.stopPropagation();buyPack('${cfg.key}')">
          ${cfg.buyBtnText}
        </button>

      </div>
    </div>`;
}


// ───────────────────────────────────────────────────────────────────
//  SHOP RENDER
// ───────────────────────────────────────────────────────────────────

function renderPacksTab() {

  const el = document.getElementById('shopInner');
  if (!el) return;

  let html = '';
  let lastGroup = null;

  Object.values(PACKS_CONFIG).forEach(cfg => {

    if (cfg.seriesGroup && cfg.seriesGroup !== lastGroup) {

      html += `
        <div class="shop-section-title">
          ${cfg.seriesGroup}
        </div>
      `;

      lastGroup = cfg.seriesGroup;
    }

    html += buildPackCardHTML(cfg);
  });

  html += `
    <div class="shop-section-title">
      STOKDAKI PAKETLƏR
    </div>

    <div class="stocked-packs" id="stockedPacks"></div>
  `;

  el.innerHTML = html;

  renderStockedPacks();
}


// ───────────────────────────────────────────────────────────────────
//  STOCK RENDER
// ───────────────────────────────────────────────────────────────────

function renderStockedPacks() {

  const el = document.getElementById('stockedPacks');
  if (!el) return;

  const rows = Object.values(PACKS_CONFIG)
    .filter(cfg => (packetStock[cfg.key] || 0) > 0);

  if (!rows.length) {

    el.innerHTML = `
      <div style="font-size:11px;padding:8px 0">
        Heç bir paket yoxdur
      </div>
    `;

    return;
  }

  el.innerHTML = rows.map(cfg => `
    <div class="stocked-pack-row">

      <div class="stocked-pack-info">

        <div class="stocked-pack-dot ${cfg.dotClass}"></div>

        <div class="stocked-pack-name">
          ${cfg.displayName}
        </div>

        <div class="stocked-pack-count">
          x${packetStock[cfg.key]}
        </div>

      </div>

      <button class="stocked-open-btn ${cfg.openBtnClass}"
              onclick="openPack('${cfg.key}')">

        ${cfg.openBtnText}

      </button>

    </div>
  `).join('');
}


// ───────────────────────────────────────────────────────────────────
//  PACK ALIŞI
// ───────────────────────────────────────────────────────────────────

function buyPack(type) {

  const cfg = PACKS_CONFIG[type];
  if (!cfg) return;

  if (playerCoins < cfg.price) {

    showToast(`Kifayət qədər coin yoxdur!`);
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
//  NADİRLİK ROLL
// ───────────────────────────────────────────────────────────────────

function rollRarity(packType) {

  const cfg = PACKS_CONFIG[packType];
  if (!cfg) return 'common';

  const o = cfg.odds;

  const r = Math.random() * 100;

  const ultCeil  = o.ultimate || 0;
  const legCeil  = ultCeil  + (o.legendary || 0);
  const epicCeil = legCeil  + (o.epic || 0);
  const rareCeil = epicCeil + (o.rare || 0);

  if (r < ultCeil)  return 'ultimate';
  if (r < legCeil)  return 'legendary';
  if (r < epicCeil) return 'epic';
  if (r < rareCeil) return 'rare';

  return 'common';
}


// ───────────────────────────────────────────────────────────────────
//  PACK GENERATION
// ───────────────────────────────────────────────────────────────────

function generatePack(packType) {

  const cfg = PACKS_CONFIG[packType];
  if (!cfg) return [];

  const ORDER = {
    common:0,
    rare:1,
    epic:2,
    legendary:3,
    ultimate:4
  };

  const results = [];

  const allowedCards = CARDS.filter(
    c => cfg.cardPool.includes(c.id)
  );

  for (let i = 0; i < 5; i++) {

    if (cfg.specialPullChance &&
        Math.random() < cfg.specialPullChance) {

      const specPool = CARDS.filter(
        c => cfg.specialPullIds.includes(c.id)
      );

      results.push(
        specPool[Math.floor(Math.random() * specPool.length)]
      );

      continue;
    }

    const rarity = rollRarity(packType);

    const pool = allowedCards.filter(
      c => c.rarity === rarity
    );

    const chosen = pool.length ? pool : allowedCards;

    results.push(
      chosen[Math.floor(Math.random() * chosen.length)]
    );
  }

  return results.sort(
    (a, b) => ORDER[a.rarity] - ORDER[b.rarity]
  );
}
