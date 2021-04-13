

//Menu////////////////
document.addEventListener("DOMContentLoaded",function(){
    var button = document.querySelector('.nav-menu-item i');
    var mobile = document.querySelector('.navbar-nav');
    button.addEventListener('click',function(){
        mobile.classList.toggle('active');
    })
})