import React from "react"
import "../styles/GlobalDOMStyle.css"

// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import {  ContainHero, HeroText, HeroImage, AboutText, FillImage, AboutContain, AboutSection} from "../styles/GlobalStyles"
import Me from "../images/me.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />

    <ContainHero>
      <HeroText>Contact</HeroText>
    </ContainHero>

  </Layout>
)

export default About
