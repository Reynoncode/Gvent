// ═══════════════════════════════════════════════════════════════════
//  cardpack.js — Kart Paketlərinin Tam Konfiqurasiyası
//  index.html-də firebase scriptindən əvvəl əlavə et:
//  <script src="cardpack.js"></script>
// ═══════════════════════════════════════════════════════════════════

// ───────────────────────────────────────────────────────────────────
//  BASE64 RƏSMLƏRİ — Öz base64-lərinizi bura yapışdırın
// ───────────────────────────────────────────────────────────────────

const B64_COMMON   = ''; // S1 Adi paket hero rəsmi
const B64_RARE     = ''; // S1 Nadir paket hero rəsmi
const B64_EPIC     = ''; // S1 Epik paket hero rəsmi
const B64_COMMON2  = ''; // S2 Adi paket hero rəsmi
const B64_RARE2    = ''; // S2 Nadir paket hero rəsmi
const B64_EPIC2    = ''; // S2 Epik paket hero rəsmi
const B64_COSMIC   = ''; // Cosmic paket hero rəsmi
const B64_ULTIMATE = ''; // Ultimate paket hero rəsmi

// ───────────────────────────────────────────────────────────────────
//  PACK_VISUALS — Hər paket tipi üçün görünüş ayarları
// ───────────────────────────────────────────────────────────────────

