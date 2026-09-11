
const PROYECTOS_DATA = {
  electrico: {
    numero: "01",
    kicker: "ESPECIALIDAD",
    titulo: "Servicios Eléctricos",
    intro: "Diseño, montaje y mantenimiento de instalaciones eléctricas de alta y baja tensión, Iluminación industrial, tableros y puesta a tierra.",
    descripcion: "Brindamos soluciones integrales en ingeniería eléctrica bajo la normativa CNE y estándares ISO, orientadas a maximizar la seguridad, continuidad operativa y eficiencia energética de tu infraestructura industrial o comercial.",
    capacidades: [
      { num: "01", text: "Instalación de tableros eléctricos de distribución y control." },
      { num: "02", text: "Sistemas de puesta a tierra y medición de resistividad." },
      { num: "03", text: "Iluminación LED industrial y comercial de alta eficiencia." },
      { num: "04", text: "Sistemas de luces de emergencia e iluminación de evacuación." },
      { num: "05", text: "Mantenimiento preventivo y correctivo de redes eléctricas." },
      { num: "06", text: "Certificación técnica de instalaciones eléctricas para Indeci." }
    ],
    proyectos: [
      {
        id: "electrico-1",
        numero: "01",
        nombre: "Instalación de Luces de Emergencia",
        intro: "Montaje integral del sistema de iluminación autónoma para rutas de evacuación.",
        descripcion: "Implementación técnica de señalización luminosa autónoma y equipos de emergencia LED en naves industriales y pasillos principales, garantizando la continuidad operativa y el cumplimiento estricto de las normativas de seguridad de Indeci.",
        imagenPrincipal: "assets/electrico/luz-emerg2.jpeg",
        fotosTotal: 5,
        trabajos: [
          "Canalización y tendido eléctrico ignífugo.",
          "Instalación de luminarias autónomas LED con batería de respaldo.",
          "Suministro y cableado desde tablero secundario de emergencia.",
          "Pruebas de conmutación por corte de energía centralizado.",
          "Protocolos de medición y certificación de autonomía."
        ],
        galeria: [
          { src: "assets/electrico/luz-emerg1.jpeg", label: "1" },
          { src: "assets/electrico/luz-emerg2.jpeg", label: "2" },
          { src: "assets/electrico/luz-emerg3.jpeg", label: "3" },
          { src: "assets/electrico/luz-emerg4.jpeg", label: "4" },
          { src: "assets/electrico/luz-emerg5.jpeg", label: "5" }
        ]
      },
      {
        id: "electrico-2",
        nombre: "Instalación de tomas Eléctricas",
        numero: "02",
        intro: "Implementación de circuitos de fuerza y distribución de tomacorrientes comerciales e industriales.",
        descripcion: "Instalación de redes de tomacorrientes estabilizados y comerciales, garantizando el correcto dimensionamiento del cableado, protecciones termomagnéticas independientes y un estricto código de colores según el Código Nacional de Electricidad.",
        imagenPrincipal: "assets/electrico/ele1.jpeg",
        fotosTotal: 4,
        trabajos: [
          "Canalización con tubería PVC pesada y conduit metálico adosado.",
          "Tendido de conductores de cobre con protección a tierra independiente.",
          "Instalación de tomacorrientes dobles industriales y de alta resistencia.",
          "Conexionado y balanceo de cargas en el tablero eléctrico.",
          "Pruebas de continuidad, tensión y aislamiento."
        ],
        galeria: [
          { src: "assets/electrico/ele1.jpeg", label: "1" },
          { src: "assets/electrico/ele2.jpeg", label: "2" },
          { src: "assets/electrico/ele3.jpeg", label: "3" },
          { src: "assets/electrico/ele4.jpeg", label: "4" }
        ]
      },
      {
        id: "electrico-3",
        nombre: "Mantenimiento e instalación de Pozos a Tierra",
        numero: "03",
        intro: "Construcción, repotenciación y mantenimiento de sistemas de puesta a tierra.",
        descripcion: "Diseño y ejecución de pozos a tierra con tratamiento de suelo químico (gel/bentonita) para reducir la resistencia eléctrica por debajo de los niveles normativos (≤ 10 Ohmios), protegiendo equipos delicados y personas.",
        imagenPrincipal: "assets/electrico/pozo1.jpeg",
        fotosTotal: 5,
        trabajos: [
          "Excavación y reemplazo de tierra vegetal tratada.",
          "Instalación de electrodo de cobre y conector tipo Split Bolt.",
          "Aplicación de dosis intensiva de gel acondicionador de suelo.",
          "Tendido de cable de puesta a tierra hasta la barra colectora principal.",
          "Medición con telurómetro y emisión de protocolo de prueba firmado."
        ],
        galeria: [
          { src: "assets/electrico/pozo1.jpeg", label: "1" },
          { src: "assets/electrico/pozo2.jpeg", label: "2" },
          { src: "assets/electrico/pozo3.jpeg", label: "3" },
          { src: "assets/electrico/pozo4.jpeg", label: "4" },
          { src: "assets/electrico/pozo5.jpeg", label: "5" }
        ]
      }
    ]
  },

  redes: {
    numero: "02",
    kicker: "ESPECIALIDAD",
    titulo: "Infraestructura de Redes y Telecomunicaciones",
    intro: "Despliegue de cableado estructurado, enlaces de fibra óptica, organización de gabinetes de comunicaciones y certificación de puntos de red.",
    descripcion: "Garantizamos alta velocidad, ordenamiento estético y conectividad ininterrumpida para tus datos mediante arquitecturas de red diseñadas a la medida bajo estándares ISO/IEC 11801 y TIA/EIA 568.",
    capacidades: [
      { num: "01", text: "Instalación de cableado estructurado Cat 6, Cat 6A y Cat 7." },
      { num: "02", text: "Peinado, ponchado y ordenamiento de Racks/Gabinetes." },
      { num: "03", text: "Fusión y conectorización de Fibra Óptica para interiores y exteriores." },
      { num: "04", text: "Certificación de puntos de red con analizadores de campo." },
      { num: "05", text: "Instalación de Access Points (AP) y cobertura Wi-Fi corporativa." },
      { num: "06", text: "Rotulación y canalización técnica con escalerillas / canaletas." }
    ],
    proyectos: [
      {
        id: "redes-1",
        nombre: "Organización y Peinado de Racks",
        numero: "01",
        intro: "Reestructuración, peinado y etiquetado técnico de gabinetes de telecomunicaciones.",
        descripcion: "Saneamiento integral de cableado en racks saturados, ordenamiento de patch cords mediante organizadores horizontales/verticales y rotulación bajo el estándar TIA-606-B.",
        imagenPrincipal: "assets/red/red4.jpeg",
        fotosTotal: 4,
        trabajos: [
          "Mapeo de puertos y auditoría de cableado existente.",
          "Desmonte y peinado estético de cables UTP Cat 6.",
          "Instalación de organizadores y ponchado en Patch Panels.",
          "Etiquetado termocontraíble de latiguillos y puertos.",
          "Pruebas de conectividad y ordenamiento final del gabinete."
        ],
        galeria: [
          { src: "assets/red/red1.jpeg", label: "1" },
          { src: "assets/red/red2.jpeg", label: "2" },
          { src: "assets/red/red3.jpeg", label: "3" },
          { src: "assets/red/red4.jpeg", label: "4" }
        ]
      },
      {
        id: "redes-2",
        nombre: "Instalación de Cámaras de Seguridad",
        numero: "02",
        intro: "Implementación de sistema de videovigilancia IP y circuito cerrado (CCTV).",
        descripcion: "Despliegue de cámaras IP de alta resolución para zonas estratégicas, canalización de cableado estructurado PoE, montaje de cámaras tipo Bullet/Dome y configuración del sistema NVR.",
        imagenPrincipal: "assets/red/cam5.jpeg",
        fotosTotal: 9,
        trabajos: [
          "Montaje de canaletas, tuberías conduit y cajas de pase IP66.",
          "Tendido de cable UTP Cat 6 de exterior con protección UV.",
          "Instalación y fijación de cámaras en altura con soportes normados.",
          "Conexionado e integración a Switches PoE centralizados.",
          "Configuración de NVR, detección de movimiento y prueba de enfoque."
        ],
        galeria: [
          { src: "assets/red/cam1.jpeg", label: "1" },
          { src: "assets/red/cam2.jpeg", label: "2" },
          { src: "assets/red/cam3.jpeg", label: "3" },
          { src: "assets/red/cam4.jpeg", label: "4" },
          { src: "assets/red/cam5.jpeg", label: "5" },
          { src: "assets/red/cam6.jpeg", label: "6" },
          { src: "assets/red/cam7.jpeg", label: "7" },
          { src: "assets/red/cam8.jpeg", label: "8" },
          { src: "assets/red/cam9.jpeg", label: "9" }
        ]
      },
      {
        id: "redes-3",
        nombre: "Mapas de Calor",
        numero: "03",
        intro: "Estudio de cobertura RF y mapas de calor (Site Survey) para redes inalámbricas.",
        descripcion: "Análisis espectral y simulación de cobertura Wi-Fi para identificar zonas de sombra, interferencias y niveles de señal (RSSI), asegurando la óptima distribución de Access Points.",
        imagenPrincipal: "assets/red/mapa1.png",
        fotosTotal: 6,
        trabajos: [
          "Levantamiento de planos arquitectónicos del área operativa.",
          "Medición de señales inalámbricas en frecuencia de 2.4 GHz y 5 GHz.",
          "Identificación de atenuaciones por muros, estructuras y ruido RF.",
          "Diseño del plano térmico de propagación de señal (Heatmap).",
          "Informe técnico con la ubicación idónea de los Access Points."
        ],
        galeria: [
          { src: "assets/red/mapa1.png", label: "1" },
          { src: "assets/red/mapa2.png", label: "2" },
          { src: "assets/red/mapa3.png", label: "3" },
          { src: "assets/red/mapa4.png", label: "4" },
          { src: "assets/red/mapa5.png", label: "5" },
          { src: "assets/red/mapa6.png", label: "6" }
        ]
      },
      {
        id: "redes-4",
        nombre: "Instalación de Fibra Óptica",
        numero: "04",
        intro: "Tendido, fusión y certificación de enlaces de fibra óptica monomodo y multimodo.",
        descripcion: "Despliegue de anillos o enlaces de fibra óptica para interconectar gabinetes principales y secundarios a alta velocidad, incluyendo conectorización y empalmes por fusión precisa.",
        imagenPrincipal: "assets/red/fibra1.jpeg",
        fotosTotal: 7,
        trabajos: [
          "Tendido de cable de fibra óptica dieléctrica / armada por ductos.",
          "Montaje de distribuidores ópticos (ODF) y patch panels ópticos.",
          "Empalme por fusión por alineación de núcleo.",
          "Conectorización de pigtails LC/SC en bandejas de empalme.",
          "Medición de pérdida de atenuación con reflectómetro OTDR."
        ],
        galeria: [
          { src: "assets/red/fibra1.jpeg", label: "1" },
          { src: "assets/red/fibra2.jpeg", label: "2" },
          { src: "assets/red/fibra3.jpeg", label: "3" },
          { src: "assets/red/fibra4.jpeg", label: "4" },
          { src: "assets/red/fibra5.jpeg", label: "5" },
          { src: "assets/red/fibra6.jpeg", label: "6" },
          { src: "assets/red/fibra7.jpeg", label: "7" }
        ]
      },
      {
        id: "redes-5",
        nombre: "Instalación de Punto Exterior de Red",
        numero: "05",
        intro: "Montaje y canalización de puntos de red intemperie con protección industrial.",
        descripcion: "Instalación de salidas de red UTP/FTP de intemperie con gabinetes estancos IP67 y protección contra descargas para conectar radios de enlace, cámaras exteriores o APs.",
        imagenPrincipal: "assets/red/pun1.jpeg",
        fotosTotal: 7,
        trabajos: [
          "Fijación de mástiles o soportes metálicos anticorrosivos.",
          "Tendido de cable SFTP para exteriores con malla de aterramiento.",
          "Instalación de cajas de pase con prensacables IP68.",
          "Instalación de protectores de sobretensión Ethernet (PoE Surge Protector).",
          "Ponchado, pruebas de continuidad y certificación del punto."
        ],
        galeria: [
          { src: "assets/red/pun1.jpeg", label: "1" },
          { src: "assets/red/pun2.jpeg", label: "2" },
          { src: "assets/red/pun3.jpeg", label: "3" },
          { src: "assets/red/pun4.jpeg", label: "4" }
        ]
      },
      {
        id: "redes-6",
        nombre: "Instalación de Antenas Starlink",
        numero: "06",
        intro: "Montaje, fijación en altura y configuración de sistemas de internet satelital Starlink.",
        descripcion: "Suministro e instalación de soportes dedicados, fijación de antena en puntos libres de obstrucciones, tendido de cableado protegido hacia interiores y puesta a punto de la red.",
        imagenPrincipal: "assets/red/an10.jpeg",
        fotosTotal: 11,
        trabajos: [
          "Inspección e identificación del ángulo sin obstrucciones.",
          "Instalación de mástil o soporte rígido en techado/fachada.",
          "Canalización del cable propietario con protección contra intemperie.",
          "Integración con router Starlink y/o conmutador de red de la empresa.",
          "Configuración de red Wi-Fi, pruebas de velocidad y latencia."
        ],
        galeria: [
          { src: "assets/red/an1.jpeg", label: "1" },
          { src: "assets/red/an2.jpeg", label: "2" },
          { src: "assets/red/an3.jpeg", label: "3" },
          { src: "assets/red/an4.jpeg", label: "4" },
          { src: "assets/red/an5.jpeg", label: "5" },
          { src: "assets/red/an6.jpeg", label: "6" },
          { src: "assets/red/an7.jpeg", label: "7" },
          { src: "assets/red/an8.jpeg", label: "8" },
          { src: "assets/red/an9.jpeg", label: "9" },
          { src: "assets/red/an10.jpeg", label: "10" },
          { src: "assets/red/an11.jpeg", label: "11" }
        ]
      }
    ]
  },

  generales: {
    numero: "03",
    kicker: "ESPECIALIDAD",
    titulo: "Servicios Generales",
    intro: "Mantenimiento civil, adecuación de espacios, drywall, pintura industrial, carpintería metálica y soporte operativo integral.",
    descripcion: "Ofrecemos un servicio integral de mantenimiento correctivo y adaptaciones para empresas e industrias, resolviendo necesidades operativas con rapidez, limpieza y estándares de seguridad laboral.",
    capacidades: [
      { num: "01", text: "Mantenimiento, reparación e instalación de estructuras de Drywall." },
      { num: "02", text: "Pintura epóxica para pisos industriales y pintura látex/óleo en interiores." },
      { num: "03", text: "Carpintería metálica, cerrajería y soldadura estructurada." },
      { num: "04", text: "Adecuación de divisiones de ambientes para oficinas y almacenes." },
      { num: "05", text: "Mantenimiento preventivo de sanitarios e instalaciones hidráulicas." },
      { num: "06", text: "Trabajos en altura con andamios normados y equipos EPP homologados." }
    ],
    proyectos: [
      {
        id: "generales-1",
        nombre: "Acometida en cuarto de Bombas",
        numero: "01",
        intro: "Acondicionamiento técnico, soporte mecánico y canalizaciones en cuarto de bombas.",
        descripcion: "Trabajos de adecuación de infraestructura, fijación de soportes metálicos para tuberías de fuerza e hidroneumáticas, y pintado técnico de protección anticorrosiva en cuarto de bombas.",
        imagenPrincipal: "assets/servgen/aco4.jpeg",
        fotosTotal: 7,
        trabajos: [
          "Instalación de perfiles y soportes de anclaje pesado para tuberías.",
          "Canalización de fuerza con tubería conduit para motores y bombas.",
          "Protección y sellado impermeabilizante de pases de muro.",
          "Pintado y codificación de tuberías según norma técnica.",
          "Limpieza técnica y despeje del área de bombas."
        ],
        galeria: [
          { src: "assets/servgen/aco7.jpeg", label: "1" },
          { src: "assets/servgen/aco2.jpeg", label: "2" },
          { src: "assets/servgen/aco3.jpeg", label: "3" },
          { src: "assets/servgen/aco4.jpeg", label: "4" },
          { src: "assets/servgen/aco5.jpeg", label: "5" },
          { src: "assets/servgen/aco6.jpeg", label: "6" },
          { src: "assets/servgen/aco1.jpeg", label: "7" }
        ]
      },
      {
        id: "generales-2",
        nombre: "Pintado de Desniveles y Señalizaciones",
        numero: "02",
        intro: "Pintado epóxico de alto tránsito y demarcación de seguridad para desniveles y rampas.",
        descripcion: "Tratamiento de superficies, preparación de pisos de concreto y aplicación de pintura epóxica/tráfico de alta durabilidad para señalizar sardineles, desniveles y zonas de riesgo peatonal.",
        imagenPrincipal: "assets/servgen/des1.jpg",
        fotosTotal: 19,
        trabajos: [
          "Limpieza mecánica, desengrasado y lijado de superficie.",
          "Masillado y resane de bordes y fisuras en desniveles.",
          "Enmascarado y perfilado de franjas de seguridad.",
          "Aplicación de capas de pintura de alto tránsito anticorrosiva.",
          "Demarcación con franjas de advertencia amarillo/negro."
        ],
        galeria: [
          { src: "assets/servgen/des1.jpg", label: "1" },
          { src: "assets/servgen/des2.jpg", label: "2" },
          { src: "assets/servgen/des3.jpg", label: "2" },
          { src: "assets/servgen/des4.jpg", label: "2" },
          { src: "assets/servgen/des5.jpg", label: "2" },
          { src: "assets/servgen/des6.jpg", label: "2" },
          { src: "assets/servgen/des7.jpg", label: "2" },
          { src: "assets/servgen/des8.jpg", label: "2" },
          { src: "assets/servgen/des9.jpg", label: "2" },
          { src: "assets/servgen/des10.jpg", label: "2" },
          { src: "assets/servgen/des11.jpg", label: "2" },
          { src: "assets/servgen/des12.jpg", label: "2" },
          { src: "assets/servgen/des13.jpg", label: "2" },
          { src: "assets/servgen/des14.jpg", label: "2" },
          { src: "assets/servgen/des15.jpg", label: "2" },
          { src: "assets/servgen/des16.jpg", label: "2" },
          { src: "assets/servgen/des17.jpg", label: "2" },
          { src: "assets/servgen/des18.jpg", label: "2" },
          { src: "assets/servgen/des19.jpg", label: "19" }
        ]
      },
      {
        id: "generales-3",
        nombre: "Montaje y Construcción de Drywall",
        numero: "03",
        intro: "Construcción de tabiques, cielos rasos y divisiones en sistema de construcción en seco.",
        descripcion: "Estructuración y levantamiento de paredes de drywall con perfiles de acero galvanizado, aislamiento termoacústico y acabado masillado para remodelación rápida de oficinas e instalaciones.",
        imagenPrincipal: "assets/servgen/dry1.jpeg",
        fotosTotal: 8,
        trabajos: [
          "Armado de estructura metálica de rieles y parantes galvanizados.",
          "Instalación de lana de vidrio para acondicionamiento acústico.",
          "Emplacado con planchas de yeso ST / RH según la zona.",
          "Enceptado, masillado de uniones y lijado de acabado fino.",
          "Aplicación de pintura imprimante y látex de acabado."
        ],
        galeria: [
          { src: "assets/servgen/dry1.jpeg", label: "1" },
          { src: "assets/servgen/dry2.jpeg", label: "2" },
          { src: "assets/servgen/dry3.jpeg", label: "3" },
          { src: "assets/servgen/dry4.jpeg", label: "4" },
          { src: "assets/servgen/dry5.jpeg", label: "5" },
          { src: "assets/servgen/dry6.jpeg", label: "6" },
          { src: "assets/servgen/dry7.jpeg", label: "7" },
          { src: "assets/servgen/dry8.jpeg", label: "8" }
        ]
      },
      {
        id: "generales-4",
        nombre: "Mantenimiento de Mamparas de Vidrio",
        numero: "04",
        intro: "Mantenimiento preventivo, ajuste y reparación de mamparas y divisiones de vidrio templado.",
        descripcion: "Inspección, ajuste de frenos hidráulicos de piso, alineación de hojas de cristal templado, cambio de accesorios metálicos corroídos y sellado de juntas en mamparas corporativas.",
        imagenPrincipal: "assets/servgen/man1.jpeg",
        fotosTotal: 7,
        trabajos: [
          "Desmontaje o alineación de paneles de vidrio templado.",
          "Mantenimiento y regulación de frenos de piso hidráulicos.",
          "Sustitución de rodamientos, chapa de seguridad y jaladores.",
          "Aplicación de silicona estructural transparente en uniones.",
          "Limpieza técnica y prueba de recorrido/cierre suave."
        ],
        galeria: [
          { src: "assets/servgen/man1.jpeg", label: "1" },
          { src: "assets/servgen/man2.jpeg", label: "2" },
          { src: "assets/servgen/man3.jpeg", label: "3" },
          { src: "assets/servgen/man4.jpeg", label: "4" },
          { src: "assets/servgen/man5.jpeg", label: "5" },
          { src: "assets/servgen/man6.jpeg", label: "6" },
          { src: "assets/servgen/man7.jpeg", label: "7" }
        ]
      }
    ]
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menuToggle');
  const mainNav = document.getElementById('mainNav');

  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', () => {
      mainNav.classList.toggle('active');
    });
  }

  const header = document.getElementById('header');
  if (header) {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 40) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    });
  }

  if (window.location.pathname.includes('servicio.html')) {
    cargarPaginaServicio();
  }

  if (window.location.pathname.includes('proyecto.html')) {
    cargarPaginaProyecto();
  }
});

