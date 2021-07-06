// import React from 'react'

// export default function SignIn({flag}) {
//     return (
//         <div className="signUp Form"style={{display:flag ? 'block' : 'none'}}>
//             sign In
//         </div>
//     )
// }
import * as React from "react";
import { useForm } from "react-hook-form";
// import Headers from "./Header";
// import './SignIn.styles.css'

export default function SignIn({flag}) {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form style={{display:flag ? 'block' : 'none'}} onSubmit={handleSubmit(onSubmit)}>
      {/* <Headers /> */}

      <input
        {...register("firstName", { required: true, minLength: 3 })}
        placeholder="First name"
      />
      {errors.firstName && errors.firstName.type === "required" && (
        <span> First Name is required </span>
      )}
      {errors.firstName && errors.firstName.type === "minLength" && (
        <span> First Name min 3 chars must be given </span>
      )}
      <input
        {...register("lastName", {
          maxLength: {
            value: 10,
            message: "Last name max 10 chars must be given"
          },
          minLength: {
            value: 8,
            message: "Last name min 8 chars must be given"
          }
        })}
        placeholder="Last name"
      />
      {errors.lastName && <span> {errors.lastName.message} </span>}
      <select {...register("category")}>
        <option value="">Select...</option>
        <option value="client">clientUser</option>
        <option value="Admin">AdminUser</option>
      </select>

      <input type="submit" />
    </form>
  );
}

