// src/components/features/shows/ShowReviewSection.tsx
import { useState, useEffect } from "react";
import { Box } from "@chakra-ui/react";
import ReviewList from "../review/ReviewList";
import ReviewForm from "../review/ReviewForm";

interface Review {
  email: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
}

const ShowReviewSection = () => {
  // State to hold reviews
  const [reviews, setReviews] = useState<Review[]>([]);

  // Effect to load reviews from local storage on component mount
  useEffect(() => {
    const storedReviews = localStorage.getItem("reviews");
    if (storedReviews) {
      setReviews(JSON.parse(storedReviews));
    }
  }, []);

  // Function to add a new review
  const addShowReview = (review: Review) => {
    const newReviews = [...reviews, review];
    setReviews(newReviews);
    // Save updated reviews to local storage
    localStorage.setItem("reviews", JSON.stringify(newReviews));
  };

  return (
    <Box>
      <ReviewForm addShowReview={addShowReview} />
      <ReviewList reviews={reviews} />
    </Box>
  );
};

export default ShowReviewSection;

