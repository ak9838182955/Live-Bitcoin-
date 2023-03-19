import { Avatar, Box, Stack, VStack , Text } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
  return (
  <Box bgColor={'blue.700'} color={'whiteAlpha.900'} minH={'48'} px={'16'}  py={['16','8']}> 

  <Stack direction={['column' , 'row']} h={'full'} alignItems={'center'}>

    <VStack w={'full'} alignItems={['center', 'flex-start']}>
        <Text  fontWeight={'bold'}>
           About Us
        </Text>
        <Text fontSize={'sm'} mt={['4','0']}>
            we are the best crypto at very cheep price
            
        </Text>

    </VStack>
    <VStack>
     <Avatar boxSize={'28'}mt={['4','0']} ></Avatar>
     <Text>our founder</Text>
    </VStack>

  </Stack>

  </Box>
  )
}

export default Footer