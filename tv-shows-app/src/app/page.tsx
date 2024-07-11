// pages/index.tsx
'use client'
import { Box, Heading } from "@chakra-ui/react";
import {ShowContainer} from "../components/features/shows/ShowContainer";
import { IShow, IReview } from "../typings/show";
import styles from './page.module.css';

export default function Home() {
    return (
        <main className={styles.main}>
            <Box textAlign="center" py={5} mx={300}>
                <ShowContainer />
            </Box>
        </main>
    );
}