import { Box, Image, Text, Flex, Heading} from "@chakra-ui/react";
import { IShow } from "../../typings/show";

interface ShowDetailsProps {
  show: IShow;
}

export const ShowDetails: React.FC<ShowDetailsProps> = ({ show }) => {
  const { title, description, averageRating, imageUrl } = show;
  return (
    <Flex direction='column' marginBottom={6} gap={3} background='gray.50' borderRadius="lg">
      <Box mb={5}>
        <Image src={imageUrl || "https://via.placeholder.com/600x300"} alt={title} borderRadius="lg" />
      </Box>
      <Box mb={5}>
        <Heading as="h2" size="lg" mb={2} color='#3D087B'>
        {title}
        </Heading>
        <Text color='#3D087B'>
          {averageRating} / 5
        </Text>
      </Box>
    </Flex>
  );
};