// src/components/feature/shows/ShowDetails.tsx
import { Box, Image, Text, Flex, Heading} from "@chakra-ui/react";
import { IShow } from "../../../typings/show";

interface ShowDetailsProps {
  show: IShow;
}

export const ShowDetails: React.FC<ShowDetailsProps> = ({ show }) => {
  const { title, description, average_rating, image_url } = show;
  return (
    <Flex direction='column' marginBottom={6} marginTop={6} gap={3} background='gray.50' borderRadius="lg">
      <Box mb={5}>
        <Image src={image_url || "https://via.placeholder.com/600x300"} alt={title} borderRadius="lg" objectFit="cover"
          width="100%"
          height="100%"/>
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="lg" mb={2} ml={4} color='#1b004c'>
        {title}
        </Heading>
        <Text ml={4} color='#1b004c'>
          {description}
        </Text>
        <Text ml={4}  color='#1b004c'>
          {average_rating} / 5
        </Text>
      </Box>
    </Flex>
  );
};
