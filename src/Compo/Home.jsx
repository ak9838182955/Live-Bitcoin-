import { Box, Image ,Text } from '@chakra-ui/react'
import React from 'react'
import ak from '../asset/ak.jpg'
import {motion} from 'framer-motion';

const Home = () => {
  return (
    
    <Box bgColor={'blue.900'} w={'full'} h={'85vh'}>
      <motion.div   style={{
        height:'80vh',
      }}
      animate={{
        translateY:'20px'
      }}
      transition={{duration:2,repeatType:'reverse',repeat:'Infinity'
      }}>
      <Image w={'full'}  objectFit={'contain'}  src={ak}/>
      </motion.div>
      <Text fontSize={'6*1'} textAlign={'center'} fontWeight={'thin'} color={'whiteAlpha.700'}></Text>

    </Box>
  )
}

export default Home