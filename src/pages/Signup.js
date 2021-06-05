import React, { useState } from "react";
import { ImageSection } from "../components";
import { Link } from "react-router-dom";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("");
  const [qualification, setQualification] = useState("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [dob, setDob] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formReady, updateFormReady] = useState(false);

  function phoneNumberInputHandler(e) {
    const re = /^(\d+(?:[.,]\d{2})?)$/;

    const value = e.target.value;

    if (value.length > 10) {
      formReadyChecker();
      return;
    } else {
      formReadyChecker();
    }

    if (value === "" || re.test(value)) {
      setPhoneNumber(value.replace(/^0+/, ""));
    }
  }

  function formReadyChecker() {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      gender === "" ||
      qualification === "" ||
      maritalStatus === "" ||
      dob === "" ||
      phoneNumber === "" ||
      phoneNumber < 10
    ) {
      updateFormReady(false);
    } else {
      updateFormReady(true);
    }
  }

  function formSubmitHandler(e) {
    e.preventDefault();
    alert("Submitting...");
  }

  return (
    <div className="relative w-full flex items-center justify-between">
      <ImageSection />
      <div className="w-1/2 h-full px-7 py-3 absolute right-0 top-0">
        <div className="mx-auto w-10/12">
          <div className="text-center my-5">
            <h1 className="text-5xl mb-1 font-bold">Tell us about you</h1>
            <span className="font-light text-2xl">Personal details</span>
          </div>
          <form className="text-sm">
            <div className="container grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="First name">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  First Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="First name"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                    formReadyChecker();
                  }}
                />
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Last name">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Last Name
                </label>
                <input
                  type="text"
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Last name"
                  onChange={(e) => {
                    setLastName(e.target.value);
                    formReadyChecker();
                  }}
                />
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Email address">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Email Address
                </label>
                <input
                  type="email"
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Email address"
                  onChange={(e) => {
                    setEmail(e.target.value);
                    formReadyChecker();
                  }}
                />
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Gender">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Gender
                </label>
                <select
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Gender"
                  onChange={(e) => {
                    setGender(e.target.value);
                    formReadyChecker();
                  }}
                >
                  <option disabled selected>
                    Select your gender
                  </option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Qualification">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Highest attained qualification
                </label>
                <select
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Qualification"
                  onChange={(e) => {
                    setQualification(e.target.value);
                    formReadyChecker();
                  }}
                >
                  <option disabled selected>
                    Select your highest attained qualification
                  </option>
                  <option>First School Leaving Certificate</option>
                  <option>SSCE</option>
                  <option>OND</option>
                  <option>Bachelor Degree/HND</option>
                  <option>Masters Degree</option>
                  <option>PHD</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Marital Status">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Marital Status
                </label>
                <select
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Marital Status"
                  onChange={(e) => {
                    setMaritalStatus(e.target.value);
                    formReadyChecker();
                  }}
                >
                  <option disabled selected>
                    Select your marital status
                  </option>
                  <option>Married</option>
                  <option>Single</option>
                  <option>Widowed</option>
                </select>
              </div>
              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Date of birth">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Date of birth
                </label>
                <input
                  type="date"
                  className="block w-full p-2 rounded-md focus:outline-none border border-black border-opacity-20"
                  name="Date of birth"
                  onChange={(e) => {
                    setDob(e.target.value);
                    formReadyChecker();
                  }}
                />
              </div>

              <div className="px-3 space-y-1 my-3">
                <label className="block" htmlFor="Phone number">
                  <span className="mr-1 font-medium text-red-500 required">
                    *
                  </span>
                  Phone number
                </label>
                <div className="w-full p-2 rounded-md border border-black border-opacity-20 flex items-center">
                  <span>+234</span>
                  <input
                    type="phone"
                    className="focus:outline-none px-1 w-full"
                    name="Phone number"
                    placeholder="9033955281"
                    onChange={phoneNumberInputHandler}
                    value={phoneNumber}
                  />
                </div>
              </div>
            </div>
            {formReady ? (
              <button
                className="mx-auto block mt-6 px-10 py-2 bg-blue-800 rounded-md focus:outline-none text-gray-50"
                onClick={formSubmitHandler}
              >
                Continue
              </button>
            ) : (
              <button
                className="mx-auto cursor-not-allowed block mt-6 px-10 py-2 bg-gray-300 rounded-md focus:outline-none text-gray-50"
                onClick={(e) => e.preventDefault()}
              >
                Continue
              </button>
            )}
          </form>
          <div className="text-center space-x-1 mt-4">
            <span className="text-sm text-gray-400">
              Already have an account?
            </span>
            <Link to="signin">
              <span className="text-xs underline">Sign in</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
