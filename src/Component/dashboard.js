import React from "react"
import { withRouter } from "react-router-dom"
import Header from "./header"
const user = [
	{
		id: 1,
		name: "test1",
		age: "11",
		gender: "male",
		email: "test1@gmail.com",
		phoneNo: "9415346313",
	},
	{
		id: 2,
		name: "test2",
		age: "12",
		gender: "male",
		email: "test2@gmail.com",
		phoneNo: "9415346314",
	},
	{
		id: 3,
		name: "test3",
		age: "13",
		gender: "male",
		email: "test3@gmail.com",
		phoneNo: "9415346315",
	},
	{
		id: 4,
		name: "test4",
		age: "14",
		gender: "male",
		email: "test4@gmail.com",
		phoneNo: "9415346316",
	},
	{
		id: 5,
		name: "test5",
		age: "15",
		gender: "male",
		email: "test5@gmail.com",
		phoneNo: "9415346317",
	},
	{
		id: 6,
		name: "test6",
		age: "16",
		gender: "male",
		email: "test6@gmail.com",
		phoneNo: "9415346318",
	},
]

class dashboard extends React.Component {
	render() {
		return (
			<div className='w-full h-screen'>
				<Header className='w-full' />
				<div className='bg-indigo-100  '>
					<div className='shadow-md rounded  '>
						<table className='text-left w-full '>
							<thead>
								<tr className=' border-b border-gray-300'>
									<th className='py-4 px-2 font-bold uppercase text-sm '>S.No</th>

									<th className='py-4 px-6 font-bold uppercase text-sm '>Name</th>
									<th className='py-4 px-6 font-bold uppercase text-sm '>Age</th>
									<th className='py-4 px-6 font-bold uppercase text-sm '>Gender</th>
									<th className='py-4 px-6 font-bold uppercase text-sm '>Email</th>
									<th className='py-4 px-6 font-bold uppercase text-sm '>Phone Number</th>
								</tr>
							</thead>
							<tbody>
								{user.map((item, index) => {
									return (
										<tr className='hover:bg-gray-100 border-b border-gray-300'>
											<td className='py-4 px-6'>{item.id}</td>
											<td className='py-4 px-6 '>{item.name}</td>
											<td className='py-4 px-6 '>{item.age}</td>
											<td className='py-4 px-6 '>{item.gender}</td>
											<td className='py-4 px-6 '>{item.email}</td>
											<td className='py-4 px-6 '>{item.phoneNo}</td>
										</tr>
									)
								})}
							</tbody>
						</table>
					</div>
				</div>
			</div>
		)
	}
}
export default withRouter(dashboard)
