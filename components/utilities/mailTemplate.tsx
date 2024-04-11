import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

export const KnootWelcome = () => (
  <Html>
    <Head />
    <Preview>La nueva forma de regalar</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://flsqnnbcmtmltxmnygwe.supabase.co/storage/v1/object/public/hola/logo%20(1).png"
          }
          width="200"
          height="38.19"
          alt="Knoott"
          style={logo}
        />
        <Text style={paragraph1}>Hola,</Text>
        <Text style={paragraph}>
          Bienvenid@ a Knoott, ingresaste tu correo electrónico en nuestra lista
          de espera, nosotros te pondremos al tanto sobre la fecha de lanzamiento
        </Text>
        <Section style={btnContainer}>
          <Button style={button} href="https://knoott.com">
            Sitio web
          </Button>
        </Section>
        <Text style={paragraph}>
          Lo mejor,
          <br />
          Equipo Knoott
        </Text>
        <Hr style={hr} />
      </Container>
    </Body>
  </Html>
);

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 0",
};

const paragraph1 = {
  fontSize: "18px",
  color: "#000",
  lineHeight: "26px",
  fontWeight: "500",
  paddingTop: "40px",
};

const paragraph = {
  fontSize: "16px",
  color: "#64748B",
  lineHeight: "26px",
};

const btnContainer = {
  textAlign: "center" as const,
};

const button = {
  backgroundColor: "#F7DB70",
  borderRadius: "15px",
  color: "#000",
  fontSize: "16px",
  textDecoration: "none",
  textAlign: "center" as const,
  display: "block",
  padding: "12px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
