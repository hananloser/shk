import React from 'react'
import PasswordIcon from '../../assets/icons/Password'
import MemoUserIcon from '../../assets/icons/UserIcon'
import { Button } from '../../compoents/button'
import { Card } from '../../compoents/card'
import { Container } from '../../compoents/container'
import { Input } from './component/Input/Input'
import { InputGroup } from './component/Input/InputGroup'

const Auth = () => {
   return (
      <Container>
         <Card
            color='default'
            size='large'>
               
            <div className="title text-center mt-7 font-bold text-2xl">
               Selamat Datang
				</div>

            <div className="title text-center mt-7 font-bold text-xl">
               Silakan Masukan Username Dan Password
				</div>
            
            <InputGroup icon={<MemoUserIcon />}>
               <Input type='text' name='username' placeholder="Username Or Email" autoComplete='off' />
            </InputGroup>
            
            <InputGroup icon={<PasswordIcon />}>
               <Input type='password' name='password' placeholder="Password" />
            </InputGroup>

            <div className="flex justify-center mb-2">
               <Button variant='primary' onClick={() => alert('Baru Mau Login')} textVariant='bold' size='xlarge'>
                  Login
               </Button>
            </div>
         </Card>
      </Container>
   )
}

export default Auth
