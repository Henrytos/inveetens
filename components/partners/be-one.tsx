import { link } from "fs";
import { Content } from "../content";
import { FormToEmail } from "../form-to-email";
import { Marking } from "../marking";
import { Text } from "../text";
import { Title } from "../title";
import { findByIcon } from "./icons";
import { Button } from "../ui/button";

export function BeOne() {
  const social_midia = [
    { name: "Instagram", link: "https://www.instagram.com/investeens/" },
    { name: "Linkedin", link: "https://www.linkedin.com/company/investeens" },
    { name: "TikTok", link: "https://www.tiktok.com/@investeens" },
    {
      name: "Youtube",
      link: "https://www.youtube.com/channel/UCDxqRL6Il1oD7Zu_EEUCC1g",
    },
  ];
  return (
    <>
      <Content
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20"
        id="contato"
      >
        <div className="flex flex-col justify-center  gap-4 h-full ">
          <Title className="mb-auto">
            SEJA NOSSO <Marking>PARCEIRO</Marking>
          </Title>
          <div className="mb-auto">
            <Text className="text-center text-xl">
              Tem uma ideia inovadora ou{" "}
              <Marking isText={true}>quer uma palestra da Investeens</Marking>{" "}
              na sua escola ou empresa?
            </Text>
            <Text className="text-center text-xl">
              Nos envie uma mensagem e responderemos assim que possível!
              <Marking isText={true}> inves.teens@outlook.com</Marking>
            </Text>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {social_midia.map((social) => (
              <a
                key={social.link}
                href={social.link}
                target="_blank"
                className="flex items-center justify-center gap-2 border-2 border-primary bg-primary text-background py-2 px-4 rounded-md hover:text-primary hover:bg-background transition-all duration-300 ease-in-out h-10"
              >
                {findByIcon(social.name.toLowerCase())}
                <span>{social.name}</span>
              </a>
            ))}
          </div>
        </div>

        <FormToEmail />
      </Content>
    </>
  );
}
