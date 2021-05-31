import React from "react"
import "../styles/GlobalDOMStyle.css"
import Layout from "../components/Layout"
import SEO from "../components/seo"
import Submit from "../components/Common/Submit"

import { ContactCard, ContactField, MyForm, Textarea, Message } from "../styles/GlobalStyles"
const About = () => (
  <Layout>
    <SEO title="About" />
    <div style={{background: '#151515', height: "100%", width: '100%'}}>
      <div style={{ width: '100%', padding: '10vh 20vw'}}>
      <ContactCard>

        <div style={{ width: '100%', }}>
          <h1 style={{ fontSize: "7vh"}}> Say <strong><i><span>hello!</span></i></strong></h1>
          <Message>Send me a message using the form or email me directly at tomaslawton@gmail.com</Message>
        </div>

        <MyForm>
          <ContactField type="text" id="fname" name="firstname" placeholder="Your name.."/>
          <ContactField type="email" id="ename" name="email" placeholder="Your email..."/>
          <ContactField type="text" id="lname" name="lastname" placeholder="Subject..."/>
          <Textarea type="textarea" style={{height: "100px"}} id="subject" name="subject" placeholder="Write something.."/>
        </MyForm>

        <div style={{ width: '100%', display: 'flex'}}>
          <Submit text="Send"/>
        </div>

      </ContactCard>
      </div>
    </div>

  </Layout>
)

export default About
