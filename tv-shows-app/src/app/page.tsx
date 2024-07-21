// pages/index.tsx
'use client'
import { Box, Heading , Spinner} from "@chakra-ui/react";
import {ShowContainer} from "../components/features/shows/ShowContainer";
import { IShow, IReview } from "../typings/show";
import styles from './page.module.css';
import { useRedirect } from '@/hooks/useRedirect';

export default function Home() {
    const isRunning = useRedirect('/all-shows', true);

	if (isRunning) {
		return <Spinner />;
	}

	return null;
}