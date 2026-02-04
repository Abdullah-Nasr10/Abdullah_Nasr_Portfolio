import { useForm } from "react-hook-form";
import { FaPaperPlane } from "react-icons/fa";
import emailjs from "@emailjs/browser";
import { useState } from "react";
import Button from "../../GlobalComponents/Button/Button";
import "./ContactForm.css";

interface FormData {
  FirstName: string;
  LastName: string;
  Email: string;
  message: string;
}

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    try {
      await emailjs.send(
        "service_x6j6ioq",
        "template_48izkat",
        {
          first_name: data.FirstName,
          last_name: data.LastName,
          email: data.Email,
          message: data.message,
        },
        "dkUTZlWP0fug-Cvbp",
      );
      alert("✅ Message sent successfully!");
      reset();
    } catch (error) {
      alert("❌ Failed to send: " + JSON.stringify(error));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form-wrapper" data-aos="fade-up">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="d-flex flex-column gap-4"
      >
        {/* ==================== First Name & Last Name ==================== */}
        <div className="row g-4">
          <div className="col-md-6">
            <div className="input-group-custom">
              <label htmlFor="FirstName" className="form-label-custom">
                Your First Name
              </label>
              <input
                type="text"
                id="FirstName"
                placeholder="First name"
                className="form-control-custom rounded-pill"
                {...register("FirstName", {
                  required: "First name is required",
                  pattern: {
                    value: /^[A-Za-z]{2,}$/,
                    message: "Only letters, minimum 2 characters",
                  },
                })}
              />
              {errors.FirstName && (
                <span className="error-message">
                  ⚠ {errors.FirstName.message}
                </span>
              )}
            </div>
          </div>
          <div className="col-md-6">
            <div className="input-group-custom">
              <label htmlFor="LastName" className="form-label-custom">
                Your Last Name
              </label>
              <input
                type="text"
                id="LastName"
                placeholder="Last name"
                className="form-control-custom rounded-pill"
                {...register("LastName", {
                  required: "Last name is required",
                  pattern: {
                    value: /^[A-Za-z]{2,}$/,
                    message: "Only letters, minimum 2 characters",
                  },
                })}
              />
              {errors.LastName && (
                <span className="error-message">
                  ⚠ {errors.LastName.message}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* ===================== Email ===================== */}
        <div className="input-group-custom">
          <label htmlFor="Email" className="form-label-custom">
            Your Email Address
          </label>
          <input
            type="email"
            id="Email"
            placeholder="Email"
            className="form-control-custom rounded-pill"
            {...register("Email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Please enter a valid email like example@mail.com",
              },
            })}
          />
          {errors.Email && (
            <span className="error-message">⚠ {errors.Email.message}</span>
          )}
        </div>

        {/* ===================== Message ===================== */}
        <div className="input-group-custom">
          <label htmlFor="message" className="form-label-custom">
            Your Message
          </label>
          <textarea
            id="message"
            placeholder="Message"
            rows={6}
            className="form-control-custom rounded-4"
            {...register("message", {
              required: "Message is required",
              minLength: {
                value: 10,
                message: "Message must be at least 10 characters",
              },
            })}
          />
          {errors.message && (
            <span className="error-message">⚠ {errors.message.message}</span>
          )}
        </div>

        {/* ===================== Submit Button ===================== */}
        <div className="d-flex justify-content-end mt-4">
          <Button
            type="submit"
            btnText={isSubmitting ? "Sending..." : "Send Message"}
            btnIcon={FaPaperPlane}
            disabled={isSubmitting}
          />
        </div>
      </form>
    </div>
  );
}

export default ContactForm;
