"use client";
/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { ButtonLink } from "../btn-link";
import { Content } from "../content";
import { Marking } from "../marking";
import { SubTitle } from "../sub-title";
import { Text } from "../text";
import { Title } from "../title";
import clsx from "clsx";

export function Book() {
  const [bookCover, setBookCover] = useState<string>(
    "https://m.media-amazon.com/images/I/716f6WhfwPL._SY385_.jpg"
  );
  const bookImgs = [
    {
      src: "https://m.media-amazon.com/images/I/716f6WhfwPL._SY385_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71r7WdoWJkL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/61vOdcTSW+L._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71DZx6mCLcL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/61Bk6sQ+EmL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71fJd6CViAL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71nNTgdvPPL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71Ky1Q7sXpL._SL1500_.jpg",
    },
    {
      src: "https://m.media-amazon.com/images/I/71FUAUGVF5L._SL1500_.jpg",
    },
  ];

  return (
    <Content className="space-y-8">
      <Title>Livro</Title>

      <section className="grid grid-cols-3 gap-8">
        <div className=" col-span-3 md:col-span-1 space-y-4">
          <img
            src={bookCover}
            alt="quem disse que não é possível"
            className=" object-cover h-[600px] md:h-[500px] w-full"
          />
          <div className="grid grid-cols-9 gap-2">
            {bookImgs.map((book) => (
              <img
                src={book.src}
                alt="image"
                key={book.src}
                className={clsx(
                  "w-full h-full object-cover opacity-50 cursor-pointer",
                  {
                    "border rounded-sm border-primary opacity-100":
                      book.src == bookCover,
                  }
                )}
                onClick={() => {
                  setBookCover(book.src);
                }}
              />
            ))}
          </div>
        </div>
        <div className="col-span-3 md:col-span-2 my-auto space-y-8">
          <SubTitle>
            <Marking>Quem te disse que não é possível?</Marking>
          </SubTitle>

          <Text>
            Está obra tem a finalidade de levar referências e inspirações aos
            jovens brasileiros, por meio de histórias que conectam e
            transformam, mostrando a essa juventude que, apesar das
            adversidades, é possível viver coisas incríveis.{" "}
            <Marking isText={true}>
              O livro traz uma coleção de entrevistas com empreendedores,
              artistas, líderes sociais, estudantes e professores
            </Marking>{" "}
            que são agentes de mudança no país e no mundo. Cada linha foi
            escrita por dois estudantes de escola pública, que adicionam suas
            vivências e músicas que motivam a acreditar nos próprios sonhos, o
            que faz o livro
            <Marking isText={true}>Quem te disse que não é possível?</Marking>,
            ser não apenas uma leitura, como também um instrumento de impacto
            social.
          </Text>
          <ButtonLink href="https://www.amazon.com.br/Quem-disse-que-n%C3%A3o-poss%C3%ADvel/dp/6500935322/ref=sr_1_1?crid=JJPH5BCFW59D&dib=eyJ2IjoiMSJ9.1l6UvPbdLafq_5eKiq-UO4F-ljaXSWQirk0FcX5wZ_Q2Rr-Xb6lCMlOHO6rJlZExawoli4w8pTvtgLACg2kLBnQhDYL6OZaBCRbvG63DfcgElyxqeT61Q7lhh-cYyIEeH40aCnfUNLrN35NLa8uJJu16qEEWGZ4H6c5ZdtYidds_8qzEk3S95dHubbtFvyQdbnIPm0md7YOHLAZaonlOP0kL5h9NJ5Ij7SlYGuizMHumdE4ebQ7tW1i_gV-OCI9iSfZEIZZBwNhs1ACFtOErDpWJN-FLYXsNwq1wTSVO7Rk.L9kMQtoFDt4w2-pQ9IvxGxT6WuWFaGVpwrjk3hBe1qE&dib_tag=se&keywords=quem+te+disse+que+n%C3%A3o+%C3%A9+poss%C3%ADvel&qid=1712929297&sprefix=quem+te+diss%2Caps%2C349&sr=8-1">
            Ver mais
          </ButtonLink>
        </div>
      </section>
    </Content>
  );
}
