import { useNavigate } from "react-router-dom";
import "../App.css";
// import { auth } from "./firebase";
// import { useForm } from "react-hook-form";
// import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const navigate = useNavigate();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const handleLogin = async (data) => {
  //     const { firstEmail, password } = data; // Adjust to match the form field names
  //     try {
  //       await signInWithEmailAndPassword(auth, firstEmail, password); // Ensure the names match here
  //       console.log("Login successfully");
  //       navigate("/");
  //     } catch (err) {
  //       alert("Wrong Email or Password");
  //       console.log(err);
  //     }
  //   };

  const createNewAccount = () => {
    navigate("/signup");
  };

  return (
    <div className="body">
      <div className="form-container">
        <form>
          <input
            className="emailinput pl-2"
            type="email"
            placeholder="Email address"
            // {...register('firstEmail', { required: true })}
          />
          {/* {errors.firstEmail && (
            <p className="absolute mt-0 ml-5 text-red-600 text-lg">Email is required</p>
          )} */}
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="off"
            // {...register("password", {
            //   required: "Password is required.",
            //   minLength: {
            //     value: 6,
            //     message: "Password must be at least 6 characters long.",
            //   },
            // })}
            className="passwordinput pl-2"
          />
          {/* {errors.password && (
            <p className="absolute mt-0 ml-5 text-red-600 text-lg">
              {errors.password.message}
            </p>
          )} */}
          <button type="submit" className="loginbutton">
            Login
          </button>
          <button
            type="button"
            className="logincreatebtn"
            onClick={createNewAccount}
          >
            Create new account
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
