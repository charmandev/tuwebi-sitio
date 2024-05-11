function scrollToSection(event) {
    event.preventDefault();
    const nosotrosSection = document.getElementById('nosotros');
    const offsetTop = nosotrosSection.getBoundingClientRect().top + window.pageYOffset;
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({
      top: offsetTop - navbarHeight,
      behavior: 'smooth'
    });
  }