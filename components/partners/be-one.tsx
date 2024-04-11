import { Content } from "../content";
import { FormToEmail } from "../form-to-email";
import { Marking } from "../marking";
import { Text } from "../text";
import { Title } from "../title";

export function BeOne() {
  return (
    <>
      <Content
        className="grid grid-cols-1 sm:grid-cols-2 gap-8 pb-20"
        id="contato"
      >
        <div className="flex flex-col justify-center  gap-4 h-full relative">
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
        </div>

        <FormToEmail />
      </Content>
    </>
  );
}
