const button = document.getElementById('menu');
const sidebar = document.getElementById('navbar');
const active = document.querySelector('.active');

button.addEventListener('click', () => {
    sidebar.classList.toggle('active');
});

function closeSidebar() {
    sidebar.classList.toggle('active');
};