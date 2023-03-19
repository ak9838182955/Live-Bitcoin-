import { Badge, Box, Container, HStack, Image, ListItem, Progress, Radio, RadioGroup, Stat, StatArrow, StatHelpText, StatLabel, StatNumber, Text, VStack, WrapItem } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import Loader from './Loader';
import { server } from '../index';
import { useParams } from 'react-router-dom';
import axios from 'axios';





const Coinde = () => {
  const [ Coins , setCoins] = useState([]);
  const [ loading , setLoading] = useState(true);
  const [ error  , seterror] = useState(true);
  const [page , setPage] = useState(1);
  const [ currency , setcurrency]=  useState("usd");
   const params = useParams();


   const currencySymbol = 
    currency === 'inr' ? "₹": currency ==="eur"?"€":"$";
  useEffect(()=>{
    const fen = async() =>{
        try{
        const {data} = await axios.get(`${server}/coins/${params.id}`);
        setCoins(data);
        setLoading(false);
        console.log(data)
        }catch(error){
           seterror(false);
           setLoading(false);
        }

    };
    fen();

 },[params.id]);

  return (
   <>
   (
    <Container maxW={'xl'}>
      {
        loading ? (<Loader />) :
        <>
      

        <RadioGroup value={currency} p={'8'} onChange={setcurrency}>
            <HStack>
                <Radio value={'inr'} >₹</Radio>
                <Radio value={'usd'} >$</Radio>
                <Radio value={'eur'} >€  </Radio>
            </HStack>
        </RadioGroup>

        <VStack spacing={'4'} p='16 ' alignItems={'flex-start'}>
          <Text fontSize={'small'} alignSelf='center'  opacity={0.7}> 
          last updated on {Date().split("G"[0])} </Text>



          <Image  src={Coins.image.large} />
        
          <Stat>
            <StatLabel>{Coins.name}</StatLabel>
            <StatNumber>
              {currencySymbol}
              
              {Coins.market_data.current_price[currency]}
            </StatNumber>

          

          <StatHelpText>
            <StatArrow
              type={
                Coins.market_data.price_change_percentage_24th >0 ? "increase":"decrease"
              } 
              />
              {Coins.market_data.price_change_percentage_24th}%
            
            
          </StatHelpText>
          </Stat>

          <Badge fontSize={'2*1'} bgColor={'blackAlpha.800'} color={'white'}>{`#${Coins.market_cap_rank}`}</Badge>
          

          <Custombar high={`${currencySymbol}${Coins.market_data.high_24h[currency]}`} low={`${currencySymbol}${Coins.market_data.low_24h[currency]}`} />

         <Box  w={'full'} p={4}>
            <Item title={'max supply'} value={Coins.market_data.max_supply} />
            <Item title={'All time low'} value={`${currencySymbol}${Coins.market_data.atl[currency]}`} />
            <Item title={'All time high'}  value={`${currencySymbol}${Coins.market_data.ath[currency]}`}  />
         </Box>


        </VStack>

        
        </>
      }
    </Container>
   )
   </>
  )
}

const Item =({title , value})=>(
  <HStack>
    <text>{title}</text>
    <text>{value}</text>
  </HStack>
)

const Custombar = ({high ,  low}) =>(
<VStack w='full'>
  <Progress value={50} colorScheme={'teal' } w={'full'}></Progress>
  <HStack justifyContent={'space-between'} w={'full'}>
    <Badge children={low} colorScheme={'red'}></Badge>
    <text>24th range</text>
    <Badge children={high} colorScheme={'green'}></Badge>
  </HStack>
</VStack>  
)
export default Coinde;