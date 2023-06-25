let photos = ['./img/1.jpg', './img/2.jpg', './img/3.jpg', './img/4.jpg', './img/5.jpg', './img/6.jpg',
'./img/7.jpg','./img/8.jpg', './img/9.jpg', './img/10.jpg'];

function photogalery() {    
    for (let i = 0; i < photos.length; i++) {   
    document.getElementById('photoview').innerHTML += /* html */ `
    <div class="img-container" onclick="openImg(${i})"><img src="${photos[i]}"></div>
    `
    }

}

function openImg(i) {
    document.getElementById('headline').classList.add('hidden');
    document.getElementById('photoview').innerHTML = /* html */ `
    <div class="fullscreen-container"><img src="./icons/x.svg" class="icon" onclick="closeFullScreeenImg()"><img class="fullscreen-img" src=${photos[i]}></div>
    `
}

function closeFullScreeenImg() {
    document.getElementById('headline').classList.remove('hidden');
    document.getElementById('photoview').innerHTML = '';
    photogalery();
}