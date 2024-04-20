function openNav(){
    document.getElementById("mobile-menu") .style.width = "100%";
}


function closeNav(){
    document.getElementById("mobile-menu") .style.width = "0%";
}






document.querySelector('.logo h2 a').addEventListener('click', function(event) {
    event.preventDefault();
    document.getElementById('planes').scrollIntoView({ behavior: 'smooth' });
});