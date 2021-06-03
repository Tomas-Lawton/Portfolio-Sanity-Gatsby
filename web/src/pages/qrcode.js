import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { QRContainer, QR } from "../styles/GlobalStyles";
import QRDemo from "../images/QRDemo.svg";
const QRCode = () => (
  <Layout>
    <SEO title="Home" />
    <QRContainer>
      <QR src={QRDemo} />
    </QRContainer>
  </Layout>
);

export default QRCode;
