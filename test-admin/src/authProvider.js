const authProvider = {
	login: ({ username, password }) => {
		return fetch('http://localhost:3001/login', {
			method: 'post',
			body: JSON.stringify({ username, password }),
			headers: {
				'Content-Type': 'application/json'
			}
		})
			.then(response => {
				if (response.status < 200 || response.status >= 300) {
					throw new Error(response.statusText);
				}
				return response.json();
			})
			.then((data) => {
				localStorage.setItem('token', data.token);
				localStorage.setItem('role', data.role);
				localStorage.setItem('identity', JSON.stringify(data.identity));

				return true
			})
	},
	// called when the user clicks on the logout button
	logout: () => {
		localStorage.removeItem('token');
		localStorage.removeItem('role');
		localStorage.removeItem('identity');
		return Promise.resolve();
	},
	// called when the API returns an error
	checkError: ({ status }) => {
		if (status === 401 || status === 403) {
			localStorage.removeItem('token');
			return Promise.reject();
		}
		return Promise.resolve();
	},
	// called when the user navigates to a new location, to check for authentication
	checkAuth: () => {
		return localStorage.getItem('token')
			? Promise.resolve()
			: Promise.reject();
	},
	// called when the user navigates to a new location, to check for permissions / roles
	getPermissions: () => {
		const role = localStorage.getItem('role')
		return role ? Promise.resolve(role) : Promise.reject()
	},
	getIdentity: () => {
		try {
				const { id, fullName, avatar } = JSON.parse(localStorage.getItem('identity'));
				return Promise.resolve({ id, fullName, avatar });
		} catch (error) {
				return Promise.reject(error);
		}
}
};

export default authProvider;