import React, { useEffect, useState } from 'react'
import Input from './component/Input/Input';
import Skleton from 'react-loading-skeleton';
import { useForm } from 'react-hook-form'
import { Cookies } from 'react-cookie';
import { AuthToken } from '../../services/auth_token'
import { API } from '../../services/api'
import { Button } from '../../compoents/button';
import MemoShk from '../../assets/icons/Shk';

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
		try {
			setLoading(true);
			const response = await API.post('/api/v1/login', { email, password })
			const json = await response.data;
			await AuthToken.storeToken(json['access_token'])
			setLoading(false);
		} catch (error) {
			setLoading(false)
		}
	}

	return (
		<div className="flex md:justify-between min-h-full">
			<div className="hidden lg:flex" style={{ height: '100vh' }}  >
				<img src="/nozzle.png" height="1024" />
			</div>
			<div className="w-full p-2 lg:w-1/2  mt-32 lg:mt-52">
				<div className="flex justify-center lg:w-1/2 text-2xl font-bold tracking-widest p-4">
					<MemoShk className="text-9xl" />					
				</div>
				<div className="flex justify-center lg:w-1/2 text-4xl mb-10 font-bold">
					<span>Selamat Datang</span>
				</div>
				<form className="flex p-3 flex-col space-y-5" onSubmit={handleSubmit(handleForm)}>
					{!loading ? (
						<>
							<Input name="email" type="email" placeholder="Nama Pengguna" autoComplete="off" variant='widest' ref={register({ required: true })} />
							<Input name="password" type="password" placeholder="Kata Sandi" autoComplete="off" variant='widest' ref={register({ required: true })} />
							<Button type='submit' className="w-full lg:w-1/2 p-12" textVariant="bold" size='large' variant='primary'>
								Masuk
							</Button>
						</>
					) : (
							<>
								<div className="loading w-full lg:w-1/2">
									<Skleton height={50} width={'100%'} />
									<div className="divider my-5"></div>
									<Skleton height={50} width={'100%'} />
								</div>
								<div className="loading w-full lg:w-1/2">
									<Skleton height={50} width={'60%'} />
									<div className="divider my-5"></div>
								</div>
							</>
						)
					}
				</form>
			</div>
		</div>
	)
}

export default Auth
