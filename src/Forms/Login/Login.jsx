import { useState } from "react";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPass, setShowPass] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
  };
  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPass ? "text" : "password"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute top-5 right-3 p-3"
              >
                <FaEye />
              </span>
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          <div className="space-y-4 py-4">
            <div className="flex gap-5 justify-evenly">
              <span>
                {" "}
                <FaGoogle />
                Google{" "}
              </span>
              <span>
                {" "}
                <FaGithub />
                GitHub{" "}
              </span>
            </div>
            <h2 className="text-center">
              Already have an account? <Link to={"/register"}>Register</Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
