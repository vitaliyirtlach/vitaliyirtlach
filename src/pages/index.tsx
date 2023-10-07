import Head from "next/head";

export default function Home() {
  return (
    <div className="max-w-[900px] mx-auto py-12">
      <Head>
        <title>Vitaliy Irtlach - Fullstack Software Engineer</title>
      </Head>
      <div className="flex items-center gap-3">
        <img src="/photo.jpeg" className="w-12 h-12 rounded-full" />
        <div>
          <p className="text-2xl font-bold">Vitaliy Irtlach</p>
          <p className="text-gray-500 text-sm">Fullstack Software Engineer</p>
        </div>
      </div>
      <div className="mt-4 text-gray-700 space-y-4">
        <p>
          My name is Vitaly Irtlach, and I was born on September 13, 2005 in the
          city of Dnipro, Ukraine. I am a software developer with experience in
          startups and commercial platforms.
        </p>
        <p>
          In 2023, I started studying at the{" "}
          <a href="https://www.dnu.dp.ua/en" target="_blank">
            Oles Honchar Dnipro National University
          </a>
          , majoring in computer engineering.
        </p>

        <p>
          I am currently working as a Fullstack JavaScript developer. My
          responsibilities include software development, outsourcing,
          interviewing job candidates, interviewing software customers, managing
          technical aspects of projects, mentoring and many other tasks.
        </p>
        <p>
          As part of this experience, I participated in the development of
          various projects, such as a service for investors, a site for finding
          and managing metalworking enterprises, a service for algotrading and
          many others. It was an intensive experience that helped me develop my
          skills and solve challenging tasks.
        </p>

        <p>
          In my free time, I enjoy sports, especially fitness, and learning new
          technologies. I like to keep my finger on the pulse of innovation and
          always try to stay on top of the latest technology trends.
        </p>
      </div>
      <hr className="my-6" />
      <div className="flex items-center gap-4">
        <a
          href="https://github.com/vitaliyirtlach"
          target="_blank"
          className="hover:text-black"
        >
          GitHub
        </a>
        <a
          href="https://www.instagram.com/vitaliyirtlach/"
          target="_blank"
          className="hover:text-pink-600"
        >
          Instagram
        </a>
        <a
          href="https://t.me/vitaliyirtlach"
          target="_blank"
          className="hover:text-blue-400"
        >
          Telegram
        </a>
        <a
          href="https://www.upwork.com/freelancers/~01c2b7dfc502099e16"
          target="_blank"
          className="hover:text-green-600"
        >
          Upwork
        </a>
        <a
          href="https://twitter.com/vitaliyirtlach"
          target="_blank"
          className="hover:text-black"
        >
          X
        </a>
      </div>
    </div>
  );
}
