import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import { UnlockIcon, TrashIcon } from '@primer/octicons-react';

const UsersTable = (props) => {
	const [selectAllCheckedState, setSelectAllCheckedState] = useState(false);
	const [checkedState, setCheckedState] = useState(
		props.users.map((user) => {
			return { id: user.id, checked: false };
		})
	);

	const buttonHandler = (e) => {
		const id = e.target.getAttribute('id');
		const checked = checkedState
			.filter((u) => u.checked === true)
			.map((u) => u.id);
		props.getUserAction(checked, id);
	};

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
		<React.Fragment>
			<div className="my-4 d-flex justify-content-center">
				<Button variant="danger" onClick={buttonHandler} id="block">
					Block
				</Button>
				<Button variant="light" onClick={buttonHandler} id="unblock">
					<UnlockIcon size="medium" />
				</Button>
				<Button variant="light" onClick={buttonHandler} id="delete">
					<TrashIcon size="medium" />
				</Button>
			</div>
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
					{props.users.map((user) => {
						const index = checkedState.findIndex((u) => u.id === user.id);
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
		</React.Fragment>
	);
};
export default UsersTable;
