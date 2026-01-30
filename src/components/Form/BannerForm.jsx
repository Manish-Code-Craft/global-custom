import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import { useForm } from "react-hook-form";

export default function BannerForm() {

  const {
    register,
    handleSubmit,
    handleError,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const handleKeyPress = (event) => {
    const allowedKeys = [
      "+",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "(",
      ")",
      " ",
    ];
    if (!allowedKeys.includes(event.key)) {
      event.preventDefault();
    }
  };
  const router = useRouter();
  const [ButtonShow, setButtonShow] = useState(false);
  const onSubmit = async (data) => {
    setButtonShow(true);
    try {
      const response = await fetch("https://crm-api.amrsoftec.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      router.push("/thank-you");
      setButtonShow(false);
    } catch (error) {
      console.error("Error:", error);
      alert("There was a problem sending your message.");
    }
  };

    return (
      
        <form onSubmit={handleSubmit(onSubmit, handleError)}>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Name"
                        name="name"
                        {...register("name", { required: "Name is required" })}
                        className={`input-feild ${
                          errors?.name ? "error" : ""
                        } border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-black focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}
                      />
                      {errors?.name && (
                        <p className="error-message">{errors.name.message}</p>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Email"
                        name="email"
                        {...register("email", {
                          required: "Email is required",
                          pattern: {
                            value:
                              /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                            message: "Invalid email address",
                          },
                        })}
                        className={`input-feild ${
                          errors?.email ? "error" : ""
                        } border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-black focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}
                      />
                      {errors?.email && (
                        <p className="error-message">{errors.email.message}</p>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Phone"
                        name="phone"
                        {...register("phone", {
                          required: "Phone is required",
                          pattern: {
                            value: /^(?:\+[0-9])?[0-9]{7,16}$/,
                            message: "Must be numeric and up to 16 digits",
                          },
                        })}
                        className={`input-feild ${
                          errors?.phone ? "error" : ""
                        } border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-black focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}
                        onKeyPress={handleKeyPress}
                      />
                      {errors?.phone && (
                        <p className="error-message">{errors.phone.message}</p>
                      )}
                    </div>
                    <div className="relative">
                      <input
                        type="text"
                        placeholder="Subject"
                        name="subject"
                        {...register("subject", {
                          required: "Subject is required",
                        })}
                        className={`input-feild ${
                          errors?.subject ? "error" : ""
                        } border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-black focus:border-primary w-full rounded border py-3 px-[14px] text-base outline-none`}
                      />
                      {errors?.subject && (
                        <p className="error-message">
                          {errors.subject.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="relative">
                      <textarea
                        rows="6"
                        placeholder="Your Message"
                        name="message"
                        {...register("message", {
                          required: "Message is required",
                        })}
                        className={`input-feild ${
                          errors?.message ? "error" : ""
                        } border-stroke dark:border-dark-3 dark:text-dark-6 dark:bg-dark text-black focus:border-primary w-full resize-none rounded border py-3 px-[14px] text-base outline-none`}
                      ></textarea>
                      {errors?.message && (
                        <p className="error-message">
                          {errors.message.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div className="mt-4">
                    <div className="mt-4">
                      <button
                        type="submit"
                        disabled={ButtonShow ? true : false}
                        className="w-full p-3 font-semibold hover:text-black text-white transition border rounded  bg-[#3daee0] hover:bg-[white] border-solid	border-[#3daee0]"
                      >
                        {ButtonShow ? "Sending" : "Send Message"}
                      </button>
                    </div>
                  </div>
                </form>

    )
}