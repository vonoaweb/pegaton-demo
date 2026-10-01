/**
 * Pegaton 2026 - Main Interactive Application Script
 */

document.addEventListener('DOMContentLoaded', () => {
  initMobileMenu();
  initPestSelector();
  initCatalogFilters();
  initProductModals();
  initB2BCalculator();
  initContactForm();
  initCounters();
  initNavbarScroll();
});

// Mobile menu toggle
function initMobileMenu() {
  const btn = document.getElementById('mobileMenuBtn');
  const menu = document.getElementById('mobileMenu');
  if (!btn || !menu) return;

  btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
  });

  const links = menu.querySelectorAll('a');
  links.forEach(l => {
    l.addEventListener('click', () => {
      menu.classList.add('hidden');
    });
  });
}

// Navbar scroll shadow & background enhancement
function initNavbarScroll() {
  const navbar = document.getElementById('mainNavbar');
  if (!navbar) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('shadow-xl', 'bg-slate-950/95');
      navbar.classList.remove('bg-slate-950/80');
    } else {
      navbar.classList.remove('shadow-xl', 'bg-slate-950/95');
      navbar.classList.add('bg-slate-950/80');
    }
  });
}

// Products Database for Modals & Dynamic Quick View
const productsData = {
  'trampa-grande': {
    title: 'Trampa Grande Pegatón®',
    category: 'Roedores Mayores y Ratas',
    target: 'Ratas de alcantarilla, ratas de tejado y roedores pesados (hasta 500g)',
    image: 'assets/productos/trampa-grande.jpg',
    measure: '11.5 cm de ancho × 24.5 cm de largo',
    content: 'Caja con 2 charolas termoformadas engomadas de alta resistencia',
    corrugated: 'Corrugado máster con 12 cajas (24 charolas totales)',
    glueType: 'Hot-Melt polimérico de alta viscosidad grado exportación',
    features: [
      'Borde anti-escurrimiento térmico resistente hasta 60°C',
      'Atrayente alimenticio natural integrado en la masa adhesiva',
      'Charola de polímero rígido indeformable que impide escape por palanca',
      '100% No tóxica, apta para áreas de procesamiento de alimentos (HACCP)'
    ],
    usageTip: 'Ubicar pegada al zoclo en muros perimetrales donde se observen heces o huellas. Espaciar 3 a 5 metros.'
  },
  'trampa-mediana': {
    title: 'Trampa Mediana Pegatón®',
    category: 'Ratones Domésticos y Comerciales',
    target: 'Ratón casero (Mus musculus), pericotes y crías de rata',
    image: 'assets/productos/trampa-mediana.jpg',
    measure: '13.0 cm de ancho × 9.0 cm de largo',
    content: 'Caja con 2 charolas engomadas de precisión',
    corrugated: 'Corrugado máster con 24 cajas (48 piezas totales)',
    glueType: 'Fórmula de adherencia instantánea al primer contacto',
    features: [
      'Tamaño versátil para colocar detrás de estufas, alacenas y refrigeradores',
      'No se escurre ni pierde adherencia en climas húmedos o cálidos',
      'Sin venenos residuales ni peligros para mascotas',
      'Fácil desecho higiénico sin contacto directo'
    ],
    usageTip: 'Colocar en pares en ángulos de 90° detrás de equipos y muebles de cocina.'
  },
  'trampa-chica': {
    title: 'Trampa Pequeña / Mini Pegatón®',
    category: 'Ratones & Rastreros',
    target: 'Ratones pequeños, cucarachas gigantes, alacranes y arañas',
    image: 'assets/productos/trampa-chica.jpg',
    measure: '8.0 cm de ancho × 11.0 cm de largo',
    content: 'Caja con 2 charolas engomadas compactas',
    corrugated: 'Corrugado máster con 24 cajas (48 piezas totales)',
    glueType: 'Adhesivo micro-tacto ultra rápido',
    features: [
      'Excelente relación costo-efectividad para rotación rápida en ferreterías',
      'Perfil bajo para penetrar bajo pallets, estanterías bajas y zócalos',
      'No inflamable y 100% seguro para uso doméstico diario',
      'Calidad garantizada sin derrames'
    ],
    usageTip: 'Ideal para alacenas, ductos de servicio y bodegas estrechas.'
  },
  'tira-pegamoscas': {
    title: 'Tira Pegamoscas Pegatón®',
    category: 'Insectos Voladores',
    target: 'Mosca doméstica, moscardón, mosca de la fruta y mosquitos',
    image: 'assets/productos/tira-pegamoscas.jpg',
    measure: 'Tubo cilíndrico de 5 cm (despliega cinta engomada de 80 cm)',
    content: 'Cajita individual con 4 tubos listos para colgar',
    corrugated: 'Exhibidor de mostrador con 24 cajitas de 4 tubos (Corrugado de 12 exhibidores)',
    glueType: 'Resina natural engomada con atrayente de feromona óptica',
    features: [
      'Efectividad 24/7 sin emitir aerosoles ni químicos tóxicos en el aire',
      'Cinta de papel extra resistente que no se rompe al estirar',
      'Cordoncillo y chincheta de fijación incluidos para colgado instantáneo',
      'Ideal para cocinas de restaurantes, fruterías, carnicerías y hogares'
    ],
    usageTip: 'Tirar suavemente del cordón con movimiento circular. Colgar lejos de corrientes de aire directas.'
  },
  'tubo-pegamoscas': {
    title: 'Tubo Pegamoscas Gigante 360° Pegatón®',
    category: 'Control Profesional de Moscas',
    target: 'Altas concentraciones de moscas en granjas, establos y naves industriales',
    image: 'assets/productos/tubo-pegamoscas.jpg',
    measure: '30.0 cm de altura × 6 cm de diámetro exterior',
    content: 'Caja individual con 1 megatubo 360° adhesivo',
    corrugated: 'Corrugado con 24 tubos industriales',
    glueType: 'Adhesivo de alto espesor con potente atrayente alimenticio y de color',
    features: [
      'Superficie cilíndrica de 360 grados: atrae y captura cientos de moscas por trampa',
      'No utiliza electricidad ni recambios costosos de lámparas UV',
      'Resiste intemperie techada, sol indirecto y polvo ambiental',
      'Uso preferido en establos lecheros, áreas de empaque avícola y rastros'
    ],
    usageTip: 'Suspender a 1.80m de altura sobre pasillos o techos de áreas con gran afluencia de ganado o preparación.'
  },
  'pega-cucarachas': {
    title: 'Trampa Pega Cucarachas & Alacranes Pegatón®',
    category: 'Insectos Rastreros y Arácnidos',
    target: 'Cucarachas (alemana, oriental y americana), alacranes, tijerillas y grillos',
    image: 'assets/productos/pega-cucarachas.jpg',
    measure: 'Caseta plegable de cartón kraft encerado con base adhesiva',
    content: 'Caja exhibidora de punto de venta con 24 trampas individuales',
    corrugated: 'Corrugado máster con 24 exhibidores (576 trampas)',
    glueType: 'Adhesivo con pastilla cebadora de aroma concentrado',
    features: [
      'Diseño tipo túnel: oculta las plagas capturadas para máxima pulcritud',
      'Incluye pastilla atrayente que imita el alimento favorito de los rastreros',
      'El insecto entra guiado por el aroma y queda inmovilizado al instante',
      'Protege el pegamento del polvo y grasa ambiental, prolongando su vida útil'
    ],
    usageTip: 'Plegar formando el techo triangular y colocar detrás del refrigerador, fregadero o alacena.'
  }
};

