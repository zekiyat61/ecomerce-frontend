import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import axios from "axios";
import { toast } from "react-toastify";

const Login = () => {
  const [currentState, setCurrentState] = useState("Login");
  const { token, setToken, navigate } = useContext(ShopContext);

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(""); // State for error message

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    setErrorMessage(""); // Clear previous errors

    try {
      if (currentState === "Sign Up") {
        if (password.length < 8) {
          setErrorMessage("Password must be at least 8 characters.");
          return;
        }

        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/user/register",
          { name, email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userEmail", email); // ✅ Store user email
          toast.success("Signup successful!");
          navigate("/"); // Redirect after successful signup
        } else {
          toast.error(response.data.message);
        }
      } else {
        const response = await axios.post(
          import.meta.env.VITE_BACKEND_URL + "/api/user/login",
          { email, password }
        );

        if (response.data.success) {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("userEmail", email); // ✅ Store user email
          toast.success("Login successful!");
          navigate("/"); // Redirect after successful login
        } else {
          setErrorMessage("Incorrect email or password.");
        }
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "An error occurred.");
    }
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token, navigate]);

  return (
    <form
      onSubmit={onSubmitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}{" "}
      {/* Error message */}
      {currentState === "Sign Up" && (
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          type="text"
          className="w-full px-3 py-2 border border-gray-800"
          placeholder="Name"
          required
        />
      )}
      <input
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        type="email"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Email"
        required
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        type="password"
        className="w-full px-3 py-2 border border-gray-800"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot your password?</p>
        <p
          onClick={() =>
            setCurrentState(currentState === "Login" ? "Sign Up" : "Login")
          }
          className="cursor-pointer"
        >
          {currentState === "Login" ? "Create account" : "Login Here"}
        </p>
      </div>
      <button className="bg-pink-500 text-white font-light px-8 py-2 mt-4">
        {currentState === "Login" ? "Sign In" : "Sign Up"}
      </button>
    </form>
  );
};

export default Login;
