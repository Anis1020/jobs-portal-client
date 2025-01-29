import { useState } from "react";
import { FaEye, FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";

const Registration = () => {
  const [showPass, setShowPass] = useState(true);
  const { createUser } = useAuth();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const accepted = form.terms.checked;
    const userInfo = { name, email, password, accepted };
    console.log(userInfo);
    createUser(email, password)
      .then((res) => {
        console.log(res.user);
      })
      .catch((error) => {
        console.log(error.massage);
      });
    form.reset();
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
          <form onSubmit={handleRegister} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
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
                type={showPass ? "password" : "text"}
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPass(!showPass)}
                className="absolute right-3 top-5 p-3 "
              >
                <FaEye />
              </span>{" "}
              <label className="label mt-2">
                <input type="checkbox" name="terms" />
                <span className="label-text">Accept our terms & condition</span>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Registration</button>
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
              Already have an account? <Link to={"/login"}>Login</Link>{" "}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
