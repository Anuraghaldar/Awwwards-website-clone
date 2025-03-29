const backdrop = document.getElementById('loginBackdrop');
const modal = document.getElementById('loginModal');
const loginBtn = document.querySelector('.nav-right .login');

loginBtn.addEventListener('click', function (e) {
    e.preventDefault();
    backdrop.classList.add('open');
    modal.classList.add('open');
    document.body.style.overflowY = 'hidden';
});

backdrop.addEventListener('click', closeModal);
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
        closeModal();
    }
}); 

function closeModal() {
    backdrop.classList.remove('open');
    modal.classList.remove('open');
    document.body.style.overflowY = '';
}


