import React, { useContext } from "react";
import bgImage from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImage from "../../assets/others/authentication2.png";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import Swal from "sweetalert2";

const Register = () => {
  const { createAccount } = useContext(AuthContex);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const registrationHandler = (data) => {
    createAccount(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateProfile(user, {
          displayName: data.name,
        });
        if (user) {
          Swal.fire({
            title: "Congratulation!",
            text: "Your registration successfully",
            icon: "success",
          });
        }
      })
      .catch((error) => console.log(error));
  };
  return (
    <div
      className="py-12"
      style={{
        backgroundImage: `url(${bgImage})`,
        height: "100vh",
      }}
    >
      <div
        className="shadow-2xl px-5 py-12 max-w-6xl mx-auto"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="flex flex-row items-center justify-center">
          <div className="w-1/2 mx-auto">
            <img src={loginImage} alt="" />
          </div>
          <form
            onSubmit={handleSubmit(registrationHandler)}
            className="flex flex-col gap-5 w-1/2 mx-auto"
          >
            <div>
              <h3 className="text-[40px] font-bold">Sign Up</h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Name
              </label>
              <input
                {...register("name", {
                  required: true,
                })}
                placeholder="Enter your name"
                type="text"
                className="w-[450px] h-[45px] text-lg px-2"
              />
              {errors.name?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Name is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                {...register("email", {
                  required: true,
                })}
                placeholder="example@gmail.com"
                type="email"
                className="w-[450px] h-[45px] text-lg px-2"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Email is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Password
              </label>
              <input
                {...register("password", {
                  required: true,
                  minLength: 6,
                  pattern:
                    /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/,
                })}
                placeholder="*************"
                type="password"
                className="w-[450px] h-[45px] text-lg px-2"
              />
              {errors.password?.type === "pattern" && (
                <ul className="text-red-700 text-xs " role="alert">
                  <li> Password length at least 6</li>
                  <li> At least one uppercase character</li>
                  <li> At least one lowercase character</li>
                  <li> At least one special character</li>
                  <li> At least one number</li>
                </ul>
              )}
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className="w-[450px] text-lg font-bold text-white h-[45px] bg-green-600"
              >
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
