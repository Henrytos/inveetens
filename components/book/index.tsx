import { Content } from "../content";
import { Marking } from "../marking";
import { Title } from "../title";

export function Book() {
  return (
    <Content className="space-y-8">
      <Title>
        Livro
        <Marking>Quem te disse que não é possível?</Marking>
      </Title>

      <section className="grid grid-cols-3">
        <img
          src="https://m.media-amazon.com/images/I/716f6WhfwPL._SY385_.jpg"
          alt="quem disse que não é possível"
          className="col-span-1 object-cover h-96"
        />
        <div className="col-span-2"></div>
      </section>
    </Content>
  );
}
