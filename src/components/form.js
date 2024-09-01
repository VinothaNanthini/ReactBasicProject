import React, { useState } from 'react';

const Form = () => {
    const [formData, setFormData] = useState({
        name: '',
        password: '',
        email: '',
        gender: ''
    });

    function handleChange(event) {
        const { name, value } = event.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    }

    function handleSubmit(event) {
        alert(`A form was submitted:\nName: ${formData.name}\nEmail: ${formData.email}\nGender: ${formData.gender}`);
        event.preventDefault();
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>
                    Name:
                    <input 
                        type='text' 
                        name='name'
                        value={formData.name} 
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Password:
                    <input 
                        type='password' 
                        name='password'
                        value={formData.password} 
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Email:
                    <input 
                        type='email' 
                        name='email'
                        value={formData.email} 
                        onChange={handleChange}
                    />
                </label>
            </div>
            <div>
                <label>
                    Gender:
                    <input 
                        type='radio' 
                        name='gender' 
                        value='Male' 
                        checked={formData.gender === 'Male'}
                        onChange={handleChange}
                    /> Male
                    <input 
                        type='radio' 
                        name='gender' 
                        value='Female' 
                        checked={formData.gender === 'Female'}
                        onChange={handleChange}
                    /> Female
                </label>
            </div>
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
