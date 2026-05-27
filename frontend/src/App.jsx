import { Route, Routes } from 'react-router-dom';
import './App.css'
import Dashboard from './pages/Dashboard'
import Login from './pages/Login';
import Navbar from './pages/Navbar'
import Transactions from "./pages/Transactions";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './store/authSlice';

function App() {
	const dispatch = useDispatch();

	useEffect(() => {

		const checkAuth = async () => {
			try {
				const backendURL = import.meta.env.VITE_BACKEND_URL;
				const response = await fetch(`${backendURL}/protectedRoute/`,{
					method : 'GET',
					credentials: "include"
				});

				const data = await response.json();
				console.log(data);
				if (response.status == 200) {
					dispatch(login({
						name: data.name,
						isLoggedIn: true
					}));
				}
			}
			catch (err) {
				console.log(err);
			}
		}

		checkAuth();

	}, []);

	return (
		<>
			<div className='bg-[#433d3d] h-screen w-screen flex flex-col justify-startborder-2 border-[#3ad5f0]'>
				<Navbar />
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/dashboard' element={<Dashboard />} />
					{/* <Route path='/transactions' element={<Transactions />} /> */}
				</Routes>
				{/* <Login />
				<Dashboard />
				<Transactions /> */}
			</div>
		</>
	)
}

export default App
