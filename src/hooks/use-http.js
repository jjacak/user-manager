import React, { useCallback, useState } from 'react';

const useHttp = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	const sendRequest = useCallback(async (requestConfig, applyData) => {
		setIsLoading(true);
		setError(null);

		try {
			const response = await fetch(requestConfig.url, {
				method: requestConfig.method ? requestConfig.method : 'GET',
				body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
				headers: requestConfig.headers ? requestConfig.headers : {},
				signal: requestConfig.signal ? requestConfig.signal : null,
			});

			if (!response.ok) {
				throw new Error('Request failed!');
			}

			const data = await response.json();
			if (data.status !== 'ok') {
				throw new Error(data.error || 'Something went wrong');
			}

			applyData(data);
		} catch (err) {
			if (!requestConfig.signal ||!requestConfig.signal.aborted) {
				setError(err.message || 'Something went wrong!');
			}
		}
		setIsLoading(false);
	}, []);

	return { isLoading, error, sendRequest };
};

export default useHttp;
