async function loadTranslations(lang) {
    try {
      const response = await fetch(`translations/${lang}.json`);
      const translations = await response.json();
  
      document.getElementById('title').textContent = translations.title;
      document.getElementById('subtitle').textContent = translations.subtitle;
      document.getElementById('nav-about').textContent = translations.nav.about;
      document.getElementById('nav-gallery').textContent = translations.nav.gallery;
      document.getElementById('nav-contact').textContent = translations.nav.contact;
      document.getElementById('about-title').textContent = translations.about.title;
      document.getElementById('about-content').textContent = translations.about.content;
      document.getElementById('gallery-title').textContent = translations.gallery.title;
      document.getElementById('contact-title').textContent = translations.contact.title;
    } catch (error) {
      console.error('Error loading translations:', error);
    }
  }