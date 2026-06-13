(function () {
  "use strict";

  const EMAILJS_PUBLIC_KEY = "MOJDTide_kOvAekcP";
  const EMAILJS_SERVICE_ID = "service_fjn1uuf";
  const EMAILJS_TEMPLATE_ID = "template_9u0x0ne";

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
      "projects.p3_bullet4": "Coordinó la integración de ramas con Git y resolvió conflictos de fusión.",
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
      if (lang === "es") {
        btnEs.classList.add("active");
        btnEn.classList.remove("active");
      } else {
        btnEn.classList.add("active");
        btnEs.classList.remove("active");
      }
    }
  }

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

  function preventDevTools() {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });

    document.addEventListener("keydown", (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u"))
      ) {
        e.preventDefault();
      }
    });

    setInterval(() => {
      (function () {
        debugger;
      })();
    }, 1000);
  }

  let alertTimeout = null;
  function showCustomAlert(message, type) {
    const alertEl = document.getElementById("custom-alert");
    const msgEl = document.getElementById("custom-alert-message");
    if (!alertEl || !msgEl) return;

    if (alertTimeout) {
      clearTimeout(alertTimeout);
    }

    msgEl.textContent = message;
    alertEl.className = "custom-alert " + (type === "success" ? "success" : "error");
    alertEl.style.display = "block";

    gsap.fromTo(alertEl,
      { opacity: 0, y: 50, scale: 0.9 },
      { opacity: 1, y: 0, scale: 1, duration: 0.4, ease: "back.out(1.5)" }
    );

    alertTimeout = setTimeout(() => {
      hideCustomAlert();
    }, 5000);
  }

  function hideCustomAlert() {
    const alertEl = document.getElementById("custom-alert");
    if (!alertEl || alertEl.style.display === "none") return;
    gsap.to(alertEl, {
      opacity: 0,
      y: 20,
      scale: 0.9,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        alertEl.style.display = "none";
      }
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    updateLanguage(currentLang);
    preventDevTools();

    const btnEs = document.getElementById("lang-btn-es");
    const btnEn = document.getElementById("lang-btn-en");

    if (btnEs) {
      btnEs.addEventListener("click", () => updateLanguage("es"));
    }
    if (btnEn) {
      btnEn.addEventListener("click", () => updateLanguage("en"));
    }

    const closeBtn = document.getElementById("custom-alert-close");
    if (closeBtn) {
      closeBtn.addEventListener("click", hideCustomAlert);
    }

    if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
      emailjs.init({
        publicKey: EMAILJS_PUBLIC_KEY
      });
    }

    let firstInteractionTime = 0;

    const nameInput = document.getElementById("nameInput");
    const emailInput = document.getElementById("emailInput");
    const phoneInput = document.getElementById("phoneInput");
    const messageInput = document.getElementById("messageInput");

    const inputs = [nameInput, emailInput, phoneInput, messageInput];
    inputs.forEach(input => {
      if (input) {
        input.addEventListener("focus", () => {
          if (firstInteractionTime === 0) {
            firstInteractionTime = Date.now();
          }
        }, { once: true });
        input.addEventListener("keydown", () => {
          if (firstInteractionTime === 0) {
            firstInteractionTime = Date.now();
          }
        }, { once: true });
      }
    });

    const form = document.getElementById("contactForm");
    if (form) {
      form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nicknameVal = document.getElementById("nicknameInput").value.trim();
        if (nicknameVal !== "") {
          showCustomAlert(translations[currentLang]["val.send_success"], "success");
          form.reset();
          return;
        }

        const timeElapsed = Date.now() - firstInteractionTime;
        if (firstInteractionTime === 0 || timeElapsed < 4000) {
          showCustomAlert(translations[currentLang]["val.bot_err"], "error");
          return;
        }

        const lastSubmit = localStorage.getItem("last-submit-time");
        if (lastSubmit) {
          const elapsedSinceLast = Date.now() - parseInt(lastSubmit, 10);
          if (elapsedSinceLast < 180000) {
            showCustomAlert(translations[currentLang]["val.cooldown_err"], "error");
            return;
          }
        }

        let isValid = true;

        const nameRaw = nameInput.value.trim();
        const nameVal = sanitizeInput(nameRaw);
        const nameRegex = /^[a-zA-ZÀ-ÿ\s]{3,}$/;
        if (!nameRegex.test(nameVal)) {
          nameInput.classList.add("is-invalid");
          nameInput.classList.remove("is-valid");
          isValid = false;
        } else {
          nameInput.classList.remove("is-invalid");
          nameInput.classList.add("is-valid");
        }

        const emailRaw = emailInput.value.trim();
        const emailVal = sanitizeInput(emailRaw);
        const emailFeedback = emailInput.nextElementSibling;
        let emailErrKey = "";

        if (!emailVal.includes("@")) {
          emailErrKey = "val.email_missing_at";
        } else {
          const parts = emailVal.split("@");
          const domain = parts[1] || "";
          if (!domain.includes(".")) {
            emailErrKey = "val.email_missing_dot";
          } else {
            const popularDomains = [
              "gmail.com", "hotmail.com", "outlook.com", "yahoo.com", "icloud.com",
              "protonmail.com", "proton.me", "zoho.com", "live.com", "live.com.mx", "yahoo.com.mx",
              "outlook.es", "hotmail.es"
            ];
            const isPopular = popularDomains.includes(domain.toLowerCase());
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!isPopular || !emailRegex.test(emailVal)) {
              emailErrKey = "val.email_invalid_domain";
            }
          }
        }

        if (emailErrKey) {
          emailInput.classList.add("is-invalid");
          emailInput.classList.remove("is-valid");
          emailFeedback.setAttribute("data-i18n", emailErrKey);
          emailFeedback.textContent = translations[currentLang][emailErrKey];
          isValid = false;
        } else {
          emailInput.classList.remove("is-invalid");
          emailInput.classList.add("is-valid");
        }

        const phoneRaw = phoneInput.value.trim();
        const phoneVal = sanitizeInput(phoneRaw);
        const phoneRegex = /^[+]?[0-9\s.\-()]+$/;

        let digits = phoneVal.replace(/\D/g, "");
        if (digits.startsWith("52") && digits.length === 12) {
          digits = digits.substring(2);
        }

        const isRepetitive = /(\d)\1{3,}/.test(digits);
        if (!phoneRegex.test(phoneVal) || digits.length !== 10 || isRepetitive) {
          phoneInput.classList.add("is-invalid");
          phoneInput.classList.remove("is-valid");
          isValid = false;
        } else {
          phoneInput.classList.remove("is-invalid");
          phoneInput.classList.add("is-valid");
        }

        const messageRaw = messageInput.value.trim();
        const messageVal = sanitizeInput(messageRaw);
        if (messageVal.length < 30 || messageVal.length > 500) {
          messageInput.classList.add("is-invalid");
          messageInput.classList.remove("is-valid");
          isValid = false;
        } else {
          messageInput.classList.remove("is-invalid");
          messageInput.classList.add("is-valid");
        }

        if (isValid) {
          const submitBtn = form.querySelector("button[type='submit']");
          const originalBtnText = submitBtn.textContent;
          submitBtn.disabled = true;
          submitBtn.textContent = currentLang === "es" ? "Enviando..." : "Sending...";

          const timeInput = document.getElementById("timeInput");
          if (timeInput) {
            timeInput.value = new Date().toLocaleString();
          }

          if (typeof emailjs !== "undefined" && EMAILJS_PUBLIC_KEY !== "YOUR_EMAILJS_PUBLIC_KEY") {
            emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, form)
              .then(() => {
                showCustomAlert(translations[currentLang]["val.send_success"], "success");
                localStorage.setItem("last-submit-time", Date.now().toString());
                form.reset();
                nameInput.classList.remove("is-valid");
                emailInput.classList.remove("is-valid");
                phoneInput.classList.remove("is-valid");
                messageInput.classList.remove("is-valid");
                firstInteractionTime = 0;
              })
              .catch(() => {
                showCustomAlert(translations[currentLang]["val.send_error"], "error");
              })
              .finally(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalBtnText;
              });
          } else {
            showCustomAlert(translations[currentLang]["val.send_success"] + " (Simulación)", "success");
            localStorage.setItem("last-submit-time", Date.now().toString());
            form.reset();
            nameInput.classList.remove("is-valid");
            emailInput.classList.remove("is-valid");
            phoneInput.classList.remove("is-valid");
            messageInput.classList.remove("is-valid");
            firstInteractionTime = 0;
            submitBtn.disabled = false;
            submitBtn.textContent = originalBtnText;
          }
        }
      });
    }

    gsap.registerPlugin(ScrollTrigger);

    gsap.from(".navbar", {
      y: -50,
      opacity: 0,
      duration: 0.8,
      ease: "power2.out"
    });

    const loadTl = gsap.timeline();

    loadTl.fromTo(".left-col",
      { xPercent: -100 },
      { xPercent: 0, duration: 1.2, ease: "power3.out" }
    )
      .fromTo(".right-col",
        { xPercent: 100 },
        { xPercent: 0, duration: 1.2, ease: "power3.out" },
        "-=1.2"
      )
      .from(".split-overlay", {
        opacity: 1,
        duration: 1.4,
        ease: "power2.out"
      }, "-=0.6")
      .from(".split-content", {
        scale: 0.85,
        opacity: 0,
        duration: 1.0,
        stagger: 0.2,
        ease: "back.out(1.4)"
      }, "-=0.8");

    gsap.from("#por-que-las-dos .col-lg-8 > *", {
      scrollTrigger: {
        trigger: "#por-que-las-dos",
        start: "top 95%",
        end: "top 60%",
        scrub: 1
      },
      y: 60,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out"
    });

    gsap.from(".about-img-block", {
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "top 95%",
        end: "top 50%",
        scrub: 1
      },
      x: -120,
      rotate: -10,
      opacity: 0,
      ease: "power2.out"
    });

    gsap.from(".about-text-block > *", {
      scrollTrigger: {
        trigger: "#sobre-mi",
        start: "top 95%",
        end: "top 50%",
        scrub: 1
      },
      x: 120,
      opacity: 0,
      stagger: 0.1,
      ease: "power2.out"
    });

    gsap.from(".education-block li", {
      scrollTrigger: {
        trigger: ".education-block",
        start: "top 90%",
        end: "top 60%",
        scrub: 1
      },
      x: -30,
      opacity: 0,
      stagger: 0.15,
      ease: "power2.out"
    });

    gsap.from(".skills-block .badge", {
      scrollTrigger: {
        trigger: ".skills-block",
        start: "top 90%",
        end: "top 65%",
        scrub: 1
      },
      scale: 0,
      opacity: 0,
      stagger: 0.08,
      ease: "back.out(1.5)"
    });

    gsap.from(".project-card-block", {
      scrollTrigger: {
        trigger: "#proyectos",
        start: "top 90%",
        end: "top 45%",
        scrub: 1
      },
      y: 120,
      scale: 0.85,
      opacity: 0,
      stagger: 0.2,
      ease: "power2.out"
    });

    gsap.from(".contact-info-block", {
      scrollTrigger: {
        trigger: "#contacto",
        start: "top 95%",
        end: "top 60%",
        scrub: 1
      },
      x: -100,
      opacity: 0,
      ease: "power2.out"
    });

    gsap.from(".contact-form-block", {
      scrollTrigger: {
        trigger: "#contacto",
        start: "top 95%",
        end: "top 60%",
        scrub: 1
      },
      x: 100,
      opacity: 0,
      ease: "power2.out"
    });

    document.querySelectorAll(".card").forEach(card => {
      const spotlight = document.createElement("div");
      spotlight.classList.add("card-spotlight");
      card.appendChild(spotlight);
      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
      });
    });

    if (window.matchMedia("(pointer: fine)").matches) {
      const pageSpotlight = document.createElement("div");
      pageSpotlight.classList.add("page-spotlight");
      document.body.appendChild(pageSpotlight);
      window.addEventListener("mousemove", (e) => {
        pageSpotlight.style.setProperty("--mouse-x", `${e.clientX}px`);
        pageSpotlight.style.setProperty("--mouse-y", `${e.clientY}px`);
      });
    }
  });
})();
