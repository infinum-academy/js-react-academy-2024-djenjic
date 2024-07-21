'use client';
import React from 'react';
import { ShowCard } from './ShowCard';
import { IShow } from '@/typings/show';
import { SimpleGrid} from '@chakra-ui/react';

export interface IShowsListProps{
	ShowList: Array<IShow>;
}

export const ShowsList = ({ ShowList}: IShowsListProps) => {
	return (
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 4 }} spacing={5}>
          {ShowList.map((show, index) => (
            <ShowCard key={index} show={show}/>
          ))}
        </SimpleGrid>
      );
};