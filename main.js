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
    card.className = 'service-card reveal';
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
      image:'assets/images/project-world-heart-day.jpg'
    },
    {
      title:'"Walang Plastikan" Webinar Campaign',
      category:'promo',
      catLabel:'Promotional Materials',
      role:'Graphic Designer / Promotions',
      tools:['Canva'],
      desc:'Promotional graphics for a marine plastic pollution webinar hosted by the SUSG Research Committee and Mangrove Matters PH, including the event announcement design and two supporting infographics on ocean plastic prevention.',
      image:'assets/images/project-marine-plastic-pollution.jpg'
    },
    {
      title:'Protein Muffin Promotional Poster',
      category:'business',
      catLabel:'Personal / Business Projects',
      role:'Designer',
      tools:['Canva'],
      desc:'A promotional poster designed for my brother\'s muffin business, highlighting product benefits and a clear call to order.',
      image:'assets/images/project-protein-muffin-poster.jpg'
    },
    {
      title:'Croup Syndrome Educational Infographic',
      category:'content',
      catLabel:'Content & Visual Communication',
      role:'Designer & Content Author',
      tools:['Canva'],
      desc:'A two-page academic infographic on Croup Syndrome covering signs and symptoms, diagnostic tools, and medical and nursing management, combining nursing knowledge with visual design for an academic submission.',
      image:'assets/images/project-croup-syndrome-infographic.jpg'
    },
    {
      title:'World Migratory Bird Day Feature',
      category:'graphic',
      catLabel:'Graphic Design',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'An informational graphic from a World Migratory Bird Day social media series for the SUSG Research Committee, discussing the pandemic\'s effect on bird populations and ongoing research.',
      image:'assets/images/project-world-migratory-bird-day.jpg'
    },
    {
      title:'World Food Day Awareness Campaign',
      category:'social',
      catLabel:'Social Media Designs',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'A set of graphics for World Food Day (16 October) created for the SUSG Research Committee, covering the day\'s history with the FAO and food security facts.',
      image:'assets/images/project-world-food-day.jpg'
    },
    {
      title:'English Language Day Awareness Post',
      category:'graphic',
      catLabel:'Graphic Design',
      role:'Graphic Designer',
      tools:['Canva'],
      desc:'A graphic set for English Language Day (23 April) created for the SUSG Research Committee, presenting the day\'s background and facts about the English language.',
      image:'assets/images/project-english-language-day.jpg'
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
    {name:'Canva', cat:'Creative Design'},
    {name:'Microsoft Office', cat:'Productivity'},
    {name:'Google Workspace', cat:'Productivity'},
    {name:'TouchWorks', cat:'Healthcare / EHR'},
    {name:'Practice Fusion', cat:'Healthcare / EHR'},
    {name:'RingCentral', cat:'Communication'},
    {name:'ChatGPT', cat:'AI & Productivity'},
    {name:'Google Gemini', cat:'AI & Productivity'},
    {name:'Grok', cat:'AI & Productivity'}
  ];
  var toolsLearning = [
    {name:'CRM Platforms', cat:'Business Operations'},
    {name:'QuickBooks', cat:'Accounting / Admin'},
    {name:'GoHighLevel (GHL)', cat:'CRM / Marketing'},
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
      card.innerHTML =
        '<div class="tool-top"><div class="tool-icon">'+initials(t.name)+'</div><span class="badge '+badgeClass+'">'+badgeLabel+'</span></div>' +
        '<div class="tool-name">'+t.name+'</div>' +
        '<div class="tool-cat">'+t.cat+'</div>';
      el.appendChild(card);
    });
  }
  renderTools('toolsHands', toolsHands, 'badge-hands', 'Hands-on');
  renderTools('toolsLearning', toolsLearning, 'badge-learn', 'Learning');

})();
