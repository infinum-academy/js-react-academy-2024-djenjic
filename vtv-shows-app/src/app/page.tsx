// pages/index.tsx
'use client'
import { Box, Heading } from "@chakra-ui/react";
import ShowDetails from "../components/features/shows/ShowDetails";
import ShowReviewSection from "../components/features/shows/ShowReviewSection";
import { IShow, IReview } from "../typings/show";
import styles from './page.module.css';

const defaultShow: IShow = {
    title: "Brooklyn Nine-Nine",
    description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    averageRating: 0,
    imageUrl: "https://www.crimemuseum.org/wp-content/uploads/2014/05/Brooklyn-Nine-Nine.jpg"
};

let show: IShow = { ...defaultShow }; // Declare show here with default values

const storedReviews = localStorage.getItem("reviews");
if (storedReviews) {
    const reviews: IReview[] = JSON.parse(storedReviews);
    if (reviews.length > 0) {
        const totalRating = reviews.reduce((sum, review) => sum + review.rating, 0);
        const averageRating = totalRating / reviews.length;
        show = { ...defaultShow, averageRating }; // Update show with calculated averageRating
        console.log("Average Rating:", averageRating.toFixed(1));
    } else {
        console.log("No reviews available.");
    }
} else {
    console.log("No reviews found in localStorage.");
}

export default function Home() {
    return (
        <main className={styles.main}>
            <Box textAlign="center" py={10}>
                <Heading>TV Shows APP</Heading>
                <ShowDetails show={show} />
                <ShowReviewSection />
            </Box>
        </main>
    );
}