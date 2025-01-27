    import React, { useState, useEffect } from 'react';
    import { Formik, Form, Field } from 'formik';
    import './ProfilePage.css'; // Importing the updated CSS for styling

    const ProfilePage = () => {
    const [user, setUser] = useState({
        name: '',
        email: '',
        avatar: '/avatar.png', // Assuming the avatar.png is in the public folder
    });
    const [error, setError] = useState(null);
 
    useEffect(() => {
        // Mock API Call to simulate fetching user data
        setTimeout(() => {
        // Simulate user data from the API
        setUser({
            name: '',
            email: '',
            avatar: '/avatar.png', // Assuming the avatar.png is in the public folder
        });
        }, 1000);
    }, []);

    const handleSubmit = (values, { setSubmitting }) => {
        // Update user information on form submission
        setUser({
        ...user,
        name: values.name,
        email: values.email,
        });
        setSubmitting(false);
    };

    if (error) return <div>{error}</div>;
    if (!user) return <div>Loading...</div>;

    return (
        <div className="profile-page">
        <h1>Profile Page</h1>
        <div className="profile-info">
            {/* Avatar Section */}
            <div className="avatar">
            {user.avatar ? (
                <img src="https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg" alt="Avatar" />
            ) : (
                <div className="avatar-placeholder">{user.name[0]}</div> // Display first letter if no avatar
            )}
            </div>

            <h2>{user.name || 'Your Name'}</h2>
            <p>{user.email || 'Your Email'}</p>

            {/* Form to update user information */}
            <Formik
            initialValues={{ name: user.name, email: user.email }}
            onSubmit={handleSubmit}
            >
            {({ isSubmitting }) => (
                <Form>
                <div>
                    <label htmlFor="name">Name</label>
                    <Field id="name" name="name" placeholder="Enter your name" />
                </div>
                <div>
                    <label htmlFor="email">Email</label>
                    <Field id="email" name="email" placeholder="Enter your email" type="email" />
                </div>
                <button type="submit" disabled={isSubmitting}>
                    Update
                </button>
                </Form>
            )}
            </Formik>
        </div>
        </div>
    );
    };

    export default ProfilePage;
