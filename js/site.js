(() => {
  const by = (selector) => document.querySelector(selector);
  const all = (selector) => document.querySelectorAll(selector);
  const readPreference = () => {
    try { return localStorage.getItem('portfolio-language'); } catch { return null; }
  };
  const valid = (value) => value === 'es' || value === 'en';
  const initial = new URL(location.href).searchParams.get('lang');
  const copy = {
    es: { brand: 'Portafolio', greeting: 'Hola, me gustaría hablar sobre un proyecto.', empty: 'Completa este campo.', opened: 'Continúa la conversación en el canal que elegiste.' },
    en: { brand: 'Portfolio', greeting: 'Hi, I’d like to discuss a project.', empty: 'Please complete this field.', opened: 'Continue the conversation in your chosen channel.' }
  };
  let language;
  const wa = (number, body) => 'https://wa.me/' + number + '?text=' + encodeURIComponent(body);
  const currentProject = projects.find((project) => project.slug === document.body.dataset.project);
  all('[data-en]').forEach((node) => { node.dataset.es = node.textContent; });
  all('[data-alt-en]').forEach((node) => { node.dataset.altEs = node.alt; });
  const description = by('meta[name="description"]');
  const descriptionEs = description.content;
  const form = by('form');
  const state = by('#form-status');

  function localLink(anchor, lang) {
    const original = anchor.dataset.page;
    const [path, fragment] = original.split('#');
    return path + '?lang=' + lang + (fragment ? '#' + fragment : '');
  }

  function setLanguage(lang) {
    language = lang;
    const brand = config.name.trim() || copy[lang].brand;
    document.documentElement.lang = lang;
    by('[data-nav]').setAttribute('aria-label', lang === 'en' ? 'Main' : 'Principal');
    all('[data-en]').forEach((node) => { node.textContent = node.dataset[lang]; });
    all('[data-alt-en]').forEach((node) => { node.alt = lang === 'en' ? node.dataset.altEn : node.dataset.altEs; });
    all('[data-brand]').forEach((node) => { node.textContent = brand; });
    all('[data-role]').forEach((node) => { node.textContent = config['role_' + lang]; });
    all('[data-page]').forEach((anchor) => { anchor.href = localLink(anchor, lang); });
    all('[data-language]').forEach((anchor) => {
      const url = new URL(location.href);
      url.searchParams.set('lang', anchor.dataset.language);
      anchor.href = url.href;
      if (anchor.dataset.language === lang) anchor.setAttribute('aria-current', 'true');
      else anchor.removeAttribute('aria-current');
    });
    document.title = currentProject ? currentProject.name + ' — ' + brand : brand + ' — ' + config['role_' + lang];
    description.content = (config.name.trim() ? brand + ' · ' : '') + (lang === 'en' ? description.dataset.descriptionEn : descriptionEs);
    by('meta[property="og:title"]').content = document.title;
    by('meta[property="og:description"]').content = description.content;
    by('meta[property="og:locale"]').content = lang === 'en' ? 'en_US' : 'es_ES';
    all('[data-wa]').forEach((anchor) => {
      const contact = config.whatsapp[Number(anchor.dataset.wa)];
      anchor.href = wa(contact.number, copy[lang].greeting);
      anchor.textContent = 'WhatsApp · ' + contact[lang] + ' · ' + contact.display;
    });
    if (form) {
      Array.from(form.elements).forEach((field) => {
        if (field.getAttribute('aria-invalid') === 'true') showError(field, true);
      });
      if (state.textContent) state.textContent = copy[lang].opened;
    }
  }

  function showError(field, invalid) {
    const error = by('#' + field.id + '-error');
    if (!error) return;
    if (invalid) field.setAttribute('aria-invalid', 'true');
    else field.removeAttribute('aria-invalid');
    error.textContent = invalid ? copy[language].empty : '';
  }

  setLanguage(valid(initial) ? initial : valid(readPreference()) ? readPreference() : 'en');
  if (valid(initial)) {
    try { localStorage.setItem('portfolio-language', initial); } catch {}
  }

  all('[data-language]').forEach((anchor) => anchor.addEventListener('click', (event) => {
    if (event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    const lang = anchor.dataset.language;
    try { history.replaceState(null, '', anchor.href); } catch {}
    try { localStorage.setItem('portfolio-language', lang); } catch {}
    setLanguage(lang);
  }));

  if (form) {
    form.hidden = false;
    const fields = [...form.querySelectorAll('[required]')];
    for (const field of fields) {
      const clearError = () => {
        if (field.value.trim()) showError(field, false);
      };
      field.addEventListener('input', clearError);
      field.addEventListener('change', clearError);
    }
    form.addEventListener('submit', (event) => {
      event.preventDefault();
      let firstInvalid;
      for (const field of fields) {
        const invalid = !field.value.trim();
        showError(field, invalid);
        if (invalid && !firstInvalid) firstInvalid = field;
      }
      if (firstInvalid) {
        state.textContent = '';
        firstInvalid.focus();
        return;
      }
      const body = fields.map((field) => {
        const label = field.labels[0].textContent.trim();
        const value = field.selectedOptions ? field.selectedOptions[0].textContent : field.value.trim();
        return label + ': ' + value;
      }).join('\n\n');
      window.open(wa(config.whatsapp[0].number, copy[language].greeting + '\n\n' + body), '_blank', 'noopener,noreferrer');
      state.textContent = copy[language].opened;
    });
  }

  if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('arrived');
        observer.unobserve(entry.target);
      });
    });
    all('[data-reveal]').forEach((node) => observer.observe(node));
  }
})();