import Layout from "../components/Layout";
import React from "react";
import SearchEngine from "../components/SearchEngine";
import Link from "gatsby-link";
import { NotFoundContainer, ExpandedLinks } from "../styles/GlobalStyles";
import "../styles/GlobalDOMStyle.css";

const NotFoundPage = () => ( <
    Layout >
    <
    SearchEngine title = "404: Found Found" / >
    <
    NotFoundContainer >
    <
    h1 > Sorry chief, that page doesn’ t seem to exist. < /h1> <
    ExpandedLinks >
    <
    Link to = "/" > Home < /Link> <
    Link to = "/work" > Work < /Link> <
    Link to = "/contact" > Contact < /Link> <
    /ExpandedLinks> <
    /NotFoundContainer> <
    /Layout>
);

export default NotFoundPage;