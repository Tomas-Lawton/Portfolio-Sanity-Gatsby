import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import  SearchEngine from "../components/SearchEngine";
import { QRContainer, Qr } from "../styles/GlobalStyles";
import QRDemo from "../images/QRDemo.svg";
const QrCode = () => (
  <Layout>
    <SearchEngine title="QR" />
    <QRContainer>
      <Qr src={QRDemo} />
    </QRContainer>
  </Layout>
);

export default QrCode;
