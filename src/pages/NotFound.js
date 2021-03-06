import { Link } from 'react-router-dom';
import { HomeFillIcon } from '@primer/octicons-react';
import classes from './NotFound.module.css';
import { Container } from 'react-bootstrap';
import Navigation from '../components/Navigation';
import React from 'react';

const NotFound = () => {
	return (
		<React.Fragment>
			<Navigation />
			<Container>
				<div className={'row'}>
					<div className="col-md-12">
						<div className={classes['error']}>
							<h1>Oops!</h1>
							<h2>404 Not Found</h2>
							<div className={classes['error-details']}>
								Sorry, an error has occured, requested page not found!
							</div>
							<div className={classes['error-actions']}>
								<Link to="/" className="btn btn-primary btn-lg">
									<HomeFillIcon size="medium" /> Take Me Home{' '}
								</Link>
							</div>
						</div>
					</div>
				</div>
			</Container>
		</React.Fragment>
	);
};

export default NotFound;
