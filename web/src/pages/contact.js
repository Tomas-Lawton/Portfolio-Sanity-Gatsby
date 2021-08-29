import React from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SearchEngine from "../components/SearchEngine";
import Submit from "../components/Common/Submit";
import {
  ContactCard,
  ContactField,
  MyForm,
  Textarea,
  Message,
  Contact,
  IconImg,
  ContainSocials,
} from "../styles/GlobalStyles";
import { window } from "browser-monads";
import EmailButton from "../components/Common/Submit";
import Facebook from "../images/Icon/facebookIcon.svg";
import Insta from "../images/Icon/instaIcon.svg";
import LinkedIn from "../images/Icon/linkedinIcon.svg";

const About = () => (
  <Layout>
    <SearchEngine title="Contact" />
    <div style={{ background: "#151515", height: "100%", width: "100%" }}>
      <div style={{ width: "100%", padding: "5vh 5vw 0 5vw" }}>
        <ContactCard>
          <div style={{ width: "100%" }}>
            <Contact>Say hello</Contact>
            {window.innerWidth > 858 ? (
              <>
                <Message>
                  Send a message to{" "}
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    <a href="mailto:tomaslawton@gmail.com?subject=Email to Tomas&body=Hello, world!">
                      tomaslawton@gmail.com
                    </a>
                  </span>{" "}
                  or using the form below!
                </Message>
                <hr />
                <MyForm
                  autocomplete="off"
                  name="contact"
                  method="POST"
                  data-netlify="true"
                  data-netlify-honeypot="bot-field"
                >
                  <input type="hidden" name="contact" value="contact" />
                  <ContactField
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your name.."
                    autocomplete="off"
                  />
                  <ContactField
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your email..."
                    autocomplete="off"
                  />
                  <ContactField
                    type="text"
                    id="subject"
                    name="subject"
                    placeholder="Subject..."
                    autocomplete="off"
                  />
                  <Textarea
                    type="textarea"
                    style={{ height: "100px" }}
                    id="body"
                    name="body"
                    placeholder="Write something.."
                    autocomplete="off"
                  />
                  <div data-netlify-recaptcha="true"></div>
                  <div style={{ width: "100%", display: "flex" }}>
                    <Submit
                      type="submit"
                      onClick={this.form.submit()}
                      text="Send"
                    />
                  </div>
                </MyForm>
              </>
            ) : (
              <>
                <Message>
                  Send a message to
                  <span
                    style={{ fontWeight: "bold", textDecoration: "underline" }}
                  >
                    tomaslawton@gmail.com
                  </span>
                  or open your email app using this button!
                </Message>
                <a href="mailto:tomaslawton@gmail.com?subject=Email to Tomas&body=Hello, world!">
                  <EmailButton to={"/contact/"} text={"Email"} />
                </a>
              </>
            )}
          </div>
          <ContainSocials>
            <a href={"https://www.instagram.com/soju_club/"}>
              <IconImg src={Insta} />
            </a>
            <a href={"https://www.linkedin.com/in/tomas-lawton-512066199/"}>
              <IconImg src={LinkedIn} />
            </a>
            <a href={"https://www.facebook.com/TomasLawton"}>
              <IconImg src={Facebook} />
            </a>
          </ContainSocials>
        </ContactCard>
      </div>
    </div>
  </Layout>
);

export default About;
