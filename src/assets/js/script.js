navContent = document.querySelector('.header-mobile-content');
document.querySelector('.fa-bars').onclick = function(){
    navContent.classList.toggle('active');
}

document.querySelector('.header-mobile-content div').onclick = function(){
    navContent.classList.remove('active');
    window.scroll({
        top: 0, 
        behavior: 'smooth' });
};

document.querySelector('.video_whatch').onclick = function(){
    const video = document.querySelector('.modal');
    video.classList.add('active');
    document.getElementById('video_whatch').src='https://www.youtube.com/embed/LvjgS-JJ3Dk';
};
document.querySelector('.modal').onclick = function(){
    document.getElementById('video_whatch').src='';
    const video = document.querySelector('.modal');
    video.classList.remove('active');
};