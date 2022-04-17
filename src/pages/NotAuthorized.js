import classes from './NotFound.module.css';
import { Link } from 'react-router-dom';
import { HomeFillIcon } from '@primer/octicons-react';

const NotAuthorized = (
	<div className={'row'}>
		<div className="col-md-12">
			<div className={classes['error']}>
				<h1>Oops!</h1>
				<h2>401 Not Authorized</h2>
				<div className={classes['error-details']}>
					Sorry, you don't have access to this content!
				</div>
				<div className={classes['error-actions']}>
					<Link to="/login" className="btn btn-primary btn-lg">
						Log in
					</Link>
				</div>
			</div>
		</div>
	</div>
);

export default NotAuthorized;
