// src/components/feature/shows/ShowDetails.tsx
import { Box, Image, Text } from "@chakra-ui/react";
import { IShow } from "../../../typings/show";

interface ShowDetailsProps {
  show: IShow;
}

const ShowDetails: React.FC<ShowDetailsProps> = ({ show }) => {
  const { title, description, averageRating, imageUrl } = show;
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      overflow="hidden"
      maxW="sm"
      m="auto"
    >
      <Image
        src={imageUrl || "https://via.placeholder.com/600x300"}
        alt={title}
      />
      <Box p="6">
        <Box display="flex" alignItems="baseline">
          <Text
            fontWeight="semibold"
            fontSize="xl"
            textTransform="uppercase"
            ml="2"
          >
            {title}
          </Text>
        </Box>
        <Text mt="1" fontWeight="normal" lineHeight="tight" isTruncated>
          {description}
        </Text>
        <Text mt="2">
          {averageRating !== undefined ? `Average Rating: ${averageRating} / 5` : "No ratings"}
        </Text>
      </Box>
    </Box>
  );
};

export default ShowDetails;
