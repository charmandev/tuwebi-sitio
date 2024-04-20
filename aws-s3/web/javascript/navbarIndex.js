function openNav(){
    document.getElementById("mobile-menu") .style.width = "100%";
}


function closeNav(){
    document.getElementById("mobile-menu") .style.width = "0%";
}


//opcion para que suba a la parte superior

// Archivo: scrollToHome.js
document.querySelector('.logo h2 a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});





