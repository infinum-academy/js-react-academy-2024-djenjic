'use client';
import { getShow } from '@/fetchers/show';
import { Box, Card, CardBody, CardProps, Show } from '@chakra-ui/react';
import { useParams } from 'next/navigation';
import {ShowContainer} from '@/components/features/shows/ShowContainer'
import useSWR from 'swr';

interface IShowDetailsSectionProps extends CardProps {}

export function ShowDetailsSection(props: IShowDetailsSectionProps) {
	const params = useParams();

	const {
		data: showResponse,
		error,
		isLoading,
	} = useSWR(`/api/shows/${params.id}`, () => getShow(params.id as string));

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Ups something went wrong...</div>;
	}

	return (
		<ShowContainer show={showResponse}></ShowContainer>
	);
}