// Open Product Modal
function openProductModal(key) {
  const data = productsData[key];
  if (!data) return;

  const modal = document.getElementById('productModal');
  const title = document.getElementById('modalTitle');
  const cat = document.getElementById('modalCategory');
  const img = document.getElementById('modalImage');
  const target = document.getElementById('modalTarget');
  const measure = document.getElementById('modalMeasure');
  const content = document.getElementById('modalContent');
  const corrugated = document.getElementById('modalCorrugated');
  const glue = document.getElementById('modalGlue');
  const featuresList = document.getElementById('modalFeatures');
  const tip = document.getElementById('modalTip');
  const quoteBtn = document.getElementById('modalQuoteBtn');

  title.textContent = data.title;
  cat.textContent = data.category;
  img.src = data.image;
  img.alt = data.title;
  target.textContent = data.target;
  measure.textContent = data.measure;
  content.textContent = data.content;
  corrugated.textContent = data.corrugated;
  glue.textContent = data.glueType;
  tip.textContent = data.usageTip;

  featuresList.innerHTML = '';
  data.features.forEach(f => {
    const li = document.createElement('li');
    li.className = 'flex items-start text-sm text-slate-700';
    li.innerHTML = `<span class="inline-block w-4 h-4 mr-2 text-emerald-600 font-bold">✓</span> <span>${f}</span>`;
    featuresList.appendChild(li);
  });

  // WhatsApp Quote button generator
  quoteBtn.onclick = () => {
    const text = encodeURIComponent(`Hola Pegatón, me interesa solicitar cotización y ficha técnica del producto: *${data.title}*. ¿Tienen disponibilidad y precios por caja/mayoreo?`);
    window.open(`https://wa.me/523310580620?text=${text}`, '_blank');
  };

  modal.classList.remove('hidden');
  document.body.classList.add('overflow-hidden');
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  if (modal) {
    modal.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }
}

