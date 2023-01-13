(() => {

    const imgDB = [
        'img/img1.jpeg',
        'img/img2.jpeg',
        'img/img3.jpeg',
        'img/img4.jpeg'
    ];

    const imgList = document.getElementById('imgList');
    const imgContent = document.getElementById('imgContent');
    const alertContent = document.getElementById('alertContent');
    const alertZone = document.getElementById('alertZone');

    const render = () => {
        //TODO add to #imgList images 80*80
        imgList.innerHTML = imgDB.map((value, index) => {
            return `<img src="${value}" alt="picture_${index}">
                `
        }).join('');
        //TODO add to #imgList 'click' event listener
        imgList.addEventListener('click', e => {
            const source = e.target.getAttribute('src');
            if (source){
                imgContent.setAttribute('src', source);
                alertContent.classList.remove('hide');
                alertZone.classList.remove('hide');
            }
        })

        alertZone.addEventListener('click', () => {
            alertContent.classList.add('hide');
            alertZone.classList.add('hide');
        })
        document.querySelector('.close_alert').addEventListener('click', () => {
            alertContent.classList.add('hide');
            alertZone.classList.add('hide');
        })
    }

    render();

})();