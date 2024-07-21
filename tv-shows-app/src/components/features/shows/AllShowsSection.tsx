//import { getTodoLists } from '@/fetchers/todo';
import { ShowsList } from './ShowsList';
import {IShow} from '../../../typings/show'
import { Button, Card, CardBody, CardHeader, CardProps, Flex, Input } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import useSWR from 'swr';

interface AllShowsSectionProps extends CardProps {}

const mockShows: IShow[] = [
    {
      id: '1',
      title: 'The Great Adventure',
      description: 'A thrilling adventure through the uncharted territories of the world.',
      averageRating: 8.7,
      imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
      reviews: [
        { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
        { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
      ]
    },
    {
      id: '2',
      title: 'Mystery of the Abyss',
      description: 'An intense mystery series set in the depths of the ocean.',
      averageRating: 9.2,
      imageUrl: 'https://example.com/images/mystery-of-the-abyss.jpg',
      reviews: [
        { email: 'Alice Johnson', rating: 10, text: 'Incredible storyline and suspenseful moments.' },
        { email: 'Bob Brown', rating: 8, text: 'Very engaging, but the pacing is a bit slow in the middle.' }
      ]
    },
    {
      id: '3',
      title: 'Space Explorers',
      description: 'Follow a team of astronauts as they explore the far reaches of space.',
      averageRating: 7.5,
      imageUrl: 'https://example.com/images/space-explorers.jpg',
      reviews: [
        { email: 'Emily Davis', rating: 7, text: 'Interesting concept but lacks depth in character development.' },
        { email: 'Michael Wilson', rating: 8, text: 'Great special effects and a solid story.' }
      ]
    },
    {
      id: '4',
      title: 'The Last Kingdom',
      description: 'A historical drama set during the fall of the Viking age.',
      averageRating: 8.9,
      imageUrl: 'https://example.com/images/the-last-kingdom.jpg',
      reviews: [
        { email: 'Sophia Martinez', rating: 9, text: 'Epic historical drama with fantastic performances.' },
        { email: 'James Taylor', rating: 8, text: 'Engaging and well-produced, though some historical inaccuracies.' }
      ]
    },
    {
      id: '5',
      title: 'Future Shock',
      description: 'A sci-fi series about a future society grappling with technological advancements.',
      averageRating: 7.8,
      imageUrl: 'https://example.com/images/future-shock.jpg',
      reviews: [
        { email: 'Olivia Anderson', rating: 8, text: 'Thought-provoking and visually impressive.' },
        { email: 'Liam Moore', rating: 7, text: 'Good concept, but some episodes felt repetitive.' }
      ]
    },
    {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
      {
        id: '1',
        title: 'The Great Adventure',
        description: 'A thrilling adventure through the uncharted territories of the world.',
        averageRating: 8.7,
        imageUrl: 'https://m.media-amazon.com/images/M/MV5BOWE1YWVhNzUtNDI0ZC00OGYzLWIwOTMtYWE1MDIxNDZjMDViXkEyXkFqcGdeQXVyNzc5MjA3OA@@._V1_FMjpg_UY2115_.jpg',
        reviews: [
          { email: 'John Doe', rating: 9, text: 'Amazing show with stunning visuals!' },
          { email: 'Jane Smith', rating: 8, text: 'Great adventure, but the plot could use some work.' }
        ]
      },
  ];

export const AllShowsSection = (props: AllShowsSectionProps) => {
	/*const { data: AllShowsReponse, error, isLoading } = useSWR('/todo-lists', getShowList);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Ups something went wrong...</div>;
	}

	const showList = AllShowsReponse.showList;*/

    const showList = mockShows;

	return (
		<Card {...props} background="#1b004c">
			<CardBody>
				<ShowsList ShowList={showList} />
			</CardBody>
		</Card>
	);
};