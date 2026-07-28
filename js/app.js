(function () {
  "use strict";

  const EMAILJS_PUBLIC_KEY = "MOJDTide_kOvAekcP";
  const EMAILJS_SERVICE_ID = "service_fjn1uuf";
  const EMAILJS_TEMPLATE_ID = "template_9u0x0ne";

  /* ── TRANSLATIONS ──────────────────────────────────────────────── */
  const translations = {
    es: {
      "nav.home": "Inicio",
      "nav.about": "Sobre Mí",
      "nav.projects": "Proyectos",
      "nav.contact": "Contacto",
      "intro.mech_title": "Ingeniería Mecatrónica",
      "intro.mech_desc": "Diseño y automatización de sistemas físicos, control técnico y hardware de precisión.",
      "intro.fs_title": "Desarrollo Full Stack",
      "intro.fs_desc": "Construcción de software robusto, arquitecturas web escalables y lógica empresarial eficiente.",
      "intro.why_title": "¿Por qué Ingeniería Mecatrónica & Desarrollo Full Stack?",
      "intro.why_desc": "La combinación de ambas disciplinas me permite comprender y diseñar sistemas tecnológicos de extremo a extremo: desde la interacción directa con sensores y microcontroladores (hardware) hasta la arquitectura en la nube, bases de datos y desarrollo de interfaces de usuario (software). Mi pasión radica en materializar ideas lógicas y digitales en el mundo físico.",
      "about.title": "Sobre Mí",
      "about.desc": "Soy un desarrollador Java Full Stack Jr. e Ingeniero en Mecatrónica que disfruta diseñar la arquitectura detrás de aplicaciones web, resolver problemas lógicos complejos y crear soluciones integrales que conecten el software con el mundo físico. Mi experiencia clave incluye la creación de sistemas de seguridad biométrica, gestión de datos especializados y modelado digital.",
      "about.edu_title": "Formación y Certificaciones",
      "about.edu_item1": "Instituto Tecnológico de Tláhuac (Título en proceso, 2021 - 2026)",
      "about.edu_item2": "Generation México (Abril 2026 - Julio 2026)",
      "about.edu_item3": "Accenture (2026)",
      "about.edu_item4": "Nivel B1",
      "about.skills_title": "Habilidades Técnicas",
      "about.skills_soft_title": "Habilidades Blandas",
      "about.skills_soft_desc": "Trabajo en equipo multidisciplinario, Resolución de problemas complejos, Resiliencia y proactividad, Comunicación y formación efectiva.",
      "projects.title": "Proyectos y Experiencia",
      "projects.p1_title": "Desarrollador de Software | Instituto Tecnológico de Tláhuac",
      "projects.p1_desc": "Desarrollo de software médico y biométrico integrado con hardware.",
      "projects.p1_bullet1": "Aseguré reversibilidad total y fidelidad diagnóstica en imágenes médicas.",
      "projects.p1_bullet2": "Optimicé la seguridad reduciendo errores de autenticación.",
      "projects.p1_bullet3": "Programé e integré la lógica para conectar un sensor de huella dactilar físico en MATLAB.",
      "projects.p1_bullet4": "Co-redacté un artículo científico y expuse resultados en el congreso internacional CITCA.",
      "projects.p2_title": "E-commerce Backend | Fyndr",
      "projects.p2_desc": "Plataforma de comercio electrónico para contratación de servicios y oficios técnicos.",
      "projects.p2_bullet1": "Diseñé e implementé la arquitectura del backend utilizando Java y Spring Boot.",
      "projects.p2_bullet2": "Desarrollé APIs REST eficientes para gestión de usuarios y transacciones.",
      "projects.p2_bullet3": "Colaboré activamente en un equipo de 6 personas bajo metodología SCRUM (dailies).",
      "projects.p2_bullet4": "Integré endpoints con frontend en Vite garantizando alta velocidad de datos.",
      "projects.p3_title": "Hackaton Full-Stack | Kungfu Shop",
      "projects.p3_desc": "Desarrollo responsivo de tienda en línea y control de versiones.",
      "projects.p3_bullet1": "Diseñé la interfaz responsiva utilizando HTML5, CSS3 y Bootstrap.",
      "projects.p3_bullet2": "Programé un carrusel dinámico en JavaScript adaptativo al tamaño de pantalla.",
      "projects.p3_bullet3": "Implementé validación de formularios con Regex y alertas en tiempo real.",
      "projects.p3_bullet4": "Coordiné la integración de ramas con Git y resolví conflictos de fusión.",
      "projects.visit": "Visitar Sitio",
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
      "footer.text": "Jonathan Daniel Reyes Gordillo. Todos los derechos reservados."
    },
    en: {
      "nav.home": "Home",
      "nav.about": "About Me",
      "nav.projects": "Projects",
      "nav.contact": "Contact",
      "intro.mech_title": "Mechatronics Engineering",
      "intro.mech_desc": "Design and automation of physical systems, technical control, and precision hardware development.",
      "intro.fs_title": "Full Stack Development",
      "intro.fs_desc": "Building robust software, scalable web architectures, and efficient business logic.",
      "intro.why_title": "Why Mechatronics Engineering & Full Stack Development?",
      "intro.why_desc": "Combining both disciplines allows me to understand and design end-to-end technological systems: from direct interaction with sensors and microcontrollers (hardware) to cloud architecture, databases, and user interface development (software). My passion lies in materializing logical and digital ideas into the physical world.",
      "about.title": "About Me",
      "about.desc": "I am a Junior Java Full Stack Developer and Mechatronics Engineer who enjoys designing the architecture behind web applications, solving complex logical problems, and creating comprehensive solutions that bridge software with the physical world. My key experience includes biometric security systems, specialized data management, and digital modeling.",
      "about.edu_title": "Education and Certifications",
      "about.edu_item1": "Instituto Tecnológico de Tláhuac (Degree in progress, 2021 - 2026)",
      "about.edu_item2": "Generation México (April 2026 - July 2026)",
      "about.edu_item3": "Accenture (2026)",
      "about.edu_item4": "B1 Level",
      "about.skills_title": "Technical Skills",
      "about.skills_soft_title": "Soft Skills",
      "about.skills_soft_desc": "Multidisciplinary teamwork, Complex problem solving, Resilience and proactivity, Effective communication and training.",
      "projects.title": "Projects & Experience",
      "projects.p1_title": "Software Developer | Instituto Tecnológico de Tláhuac",
      "projects.p1_desc": "Development of medical and biometric software integrated with hardware.",
      "projects.p1_bullet1": "Ensured total reversibility and diagnostic fidelity in medical imaging.",
      "projects.p1_bullet2": "Optimized security by reducing authentication errors.",
      "projects.p1_bullet3": "Programmed and integrated logic to connect a physical fingerprint sensor in MATLAB.",
      "projects.p1_bullet4": "Co-authored a scientific paper and presented results at the CITCA international congress.",
      "projects.p2_title": "E-commerce Backend | Fyndr",
      "projects.p2_desc": "E-commerce platform for hiring technical services and trades.",
      "projects.p2_bullet1": "Designed and implemented the backend architecture using Java and Spring Boot.",
      "projects.p2_bullet2": "Developed efficient REST APIs for user management and transaction logic.",
      "projects.p2_bullet3": "Collaborated actively in a team of 6 people under SCRUM methodology (dailies).",
      "projects.p2_bullet4": "Integrated endpoints with Vite frontend, ensuring optimal high-speed data flow.",
      "projects.p3_title": "Hackaton Full-Stack | Kungfu Shop",
      "projects.p3_desc": "Responsive development of online store and version control.",
      "projects.p3_bullet1": "Designed the responsive interface using HTML5, CSS3, and Bootstrap.",
      "projects.p3_bullet2": "Programmed a dynamic JavaScript carousel adaptive to screen size.",
      "projects.p3_bullet3": "Implemented client-side form validation with Regex and real-time alerts.",
      "projects.p3_bullet4": "Coordinated branch integration with Git and resolved merge conflicts.",
      "projects.visit": "Visit Site",
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
      "footer.text": "Jonathan Daniel Reyes Gordillo. All rights reserved."
    }
  };

  let currentLang = localStorage.getItem("portfolio-lang") || "es";

  /* ── LANGUAGE ──────────────────────────────────────────────────── */
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

  /* ── INPUT SANITIZATION ────────────────────────────────────────── */
  function sanitizeInput(str) {
    if (typeof str !== "string") return "";
    return str.replace(/[&<>"'/]/g, (match) => {
      const escapeMap = {
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "/": "&#x2F;"
      };
      return escapeMap[match];
    });
  }

  /* ── CUSTOM ALERT ──────────────────────────────────────────────── */
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
      gsap.fromTo(alertEl,
        { opacity: 0, y: 50, scale: 0.9 },
        { opacity: 1, y: 0, scale: 1, duration: 0.45, ease: "back.out(1.5)" }
      );
    }

    alertTimeout = setTimeout(hideCustomAlert, 5000);
  }

  function hideCustomAlert() {
    const alertEl = document.getElementById("custom-alert");
    if (!alertEl || alertEl.style.display === "none") return;

    if (typeof gsap !== "undefined") {
      gsap.to(alertEl, {
        opacity: 0, y: 20, scale: 0.9, duration: 0.3, ease: "power2.in",
        onComplete: () => { alertEl.style.display = "none"; }
      });
    } else {
      alertEl.style.display = "none";
    }
  }

  /* ── PARTICLE CANVAS ───────────────────────────────────────────── */
  function initParticles() {
    const canvas = document.getElementById("hero-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let W, H, particles = [], animId;

    function resize() {
      W = canvas.width = canvas.offsetWidth;
      H = canvas.height = canvas.offsetHeight;
    }

    const COLORS = ["rgba(255,42,133,", "rgba(0,240,255,", "rgba(254,222,21,"];

    function Particle() {
      this.reset = function () {
        this.x = Math.random() * W;
        this.y = Math.random() * H;
        this.r = Math.random() * 1.6 + 0.3;
        this.color = COLORS[Math.floor(Math.random() * COLORS.length)];
        this.alpha = Math.random() * 0.5 + 0.1;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.life = 0;
        this.maxLife = Math.random() * 300 + 150;
      };
      this.reset();
    }

    for (let i = 0; i < 100; i++) particles.push(new Particle());

    function drawConnections() {
      const maxDist = 100;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (1 - dist / maxDist) * 0.12;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0,240,255,${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    }

    function loop() {
      ctx.clearRect(0, 0, W, H);
      drawConnections();
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life++;

        // Bounce off edges
        if (p.x < 0 || p.x > W) p.vx *= -1;
        if (p.y < 0 || p.y > H) p.vy *= -1;

        // Fade in/out over lifetime
        const lifeRatio = p.life / p.maxLife;
        const fadeAlpha = lifeRatio < 0.1
          ? lifeRatio * 10 * p.alpha
          : lifeRatio > 0.85
            ? (1 - lifeRatio) * 6.67 * p.alpha
            : p.alpha;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color + fadeAlpha + ")";
        ctx.fill();

        if (p.life >= p.maxLife) p.reset();
      });
      animId = requestAnimationFrame(loop);
    }

    resize();
    loop();

    let resizeTimer;
    window.addEventListener("resize", () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(resize, 150);
    });
  }

  /* ── TYPED TEXT EFFECT ─────────────────────────────────────────── */
  function initTypedEffect() {
    const el = document.getElementById("typed-name");
    if (!el) return;

    const words = ["Jonathan Daniel", "Full Stack Dev", "Mechatronics Eng", "Jonathan Daniel"];
    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;
    let paused = false;

    function tick() {
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
          if (wordIndex === words.length - 1) return; // Stop on last word
          paused = true;
          setTimeout(() => { paused = false; deleting = true; tick(); }, 1800);
          return;
        }
        setTimeout(tick, 95);
      }
    }

    setTimeout(tick, 900);
  }

  /* ── STAT COUNTERS ─────────────────────────────────────────────── */
  function initCounters() {
    const counters = document.querySelectorAll(".stat-number");
    if (!counters.length) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseInt(el.dataset.target, 10);
        const suffix = el.dataset.suffix || "";
        let start = 0;
        const duration = 1800;
        const startTime = performance.now();

        function update(now) {
          const elapsed = now - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease out cubic
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = Math.floor(eased * target);
          el.textContent = value + suffix;
          if (progress < 1) requestAnimationFrame(update);
          else el.textContent = target + suffix;
        }

        requestAnimationFrame(update);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });

    counters.forEach(c => observer.observe(c));
  }

  /* ── GSAP ANIMATIONS ───────────────────────────────────────────── */
  function initGSAP() {
    if (typeof gsap === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    // ── Navbar entrance (no override of ongoing scroll)
    gsap.from(".navbar", {
      y: -70,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out",
      delay: 0.1
    });

    // ── Hero split: slide in from sides simultaneously
    const heroTl = gsap.timeline({ delay: 0.2 });

    heroTl
      .fromTo(".left-col",
        { x: "-100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1.1, ease: "power3.out" }
      )
      .fromTo(".right-col",
        { x: "100%", opacity: 0 },
        { x: "0%", opacity: 1, duration: 1.1, ease: "power3.out" },
        "<"  // start at same time as previous
      )
      .fromTo(".left-col .split-overlay, .right-col .split-overlay",
        { opacity: 1 },
        { opacity: 0.82, duration: 1.0, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(".neon-badge-pink",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
        "-=0.5"
      )
      .fromTo(".neon-badge-cyan",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.5, ease: "back.out(2)" },
        "<"
      )
      .fromTo(".left-col .split-content h1, .right-col .split-content h1",
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.7, stagger: 0.1, ease: "power2.out" },
        "-=0.2"
      )
      .fromTo(".left-col .split-content p, .right-col .split-content p",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power2.out" },
        "-=0.4"
      );

    // ── "Why both" section
    gsap.from("#por-que-las-dos .col-lg-8 > *", {
      scrollTrigger: {
        trigger: "#por-que-las-dos",
        start: "top 88%",
        toggleActions: "play none none none"
      },
      y: 60,
      opacity: 0,
      duration: 0.8,
      stagger: 0.2,
      ease: "power2.out"
    });

    // ── Stats row
    gsap.from(".stats-row .stat-item", {
      scrollTrigger: {
        trigger: ".stats-row",
        start: "top 88%",
        toggleActions: "play none none none"
      },
      y: 40,
      opacity: 0,
      duration: 0.7,
      stagger: 0.15,
      ease: "back.out(1.5)"
    });

    // ── About image
    gsap.from(".about-img-block", {
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: -80,
      rotate: -6,
      opacity: 0,
      duration: 1.0,
      ease: "power3.out"
    });

    // ── About text
    gsap.from(".about-text-block > *", {
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: "power3.out"
    });

    // ── Education items
    gsap.from(".education-block li", {
      scrollTrigger: {
        trigger: ".education-block",
        start: "top 88%",
        toggleActions: "play none none none"
      },
      x: -30,
      opacity: 0,
      duration: 0.6,
      stagger: 0.12,
      ease: "power2.out"
    });

    // ── Skills badges (pop in with stagger)
    gsap.from(".skills-block .badge", {
      scrollTrigger: {
        trigger: ".skills-block",
        start: "top 90%",
        toggleActions: "play none none none"
      },
      scale: 0,
      opacity: 0,
      duration: 0.4,
      stagger: 0.06,
      ease: "back.out(2)"
    });

    // ── Project cards
    gsap.from(".project-card-block", {
      scrollTrigger: {
        trigger: "#proyectos",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      y: 80,
      opacity: 0,
      duration: 0.8,
      stagger: 0.18,
      ease: "power3.out"
    });

    // ── Section titles
    gsap.utils.toArray(".section-title-anim").forEach(el => {
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none none"
        },
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power2.out"
      });
    });

    // ── Contact blocks
    gsap.from(".contact-info-block", {
      scrollTrigger: {
        trigger: "#contacto",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: -80,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });

    gsap.from(".contact-form-block", {
      scrollTrigger: {
        trigger: "#contacto",
        start: "top 85%",
        toggleActions: "play none none none"
      },
      x: 80,
      opacity: 0,
      duration: 0.9,
      ease: "power3.out"
    });

    // ── Navbar scroll shrink
    ScrollTrigger.create({
      start: "top -80",
      onUpdate: (self) => {
        const nav = document.querySelector(".navbar");
        if (nav) {
          nav.classList.toggle("navbar-scrolled", self.progress > 0);
        }
      }
    });
  }

  /* ── CARD SPOTLIGHT ────────────────────────────────────────────── */
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

  /* ── PAGE SPOTLIGHT ────────────────────────────────────────────── */
  function initPageSpotlight() {
    if (!window.matchMedia("(pointer: fine)").matches) return;
    const el = document.createElement("div");
    el.classList.add("page-spotlight");
    document.body.appendChild(el);
    let rafId;
    let targetX = 0, targetY = 0, curX = 0, curY = 0;

    window.addEventListener("mousemove", (e) => {
      targetX = e.clientX;
      targetY = e.clientY;
    });

    function animateSpotlight() {
      curX += (targetX - curX) * 0.08;
      curY += (targetY - curY) * 0.08;
      el.style.setProperty("--mouse-x", `${curX}px`);
      el.style.setProperty("--mouse-y", `${curY}px`);
      rafId = requestAnimationFrame(animateSpotlight);
    }
    animateSpotlight();
  }

  /* ── ACTIVE NAV LINK ON SCROLL ─────────────────────────────────── */
  function initActiveNavHighlight() {
    const sections = document.querySelectorAll("main section[id]");
    const navLinks = document.querySelectorAll(".navbar-nav .nav-link[href^='#']");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          navLinks.forEach(link => {
            link.classList.toggle("nav-link-active", link.getAttribute("href") === `#${id}`);
          });
        }
      });
    }, { threshold: 0.45 });

    sections.forEach(s => observer.observe(s));
  }

  /* ── SMOOTH NAVBAR COLLAPSE ON MOBILE ──────────────────────────── */
  function initNavCollapse() {
    document.querySelectorAll(".navbar-nav .nav-link").forEach(link => {
      link.addEventListener("click", () => {
        const toggler = document.querySelector(".navbar-toggler");
        const collapseEl = document.getElementById("navbarNav");
        if (toggler && collapseEl && collapseEl.classList.contains("show")) {
          toggler.click();
        }
      });
    });
  }

  /* ── FORM LOGIC ────────────────────────────────────────────────── */
  function initForm() {
    if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
    }

    let firstInteractionTime = 0;
    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const messageInput = document.getElementById("messageInput");
    const inputs = [nameInput, emailInput, phoneInput, messageInput];

    inputs.forEach(input => {
      if (!input) return;
      const markFirst = () => { if (!firstInteractionTime) firstInteractionTime = Date.now(); };
      input.addEventListener("focus", markFirst, { once: true });
      input.addEventListener("keydown", markFirst, { once: true });
    });

    const form = document.getElementById("contactForm");
    if (!form) return;

    form.addEventListener("submit", (event) => {
      event.preventDefault();

      // Honeypot check
      if (document.getElementById("nicknameInput").value.trim() !== "") {
        showCustomAlert(translations[currentLang]["val.send_success"], "success");
        form.reset();
        return;
      }

      // Bot timing check
      const elapsed = Date.now() - firstInteractionTime;
      if (!firstInteractionTime || elapsed < 4000) {
        showCustomAlert(translations[currentLang]["val.bot_err"], "error");
        return;
      }

      // Cooldown
      const lastSubmit = localStorage.getItem("last-submit-time");
      if (lastSubmit && Date.now() - parseInt(lastSubmit, 10) < 180000) {
        showCustomAlert(translations[currentLang]["val.cooldown_err"], "error");
        return;
      }

      let isValid = true;

      // Name
      const nameVal = sanitizeInput(nameInput.value.trim());
      const nameOk = /^[a-zA-ZÀ-ÿ\s]{3,}$/.test(nameVal);
      nameInput.classList.toggle("is-invalid", !nameOk);
      nameInput.classList.toggle("is-valid", nameOk);
      if (!nameOk) isValid = false;

      // Email
      const emailVal = sanitizeInput(emailInput.value.trim());
      const emailFeedback = emailInput.nextElementSibling;
      let emailErrKey = "";

      if (!emailVal.includes("@")) {
        emailErrKey = "val.email_missing_at";
      } else {
        const domain = emailVal.split("@")[1] || "";
        if (!domain.includes(".")) {
          emailErrKey = "val.email_missing_dot";
        } else {
          const popularDomains = [
            "gmail.com","hotmail.com","outlook.com","yahoo.com","icloud.com",
            "protonmail.com","proton.me","zoho.com","live.com","live.com.mx",
            "yahoo.com.mx","outlook.es","hotmail.es"
          ];
          if (!popularDomains.includes(domain.toLowerCase()) || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailVal)) {
            emailErrKey = "val.email_invalid_domain";
          }
        }
      }

      const emailOk = !emailErrKey;
      emailInput.classList.toggle("is-invalid", !emailOk);
      emailInput.classList.toggle("is-valid", emailOk);
      if (!emailOk) {
        if (emailFeedback) { emailFeedback.setAttribute("data-i18n", emailErrKey); emailFeedback.textContent = translations[currentLang][emailErrKey]; }
        isValid = false;
      }

      // Phone
      const phoneVal = sanitizeInput(phoneInput.value.trim());
      let digits = phoneVal.replace(/\D/g, "");
      if (digits.startsWith("52") && digits.length === 12) digits = digits.substring(2);
      const phoneOk = /^[+]?[0-9\s.\-()]+$/.test(phoneVal) && digits.length === 10 && !/((\d)\2{3,})/.test(digits);
      phoneInput.classList.toggle("is-invalid", !phoneOk);
      phoneInput.classList.toggle("is-valid", phoneOk);
      if (!phoneOk) isValid = false;

      // Message
      const msgVal = sanitizeInput(messageInput.value.trim());
      const msgOk = msgVal.length >= 30 && msgVal.length <= 500;
      messageInput.classList.toggle("is-invalid", !msgOk);
      messageInput.classList.toggle("is-valid", msgOk);
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
        [nameInput, emailInput, phoneInput, messageInput].forEach(i => { if (i) { i.classList.remove("is-valid"); } });
        firstInteractionTime = 0;
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      };

      if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
          .then(doSuccess)
          .catch(() => { showCustomAlert(translations[currentLang]["val.send_error"], "error"); })
          .finally(() => { submitBtn.disabled = false; submitBtn.textContent = originalText; });
      } else {
        doSuccess();
      }
    });
  }

  /* ── INIT ──────────────────────────────────────────────────────── */
  document.addEventListener("DOMContentLoaded", () => {
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
  });

})();
