import React from "react";
import bgImage from "../../assets/reservation/wood-grain-pattern-gray1x.png";
import loginImage from "../../assets/others/authentication2.png";

const Register = () => {
  const registrationHandler = () => {
    e.preventDefault();
    
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
          <form className="flex flex-col gap-5 w-1/2 mx-auto">
            <div>
              <h3 className="text-[40px] font-bold">Sign Up</h3>
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Name
              </label>
              <input
                placeholder="Enter your name"
                type="text"
                className="w-[450px] h-[45px] text-lg px-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Email
              </label>
              <input
                placeholder="example@gmail.com"
                type="email"
                className="w-[450px] h-[45px] text-lg px-2"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold" htmlFor="">
                Password
              </label>
              <input
                placeholder="*************"
                type="password"
                className="w-[450px] h-[45px] text-lg px-2"
              />
            </div>
            <div className="mt-5">
              <button className="w-[450px] text-lg font-bold text-white h-[45px] bg-green-600">
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
