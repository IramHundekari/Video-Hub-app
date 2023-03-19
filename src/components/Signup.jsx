import React from 'react'
import { Container, Input, VStack, Heading, Button, Text, Avatar } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Signup = () => {
  return (
    <Container maxW={'container.xl'} h={'100vh'} p={'16'}>
      <form>
        <VStack
          alignItems={'stretch'}
          spacing={'8'}
          w={['full','96']}
          m={'auto'}
          my={'16'}
        >
          <Heading>VIDEO HUB</Heading>
          <Avatar alignSelf={'center'} boxSize={'32'}></Avatar>
          <Input
            placeholder={'Email'}
            required
            type={'email'}
            focusBorderColor={'purple.500'}
          />

<Input
            placeholder={'Name'}
            required
            type={'text'}
            focusBorderColor={'purple.500'}
          />

          <Input
            placeholder={'Password'}
            required
            type={'password'}
            focusBorderColor={'purple.500'}
          />
          <Button colorScheme={'purple'} type={'submit'}>
           Sign Up
          </Button>

          <Text textAlign={'right'}>
          Already Signed UP?{' '}
          
          <Button variant={'link'} colorScheme={'purple'}>
            <Link to={'/login'}>Login</Link>
          </Button></Text>
        </VStack>
      </form>
    </Container>
  )
}

export default Signup;
