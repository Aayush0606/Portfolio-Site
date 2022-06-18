import Image from "next/image";
import IconComponent from "../IconComponent/IconComponent";
import emailjs from "@emailjs/browser";
import { Form, Button } from "react-bootstrap";
import { useRef } from "react";
export default function ContactComponent() {
  const iconData = [
    {
      logoURL: "/github.svg",
      logoHeight: 55,
      logoWidth: 55,
      logoAlt: "Github Icon",
      logoNameConnect: "Github",
      connectUrl: "https://github.com/Aayush0606",
    },
    {
      logoURL: "/gmail.svg",
      logoHeight: 55,
      logoWidth: 55,
      logoAlt: "Gmail Icon",
      logoNameConnect: "Gmail",
      connectUrl: "mailto:aayushsharma0909@gmail.com",
    },
    {
      logoURL: "/linkedin.svg",
      logoHeight: 55,
      logoWidth: 55,
      logoAlt: "Linkedin Icon",
      logoNameConnect: "Linkedin",
      connectUrl: "https://www.linkedin.com/in/aayush-sharma-344497216/",
    },
  ];
  const formRef = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        formRef.current,
        process.env.NEXT_PUBLIC_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div
        id="contact-component"
        className="content-wrapper flex flex-col lg:flex-row p-16 gap-2"
      >
        <div className="flex-1 text-center flex flex-row justify-between items-center">
          <div className="social-icons flex flex-col gap-y-8 text-transparent bg-clip-text bg-gradient-to-l from-indigo-500 via-pink-500 to-purple-500">
            <h1 className="font-quantico text-3xl sm:text-5xl md:text-7xltext-7xl">
              Connect
            </h1>
            {iconData.map((item) => (
              <a
                target="blank"
                href={item.connectUrl}
                key={item.logoNameConnect}
                className="flex flex-row gap-x-6 hover:cursor-pointer hover:text-orange-800 text-decoration-none"
              >
                <IconComponent item={item} />
                <p className="font-quantico">{item.logoNameConnect}</p>
              </a>
            ))}
          </div>
          <div className="image-wrapper hidden lg:block ">
            <Image
              src="/connect.svg"
              alt="Picture of the author"
              width={350}
              height={350}
            />
          </div>
        </div>
        <div className="flex-1 text-center">
          <div className="form-wrapper">
            <Form ref={formRef} onSubmit={sendEmail}>
              <Form.Group className="mb-3" controlId="Name">
                <Form.Control
                  name="from_name"
                  className="bg-transparent text-white"
                  type="text"
                  placeholder="Enter name"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  name="from_email"
                  className="bg-transparent text-white"
                  type="email"
                  placeholder="Enter email"
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 text-red-500" controlId="message">
                <Form.Control
                  name="message"
                  className="bg-transparent text-white"
                  as="textarea"
                  rows={5}
                  type="text"
                  placeholder="Enter message"
                  required
                />
              </Form.Group>
              <button
                className="text-decoration-none mr-4 bg-[#fca5a5] p-2 rounded-xl font-quantico text-red-500 hover:bg-pink-400 hover:text-red-700"
                type="submit"
              >
                Send
              </button>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}
