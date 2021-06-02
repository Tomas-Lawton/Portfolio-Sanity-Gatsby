import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import { QRContainer } from "../styles/GlobalStyles";
import QRDemo from "../images/QRDemo.svg";
const QRCode = () => (
  <Layout>
    <SEO title="Home" />
    <QRContainer>
      <img style={{ width: "40vw", height: "auto" }} src={QRDemo} />
    </QRContainer>
  </Layout>
);

export default QRCode;
