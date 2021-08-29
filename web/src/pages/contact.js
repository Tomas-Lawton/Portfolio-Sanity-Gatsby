import React, { useState } from "react";
import "../styles/GlobalDOMStyle.css";
import Layout from "../components/Layout";
import SearchEngine from "../components/SearchEngine";
import Submit from "../components/Common/Submit";
import { navigate } from "gatsby-link";
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

function encode(data) {
  return Object.keys(data)
    .map((key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&");
}

const About = () => {
  const [state, setState] = useState({});

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...state,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch((error) => alert(error));
  };

  return (
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
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
                    >
                      <a href="mailto:tomaslawton@gmail.com?subject=Email to Tomas&body=Hello, world!">
                        tomaslawton@gmail.com
                      </a>
                    </span>{" "}
                    or using the form below!
                  </Message>
                  <hr />
                  <form
                    name="contact"
                    method="post"
                    action="/"
                    data-netlify="true"
                    data-netlify-honeypot="bot-field"
                    onSubmit={handleSubmit}
                  >
                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                    <input type="hidden" name="form-name" value="contact" />
                    <p hidden>
                      <label>
                        Don’t fill this out:{" "}
                        <input name="bot-field" onChange={handleChange} />
                      </label>
                    </p>
                    <p>
                      <label>
                        Your name:
                        <br />
                        <input
                          type="text"
                          name="name"
                          onChange={handleChange}
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        Your email:
                        <br />
                        <input
                          type="email"
                          name="email"
                          onChange={handleChange}
                        />
                      </label>
                    </p>
                    <p>
                      <label>
                        Message:
                        <br />
                        <textarea name="message" onChange={handleChange} />
                      </label>
                    </p>
                    <p>
                      <button type="submit">Send</button>
                    </p>
                  </form>
                </>
              ) : (
                <>
                  <Message>
                    Send a message to
                    <span
                      style={{
                        fontWeight: "bold",
                        textDecoration: "underline",
                      }}
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
};

export default About;
