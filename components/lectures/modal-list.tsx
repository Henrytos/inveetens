"use client";
import { Content } from "../content";
import { Title } from "../title";
import { Marking } from "../marking";

import { SubTitle } from "../sub-title";
import { CarouselItemLectures } from "./carousel-item-lectures";
import { palestraList } from "./palestra-list";
import { CarouselContentLectures } from "./carousel-content-lectures";

export interface Palestra {
  id: number;
  title: string;
  src: string;
}

export interface PalestraList {
  2024: Palestra[];
  2023: Palestra[];
}

export function ListOfLectures() {
  return (
    <>
      <Content className="space-y-8">
        <Title>
          ONDE JÁ <Marking>PALESTRAMOS</Marking>
        </Title>

        <section className="space-y-4">
          <SubTitle>2023</SubTitle>
          <CarouselContentLectures>
            {palestraList[2023].map((palestra) => (
              <CarouselItemLectures palestra={palestra} key={palestra.id} />
            ))}
          </CarouselContentLectures>
        </section>

        <section className="space-y-4">
          <SubTitle>2024</SubTitle>
          <CarouselContentLectures>
            {palestraList[2024].map((palestra) => (
              <CarouselItemLectures palestra={palestra} key={palestra.id} />
            ))}
          </CarouselContentLectures>
        </section>
      </Content>
    </>
  );
}
