import NextLink from 'next/link';
import Image from 'next/image';
import { Box, Text } from '@chakra-ui/react';
import { Global } from '@emotion/react';

export const GridItemPractice = ({ children, href, title, thumbnail }) => (
  <Box w="100%" align="center" cursor="pointer">
    <NextLink href={href}>
      <Image src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      loading="lazy"
    />
    </NextLink>
    <NextLink href={href}>
      <Text mt={2}>
        {title}
      </Text>
    </NextLink>
    <Text fontSize={14}>{children}</Text>
  </Box>
)

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
        outline-color: 'red';
      }
    `}
  />
)