function cargarPaginaServicio() {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get('tipo') || 'electrico';
  const data = PROYECTOS_DATA[tipo] || PROYECTOS_DATA.electrico;

  setTextContent('serviceNumber', data.numero);
  setTextContent('serviceKicker', data.kicker);
  setTextContent('serviceTitle', data.titulo);
  setTextContent('serviceIntro', data.intro);
  setTextContent('serviceHeading', data.titulo);
  setTextContent('serviceDescription', data.descripcion);

  const heroEl = document.getElementById('serviceHero');
  if (heroEl && data.proyectos.length > 0) {
    heroEl.style.backgroundImage = `url('${data.proyectos[0].imagenPrincipal}')`;
  }

  const projectsContainer = document.getElementById('serviceProjects');
  if (projectsContainer) {
    projectsContainer.innerHTML = '';
    data.proyectos.forEach((proj, idx) => {
      const card = document.createElement('div');
      card.className = 'service-project-card';
      card.innerHTML = `
        <div class="service-project-image">
          <img src="${proj.imagenPrincipal}" alt="${proj.nombre}" onerror="this.onerror=null; this.src='assets/img/hero-bg-1.jpg';">
          <span class="project-number">${proj.numero || '0' + (idx + 1)}</span>
        </div>
        <div class="service-project-content">
          <span class="project-category">${tipo.toUpperCase()}</span>
          <h3>${proj.nombre}</h3>
          <p>${proj.intro}</p>
          <div class="project-photo-count">
            Fotografías del proyecto: <span>${proj.fotosTotal || 3}</span>
          </div>
          <a href="proyecto.html?tipo=${tipo}&id=${proj.id}" class="project-detail-link">
            Ver proyecto detallado <b>→</b>
          </a>
        </div>
      `;
      projectsContainer.appendChild(card);
    });
  }

  const capContainer = document.getElementById('capabilities');
  if (capContainer && data.capacidades) {
    capContainer.innerHTML = '';
    data.capacidades.forEach(cap => {
      const capCard = document.createElement('div');
      capCard.className = 'capability-card';
      capCard.innerHTML = `
        <span>${cap.num}</span>
        <strong>${cap.text}</strong>
      `;
      capContainer.appendChild(capCard);
    });
  }
}

