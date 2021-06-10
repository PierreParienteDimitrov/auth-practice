import React from 'react';

const CreateAccount = () => {
	return (
		<div>
			<form action=''>
				<label htmlFor='email'>Email</label>
				<input type='text' placeholder='enter your email' name='email' required />
			</form>
		</div>
	);
};

export default CreateAccount;
