    const reviews = [];

    const renderReviews = () => {
        const reviewsContainer = document.getElementById('reviews');
        reviewsContainer.innerHTML = '';
        reviews.forEach(review => {
            const reviewItem = document.createElement('div');
            reviewItem.className = 'review-item';
            reviewItem.innerHTML = `
                <p>${review.text}</p>
                <p>Rating: ${review.rating} / 5</p>
            `;
            reviewsContainer.appendChild(reviewItem);
        });
    };

    document.getElementById('submit-review').addEventListener('click', () => {
        const reviewText = document.getElementById('review-text').value;
        const reviewRating = document.getElementById('review-rating').value;
        
        if (reviewText && reviewRating) {
            reviews.push({
                text: reviewText,
                rating: reviewRating
            });
            renderReviews();
            document.getElementById('review-text').value = '';
            document.getElementById('review-rating').value = '';
        }
    });

    renderReviews();