window.PACK_VISUALS = {

  common: {
    tintColor:         '#7a9a80',
    bodyBg:            'linear-gradient(160deg, #0b1535 0%, #07102a 40%, #040d20 100%)',
    innerBorder:       'rgba(0,200,100,0.35)',
    innerBg:           'rgba(0,40,15,0.3)',
    innerGradient:     'linear-gradient(135deg, rgba(0,200,100,0.5), rgba(50,150,80,0.4), rgba(0,200,100,0.5))',
    nameColor:         '#7a9a80',
    seriesColor:       'rgba(0,200,100,0.7)',
    nameText:          'ADİ PAKET',
    seriesText:        'STARTER · 5 CARD',
    heroHeight:        '68px',
    heroSectionHeight: '58px',
    brandColor:        'rgba(180,220,190,0.8)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#0c1a0e',
    glowColor:         'rgba(0,200,100,0.45)',
    shimmerColor:      'rgba(255,255,255,0.06)',
    heroB64:           B64_COMMON,
  },

  rare: {
    tintColor:         '#4a8aff',
    bodyBg:            'linear-gradient(160deg, #050e28 0%, #03091a 40%, #020610 100%)',
    innerBorder:       'rgba(74,138,255,0.45)',
    innerBg:           'rgba(0,20,80,0.4)',
    innerGradient:     'linear-gradient(135deg, rgba(74,138,255,0.55), rgba(30,80,200,0.4), rgba(74,138,255,0.55))',
    nameColor:         '#4a8aff',
    seriesColor:       'rgba(74,138,255,0.75)',
    nameText:          'NADİR PAKET',
    seriesText:        'STARTER · 5 CARD',
    heroHeight:        '72px',
    heroSectionHeight: '62px',
    brandColor:        'rgba(180,200,255,0.85)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#060e28',
    glowColor:         'rgba(74,138,255,0.5)',
    shimmerColor:      'rgba(100,150,255,0.09)',
    heroB64:           B64_RARE,
  },

  epic: {
    tintColor:         '#aa44ff',
    bodyBg:            'linear-gradient(160deg, #150b35 0%, #0d0520 40%, #0a0218 100%)',
    innerBorder:       'rgba(170,68,255,0.45)',
    innerBg:           'rgba(40,0,80,0.4)',
    innerGradient:     'linear-gradient(135deg, rgba(170,68,255,0.55), rgba(100,30,200,0.4), rgba(170,68,255,0.55))',
    nameColor:         '#aa44ff',
    seriesColor:       'rgba(170,68,255,0.75)',
    nameText:          'EPİK PAKET',
    seriesText:        'STARTER · 5 CARD',
    heroHeight:        '74px',
    heroSectionHeight: '64px',
    brandColor:        'rgba(210,185,255,0.88)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#160a28',
    glowColor:         'rgba(170,68,255,0.52)',
    shimmerColor:      'rgba(170,68,255,0.10)',
    heroB64:           B64_EPIC,
  },

  common2: {
    tintColor:         '#7a9a80',
    bodyBg:            'linear-gradient(160deg, #0a1a10 0%, #061208 40%, #030d05 100%)',
    innerBorder:       'rgba(0,180,80,0.38)',
    innerBg:           'rgba(0,50,20,0.35)',
    innerGradient:     'linear-gradient(135deg, rgba(0,180,80,0.5), rgba(0,120,50,0.38), rgba(0,180,80,0.5))',
    nameColor:         '#7aba88',
    seriesColor:       'rgba(0,200,90,0.72)',
    nameText:          'ADİ PAKET',
    seriesText:        'FORCE · 5 CARD',
    heroHeight:        '68px',
    heroSectionHeight: '58px',
    brandColor:        'rgba(180,230,195,0.82)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#0a1a0c',
    glowColor:         'rgba(0,200,90,0.44)',
    shimmerColor:      'rgba(0,220,100,0.07)',
    heroB64:           B64_COMMON2,
  },

  rare2: {
    tintColor:         '#4a8aff',
    bodyBg:            'linear-gradient(160deg, #06102e 0%, #040b1e 40%, #02060e 100%)',
    innerBorder:       'rgba(74,138,255,0.42)',
    innerBg:           'rgba(0,18,75,0.38)',
    innerGradient:     'linear-gradient(135deg, rgba(74,138,255,0.52), rgba(28,78,195,0.38), rgba(74,138,255,0.52))',
    nameColor:         '#5090ff',
    seriesColor:       'rgba(74,138,255,0.72)',
    nameText:          'NADİR PAKET',
    seriesText:        'FORCE · 5 CARD',
    heroHeight:        '72px',
    heroSectionHeight: '62px',
    brandColor:        'rgba(175,200,255,0.84)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#06102e',
    glowColor:         'rgba(74,138,255,0.48)',
    shimmerColor:      'rgba(90,140,255,0.09)',
    heroB64:           B64_RARE2,
  },

  epic2: {
    tintColor:         '#cc66ff',
    bodyBg:            'linear-gradient(160deg, #1a0c3e 0%, #110828 40%, #0c0418 100%)',
    innerBorder:       'rgba(200,88,255,0.48)',
    innerBg:           'rgba(55,5,95,0.42)',
    innerGradient:     'linear-gradient(135deg, rgba(200,88,255,0.58), rgba(120,40,210,0.44), rgba(200,88,255,0.58))',
    nameColor:         '#cc66ff',
    seriesColor:       'rgba(200,88,255,0.78)',
    nameText:          'EPİK PAKET',
    seriesText:        'FORCE · 5 CARD',
    heroHeight:        '74px',
    heroSectionHeight: '64px',
    brandColor:        'rgba(220,190,255,0.9)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#1a0c3e',
    glowColor:         'rgba(200,88,255,0.55)',
    shimmerColor:      'rgba(200,88,255,0.11)',
    heroB64:           B64_EPIC2,
  },

  cosmic: {
    tintColor:         '#00ccff',
    bodyBg:            'linear-gradient(160deg, #031828 0%, #021018 40%, #010810 100%)',
    innerBorder:       'rgba(0,204,255,0.50)',
    innerBg:           'rgba(0,40,70,0.45)',
    innerGradient:     'linear-gradient(135deg, rgba(0,204,255,0.58), rgba(0,120,200,0.45), rgba(0,204,255,0.58))',
    nameColor:         '#00ccff',
    seriesColor:       'rgba(0,204,255,0.78)',
    nameText:          'COSMİC PAKET',
    seriesText:        'AGGREGOR · 5 CARD',
    heroHeight:        '78px',
    heroSectionHeight: '68px',
    brandColor:        'rgba(180,235,255,0.9)',
    brandText:         'COSMIC HEROES',
    toothColor:        '#031828',
    glowColor:         'rgba(0,204,255,0.55)',
    shimmerColor:      'rgba(0,220,255,0.12)',
    heroB64:           B64_COSMIC,
  },

  ultimate: {
    tintColor:         '#ff2200',
    bodyBg:            'linear-gradient(160deg, #2e0a00 0%, #1a0500 40%, #0d0200 100%)',
    innerBorder:       'rgba(255,34,0,0.58)',
    innerBg:           'rgba(80,10,0,0.45)',
    innerGradient:     'linear-gradient(135deg, rgba(255,34,0,0.65), rgba(180,20,0,0.52), rgba(255,80,0,0.65))',
    nameColor:         '#ff4400',
    seriesColor:       'rgba(255,88,0,0.82)',
    nameText:          'ULTIMATE PAKET',
    seriesText:        'ALİENS · 5 CARD',
    heroHeight:        '82px',
    heroSectionHeight: '72px',
    brandColor:        'rgba(255,210,190,0.92)',
    brandText:         'ULTIMATE FORCE',
    toothColor:        '#2a0800',
    glowColor:         'rgba(255,44,0,0.62)',
    shimmerColor:      'rgba(255,100,0,0.13)',
    heroB64:           B64_ULTIMATE,
  },
};