function cargarPaginaProyecto() {
  const params = new URLSearchParams(window.location.search);
  const tipo = params.get('tipo') || 'electrico';
  const id = params.get('id');

  const servicio = PROYECTOS_DATA[tipo] || PROYECTOS_DATA.electrico;
  let proyecto = servicio.proyectos.find(p => p.id === id);

  if (!proyecto) {
    proyecto = servicio.proyectos[0];
  }

  setTextContent('projectCategory', tipo.toUpperCase());
  setTextContent('projectNumber', proyecto.numero || "01");
  setTextContent('projectTitle', proyecto.nombre);
  setTextContent('projectIntro', proyecto.intro);
  setTextContent('projectDescription', proyecto.descripcion);

  setTextContent('projectArea', tipo.toUpperCase());
  setTextContent('projectNameSmall', proyecto.nombre);
  setTextContent('projectPhotoTotal', proyecto.fotosTotal || 3);

  const mainImg = document.getElementById('projectMainImage');
  if (mainImg) {
    mainImg.src = proyecto.imagenPrincipal;
    mainImg.alt = proyecto.nombre;
  }

  const mensajeWA = encodeURIComponent(`Hola Innovax Ingenieros, quisiera cotizar o recibir información sobre el proyecto: ${proyecto.nombre}`);
  const btnWA = document.getElementById('projectWhatsApp');
  const btnWABottom = document.getElementById('bottomWhatsApp');
  if (btnWA) btnWA.href = `https://wa.me/51987270326?text=${mensajeWA}`;
  if (btnWABottom) btnWABottom.href = `https://wa.me/51987270326?text=${mensajeWA}`;

  const workContainer = document.getElementById('projectWork');
  if (workContainer && proyecto.trabajos) {
    workContainer.innerHTML = '';
    proyecto.trabajos.forEach((item, index) => {
      const workDiv = document.createElement('div');
      workDiv.className = 'work-item';
      workDiv.innerHTML = `
        <span>0${index + 1}</span>
        <strong>${item}</strong>
        <b>✓</b>
      `;
      workContainer.appendChild(workDiv);
    });
  }

  const galeriaContainer = document.getElementById('projectGallery');
  if (galeriaContainer && proyecto.galeria) {
    galeriaContainer.innerHTML = '';
    proyecto.galeria.forEach((imgObj) => {
      const galItem = document.createElement('div');
      galItem.className = 'project-gallery-item';
      galItem.innerHTML = `
        <span>${imgObj.label || 'PROYECTO'}</span>
        <img src="${imgObj.src}" alt="${imgObj.label}" onerror="this.onerror=null; this.src='assets/img/hero-bg-1.jpg';">
      `;
      galItem.addEventListener('click', () => {
        openLightbox(imgObj.src);
      });
      galeriaContainer.appendChild(galItem);
    });
  }

  setupLightbox();
}

function openLightbox(src) {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImage');
  if (lightbox && lightboxImg) {
    lightboxImg.src = src;
    lightbox.classList.add('active');
  }
}

function setupLightbox() {
  const lightbox = document.getElementById('lightbox');
  const closeBtn = document.getElementById('lightboxClose');

  if (closeBtn && lightbox) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
    });

    lightbox.addEventListener('click', (e) => {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }
}

function setTextContent(id, text) {
  const el = document.getElementById(id);
  if (el) el.textContent = text;
}