import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Cookies } from 'react-cookie';
import { AuthToken } from '../../services/auth_token'
import { API } from '../../services/api'
import Input from './component/Input/Input';
import { Button } from '../../compoents/button';

type Login = {
	email?: string,
	password?: string
}

const Auth = () => {
	const [loading, setLoading] = useState<boolean>(false);

	const { register, handleSubmit } = useForm<Login>()

	const [token, setToken] = useState<string | null>();

	const cookies = new Cookies()

	const handleForm = ({ email, password }: Login) => {
		login({ email, password });
	}

	useEffect(() => {
		setToken(cookies.get('token'))
	}, [token])

	const login = async ({ email, password }: Login) => {
		setLoading(true);
		const response = await API.post('/api/v1/login', { email, password })
		const json = await response.data;
		if (response.status == 200) {
			await AuthToken.storeToken(json['access_token'])
			setLoading(false);
		} else if (response.status == 401) {
			setLoading(false);
		} else {
			setLoading(false)
		}
	}

	return (
		<div className="flex md:justify-between min-h-full">
			<div className="hidden md:flex" style={{ height: '981px' }}  >
				<img src="/nozzle.png" height="1024" />
			</div>
			<div className="w-full p-2 md:w-1/2 mt-52">
				<div className="bg-gray-300 flex justify-center md:w-1/2 text-2xl font-bold tracking-widest p-4">
					LOGO
				</div>
				<div className="flex justify-center md:w-1/2 text-4xl mb-16 mt-10 font-bold">
					<span>Selamat Datang di SHK</span>
				</div>
				<form className="flex p-3 flex-col space-y-5" onSubmit={handleSubmit(handleForm)}>
					{!loading ? (
						<>
							<Input name="email" type="email" placeholder="Nama Pengguna" autoComplete="off" variant='widest' ref={register({ required: true })} />
							<Input name="password" type="password" placeholder="Kata Sandi" autoComplete="off" variant='widest' />
							<Button type='submit' className="w-full md:w-1/2 p-12" textVariant="bold" size='large' variant='primary'>
								Masuk
							</Button>
						</>
					) : (
							<p>Loading ...</p>
						)
					}
				</form>
			</div>
		</div>
	)
}

export default Auth
