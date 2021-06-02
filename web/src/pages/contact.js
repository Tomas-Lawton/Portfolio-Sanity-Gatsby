import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SEO from "../components/seo";
import Submit from "../components/Common/Submit";
import {
  ContactCard,
  ContactField,
  MyForm,
  Textarea,
  Message,
  Contact,
} from "../styles/GlobalStyles";
const About = () => (
  <Layout>
    <SEO title="About" />
    <div style={{ background: "#151515", height: "100%", width: "100%" }}>
      <div style={{ width: "100%", padding: "5vh 5vw 0 5vw" }}>
        <ContactCard
          autocomplete="off"
          action="https://formspree.io/f/xoqydkwn"
          method="POST"
        >
          <div style={{ width: "100%" }}>
            <Contact>Say hello</Contact>
            <Message>
              Send a message to{" "}
              <span style={{ fontWeight: "bold", textDecoration: "underline" }}>
                <a href="mailto:tomaslawton@gmail.com?subject=Email to Tomas&body=Hello, world!">
                  tomaslawton@gmail.com
                </a>
              </span>{" "}
              or using the form below!
            </Message>
            <hr />
          </div>

          <MyForm>
            <ContactField
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              autocomplete="off"
            />
            <ContactField
              type="email"
              id="ename"
              name="email"
              placeholder="Your email..."
              autocomplete="off"
            />
            <ContactField
              type="text"
              id="lname"
              name="lastname"
              placeholder="Subject..."
              autocomplete="off"
            />
            <Textarea
              type="textarea"
              style={{ height: "100px" }}
              id="subject"
              name="subject"
              placeholder="Write something.."
              autocomplete="off"
            />
          </MyForm>

          <div style={{ width: "100%", display: "flex" }}>
            <Submit text="Send" />
          </div>
        </ContactCard>
      </div>
    </div>
  </Layout>
);

export default About;
