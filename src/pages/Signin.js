import React, { useState } from "react";
import { ImageSection } from "../components";
import { Link } from "react-router-dom";

const Signin = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formReady, updateFormReady] = useState(false);
  function phoneNumberInputHandler(e) {
    const re = /^(\d+(?:[.,]\d{2})?)$/;

    const value = e.target.value;

    if (value.length > 10) {
      updateFormReady(true);
      return;
    } else {
      updateFormReady(false);
    }

    if (value === "" || re.test(value)) {
      setPhoneNumber(value.replace(/^0+/, ""));
    }
  }
  return (
    <div className="relative w-full flex items-center justify-between">
      <ImageSection />
      <div className="w-1/2 h-screen px-7 py-3 absolute right-0 top-0 flex flex-col items-center justify-center">
        <div className="text-center mb-1">
          <h1 className="text-5xl font-bold">Welcome back!</h1>
        </div>
        <div className="w-1/2 container mx-auto">
          <form>
            <div>
              <div className="space-y-1 my-3">
                <label className="block font-semibold" htmlFor="Phone number">
                  Phone number
                </label>
                <div className="w-full p-3 rounded-md border border-black border-opacity-20 flex items-center">
                  <span className="font-semibold">+234</span>
                  <input
                    type="phone"
                    className="focus:outline-none px-1 w-full"
                    name="Phone number"
                    placeholder="9033955281"
                    onChange={phoneNumberInputHandler}
                    autoFocus={true}
                    value={phoneNumber}
                  />
                </div>
              </div>
              <span className="font-light text-gray-500">
                A 6 digits OTP will be sent via sms to your phone number to
                verify your number
              </span>
            </div>
            {formReady ? (
              <button className="mx-auto block mt-6 px-10 py-2 bg-blue-800 rounded-md focus:outline-none text-gray-50">
                Next
              </button>
            ) : (
              <button
                className="mx-auto cursor-not-allowed block mt-6 px-10 py-2 bg-gray-300 rounded-md focus:outline-none text-gray-50"
                onClick={(e) => e.preventDefault()}
              >
                Next
              </button>
            )}
          </form>
        </div>
        <div className="text-center space-x-1 mt-4">
          <span className="text-sm text-gray-400">Don’t have an account?</span>
          <Link to="/signup">
            <span className="text-xs underline">Sign up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
