import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaGithub } from 'react-icons/fa';
import { AuthContext } from '../../Provider/AuthProvider';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';

const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const Login = () => {
    const [error, setError] = useState();
    const [success, setSuccess] = useState();
    const [showPassword, setShowPassword] = useState(false);

// Auth Provider component destructuring
    const { setUser, login, googleandgithub } = useContext(AuthContext)

    // login from information and handler
    const handlerLogin = event => {
        event.preventDefault()
        const from = event.target
        const email = from.email.value;
        const password = from.password.value;
        console.log(email, password);

        login(email, password)
            .then(result => {
                const logged = result.user;
                setUser(logged)
            })
            .catch(error => {
                console.log(error);
            })
    }

    // google login handler
    const handlerGoogle = () => {
        googleandgithub(googleProvider)
            .then(result => {
                const googleLogged = result.user;
                console.log('google', googleLogged);
                setUser(googleLogged)
            })
            .catch(error => {
                // console.log(error);
            })
    }
    // github login handler
    const handlerGithub = () => {
        googleandgithub(githubProvider)
            .then(result => {
                const gitLogged = result.user;
                setUser(gitLogged)
            })
            .catch(error => {
                console.log(error);
            })
    }


    return (
        <div className="hero min-h-screen">
            <form
                onSubmit={handlerLogin}
                className="hero-content flex-col">
                <div className="text-center my-5">
                    <h1 className="md:text-5xl font-bold">Please Login..!</h1>
                </div>
                <div className="card flex-shrink-0 md:w-[960px] max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">
                                    Email
                                </span>
                            </label>
                            <input
                                type="email"
                                name='email'
                                placeholder="your email" className="input input-bordered" />
                        </div>
                        <div
                            className="form-control">
                            <label
                                className="label">
                                <span className="label-text">
                                    Password
                                </span>
                            </label>
                            <input
                                type={showPassword ? 'text'
                                    : "password"}
                                name='password' placeholder="password" className="input input-bordered" />
                            <label
                                className="label">
                                <p onClick={() => setShowPassword(!showPassword)}>
                                    {
                                        showPassword ?
                                            <span>
                                                Hide password
                                            </span> : <span>
                                                Show Password
                                            </span>
                                    }
                                </p>
                            </label>
                        </div>
                        <div
                            className="form-control mt-6">
                            <button
                                className="btn btn-success">
                                Login
                            </button>
                        </div>
                        <div
                            className='inline-flex items-center py-4'>
                            <span>
                                Dont’t Have An Account ?
                            </span> <Link to='/register' className="btn-link pl-2 hover:opacity-80">
                                register
                            </Link>
                        </div>
                        <div
                            className=''>
                            <button
                                onClick={handlerGoogle}
                                className="social flex justify-center items-center">
                                <FaGoogle />
                                <span
                                    className='ml-3'
                                > Google
                                </span>
                            </button>
                            <br />
                            <button
                                onClick={handlerGithub}
                                className="social flex justify-center items-center">
                                <FaGithub />
                                <span
                                    className='ml-3'
                                > Github
                                </span>
                            </button>
                        </div>
                        <p
                            className='text-red-800'>
                            {error}
                        </p>
                        <p
                            className='text-green-500'>
                            {success}
                        </p>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Login;