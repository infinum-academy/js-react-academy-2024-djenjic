import { Box, Image, Text, Flex, Heading} from "@chakra-ui/react";
import { IShow } from "../../../typings/show";
import NextLink from 'next/link';


interface ShowDetailsProps {
  show: IShow;
}

export const ShowCard: React.FC<ShowDetailsProps> = ({ show }) => {
  const { title, averageRating, imageUrl } = show;
  return (
    <Flex  as={NextLink} href={`/all-shows/${show.id}`} direction='column' marginBottom={3} gap={1} background='gray.50' borderRadius="xl">
      <Box mb={5}>
        <Image src={imageUrl || "https://via.placeholder.com/200x100"} alt={title} borderRadius="md" />
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={1} ml={2} color='#1b004c'>
        {title}
        </Heading>
        <Text size="md" mb={1} ml={2} color='#1b004c'>
          {averageRating} / 5
        </Text>
      </Box>
    </Flex>
  );
};