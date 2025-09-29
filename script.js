const searchBtn = document.querySelector('.search-btn')
const searchInput = document.querySelector('.search-box input')
const cardWrapper = document.querySelector('.content-main__list')

const cardArray = [
    {
        id: 0,
        title: 'Пвх материал 2й сорт (1)',
        price: '170 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 1,
        title: 'Пвх материал 2й сорт (2)',
        price: '171 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 2,
        title: 'Пвх материал 2й сорт (3)',
        price: '172 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 3,
        title: 'Пвх материал 2й сорт (4)',
        price: '173 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 4,
        title: 'Пвх материал 2й сорт (5)',
        price: '174 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    },
    {
        id: 5,
        title: 'Пвх материал 2й сорт (6)',
        price: '175 ₽',
        address: 'Казань, р-н Вахитовский',
        date: '10 июля 11:39',
        img: './image/card-img.png'
    }
]



const render = (cardList) => {
    cardWrapper.innerHTML = ``
    cardList.forEach((item, idx) => {
        cardWrapper.insertAdjacentHTML('beforeend', `
            <a href="/product.html" class="content-main__list-item">
                <div class="content-main__list-item--img">
                    <img src="${item.img}" alt="card-img">
                </div>
                <h5 class="content-main__list-item--title">${item.title}</h5>
                <strong class="content-main__list-item--price">${item.price}</strong>
                <div class="content-main__list-item--desc-box">
                    <span class="content-main__list-item--desc">${item.address}</span>
                    <span class="content-main__list-item--desc">${item.date}</span>
                </div>

            </a>`)
    });
}

const filteredArray = (array, value) => {
    return array.filter((item) => {
        return item.title.includes(value) || item.price.includes(value)
    })
}

cardWrapper.style.justifyContent = 'flex-start'
cardWrapper.style.gap = '30px'

render(cardArray);

searchBtn.addEventListener('click', () => {
    render(filteredArray(cardArray, searchInput.value));
})