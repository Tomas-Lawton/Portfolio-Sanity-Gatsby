import React from "react"
import "../styles/GlobalDOMStyle.css"

// import { Link } from "gatsby"

import Layout from "../components/Layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import { HeroImage, AboutText, FillImage, AboutContain, AboutSection,  ContainHero, HeroText, ContainItems} from "../styles/GlobalStyles"
import Me from "../images/me.jpg"

const About = () => (
  <Layout>
    <SEO title="About" />
    <ContainHero>
      <HeroText>Hello, world!</HeroText>
      {/* <ContainItems>I’m an interactive developer based in Boston. I spend my time designing and building web experiences, exploring the depth to which we can leave lasting impacts on users through novel interactions. I am currently working toward my B.S. in Computer Science and Design at Northeastern University.
</ContainItems> */}
    </ContainHero>
        <HeroImage>
        <FillImage src={Me} />
        </HeroImage>
      <AboutSection>
          <AboutContain>
      <AboutText>
        I’m an interactive developer based in Boston. I spend my time designing and building web experiences, exploring the depth to which we can leave lasting impacts on users through novel interactions. I am currently working toward my B.S. in Computer Science and Design at Northeastern University.        
        </AboutText>
      </AboutContain>
      </AboutSection>
  </Layout>
)

export default About
