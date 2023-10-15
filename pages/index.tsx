import type { NextPage } from "next";
import { FaFacebook, FaSquareXTwitter, FaInstagram, FaLinkedin } from "react-icons/fa6";
import Head from "next/head";
import hero from "../src/assets/work-in-progress.png";
import logo from "../src/assets/logo.png";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div className="relative h-screen md:h-auto md:min-h-screen overflow-hidden py-10 px-5">
      <Head>
        <title>Velocitech Electronics PCB manufacturer</title>
      </Head>

      <main className="flex flex-col items-center justify-between h-full text-center">
        <div>
          <svg
            className="absolute -z-10 opacity-80 right-full transform translate-y-2/4 translate-x-1/4 lg:translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)"
            />
          </svg>
          <svg
            className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
            width="404"
            height="784"
            fill="none"
            viewBox="0 0 404 784"
          >
            <defs>
              <pattern
                id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b"
                x="0"
                y="0"
                width="20"
                height="20"
                patternUnits="userSpaceOnUse"
              >
                <rect
                  x="0"
                  y="0"
                  width="4"
                  height="4"
                  className="text-gray-200"
                  fill="currentColor"
                />
              </pattern>
            </defs>
            <rect
              width="404"
              height="784"
              fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)"
            />
          </svg>
          <div>
            <Image src={logo} 
            width={250}
            height={70} 
            alt="logo image"/>
          </div>
          <div>
            <Image src={hero} width={250}
            height={250}  alt="work-in-progress image" />
          </div>
          <div>
            <h1 className="text-4xl font-bold">
              Our website is in development state,
            </h1>
            <p className="text-lg mt-5 md:mt-3 text-slate-700 font-semibold">
              but there is nothing holding back to contact with us!
            </p>
          </div>
          <div className="flex gap-5 justify-center my-5">
            <p className="text-slate-700">
              Email:{" "}
              <a href="mailto:contact@velocitech.in"
                className="hover:underline"
              >contact@velocitech.in</a>
            </p>
            <p className="text-slate-700">
              Mobile:{" "}
              <a href="mailto:+917066644344"
                className="hover:underline"
              >+91 7066644344</a>
            </p>
          </div>
          <div className="flex gap-5 justify-center my-5">
            <a href="https://www.facebook.com/velocitechelectronics/"><FaFacebook/></a>
            <a href="https://twitter.com/velocitech_ele"><FaSquareXTwitter/></a>
            <a href="https://www.instagram.com/velocitech.in/"><FaInstagram/></a>
            <a href="https://www.linkedin.com/company/velocitechelectronics/"><FaLinkedin/></a>
          </div>
        </div>
        <div>&copy; Velocitech Eelectronics Private Limited 2023</div>
      </main>
    </div>
  );
};

export default Home;
