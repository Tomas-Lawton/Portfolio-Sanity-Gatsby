import React from "react"
import "../styles/GlobalDOMStyle.css"

import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import LatestWorks from "../components/Home/LatestWorks"
import Pong from "../components/Home/Pong"
import { ContainHero, HeroText, QRContainer} from "../styles/GlobalStyles"
import { Section } from "../styles/GlobalStyles"
import {Hyperlink} from "../components/Common/Hyperlink"
import QRDemo from "../images/QRDemo.svg"
const QRCode = () => (
  <Layout>
    <SEO title="Home" />
    <QRContainer> 
        <img style= {{width: '30vw', height: 'auto'}} src={QRDemo} />
    </QRContainer> 
  </Layout>
)

export default QRCode
