const progress=document.getElementById('progress');
window.addEventListener('scroll',()=>{const h=document.documentElement.scrollHeight-innerHeight;progress.style.width=(scrollY/h*100)+'%';});
document.querySelectorAll('.faq-item').forEach(item=>item.addEventListener('click',()=>{item.classList.toggle('open');item.querySelector('b').textContent=item.classList.contains('open')?'−':'+';}));
const menu=document.getElementById('menu'), nav=document.querySelector('.nav nav');
menu?.addEventListener('click',()=>{nav.style.display=nav.style.display==='flex'?'none':'flex';nav.style.position='absolute';nav.style.top='78px';nav.style.left='0';nav.style.right='0';nav.style.padding='25px';nav.style.background='#07090cf7';nav.style.flexDirection='column';});
document.querySelectorAll('.nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<901)nav.style.display='none'}));
const mapLibrary={
  mirage:{
    name:'Mirage',
    areas:'Mid-Control • A-Rampe • B-Apps',
    roles:'Mid-Control, Entry, Support',
    utility:'Nebel für A und B, Blenden durch Window und Connector.',
    rounds:'Schnelle A- und B-Execs, Retake-Setups und späte Crossfires.'
  },
  inferno:{
    name:'Inferno',
    areas:'Banana • Apartments • Granaten',
    roles:'Entry, Lurker, Anchor',
    utility:'Banana-Nebel, Blenden für Apartments und Granaten auf B.',
    rounds:'Schneller Banana, B-Pushes, Retakes und lange A-Kontrolle.'
  },
  nuke:{
    name:'Nuke',
    areas:'Verticality • Outside • Ramp',
    roles:'AWPer, Lurker, Entry',
    utility:'Nebel für Outside und Ramp, Molotovs gegen Crossfires.',
    rounds:'Ramp-Kontrolle, Outside-Retakes und B-Site-Pressure.'
  },
  ancient:{
    name:'Ancient',
    areas:'Mid • Donut • Temple',
    roles:'Anchor, Lurker, Support',
    utility:'Mid-Kontrolle mit Nebeln und verzögerter Utility auf Temple und Donut.',
    rounds:'Langsames Mid-Controlling, gezielte Utility und Site-spezifische Retakes.'
  },
  dust2:{
    name:'Dust II',
    areas:'Long • Short • Mid',
    roles:'Entry, AWPer, Support',
    utility:'Long-Nebel, Short-Blende und Mid-Kontrolle mit Granaten.',
    rounds:'Schnelles B, aggressives Long und klassische Mid-Fights.'
  },
  overpass:{
    name:'Overpass',
    areas:'Connector • Bathrooms • Monster',
    roles:'Lurker, Entry, Support',
    utility:'Connector-Nebel, Badezimmer-Checks und Kontrolle von Monster.',
    rounds:'Connector-Pressure, schneller B-Druck und lange Retakes.'
  }
};

function renderMapDetail(mapKey){
  const mapData=mapLibrary[mapKey] || mapLibrary.mirage;
  document.getElementById('map-detail-name').textContent=mapData.name;
  document.getElementById('map-detail-areas').textContent=mapData.areas;
  document.getElementById('map-detail-roles').textContent=mapData.roles;
  document.getElementById('map-detail-utility').textContent=mapData.utility;
  document.getElementById('map-detail-rounds').textContent=mapData.rounds;
}

document.querySelectorAll('.map-row').forEach(row=>{
  row.addEventListener('click',()=>{
    document.querySelectorAll('.map-row').forEach(item=>item.classList.remove('active'));
    row.classList.add('active');
    renderMapDetail(row.dataset.map);
  });
});

renderMapDetail('mirage');

const productLibrary={
  mouse:{
    title:'Maus-Setup',
    summary:'Für aggressive Aim-Styles und schnelle Sweeps braucht man eine leicht handhabbare Maus mit sauberem Sensor und stabiler Form.',
    products:[
      {name:'Logitech G Pro X Superlight 2', price:'€150–180', fit:'Wettkampf / schnelle Sweeps', tags:['leichte Bauform','wenig Drag','sehr präzise']},
      {name:'Razer DeathAdder V3 Pro', price:'€120–160', fit:'Für breite Hand / hohe Comfort', tags:['komfortabel','stabil','schneller Sensor']},
      {name:'Finalmouse Ultralight 3', price:'€180–220', fit:'Wenn Gewicht und Geschwindigkeit wichtig sind', tags:['Ultralight','für schnelle Flicks','Premium']}
    ]
  },
  monitor:{
    title:'Monitor-Setup',
    summary:'Ein guter Monitor macht Bewegungen sichtbar, reduziert Unschärfe und verhindert, dass du schon vor einem Gegner verschwindest.',
    products:[
      {name:'Alienware AW2524H', price:'€300–400', fit:'Esport-Setup / schnelle Reaktion', tags:['240Hz','Low Input Lag','klar']},
      {name:'MSI MAG 271QPX QD-OLED', price:'€500–700', fit:'Für maximale Bildschärfe und Stabilität', tags:['OLED','farbenstark','für viel Detail']},
      {name:'BenQ ZOWIE XL2566K', price:'€350–500', fit:'Wettbewerbsorientiert und stark in Reaktionssicherheit', tags:['Esport','klarer Motion Blur','stabil']}
    ]
  },
  keyboard:{
    title:'Keyboard-Setup',
    summary:'Stabile Tasten, gutes Layout und saubere Inputs machen Bewegung und peeking deutlich kontrollierter.',
    products:[
      {name:'Wooting 60HE', price:'€170–220', fit:'Für präzise Inputs und schnelle Bewegung', tags:['analog','präzise','Top-Feedback']},
      {name:'SteelSeries Apex Pro TKL', price:'€150–200', fit:'Flexibel einstellbar / gut für Technikfans', tags:['adjustable','komfortabel','saubere Tasten']},
      {name:'Keychron Q1 Max', price:'€180–250', fit:'Für Komfort + Build-Qualität', tags:['schönes Layout','stabil','allein nutzbar']}
    ]
  },
  headset:{
    title:'Headset-Setup',
    summary:'Höhrst du Gegner sauber, erkennst du Bewegungen, Utility und Timing früher. Komfort ist dabei genauso wichtig wie Klang.',
    products:[
      {name:'HyperX Cloud III', price:'€90–130', fit:'Gut für Budget und Alltag', tags:['komfortabel','klarer Klang','sehr solide']},
      {name:'EPOS H3 Pro', price:'€160–220', fit:'Für schärfere Positionierung und Qualität', tags:['starkes Spatial Audio','klar','bewährt']},
      {name:'Sennheiser GSP 600', price:'€180–250', fit:'Wenn Klang und Komfort priorisiert werden', tags:['dickes Soundstage','komfortabel','saubezahlbar']}
    ]
  },
  pc:{
    title:'PC-Setup',
    summary:'Der beste PC ist einer, der stabile FPS liefert, wenig Frame Drops hat und sauber im Alltag funktioniert.',
    products:[
      {name:'RTX 4070 Super + Ryzen 7 7800X3D', price:'€1.200–1.600', fit:'Sehr gutes Preis-Leistungs-Verhältnis für CS2', tags:['stabil','großes FPS-Potenzial','saubere Frames']},
      {name:'RTX 4080 Super + Ryzen 9 7900X', price:'€1.800–2.400', fit:'Wenn du alles auf maximalem Niveau möchtest', tags:['hohe Frames','Top-Potenzial','Premium']},
      {name:'Intel i5 + RTX 4060', price:'€800–1.200', fit:'Guter Einstieg mit stabilen FPS', tags:['budgetfreundlich','stabil','verschiedene Builds']}
    ]
  },
  internet:{
    title:'Internet-Setup',
    summary:'Eine robuste Verbindung mit wenig Ping-Schwankung ist oft wichtiger als ein maximal hoher Downloadwert.',
    products:[
      {name:'Router mit Wi-Fi 6/6E', price:'€80–220', fit:'Für stabile Verbindung ohne größeren Aussetzer', tags:['stabil','saubere Signalstärke','niedrige Latenz']},
      {name:'LAN-Kabel Cat 6 / 6A', price:'€15–40', fit:'Wenn du wirklich stabil spielen willst', tags:['niedrige Ping-Spitzen','einfache Lösung','sehr effektiv']},
      {name:'Mesh-WLAN-Setup', price:'€150–300', fit:'Bei mehreren Geräten im Raum', tags:['breites Signal','flexibel','komfortabel']},
      {name:'TP-Link Deco XE75', price:'€180–260', fit:'Für ruhige, sichere Verbindung im Zimmer', tags:['stabil','WLAN 6E','für mehrere Geräte']}
    ]
  },
  mousepad:{
    title:'Mousepad-Setup',
    summary:'Ein gutes Mousepad verbessert Glide, präzise Swings und das Gefühl beim schnellen Flicking. Das macht den Unterschied beim täglichen Aim-Out.',
    products:[
      {name:'SteelSeries QcK Prism', price:'€25–45', fit:'Budgetfreundlich und sehr zuverlässig', tags:['viel Fläche','gut für schnelle Swings','sauber']},
      {name:'Xtrfy GP4', price:'€50–80', fit:'Für glatte, gleichmäßige Kontrolle', tags:['perfekt für Aim','sehr angenehm','stabil']},
      {name:' Artisan Hayate 3', price:'€80–120', fit:'Wenn du das perfekte Mausgefühl suchst', tags:['Premium','sehr präzise','komfortabel']},
      {name:'Razer Gigantus V3', price:'€40–60', fit:'Für den Einstieg mit guter Oberfläche', tags:['gutes Gefühl','großes Pad','stabil']}
    ]
  },
  chair:{
    title:'Chair-Setup',
    summary:'Ergonomie entscheidet über Fokus und Haltung. Wer länger sitzt, profitiert schnell von besserer Rückenstütze und stabiler Sitzposition.',
    products:[
      {name:'Secretlab Titan Evo', price:'€350–500', fit:'Top-Comfort und langfristige Ergonomie', tags:['stabil','fantastische Rückenstütze','sehr hochwertig']},
      {name:'Arozzi Forte', price:'€220–300', fit:'Stabil und sinnvoll für lange Sessions', tags:['komfortabel','budget-tauglich','sicher']},
      {name:'FlexiSpot C7', price:'€250–350', fit:'Für eine ergonomische, professionellere Sitzposition', tags:['BWS-Unterstützung','gut für lange Sessions','stark']},
      {name:'DXRacer Formula', price:'€300–420', fit:'Wenn du auf Heim-Sitzkomfort setzt', tags:['sportlich','starkes Design','komfortabel']}
    ]
  }
};

function renderProducts(category){
  const config=productLibrary[category];
  const list=document.getElementById('product-list');
  const tag=document.getElementById('detail-tag');
  const title=document.getElementById('detail-title');
  const summary=document.getElementById('detail-summary');

  if(!config || !list)return;

  tag.textContent='Empfohlene Produkte';
  title.textContent=config.title;
  summary.textContent=config.summary;
  list.innerHTML=config.products.map(product=>`
    <div class="product-card">
      <div class="meta">
        <strong>${product.name}</strong>
        <span>${product.price}</span>
      </div>
      <p><strong>Für:</strong> ${product.fit}</p>
      <div class="tags">
        ${product.tags.map(tag=>`<b>${tag}</b>`).join('')}
      </div>
    </div>
  `).join('');
}

document.querySelectorAll('.hardware-card').forEach(card=>{
  card.addEventListener('click',()=>{
    document.querySelectorAll('.hardware-card').forEach(item=>item.classList.remove('active'));
    card.classList.add('active');
    renderProducts(card.dataset.category);
  });
});

renderProducts('mouse');

const trackerData=[
  {name:'Test Match #03', result:'W 13:10', adr:96.4, kd:1.17, multi:4, hs:'35%', kdMeter:72, adrMeter:78, isWin:true},
  {name:'Test Match #02', result:'L 9:13', adr:88.1, kd:1.02, multi:2, hs:'31%', kdMeter:64, adrMeter:70, isWin:false},
  {name:'Test Match #01', result:'W 13:8', adr:92.8, kd:1.09, multi:3, hs:'33%', kdMeter:68, adrMeter:74, isWin:true},
  {name:'Scrim #07', result:'W 16:12', adr:101.2, kd:1.24, multi:5, hs:'39%', kdMeter:80, adrMeter:86, isWin:true}
];

const trackerEls={
  name:document.getElementById('match-name'),
  result:document.getElementById('match-result'),
  adr:document.getElementById('adr-value'),
  kd:document.getElementById('kd-value'),
  multi:document.getElementById('multi-value'),
  hs:document.getElementById('hs-value'),
  kdText:document.getElementById('kd-text'),
  adrText:document.getElementById('adr-text'),
  kdMeter:document.getElementById('kd-meter'),
  adrMeter:document.getElementById('adr-meter')
};

function renderTracker(match){
  trackerEls.name.textContent=match.name;
  trackerEls.result.textContent=match.result;
  trackerEls.result.classList.toggle('loss',!match.isWin);
  trackerEls.adr.textContent=match.adr.toFixed(1);
  trackerEls.kd.textContent=match.kd.toFixed(2);
  trackerEls.multi.textContent=match.multi;
  trackerEls.hs.textContent=match.hs;
  trackerEls.kdText.textContent=match.kd.toFixed(2);
  trackerEls.adrText.textContent=match.adr.toFixed(1);
  trackerEls.kdMeter.style.width = `${match.kdMeter}%`;
  trackerEls.adrMeter.style.width = `${match.adrMeter}%`;
}

const matchList=document.getElementById('match-list');
if(matchList){
  matchList.innerHTML=trackerData.map((match, idx)=>`
    <button class="match-item ${idx===0?'active':''}" type="button" data-index="${idx}">
      <strong>${match.name}</strong>
      <span>${match.result}</span>
      <b>ADR ${match.adr.toFixed(1)}</b>
    </button>
  `).join('');

  matchList.querySelectorAll('.match-item').forEach(item=>{
    item.addEventListener('click',()=>{
      matchList.querySelectorAll('.match-item').forEach(el=>el.classList.remove('active'));
      item.classList.add('active');
      renderTracker(trackerData[Number(item.dataset.index)]);
    });
  });
}

renderTracker(trackerData[0]);

const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.style.opacity=1}),{threshold:.08});
document.querySelectorAll('.feature,.gear-grid article,.persona,.map-row,.setting,.insight-card,.hardware-card,.role-card,.match-item,.stat-card').forEach((el,i)=>{el.style.opacity=0;el.style.transitionDelay=(i%6)*40+'ms';io.observe(el)});
