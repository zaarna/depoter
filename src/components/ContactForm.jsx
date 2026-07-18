"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Loader2, X } from "lucide-react";
import PhoneInput, { isValidPhoneNumber } from "react-phone-number-input";
import "react-phone-number-input/style.css";
import Image from "next/image";

const initialData = {
  fullName: "",
  email: "",
  country: "",
  phone: "",
  company: "",
  website: "",
  description: "",
};

export default function ContactForm() {
  const router = useRouter();

  const [form, setForm] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handlePhoneChange = (value) => {
    setForm((prev) => ({ ...prev, phone: value || "" }));
    if (errors.phone) {
      setErrors((prev) => ({ ...prev, phone: undefined }));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.fullName.trim()) {
      newErrors.fullName = "Please enter your full name.";
    } else if (form.fullName.trim().length < 2) {
      newErrors.fullName = "Name looks too short.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your work email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!form.country.trim()) {
      newErrors.country = "Please enter your country.";
    }

    if (!form.phone) {
      newErrors.phone = "Please enter your phone number.";
    } else if (!isValidPhoneNumber(form.phone)) {
      newErrors.phone = "Enter a valid phone number.";
    }

    if (!form.company.trim()) {
      newErrors.company = "Please enter your company or brand name.";
    }

    if (form.website.trim()) {
      const websitePattern = /^(https?:\/\/)?([\w-]+\.)+[\w-]{2,}(\/\S*)?$/i;
      if (!websitePattern.test(form.website.trim())) {
        newErrors.website = "Enter a valid website URL.";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      console.log("Status:", res.status);
      console.log("Response:", data);

      if (!res.ok) {
        alert(data.message || "Something went wrong");
        return;
      }

      setShowModal(true);
      setForm(initialData);
    } catch (error) {
      console.error("Client Error:", error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const closeModalAndGoHome = () => {
    setShowModal(false);
    router.push("/");
  };

  return (
    <div className="relative">
      {/* react-phone-number-input renders its own internal markup, so it needs
          real CSS to override its default boxed look — Tailwind classes can't
          reach into a third-party component's internal elements. */}
      <style jsx global>{`
        .depoter-phone .PhoneInput {
          align-items: center;
          border-bottom: 2px solid #c4ac77;
          padding-bottom: 4px;
          transition: border-color 0.15s ease;
        }
        .depoter-phone .PhoneInput:focus-within {
          border-bottom-color: #212121;
        }
        .depoter-phone .PhoneInput.has-error {
          border-bottom-color: #d64545;
        }
        .depoter-phone .PhoneInputCountry {
          margin-right: 10px;
        }
        .depoter-phone .PhoneInputCountryIcon {
          width: 1.4em;
          height: 1.4em;
          box-shadow: none;
        }
        .depoter-phone .PhoneInputCountrySelectArrow {
          color: #4c4536;
          opacity: 1;
        }
        .depoter-phone .PhoneInputInput {
          border: none;
          outline: none;
          background: transparent;
          font-weight: 500;
          font-size: 15px;
          color: #4c4536;
        }
        .depoter-phone .PhoneInputInput::placeholder {
          color: #b9a983;
        }
      `}</style>

      <div className="rounded-3xl border border-[#21212180] bg-[#FFE7B2] p-10">
        <form onSubmit={submitHandler} noValidate>
          <div className="space-y-6">
            <Input
              label="Full Name"
              required
              name="fullName"
              placeholder="Enter Your Name"
              value={form.fullName}
              onChange={handleChange}
              error={errors.fullName}
            />

            <Input
              label="Work Email"
              required
              name="email"
              type="email"
              placeholder="Enter Your Email"
              value={form.email}
              onChange={handleChange}
              error={errors.email}
            />

            <Input
              label="Country"
              required
              name="country"
              placeholder="Enter Your Country"
              value={form.country}
              onChange={handleChange}
              error={errors.country}
            />

            {/* Phone with country code dropdown (react-phone-number-input) */}
            <div className="depoter-phone">
              <PhoneInput
                international
                defaultCountry="AE"
                countryCallingCodeEditable={false}
                placeholder="Phone Number"
                value={form.phone}
                onChange={handlePhoneChange}
                className={errors.phone ? "has-error" : ""}
              />
              {errors.phone && (
                <p className="mt-1 text-sm text-[#D64545]">{errors.phone}</p>
              )}
            </div>

            <Input
              label="Company / Brand Name"
              required
              name="company"
              placeholder="Enter Your Company / Brand Name"
              value={form.company}
              onChange={handleChange}
              error={errors.company}
            />

            <Input
              label="Website URL"
              name="website"
              placeholder="Enter Your Website URL"
              value={form.website}
              onChange={handleChange}
              error={errors.website}
            />

            <div className="md:col-span-2">
              <label className="mb-2 block font-medium text-[#4C4536]">
                Description
              </label>

              <textarea
                rows={6}
                name="description"
                value={form.description}
                onChange={handleChange}
                placeholder="Tell us about your requirements."
                className="w-full rounded-xl border border-[#C4AC77] p-4 text-[#212121] outline-none transition focus:border-[#212121]"
              />
            </div>
          </div>

          <button
            disabled={loading}
            className="mt-8 flex w-full items-center justify-center gap-3 rounded-xl bg-[#1B1712] py-4 text-lg font-semibold text-[#FFBE2E] transition hover:bg-[#2A241C] disabled:opacity-70"
          >
            {loading && <Loader2 className="h-5 w-5 animate-spin" />}
            Submit
          </button>
        </form>
      </div>

      {/* Thank you popup */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
          <div className="mx-auto w-full max-w-lg rounded-[32px] bg-[#FDF6E8] p-10 text-center shadow-2xl">
            <div className="mx-auto mb-6 w-24">
              <div className="mx-auto mb-6 flex justify-center">
                <Image
                  src="/success.gif"
                  alt="Success"
                  width={120}
                  height={120}
                  unoptimized
                  priority
                />
              </div>
            </div>

            <h2 className="text-xl font-bold text-[#2B2110] sm:text-5xl">
              Thank You!
            </h2>

            <p className="mt-3 text-base leading-8 text-[#3D3728]">
              Thank you for contacting <strong>Depoter</strong>. Our team will
              contact you as soon as possible.
            </p>

            <button
              onClick={closeModalAndGoHome}
              className="mt-6 rounded-full bg-[#1B1712] px-10 py-4 font-semibold text-[#FFBE2E] transition hover:bg-[#2A241C]"
            >
              Back To Home
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

function Input({ label, required, error, ...props }) {
  return (
    <div>
      <label className="mb-2 block text-[15px] font-medium text-[#4C4536]">
        {label}
        {required && <span className="text-[#D64545]"> *</span>}
      </label>

      <input
        {...props}
        required={required}
        className={`h-5 w-full border-b-2 bg-transparent outline-none placeholder:text-[#B9A983] ${error
          ? "border-[#D64545] focus:border-[#D64545]"
          : "border-[#C4AC77] focus:border-[#212121]"
          }`}
      />

      {error && <p className="mt-1 text-sm text-[#D64545]">{error}</p>}
    </div>
  );
}
