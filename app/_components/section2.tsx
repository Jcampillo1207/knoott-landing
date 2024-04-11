import { SectionUniversal } from "@/components/layout/sections";
import { HeroTitle } from "@/components/text/texts";
import { Blend } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Accordion } from "@/components/ui/accordion";
import { AccordionShow } from "@/components/interface/accordionShow";

export const Section2 = () => {
  const mesaItems = [
    {
      title: "Personalización",
      value: "item-1",
      content:
        "Personaliza tu mesa de regalos seleccionando los artículos de mayor interés para ti y tus invitados. Elige entre una amplia variedad de opciones y crea una lista única que refleje tus preferencias y estilo.",
      icon: "Pencil",
    },
    {
      title: "Comparte tu link",
      value: "item-2",
      content:
        "Comparte el enlace de tu mesa de regalos de manera fácil y rápida. Copia el link y envíalo a tus invitados a través de correo electrónico, redes sociales o cualquier otro medio de comunicación para que puedan acceder y contribuir a tu lista de deseos.",
      icon: "Forward",
    },
    {
      title: "Configurable",
      value: "item-3",
      content:
        "Si no encuentras algún producto específico dentro de nuestras opciones, no te preocupes. Puedes configurar y añadir cualquier artículo a tu mesa de regalos, asegurándote de que se ajuste perfectamente a tus necesidades y deseos.",
      icon: "Cog",
    },
  ];

  const bodaItems = [
    {
      title: "Mensaje",
      value: "item-1",
      content:
        "Despliega un mensaje personalizado para tus invitados en tu mesa de regalos. Utiliza este espacio para darles la bienvenida al evento, agradecerles por su apoyo y contribuciones, o compartir cualquier detalle importante sobre la celebración.",
      icon: "MessageCircleHeart",
    },
    {
      title: "Código de acceso",
      value: "item-2",
      content:
        "Tus invitados pueden acceder a tu mesa de regalos de forma segura mediante un enlace compartido o ingresando el código de la boda en la página web de Knoott. Esta función garantiza la privacidad y exclusividad de tu lista de regalos.",
      icon: "Link",
    },
    {
      title: "Temporizador",
      value: "item-3",
      content:
        "Mantén a tus invitados emocionados y a la expectativa con un contador regresivo que muestra el tiempo restante hasta el día de tu evento. Este temporizador agrega un toque de emoción y anticipación a tu mesa de regalos.",
      icon: "Hourglass",
    },
  ];

  const statItems = [
    {
      title: "Regalos",
      value: "item-1",
      content:
        "Mantén un seguimiento de los regalos más populares en tu mesa, visualizando el porcentaje de contribución alcanzado para cada artículo. Esta función te permite ver cuáles son los favoritos de tus invitados y el progreso hacia la meta de cada regalo.",
      icon: "Gift",
    },
    {
      title: "Invitados",
      value: "item-2",
      content:
        "Consulta quiénes de tus invitados han contribuido a tu mesa de regalos y muestra tu aprecio enviándoles un mensaje personalizado de agradecimiento. Esta función te ayuda a mantener una conexión especial con tus seres queridos durante la celebración.",
      icon: "Users",
    },
    {
      title: "Notificaciones",
      value: "item-3",
      content:
        "Recibe notificaciones en tiempo real en tu panel de control cada vez que haya una nueva interacción con tu mesa de regalos. Mantente al tanto de todas las contribuciones y mensajes para que no te pierdas ningún detalle importante.",
      icon: "BellDot",
    },
  ];

  const saldoItems = [
    {
      title: "Total aportado",
      value: "item-1",
      content:
        "Mantén un control total sobre las contribuciones recibidas, visualizando el monto acumulado para cada artículo y el total general de tu mesa de regalos. Esta información está disponible tanto en el panel de control como en la sección de saldo.",
      icon: "PiggyBank",
    },
    {
      title: "Retiro",
      value: "item-2",
      content:
        "Realiza retiros de forma rápida y segura a través de transferencia SPEI, directamente a la cuenta CLABE de tu banco preferido. Configura tus datos bancarios en la sección de ajustes y accede a tus fondos en cuestión de minutos.",
      icon: "Wallet",
    },
    {
      title: "Transacciones",
      value: "item-3",
      content:
        "Revisa tu historial de transacciones para tener un registro detallado de todos los movimientos financieros realizados antes del evento. Esta función te permite llevar un control preciso de tus retiros y las contribuciones recibidas.",
      icon: "ArrowLeftRight",
    },
  ];

  const apoItems = [
    {
      title: "Pago a crédito",
      value: "item-1",
      content:
        "Incrementa las contribuciones de tus invitados ofreciendo la opción de pago con tarjeta de crédito. Facilita la participación y elimina la necesidad de depósitos bancarios, haciendo que el proceso de aportación sea más cómodo y accesible.",
      icon: "CreditCard",
    },
    {
      title: "Métodos de pago",
      value: "item-2",
      content:
        "Ofrecemos una amplia variedad de métodos de pago para adaptarnos a las preferencias de tus invitados. Elige entre tarjeta de crédito, débito, Apple Pay, Google Pay o transferencia bancaria SPEI para una experiencia de aportación flexible y segura.",
      icon: "Box",
    },
  ];

  return (
    <SectionUniversal className="w-full bg-muted/50 mx-auto h-fit items-start justify-start grid grid-cols-1 gap-10 md:gap-14 xl:gap-24 lg:grid-cols-2 border-y">
      <div className="w-full h-fit items-start justify-start flex flex-col gap-y-10 lg:gap-y-14">
        <span className="w-full h-fit items-center justify-start flex gap-x-3 pb-5 border-b">
          <Blend className="size-5 text-muted-foreground" />
          <p className="text-sm text-muted-foreground/80 antialiased font-medium">
            Producto
          </p>
        </span>
        <div className="w-full h-fit items-start justify-start">
          <HeroTitle className="text-4xl md:text-6xl lg:text-4xl xl:text-4xl max-w-2xl text-foreground/50">
            Un <span className="text-foreground">producto</span> hecho para que tu mesa de regalos sea una <span className="text-foreground">experiencia </span>
            inolvidable
          </HeroTitle>
        </div>
      </div>
      <div className="w-full h-fit items-start justify-start">
        <Tabs defaultValue="mesa" className="w-full">
          <TabsList>
            <TabsTrigger value="mesa">Mi mesa</TabsTrigger>
            <TabsTrigger value="boda">Mi boda</TabsTrigger>
            <TabsTrigger value="dashboard">Estadística</TabsTrigger>
            <TabsTrigger value="regalos">Saldo</TabsTrigger>
            <TabsTrigger value="retiro">Aportaciones</TabsTrigger>
          </TabsList>
          <TabsContent value="mesa" className="pt-5 lg:pt-14">
            <Accordion defaultValue="item-1" type="single">
              {mesaItems.map((item, index) => {
                return (
                  <AccordionShow
                    key={index}
                    className="bg-primary"
                    value={item.value}
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                );
              })}
            </Accordion>
          </TabsContent>
          <TabsContent value="boda" className="pt-5 lg:pt-14">
            <Accordion defaultValue="item-1" type="single">
              {bodaItems.map((item, index) => {
                return (
                  <AccordionShow
                    key={index}
                    className="bg-contrast_pink"
                    value={item.value}
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                );
              })}
            </Accordion>
          </TabsContent>
          <TabsContent value="regalos" className="pt-5 lg:pt-14">
            <Accordion defaultValue="item-1" type="single">
              {saldoItems.map((item, index) => {
                return (
                  <AccordionShow
                    key={index}
                    className="bg-contrast_green"
                    value={item.value}
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                );
              })}
            </Accordion>
          </TabsContent>
          <TabsContent value="dashboard" className="pt-5 lg:pt-14">
            <Accordion defaultValue="item-1" type="single">
              {statItems.map((item, index) => {
                return (
                  <AccordionShow
                    key={index}
                    className="bg-contrast_blue"
                    value={item.value}
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                );
              })}
            </Accordion>
          </TabsContent>
          <TabsContent value="retiro" className="pt-5 lg:pt-14">
            <Accordion defaultValue="item-1" type="single">
              {apoItems.map((item, index) => {
                return (
                  <AccordionShow
                    key={index}
                    className="bg-foreground"
                    value={item.value}
                    title={item.title}
                    content={item.content}
                    icon={item.icon}
                  />
                );
              })}
            </Accordion>
          </TabsContent>
        </Tabs>
      </div>
    </SectionUniversal>
  );
};
