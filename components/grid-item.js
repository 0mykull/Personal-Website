import { Box, Text, LinkBox, LinkOverlay } from '@chakra-ui/react'
import { Global } from '@emotion/react'

export const GridItem = ({ children, href, title }) => (
  <Box w="100%" textAlign="center">
    <LinkBox 
      cursor="pointer"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
        borderColor: 'teal.400'
      }}
    >
      <LinkOverlay href={href} target="_blank">
        <Text mt={2} fontSize={20} fontWeight="bold">{title}</Text>
      </LinkOverlay>
      <Text fontSize={14} mt={2}>{children}</Text>
    </LinkBox>
  </Box >
)

export const WorkGridItem = ({ children, id, title }) => (
  <Box w="100%" textAlign="center">
    <LinkBox 
      cursor="pointer"
      p={5}
      borderWidth="1px"
      borderRadius="lg"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-5px)',
        boxShadow: 'xl',
        borderColor: 'teal.400'
      }}
    >
      <LinkOverlay href={`https://github.com/0mykull/${id}`} target="_blank">
        <Text mt={2} fontSize={20} fontWeight="bold">
          {title}
        </Text>
      </LinkOverlay>
      <Text fontSize={14} mt={2}>{children}</Text>
    </LinkBox>
  </Box>
)

export const GridItemStyle = () => (
  <Global />
)
