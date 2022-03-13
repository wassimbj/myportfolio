import Head from "next/head";
import Image from "next/image";
import Navbar from "../components/Navbar";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import { useEffect, useState } from "react";
import NoteWorthyProjectCard from "../components/NoteWorthyProjectCard";
import featuredProjects from "../meta/featured-projects.json";
import noteWorthyProjects from "../meta/noteworthy-projects.json";

export default function Home() {
  const [page, setPage] = useState({
    height: 0,
    width: 0,
  });

  useEffect(() => {
    setPage({
      height: Math.max(
        document.body.scrollHeight,
        document.documentElement.scrollHeight,
        document.body.offsetHeight,
        document.documentElement.offsetHeight,
        document.body.clientHeight,
        document.documentElement.clientHeight
      ),
      width: window.innerWidth,
    });
  }, []);

  return (
    <div>
      <Head>
        <title>Wassim Ben Jdida | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* ----- Nav ------ */}
      <Navbar />
      {/* ----- Nav ------ */}

      <div className="absolute -top-2 left-0 right-0 bottom-0 -z-10 opacity-25">
        <Image
          src={page.width > 1200 ? "/vector.svg" : "/vector11.svg"}
          width={page.width}
          height={page.height}
          layout="fixed"
          alt=""
        />
      </div>

      <main className="mx-auto max-w-5xl px-2">
        <section id="about" className="mt-20">
          <h1 className="text-lightGreen lg:text-5xl md:text-4xl text-3xl font-black">
            Wassim Ben Jdida
          </h1>
          <span className="block lg:text-3xl md:text-2xl text-xl font-semibold text-gray-200">
            Developer <span className="text-white opacity-20">&&</span>{" "}
            Entrepreneur
          </span>
          <p className="font-light max-w-2xl mt-10">
            I’m a software developer and an entrepreneur, I love learning new
            things, currently I’m focused on learning about AWS, and building{" "}
            <a
              href="https://beamaan.com"
              className="text-lightGreen border-b border-lightGreen border-opacity-50 hover:border-opacity-100"
            >
              beamaan.com
            </a>{" "}
            with my best friend.
          </p>
        </section>
        <section id="work" className="mt-40">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30 ">~$ ls</span>{" "}
            <span className="bg-lightGreen text-darkGreen">
              /Selected works
            </span>
            {/* /Selected works */}
          </div>

          {/*  className="md:-mt-10 mt-0 cursor-grab" */}
          <div role="main" className="space-y-5">
            {featuredProjects.map((project, i) => (
              <FeaturedProjectCard
                title={project.title}
                builtWith={project.builtWith}
                code={project.code}
                demo={project.demo}
                description={project.description}
                image={project.image}
                subtitle={project.subtitle}
                key={i}
                reverse={i % 2 != 0}
              />
            ))}
          </div>
        </section>

        <section id="work" className="mt-40">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30">~$ ls </span>{" "}
            <span className="bg-lightGreen text-darkGreen">
              /Noteworthy projects
            </span>
            {/* /Noteworthy projects */}
          </div>

          {/*  className="md:-mt-10 mt-0 cursor-grab" */}
          <div role="main" className="space-y-5">
            <div className="grid gap-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1">
              {noteWorthyProjects.map((project, i) => (
                <NoteWorthyProjectCard
                  key={i}
                  builtWith={project.builtWith}
                  code={project.code}
                  demo={project.demo}
                  description={project.description}
                  title={project.title}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mt-40 pb-10">
          <div className="block sm:text-3xl mb-5 text-xl font-semibold text-lightGreen py-2">
            <span className="text-lightGreen opacity-30">~$ cat </span>{" "}
            <span className="bg-lightGreen text-darkGreen">/Contact.me</span>
          </div>
          <p className="max-w-lg">
            My inbox is always open. Whether you have a question or just want to
            say hi, I’ll try my best to get back to you.
          </p>
          <div className="grid md:grid-cols-3 grid-cols-1 gap-10 mt-10">
            <a
              rel="noreferrer"
              target="_blank"
              href="https://github.com/wassimbj"
              className="block"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Github
                </span>
                <p className="text-white"> Mostly coding at the morning </p>
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="https://linkedin.com/in/wassimbenjdida"
              className="block"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Linkedin
                </span>
                <p className="text-white"> Let&apos;s connect ! </p>
              </div>
            </a>
            <a
              rel="noreferrer"
              target="_blank"
              href="mailto:wassimbenjdida@gmail.com"
              className="block"
            >
              <div>
                <span className="inline-block text-lightGreen font-semibold text-xl border-b border-lightGreen">
                  Email
                </span>
                <p className="text-white"> wassimbenjdida@gmail.com </p>
              </div>
            </a>
          </div>
        </section>
      </main>

      <footer className="mt-24 bg-[#0a3d4b] -5 py-3">
        <div className="text-center text-sm">
          <span> wassim ben jdida </span>
          <span> ©{new Date().getFullYear()} </span>
          <span className="mt-2 block text-center text-xs">
            Designed with ☕ by me, even that curly line 😁
          </span>
        </div>
      </footer>
    </div>
  );
}
