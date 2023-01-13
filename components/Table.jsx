/* eslint-disable @next/next/no-img-element */
import React from "react";
import { BiEdit, BiTrashAlt } from "react-icons/bi";
const Table = () => {
	return (
		<table className="min-w-full table-auto">
			<thead>
				<tr>
					<th className="px-15">
						<span className="text-gray-200">Name</span>
					</th>
					<th className="px-15">
						<span className="text-gray-200">Email</span>
					</th>
					<th className="px-15">
						<span className="text-gray-200">Salary</span>
					</th>
					<th className="px-15">
						<span className="text-gray-200">Birthday</span>
					</th>
					<th className="px-15">
						<span className="text-gray-200">Status</span>
					</th>
					<th className="px-15">
						<span className="text-gray-200">Actions</span>
					</th>
				</tr>
			</thead>
			<tbody className="bg-gray-200">
				<tr className="bg-gray-50 text-center">
					<td className="px-16 py-12 flex flex-row items-center">
						<img
							src="#"
							alt="m"
							className="h-8 w-8 rounded-full object-cover"
						/>
						<span className="text-center ml-2 font-semibold">
							Daily Tuition
						</span>
					</td>
					<td className="px-16 py-12">
						<span>abdulsagheeras29@gmail.com</span>
					</td>
					<td className="px-16 py-12">
						<span>60,000</span>
					</td>
					<td className="px-16 py-12">
						<span>29/01/2001</span>
					</td>
					<td className="px-16 py-2">
						<button className="cursor">
							<span className="bg-green-500 text-white px-5 py-1 rounded-full">
								Active
							</span>
						</button>
					</td>
					<td className="px-16 py-2 flex justify-around gap-5">
						<button className="cursor">
							<BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
						</button>
						<button className="cursor">
							<BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
						</button>
					</td>
				</tr>
			</tbody>
		</table>
	);
};

export default Table;
