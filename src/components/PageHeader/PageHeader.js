import React from "react";

// reactstrap components
import { 
  Button,
  Container 
} from "reactstrap";

export default function PageHeader() {
  return (
    <div className="page-header header-filter">
      <div className="squares square1" />
      <div className="squares square2" />
      <div className="squares square3" />
      <div className="squares square4" />
      <div className="squares square5" />
      <div className="squares square6" />
      <div className="squares square7" />
      <Container className="text-center">
        <div className="content-center brand d-flex flex-column align-items-center justify-content-center">
          <div className="image-text-container">
            <img alt="..." className="logo-navbar" src={require("assets/img/TIBSI.png")}/>
            <div className="text-container">
            <h1 className="h1-seo">The Investream Business Solutions Inc.</h1>
            </div>
          </div>
          <Button color="warning" href="#">
          <i className="fa fa-phone" /> Contact Us
          </Button>
        </div>
      </Container>
    </div>
  );
}
