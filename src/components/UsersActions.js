import { Button } from 'react-bootstrap';
import { UnlockIcon, TrashIcon } from '@primer/octicons-react';
const UsersActions = () => {
	return (
		<div className="mt-4 d-flex justify-content-center">
			<Button variant="danger">Block</Button>
			<Button variant="light">
				<UnlockIcon size="medium" />
			</Button>
			<Button variant="light">
				<TrashIcon size="medium" />
			</Button>
		</div>
	);
};
export default UsersActions;
