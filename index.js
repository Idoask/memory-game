
const cards = document.querySelectorAll('.inner')


let images = [1, 2, 3, 4, 5, 6]
let data = images.concat(images)


// ad images
for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    const back = card.querySelector('.back');
    back.innerHTML = data[i]
    back.id = data[i]
}


let firstCard = null;

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener("click", function () {
        card.classList.add('flipped') // add class name to element
        if (firstCard === null) {
            console.log('first click');
            firstCard = card;
        } else {
            console.log('second click');

            const firstBack = firstCard.querySelector('.back');
            const firstValue = firstBack.id;

            const back = card.querySelector('.back');
            const secondValue = back.id;

            if (firstValue !== secondValue) {
                setTimeout(function () {
                    firstCard.classList.remove('flipped')
                    card.classList.remove('flipped')
                    firstCard = null
                }, 1000)
            } else {
                firstCard = null

            }




        }
    })
}



