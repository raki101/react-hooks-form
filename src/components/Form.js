import React from "react";
import { useForm } from "react-hook-form";
//eslint-disable-next-line
import { DevTool } from "@hookform/devtools";

const Form = () => {
  const form = useForm();

  const {
    register,
    //eslint-disable-next-line
    control,
    handleSubmit,
    formState: { errors },
    getValues,
    reset,
  } = form;

  const onSubmit = (data) => {
    console.log(data);
    reset();
  };

  const handleGetValues = () => {
    console.log("get values ", getValues());
  };

  return (
    <div className="container my-3">
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <h1>Forms</h1>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            autoComplete="off"
            id="username"
            {...register("username", {
              required: { value: true, message: "Username is required" },
              value: "hello kitty",
            })}
          />
          {errors.username && (
            <p className="text-danger">{errors.username.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            autoComplete="off"
            {...register("email", {
              required: { value: true, message: "Email is required" },
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                message: "Invalid email",
              },
              value: "abc@gmail.com",
            })}
          />
          {errors.email && (
            <p className="text-danger">{errors.email.message}</p>
          )}
        </div>
        <div className="mb-3">
          <label htmlFor="channel" className="form-label">
            Channel
          </label>
          <input
            type="text"
            className="form-control"
            id="channel"
            autoComplete="off"
            {...register("channel", {
              required: { value: true, message: "Channel is required" },
              value: "channel1",
            })}
          />
          {errors.channel && (
            <p className="text-danger">{errors.channel.message}</p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="twitter" className="form-label">
            Twitter
          </label>
          <input
            type="text"
            className="form-control"
            id="twitter"
            autoComplete="off"
            {...register("social.twitter", {
              value: "twitter@twitter.com",
            })}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="facebook" className="form-label">
            Facebook
          </label>
          <input
            type="text"
            className="form-control"
            id="facebook"
            autoComplete="off"
            {...register("social.facebook")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="primary" className="form-label">
            Primary Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="primary"
            autoComplete="off"
            {...register("phoneNumber[0]")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="secondary" className="form-label">
            Secondary Phone Number
          </label>
          <input
            type="text"
            className="form-control"
            id="secondary"
            autoComplete="off"
            {...register("phoneNumber[1]")}
          />
        </div>

        <div className="mb-3">
          <label htmlFor="age" className="form-label">
            Age
          </label>
          <input
            type="number"
            className="form-control"
            id="age"
            autoComplete="off"
            {...register("age", {
              valueAsNumber: true,
              required: {
                value: true,
                message: "Enter the age",
              },
            })}
          />
          {errors.age && <p className="text-danger">{errors.age.message}</p>}
        </div>

        <div className="mb-3">
          <label htmlFor="date" className="form-label">
            DOB
          </label>
          <input
            type="date"
            className="form-control"
            id="date"
            autoComplete="off"
            {...register("date", {
              valueAsDate: true,
              required: {
                value: true,
                message: "Enter the Date",
              },
            })}
          />
          {errors.date && <p className="text-danger">{errors.date.message}</p>}
        </div>

        <button type="submit" className="btn btn-primary mx-2">
          Submit
        </button>
        <button
          type="button"
          onClick={handleGetValues}
          className="btn btn-primary"
        >
          get values
        </button>
      </form>

      {/* <DevTool control={control} /> */}
    </div>
  );
};

export default Form;
