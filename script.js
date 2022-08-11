const submitBtn = document.querySelector('#submit');
const cardContent1 = document.querySelector('.card-content-1');
const cardContent2 = document.querySelector('.card-content-2');
const ratingBtns = document.querySelectorAll('.r-btn');
const score = document.querySelector('.score')
let starsScore = 3

submitBtn.addEventListener('click', onSubmit);
ratingBtns.forEach( btn => {
    btn.addEventListener('click', handleRatingBtnClick);
})

function onSubmit () {
   cardContent1.classList.add('hide');
   score.textContent = starsScore;
   cardContent2.classList.remove('hide');  
}

function handleRatingBtnClick(event) {
    ratingBtns.forEach(btn => {
        btn.classList.remove('active');
    });

    if (event.target.classList.contains('r-btn')) {
        event.target.classList.add('active');
    } else {
        event.target.parentElement.classList.add('active');
    }
    starsScore = event.target.textContent;
    
}

