const menuButton = document.getElementById('menuButton');
const menu = document.querySelector('.Buttons');
menuButton.addEventListener('click', function() {
    this.classList.toggle('open');
    menu.classList.toggle('open');
});