let accordionItem = document.querySelectorAll('.accordion--item');


accordionItem.forEach(item => {

    let buttonPlus = item.querySelector('.btn-plus');
    let buttonMinus = item.querySelector('.btn-minus');

    buttonPlus.addEventListener('click', function () {

        buttonPlus.classList.remove('active');
        buttonMinus.classList.add('active');

        item.querySelector('.accordion--item--detail').classList.add('active');

    });

    buttonMinus.addEventListener('click', function () {

        buttonMinus.classList.remove('active');
        buttonPlus.classList.add('active');

        item.querySelector('.accordion--item--detail').classList.remove('active');

    });


    let itemHeader = item.querySelector('.accordion--item--title');

    itemHeader.addEventListener('click', function () {

        console.log('header')

    });


})

