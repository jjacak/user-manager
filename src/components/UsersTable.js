import { useState } from 'react';
import { Table } from 'react-bootstrap';
const DUMMY_USERS = [
	{
		id: 1,
		name: 'JohnD',
		email: 'john@mail.com',
		registered: '22-03-2022',
		lastLogin: '12-04-2022',
		status: 'active',
	},
	{
		id: 2,
		name: 'JaneD',
		email: 'jane@mail.com',
		registered: '15-03-2022',
		lastLogin: '10-04-2022',
		status: 'blocked',
	},

	{
		id: 3,
		name: 'user100',
		email: 'user@mail.com',
		registered: '22-01-2022',
		lastLogin: '12-02-2022',
		status: 'active',
	},
];

const UsersTable = () => {
	const [selectAllCheckedState, setSelectAllCheckedState] = useState(false);
	const [checkedState, setCheckedState] = useState(
		DUMMY_USERS.map((user) => {
			return { id: user.id, checked: false };
		})
	);

	const checkBoxHandler = (id) => {
		const updatedIndex = checkedState.findIndex((el) => el.id === Number(id));
		const updatedCheckedState = [...checkedState];
		updatedCheckedState[updatedIndex] = {
			id: Number(id),
			checked: !checkedState[updatedIndex].checked,
		};
		setCheckedState(() => updatedCheckedState);
	};
	const selectAllHandler = () => {
		const previous = selectAllCheckedState;
		setSelectAllCheckedState((prev) => !prev);
		setCheckedState((prev) =>
			prev.map((el) => {
				return { id: el.id, checked: !previous };
			})
		);
	};

	return (
		<Table className="mt-4 shadow" striped bordered hover size="sm" responsive="sm">
			<thead>
				<tr>
					<th>
						<input
							id="select-all"
							type="checkbox"
							aria-label="Checkbox select all users"
							onChange={selectAllHandler}
							checked={selectAllCheckedState}
						/>
					</th>
					<th>ID</th>
					<th>Username</th>
					<th>Email</th>
					<th>Registered</th>
					<th>Last seen</th>
					<th>Status</th>
				</tr>
			</thead>
			<tbody>
				{DUMMY_USERS.map((user, index) => {
					return (
						<tr key={user.id}>
							<td>
								<input
									type="checkbox"
									id={user.id}
									aria-label={`Checkbox for selecting user ${user.name}`}
									onChange={() => {
										checkBoxHandler(user.id);
									}}
									checked={checkedState[index].checked}
								/>
							</td>
							<td>{user.id}</td>
							<td>{user.name}</td>
							<td>{user.email}</td>
							<td>{user.registered}</td>
							<td>{user.lastLogin}</td>
							<td>{user.status}</td>
						</tr>
					);
				})}
			</tbody>
		</Table>
	);
};
export default UsersTable;
