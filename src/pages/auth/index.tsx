import React, { useState } from 'react'
import PasswordIcon from '../../assets/icons/Password'
import MemoUserIcon from '../../assets/icons/UserIcon'
import Input from './component/Input/Input'
import InputGroup from './component/Input/InputGroup'
import Skeleton from 'react-loading-skeleton'
import { Card } from '../../compoents/card'
import { Container } from '../../compoents/container'
import { Button } from '../../compoents/button'
import { useRouter } from 'next/router'
import { useForm } from 'react-hook-form'


type Login = {
	email?: string,
	password?: string
}

const Auth = () => {
	const [loading, setLoading] = useState<boolean>(false);
	const { register, handleSubmit, errors } = useForm<Login>()
	const router = useRouter()

	const handleForm = ({ email, password }: Login) => {
		console.log(errors);
		login({ email, password });
	}

	const login = async ({ email, password }: Login) => {
		setLoading(true);
		const response = await fetch('https://shk-backend.test/api/v1/login', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ email: email, password: password })
		})
		const json = await response.json();
		if (response.status == 200) {
			localStorage.setItem('token', json['access_token'])
			router.push('/dashboard')
			setLoading(false);
		} else if (response.status == 401) {
			setLoading(false);
		}
	}

	return (
		<div className="bg-primary">
			<Container>
				<Card
					color='default'
					size='large'
					customClass='px-12 py-4'
				>
					{!loading ? (
						<form onSubmit={handleSubmit(handleForm)}>
							<div className="title text-center mt-7 font-bold text-2xl">
								Selamat Datang
						   </div>
							<div className="title text-center mt-7 font-bold text-xl">
								Silakan Masukan Username Dan Password
								{errors.email?.type == 'required' && (<p className="text-red-500">Email Tidak Boleh Kosong</p>)}
								{errors.password?.type == 'required' && (<p className="text-red-500" >Password Tidak Boleh Kosong</p>)}
							</div>
							<InputGroup icon={<MemoUserIcon />}>
								<Input type='text' name='email' placeholder="Username Or Email" autoComplete='off' ref={register({ required: true })} />
							</InputGroup>

							<InputGroup icon={<PasswordIcon />}>
								<Input type='password' name='password' placeholder="Password" ref={register({ required: true })} />
							</InputGroup>

							<div className="flex justify-center mb-10 mt-10">
								<Button variant='primary' textVariant='bold' size='xlarge' type='submit'>
									Login
						   		</Button>
							</div>
						</form>
					) : (
							<div className="flex flex-col my-12 space-y-5">
								<span className="font-bold text-2xl">Loading ...</span>
								<Skeleton height={20} width={'20%'} />
								<Skeleton height={50} width={'100%'} />
								<Skeleton height={50} width={'100%'} />
								<Skeleton height={50} width={'20%'} />
							</div>
						)}
				</Card>
			</Container>
		</div>
	)
}

export default Auth
