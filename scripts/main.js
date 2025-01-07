// 다국어 번역 로드 및 적용
document.querySelectorAll('.language-selector button').forEach((button) => {
    button.addEventListener('click', (event) => {
        const lang = event.target.getAttribute('data-lang');
        loadTranslation(lang);
    });
});

// 번역 데이터 로드
function loadTranslation(lang) {
    fetch(`translations/${lang}.json`)
        .then((response) => response.json())
        .then((data) => {
            document.getElementById('title').textContent = data.title;
            document.getElementById('subtitle').textContent = data.subtitle;
            document.getElementById('nav-about').textContent = data.nav.about;
            document.getElementById('nav-gallery').textContent = data.nav.gallery;
            document.getElementById('nav-contact').textContent = data.nav.contact;
            document.getElementById('about-title').textContent = data.about.title;
            document.getElementById('about-content').textContent = data.about.content;
            document.getElementById('gallery-title').textContent = data.gallery.title;
            document.getElementById('contact-title').textContent = data.contact.title;
        })
        .catch((error) => console.error('번역 데이터를 로드할 수 없습니다.', error));
}