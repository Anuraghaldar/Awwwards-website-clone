// category button popup
let category = document.querySelector('.category');
let categoryBtn = document.querySelector('.header-bottom__left-category');

categoryBtn.addEventListener('click', () => {
    if (category.style.display === 'block') {
        category.style.display = 'none';
        document.body.style.overflow = '';

    } else {
        category.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

category.style.display = 'none';

// paltform button popup

let platformPopup = document.querySelector('.Platform-popup ');
let platformPopupBtn = document.querySelector('.header-bottom__left-platform');

platformPopupBtn.addEventListener('click', () => {
    if (platformPopup.style.display === 'block') {
        platformPopup.style.display = 'none';
        document.body.style.overflow = '';

    } else {
        platformPopup.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }
});

platformPopup.style.display = 'none';

// category wise filter 

let radioButtons = document.querySelectorAll('input[type="radio"][name="category-radio"]');
const marketCards = document.querySelectorAll('.market-card');

radioButtons.forEach(radio => {
    radio.addEventListener('change', function() {
        const selectedCategory = this.value.toLowerCase();

        marketCards.forEach(card => {
            const cardCategory = card.querySelector('.market-title__first').textContent.toLowerCase();

            if (selectedCategory === 'all' || cardCategory.includes(selectedCategory)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Reset button filter
const resetButton = document.querySelector('.header-bottom__right-reset');
resetButton.addEventListener('click', function() {

    radioButtons.forEach(radio => {
        radio.checked = false;
    });
    
    marketCards.forEach(card => {
        card.style.display = 'block';
    });
    
    category.style.display = 'none';
});

// outside div then display none

document.addEventListener('click', function(event) {
    if (!categoryBtn.contains(event.target) && !category.contains(event.target)) {
        category.style.display = 'none';
    }
    if (!PlatformPopupBtn.contains(event.target) && !PlatformPopup.contains(event.target)) {
        PlatformPopup.style.display = 'none';
    }
});
