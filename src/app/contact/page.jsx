"use client";

import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendContactForm,
  resetContactState,
} from "../../redux/Slice/ContactSlice";
import { fetchCompanyProfile } from "../../redux/Slice/CompanyProfileSlice";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Captcha from "../../UI/components/Captcha/Captcha";


import toast, { Toaster } from "react-hot-toast";

/* ================= CUSTOM TOASTS ================= */
const sendingToast = () =>
  toast.loading("📩 Sending your message...", {
    style: {
      background: "#111",
      color: "#fff",
      border: "1px solid #444",
      fontWeight: "600",
    },
  });

const successToast = () =>
  toast.success("✅ Message sent successfully!", {
    duration: 4000,
    style: {
      background: "#16a34a",
      color: "#fff",
      fontWeight: "600",
    },
  });

const errorToast = (msg) =>
  toast.error(msg || "❌ Something went wrong", {
    duration: 4000,
    style: {
      background: "#dc2626",
      color: "#fff",
      fontWeight: "600",
    },
  });

export default function GymContactPage() {
  const dispatch = useDispatch();

  const { loading, success, error } = useSelector((state) => state.contact);
  const { profile } = useSelector((state) => state.companyProfile);

  const [isClient, setIsClient] = useState(false);
  const [captchaPassed, setCaptchaPassed] = useState(false);
  const [captchaReset, setCaptchaReset] = useState(false);
  const [sendingToastId, setSendingToastId] = useState(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  /* ================= CLIENT FIX ================= */
  useEffect(() => setIsClient(true), []);

  /* ================= FETCH PROFILE ================= */
  useEffect(() => {
    dispatch(fetchCompanyProfile());
  }, [dispatch]);

  /* ================= INPUT HANDLER ================= */
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  /* ================= SUBMIT ================= */
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.subject.trim() ||
      !form.message.trim()
    ) {
      errorToast("Please fill up all fields");
      return;
    }

    if (!captchaPassed) {
      errorToast("Please verify captcha first");
      return;
    }

    const toastId = sendingToast();
    setSendingToastId(toastId);

    dispatch(
      sendContactForm({
        name: form.name,
        email: form.email,
        address: "Gym Website",
        mobile_no: "N/A",
        message: `${form.subject} - ${form.message}`,
      })
    );
  };

  /* ================= SUCCESS ================= */
  useEffect(() => {
    if (success) {
      if (sendingToastId) toast.dismiss(sendingToastId);
      successToast();

      setForm({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setCaptchaPassed(false);
      setCaptchaReset(true);
      setTimeout(() => setCaptchaReset(false), 100);
    }
  }, [success]);

  /* ================= ERROR ================= */
  useEffect(() => {
    if (error) {
      if (sendingToastId) toast.dismiss(sendingToastId);
      errorToast(error);
    }
  }, [error]);

  /* ================= RESET STATE ================= */
  useEffect(() => {
    return () => dispatch(resetContactState());
  }, [dispatch]);

  return (
    <>

      {/* TOASTER */}
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            borderRadius: "12px",
          },
        }}
      />

      <section className=" min-h-screen text-black">
        {/* MAP */}
        <div className="w-full h-[320px]">
          {isClient && (
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d911.8541336394476!2d83.46465169296711!3d27.67522076437478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39968500441f237b%3A0x6e34b4b45b02ec7!2sExtreme%20fitness%20club%60%60!5e0!3m2!1sen!2snp!4v1767583368534!5m2!1sen!2snp"
              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />

          )}
        </div>

        {/* CONTENT */}
        <div className="bg-[#ee6307] w-full min-h-screen px-6 py-20 grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* LEFT INFO */}
          <div className="space-y-8">
            <h2 className="text-3xl font-bold text-white">Get In Touch</h2>

            <p className="text-white font-semibold">
              Have questions about membership or training?
              Contact us and start your fitness journey today.
            </p>

            <div className="space-y-6">
              <Info icon={<MapPin />} text={profile?.address || "Nepal"} />
              <Info icon={<Phone />} text={profile?.phone_no || "+977 9800000000"} />
              <Info icon={<Mail />} text={profile?.email || "info@gymfitness.com"} />
              <Info icon={<Clock />} text="Mon – Sat : 5:00 AM – 9:00 PM" />
            </div>
          </div>

          {/* FORM */}
          <div className="bg-[#121111] p-10 -mt-47 rounded-2xl shadow-2xl max-w-xl mx-auto w-full">
            <h3 className="text-2xl font-semibold mb-8 text-white">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {["name", "email", "subject"].map((field) => (
                <input
                  key={field}
                  name={field}
                  type={field === "email" ? "email" : "text"}
                  value={form[field]}
                  onChange={handleChange}
                  placeholder={`Your ${field}`}
                  className="w-full px-4 py-3 bg-[#121111] text-white border rounded-lg"
                />
              ))}

              <textarea
                name="message"
                rows="4"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                className="w-full px-4 py-3 bg-[#121111] text-white border rounded-lg"
              />

              <Captcha
                onSuccess={() => setCaptchaPassed(true)}
                reset={captchaReset}
              />

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-white text-black font-bold rounded-lg hover:scale-[1.02] transition"
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </section>

    </>
  );
}

/* ================= INFO ROW ================= */
const Info = ({ icon, text }) => (
  <div className="flex items-center gap-4 text-white font-bold">
    {icon}
    <span>{text}</span>
  </div>
);

