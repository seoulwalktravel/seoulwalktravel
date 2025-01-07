function loadGallery() {
    const galleryContainer = document.querySelector('.image-gallery');
    const images = [
      { src: 'images/gyeongbokgung.jpg', alt: 'Gyeongbokgung Palace' },
      { src: 'images/bukchon.jpg', alt: 'Bukchon Hanok Village' },
      { src: 'images/insadong.jpg', alt: 'Insadong' }
    ];
  
    images.forEach(image => {
      const img = document.createElement('img');
      img.src = image.src;
      img.alt = image.alt;
      galleryContainer.appendChild(img);
    });
  }