// ───────────────────────────────────────────────────────────────────
//  buildPackVisual — Paket vizualını yaradan funksiya
//  packType: 'common' | 'rare' | 'epic' | 'common2' | 'rare2' |
//            'epic2'  | 'cosmic' | 'ultimate'
// ───────────────────────────────────────────────────────────────────

window.buildPackVisual = function(packType) {
  const v = window.PACK_VISUALS[packType] || window.PACK_VISUALS.common;

  const toothTop = Array(9)
    .fill(`<div class="pack-vis-tooth" style="background:${v.toothColor}"></div>`)
    .join('');
  const toothBot = Array(9)
    .fill(`<div class="pack-vis-tooth" style="background:${v.toothColor}"></div>`)
    .join('');

  const heroImg = v.heroB64
    ? `<img class="pack-vis-hero-img"
          style="height:${v.heroHeight}"
          src="data:image/png;base64,${v.heroB64}"
          alt="hero">`
    : `<span style="font-size:36px;position:relative;z-index:1">📦</span>`;

  return `
    <div class="pack-visual-wrap">
      <div class="pack-vis-teeth-top" style="border-top-color:${v.toothColor}">
        ${toothTop}
      </div>
      <div class="pack-vis-body" style="background:${v.bodyBg}">
        <div class="pack-vis-shimmer">
          <div class="pack-vis-beam"
               style="background:linear-gradient(105deg,transparent 30%,${v.shimmerColor} 50%,${v.shimmerColor} 55%,transparent 70%)">
          </div>
        </div>
        <div class="pack-vis-inner"
             style="border-color:${v.innerBorder};background:${v.innerBg};position:relative;">
          <div style="position:absolute;inset:-1px;border-radius:6px;
                      background:${v.innerGradient};z-index:-1;"></div>
          <div class="pack-vis-name"
               style="color:${v.nameColor};text-shadow:0 0 8px ${v.nameColor}88">
            ${v.nameText}
          </div>
          <div class="pack-vis-series" style="color:${v.seriesColor}">
            ${v.seriesText}
          </div>
          <div class="pack-vis-hero" style="height:${v.heroSectionHeight}">
            <div class="pack-vis-glow"
                 style="background:radial-gradient(ellipse,${v.glowColor} 0%,transparent 70%)">
            </div>
            ${heroImg}
          </div>
          <div class="pack-vis-brand"
               style="border-top-color:${v.innerBorder};margin-top:3px;padding-top:3px;">
            <div class="pack-vis-brand-dot" style="background:${v.tintColor}88"></div>
            <div class="pack-vis-brand-name" style="color:${v.brandColor}">
              ${v.brandText}
            </div>
            <div class="pack-vis-brand-dot" style="background:${v.tintColor}88"></div>
          </div>
        </div>
      </div>
      <div class="pack-vis-teeth-bot" style="border-bottom-color:${v.toothColor}">
        ${toothBot}
      </div>
    </div>`;
};

// ───────────────────────────────────────────────────────────────────
//  PACK_PRICE
// ───────────────────────────────────────────────────────────────────

window.PACK_PRICE = {
  common:   500,
  rare:     2000,
  epic:     5000,
  common2:  500,
  rare2:    2000,
  epic2:    5000,
  cosmic:   3000,
  ultimate: 5000,
};

// ───────────────────────────────────────────────────────────────────
//  PACK_ODDS
// ───────────────────────────────────────────────────────────────────

window.PACK_ODDS = {
  common:   { common:70, rare:25, epic:5,  legendary:0,  ultimate:0  },
  rare:     { common:50, rare:30, epic:18, legendary:2,  ultimate:0  },
  epic:     { common:30, rare:30, epic:30, legendary:10, ultimate:0  },
  common2:  { common:70, rare:25, epic:5,  legendary:0,  ultimate:0  },
  rare2:    { common:50, rare:30, epic:18, legendary:2,  ultimate:0  },
  epic2:    { common:30, rare:30, epic:30, legendary:10, ultimate:0  },
  cosmic:   { common:0,  rare:0,  epic:90, legendary:10, ultimate:0  },
  ultimate: { common:0,  rare:0,  epic:70, legendary:20, ultimate:10 },
};

// ───────────────────────────────────────────────────────────────────
//  PACK_CARD_POOL
// ───────────────────────────────────────────────────────────────────

