import { Box, Image, Text, Flex, Heading} from "@chakra-ui/react";
import { IShow } from "../../../typings/show";
import NextLink from 'next/link';


interface ShowDetailsProps {
  show: IShow;
}

export const ShowCard: React.FC<ShowDetailsProps> = ({ show }) => {
  const { title, average_rating, image_url } = show;
  return (
    <Flex  as={NextLink} href={`/all-shows/${show.id}`} direction='column' marginBottom={3} gap={1} background='gray.50' borderRadius="xl">
      <Box mb={5}>
        <Image src={image_url || "https://via.placeholder.com/200x100"} alt={title} borderRadius="md" objectFit="cover"
          width="100%"
          height="100%"/>
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="md" mb={1} ml={2} color='#1b004c'>
        {title}
        </Heading>
        <Text size="md" mb={1} ml={2} color='#1b004c'>
          {average_rating} / 5
        </Text>
      </Box>
    </Flex>
  );
};