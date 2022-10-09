import React, { useState } from "react";
import { useForm, handleSubmit } from "react-hook-form";
import "./SignUpForm.css";

export default function SignUpForm() {
  // const [enteredValue, setValue] = useState("");
  // const [isValid, setValid] = useState(true);
  // const [password, setPassword] = useState({
  //   passwordValue: "",
  //   passwordShow: false,
  //   retypedPasswordValue: "",
  //   retypedPasswordShow: false,
  // });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  

  const onSubmit = (data) => {
    data.preventDefault();
    console.log(data)
    
    const userData = {
      email: ''
    }
    
  };

 

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* EMAIL */}
        <input
          {...register("email", {
            type: 'email',
            required: "This is required",
            message: "Enter a valid email address",
          })}
          placeholder="Email"
        />
        <p>{errors.email?.message}</p>


        {/* PASSWORD */}
        <input
          {...register("password", {
            required: "This is required",
            minLength: { value: 8, message: "Minimum length is 8" },
          })}
          type="password"
          placeholder="Password"
        />
        <p>{errors.password?.message}</p>
        
        {/* RETYPE PASSWORD */}
        <input
          {...register("retypedPassword", {
            required: "This is required",
            minLength: { value: 8, message: "Mininmum length is 8" },
            message: "Password does not match",
          })}
          type="password"
          placeholder="Retype password"
        />
        <p>{errors.retypedPassword?.message}</p>
        

        {/* FIRST NAME */}
        <input
          {...register("firstName", {
            required: "This is required",
          })}
          placeholder="First Name"
        />
        <p>{errors.firstName?.message}</p>
        
        {/* LAST NAME */}
        <input
          {...register("lastName", {
            required: "This is required",
          })}
          placeholder="Last Name"
        />
        <p>{errors.lastName?.message}</p>

        <input type="submit" />
        <input type="reset" />
      </form>
    </div>
  );
}