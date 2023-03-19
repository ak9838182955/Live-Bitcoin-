import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { server } from '../index'
import { Container, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react';
import Loader from './Loader';
import Error from './Error';
const Exchanges = () => {


    const [ exchanges , setExchanges] = useState([]);
    const [ loading , setLoading] = useState(true);
    const [ error  , seterror] = useState(true)
 useEffect(()=>{
    const fe = async() =>{
        try{
        const {data} = await axios.get(`${server}/exchanges`);
        setExchanges(data);
        setLoading(false);
        console.log(data)
        }catch(error){
           seterror(false);
           setLoading(false);
        }

    };
    fe();

 },[]);


 //if (error) return <Error message={"Error While Feacting EXCHANGE"} />






  return (<Container  maxWidth={"container.xl"}>

    {
        loading ? (<Loader />) :(
        <>
        <HStack  wrap={"wrap"}>
            {
                exchanges.map((i)=>(
                     
                    <ExchangeCard key = {i.id} name={i.name} img={i.image}  rank ={i.trust_score_rank
                    }  url = {i.url}/>
                ))
            }
        </HStack>
        </>
    )}
    
  </Container>);
};

const  ExchangeCard = ({ key ,name  , img , rank ,url}) =>(

    <a href={url} target={"blank"} rel={'noopener'}>

  <VStack  w={"52"}  h={'200'} marginTop={"10"} shadow={'lg'} borderRadius={"lg"} transition={"all 0.3s"} css={{
    "&:hover":{
        transform:"scale(1.1)"
    }
  }} >

 
   <Image src={img}  w={"10"}  h={"10"}  objectFit={"contain"}   alt={"Exchange"} />
   <Heading size={'md'} noOfLines={1}> {rank} </Heading>
  <Text noOfLines={1}>{name}</Text>
  </VStack>



    </a>
)

 

export default Exchanges;