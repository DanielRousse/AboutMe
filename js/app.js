(function () {
  "use strict";

  const EMAILJS_PUBLIC_KEY = "MOJDTide_kOvAekcP";
  const EMAILJS_SERVICE_ID = "service_fjn1uuf";
  const EMAILJS_TEMPLATE_ID = "template_9u0x0ne";

  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.timeline": "Trayectoria",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "nav.cv": "⬇ CV",
      "intro.hello": "Hola, soy",
      "intro.mech_title": "Ingeniería Mecatrónica",
      "intro.mech_desc": "Diseño y automatización de sistemas físicos, control técnico y hardware de precisión.",
      "intro.fs_title": "Desarrollo Full Stack",
      "intro.fs_desc": "Construcción de software robusto, arquitecturas web escalables y lógica empresarial eficiente.",
      "intro.why_title": "¿Por qué Ingeniería Mecatrónica & Desarrollo Full Stack?",
      "intro.why_desc": "La combinación de ambas disciplinas me permite comprender y diseñar sistemas tecnológicos de extremo a extremo: desde la interacción directa con sensores y microcontroladores (hardware) hasta la arquitectura en la nube, bases de datos y desarrollo de interfaces de usuario (software). Mi pasión radica en materializar ideas lógicas y digitales en el mundo físico.",
      "stats.years": "Años de formación",
      "stats.projects": "Proyectos destacados",
      "stats.techs": "Tecnologías dominadas",
      "stats.papers": "Artículo científico",
      "about.title": "Sobre Mí",
      "about.desc": "Soy un desarrollador Java Full Stack Jr. e Ingeniero en Mecatrónica que disfruta diseñar la arquitectura detrás de aplicaciones web, resolver problemas lógicos complejos y crear soluciones integrales que conecten el software con el mundo físico. Mi experiencia clave incluye la creación de sistemas de seguridad biométrica, gestión de datos especializados y modelado digital.",
      "about.edu_title": "Formación y Certificaciones",
      "about.edu_item1": "Instituto Tecnológico de Tláhuac (Título en proceso, 2021 - 2026)",
      "about.edu_item2": "Generation México (Abril 2026 - Julio 2026)",
      "about.edu_item3": "Accenture (2026)",
      "about.view_cert": "🏅 Ver Certificado",
      "nav.certs": "Certificaciones",
      "about.edu_item4": "Nivel B2 (Intermedio Alto)",
      "about.view_cert_bootcamp": "🏅 Ver Certificado",
      "about.view_cert_accenture": "🏅 Ver Certificado",
      "about.view_cert_english": "🏅 Ver Certificado EFSET",
      "about.soft_teamwork": "Trabajo en equipo",
      "about.soft_problem": "Resolución de problemas",
      "about.soft_resilience": "Resiliencia",
      "about.soft_proactive": "Proactividad",
      "about.soft_communication": "Comunicación efectiva",
      "about.soft_leadership": "Liderazgo",
      "certs.title": "Certificaciones y Constancias",
      "certs.citca_title": "Reconocimiento CITCA",
      "certs.citca_desc": "Congreso Internacional de Tecnología y Ciencia Aplicada",
      "certs.paper_title": "Artículo Científico CITCA",
      "certs.paper_desc": "Paper sobre sistemas biométricos con procesamiento de imágenes médicas",
      "certs.innova24_title": "InnovaTecNM 2024",
      "certs.innova24_desc": "Constancia de participación en evento de innovación tecnológica",
      "certs.innova25_title": "InnovaTecNM 2025",
      "certs.innova25_desc": "Constancia de participación en evento de innovación tecnológica",
      "certs.mooc_title": "Curso MOOC TecNM",
      "certs.mooc_desc": "Certificado PIEIT01-001 — Cursos en línea del Tecnológico Nacional de México",
      "certs.ddhh_title": "Derechos Humanos",
      "certs.ddhh_desc": "Certificado de formación en derechos humanos",
      "cta.text": "Contrátame",
      "timeline.title": "Trayectoria",
      "timeline.t1_title": "Ingreso a Ingeniería Mecatrónica",
      "timeline.t1_desc": "Inicio de la carrera en el Instituto Tecnológico de Tláhuac, fusionando mecánica, electrónica y programación.",
      "timeline.t2_title": "Proyecto de Software Médico",
      "timeline.t2_desc": "Desarrollo de un sistema de procesamiento de imágenes médicas con sensor biométrico integrado en MATLAB.",
      "timeline.t3_title": "Congreso Internacional CITCA",
      "timeline.t3_desc": "Co-autoría y presentación de artículo científico sobre sistemas biométricos en congreso internacional.",
      "timeline.t4_title": "Bootcamp Java Full Stack",
      "timeline.t4_desc": "Formación intensiva con Generation México: Java, Spring Boot, APIs REST, bases de datos y metodologías ágiles.",
      "timeline.t5_title": "E-commerce Backend — Fyndr",
      "timeline.t5_desc": "Diseño e implementación de arquitectura backend con Spring Boot para plataforma de contratación de servicios.",
      "timeline.t6_year": "PRESENTE",
      "timeline.t6_title": "Buscando Nuevos Retos",
      "timeline.t6_desc": "Disponible para oportunidades profesionales como Desarrollador Full Stack Jr. en Ciudad de México o remoto.",
      "techstack.title": "Stack Tecnológico",
      "projects.title": "Proyectos y Experiencia",
      "projects.p1_title": "Desarrollador de Software | Instituto Tecnológico de Tláhuac",
      "projects.p1_desc": "Desarrollo de software médico y biométrico integrado con hardware.",
      "projects.p1_bullet1": "Aseguré reversibilidad total y fidelidad diagnóstica en imágenes médicas.",
      "projects.p1_bullet2": "Optimicé la seguridad reduciendo errores de autenticación.",
      "projects.p1_bullet3": "Programé e integré la lógica para conectar un sensor de huella dactilar físico en MATLAB.",
      "projects.p1_bullet4": "Co-redacté un artículo científico y expuse resultados en el congreso internacional CITCA.",
      "projects.p1_detail": "Este proyecto involucró el procesamiento de imágenes médicas con técnicas de compresión sin pérdida, asegurando que las imágenes pudieran reconstruirse fielmente para diagnóstico. Se implementó un sistema biométrico con sensor de huella dactilar para control de acceso al sistema, demostrando la integración exitosa entre hardware y software médico.",
      "projects.p1_paper": "📄 Ver Artículo CITCA",
      "projects.details": "Ver detalles",
      "projects.p2_title": "E-commerce Backend | Fyndr",
      "projects.p2_desc": "Plataforma de comercio electrónico para contratación de servicios y oficios técnicos.",
      "projects.p2_bullet1": "Diseñé e implementé la arquitectura del backend utilizando Java y Spring Boot.",
      "projects.p2_bullet2": "Desarrollé APIs REST eficientes para gestión de usuarios y transacciones.",
      "projects.p2_bullet3": "Colaboré activamente en un equipo de 6 personas bajo metodología SCRUM (dailies).",
      "projects.p2_bullet4": "Integré endpoints con frontend en Vite garantizando alta velocidad de datos.",
      "projects.p2_detail": "Arquitectura MVC con Spring Boot, implementando patrones de diseño como Repository y Service Layer. Se diseñaron endpoints RESTful con documentación Swagger, autenticación JWT, y manejo de excepciones centralizado. La base de datos relacional fue diseñada con MySQL, optimizando queries para alto rendimiento.",
      "projects.p3_title": "Hackaton Full-Stack | Kungfu Shop",
      "projects.p3_desc": "Desarrollo responsivo de tienda en línea y control de versiones.",
      "projects.p3_bullet1": "Diseñé la interfaz responsiva utilizando HTML5, CSS3 y Bootstrap.",
      "projects.p3_bullet2": "Programé un carrusel dinámico en JavaScript adaptativo al tamaño de pantalla.",
      "projects.p3_bullet3": "Implementé validación de formularios con Regex y alertas en tiempo real.",
      "projects.p3_bullet4": "Coordiné la integración de ramas con Git y resolví conflictos de fusión.",
      "projects.p3_detail": "Tienda en línea desarrollada en un hackaton de 48 horas. Se implementó un carrusel de productos con JavaScript puro, adaptativo a diferentes breakpoints. La validación de formularios incluye patrones regex para email, teléfono y tarjeta de crédito. Gestión de versiones con Git, resolviendo conflictos en equipo multidisciplinario.",
      "projects.visit": "Visitar Sitio",
      "github.title": "Actividad en GitHub",
      "github.loading": "Cargando repositorios...",
      "github.error": "No se pudieron cargar los repositorios.",
      "github.updated": "Actualizado",
      "testimonials.title": "Testimonios",
      "testimonials.t1_quote": "«Jonathan demuestra una capacidad excepcional para integrar conceptos de hardware y software. Su artículo científico sobre biometría fue destacado en el congreso CITCA.»",
      "testimonials.t1_name": "Dr. Profesor ITT",
      "testimonials.t1_role": "Asesor de Proyecto — Instituto Tecnológico de Tláhuac",
      "testimonials.t2_quote": "«En el equipo de Fyndr, Jonathan se destacó por su proactividad y habilidad para diseñar arquitecturas backend sólidas. Siempre propuso soluciones creativas en las dailies.»",
      "testimonials.t2_name": "Compañero de Equipo",
      "testimonials.t2_role": "Backend Developer — Proyecto Fyndr",
      "testimonials.t3_quote": "«Su capacidad para resolver problemas bajo presión fue clave durante el hackaton. Coordinó la integración de ramas con Git de forma eficiente y entregamos a tiempo.»",
      "testimonials.t3_name": "Compañero de Hackaton",
      "testimonials.t3_role": "Full Stack Developer — Kungfu Shop",
      "testimonials.t4_quote": "«Jonathan combina una mentalidad analítica de ingeniero con la creatividad de un desarrollador. Su perfil multidisciplinario es exactamente lo que buscan las empresas modernas.»",
      "testimonials.t4_name": "Instructor Generation",
      "testimonials.t4_role": "Bootcamp Java Full Stack — Generation México",
      "contact.title": "Contacto",
      "contact.info_title": "Información de Contacto",
      "contact.phone": "Teléfono",
      "contact.email": "Correo",
      "contact.location_title": "Ubicación",
      "contact.location_val": "Ciudad de México, México (Disponible para reubicación)",
      "contact.form_name": "Nombre",
      "contact.form_email": "Correo Electrónico",
      "contact.form_phone": "Teléfono",
      "contact.form_msg": "Mensaje",
      "contact.form_send": "Enviar Mensaje",
      "val.name_err": "El nombre debe tener al menos 3 caracteres y contener solo letras.",
      "val.email_err": "Por favor, introduce un correo electrónico válido.",
      "val.email_missing_at": "El correo electrónico debe contener una '@'.",
      "val.email_missing_dot": "Falta un punto (.) después de la '@' en el dominio del correo.",
      "val.email_invalid_domain": "El dominio de correo no es popular (admite gmail, hotmail, outlook, yahoo, icloud, proton, live, zoho).",
      "val.phone_err": "Introduce un número de teléfono válido de 10 dígitos (sin números repetitivos más de 3 veces).",
      "val.msg_err": "El mensaje debe tener entre 30 y 500 caracteres.",
      "val.send_success": "¡Mensaje enviado con éxito!",
      "val.send_error": "Error al enviar el mensaje. Inténtalo de nuevo.",
      "val.cooldown_err": "Por favor, espera 3 minutos entre envíos de mensajes.",
      "val.bot_err": "Acción automática bloqueada por seguridad.",
      "footer.text": "Jonathan Daniel Reyes Gordillo. Todos los derechos reservados.",
      "terminal.welcome": "Bienvenido a la terminal de JD. Escribe 'help' para ver comandos disponibles.",
      "terminal.help": "Comandos disponibles:\n  about    - Información sobre mí\n  skills   - Habilidades técnicas\n  projects - Mis proyectos\n  contact  - Datos de contacto\n  theme    - Cambiar tema (mech/dev/default)\n  clear    - Limpiar terminal\n  exit     - Cerrar terminal",
      "terminal.about": "Soy Jonathan Daniel Reyes Gordillo.\nDesarrollador Java Full Stack Jr. e Ingeniero en Mecatrónica.\nUbicación: Ciudad de México.\nPasión: Materializar ideas digitales en el mundo físico.",
      "terminal.skills": "Habilidades técnicas:\n  ► Java & Spring Boot  ████████░░ 80%\n  ► JavaScript          ███████░░░ 70%\n  ► SQL/MySQL           ████████░░ 80%\n  ► Python              ██████░░░░ 60%\n  ► MATLAB              ███████░░░ 70%\n  ► HTML/CSS            █████████░ 90%\n  ► Git                 ████████░░ 80%\n  ► Node.js             ██████░░░░ 60%",
      "terminal.projects": "Proyectos destacados:\n  1. Software Médico & Biométrico (ITT)\n  2. E-commerce Backend - Fyndr (Spring Boot)\n  3. Hackaton Kungfu Shop (Full Stack)\n  Escribe 'visit 1/2/3' para ver más.",
      "contact.copy_email": "📋 Copiar",
      "contact.copied": "¡Copiado!",
      "terminal.contact": "Contacto:\n  Email: reyesgordillojonathandaniel@gmail.com\n  GitHub: github.com/DanielRousse\n  LinkedIn: linkedin.com/in/jonathandrg\n  WhatsApp: wa.me/525561325250",
      "terminal.unknown": "Comando no reconocido. Escribe 'help' para ver comandos.",
      "terminal.theme_changed": "Tema cambiado a: ",
      "terminal.theme_options": "Uso: theme [mech|dev|default]",
      "konami.msg": "🚀 ¡EASTER EGG DESBLOQUEADO! 🚀"
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.timeline": "Journey",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "nav.cv": "⬇ CV",
      "intro.hello": "Hi, I'm",
      "intro.mech_title": "Mechatronics Engineering",
      "intro.mech_desc": "Design and automation of physical systems, technical control, and precision hardware development.",
      "intro.fs_title": "Full Stack Development",
      "intro.fs_desc": "Building robust software, scalable web architectures, and efficient business logic.",
      "intro.why_title": "Why Mechatronics Engineering & Full Stack Development?",
      "intro.why_desc": "Combining both disciplines allows me to understand and design end-to-end technological systems: from direct interaction with sensors and microcontrollers (hardware) to cloud architecture, databases, and user interface development (software). My passion lies in materializing logical and digital ideas into the physical world.",
      "stats.years": "Years of training",
      "stats.projects": "Featured projects",
      "stats.techs": "Technologies mastered",
      "stats.papers": "Scientific paper",
      "about.title": "About Me",
      "about.desc": "I am a Junior Java Full Stack Developer and Mechatronics Engineer who enjoys designing the architecture behind web applications, solving complex logical problems, and creating comprehensive solutions that bridge software with the physical world. My key experience includes biometric security systems, specialized data management, and digital modeling.",
      "about.edu_title": "Education and Certifications",
      "about.edu_item1": "Instituto Tecnológico de Tláhuac (Degree in progress, 2021 - 2026)",
      "about.edu_item2": "Generation México (April 2026 - July 2026)",
      "about.edu_item3": "Accenture (2026)",
      "about.view_cert": "🏅 View Certificate",
      "nav.certs": "Certifications",
      "about.edu_item4": "B2 Level (Upper-Intermediate)",
      "about.view_cert_bootcamp": "🏅 View Certificate",
      "about.view_cert_accenture": "🏅 View Certificate",
      "about.view_cert_english": "🏅 View EFSET Certificate",
      "about.soft_teamwork": "Teamwork",
      "about.soft_problem": "Problem solving",
      "about.soft_resilience": "Resilience",
      "about.soft_proactive": "Proactivity",
      "about.soft_communication": "Effective communication",
      "about.soft_leadership": "Leadership",
      "certs.title": "Certifications & Records",
      "certs.citca_title": "CITCA Recognition",
      "certs.citca_desc": "International Congress of Technology and Applied Science",
      "certs.paper_title": "CITCA Scientific Paper",
      "certs.paper_desc": "Paper on biometric systems with medical image processing",
      "certs.innova24_title": "InnovaTecNM 2024",
      "certs.innova24_desc": "Certificate of participation in technological innovation event",
      "certs.innova25_title": "InnovaTecNM 2025",
      "certs.innova25_desc": "Certificate of participation in technological innovation event",
      "certs.mooc_title": "TecNM MOOC Course",
      "certs.mooc_desc": "Certificate PIEIT01-001 — Online courses from TecNM",
      "certs.ddhh_title": "Human Rights",
      "certs.ddhh_desc": "Certificate of training in human rights",
      "cta.text": "Hire Me",
      "timeline.title": "Journey",
      "timeline.t1_title": "Mechatronics Engineering Start",
      "timeline.t1_desc": "Started the degree at Instituto Tecnológico de Tláhuac, merging mechanics, electronics, and programming.",
      "timeline.t2_title": "Medical Software Project",
      "timeline.t2_desc": "Developed a medical image processing system with integrated biometric sensor in MATLAB.",
      "timeline.t3_title": "CITCA International Congress",
      "timeline.t3_desc": "Co-authored and presented a scientific paper on biometric systems at an international congress.",
      "timeline.t4_title": "Java Full Stack Bootcamp",
      "timeline.t4_desc": "Intensive training with Generation México: Java, Spring Boot, REST APIs, databases, and agile methodologies.",
      "timeline.t5_title": "E-commerce Backend — Fyndr",
      "timeline.t5_desc": "Designed and implemented backend architecture with Spring Boot for a service hiring platform.",
      "timeline.t6_year": "PRESENT",
      "timeline.t6_title": "Seeking New Challenges",
      "timeline.t6_desc": "Available for professional opportunities as a Full Stack Jr. Developer in Mexico City or remote.",
      "techstack.title": "Tech Stack",
      "projects.title": "Projects & Experience",
      "projects.p1_title": "Software Developer | Instituto Tecnológico de Tláhuac",
      "projects.p1_desc": "Development of medical and biometric software integrated with hardware.",
      "projects.p1_bullet1": "Ensured total reversibility and diagnostic fidelity in medical imaging.",
      "projects.p1_bullet2": "Optimized security by reducing authentication errors.",
      "projects.p1_bullet3": "Programmed and integrated logic to connect a physical fingerprint sensor in MATLAB.",
      "projects.p1_bullet4": "Co-authored a scientific paper and presented results at the CITCA international congress.",
      "projects.p1_detail": "This project involved processing medical images with lossless compression techniques, ensuring images could be faithfully reconstructed for diagnosis. A biometric system with a fingerprint sensor was implemented for system access control, demonstrating successful integration between medical hardware and software.",
      "projects.p1_paper": "📄 View CITCA Paper",
      "projects.details": "View details",
      "projects.p2_title": "E-commerce Backend | Fyndr",
      "projects.p2_desc": "E-commerce platform for hiring technical services and trades.",
      "projects.p2_bullet1": "Designed and implemented the backend architecture using Java and Spring Boot.",
      "projects.p2_bullet2": "Developed efficient REST APIs for user management and transaction logic.",
      "projects.p2_bullet3": "Collaborated actively in a team of 6 people under SCRUM methodology (dailies).",
      "projects.p2_bullet4": "Integrated endpoints with Vite frontend, ensuring optimal high-speed data flow.",
      "projects.p2_detail": "MVC architecture with Spring Boot, implementing design patterns such as Repository and Service Layer. RESTful endpoints were designed with Swagger documentation, JWT authentication, and centralized exception handling. The relational database was designed with MySQL, optimizing queries for high performance.",
      "projects.p3_title": "Hackaton Full-Stack | Kungfu Shop",
      "projects.p3_desc": "Responsive development of online store and version control.",
      "projects.p3_bullet1": "Designed the responsive interface using HTML5, CSS3, and Bootstrap.",
      "projects.p3_bullet2": "Programmed a dynamic JavaScript carousel adaptive to screen size.",
      "projects.p3_bullet3": "Implemented client-side form validation with Regex and real-time alerts.",
      "projects.p3_bullet4": "Coordinated branch integration with Git and resolved merge conflicts.",
      "projects.p3_detail": "Online store developed in a 48-hour hackathon. A pure JavaScript product carousel was implemented, adaptive to different breakpoints. Form validation includes regex patterns for email, phone, and credit card. Version management with Git, resolving conflicts in a multidisciplinary team.",
      "projects.visit": "Visit Site",
      "github.title": "GitHub Activity",
      "github.loading": "Loading repositories...",
      "github.error": "Could not load repositories.",
      "github.updated": "Updated",
      "testimonials.title": "Testimonials",
      "testimonials.t1_quote": "\"Jonathan demonstrates exceptional ability to integrate hardware and software concepts. His scientific paper on biometrics was highlighted at the CITCA congress.\"",
      "testimonials.t1_name": "Dr. Professor ITT",
      "testimonials.t1_role": "Project Advisor — Instituto Tecnológico de Tláhuac",
      "testimonials.t2_quote": "\"On the Fyndr team, Jonathan stood out for his proactivity and ability to design solid backend architectures. He always proposed creative solutions during dailies.\"",
      "testimonials.t2_name": "Team Member",
      "testimonials.t2_role": "Backend Developer — Fyndr Project",
      "testimonials.t3_quote": "\"His ability to solve problems under pressure was key during the hackathon. He coordinated Git branch integration efficiently and we delivered on time.\"",
      "testimonials.t3_name": "Hackathon Partner",
      "testimonials.t3_role": "Full Stack Developer — Kungfu Shop",
      "testimonials.t4_quote": "\"Jonathan combines an analytical engineering mindset with a developer's creativity. His multidisciplinary profile is exactly what modern companies look for.\"",
      "testimonials.t4_name": "Generation Instructor",
      "testimonials.t4_role": "Java Full Stack Bootcamp — Generation México",
      "contact.title": "Contact",
      "contact.info_title": "Contact Info",
      "contact.phone": "Phone",
      "contact.email": "Email",
      "contact.location_title": "Location",
      "contact.location_val": "Mexico City, Mexico (Willing to relocate)",
      "contact.form_name": "Name",
      "contact.form_email": "Email Address",
      "contact.form_phone": "Phone Number",
      "contact.form_msg": "Message",
      "contact.form_send": "Send Message",
      "val.name_err": "Name must have at least 3 characters and contain only letters.",
      "val.email_err": "Please enter a valid email address.",
      "val.email_missing_at": "The email must contain an '@' symbol.",
      "val.email_missing_dot": "The email domain is missing a dot (.).",
      "val.email_invalid_domain": "The email domain is not popular (supports gmail, hotmail, outlook, yahoo, icloud, proton, live, zoho).",
      "val.phone_err": "Enter a valid 10-digit phone number (no numbers repeated more than 3 times).",
      "val.msg_err": "The message must be between 30 and 500 characters.",
      "val.send_success": "Message sent successfully!",
      "val.send_error": "Failed to send the message. Please try again.",
      "val.cooldown_err": "Please wait 3 minutes between message submissions.",
      "val.bot_err": "Automated action blocked for security.",
      "footer.text": "Jonathan Daniel Reyes Gordillo. All rights reserved.",
      "terminal.welcome": "Welcome to JD's terminal. Type 'help' to see available commands.",
      "terminal.help": "Available commands:\n  about    - About me\n  skills   - Technical skills\n  projects - My projects\n  contact  - Contact info\n  theme    - Change theme (mech/dev/default)\n  clear    - Clear terminal\n  exit     - Close terminal",
      "terminal.about": "I'm Jonathan Daniel Reyes Gordillo.\nJunior Java Full Stack Developer & Mechatronics Engineer.\nLocation: Mexico City.\nPassion: Materializing digital ideas into the physical world.",
      "terminal.skills": "Technical skills:\n  ► Java & Spring Boot  ████████░░ 80%\n  ► JavaScript          ███████░░░ 70%\n  ► SQL/MySQL           ████████░░ 80%\n  ► Python              ██████░░░░ 60%\n  ► MATLAB              ███████░░░ 70%\n  ► HTML/CSS            █████████░ 90%\n  ► Git                 ████████░░ 80%\n  ► Node.js             ██████░░░░ 60%",
      "terminal.projects": "Featured projects:\n  1. Medical & Biometric Software (ITT)\n  2. E-commerce Backend - Fyndr (Spring Boot)\n  3. Hackathon Kungfu Shop (Full Stack)\n  Type 'visit 1/2/3' for more.",
      "contact.copy_email": "📋 Copy",
      "contact.copied": "Copied!",
      "terminal.contact": "Contact:\n  Email: reyesgordillojonathandaniel@gmail.com\n  GitHub: github.com/DanielRousse\n  LinkedIn: linkedin.com/in/jonathandrg\n  WhatsApp: wa.me/525561325250",
      "terminal.unknown": "Command not recognized. Type 'help' for commands.",
      "terminal.theme_changed": "Theme changed to: ",
      "terminal.theme_options": "Usage: theme [mech|dev|default]",
      "konami.msg": "🚀 EASTER EGG UNLOCKED! 🚀"
    }
  };

  let currentLang = localStorage.getItem("portfolio-lang") || "es";

  const typedWords = {
    es: ["Jonathan Daniel", "Full Stack Dev", "Ing. Mecatrónico"],
    en: ["Jonathan Daniel", "Full Stack Dev", "Mechatronics Eng"]
  };

  function updateLanguage(lang) {
    currentLang = lang;
    localStorage.setItem("portfolio-lang", lang);

    document.querySelectorAll("[data-i18n]").forEach(element => {
      const key = element.getAttribute("data-i18n");
      if (translations[lang][key]) {
        element.textContent = translations[lang][key];
      }
    });

    document.querySelectorAll("[data-i18n-placeholder]").forEach(element => {
      const key = element.getAttribute("data-i18n-placeholder");
      if (translations[lang][key]) {
        element.setAttribute("placeholder", translations[lang][key]);
      }
    });

    const btnEs = document.getElementById("lang-btn-es");
    const btnEn = document.getElementById("lang-btn-en");
    if (btnEs && btnEn) {
      btnEs.classList.toggle("active", lang === "es");
      btnEn.classList.toggle("active", lang === "en");
    }
  }

  function sanitizeInput(str) {
    if (typeof str !== "string") return "";
    return str.replace(/[&<>"'/]/g, (match) => {
      const escapeMap = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "/": "&#x2F;" };
      return escapeMap[match];
    });
  }

  let alertTimeout = null;

  function showCustomAlert(message, type) {
    const alertEl = document.getElementById("custom-alert");
    const msgEl = document.getElementById("custom-alert-message");
    if (!alertEl || !msgEl) return;
    if (alertTimeout) clearTimeout(alertTimeout);
    msgEl.textContent = message;
    alertEl.className = "custom-alert " + (type === "success" ? "success" : "error");
    alertEl.style.display = "block";
    if (typeof gsap !== "undefined") {
      gsap.fromTo(alertEl, { opacity: 0, y: 50, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.5)" });
    }
    alertTimeout = setTimeout(hideCustomAlert, 5000);
  }

  function hideCustomAlert() {
    const alertEl = document.getElementById("custom-alert");
    if (!alertEl || alertEl.style.display === "none") return;
    if (typeof gsap !== "undefined") {
      gsap.to(alertEl, { opacity: 0, y: 20, scale: 0.9, duration: 0.3, ease: "power2.in", onComplete: () => { alertEl.style.display = "none"; } });
    } else {
      alertEl.style.display = "none";
    }
  }

  function initParticles() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W, H, particles = [];
    const isMobile = !window.matchMedia("(pointer: fine)").matches || window.innerWidth < 768;
    const PARTICLE_COUNT = isMobile ? 30 : 100;
    function resize() { W = canvas.width = canvas.offsetWidth; H = canvas.height = canvas.offsetHeight; }
    const COLORS = ["rgba(255,42,133,", "rgba(0,240,255,", "rgba(254,222,21,"];
    function Particle() {
      this.reset = function () {
        this.x = Math.random() * W; this.y = Math.random() * H;
        this.r = Math.random() * 1.6 + 0.3;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
        this.vx = (Math.random() - 0.5) * 0.4; this.vy = (Math.random() - 0.5) * 0.4;
        this.life = 0; this.maxLife = Math.random() * 300 + 150;
      };
      this.reset();
    }
    for (let i = 0; i < PARTICLE_COUNT; i++) particles.push(new Particle());
    function drawConnections() {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x, dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 100) {
            ctx.beginPath(); ctx.strokeStyle = `rgba(0,240,255,${(1 - dist / 100) * 0.12})`;
            ctx.lineWidth = 0.5; ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y); ctx.stroke();
          }
        }
      }
    }
    function loop() {
      ctx.clearRect(0, 0, W, H);
      if (!isMobile) drawConnections();
      particles.forEach(p => {
        p.x += p.vx; p.y += p.vy; p.life++;
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;
        const lifeRatio = p.life / p.maxLife;
        const fadeAlpha = lifeRatio < 0.1 ? lifeRatio * 10 * p.alpha : lifeRatio > 0.85 ? (1 - lifeRatio) * 6.67 * p.alpha : p.alpha;
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + fadeAlpha + ")"; ctx.fill();
        if (p.life >= p.maxLife) p.reset();
      });
      requestAnimationFrame(loop);
    }
    resize(); loop();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 150); });
  }

  function initTypedEffect() {
    const el = document.getElementById("typed-name");
    if (!el) return;
    let wordIndex = 0, charIndex = 0, deleting = false;
    function tick() {
      const words = typedWords[currentLang] || typedWords.es;
      const word = words[wordIndex];
      if (deleting) {
        charIndex--;
        el.textContent = word.substring(0, charIndex);
        if (charIndex === 0) {
          deleting = false;
          wordIndex = (wordIndex + 1) % words.length;
          setTimeout(tick, 400);
          return;
        }
        setTimeout(tick, 55);
      } else {
        charIndex++;
        el.textContent = word.substring(0, charIndex);
        if (charIndex === word.length) {
          setTimeout(() => { deleting = true; tick(); }, 1800);
          return;
        }
        setTimeout(tick, 95);
      }
    }
    setTimeout(tick, 900);
  }

  function initCounters() {
    const counters = document.querySelectorAll(".stat-number");
    if (!counters.length) return;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        const startTime = performance.now();
        function update(now) {
          const progress = Math.min((now - startTime) / 1800, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = Math.floor(eased * target) + suffix;
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target + suffix;
        }
        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(c => observer.observe(c));
  }

  function initGSAP() {
    if (typeof gsap === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar", { y: -70, opacity: 0, duration: 0.9, ease: "power3.out", delay: 0.1 });

    const heroTl = gsap.timeline({ delay: 0.2 });
    heroTl
      .fromTo(".left-col", { x: "-100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.1, ease: "power3.out" })
      .fromTo(".right-col", { x: "100%", opacity: 0 }, { x: "0%", opacity: 1, duration: 1.1, ease: "power3.out" }, "<")
      .fromTo(".left-col .split-overlay, .right-col .split-overlay", { opacity: 1 }, { opacity: 0.82, duration: 1.0, ease: "power2.out" }, "-=0.5")
      .fromTo(".neon-badge-pink", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, "-=0.5")
      .fromTo(".neon-badge-cyan", { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" }, "<")
      .fromTo(".left-col .split-content h1, .right-col .split-content h1", { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" }, "-=0.2")
      .fromTo(".left-col .split-content p, .right-col .split-content p", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" }, "-=0.4");

    gsap.fromTo("#por-que-las-dos .col-lg-8", { y: 40, opacity: 0 }, { scrollTrigger: { trigger: "#por-que-las-dos", start: "top 92%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.8, ease: "power2.out", clearProps: "transform,opacity" });
    gsap.fromTo(".stats-row .stat-item", { y: 40, opacity: 0 }, { scrollTrigger: { trigger: ".stats-row", start: "top 92%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "back.out(1.5)", clearProps: "transform,opacity" });
    gsap.fromTo(".about-img-block", { x: -60, opacity: 0 }, { scrollTrigger: { trigger: "#sobre-mi", start: "top 90%", toggleActions: "play none none none" }, x: 0, opacity: 1, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity" });
    gsap.fromTo(".about-text-block", { x: 60, opacity: 0 }, { scrollTrigger: { trigger: "#sobre-mi", start: "top 90%", toggleActions: "play none none none" }, x: 0, opacity: 1, duration: 0.9, ease: "power3.out", clearProps: "transform,opacity" });
    gsap.fromTo(".education-block li", { x: -30, opacity: 0 }, { scrollTrigger: { trigger: ".education-block", start: "top 92%", toggleActions: "play none none none" }, x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out", clearProps: "transform,opacity" });
    gsap.fromTo(".skills-block .badge", { scale: 0.6, opacity: 0 }, { scrollTrigger: { trigger: ".skills-block", start: "top 95%", toggleActions: "play none none none" }, scale: 1, opacity: 1, duration: 0.4, stagger: 0.05, ease: "back.out(2)", clearProps: "transform,opacity" });

    gsap.fromTo(".timeline-anim", { y: 40, opacity: 0 }, { scrollTrigger: { trigger: "#timeline", start: "top 90%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.12, ease: "power3.out", clearProps: "transform,opacity" });

    gsap.fromTo(".cert-card-block", { y: 40, opacity: 0 }, { scrollTrigger: { trigger: "#certificaciones", start: "top 90%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power3.out", clearProps: "transform,opacity" });

    gsap.fromTo(".project-card-block", { y: 50, opacity: 0 }, { scrollTrigger: { trigger: "#proyectos", start: "top 90%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", clearProps: "transform,opacity" });

    gsap.fromTo(".contact-info-block", { x: -50, opacity: 0 }, { scrollTrigger: { trigger: "#contacto", start: "top 90%", toggleActions: "play none none none" }, x: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" });
    gsap.fromTo(".contact-form-block", { x: 50, opacity: 0 }, { scrollTrigger: { trigger: "#contacto", start: "top 90%", toggleActions: "play none none none" }, x: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" });

    gsap.fromTo(".testimonial-track-wrapper", { y: 30, opacity: 0 }, { scrollTrigger: { trigger: "#testimonios", start: "top 90%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.8, ease: "power3.out", clearProps: "transform,opacity" });

    gsap.fromTo(".github-card", { y: 40, opacity: 0 }, { scrollTrigger: { trigger: "#github-activity", start: "top 90%", toggleActions: "play none none none" }, y: 0, opacity: 1, duration: 0.7, stagger: 0.12, ease: "power3.out", clearProps: "transform,opacity" });

    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        const nav = document.querySelector(".navbar");
        if (nav) nav.classList.toggle("navbar-scrolled", self.progress > 0);
      }
    });
  }

  function initCardSpotlight() {
    document.querySelectorAll(".card").forEach(card => {
      if (!card.querySelector(".card-spotlight")) {
        const spotlight = document.createElement("div");
        spotlight.classList.add("card-spotlight");
        card.appendChild(spotlight);
      }
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
        card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
      });
    });
  }

  function initPageSpotlight() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = document.createElement("div");
    el.classList.add("page-spotlight");
    document.body.appendChild(el);
    let targetX = 0, targetY = 0, curX = 0, curY = 0;
    window.addEventListener("mousemove", (e) => { targetX = e.clientX; targetY = e.clientY; });
    function animate() {
      curX += (targetX - curX) * 0.08; curY += (targetY - curY) * 0.08;
      el.style.setProperty("--mouse-x", `${curX}px`); el.style.setProperty("--mouse-y", `${curY}px`);
      requestAnimationFrame(animate);
    }
    animate();
  }

  function initActiveNavHighlight() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link[href^='#']");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => { link.classList.toggle("nav-link-active", link.getAttribute("href") === `#${id}`); });
        }
      });
    }, { threshold: 0.45 });
    sections.forEach(s => observer.observe(s));
  }

  function initNavCollapse() {
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        const toggler = document.querySelector(".navbar-toggler");
        const collapseEl = document.getElementById("navbarNav");
        if (toggler && collapseEl && collapseEl.classList.contains("show")) toggler.click();
      });
    });
  }

  function initForm() {
    if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }
    let firstInteractionTime = 0;
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const messageInput = document.getElementById("messageInput");
    [nameInput, emailInput, phoneInput, messageInput].forEach(input => {
      if (!input) return;
      const markFirst = () => { if (!firstInteractionTime) firstInteractionTime = Date.now(); };
      input.addEventListener("focus", markFirst, { once: true });
      input.addEventListener("keydown", markFirst, { once: true });
    });

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (document.getElementById("nicknameInput").value.trim() !== "") { showCustomAlert(translations[currentLang]["val.send_success"], "success"); form.reset(); return; }
      if (!firstInteractionTime || Date.now() - firstInteractionTime < 4000) { showCustomAlert(translations[currentLang]["val.bot_err"], "error"); return; }
      const lastSubmit = localStorage.getItem("last-submit-time");
      if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < 180000) { showCustomAlert(translations[currentLang]["val.cooldown_err"], "error"); return; }

      let isValid = true;
      const nameVal = sanitizeInput(nameInput.value.trim());
      const nameOk = /^[a-zA-ZÀ-ÿ\s]{3,}$/.test(nameVal);
      nameInput.classList.toggle("is-invalid", !nameOk); nameInput.classList.toggle("is-valid", nameOk);
      if (!nameOk) isValid = false;

      const emailVal = sanitizeInput(emailInput.value.trim());
      const emailFeedback = emailInput.nextElementSibling;
      let emailErrKey = "";
      if (!emailVal.includes("@")) { emailErrKey = "val.email_missing_at"; }
      else {
        const domain = emailVal.split("@")[1] || "";
        if (!domain.includes(".")) { emailErrKey = "val.email_missing_dot"; }
        else {
          const popularDomains = ["gmail.com","hotmail.com","outlook.com","yahoo.com","icloud.com","protonmail.com","proton.me","zoho.com","live.com","live.com.mx","yahoo.com.mx","outlook.es","hotmail.es"];
          if (!popularDomains.includes(domain.toLowerCase()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) { emailErrKey = "val.email_invalid_domain"; }
        }
      }
      const emailOk = !emailErrKey;
      emailInput.classList.toggle("is-invalid", !emailOk); emailInput.classList.toggle("is-valid", emailOk);
      if (!emailOk) { if (emailFeedback) { emailFeedback.setAttribute("data-i18n", emailErrKey); emailFeedback.textContent = translations[currentLang][emailErrKey]; } isValid = false; }

      const phoneVal = sanitizeInput(phoneInput.value.trim());
      let digits = phoneVal.replace(/\D/g, "");
      if (digits.startsWith("52") && digits.length === 12) digits = digits.substring(2);
      const phoneOk = /^[+]?[0-9\s.\-()]+$/.test(phoneVal) && digits.length === 10 && !/((\d)\2{3,})/.test(digits);
      phoneInput.classList.toggle("is-invalid", !phoneOk); phoneInput.classList.toggle("is-valid", phoneOk);
      if (!phoneOk) isValid = false;

      const msgVal = sanitizeInput(messageInput.value.trim());
      const msgOk = msgVal.length >= 30 && msgVal.length <= 500;
      messageInput.classList.toggle("is-invalid", !msgOk); messageInput.classList.toggle("is-valid", msgOk);
      if (!msgOk) isValid = false;
      if (!isValid) return;

      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === "es" ? "Enviando..." : "Sending...";
      const timeInput = document.getElementById("timeInput");
      if (timeInput) timeInput.value = new Date().toLocaleString();

      const doSuccess = () => {
        showCustomAlert(translations[currentLang]["val.send_success"], "success");
        localStorage.setItem("last-submit-time", Date.now().toString());
        form.reset();
        [nameInput, emailInput, phoneInput, messageInput].forEach(i => { if (i) i.classList.remove("is-valid"); });
        firstInteractionTime = 0; submitBtn.disabled = false; submitBtn.textContent = originalText;
      };

      if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
          .then(doSuccess)
          .catch(() => { showCustomAlert(translations[currentLang]["val.send_error"], "error"); })
          .finally(() => { submitBtn.disabled = false; submitBtn.textContent = originalText; });
      } else { doSuccess(); }
    });
  }

  let matrixRain = null;

  function initMatrixRain() {
    const canvas = document.getElementById("matrix-canvas");
    if (!canvas) return { start() {}, stop() {} };
    const ctx = canvas.getContext("2d");
    let animId = null, columns, drops;
    const codeChars = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン0123456789ABCDEFabcdefpublicclassvoidifsaboreturnnewintstringwhileimportconstletvarfunctionasync{}[]();:<>=+*/";
    const fontSize = 14;
    function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; columns = Math.floor(canvas.width / fontSize); drops = new Array(columns).fill(0).map(() => Math.floor(Math.random() * -50)); }
    function draw() {
      ctx.fillStyle = "rgba(0, 0, 0, 0.06)"; ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < drops.length; i++) {
        const char = codeChars[Math.floor(Math.random() * codeChars.length)];
        const brightness = Math.random();
        if (brightness > 0.96) { ctx.fillStyle = "#FFFFFF"; ctx.shadowColor = "#FFFFFF"; ctx.shadowBlur = 8; }
        else if (brightness > 0.82) { ctx.fillStyle = "#00FF41"; ctx.shadowColor = "#00FF41"; ctx.shadowBlur = 4; }
        else { ctx.fillStyle = "rgba(0, 255, 65, " + (0.25 + brightness * 0.5) + ")"; ctx.shadowBlur = 0; }
        ctx.font = fontSize + "px monospace"; ctx.fillText(char, i * fontSize, drops[i] * fontSize); ctx.shadowBlur = 0;
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
      animId = requestAnimationFrame(draw);
    }
    resize();
    let rt; window.addEventListener("resize", () => { clearTimeout(rt); rt = setTimeout(resize, 200); });
    return {
      start() { if (!animId) { resize(); animId = requestAnimationFrame(draw); } },
      stop() { if (animId) { cancelAnimationFrame(animId); animId = null; ctx.clearRect(0, 0, canvas.width, canvas.height); } }
    };
  }

  function createMechBackground() {
    const container = document.getElementById("mech-bg");
    if (!container) return;
    function createGearSVG(teeth, innerR, outerR, color) {
      const ns = "http://www.w3.org/2000/svg";
      const svg = document.createElementNS(ns, "svg"); svg.setAttribute("viewBox", "0 0 100 100"); svg.setAttribute("width", "100%"); svg.setAttribute("height", "100%");
      const points = []; const step = Math.PI / teeth;
      for (let i = 0; i < teeth * 2; i++) { const angle = i * step - Math.PI / 2; const r = i % 2 === 0 ? outerR : innerR; points.push((50 + r * Math.cos(angle)).toFixed(2) + "," + (50 + r * Math.sin(angle)).toFixed(2)); }
      const polygon = document.createElementNS(ns, "polygon"); polygon.setAttribute("points", points.join(" ")); polygon.setAttribute("fill", "rgba(255, 107, 53, 0.04)"); polygon.setAttribute("stroke", color); polygon.setAttribute("stroke-width", "1.4"); polygon.setAttribute("stroke-linejoin", "round");
      const ic = document.createElementNS(ns, "circle"); ic.setAttribute("cx", "50"); ic.setAttribute("cy", "50"); ic.setAttribute("r", String(innerR * 0.45)); ic.setAttribute("fill", "none"); ic.setAttribute("stroke", color); ic.setAttribute("stroke-width", "1.0");
      const hc = document.createElementNS(ns, "circle"); hc.setAttribute("cx", "50"); hc.setAttribute("cy", "50"); hc.setAttribute("r", String(innerR * 0.2)); hc.setAttribute("fill", color); hc.setAttribute("fill-opacity", "0.4");
      svg.appendChild(polygon); svg.appendChild(ic); svg.appendChild(hc); return svg;
    }
    const gears = [
      { size: 280, x: "3%", y: "8%", teeth: 18, speed: 45, reverse: false, color: "rgba(255, 107, 53, 0.55)" },
      { size: 200, x: "72%", y: "52%", teeth: 14, speed: 32, reverse: true, color: "rgba(245, 158, 11, 0.5)" },
      { size: 130, x: "42%", y: "72%", teeth: 10, speed: 25, reverse: false, color: "rgba(239, 68, 68, 0.45)" },
      { size: 320, x: "60%", y: "2%", teeth: 22, speed: 55, reverse: true, color: "rgba(255, 107, 53, 0.4)" },
      { size: 100, x: "12%", y: "62%", teeth: 8, speed: 18, reverse: false, color: "rgba(245, 158, 11, 0.55)" },
      { size: 170, x: "82%", y: "80%", teeth: 12, speed: 38, reverse: true, color: "rgba(255, 107, 53, 0.45)" },
      { size: 90, x: "50%", y: "35%", teeth: 8, speed: 22, reverse: false, color: "rgba(239, 68, 68, 0.5)" }
    ];
    gears.forEach(g => {
      const w = document.createElement("div"); w.className = "mech-gear" + (g.reverse ? " reverse" : "");
      w.style.width = g.size + "px"; w.style.height = g.size + "px"; w.style.left = g.x; w.style.top = g.y; w.style.animationDuration = g.speed + "s";
      w.appendChild(createGearSVG(g.teeth, 30, 45, g.color)); container.appendChild(w);
    });
    [{ left: "0", top: "25%", width: "40%", delay: 0 }, { left: "60%", top: "45%", width: "40%", delay: 1.5 }, { left: "20%", top: "70%", width: "55%", delay: 3 }, { left: "10%", top: "90%", width: "30%", delay: 2 }].forEach(cl => {
      const line = document.createElement("div"); line.className = "mech-circuit-line";
      line.style.left = cl.left; line.style.top = cl.top; line.style.width = cl.width; line.style.animationDelay = cl.delay + "s";
      container.appendChild(line);
    });
  }

  function initImmersiveMode() {
    const leftCol = document.querySelector(".left-col");
    const rightCol = document.querySelector(".right-col");
    if (!leftCol || !rightCol) return;
    let currentTheme = null;

    function activateTheme(theme) {
      if (currentTheme === theme) return;
      document.body.classList.remove("theme-mech", "theme-dev");
      document.body.classList.add(theme);
      currentTheme = theme;
      if (theme === "theme-dev" && matrixRain) matrixRain.start();
      else if (matrixRain) matrixRain.stop();
      if (window.refreshTechRadar) window.refreshTechRadar();
      if (typeof gsap !== "undefined") gsap.fromTo("main", { opacity: 0.92 }, { opacity: 1, duration: 0.4, ease: "power2.out" });
    }

    function deactivateTheme() {
      if (currentTheme === "theme-dev" && matrixRain) matrixRain.stop();
      document.body.classList.remove("theme-mech", "theme-dev");
      currentTheme = null;
      if (window.refreshTechRadar) window.refreshTechRadar();
      if (typeof gsap !== "undefined") gsap.fromTo("main", { opacity: 0.95 }, { opacity: 1, duration: 0.3, ease: "power2.out" });
    }

    leftCol.addEventListener("mouseenter", () => activateTheme("theme-mech"));
    rightCol.addEventListener("mouseenter", () => activateTheme("theme-dev"));

    leftCol.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (currentTheme === "theme-mech") { deactivateTheme(); leftCol.classList.remove("mobile-active"); }
      else { rightCol.classList.remove("mobile-active"); leftCol.classList.add("mobile-active"); activateTheme("theme-mech"); }
    });

    rightCol.addEventListener("click", (e) => {
      if (e.target.closest("a")) return;
      if (currentTheme === "theme-dev") { deactivateTheme(); rightCol.classList.remove("mobile-active"); }
      else { leftCol.classList.remove("mobile-active"); rightCol.classList.add("mobile-active"); activateTheme("theme-dev"); }
    });

    document.addEventListener("click", (e) => {
      if (!e.target.closest("#intro-split") && currentTheme) {
        leftCol.classList.remove("mobile-active");
        rightCol.classList.remove("mobile-active");
        deactivateTheme();
      }
    });
  }

  function initTerminal() {
    const btn = document.getElementById("terminal-btn");
    const modal = document.getElementById("terminal-modal");
    const closeBtn = document.getElementById("terminal-close");
    const output = document.getElementById("terminal-output");
    const input = document.getElementById("terminal-input");
    if (!btn || !modal || !output || !input) return;

    function print(text, cls) {
      const lines = text.split("\n");
      lines.forEach(line => {
        const div = document.createElement("div");
        if (cls) div.className = cls;
        div.textContent = line;
        output.appendChild(div);
      });
      output.scrollTop = output.scrollHeight;
    }

    function printWelcome() {
      print(translations[currentLang]["terminal.welcome"], "cmd-success");
      print("─".repeat(40), "cmd-line");
    }

    btn.addEventListener("click", () => {
      modal.classList.toggle("open");
      if (modal.classList.contains("open")) {
        if (!output.children.length) printWelcome();
        input.focus();
      }
    });

    closeBtn.addEventListener("click", () => { modal.classList.remove("open"); });

    const projectLinks = ["", "https://danielrousse.github.io/BCKEND_FYNDR/", "https://alanhercas.github.io/kungfushop-Hackathon/"];

    input.addEventListener("keydown", (e) => {
      if (e.key !== "Enter") return;
      const cmd = input.value.trim().toLowerCase();
      input.value = "";
      if (!cmd) return;

      print("visitor@jd:~$ " + cmd, "cmd-line");

      if (cmd === "help") { print(translations[currentLang]["terminal.help"]); }
      else if (cmd === "about") { print(translations[currentLang]["terminal.about"]); }
      else if (cmd === "skills") { print(translations[currentLang]["terminal.skills"]); }
      else if (cmd === "projects") { print(translations[currentLang]["terminal.projects"]); }
      else if (cmd === "contact") { print(translations[currentLang]["terminal.contact"]); }
      else if (cmd === "clear") { output.innerHTML = ""; printWelcome(); }
      else if (cmd === "exit") { modal.classList.remove("open"); }
      else if (cmd.startsWith("visit ")) {
        const num = parseInt(cmd.split(" ")[1], 10);
        if (num >= 1 && num <= 3 && projectLinks[num - 1] !== undefined) {
          if (projectLinks[num - 1]) { window.open(projectLinks[num - 1], "_blank"); print("Opening project " + num + "...", "cmd-success"); }
          else { print("This project doesn't have a live link.", "cmd-error"); }
        } else { print("Invalid project number. Use 1, 2, or 3.", "cmd-error"); }
      }
      else if (cmd.startsWith("theme ")) {
        const t = cmd.split(" ")[1];
        if (t === "mech") { document.body.classList.remove("theme-dev"); document.body.classList.add("theme-mech"); if (matrixRain) matrixRain.stop(); print(translations[currentLang]["terminal.theme_changed"] + "mechatronics", "cmd-success"); }
        else if (t === "dev") { document.body.classList.remove("theme-mech"); document.body.classList.add("theme-dev"); if (matrixRain) matrixRain.start(); print(translations[currentLang]["terminal.theme_changed"] + "developer", "cmd-success"); }
        else if (t === "default") { document.body.classList.remove("theme-mech", "theme-dev"); if (matrixRain) matrixRain.stop(); print(translations[currentLang]["terminal.theme_changed"] + "default", "cmd-success"); }
        else { print(translations[currentLang]["terminal.theme_options"], "cmd-error"); }
      }
      else if (cmd === "easter") { triggerKonami(); }
      else { print(translations[currentLang]["terminal.unknown"], "cmd-error"); }
    });
  }

  function initCVDownload() {
    const btn = document.getElementById("btn-cv-download");
    if (!btn) return;
    btn.addEventListener("click", (e) => {
      if (btn.classList.contains("downloading")) return;
      btn.classList.add("downloading");
      const progress = btn.querySelector(".cv-progress");
      if (progress && typeof gsap !== "undefined") {
        gsap.fromTo(progress, { width: "0%" }, { width: "100%", duration: 0.8, ease: "power2.out", onComplete: () => {
          setTimeout(() => { btn.classList.remove("downloading"); gsap.to(progress, { width: "0%", duration: 0.3 }); }, 500);
        }});
      } else {
        setTimeout(() => btn.classList.remove("downloading"), 1000);
      }
    });
  }

  function initDarkLightToggle() {
    const btn = document.getElementById("btn-theme-toggle");
    if (!btn) return;
    let isLight = localStorage.getItem("portfolio-theme-light") === "true";

    function applyLight(val) {
      isLight = val;
      document.body.classList.toggle("theme-light", val);
      btn.textContent = val ? "☀️" : "🌙";
      localStorage.setItem("portfolio-theme-light", val.toString());
      if (window.refreshTechRadar) window.refreshTechRadar();
    }

    if (isLight) applyLight(true);

    btn.addEventListener("click", () => {
      if (document.body.classList.contains("theme-mech") || document.body.classList.contains("theme-dev")) return;
      applyLight(!isLight);
    });
  }

  function initTechRadar() {
    const canvas = document.getElementById("radar-canvas");
    const legendContainer = document.getElementById("tech-legend");
    if (!canvas || !legendContainer) return;

    const skills = [
      { name: "Java", level: 80, color: "#ff2a85" },
      { name: "Spring Boot", level: 80, color: "#ff2a85" },
      { name: "JavaScript", level: 70, color: "#00f0ff" },
      { name: "SQL/MySQL", level: 80, color: "#00f0ff" },
      { name: "HTML/CSS", level: 90, color: "#fede15" },
      { name: "Python", level: 60, color: "#fede15" },
      { name: "Git", level: 80, color: "#ff2a85" },
      { name: "MATLAB", level: 70, color: "#00f0ff" }
    ];

    const ctx = canvas.getContext("2d");
    const cx = 160, cy = 160, maxR = 115;
    const n = skills.length;
    const angleStep = (2 * Math.PI) / n;

    function getRadarColors() {
      if (document.body.classList.contains("theme-light")) {
        return {
          label: "#1a1a2e",
          grid: "rgba(26, 26, 46, 0.16)",
          axis: "rgba(26, 26, 46, 0.12)",
          fill: "rgba(0, 119, 145, 0.18)",
          stroke: "rgba(0, 119, 145, 0.85)"
        };
      } else if (document.body.classList.contains("theme-dev")) {
        return {
          label: "#00FF41",
          grid: "rgba(0, 255, 65, 0.2)",
          axis: "rgba(0, 255, 65, 0.15)",
          fill: "rgba(0, 255, 65, 0.18)",
          stroke: "rgba(0, 255, 65, 0.9)"
        };
      } else if (document.body.classList.contains("theme-mech")) {
        return {
          label: "#FFB98C",
          grid: "rgba(255, 107, 53, 0.22)",
          axis: "rgba(255, 107, 53, 0.15)",
          fill: "rgba(255, 107, 53, 0.18)",
          stroke: "rgba(255, 107, 53, 0.85)"
        };
      } else {
        return {
          label: "rgba(255, 255, 255, 0.9)",
          grid: "rgba(255, 255, 255, 0.12)",
          axis: "rgba(255, 255, 255, 0.08)",
          fill: "rgba(0, 240, 255, 0.15)",
          stroke: "rgba(0, 240, 255, 0.75)"
        };
      }
    }

    let lastProgress = 0;

    function drawRadar(animProgress) {
      if (typeof animProgress === "number") lastProgress = animProgress;
      else animProgress = lastProgress || 1;

      ctx.clearRect(0, 0, 320, 320);
      const colors = getRadarColors();

      for (let ring = 1; ring <= 4; ring++) {
        const r = (maxR / 4) * ring;
        ctx.beginPath();
        for (let i = 0; i <= n; i++) {
          const angle = i * angleStep - Math.PI / 2;
          const x = cx + r * Math.cos(angle), y = cy + r * Math.sin(angle);
          i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
        }
        ctx.strokeStyle = colors.grid;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let i = 0; i < n; i++) {
        const angle = i * angleStep - Math.PI / 2;
        ctx.beginPath();
        ctx.moveTo(cx, cy);
        ctx.lineTo(cx + maxR * Math.cos(angle), cy + maxR * Math.sin(angle));
        ctx.strokeStyle = colors.axis;
        ctx.stroke();

        const labelR = maxR + 22;
        const lx = cx + labelR * Math.cos(angle), ly = cy + labelR * Math.sin(angle);
        ctx.fillStyle = colors.label;
        ctx.font = "600 11px Outfit, sans-serif";
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";
        ctx.fillText(skills[i].name, lx, ly);
      }

      ctx.beginPath();
      for (let i = 0; i <= n; i++) {
        const idx = i % n;
        const angle = idx * angleStep - Math.PI / 2;
        const r = (skills[idx].level / 100) * maxR * animProgress;
        const x = cx + r * Math.cos(angle), y = cy + r * Math.sin(angle);
        i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
      }
      ctx.fillStyle = colors.fill;
      ctx.fill();
      ctx.strokeStyle = colors.stroke;
      ctx.lineWidth = 2;
      ctx.stroke();

      for (let i = 0; i < n; i++) {
        const angle = i * angleStep - Math.PI / 2;
        const r = (skills[i].level / 100) * maxR * animProgress;
        const x = cx + r * Math.cos(angle), y = cy + r * Math.sin(angle);
        ctx.beginPath();
        ctx.arc(x, y, 4, 0, Math.PI * 2);
        ctx.fillStyle = skills[i].color;
        ctx.fill();
        ctx.strokeStyle = "rgba(0,0,0,0.3)";
        ctx.lineWidth = 1;
        ctx.stroke();
      }
    }

    window.refreshTechRadar = () => drawRadar(1);

    let legendHTML = "";
    skills.forEach(s => {
      legendHTML += `<div class="tech-legend-item">
        <span class="tech-legend-dot" style="background:${s.color}"></span>
        <span class="small text-light-slate" style="min-width:85px">${s.name}</span>
        <div class="tech-legend-bar"><div class="tech-legend-fill" data-level="${s.level}" style="width:0"></div></div>
        <span class="small text-light-slate" style="min-width:35px; text-align:right">${s.level}%</span>
      </div>`;
    });
    legendContainer.innerHTML = legendHTML;

    let animated = false;
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting && !animated) {
          animated = true;
          let progress = 0;
          function animLoop() {
            progress += 0.02;
            if (progress > 1) progress = 1;
            drawRadar(progress);
            if (progress < 1) requestAnimationFrame(animLoop);
          }
          animLoop();
          legendContainer.querySelectorAll(".tech-legend-fill").forEach(bar => {
            setTimeout(() => { bar.style.width = bar.dataset.level + "%"; }, 200);
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.3 });
    observer.observe(canvas);
    drawRadar(0);
  }

  function initGitHubActivity() {
    const container = document.getElementById("github-repos");
    if (!container) return;

    const langColors = {
      Java: "#b07219",
      JavaScript: "#f1e05a",
      HTML: "#e34c26",
      CSS: "#563d7c",
      Python: "#3572A5",
      MATLAB: "#e16737",
      TypeScript: "#3178c6",
      SQL: "#00f0ff"
    };

    function detectLanguage(repo) {
      if (repo.language) return repo.language;
      const name = (repo.name || "").toLowerCase();
      if (name.includes("java")) return "Java";
      if (name.includes("sql") || name.includes("db")) return "SQL";
      if (name.includes("js") || name.includes("script")) return "JavaScript";
      if (name.includes("py")) return "Python";
      if (name.includes("matlab")) return "MATLAB";
      if (name.includes("html") || name.includes("css")) return "HTML/CSS";
      return null;
    }

    fetch("https://api.github.com/users/DanielRousse/repos?sort=updated&per_page=4")
      .then(r => { if (!r.ok) throw new Error(); return r.json(); })
      .then(repos => {
        container.innerHTML = "";
        repos.forEach(repo => {
          const updated = new Date(repo.updated_at).toLocaleDateString(currentLang === "es" ? "es-MX" : "en-US", { year: "numeric", month: "short", day: "numeric" });

          const detectedLang = detectLanguage(repo);
          const langColor = detectedLang ? (langColors[detectedLang] || "#00f0ff") : null;

          let descText = repo.description;
          if (!descText) {
            if (detectedLang) {
              descText = currentLang === "es" ? `Proyecto de código en ${detectedLang}.` : `Code project in ${detectedLang}.`;
            } else {
              descText = currentLang === "es" ? "Repositorio público en GitHub." : "Public GitHub repository.";
            }
          }

          const col = document.createElement("div");
          col.className = "col-lg-3 col-md-6";
          col.innerHTML = `<a href="${repo.html_url}" target="_blank" rel="noopener" class="github-card">
            <h4 class="h6 fw-bold text-white mb-2" style="word-break:break-word">${repo.name}</h4>
            <p class="small text-light-slate mb-3" style="min-height:42px">${descText}</p>
            <div class="d-flex align-items-center gap-3 small text-light-slate">
              ${detectedLang ? `<span class="d-flex align-items-center gap-1"><span class="github-lang-dot" style="background:${langColor}"></span>${detectedLang}</span>` : ""}
              <span>⭐ ${repo.stargazers_count}</span>
            </div>
            <p class="small text-light-slate mt-2 mb-0"><span data-i18n="github.updated">${translations[currentLang]["github.updated"]}</span>: ${updated}</p>
          </a>`;
          container.appendChild(col);
        });
      })
      .catch(() => {
        container.innerHTML = `<div class="col-12 text-center text-light-slate"><p data-i18n="github.error">${translations[currentLang]["github.error"]}</p></div>`;
      });
  }

  function initTestimonialsAutoScroll() {
    const track = document.getElementById("testimonial-track");
    if (!track) return;

    if (!track.dataset.cloned) {
      track.dataset.cloned = "true";
      const originalCards = Array.from(track.children);
      
      const isMobile = window.innerWidth < 768;
      const cardWidth = isMobile ? 290 : 340;
      const gap = 28;
      let singleSetWidth = originalCards.length * (cardWidth + gap);
      track.dataset.singleWidth = singleSetWidth.toString();

      // On mobile (<768px), clone 1 set (2 sets total = 8 cards).
      // On desktop, clone 2 sets (3 sets total = 12 cards).
      const cloneCount = isMobile ? 1 : 2;
      for (let s = 0; s < cloneCount; s++) {
        originalCards.forEach(card => {
          track.appendChild(card.cloneNode(true));
        });
      }
    }

    let paused = false;
    let currentX = 0;
    let animId = null;
    const speed = window.innerWidth < 768 ? 0.6 : 0.85;

    const wrapper = track.parentElement;
    if (wrapper) {
      wrapper.addEventListener("mouseenter", () => { paused = true; });
      wrapper.addEventListener("mouseleave", () => { paused = false; });
      wrapper.addEventListener("touchstart", () => { paused = true; }, { passive: true });
      wrapper.addEventListener("touchend", () => { paused = false; }, { passive: true });
    }

    function step() {
      if (!paused) {
        currentX -= speed;
        const singleSetWidth = parseFloat(track.dataset.singleWidth) || 1472;
        if (Math.abs(currentX) >= singleSetWidth) {
          currentX += singleSetWidth;
        }
        track.style.transform = `translate3d(${currentX}px, 0, 0)`;
      }
      animId = requestAnimationFrame(step);
    }

    if (animId) cancelAnimationFrame(animId);
    animId = requestAnimationFrame(step);
  }

  function initExpandableProjects() {
    document.querySelectorAll(".project-details-toggle").forEach(btn => {
      btn.addEventListener("click", () => {
        const target = document.getElementById(btn.dataset.target);
        if (!target) return;
        const isOpen = target.classList.contains("open");
        target.classList.toggle("open");
        btn.classList.toggle("expanded");
      });
    });
  }

  function initCustomCursor() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const cursor = document.getElementById("custom-cursor");
    if (!cursor) return;

    document.body.classList.add("has-custom-cursor");
    let cx = 0, cy = 0, tx = 0, ty = 0;

    window.addEventListener("mousemove", (e) => { tx = e.clientX; ty = e.clientY; });

    function animate() {
      cx += (tx - cx) * 0.15;
      cy += (ty - cy) * 0.15;
      cursor.style.left = cx + "px";
      cursor.style.top = cy + "px";
      requestAnimationFrame(animate);
    }
    animate();

    document.addEventListener("mouseover", (e) => {
      const hoverable = e.target.closest("a, button, input, textarea, select, .card, .split-col, .stat-card, .badge, .testimonial-card, .github-card");
      cursor.classList.toggle("hovering", !!hoverable);
    });
  }

  let konamiTriggered = false;

  function triggerKonami() {
    if (konamiTriggered) return;
    konamiTriggered = true;

    const overlay = document.getElementById("konami-overlay");
    const textEl = document.getElementById("konami-text");
    if (!overlay || !textEl) return;

    textEl.textContent = translations[currentLang]["konami.msg"];
    overlay.classList.add("active");

    const emojis = ["🚀", "⚡", "🎮", "💻", "🔧", "🎆", "✨", "🌟", "🎉", "🔥"];
    for (let i = 0; i < 30; i++) {
      const p = document.createElement("div");
      p.className = "konami-particle";
      p.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      p.style.left = Math.random() * 100 + "vw";
      p.style.top = Math.random() * 100 + "vh";
      document.body.appendChild(p);

      if (typeof gsap !== "undefined") {
        gsap.fromTo(p,
          { opacity: 1, scale: 0 },
          { opacity: 0, scale: 2 + Math.random() * 2, y: -(100 + Math.random() * 200), x: (Math.random() - 0.5) * 200, rotation: Math.random() * 360, duration: 2 + Math.random(), ease: "power2.out", onComplete: () => p.remove() }
        );
      } else {
        setTimeout(() => p.remove(), 3000);
      }
    }

    if (typeof gsap !== "undefined") {
      gsap.fromTo(overlay, { opacity: 0 }, { opacity: 1, duration: 0.5 });
      gsap.fromTo(textEl, { scale: 0, rotation: -10 }, { scale: 1, rotation: 0, duration: 0.8, ease: "elastic.out(1,0.4)" });
    }

    setTimeout(() => {
      if (typeof gsap !== "undefined") {
        gsap.to(overlay, { opacity: 0, duration: 0.5, onComplete: () => { overlay.classList.remove("active"); konamiTriggered = false; } });
      } else {
        overlay.classList.remove("active");
        konamiTriggered = false;
      }
    }, 3500);
  }

  function initKonamiCode() {
    const sequence = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];
    let pos = 0;
    document.addEventListener("keydown", (e) => {
      if (e.key === sequence[pos] || e.key.toLowerCase() === sequence[pos]) {
        pos++;
        if (pos === sequence.length) { pos = 0; triggerKonami(); }
      } else { pos = 0; }
    });
  }

  function initPreloader() {
    const preloader = document.getElementById("preloader");
    if (!preloader) return;
    const hide = () => {
      preloader.classList.add("hidden");
    };
    if (document.readyState === "complete") {
      setTimeout(hide, 400);
    } else {
      window.addEventListener("load", () => setTimeout(hide, 400));
      setTimeout(hide, 2000);
    }
  }

  function initFloatingCTA() {
    const cta = document.getElementById("cta-float");
    const hero = document.getElementById("inicio");
    if (!cta || !hero) return;

    window.addEventListener("scroll", () => {
      const heroBottom = hero.getBoundingClientRect().bottom;
      if (heroBottom < 100) {
        cta.classList.add("visible");
      } else {
        cta.classList.remove("visible");
      }
    }, { passive: true });
  }

  function initPDFViewerModal() {
    const modalEl = document.getElementById("pdfViewerModal");
    const iframe = document.getElementById("pdfViewerIframe");
    const imgViewer = document.getElementById("modalImageViewer");
    if (!modalEl) return;

    const documentSelector = "a[href$='.pdf'], a[href$='.png'], a[href$='.jpg'], a[href$='.jpeg'], a[href$='.webp']";

    document.querySelectorAll(documentSelector).forEach(link => {
      // Do not intercept the main CV download button if user wants to download public CV
      if (link.getAttribute("download") !== null || link.id === "btn-cv-download") return;

      link.addEventListener("click", (e) => {
        if (e.ctrlKey || e.metaKey || e.shiftKey) return;
        const rawUrl = link.getAttribute("href");
        if (!rawUrl || typeof bootstrap === "undefined") return;

        e.preventDefault();
        const lowerUrl = rawUrl.toLowerCase();
        const isImage = lowerUrl.endsWith(".png") || lowerUrl.endsWith(".jpg") || lowerUrl.endsWith(".jpeg") || lowerUrl.endsWith(".webp");

        if (isImage) {
          if (iframe) {
            iframe.src = "";
            iframe.style.display = "none";
          }
          if (imgViewer) {
            imgViewer.src = rawUrl;
            imgViewer.style.display = "block";
          }
        } else {
          if (imgViewer) {
            imgViewer.src = "";
            imgViewer.style.display = "none";
          }
          if (iframe) {
            const isMobile = window.innerWidth < 768 || !window.matchMedia("(pointer: fine)").matches;
            let finalViewerUrl = rawUrl;

            if (isMobile && window.location.protocol.startsWith("http")) {
              const absoluteUrl = new URL(rawUrl, window.location.href).href;
              finalViewerUrl = `https://docs.google.com/gview?url=${encodeURIComponent(absoluteUrl)}&embedded=true`;
            } else {
              // Hide native browser PDF download/print toolbar
              finalViewerUrl = `${rawUrl}#toolbar=0&navpanes=0&scrollbar=1`;
            }

            iframe.src = finalViewerUrl;
            iframe.style.display = "block";
          }
        }

        const modal = new bootstrap.Modal(modalEl);
        modal.show();
      });
    });

    modalEl.addEventListener("hidden.bs.modal", () => {
      if (iframe) iframe.src = "";
      if (imgViewer) imgViewer.src = "";
    });
  }

  function initThreeJS() {
    const container = document.getElementById("three-canvas-container");
    if (!container) return;

    const isMobile = !window.matchMedia("(pointer: fine)").matches || window.innerWidth < 768;
    if (isMobile) {
      container.innerHTML = `
        <div class="mobile-3d-shapes" aria-hidden="true">
          <div class="mobile-3d-shape"></div>
          <div class="mobile-3d-shape"></div>
          <div class="mobile-3d-shape"></div>
          <div class="mobile-3d-shape"></div>
        </div>
      `;
      return;
    }

    if (typeof THREE === "undefined") {
      window.addEventListener("load", () => { if (typeof THREE !== "undefined") setupThree(); });
      return;
    }
    setupThree();
  }

  function setupThree() {
    const container = document.getElementById("three-canvas-container");
    if (!container || typeof THREE === "undefined") return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const geometry = new THREE.TorusKnotGeometry(8, 2.5, 100, 16);
    const material = new THREE.MeshBasicMaterial({ color: 0x00f0ff, wireframe: true, transparent: true, opacity: 0.35 });
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);

    const geometry2 = new THREE.IcosahedronGeometry(12, 1);
    const material2 = new THREE.MeshBasicMaterial({ color: 0xff2a85, wireframe: true, transparent: true, opacity: 0.15 });
    const mesh2 = new THREE.Mesh(geometry2, material2);
    scene.add(mesh2);

    camera.position.z = 30;

    let mouseX = 0, mouseY = 0;
    window.addEventListener("mousemove", (e) => {
      mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
    });

    function animate() {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.003;
      mesh.rotation.y += 0.005;
      mesh2.rotation.x -= 0.002;
      mesh2.rotation.y -= 0.003;
      mesh.rotation.z = mouseX * 0.3;
      mesh.rotation.x += mouseY * 0.002;
      renderer.render(scene, camera);
    }
    animate();

    let rt;
    window.addEventListener("resize", () => {
      clearTimeout(rt);
      rt = setTimeout(() => {
        camera.aspect = container.clientWidth / container.clientHeight;
        camera.updateProjectionMatrix();
        renderer.setSize(container.clientWidth, container.clientHeight);
      }, 200);
    });
  }

  function enforceHTTPS() {
    if (window.location.protocol === "http:" && window.location.hostname !== "localhost" && window.location.hostname !== "127.0.0.1") {
      window.location.href = window.location.href.replace("http:", "https:");
    }
  }

  function initEmailProtection() {
    const emailEl = document.getElementById("email-obfuscated");
    const copyBtn = document.getElementById("btn-copy-email");
    if (!emailEl) return;

    const user = emailEl.dataset.user;
    const domain = emailEl.dataset.domain;
    if (user && domain) {
      const fullEmail = `${user}@${domain}`;
      emailEl.textContent = fullEmail;
      emailEl.href = `mailto:${fullEmail}`;

      if (copyBtn) {
        copyBtn.addEventListener("click", () => {
          navigator.clipboard.writeText(fullEmail).then(() => {
            showCustomAlert(translations[currentLang]["contact.copied"] || "¡Copiado!", "success");
            copyBtn.textContent = translations[currentLang]["contact.copied"] || "¡Copiado!";
            setTimeout(() => {
              copyBtn.textContent = translations[currentLang]["contact.copy_email"] || "📋 Copiar";
            }, 2500);
          }).catch(() => {
            showCustomAlert(fullEmail, "info");
          });
        });
      }
    }
  }

  document.addEventListener("DOMContentLoaded", () => {
    enforceHTTPS();
    initPreloader();
    initEmailProtection();
    updateLanguage(currentLang);

    document.getElementById("lang-btn-es")?.addEventListener("click", () => updateLanguage("es"));
    document.getElementById("lang-btn-en")?.addEventListener("click", () => updateLanguage("en"));
    document.getElementById("custom-alert-close")?.addEventListener("click", hideCustomAlert);

    initParticles();
    initTypedEffect();
    initCounters();
    initGSAP();
    initCardSpotlight();
    initPageSpotlight();
    initActiveNavHighlight();
    initNavCollapse();
    initForm();
    matrixRain = initMatrixRain();
    createMechBackground();
    initImmersiveMode();
    initTerminal();
    initCVDownload();
    initDarkLightToggle();
    initTechRadar();
    initGitHubActivity();
    initTestimonialsAutoScroll();
    initExpandableProjects();
    initCustomCursor();
    initKonamiCode();
    initThreeJS();
    initFloatingCTA();
    initPDFViewerModal();
  });

})();
