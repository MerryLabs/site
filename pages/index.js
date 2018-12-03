import React, { Component } from "react";
import styled from "@emotion/styled";

const Header = styled.div({});
const Work = styled.div({});
const Footer = styled.div({});

class IndexPage extends Component {
  render() {
    return (
      <div>
        <Header />

        <Work>Welcome!</Work>

        <Footer />
      </div>
    );
  }
}

export default IndexPage;
