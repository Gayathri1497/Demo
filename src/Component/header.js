import React from "react"
import { Link, withRouter } from "react-router-dom"
class header extends React.Component {
	render() {
		return (
			<div>
				<nav class='flex flex-1 justify-between bg-indigo-500 p-6'>
					<div class='flex items-center flex-no-shrink text-white mr-6'>
						<span class='font-semibold text-xl tracking-tight'>User Details</span>
					</div>
					<div>
						<Link
							to='/'
							class='inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-indigo-500 hover:bg-indigo-300 mt-4 lg:mt-0'
						>
							Logout
						</Link>
					</div>
				</nav>
			</div>
		)
	}
}
export default withRouter(header)
