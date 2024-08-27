import { useState } from "react";
import "../App.css";
// import { auth } from "./firebase";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import { useNavigate } from "react-router-dom";
// import { useForm } from "react-hook-form";

const Signup = () => {

    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setpassword] = useState("")

    const registerHandle = () => {
        console.table(name, email, password)
    }

  //   const navigate = useNavigate();

  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm();

  //   const handleSignup = async (data) => {
  //     const { Sname, sEmail, sPassword } = data;
  //     try {
  //       await createUserWithEmailAndPassword(auth, sEmail, sPassword);
  //       console.log("Account Created");
  //       navigate("/");
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  return (
    <div className="body">
      <div className="signup-form-container">
        <form>
          <input
            className="signinput"
            type="text"
            placeholder="Full Name"
            value={name}
            onChange={(e) => setname(e.target.value)}
            // {...register("Sname", { required: true })}
          />
          {/* {errors.Sname && (
            <p className="absolute -mt-4 ml-5 text-red-600 text-lg">
              Name is required
            </p>
          )} */}
          <input
            className="signinput"
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            // {...register("sEmail", { required: true })}
          />
          {/* {errors.sEmail && (
            <p className="absolute -mt-4 ml-5 text-red-600 text-lg">
              Email is required
            </p>
          )} */}
          <input
            className="signinput"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setpassword(e.target.value)}
            // {...register("sPassword", {
            //   required: "Password is required",
            //   minLength: {
            //     value: 6,
            //     message: "Password must be at least 6 characters long",
            //   },
            // })}
          />
          {/* {errors.sPassword && (
            <p className="absolute -mt-4 ml-5 text-red-600 text-lg">
              {errors.sPassword.message}
            </p>
          )} */}
          <button type="submit" className="Signupbtn" onClick={registerHandle}>
            Sign up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
