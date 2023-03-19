import { HStack , Button} from '@chakra-ui/react'

import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <HStack p={4} shadow={"base"} bgColor={"blue.900"} >
      <Button variant={"unstyled"} color={"White"} alignItems={'flex-end'}>
        <Link to="/"  className='bk'>Home</Link>  
        
      </Button>
      <Button variant={"unstyled"} color={"White"} >
        <Link to="/exchanges"    className='bk'>Exchange</Link>  
        
      </Button>
      <Button variant={"unstyled"} color={"White"} >
        <Link to="/coins"    className='bk'>Coin</Link>  
        
      </Button>

    </HStack>
  )
}

export default Header