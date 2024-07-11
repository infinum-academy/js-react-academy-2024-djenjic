// pages/index.tsx
'use client'
import { Box, Heading } from "@chakra-ui/react";
import {ShowContainer} from "../components/features/shows/ShowContainer";
import { IShow, IReview } from "../typings/show";
import styles from './page.module.css';

const defaultShow: IShow = {
    title: "Brooklyn Nine-Nine",
    description: "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    averageRating: 0,
    imageUrl: "/images/Brooklyn-Nine-Nine.jpg"
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
            <Box textAlign="center" py={5} mx={300}>
                <ShowDetails show={show} />
                <ShowReviewSection />
                <ShowContainer />
            </Box>
        </main>
    );
}