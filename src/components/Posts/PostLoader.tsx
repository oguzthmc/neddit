import { Box, Skeleton, SkeletonText, Stack } from '@chakra-ui/react';
import React from 'react';

type PostLoaderProps = {};

const PostLoader: React.FC<PostLoaderProps> = () => {
  return (
    <Stack spacing={6}>
      <Box p='10px 10px' boxShadow='lg' bg='white' borderRadius={4}>
        <SkeletonText mt='4' noOfLines={1} width='40' spacing='4' />
        <SkeletonText mt='4' noOfLines={1} spacing='4' />
        <Skeleton mt='4' height='200px' />
      </Box>
      <Box p='10px 10px' boxShadow='lg' bg='white' borderRadius={4}>
        <SkeletonText mt='4' noOfLines={1} width='40' spacing='4' />
        <SkeletonText mt='4' noOfLines={1} spacing='4' />
        <Skeleton mt='4' height='200px' />
      </Box>

    </Stack>
  );
};
export default PostLoader;