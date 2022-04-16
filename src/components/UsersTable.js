import { useState } from 'react';
import { useContext } from 'react';
import { Table } from 'react-bootstrap';
import AuthContext from '../store/AuthContext';

const UsersTable = (props) => {
	const context = useContext(AuthContext);
	const [selectAllCheckedState, setSelectAllCheckedState] = useState(false);
	const [checkedState, setCheckedState] = useState(
		props.users.map((user) => {
			return { id: user.id, checked: false };
		})
	);
	const checked = checkedState.filter((u) => u.checked === true);
	props.getSelectedUsers(checkedState.filter((u) => u.checked === true));

	const checkBoxHandler = (id) => {
		const updatedIndex = checkedState.findIndex((el) => el.id === id);
		const updatedCheckedState = [...checkedState];
		updatedCheckedState[updatedIndex] = {
			id: id,
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
		<Table
			className="mt-4 shadow"
			striped
			bordered
			hover
			size="sm"
			responsive="sm"
		>
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
				{props.users.map((user, index) => {
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
