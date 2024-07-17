import { useContext, useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
// import useAxiosSecure from "../../hooks/useAxiosSecure";

const Register = () => {
  // const axiosSecure = useAxiosSecure();
  const [eye, setEye] = useState(false);
  const {userRegister} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    userRegister(data);
    // axiosSecure.post("/users", data)
    // .then((res) => {
    //   console.log(res);
    // })

  };

  const handelSeePass = () => {
    setEye(!eye);
  };
  return (
    <div className="container mx-auto ">
      <div className="hero min-h-screen font-poppins z-10 ">
        <div className="flex flex-col md:flex-row-reverse  border-2 md:rounded-2xl border-primary w-full ">
          <div className="text-center lg:text-left w-full md:w-[1/2] min-h-64  bg-[url('https://i.ibb.co/wQc3BmY/undraw-Access-account-re-8spm-2.png')] bg-center bg-cover shadow-xl  md:rounded-r-2xl flex justify-center items-center  ">
            <div className="backdrop-blur-sm bg-white/5 w-full h-64 md:h-full  md:min-h-full md:rounded-r-2xl">
              <div className="text-center md:h-full h-64 md:min-h-full flex justify-center items-center flex-col md:rounded-r-2xl">
                <h1 className="text-3xl md:text-5xl font-bold text-black rounded-2xl">
                  Register now!
                </h1>
                <div className="py-6  text-black opacity-80  space-y-4">
                  <p>Your journey to share money starts here!</p>
                </div>
              </div>
            </div>
          </div>
          {/* */}
          <div
            className="card shrink-0 w-full md:w-1/2    bg-base-100 rounded-l-none rounded-r-none rounded-2xl md:rounded-l-2xl"
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="card-body ">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  className="input input-bordered"
                  {...register("name", { required: true })}
                />
                {errors.name && (
                  <span className="text-red-500">Name is required</span>
                )}
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
                  {...register("email", { required: true })}
                />
                {errors.email && (
                  <span className="text-red-500">Email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Mobile Number</span>
                </label>
                <input
                  type="text"
                  name="number"
                  placeholder="Mobile Number"
                  className="input input-bordered"
                  {...register("number", { required: true })}
                />
                {errors.number && (
                  <span className="text-red-500">Number is required</span>
                )}
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Pin</span>
                </label>
                <input
                  type={eye ? "text" : "password"}
                  name="pin"
                  placeholder="Pin Code"
                  className="input input-bordered"
                  {...register("pin", {
                    required: true,
                    minLength: 5,
                    maxLength: 5,
                    pattern: /^\d{5}$/,
                  })}
                />
                {errors.pin?.type === "required" && (
                  <span className="text-red-500">pin is required</span>
                )}
                {errors.pin?.type === "minLength" && (
                  <span className="text-red-500">
                    Pin Code must be 5 numbers
                  </span>
                )}
                {errors.pin?.type === "maxLength" && (
                  <span className="text-red-500">
                    Pin Code must be 5 number
                  </span>
                )}
                {errors.pin?.type === "pattern" && (
                  <span className="text-red-500">Pin Code must be numbers</span>
                )}
                <Link
                  onClick={handelSeePass}
                  className="text-2xl absolute right-3 top-[48px]"
                >
                  {eye ? <FaRegEye /> : <FaRegEyeSlash />}
                </Link>
              </div>
              <p>
                <span className="font-bold">Note : </span>
                <small className="text-black opacity-80">
                  Your pin must be{" "}
                  <span className="text-primary">5 numbers.</span>
                </small>
              </p>
              <div className="form-control mt-6">
                <button className="btn bg-primary  text-white">Register</button>
              </div>

              <p className="text-center font-roboto text-lg">
                Already Registered to Sweet Stay? Please{" "}
                <Link
                  to="/login"
                  className="font-bold text-primary hover:text-[#405c2b]"
                >
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
