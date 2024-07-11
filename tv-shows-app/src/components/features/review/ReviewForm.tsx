import { useState } from "react";
import { 
  Box, 
  Button, 
  Input, 
  Textarea, 
  FormErrorMessage, 
  FormControl,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper
} from "@chakra-ui/react";
import { IReview } from '../../../typings/show';

interface ReviewFormProps {
  addShowReview: (review: IReview) => void;
}

export const ReviewForm = ({ addShowReview }: ReviewFormProps) => {
  const [email, setEmail] = useState("");
  const [rating, setRating] = useState(1);
  const [text, setText] = useState("");
  const [emailError, setEmailError] = useState("");
  const [ratingError, setRatingError] = useState("");

  const validateEmail = (email: string) => {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    setEmail(newEmail);
    if (!validateEmail(newEmail)) {
      setEmailError("Please enter a valid email address");
    } else {
      setEmailError("");
    }
  };

  const handleRatingChange = (valueString: string, valueNumber: number) => {
    if (valueNumber >= 1 && valueNumber <= 5) {
      setRating(valueNumber);
      setRatingError("");
    } else {
      setRatingError("Rating must be a whole number between 1 and 5");
    }
  };

  const handleSubmit = () => {
    if (validateEmail(email) && rating >= 1 && rating <= 5) {
      const review = { email, rating, text };
      addShowReview(review);
      setEmail("");
      setRating(1);
      setText("");
    } else {
      if (!validateEmail(email)) {
        setEmailError("Please enter a valid email address");
      }
      if (rating < 1 || rating > 5) {
        setRatingError("Rating must be a whole number between 1 and 5");
      }
    }
  };

  return (
    <Box>
      <FormControl isInvalid={!!emailError} mb={4}>
        <Input
          placeholder="Your email"
          value={email}
          onChange={handleEmailChange}
          mb="2"
        />
        <FormErrorMessage>{emailError}</FormErrorMessage>
      </FormControl>
      <FormControl isInvalid={!!ratingError} mb={4}>
        <NumberInput
          value={rating}
          onChange={handleRatingChange}
          min={1}
          max={5}
          mb="2"
        >
          <NumberInputField placeholder="Rating (1-5)" />
          <NumberInputStepper background='white'>
            <NumberIncrementStepper />
            <NumberDecrementStepper />
          </NumberInputStepper>
        </NumberInput>
        <FormErrorMessage>{ratingError}</FormErrorMessage>
      </FormControl>
      <Textarea
        placeholder="Your review"
        value={text}
        onChange={(e) => setText(e.target.value)}
        mb="2"
      />
      <Button onClick={handleSubmit}>Submit</Button>
    </Box>
  );
};