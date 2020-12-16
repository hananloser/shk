import React, { FormEvent, useState } from 'react'
import { Button } from '../../compoents/button'
import { Card } from '../../compoents/card'
import { Container } from '../../compoents/container'
import PasswordIcon from '../../assets/icons/Password'
import MemoUserIcon from '../../assets/icons/UserIcon'
import Input from './component/Input/Input'
import InputGroup from './component/Input/InputGroup'

const Auth = () => {
   const [username, setUsername] = useState<string>();
   const [password, setPassword] = useState<string>();

   const handleForm = (e: FormEvent) => {
      e.preventDefault()
      console.log(username, password);

   }

   return (
      <div className="bg-primary">
         <Container>
            <Card
               color='default'
               size='large'>
               <form onSubmit={handleForm}>
                  <div className="title text-center mt-7 font-bold text-2xl">
                     Selamat Datang
				   </div>
                  <div className="title text-center mt-7 font-bold text-xl">
                     Silakan Masukan Username Dan Password
				   </div>

                  <InputGroup icon={<MemoUserIcon />}>
                     <Input type='text' name='username' placeholder="Username Or Email" autoComplete='off' onChange={(e) => setUsername(e.target.value)} />
                  </InputGroup>

                  <InputGroup icon={<PasswordIcon />}>
                     <Input type='password' name='password' placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
                  </InputGroup>

                  <div className="flex justify-center mb-10 mt-10">
                     <Button variant='primary' textVariant='bold' size='xlarge' type='submit'>
                        Login
               </Button>
                  </div>
               </form>
            </Card>
         </Container>
      </div>
   )
}

export default Auth
