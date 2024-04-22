import { cn } from "../lib/utils";

export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-primary text-foreground rounded-sm px-2 py-1 ml-1",
        className
      )}
    >
      {children}
    </span>
  );
};

export const CARDS = [
  {
    id: 0,
    name: "Emilio",
    designation: "Invitado",
    content: (
      <p>
        Me gustaría ver qué <Highlight>regalos han sido comprados</Highlight>  por otros invitados para evitar comprar el mismo regalo y elegir una opción diferente.
      </p>
    ),
  },
  {
    id: 1,
    name: "Cristina",
    designation: "Invitada",
    content: (
      <p>
        Quisiera poder filtrar la <Highlight>lista de regalos</Highlight> por precio para encontrar fácilmente opciones que se ajusten a mi presupuesto.
      </p>
    ),
  },
  {
    id: 2,
    name: "Bianca",
    designation: "Invitada",
    content: (
      <p>
        Como invitada a la boda, me gustaría poder <Highlight>ver los regalos grupales</Highlight> ya existentes y elegir uno al que sumarme.
      </p>
    ),
  },
  {
    id: 3,
    name: "Ana",
    designation: "Novia",
    content: (
      <p>
        Como novia, me gustaría poder <Highlight>crear mi lista de regalos</Highlight> de forma rápida y sencilla, sin complicaciones.
      </p>
    ),
  },
  {
    id: 4,
    name: "Rogelio",
    designation: "Novio",
    content: (
      <p>
        Como novio, me gustaría <Highlight>recibir una notificación</Highlight> cuando un invitado compra un regalo o cuánto dinero han aportado.
      </p>
    ),
  },
];


