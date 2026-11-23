const projects = [
  {
    slug: 'astro', name: 'ASTRO', sector: ['Moda · E-commerce', 'Fashion · E-commerce'],
    tags: ['E-commerce', 'PWA', 'ES / EN'], languages: 'ES / EN',
    colors: [['Hueso', 'Bone', '#F3EFE8'], ['Tinta', 'Ink', '#161514'], ['Bronce', 'Bronze', '#9C6B3C']], accent: '#9C6B3C',
    fonts: 'Cormorant Garamond + Manrope', tech: 'PWA',
    live: 'https://astro-studio-web.netlify.app', code: 'astro-web',
    shots: [['astro-home', 'Portada editorial de ASTRO', 'ASTRO editorial homepage'], ['astro-product', 'Ficha de producto ASTRO', 'ASTRO product page'], ['astro-mobile', 'Tienda ASTRO en móvil', 'ASTRO store on mobile', true]],
    challenge: ['Llevar el lujo silencioso a una tienda de moda fácil de explorar e instalar.', 'Bring quiet luxury to a fashion store that is easy to browse and install.'],
    solution: ['Minimalismo editorial con fondos hueso, titulares con serif, detalles en bronce e imágenes de producto generadas con IA.', 'Editorial minimalism with bone-colored backgrounds, serif headlines, bronze details and AI-generated product images.'],
    features: [
      ['Portada editorial, presentación de marca y tienda por categorías.', 'Editorial homepage, brand introduction and shopping by category.'],
      ['Catálogo con filtros por categoría, talla y precio, y opciones de orden.', 'Catalog with category, size and price filters and sorting options.'],
      ['16 fichas de producto con tallas, colores y galería.', '16 product pages with sizes, colors and image galleries.'],
      ['Carrito persistente, checkout de demostración con confirmación y contacto.', 'Persistent cart, demo checkout with confirmation and contact.'],
      ['Experiencia bilingüe ES/EN y PWA con modo sin conexión y botón de instalación.', 'Bilingual ES/EN experience and PWA with offline support and an install button.']
    ]
  },
  {
    slug: 'wook', name: 'WOOK', sector: ['Gastronomía · Restaurante', 'Hospitality · Restaurant'],
    tags: [['Diseño web', 'Web design'], ['Reservas', 'Booking'], 'ES / EN'], languages: 'ES / EN',
    colors: [['Negro', 'Black', '#0A090B'], ['Dorado', 'Gold', '#C9A45C'], ['Morado', 'Purple', '#2B1636']], accent: '#C9A45C',
    fonts: 'Playfair Display + Jost', tech: ['Calendario web propio', 'Custom web calendar'],
    live: 'https://restaurante-wook.netlify.app', code: 'restaurante-wook',
    shots: [['wook-home', 'Portada cinematográfica de WOOK', 'WOOK cinematic homepage'], ['wook-menu', 'Carta del restaurante WOOK', 'WOOK restaurant menu'], ['wook-mobile', 'WOOK en móvil', 'WOOK on mobile', true]],
    challenge: ['Presentar un restaurante de cocina asiática contemporánea y facilitar el paso de consultar la carta a reservar una mesa.', 'Introduce a contemporary Asian restaurant and make it easy to go from browsing the menu to booking a table.'],
    solution: ['Una portada cinematográfica y fotografía gastronómica generada con IA marcan el tono. La carta y el calendario propio organizan la información para planear la visita.', 'A cinematic homepage and AI-generated food photography set the tone. The menu and custom calendar organize the essentials for planning a visit.'],
    features: [
      ['Portada y página del restaurante con historia, chef, horarios y ubicación.', 'Homepage and restaurant page with its story, chef, hours and location.'],
      ['Carta por secciones, etiquetas dietéticas y menú degustación.', 'Sectioned menu, dietary labels and tasting menu.'],
      ['Calendario de reservas con días cerrados o completos, franjas horarias, número de comensales, validación y confirmación.', 'Booking calendar with closed or fully booked days, time slots, party size, validation and confirmation.'],
      ['Sitio bilingüe ES/EN.', 'Bilingual ES/EN site.']
    ]
  },
  {
    slug: 'cambio-de-llaves', name: 'CAMBIO DE LLAVES', sector: ['Automoción · Colombia', 'Automotive · Colombia'],
    tags: ['Three.js', 'Android', ['Simuladores', 'Calculators']], languages: 'ES',
    colors: [['Azul eléctrico', 'Electric blue', '#1636FF'], ['Blanco papel', 'Paper white', '#F7F7F4'], ['Negro', 'Black', '#0B0B0C']], accent: '#1636FF',
    fonts: 'Archivo (variable) + IBM Plex Mono', tech: 'Three.js · Android (APK)',
    live: 'https://cambio-de-llaves.netlify.app', code: 'cambio-de-llaves', apk: 'cambio-de-llaves-app',
    shots: [['cdl-home', 'Portada de Cambio de Llaves', 'Cambio de Llaves homepage'], ['cdl-car', 'Ficha de carro en Cambio de Llaves', 'Cambio de Llaves vehicle detail'], ['cdl-mobile', 'Cambio de Llaves en móvil', 'Cambio de Llaves on mobile', true]],
    challenge: ['Reunir búsqueda, inspección, comparación y estimación de costos para la compraventa de carros usados.', 'Bring browsing, inspection, comparison and cost estimates together for people buying or selling used cars.'],
    solution: ['La etiqueta de llavero y la hoja de inspección de taller inspiran la identidad. El azul eléctrico guía las acciones y los titulares usan el ancho variable de Archivo.', 'Key tags and workshop inspection sheets inspire the visual identity. Electric blue highlights actions, and headlines use the variable width of Archivo.'],
    features: [
      ['Catálogo de 16 carros con filtros y orden, y fichas con informe de inspección y simulador de cuota.', '16-car catalog with filtering and sorting, plus vehicle pages with inspection reports and payment estimates.'],
      ['Visor 3D de 360° con Three.js y modelos por carrocería pintados con el color real de cada carro.', '360° Three.js viewer with models by body type, shown in each car’s actual color.'],
      ['Avalúo por pasos con estimación de precio y carga de fotos por arrastre, previsualización, reordenamiento y límites.', 'Step-by-step appraisal with a price estimate and photo uploads with drag and drop, previews, reordering and limits.'],
      ['Simulador de financiación, comparador de hasta 3 carros, favoritos y contacto con sedes.', 'Financing calculator, comparison of up to 3 cars, favorites and branch contacts.'],
      ['App Android (APK) con funcionamiento sin conexión.', 'Android app (APK) with offline support.']
    ]
  },
  {
    slug: 'clutch', name: 'CLUTCH', sector: ['Gaming · Estadísticas', 'Gaming · Statistics'],
    tags: ['Android', 'Capacitor', ['Sin conexión', 'Offline']],
    colors: [['Fondo oscuro', 'Dark background', '#0E1116'], ['Coral', 'Coral', '#FF4655'], ['Menta', 'Mint', '#3EE6C1']], accent: '#FF4655',
    fonts: 'Chakra Petch + Inter Tight', tech: 'Capacitor · Android (APK)',
    code: 'clutch-tracker', apk: 'clutch-tracker',
    shots: [['clutch-home', 'Inicio de la app Android CLUTCH', 'CLUTCH Android app home screen', true], ['clutch-player', 'Perfil y estadísticas en CLUTCH', 'CLUTCH player profile and stats', true]],
    challenge: ['Organizar estadísticas de Valorant para pasar del progreso general al detalle de una partida en el teléfono.', 'Organize Valorant stats so players can move from overall progress to match details on their phones.'],
    solution: ['Una interfaz oscura con coral y menta organiza perfiles, métricas e historial en pantallas móviles.', 'A dark interface with coral and mint organizes profiles, metrics and match history on mobile screens.'],
    features: [
      ['Búsqueda por Nombre#TAG y región.', 'Search by Name#TAG and region.'],
      ['Perfiles con rango, K/D, KDA, HS%, win rate, ADR y ACS, y evolución de RR.', 'Profiles with rank, K/D, KDA, HS%, win rate, ADR and ACS, plus RR history.'],
      ['Partidas con detalle de los 10 jugadores y las rondas.', 'Match details covering all 10 players and individual rounds.'],
      ['Agentes, mapas, armas, temporadas, favoritos y ajustes.', 'Agents, maps, weapons, seasons, favorites and settings.'],
      ['App nativa Android con Capacitor y funcionamiento sin conexión.', 'Native Android app built with Capacitor, with offline support.']
    ]
  },
  {
    slug: 'petal-and-pigment', name: 'PETAL & PIGMENT', sector: ['Belleza · E-commerce', 'Beauty · E-commerce'],
    tags: ['E-commerce', 'Chatbot', 'ES / EN'], languages: 'ES / EN',
    colors: [['Crema', 'Cream', '#FFF6EE'], ['Cacao', 'Cocoa', '#2A1A17'], ['Cereza', 'Cherry', '#D7263D'], ['Pétalo', 'Petal', '#F7C6C7'], ['Mantequilla', 'Butter', '#F4E3B1']], accent: '#D7263D',
    fonts: 'Fraunces + Instrument Sans', tech: ['Procesamiento de imagen en navegador · Chatbot', 'Browser-based image processing · Chatbot'],
    live: 'https://petal-and-pigment.netlify.app', code: 'petal-and-pigment',
    shots: [['pp-home', 'Portada de Petal & Pigment', 'Petal & Pigment homepage'], ['pp-shop', 'Tienda de Petal & Pigment', 'Petal & Pigment storefront'], ['pp-chat', 'Chatbot Pip en móvil', 'Pip chatbot on mobile', true]],
    challenge: ['Ayudar a quien compra maquillaje y cuidado de la piel a elegir un tono, armar una rutina y consultar disponibilidad.', 'Help makeup and skincare shoppers find a shade, build a routine and check availability.'],
    solution: ['La paleta de crema, cacao, cereza, pétalo y mantequilla enmarca el catálogo. Shade Finder y Pip incorporan asesoría durante la compra.', 'A palette of cream, cocoa, cherry, petal and butter frames the catalog. Shade Finder and Pip offer guidance while shopping.'],
    features: [
      ['24 productos con tonos y stock por tono, tienda con filtros y fichas con reseñas.', '24 products with shade-level stock, store filters and product pages with reviews.'],
      ['Shade Finder con cuestionario y coincidencia de tono por foto procesada en el navegador. Herramienta «Arma tu rutina».', 'Shade Finder with a quiz and photo-based shade matching processed in the browser. Build Your Routine tool.'],
      ['Bolsa con códigos de descuento y muestras, checkout y seguimiento de pedido.', 'Shopping bag with discount codes and samples, checkout and order tracking.'],
      ['Pip entiende lenguaje natural en ES/EN y usa datos reales de la tienda para consultar stock por tono, precios, ingredientes y pedidos, recomendar, comparar y añadir a la bolsa.', 'Pip understands natural language in ES/EN and uses actual store data to check shade stock, prices, ingredients and orders, make recommendations, compare and add to the bag.'],
      ['Tienda bilingüe ES/EN.', 'Bilingual ES/EN store.']
    ]
  }
];