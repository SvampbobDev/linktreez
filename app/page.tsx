import Avatar from "./(components)/Avatar";
import Card from "./(components)/Card";

import { FaGithub, FaCode } from "react-icons/fa";
import { FaDiscord, FaXTwitter } from "react-icons/fa6";

import { items, tagline } from "../data/data";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center justify-center w-full max-w-xl mx-auto">
        <section className="flex flex-col items-center gap-5 justify-center my-10">
          <Avatar />
          <div className="text-2xl font-semibold">
            <a href="/">@spoonge_dev</a>
          </div>

          <div className="text-zinc-500 flex justify-between gap-5">
            {tagline.map((item, index) => (
              <div
                className="text-zinc-500 text-sm text-center font-thin"
                key={index}
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        <div className="w-full flex gap-2 my-2 flex-col items-center justify-center pb-2 lg:pb-10">
          <Card
            title={items.github.title}
            icon={<FaGithub />}
            url={items.github.url}
          />
          <Card
            title={items.projects.title}
            icon={<FaCode />}
            url={items.projects.url}
          />
          <Card
            title={items.discord.title}
            icon={<FaDiscord />}
            url={items.discord.url}
          />
          <Card title={items.X.title} icon={<FaXTwitter />} url={items.X.url} />
        </div>
      </div>
    </>
  );
}