function initProductModals() {
  // Bind close buttons and outside click
  const modal = document.getElementById('productModal');
  const closeBtn = document.getElementById('modalCloseBtn');
  if (closeBtn) closeBtn.addEventListener('click', closeProductModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeProductModal();
    });
  }

  // Bind key escape
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeProductModal();
  });

  // Attach quick view clicks to buttons
  const viewBtns = document.querySelectorAll('[data-product-modal]');
  viewBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const productKey = btn.getAttribute('data-product-modal');
      openProductModal(productKey);
    });
  });
}

// Interactive Pest Diagnostic Selector
const pestSolutions = {
  'ratas': {
    badge: 'Amenaza Severa / Riego Sanitario',
    title: 'Infestación de Ratas de Caño o de Techo (Rattus norvegicus / Rattus rattus)',
    description: 'Las ratas adultas tienen gran masa corporal (200g a 500g) y fuerza motriz. Requieren bases indeformables con adhesivo de polímero pesado para evitar que arrastren la trampa.',
    solutionName: 'Pegatón Trampa Grande con Doble Charola Reforzada',
    image: 'assets/productos/trampa-grande.jpg',
    why: 'Su fórmula Hot-Melt de máxima tenacidad atrapa las 4 patas instantáneamente. La bandeja plástica rígida no se dobla ante forcejeos.',
    strategy: 'Colocar cada 3 metros pegada a las paredes. No poner comida aceitosa encima: el cebo viene pre-aromatizado en el adhesivo.',
    productKey: 'trampa-grande'
  },
  'ratones': {
    badge: 'Amenaza Rápida en Hogares y Alacenas',
    title: 'Presencia de Ratón Casero o Pericote (Mus musculus)',
    description: 'Los ratones se mueven pegados a los zoclos, detrás de estufas, refrigeradores y falsos techos en busca de migajas y cartón para nidos.',
    solutionName: 'Pegatón Trampa Mediana & Mini Charola',
    image: 'assets/productos/trampa-mediana.jpg',
    why: 'Adhesivo de contacto ultra-sensible que inmoviliza al roedor al instante, sin riesgo de venenos en tu cocina.',
    strategy: 'Instalar de 4 a 6 trampas simultáneas en la cocina y bodega durante las primeras 48 horas para erradicar la colonia.',
    productKey: 'trampa-mediana'
  },
  'moscas': {
    badge: 'Riesgo de Contaminación Cruzada',
    title: 'Enjambres de Moscas y Moscardones (Musca domestica)',
    description: 'Portadoras de más de 60 enfermedades bacterianas. Proliferan rápidamente en cocinas comerciales, carnicerías, depósitos de basura y establos.',
    solutionName: 'Pegatón Tubo 360° Industrial y Tiras Pegamoscas',
    image: 'assets/productos/tubo-pegamoscas.jpg',
    why: 'Atrayente cromático amarillo y aroma que atrae moscas 360 grados sin aerosoles que contaminen la comida.',
    strategy: 'Colgar a 1.80m de altura en áreas de paso aéreo entre el exterior y los comedores o bodegas.',
    productKey: 'tubo-pegamoscas'
  },
  'cucarachas': {
    badge: 'Insectos Rastreros y Alacranes',
    title: 'Cucarachas de Cañería, Germánicas y Alacranes',
    description: 'Se ocultan durante el día en grietas y motores de electrodomésticos; salen de noche contaminando cubiertos, platos y despensas.',
    solutionName: 'Pegatón Caseta Pega-Cucarachas con Pastilla Atrayente',
    image: 'assets/productos/pega-cucarachas.jpg',
    why: 'La caseta túnel protege el pegamento de grasa y polvo mientras que la pastilla de feromona atrae ninfas y adultos al centro.',
    strategy: 'Colocar en las esquinas de gabinetes inferiores, detrás de microondas y lavaplatos.',
    productKey: 'pega-cucarachas'
  }
};

