import {
  HStack,
  List,
  ListItem,
  Skeleton,
  SkeletonText,
} from "@chakra-ui/react";

const GenreListSkeleton = () => {
  const data = [1, 2, 3, 4, 5, 6];

  return (
    <List>
      {data.map((data) => (
        <ListItem key={data} paddingY="5px">
          <HStack>
            <Skeleton boxSize="32px" borderRadius={8} />
            <SkeletonText />
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreListSkeleton;
