import React from 'react';
import { useState } from 'react';

const Register = () => {
    const [showAlert, setShowAlert] = useState(false);
    const [alertMessage, setAlertMessage] = useState('');
    const [alertType, setAlertType] = useState('');

    const [loading, setLoading] = useState(false);

    const onSubmit = async (e) => {
        e.preventDefault()

        setLoading(true);
        await signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // setLoading(false);
            // setAlertMessage('Sign-In successful');
            // setAlertType('success');
            // setShowAlert(true);
            // setTimeout(() => {
            //     setShowAlert(false);
            // }, 2000);
            // navigate('/signin');
        })
        .catch((error) => {
            // setLoading(false);
            // setAlertMessage(error.message);
            // setAlertType('error');
            // setShowAlert(true);
            // setTimeout(() => {
            //     setShowAlert(false);
            // }, 2000);
        });
    }

    return (
        <section>
            <div className="p-10">
                <h1 className="mb-8 font-extrabold text-4xl">Registration Form</h1>
                <div className="grid grid-cols-2 md:grid-cols-2 gap-8">

                    <form>
                        <fieldset className='border border-red-500 p-10 rounded-2xl'>
                            <legend className='text-2xl font-bold px-2'>Member 1 (Lead)</legend>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Full Name"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Email Address"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Contact No."
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Contact No." />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="GitHub Profile"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="LinkedIn Profile"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="College Name"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="College Name" />
                        </fieldset>

                        <fieldset className='border border-slate-950 p-10 rounded-2xl'>
                            <legend className='text-2xl font-bold px-2'>Member 2</legend>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Full Name2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Email Address2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="GitHub Profile2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="LinkedIn Profile2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="College Name2"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="College Name" />
                        </fieldset>

                        <fieldset className='border border-slate-950 p-10 rounded-2xl'>
                            <legend className='text-2xl font-bold px-2'>Member 3</legend>
                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Full Name3"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required signin
                                placeholder="Full Name" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="Email Address3"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="Email Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="GitHub Profile3"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="GitHub Profile" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="LinkedIn Profile3"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="LinkedIn Address" />

                            <input 
                                className="text-xl w-full px-4 py-2 border border-solid border-gray-300 rounded-xl mb-3" 
                                type="text" 
                                label="College Name3"
                                // value={email}
                                // onChange={(e) => setEmail(e.target.value)}  
                                required 
                                placeholder="College Name" />
                        </fieldset>

                        <aside className="my-5">
                            <div className="bg-gray-100 p-8 rounded">
                                <h2 className="font-bold text-2xl">Instructions</h2>
                                <ul className="list-disc mt-4 list-inside">
                                    <li>All users must provide a valid email address and password to create an account.</li>
                                    <li>Users must not use offensive, vulgar, or otherwise inappropriate language in their username or profile information</li>
                                    <li>Users must not create multiple accounts for the same person.</li>
                                </ul>
                            </div>
                        </aside>

                        <div className="text-center md:text-left font-bold">
                            <button 
                            className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded-xl tracking-wider text-base" 
                            type="submit"
                            style={{width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}
                            onClick={onSubmit}>
                            {loading ? 
                            <svg 
                                aria-hidden="true" 
                                className="w-8 h-6 text-gray-200 animate-spin dark:text-gray-600 fill-gray-600 dark:fill-gray-300" 
                                viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" 
                                    fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" 
                                    fill="currentFill"/>
                            </svg> 
                            : 'Register'}
                            </button>
                        </div>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Register;
