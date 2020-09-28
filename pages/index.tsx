import Head from 'next/head'
import { Button, Flex, Grid, Heading, Input, Link, Text } from '@chakra-ui/core'
import Devaider from '../components/Devaider'
export default function Home() {
  return (
    <Grid 
    as="main"
    height="100vh"
    templateColumns="1fr 480px 480px 1fr"
    templateRows="1fr 480px 1fr"
    templateAreas="
    ' . . . .'
    ' . logo form .'
    ' . . . .'
    "
    justifyContent="center"
    alignItems="center" >
      <Flex 
      gridArea="logo" flexDir="column" alignItems= "flex-start"
      >
        <img src="/logo.png"/>
        <Heading size="2xl" lineHeight="shorter" marginTop={14}>Faça seu Login na Plataforma</Heading>
      </Flex>
      <Flex
      gridArea="form"
      height="100%"
      backgroundColor="gray.700"
      borderRadius="md"
      flexDir="column"
      alignItems="stretch"
      padding={16}
      >
        <Input 
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="E-mail"
        />
        <Input 
          height="50px"
          backgroundColor="gray.800"
          focusBorderColor="purple.500"
          borderRadius="sm"
          placeholder="Senha"
          marginTop={2}
        />          
        <Link
        alignSelf="flex-start"
        marginTop={2}
        fontSize="md"
        color="purple.600"
        fontWeight="bold"
        _hover={{'color':'purple.500'}}
        >Esqueci Minha Senha</Link>
        <Button
        backgroundColor="purple.500"
        height="50px"
        borderRadius="sm"
        marginTop={6}
        _hover={{'backgroundColor':'purple.600'}}
        >ENTRAR</Button>
        <Text
          textAlign="center"
          fontSize="sm"
          color="gray.300"
          marginTop={6}
        >
          Não tem uma Conta? {" "}
          <Link
            color="purple.600"
            fontWeight="bold"
            _hover={{'color':'purple.500'}}
          >
            Registre-se
          </Link>
        </Text>
        <Devaider />
        <Flex alignItems="center">
          <Text fontSize="sm"> Ou entre com </Text>
          <Button
          height='50px'
          flex='1'
          backgroundColor="gray.600"
          marginLeft={6}
          borderRadius="sm"
          _hover={{backgroundColor: 'purple.500'}}
          >GITHUB</Button>
        </Flex>
      </Flex>
    </Grid>   
  )
}
