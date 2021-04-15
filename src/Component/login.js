import React from "react"
import { withRouter } from "react-router-dom"
import swal from 'sweetalert';

const Login = [
	{
		username: "hruday@gmail.com",
		pass: "hruday123",
	},
]
class login extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			name: "",
			password: "",
			isname: false,
			ispassword: false,
		}
	}
	//Validation
	valid = () => {
		if (this.state.name === "" || this.state.name.length === 0) {
			this.setState({ isname: true })
		}
		if (this.state.password === "" || this.state.password.length === 0) {
			this.setState({ ispassword: true })
		}
	}
	//HandleSubmit
	handleSubmit = (e) => {
		e.preventDefault()
		if (this.state.name === "" || this.state.password === "") {
			//
			this.valid()
		} else {
			let inputData = {
				name: this.state.name,
				password: this.state.password,
			}

			if (this.state.name === Login[0].username && this.state.password === Login[0].pass) {
				swal("Sucessfully login", "","success");
				setTimeout(() => {
					this.props.history.replace("/dashboard")
				})
			} else {
				swal("","Please check your credential", "error");
			}
		}
	}
//Getting input
	onChange = (e) => {
		console.log(e.target.name)
		this.setState({
			[e.target.name]: e.target.value,
		})

		if (e.target.name === "name") {
			this.setState({
				isname: false,
			})
		}
		if (e.target.name === "password") {
			this.setState({
				ispassword: false,
			})
		}
		console.log(this.state)
	}
	render() {
		return (
			<div>
				<div class='min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8'>
					<div class='max-w-md w-full space-y-8'>
						<div>
							<h2 class='mt-6 text-center text-3xl font-extrabold text-gray-900'>
								Sign in to your account
							</h2>
						</div>
						<form class='mt-8 space-y-6' onSubmit={this.handleSubmit}>
							<div class='rounded-md shadow-sm -space-y-px'>
								<div class='mb-4'>
									<label class='block text-grey-darker text-sm font-bold mb-2' for='username'>
										USERNAME
									</label>
									<input
										class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
										type='text'
										name='name'
										value={this.state.name}
										// required
										placeholder='Enter your username'
										onChange={this.onChange}
									/>
									{this.state.isname ? (
										<span className='text-red-600'>Enter your username</span>
									) : null}
								</div>
								<div class='mb-4'>
									<label class='block text-grey-darker text-sm font-bold mb-2' for='password'>
										PASSWORD
									</label>
									<input
										class='shadow appearance-none border rounded w-full py-2 px-3 text-grey-darker'
										type='password'
										name='password'
										value={this.state.password}
										// required
										placeholder='Enter your password'
										onChange={this.onChange}
									/>
									{this.state.ispassword ? (
										<span className='text-red-600'>Enter your password</span>
									) : null}
								</div>
							</div>
							<div>
								<button
									type='submit'
									class='group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
								>
									<span class='absolute left-0 inset-y-0 flex items-center pl-3'>
										<svg
											class='h-5 w-5 text-indigo-500 group-hover:text-indigo-400'
											xmlns='http://www.w3.org/2000/svg'
											viewBox='0 0 20 20'
											fill='currentColor'
											aria-hidden='true'
										>
											<path
												fill-rule='evenodd'
												d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
												clip-rule='evenodd'
											/>
										</svg>
									</span>
									Login
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(login)
