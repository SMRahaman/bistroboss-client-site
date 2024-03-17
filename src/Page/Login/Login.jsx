import React, { useContext, useEffect, useState } from "react";
import bgImage from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImage from "../../assets/others/authentication2.png";
import {
  LoadCanvasTemplate,
  loadCaptchaEnginge,
  validateCaptcha,
} from "react-simple-captcha";
import { useForm } from "react-hook-form";
import { AuthContex } from "../../Components/AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
const Login = () => {
  const { loginAccount } = useContext(AuthContex);
  const [captcha, setCapcha] = useState("");
  const location = useLocation();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const loginHandler = (data) => {
    if (validateCaptcha(captcha) === true) {
      loginAccount(data.email, data.password)
        .then((result) => {
          const user = result.user;
          console.log(user);
          if (location) {
            navigate(location.state ? location.state : "/");
          }
        })
        .catch((error) => console.log(error));
    } else {
      toast.success("Your captcha is worng", {
        position: "bottom-right",
      });
    }
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
            onSubmit={handleSubmit(loginHandler)}
            className="flex flex-col gap-5 w-1/2 mx-auto"
          >
            <div>
              <h3 className="text-[40px] font-bold">Sign In</h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                {...register("email", { required: true })}
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
                {...register("password", { required: true })}
                placeholder="*************"
                type="password"
                className="w-[450px] h-[45px] text-lg px-2"
              />
              {errors.password?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Password is required
                </p>
              )}
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Enter Captcha
              </label>
              <div className="flex gap-3">
                <input
                  {...register("captcha", { required: true })}
                  onChange={(e) => setCapcha(e.target.value)}
                  placeholder="Type captcha here"
                  type="text"
                  className="w-[450px] h-[45px] text-lg px-2"
                />
                <div className="flex flex-col gap-2">
                  <div className="w-[200px] h-[45px] text-xs text-center  bg-white">
                    <LoadCanvasTemplate />
                  </div>
                </div>
              </div>
              {errors.captcha?.type === "required" && (
                <p className="text-red-700 text-xs" role="alert">
                  Captcha is required
                </p>
              )}
            </div>
            <div className="mt-5">
              <button
                type="submit"
                className={
                  "w-[450px] text-lg font-bold text-white h-[45px] bg-green-600"
                }
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
