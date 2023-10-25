const About = document.getElementById('About');
About.setAttribute('informacion', 'nuevo-componente');
About.addEventListener('click', () => {
  navbarlinks.classList.toggle('active');
});

const Contact = document.getElementById('Contact');

console.log(About);
Contact.addEventListener('click', () => {
    alert('Contacto');
   });
   