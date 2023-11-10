import React, { ChangeEvent, FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface OnboardingDetails {
  fullName: string;
  email: string;
  password: string;
}

const LoginPage = () => {
  const [accountDetails, setCustomerDetails] = useState<OnboardingDetails>({
    email: "",
    fullName: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setCustomerDetails({
      ...accountDetails,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const payload = {
      accountDetails,
    };
    console.log("Form payload:", payload);
    navigate("/home");
  };
  return (
    <div className="flex h-[100vh] w-full justify-center items-center">
      <div className="w-[30%] mx-auto mt-6 p-4 bg-white shadow-md rounded-md">
        <h2 className="text-xl font-semi-bold mb-4 text-blue-800 font-[700] text-center"> Log in</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label
              htmlFor="firstName"
              className="block text-sm font-medium mb-2 text-blue-800"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              value={accountDetails.fullName}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium mb-2 text-blue-800">
              Email{" "}
            </label>
            <input
              type="text"
              id="email"
              name="email"
              value={accountDetails.email}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium mb-2 text-blue-800"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={accountDetails.password}
              onChange={handleInputChange}
              className="w-full p-2 border rounded-md"
              required
            />
          </div>

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 px-4"
          >
            Submit
          </button>

          <p className="mt-4">
            Create an account?{" "}
            <a href="/sign-up" className="text-blue-800 ">
              Sign up
            </a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