function initPestSelector() {
  const tabs = document.querySelectorAll('.pest-tab-btn');
  const badgeEl = document.getElementById('pestBadge');
  const titleEl = document.getElementById('pestTitle');
  const descEl = document.getElementById('pestDesc');
  const solNameEl = document.getElementById('pestSolName');
  const whyEl = document.getElementById('pestWhy');
  const stratEl = document.getElementById('pestStrategy');
  const imgEl = document.getElementById('pestImg');
  const actionBtn = document.getElementById('pestActionBtn');

  if (!tabs.length || !titleEl) return;

  function setPest(key) {
    const data = pestSolutions[key];
    if (!data) return;

    tabs.forEach(t => {
      if (t.dataset.pest === key) {
        t.classList.add('active');
      } else {
        t.classList.remove('active');
      }
    });

    // Animate content change
    badgeEl.textContent = data.badge;
    titleEl.textContent = data.title;
    descEl.textContent = data.description;
    solNameEl.textContent = data.solutionName;
    whyEl.textContent = data.why;
    stratEl.textContent = data.strategy;
    imgEl.src = data.image;

    actionBtn.onclick = () => {
      openProductModal(data.productKey);
    };
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      setPest(tab.dataset.pest);
    });
  });
}

// Catalog Category Filtering
function initCatalogFilters() {
  const buttons = document.querySelectorAll('.cat-filter-btn');
  const cards = document.querySelectorAll('.product-card');

  if (!buttons.length || !cards.length) return;

  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.dataset.filter;

      cards.forEach(card => {
        const cat = card.dataset.category;
        if (filter === 'all' || cat.includes(filter)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.opacity = '1';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });
}

// Interactive B2B / Mayoreo Margin Calculator
function initB2BCalculator() {
  const boxSlider = document.getElementById('calcBoxes');
  const boxDisplay = document.getElementById('calcBoxesDisplay');
  const businessType = document.getElementById('calcBusinessType');
  const unitCostEl = document.getElementById('calcUnitCost');
  const suggestedPVP = document.getElementById('calcSuggestedPVP');
  const totalInvEl = document.getElementById('calcTotalInv');
  const totalProfitEl = document.getElementById('calcTotalProfit');
  const marginBadgeEl = document.getElementById('calcMarginBadge');
  const calcWhatsAppBtn = document.getElementById('calcWhatsAppBtn');

  if (!boxSlider || !boxDisplay) return;

  // Base pricing approximations for 2-pack rat/mouse trays
  const baseCostPerUnit = 24.50; // MXN
  const unitsPerBox = 12; // 12 cajas de 2 pzas = 24 trampas o 12 paquetes comerciales

  function updateCalculations() {
    const boxes = parseInt(boxSlider.value, 10);
    boxDisplay.textContent = `${boxes} cajas corrugadas`;

    // Tier discount
    let discount = 0;
    if (boxes >= 25 && boxes < 50) discount = 0.08;
    else if (boxes >= 50 && boxes < 100) discount = 0.14;
    else if (boxes >= 100) discount = 0.20;

    let marginFactor = 1.45; // 45% default markup
    if (businessType && businessType.value === 'ferreteria') {
      marginFactor = 1.50; // 50%
    } else if (businessType && businessType.value === 'distribuidor') {
      marginFactor = 1.35; // 35% higher volume
    } else if (businessType && businessType.value === 'fumigador') {
      marginFactor = 1.60; // 60%
    }

    const netCostPerUnit = baseCostPerUnit * (1 - discount);
    const boxCost = netCostPerUnit * unitsPerBox;
    const totalInvestment = boxCost * boxes;

    const retailPricePerUnit = netCostPerUnit * marginFactor;
    const totalRevenue = retailPricePerUnit * unitsPerBox * boxes;
    const totalProfit = totalRevenue - totalInvestment;
    const marginPercent = Math.round(((totalRevenue - totalInvestment) / totalRevenue) * 100);

    // Format currency MXN
    unitCostEl.textContent = `$${netCostPerUnit.toFixed(2)} MXN`;
    suggestedPVP.textContent = `$${retailPricePerUnit.toFixed(2)} MXN`;
    totalInvEl.textContent = `$${Math.round(totalInvestment).toLocaleString('es-MX')} MXN`;
    totalProfitEl.textContent = `+$${Math.round(totalProfit).toLocaleString('es-MX')} MXN`;
    marginBadgeEl.textContent = `${marginPercent}% Margen Estimado`;

    // WhatsApp quick link
    if (calcWhatsAppBtn) {
      calcWhatsAppBtn.onclick = () => {
        const text = encodeURIComponent(`Hola Pegatón, solicito cotización formal de mayoreo por *${boxes} cajas* para mi negocio (${businessType ? businessType.options[businessType.selectedIndex].text : 'Comercio'}). ¿Podrían enviarme la lista de precios oficial para distribuidores?`);
        window.open(`https://wa.me/523310580620?text=${text}`, '_blank');
      };
    }
  }

  boxSlider.addEventListener('input', updateCalculations);
  if (businessType) businessType.addEventListener('change', updateCalculations);
  updateCalculations();
}

// Contact Form & Direct WhatsApp Integration
function initContactForm() {
  const form = document.getElementById('contactQuoteForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = form.querySelector('[name="name"]').value.trim();
    const phone = form.querySelector('[name="phone"]').value.trim();
    const email = form.querySelector('[name="email"]').value.trim();
    const city = form.querySelector('[name="city"]').value.trim();
    const clientType = form.querySelector('[name="clientType"]').value;
    const product = form.querySelector('[name="product"]').value;
    const message = form.querySelector('[name="message"]').value.trim();

    if (!name || !phone) {
      showToast('Por favor completa tu nombre y teléfono para atenderte.', 'error');
      return;
    }

    // Build WhatsApp message
    const msg = `*Nueva Solicitud desde Pegatón Web 2026*%0A%0A` +
      `👤 *Nombre:* ${name}%0A` +
      `📞 *Teléfono:* ${phone}%0A` +
      `✉️ *Email:* ${email || 'No especificado'}%0A` +
      `📍 *Ciudad / Estado:* ${city || 'México'}%0A` +
      `🏢 *Tipo de Perfil:* ${clientType}%0A` +
      `📦 *Producto de Interés:* ${product}%0A` +
      `💬 *Mensaje:* ${message || 'Deseo cotización y catálogo.'}`;

    const url = `https://wa.me/523310580620?text=${msg}`;
    showToast('¡Redirigiendo a WhatsApp de Ventas Pegatón!', 'success');

    setTimeout(() => {
      window.open(url, '_blank');
      form.reset();
    }, 800);
  });
}

