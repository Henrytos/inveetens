export function Footer() {
  return (
    <footer className="flex items-center border-t border-foreground justify-center py-8">
      <p className=" font-light">
        ©
        <span className="text-primary font-medium">
          {" "}
          {new Date().getFullYear()}
        </span>{" "}
        Investeens. Todos os direitos reservados.
      </p>
    </footer>
  );
}
