"use client";
import React, { useState } from "react";
import WAIcon from "../../../public/whatsapp.png";
import IGIcon from "../../../public/instagram.png";
import MailIcon from "../../../public/gmail.png";
import GithubIcon from "../../../public/github-icon.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <h5 className="text-xl font-bold text-white my-2">
          Your Next Project Starts Here.
        </h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I&apos;m available for new challenges<br>
          Let&apos;s connect!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://wa.me/6289523043715" target="_blank" rel="noopener noreferrer">
            <Image src={WAIcon} alt="WhatsApp Icon" className="w-14 h-14"/>
          </Link>
          <Link href="https://www.instagram.com/ghazyachmed"  target="_blank" rel="noopener noreferrer" >
            <Image src={IGIcon} alt="Instagram Icon" className="w-14 h-14"/>
          </Link>
          <Link href="https://mail.google.com/mail/?view=cm&fs=1&to=ghazyurbayani@gmail.com&su=Subject&body=YourMessage"  target="_blank" rel="noopener noreferrer" >
            <Image src={MailIcon} alt="G-Mail Icon" className="w-14 h-14"/>
          </Link>
          <Link href="https://github.com/GhazyUrbayani"  target="_blank" rel="noopener noreferrer" >
            <Image src={GithubIcon} alt="GitHub Icon" className="w-14 h-14"/>
          </Link>
        </div>
      </div>
      <div>
        {emailSubmitted ? (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        ) : (
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-white block mb-2 text-sm font-medium"
              >
                Your email
              </label>
              <input
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Ex: YourMail@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="subject"
                className="text-white block text-sm mb-2 font-medium"
              >
                Subject
              </label>
              <input
                name="subject"
                type="text"
                id="subject"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Just saying hi!"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        )}
      </div>
    </section>
  );
};

export default EmailSection;