window.PACK_CARD_POOL = {
  common:   [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  rare:     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  epic:     [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
  common2:  [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
  rare2:    [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
  epic2:    [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50],
  cosmic:   [21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50,37,38,39,40,41,42],
  ultimate: [16,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,50,40,43,44,45,46,47,48,49],
};

// ───────────────────────────────────────────────────────────────────
//  PACK_UI_LIST — renderPacksTab() bu siyahıdan oxuyur
// ───────────────────────────────────────────────────────────────────

window.PACK_UI_LIST = [
  {
    key:          'common',
    sectionTitle: '🟩 SERİYA 1 — KARTLAR 1-20',
    cssClass:     'pack-common',
    nameClass:    'cn',
    displayName:  'ADİ PAKET S1',
    oddsText:     'ADİ <span>70%</span> · NADİR <span>25%</span> · EPİK <span>5%</span>',
  },
  {
    key:          'rare',
    sectionTitle: null,
    cssClass:     'pack-rare',
    nameClass:    'rn',
    displayName:  'NADİR PAKET S1',
    oddsText:     'ADİ <span>50%</span> · NADİR <span>30%</span> · EPİK <span>18%</span> · LEG <span>2%</span>',
  },
  {
    key:          'epic',
    sectionTitle: null,
    cssClass:     'pack-epic',
    nameClass:    'en',
    displayName:  'EPİK PAKET S1',
    oddsText:     'ADİ <span>30%</span> · NADİR <span>30%</span> · EPİK <span>30%</span> · LEG <span>10%</span>',
  },
  {
    key:          'common2',
    sectionTitle: '🟦 SERİYA 2 — KARTLAR 21-36 + 50',
    cssClass:     'pack-common',
    nameClass:    'cn',
    displayName:  'ADİ PAKET S2',
    oddsText:     'ADİ <span>70%</span> · NADİR <span>25%</span> · EPİK <span>5%</span>',
  },
  {
    key:          'rare2',
    sectionTitle: null,
    cssClass:     'pack-rare',
    nameClass:    'rn',
    displayName:  'NADİR PAKET S2',
    oddsText:     'ADİ <span>50%</span> · NADİR <span>30%</span> · EPİK <span>18%</span> · LEG <span>2%</span>',
  },
  {
    key:          'epic2',
    sectionTitle: null,
    cssClass:     'pack-epic',
    nameClass:    'en',
    displayName:  'EPİK PAKET S2',
    oddsText:     'ADİ <span>30%</span> · NADİR <span>30%</span> · EPİK <span>30%</span> · LEG <span>10%</span>',
  },
  {
    key:          'cosmic',
    sectionTitle: '🌌 XÜSUSİ PAKETLƏR',
    cssClass:     'pack-epic',
    nameClass:    'en',
    displayName:  'COSMİC PAKET',
    oddsText:     'EPİK <span>90%</span> · Xüsusi <span>10%</span>',
  },
  {
    key:          'ultimate',
    sectionTitle: null,
    cssClass:     'pack-epic',
    nameClass:    'un',
    displayName:  'ULTIMATE PAKET',
    oddsText:     'EPİK <span>70%</span> · LEGEND <span>20%</span> · ULT <span>10%</span>',
    extraStyle:   'border-color:#ff4400',
    btnStyle:     'color:#ff4400;border-color:#ff4400',
  },
];

// ───────────────────────────────────────────────────────────────────
//  STOCKED_PACK_UI
// ───────────────────────────────────────────────────────────────────

window.STOCKED_PACK_UI = {
  common:   { label:'ADİ PAKET S1',    cls:'common' },
  rare:     { label:'NADİR PAKET S1',  cls:'rare'   },
  epic:     { label:'EPİK PAKET S1',   cls:'epic'   },
  common2:  { label:'ADİ PAKET S2',    cls:'common' },
  rare2:    { label:'NADİR PAKET S2',  cls:'rare'   },
  epic2:    { label:'EPİK PAKET S2',   cls:'epic'   },
  cosmic:   { label:'COSMİC PAKET',    cls:'epic'   },
  ultimate: { label:'ULTIMATE PAKET',  cls:'epic'   },
};

// ───────────────────────────────────────────────────────────────────
//  PACK_OPEN_CONFIG
// ───────────────────────────────────────────────────────────────────

window.PACK_OPEN_CONFIG = {
  common:   { label:'ADİ PAKET',      emoji:'🟢', burstClass:'common' },
  rare:     { label:'NADİR PAKET',    emoji:'🔵', burstClass:'rare'   },
  epic:     { label:'EPİK PAKET',     emoji:'🟣', burstClass:'epic'   },
  common2:  { label:'ADİ PAKET S2',   emoji:'🟢', burstClass:'common' },
  rare2:    { label:'NADİR PAKET S2', emoji:'🔵', burstClass:'rare'   },
  epic2:    { label:'EPİK PAKET S2',  emoji:'🟣', burstClass:'epic'   },
  cosmic:   { label:'COSMİC PAKET',   emoji:'🌌', burstClass:'epic'   },
  ultimate: { label:'ULTIMATE PAKET', emoji:'⚡', burstClass:'epic'   },
};

console.log('[cardpack.js] Yükləndi ✓');
