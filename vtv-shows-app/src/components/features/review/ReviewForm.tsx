// src/components/features/shows/ReviewForm.tsx
import { useState } from "react";
import { Box, Button, Input, Textarea } from "@chakra-ui/react";

interface Review {
  email: string;
  avatarUrl?: string;
  rating: number;
  comment: string;
}

interface ReviewFormProps {
  addShowReview: (review: Review) => void;
}

const ReviewForm = ({ addShowReview } : ReviewFormProps) => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");

  const handleSubmit = () => {
    const newReview = { email, rating, comment };
    addShowReview(newReview);
    setEmail("");
    setRating(0);
    setComment("");
  };

  return (
    <Box>
      <Input
        placeholder="Your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        mb="2"
      />
      <Input
        placeholder="Rating (0-5)"
        type="number"
        value={rating}
        onChange={(e) => setRating(parseInt(e.target.value))}
        mb="2"
        step="1"
        min="0"
        max="5"
      />
      <Textarea
        placeholder="Your review"
        value={comment}
        onChange={(e) => setComment(e.target.value)}
        mb="2"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};

export default ReviewForm;
