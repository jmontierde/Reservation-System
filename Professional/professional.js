let items = document.querySelectorAll('.item-list .item');

items.forEach(item => {
    item.addEventListener('click', () => { 
        document.querySelector('.item.active').classList.remove('active');
        item.classList.add('active');
    })
});