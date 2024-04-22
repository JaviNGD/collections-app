import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import CryptoJS from 'crypto-js';
import { CollectionsAppContext } from '../../Context/Context';
import Layout from '../../Components/Layout/Layout';

function Login() {
    const { storedUsers, setLoggedInUser } = useContext(CollectionsAppContext);

    const [formData, setFormData] = useState({
        email: '',
        password: ''
    });
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Check if the user exists
        if (storedUsers) {
            // Loop through the stored users to find the user with the entered email address
            for (let i = 0; i < storedUsers.length; i++) {
                if (formData.email === storedUsers[i].email) {
                    // Decrypt the stored password before comparing it
                    const decryptedPassword = CryptoJS.AES.decrypt(storedUsers[i].password, 'your-secret-key').toString(CryptoJS.enc.Utf8);
                    // Verify the password
                    if (formData.password === decryptedPassword) {                    
                        // Login successful
                        setError('');
                        // Set the logged in user
                        setLoggedInUser(storedUsers[i]);
                        // Redirect to home page
                        navigate('/');
                        // Exit the function after successful login
                        return;
                    } else {
                        // Incorrect password
                        setError('Invalid email or password');
                        return; // Exit the function if error occurs
                    }
                }
            }
        }
        // User not found
        setError('Invalid email or password');
    };

    return (
        <Layout>
            <div className="max-w-md mx-auto mt-8">
                <h1 className="text-3xl font-bold mb-4">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    {error && <div className="text-red-500">{error}</div>}
                    <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600">Login</button>
                </form>
                <div className="mt-4 text-center">
                    Don&apos;t have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
                </div>
            </div>
        </Layout>
    );
}

export default Login;