// Toast notification helper
function showToast(message, type = 'success') {
  let toast = document.getElementById('appToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'appToast';
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-sm font-semibold shadow-2xl transition-all duration-300 pointer-events-none flex items-center space-x-2';
    document.body.appendChild(toast);
  }

  if (type === 'success') {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-sm font-semibold shadow-2xl bg-emerald-600 text-white flex items-center space-x-2 transition-all duration-300 opacity-100 translate-y-0';
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
  } else {
    toast.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-full text-sm font-semibold shadow-2xl bg-red-600 text-white flex items-center space-x-2 transition-all duration-300 opacity-100 translate-y-0';
    toast.innerHTML = `<span>⚠️</span> <span>${message}</span>`;
  }

  setTimeout(() => {
    toast.classList.add('opacity-0', 'translate-y-4');
  }, 3500);
}

// Animated stats counter
function initCounters() {
  const counters = document.querySelectorAll('.stat-counter');
  let started = false;

  function countUp() {
    counters.forEach(counter => {
      const target = +counter.getAttribute('data-target');
      const suffix = counter.getAttribute('data-suffix') || '';
      let count = 0;
      const speed = target / 40;

      const timer = setInterval(() => {
        count += speed;
        if (count >= target) {
          counter.textContent = target.toLocaleString('es-MX') + suffix;
          clearInterval(timer);
        } else {
          counter.textContent = Math.ceil(count).toLocaleString('es-MX') + suffix;
        }
      }, 35);
    });
  }

  window.addEventListener('scroll', () => {
    const statsSection = document.getElementById('statsSection');
    if (!statsSection) return;
    const rect = statsSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight * 0.85 && !started) {
      started = true;
      countUp();
    }
  });
}
