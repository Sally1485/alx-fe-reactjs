import { useState } from 'react';

const RegistrationForm = () => {
    const [formData, setFormData] = useState({ 
        username: '',
         email: '',
          password:''
        });
const [username, email, password] = formData;

    const handleChange = (e) => {
        const {name, value } = e.target;
                setFormData(prevState => ({ ...prevState, [name]: value }));
           };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    const validateForm = () => {
        let tempErrors = {};
        if (!username) {
          tempErrors.username = 'Username is required';
        }
        if (!email) {
          tempErrors.email = 'Email is required';
        }
        if (!password) {
          tempErrors.password = 'Password is required';
        }
        setErrors(tempErrors);
        // If no keys in tempErrors, the form is valid
        return Object.keys(tempErrors).length === 0;
      };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="username"
                value={username}
                onChange={handleChange}
            />
            <input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
            />
             <input
                type="password"
                name="password"
                value={password}
                onChange={handleChange}
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default RegistrationForm;