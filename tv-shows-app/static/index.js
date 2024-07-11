    const saveToLocalStorage = (reviews) => {
        localStorage.setItem('reviews', JSON.stringify(reviews));
    }

    const createReviewElement = (review, index) => {
        const reviewItem = document.createElement('div');
        reviewItem.className = 'review-item';
        reviewItem.innerHTML = `
                <p>${review.text}</p>
                <p>Rating: ${review.rating} / 5</p>
                <button class="delete" data-index="${index}">Remove</button>
            `;
    return reviewItem;
    }
    
    
    const reviews = JSON.parse(localStorage.getItem('reviews')) || [];

    const renderReviews = () => {
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = '';
        reviews.forEach((review, index) => {
            const reviewItem = createReviewElement(review, index);
            reviewsContainer.appendChild(reviewItem);
        });
        updateAverageRating();
        addDeleteEventListeners();
    };

    const addDeleteEventListeners = () => {
        const deleteButtons = document.querySelectorAll('button.delete');
        deleteButtons.forEach(button => {
            button.addEventListener('click', (event) => {
                const index = event.target.getAttribute('data-index');
                reviews.splice(index, 1);
                saveToLocalStorage(reviews);
                renderReviews();
            });
        });
    };

    const updateAverageRating = () => {
        if (reviews.length === 0) {
            document.getElementById('average-rating').textContent = 'Average Rating: 0 / 5';
            return;
        }
        const total = reviews.reduce((sum, review) => sum + Number(review.rating), 0);
        const average = (total / reviews.length).toFixed(1);
        document.getElementById('average-rating').textContent = `Average Rating: ${average} / 5`;
    };

    document.getElementById('submit-review').addEventListener('click', () => {
        const reviewText = document.getElementById('review-text').value;
        const reviewRating = document.getElementById('review-rating').value;

        if(reviewRating > 5 || reviewRating < 1 || isNaN(reviewRating)){
            alert('Ocjena mora biti izmedu 1 i 5');
        }
        
        if (reviewText && reviewRating) {
            reviews.push({
                text: reviewText,
                rating: reviewRating
            });
            saveToLocalStorage(reviews);
            renderReviews();
            document.getElementById('review-text').value = '';
            document.getElementById('review-rating').value = '';
        }
    });

    renderReviews();
