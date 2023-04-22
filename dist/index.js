const handleNav= document.getElementById('handle-nav');
const navList= document.getElementById('nav-list');

handleNav.addEventListener('click', () => {
    console.log('click');
    navList.classList.toggle('active');
});