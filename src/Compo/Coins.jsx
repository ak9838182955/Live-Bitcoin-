import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Link } from 'react-router-dom';
import { Button, Container, Heading, HStack, Image, Radio, RadioGroup, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
const Coins = () => {


    const [ Coins , setCoins] = useState([]);
    const [ loading , setLoading] = useState(true);
    const [ error  , seterror] = useState(true);
    const [page , setPage] = useState(1);
    const [ currency , setcurrency]=  useState("usd");

    const changepage = (page) =>{
        setPage(page);
        setLoading(true);
    }
    const currencySymbol = 
    currency === 'inr' ? "₹": currency ==="eur"?"€":"$";

    const btns = new Array(132).fill(1);
      
 useEffect(()=>{
    const fe = async() =>{
        try{
        const {data} = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        setCoins(data);
        setLoading(false);
        console.log(data)
        }catch(error){
           seterror(false);
           setLoading(false);
        }

    };
    fe();

 },[currency , page]);


 //if (error) return <Error message={"Error While Feacting Coins"} />;






  return (<Container  maxWidth={"container.xl"}>

    {
        loading ? (<Loader />) :(


        <>

        <RadioGroup value={currency} p={'8'} onChange={setcurrency}>
            <HStack>
                <Radio value={'inr'} >₹</Radio>
                <Radio value={'usd'} >$</Radio>
                <Radio value={'eur'} >€  </Radio>
            </HStack>
        </RadioGroup>



        <HStack  wrap={"wrap"}  justifyContent={'space-evenly'}>
            {
                Coins.map((i)=>(
                     
                    <CoinsCard   id={i.id} price={i.current_price} currencySymbol={currencySymbol}  key = {i.id} name={i.name} img={i.image}  symbol ={i.symbol
                    }  
                    />
                ))
            }
        </HStack>
        <HStack w={'full'} overflow={'auto'} p={'8'}>
            {
                btns.map((item , index)=>
    (
           <Button bgColor={'blackAlpha.900'} key={index} color={'white'} onClick={()=>changepage(index+1)}>{index+1}</Button>
 
    ))
            }
        </HStack>

       
        </>
    )}
     
  </Container>);
};

const  CoinsCard = ({ id ,name  , img , symbol ,price , currencySymbol='₹'}) =>(

    <Link to={`/coin/${id}`}  rel={'noopener'}>

  <VStack  w={"52"}  h={'200'} marginTop={"10"} shadow={'lg'} borderRadius={"lg"} transition={"all 0.3s"} css={{
    "&:hover":{
        transform:"scale(1.1)"
    }
  }} >

 
   <Image src={img}  w={"10"}  h={"10"}  objectFit={"contain"}   alt={"Exchange"} />
   <Heading size={'md'} noOfLines={1}> {symbol} </Heading>
  <Text noOfLines={1}>{name}</Text>
  <Text noOfLines={1}>{id}</Text>
  <Text noOfLines={1}>{price ?`${currencySymbol}${price}`:"nan"}</Text>
  </VStack>
  


    </Link>
    
)

 

export default Coins;