import { ShowsList } from '../../features/shows/ShowsList';
import {IShow} from '../../../typings/show'
import {getAllShows} from '@/fetchers/show'
import { Button, Card, CardBody, CardHeader, CardProps, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface AllShowsSectionProps extends CardProps {}

export const AllShowsSection = (props: AllShowsSectionProps) => {
	const { data: ShowListReponse, error, isLoading } = useSWR('/shows', getAllShows);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Ups something went wrong...</div>;
	}
    

	const showList = ShowListReponse.shows;
	//kako rjesiti problem undefineda kod fetchanja?

	return (
		<Card {...props} background="#1b004c">
			<CardBody>
				<ShowsList ShowList={showList} />
			</CardBody>
		</Card>
	);
};