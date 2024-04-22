import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CollectionsAppContext } from '../../Context/Context';
import { v4 as uuidv4 } from 'uuid';
import Layout from '../../Components/Layout/Layout';
import CryptoJS from 'crypto-js';

function Register() {
    const navigate = useNavigate();
    const { setLoggedInUser } = useContext(CollectionsAppContext);

    const [formData, setFormData] = useState({
        id: '',
        name: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }
    
        // Encrypt the confirmed password before storing it
        const encryptedPassword = CryptoJS.AES.encrypt(formData.confirmPassword, 'your-secret-key').toString();
    
        const storedUsers = localStorage.getItem('users') ? JSON.parse(localStorage.getItem('users')) : [];
        const existingUser = storedUsers.find(user => user.email === formData.email);
        if (existingUser) {
            setError('User with this email already exists');
            return;
        }
    
        const newUser = {
            id: uuidv4(),
            name: formData.name,
            lastName: formData.lastName,
            email: formData.email,
            password: encryptedPassword  // Save the encrypted password
        };
    
        const updatedUsers = [...storedUsers, newUser];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        alert('User registered successfully');
        navigate('/collections-app/');
        setLoggedInUser(newUser);
    };

    return (
        <Layout>
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Register</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="name" className="block font-medium">Name</label>
                        <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            value={formData.name} 
                            onChange={handleChange} 
                            className="w-full mt-1 p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="lastName" className="block font-medium">Last Name</label>
                        <input 
                            type="text" 
                            id="lastName" 
                            name="lastName" 
                            value={formData.lastName} 
                            onChange={handleChange} 
                            className="w-full mt-1 p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block font-medium">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={formData.email} 
                            onChange={handleChange} 
                            className="w-full mt-1 p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block font-medium">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={formData.password} 
                            onChange={handleChange} 
                            className="w-full mt-1 p-2 border rounded" 
                            required 
                        />
                    </div>
                    <div>
                        <label htmlFor="confirmPassword" className="block font-medium">Confirm Password</label>
                        <input 
                            type="password" 
                            id="confirmPassword" 
                            name="confirmPassword" 
                            value={formData.confirmPassword} 
                            onChange={handleChange} 
                            className="w-full mt-1 p-2 border rounded" 
                            required 
                        />
                    </div>
                    {error && <div className="text-red-500">{error}</div>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Register</button>
                </form>
                <div className="mt-4 text-center">
                    Already have an account? <a href="/collections-app/login" className="text-blue-500">Login</a>
                </div>
            </div>
        </Layout>
    )
}

export default Register