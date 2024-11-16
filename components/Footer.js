import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Footer() {
  return (
    <footer className="Footer">
      <Container>
        <Row>
          <Col lg={3}>
            <div className="footerCol1">
              <h6>Contact Us</h6>
              <p>
                <b>Corporate Office: </b> <br />
                No.271 (Old No. 182) Mc Nichols Road, Poonamalle High Road,
                Kilpauk, Chennai - 600 010.
              </p>
              <p className="mb-1">
                <FontAwesomeIcon icon={faEnvelope} />
                &nbsp;{" "}
                <a href="mailto:enquiry@lmlhomes.in"> enquiry@lmlhomes.in</a>
              </p>
              <p className="mb-1">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;{" "}
                <a href="tel:8760088999">For Sales enquiry +91 87600 88999</a>
              </p>
              <p className="mb-1">
                <FontAwesomeIcon icon={faPhone} />
                &nbsp;{" "}
                <a href="tel:8760088999">For General enquiry 044-42083999</a>
              </p>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footerCol2">
              <h6>Quick Links</h6>
              <a href="/apartments-in-chennai-tambaram">
                Apartments in Chennai Tambaram
              </a>
              <a href="/west-tambaram-apartments-sale">
                West Tambaram Apartments Sale
              </a>
              <a href="/luxury-apartment-in-tambaram">
                Luxury Apartment in Tambaram
              </a>
              <a href="/budgeted-apartment-in-tambaram">
                Budgeted Apartment in Tambaram
              </a>
              <a href="/budget-flats-in-tambaram">Budget Flats in Tambaram</a>
              <a href="/new-flats-for-sale-in-west-tambaram">
                New Flats for Sale in West Tambaram
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footerCol3">
              <a className="footerMt" href="/apartments-in-kattupakkam-chennai">
                Apartments in Kattupakkam Chennai
              </a>
              <a href="/luxury-apartments-in-kattupakkam">
                Luxury Apartments in Kattupakkam
              </a>
              <a href="/budget-flats-in-kattupakkam">
                Budget Flats in Kattupakkam
              </a>
              <a href="/3-bhk-villas-in-neelankarai-chennai">
                3 BHK Villas in Neelankarai Chennai
              </a>
              <a href="/luxury-villas-in-neelankarai">
                Luxury Villas in Neelankarai
              </a>
              <a href="/budget-flats-in-neelankarai">
                Budget Flats in Neelankarai
              </a>
            </div>
          </Col>
          <Col lg={3}>
            <div className="footerCol4">
              <a
                className="footerMt"
                href="/3-bhk-premium-villas-in-neelankarai"
              >
                3 BHK Premium Villas in Neelankarai
              </a>
              <a href="/3-bhk-villas-for-sale-in-neelankarai">
                3 BHK Villas for Sale in Neelankarai
              </a>
              <a href="/budgeted-apartment-in-tambaram">
                Budgeted Apartment in Tambaram
              </a>
              <a href="/real-estate-companies-in-chennai">
                Real Estate Companies in Chennai
              </a>
              <a href="/2-bhk-apartments-for-sale-in-kattupakkam">
                2 BHK Apartments for Sale in Kattupakkam
              </a>
            </div>
          </Col>
        </Row>

        <Row className="footerRow2">
          <Col lg={10}>
            <p className="copyRightTxt">
              © Copyright 2024 - LML Homes | All rights reserved
            </p>

            <p className="disclaimerTxt">
              {" "}
              Disclaimer: All statements, pictures, models, drawings,
              illustrations, photographs and other renderings are artistic
              representations only and may vary in actual construction. All
              information, plans and specifications provided in the brochure,
              and other promotional materials would be subject to change by the
              Builder or Architect. Floor areas and measurements given are
              approximate only and subject to final measurements. The Builder
              shall not be responsible for any representation made by its agents
              or Consultants in respect of any feature or specification of the
              building complex. The terms of duly executed Sale and construction
              Agreement shall be final and would be binding on all parties.
            </p>
          </Col>
        </Row>

        <div>
          <a
            className={"homeEnquireIcon"}
            target="_blank"
            href={`https://wa.me/+919551223333`}
          >
            <img src={`/assets/icons/whatsappIcon.svg`} alt="Whatsapp-icon " />
          </a>
        </div>
      </Container>
    </footer>
  );
}
