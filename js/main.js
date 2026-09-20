(function(){
  "use strict";

  /* ---------- YEAR ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- MOBILE NAV ---------- */
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function(){
    var isOpen = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', isOpen);
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){ navLinks.classList.remove('open'); });
  });

  /* ---------- SCROLL REVEAL ---------- */
  var reveals = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if(entry.isIntersecting){
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, {threshold:0.12});
    reveals.forEach(function(el){ io.observe(el); });
  } else {
    reveals.forEach(function(el){ el.classList.add('in'); });
  }

  /* =========================================================
     SERVICES DATA — edit this list to change the Services section
  ========================================================= */
  var services = [
    {icon:'🏥', title:'Healthcare Administrative Support', desc:'General administrative support for healthcare-related workflows, informed by hands-on clinical and Medical VA experience.'},
    {icon:'📋', title:'Patient Intake Support', desc:'Collecting patient information, medical history, and chief complaints accurately and professionally.'},
    {icon:'📅', title:'Scheduling & Appointment Coordination', desc:'Managing appointments, follow-ups, and calendars to keep a practice or team running smoothly.'},
    {icon:'💻', title:'EHR Administrative Support', desc:'Administrative tasks within EHR systems such as TouchWorks and Practice Fusion.'},
    {icon:'🗂️', title:'Data Entry & Documentation', desc:'Accurate, organized data entry and documentation with close attention to detail.'},
    {icon:'✉️', title:'Email & Administrative Support', desc:'Managing inboxes, correspondence, and day-to-day administrative communication.'},
    {icon:'💬', title:'Client Communication', desc:'Clear, professional communication with clients and patients over phone and email.'},
    {icon:'📱', title:'Social Media Support', desc:'Assisting with content scheduling and day-to-day social media upkeep.'},
    {icon:'🎨', title:'Canva Graphic Design', desc:'Designing social media graphics and promotional materials using Canva.'},
    {icon:'🗃️', title:'Content Organization', desc:'Structuring files, content calendars, and materials so they are easy to find and use.'},
    {icon:'🧰', title:'General Virtual Assistance', desc:'Flexible day-to-day support across administrative and organizational tasks.'}
  ];
  var servicesGrid = document.getElementById('servicesGrid');
  services.forEach(function(s){
    var card = document.createElement('div');
    card.className = 'service-card reveal in';
    card.innerHTML = '<div class="service-icon">'+s.icon+'</div><h4>'+s.title+'</h4><p>'+s.desc+'</p>';
    servicesGrid.appendChild(card);
  });

  /* =========================================================
     CREATIVE PORTFOLIO PROJECTS
     -----------------------------------------------------------
     Add / edit projects here. Each project needs:
       title, category (must match a key in categories below),
       role, tools (array), description, image (see notes).

     IMAGE FIELD:
     "image" currently holds a CSS gradient used as a placeholder.
     To use a real picture from your Canva portfolio:
       1. Export the design from Canva as a PNG/JPG.
       2. Host it (e.g. upload alongside this file) and note its filename,
          for example "images/muffin-poster.jpg".
       3. Replace the placeholder <div class="p-thumb"> rendering logic
          below with an <img> tag pointing to that file, or simply swap
          the "gradient" value for a "src" field and update renderCard().
  ========================================================= */
  var categories = [
    {key:'all', label:'All'},
    {key:'social', label:'Social Media'},
    {key:'graphic', label:'Graphic Design'},
    {key:'promo', label:'Promotional'},
    {key:'business', label:'Business Projects'},
    {key:'content', label:'Content & Visual Comm.'}
  ];

  var projects = [
    {
      title:'World Heart Day Awareness Graphic',
      category:'social',
      catLabel:'Social Media Designs',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'A World Heart Day (29 September) awareness graphic created for the Silliman University Student Government (SUSG) Research Committee\'s social media page, encouraging cardiovascular health awareness.',
      image:'assets/images/project-01-world-heart-day.jpg'
    },
    {
      title:'"Walang Plastikan" Webinar Campaign',
      category:'promo',
      catLabel:'Promotional Materials',
      role:'Graphic Designer / Promotions',
      tools:['Canva'],
      desc:'Promotional graphics for a marine plastic pollution webinar hosted by the SUSG Research Committee and Mangrove Matters PH, including the event announcement design and two supporting infographics on ocean plastic prevention.',
      image:'assets/images/project-02-marine-plastic-pollution.jpg'
    },
    {
      title:'Protein Muffin Promotional Poster',
      category:'business',
      catLabel:'Personal / Business Projects',
      role:'Designer',
      tools:['Canva'],
      desc:'A promotional poster designed for my brother\'s muffin business, highlighting product benefits and a clear call to order.',
      image:'assets/images/project-03-protein-muffin-poster.jpg'
    },
    {
      title:'Croup Syndrome Educational Infographic',
      category:'content',
      catLabel:'Content & Visual Communication',
      role:'Designer & Content Author',
      tools:['Canva'],
      desc:'A two-page academic infographic on Croup Syndrome covering signs and symptoms, diagnostic tools, and medical and nursing management, combining nursing knowledge with visual design for an academic submission.',
      image:'assets/images/project-04-croup-syndrome-infographic.jpg'
    },
    {
      title:'World Migratory Bird Day Feature',
      category:'graphic',
      catLabel:'Graphic Design',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'An informational graphic from a World Migratory Bird Day social media series for the SUSG Research Committee, discussing the pandemic\'s effect on bird populations and ongoing research.',
      image:'assets/images/project-05-world-migratory-bird-day.jpg'
    },
    {
      title:'World Food Day Awareness Campaign',
      category:'social',
      catLabel:'Social Media Designs',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'A set of graphics for World Food Day (16 October) created for the SUSG Research Committee, covering the day\'s history with the FAO and food security facts.',
      image:'assets/images/project-06-world-food-day.jpg'
    },
    {
      title:'English Language Day Awareness Post',
      category:'graphic',
      catLabel:'Graphic Design',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'A graphic set for English Language Day (23 April) created for the SUSG Research Committee, presenting the day\'s background and facts about the English language.',
      image:'assets/images/project-07-english-language-day.jpg'
    }
  ];

    var grid = document.getElementById('portfolioGrid');
  var filterBar = document.getElementById('filterBar');
  var activeFilter = 'all';

  function renderFilters(){
    categories.forEach(function(c){
      var btn = document.createElement('button');
      btn.className = 'filter-btn' + (c.key === activeFilter ? ' active' : '');
      btn.textContent = c.label;
      btn.setAttribute('data-key', c.key);
      btn.addEventListener('click', function(){
        activeFilter = c.key;
        filterBar.querySelectorAll('.filter-btn').forEach(function(b){ b.classList.remove('active'); });
        btn.classList.add('active');
        renderGrid();
      });
      filterBar.appendChild(btn);
    });
  }

  function cardThumbHTML(p){
    if(p.image){
      return '<div class="p-thumb"><img src="'+p.image+'" alt="'+p.title+'" style="width:100%;height:100%;object-fit:cover;"></div>';
    }
    // Fallback placeholder for any project added later without an image yet.
    return '<div class="p-thumb" style="background:'+(p.gradient||'linear-gradient(150deg,#087E8B,#073B4C)')+'"><span class="ph-label">'+(p.placeholder||'Add project image')+'</span></div>';
  }

  function renderGrid(){
    grid.innerHTML = '';
    var list = projects.filter(function(p){ return activeFilter === 'all' || p.category === activeFilter; });
    list.forEach(function(p){
      var card = document.createElement('div');
      card.className = 'p-card reveal in';
      card.innerHTML =
        cardThumbHTML(p) +
        '<div class="p-body">' +
          '<div class="p-cat">'+p.catLabel+'</div>' +
          '<h3 class="p-title">'+p.title+'</h3>' +
          '<p class="p-desc">'+p.desc+'</p>' +
          '<span class="p-view">View Project →</span>' +
        '</div>';
      card.addEventListener('click', function(){ openModal(p); });
      card.setAttribute('tabindex','0');
      card.setAttribute('role','button');
      card.setAttribute('aria-label','View project: '+p.title);
      card.addEventListener('keydown', function(e){
        if(e.key === 'Enter' || e.key === ' '){ e.preventDefault(); openModal(p); }
      });
      grid.appendChild(card);
    });
  }

  renderFilters();
  renderGrid();

  /* ---------- MODAL ---------- */
  var overlay = document.getElementById('modalOverlay');
  var modalThumb = document.getElementById('modalThumb');
  var modalCat = document.getElementById('modalCat');
  var modalTitle = document.getElementById('modalTitle');
  var modalDesc = document.getElementById('modalDesc');
  var modalMeta = document.getElementById('modalMeta');
  var modalClose = document.getElementById('modalClose');
  var lastFocused = null;

  function openModal(p){
    if(p.image){
      modalThumb.style.background = 'var(--bluegray)';
      modalThumb.innerHTML = '<img src="'+p.image+'" alt="'+p.title+'" style="width:100%;height:100%;object-fit:contain;">';
    } else {
      modalThumb.style.background = p.gradient||'linear-gradient(150deg,#087E8B,#073B4C)';
      modalThumb.innerHTML = '<span class="ph-label">'+(p.placeholder||'Add project image')+'</span>';
    }
    modalCat.textContent = p.catLabel;
    modalTitle.textContent = p.title;
    modalDesc.textContent = p.desc;
    modalMeta.innerHTML = '<span>Role: '+p.role+'</span><span>Tools: '+p.tools.join(', ')+'</span>';
    lastFocused = document.activeElement;
    overlay.classList.add('open');
    modalClose.focus();
    document.addEventListener('keydown', onModalKeydown);
  }
  function closeModal(){
    overlay.classList.remove('open');
    document.removeEventListener('keydown', onModalKeydown);
    if(lastFocused) lastFocused.focus();
  }
  function onModalKeydown(e){
    if(e.key === 'Escape'){ closeModal(); }
  }
  modalClose.addEventListener('click', closeModal);
  overlay.addEventListener('click', function(e){ if(e.target === overlay) closeModal(); });

  /* =========================================================
     TOOLS DATA
  ========================================================= */
  var toolsHands = [
    {name:'Canva', cat:'Creative Design', icon:
      '<svg viewBox="0 0 48 48"><defs><linearGradient id="gCanva" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#00C4CC"/><stop offset="0.5" stop-color="#7D2AE8"/><stop offset="1" stop-color="#8B3DFF"/></linearGradient></defs>'+
      '<circle cx="24" cy="24" r="22" fill="url(#gCanva)"/>'+
      '<path d="M32.5 24c0 1-.3 1.8-.9 2.3-.6.5-1.3.8-2.2.8-.6 0-1.1-.1-1.6-.4-.4-.2-.8-.6-1.1-1-.2.6-.6 1.1-1.1 1.4-.5.3-1.1.5-1.8.5-1 0-1.8-.4-2.4-1.1-.6-.7-.9-1.7-.9-2.9 0-1.2.3-2.2.9-2.9.6-.7 1.4-1.1 2.4-1.1.6 0 1.2.2 1.6.5.4.3.7.7.9 1.2v-1.4h1.8v3.6c0 .5.1.9.3 1.1.2.2.5.3.8.3.4 0 .8-.2 1-.5.3-.3.4-.8.4-1.4v-3.1h1.8V24zm-8.9 1.6c.5 0 1-.2 1.3-.6.3-.4.5-.9.5-1.5s-.2-1.1-.5-1.5c-.3-.4-.8-.6-1.3-.6s-.9.2-1.3.6c-.3.4-.5.9-.5 1.5s.2 1.1.5 1.5c.3.4.8.6 1.3.6z" fill="#fff"/>'+
      '</svg>'},
    {name:'Microsoft Office', cat:'Productivity', icon:
      '<svg viewBox="0 0 48 48"><rect x="4" y="4" width="18" height="18" rx="3" fill="#2B579A"/><text x="13" y="18" font-family="Arial" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">W</text>'+
      '<rect x="26" y="4" width="18" height="18" rx="3" fill="#217346"/><text x="35" y="18" font-family="Arial" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">X</text>'+
      '<rect x="4" y="26" width="18" height="18" rx="3" fill="#D24726"/><text x="13" y="40" font-family="Arial" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">P</text>'+
      '<rect x="26" y="26" width="18" height="18" rx="3" fill="#0364B8"/><text x="35" y="40" font-family="Arial" font-weight="700" font-size="12" fill="#fff" text-anchor="middle">O</text>'+
      '</svg>'},
    {name:'Google Workspace', cat:'Productivity', icon:
      '<svg viewBox="0 0 48 48"><path d="M24 24c0-6.5 3-11 8-13-1 5 .5 9 5 12-4 1-9-1-13 1z" fill="#EA4335"/>'+
      '<path d="M24 24c6.5 0 11 3 13 8-5-1-9 .5-12 5-1-4 1-9-1-13z" fill="#34A853"/>'+
      '<path d="M24 24c0 6.5-3 11-8 13 1-5-.5-9-5-12 4-1 9 1 13-1z" fill="#FBBC05"/>'+
      '<path d="M24 24c-6.5 0-11-3-13-8 5 1 9-.5 12-5 1 4-1 9 1 13z" fill="#4285F4"/>'+
      '</svg>'},
    {name:'TouchWorks', cat:'Healthcare / EHR', icon:
      '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#0B7285"/><path d="M8 25h6l3-9 4 17 4-12 3 4h12" fill="none" stroke="#fff" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
    {name:'Practice Fusion', cat:'Healthcare / EHR', icon:
      '<svg viewBox="0 0 48 48"><rect x="6" y="5" width="36" height="38" rx="5" fill="#1C6DD0"/><rect x="16" y="2" width="16" height="7" rx="2.5" fill="#dfeeff"/><path d="M11 27h6l3-8 4 15 3.5-10 2.5 3h8" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
    {name:'RingCentral', cat:'Communication', icon:
      '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#FF7A00"/><path d="M16 15c1.5-1.3 3-1.4 4 0l2 3c.6.9.4 1.9-.4 2.7l-1.6 1.5c1 2.4 3 4.4 5.4 5.4l1.5-1.6c.8-.8 1.8-1 2.7-.4l3 2c1.4 1 1.3 2.5 0 4-1.8 2-4.4 2.6-6.8 1.7-5-1.8-9-5.8-10.8-10.8-.9-2.4-.3-5 1.7-6.8z" fill="#fff"/></svg>'},
    {name:'ChatGPT', cat:'AI & Productivity', icon:
      '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#10A37F"/><path d="M33.4 21.9c.3-.9.4-1.9.2-2.9-.5-2.5-2.6-4.4-5.1-4.6-.5 0-1 0-1.5.1-1.1-1.4-2.8-2.2-4.6-2.1-2.5.1-4.6 1.9-5.2 4.3-1.6.4-3 1.5-3.7 3-1.2 2.2-.9 4.9.8 6.8-.3.9-.4 1.9-.2 2.9.5 2.5 2.6 4.4 5.1 4.6.5 0 1 0 1.5-.1 1.1 1.4 2.8 2.2 4.6 2.1 2.5-.1 4.6-1.9 5.2-4.3 1.6-.4 3-1.5 3.7-3 1.2-2.2.9-4.9-.8-6.8zm-9.9 10.7c-1.1 0-2-.4-2.8-1l.1-.1 4.9-2.8c.2-.1.4-.4.4-.6v-6.9l2.1 1.2v5.7c0 2.5-2 4.5-4.7 4.5zm-8.1-4.1c-.5-.9-.7-1.9-.6-2.9l.1.1 4.9 2.8c.2.1.5.1.8 0l6-3.4v2.4l-5 2.9c-2.2 1.3-4.9.5-6.2-1.9zM12.9 21c-.5-.9-.7-2-.4-3l.1.1 4.9 2.8c.2.1.4.1.6 0l6-3.4-2.1-1.2-5 2.9c-2.2 1.3-2.9 4.1-1.6 6.3l.1.1c-1.1-.5-2-1.5-2.6-2.6zm18.1 4.2l-4.9-2.8c-.2-.1-.4-.1-.6 0l-6 3.4v-2.4l5-2.9c2.2-1.3 5-.5 6.3 1.7.6 1 .8 2.1.5 3.2l-.3-.2zm2-3-.1-.1-4.9-2.8c-.2-.1-.5-.1-.8 0l-6 3.4v-2.4l5-2.9c2.2-1.3 4.9-.5 6.2 1.7.6 1 .8 2.2.6 3.1zm-15.9-3.3v6.9l-2.1-1.2v-5.7c0-2.6 2.1-4.6 4.7-4.6 1.1 0 2.1.4 2.9 1.1l-.1.1-4.9 2.8c-.2.1-.4.4-.5.6z" fill="#fff"/></svg>'},
    {name:'Google Gemini', cat:'AI & Productivity', icon:
      '<svg viewBox="0 0 48 48"><defs><linearGradient id="gGem" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#4285F4"/><stop offset="0.5" stop-color="#9168C0"/><stop offset="1" stop-color="#D96570"/></linearGradient></defs><path d="M24 5c0 9-2 17-10 19 8 2 10 10 10 19 0-9 2-17 10-19-8-2-10-10-10-19z" fill="url(#gGem)"/></svg>'},
    {name:'Grok', cat:'AI & Productivity', icon:
      '<svg viewBox="0 0 48 48"><rect x="3" y="3" width="42" height="42" rx="10" fill="#000"/><path d="M13 32 L27 14 M13 32 L35 32 M17 20 L35 20" stroke="#fff" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/></svg>'}
  ];
  var toolsLearning = [
    {name:'CRM Platforms', cat:'Business Operations'},
    {name:'QuickBooks', cat:'Accounting / Admin', icon:
      '<svg viewBox="0 0 48 48"><circle cx="24" cy="24" r="22" fill="#2CA01C"/><path d="M18 15v18c-4 0-7-3-7-7v-4c0-4 3-7 7-7z" fill="#fff"/><path d="M30 15v18c4 0 7-3 7-7v-4c0-4-3-7-7-7z" fill="#fff"/><circle cx="24" cy="24" r="3.4" fill="#fff"/></svg>'},
    {name:'GoHighLevel (GHL)', cat:'CRM / Marketing', icon:
      '<svg viewBox="0 0 48 48"><defs><linearGradient id="gGHL" x1="0" y1="1" x2="1" y2="0"><stop offset="0" stop-color="#1953F5"/><stop offset="1" stop-color="#6C4EF5"/></linearGradient></defs><rect x="3" y="3" width="42" height="42" rx="11" fill="url(#gGHL)"/><path d="M13 30 L22 18 L27 25 L35 14" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/><path d="M29 14h6v6" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/></svg>'},
    {name:'Workflow Automation', cat:'Productivity / Automation'}
  ];

  function initials(name){
    return name.split(' ').map(function(w){return w[0];}).join('').substring(0,2).toUpperCase();
  }

  function renderTools(containerId, list, badgeClass, badgeLabel){
    var el = document.getElementById(containerId);
    list.forEach(function(t){
      var card = document.createElement('div');
      card.className = 'tool-card reveal in';
      var iconInner = t.icon ? t.icon : initials(t.name);
      var iconClass = t.icon ? 'tool-icon has-logo' : 'tool-icon';
      card.innerHTML =
        '<div class="tool-top"><div class="'+iconClass+'">'+iconInner+'</div><span class="badge '+badgeClass+'">'+badgeLabel+'</span></div>' +
        '<div class="tool-name">'+t.name+'</div>' +
        '<div class="tool-cat">'+t.cat+'</div>';
      el.appendChild(card);
    });
  }
  renderTools('toolsHands', toolsHands, 'badge-hands', 'Hands-on');
  renderTools('toolsLearning', toolsLearning, 'badge-learn', 'Learning');

})();
