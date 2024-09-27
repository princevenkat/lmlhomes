"use client";
import styles from "@/app/about/about.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import logo from "@/public/assets/images/logo.png";
import communityImg1 from "@/public/assets/images/community1.png";
import communityImg2 from "@/public/assets/images/community2.png";
import communityImg3 from "@/public/assets/images/community3.png";
import Testimonial from "@/components/Testimonial";
import Promise from "@/components/Promise";
import FollowYourJourney from "@/components/FollowYourJourney";
import { PageWrapper } from "@/components/PageWrapper";
import Head from "next/head";
import AboutSeo from "@/app/about/AboutSeo";

const about = () => {
  return (
    <PageWrapper>
      <AboutSeo />
      <section>
        <div className={styles.hero}>
          <Container>
            <Row>
              <Col lg={4}>
                <h3 className="beba">About Lml Homes</h3>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.section1}>
          <Container>
            <Row>
              <Col lg={6}>
                <h3 className="beba mb-3">A little bit about</h3>
                <Image
                  className={styles.logoImg}
                  src={logo}
                  alt=""
                  width="100"
                />
              </Col>

              <Col lg={6}>
                <h4 className={styles.greyLine + " mb-3"}>
                  Your Local & Loyal Representative
                </h4>
                <p>
                  Loyalty is a fundamental aspect of the LML Representative’s role. 
                  We are not only loyal to the organizations they represent but also 
                  to their local communities. This loyalty fosters trust and long-lasting 
                  relationships that are essential for successful representation.
                </p>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.section2}>
          <Container>
            <Row className={"align-items-center " + styles.specialiseRow}>
              <Col lg={7}>
                <h4
                  className={styles.greyLine + " mb-3" + " " + styles.mblView}
                >
                  We specialise in
                </h4>
                <p className={styles.mblView}>
                  At LML Homes, we take immense pride in our unwavering
                  commitment to providing the highest quality homes to our
                  valued clients. We believe that a home is not just a place to
                  live., It’s a sanctuary where memories are made, dreams are
                  realized, and lives are enriched. We don’t just build houses.,
                  We craft homes of the highest quality. When you choose us as
                  your partner in homeownership, you’re choosing excellence,
                  dedication, and a commitment to creating spaces where life’s
                  greatest moments unfold. Your happiness is our ultimate goal,
                  and we go above and beyond to achieve it.
                </p>
              </Col>

              <Col lg={5} className={styles.specialiseBoxCol}>
                <Row>
                  <Col lg={6} xs={6}>
                    <div className={styles.specialiseBox + " " + styles.box1}>
                      <p>PRAKRITI</p>
                    </div>
                  </Col>

                  <Col lg={6} xs={6}>
                    <div className={styles.specialiseBox + " " + styles.box2}>
                      <p>ICONIA</p>
                    </div>
                  </Col>

                  <Col lg={6} xs={6}>
                    <div className={styles.specialiseBox + " " + styles.box3}>
                      <p>ADORA</p>
                    </div>
                  </Col>

                  <Col lg={6} xs={6}>
                    <div className={styles.specialiseBox + " " + styles.box4}>
                      <p>ARSHIYA</p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.section3}>
          <Container>
            <Row>
              <Col lg={11}>
                <Row className="align-items-center">
                  <Col lg={12}>
                    <h4 className={styles.greyLine + " my-4"}>Our Values</h4>
                  </Col>

                  <Col lg={4} md={4}>
                    <div className="mx-3 ms-0">
                      <h3>Passionate</h3>
                      <p>
                        We are passionate about the company and its success. We
                        are committed to our customers, our teams, and to each
                        other.
                      </p>
                    </div>
                  </Col>

                  <Col lg={4} md={4}>
                    <div className="m-3 ms-0">
                      <h3>Innovation</h3>
                      <p>
                        We envision BIG and start small. We dare to be
                        different. We consider a full range of possible futures
                        and never assume our current assumptions are right.
                      </p>
                    </div>
                  </Col>

                  <Col lg={4} md={4}>
                    <div className="m-3 ms-0">
                      <h3>Collaboration</h3>
                      <p>
                        We empower each other. We lead by example and create an
                        environment where everyone is a leader.
                      </p>
                    </div>
                  </Col>

                  <Col lg={4} md={4}>
                    <div className="m-3 ms-0">
                      <h3>Growth</h3>
                      <p>
                        We evolve and adapt. We never want to be complacent and
                        we believe that in order to be great, we need to be
                        willing to adapt.
                      </p>
                    </div>
                  </Col>

                  <Col lg={4} md={4}>
                    <div className="m-3 ms-0">
                      <h3>Integrity</h3>
                      <p>
                        It’s all about the people. People are at the heart of
                        our business and our desire to help them is why we do
                        what we do.
                      </p>
                    </div>
                  </Col>
                  <Col lg={4} md={4}>
                    <div className="m-3 ms-0">
                      <h3>Quality</h3>
                      <p>
                        What we do, we do it well. We take pride in our work and
                        strive to offer the best possible service we can.
                      </p>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <div className={styles.section4}>
          <Container>
            <Row>
              <Col lg={11}>
                <Row className="align-items-center">
                  <Col lg={6}>
                    <h4 className={styles.greyLine + " my-4"}>Our Community</h4>
                    <p>
                      One of the things that make LML Homes so special is our
                      dedication to fostering a sense of community. Throughout
                      the year, we host a variety of events and activities for
                      residents of all ages.These events bring neighbors
                      together, creating lasting friendships and unforgettable
                      moments.
                    </p>
                    <p>
                      At LML Homes, we’re committed to sustainability and
                      environmental responsibility. Our community is proud of
                      its green initiatives, from community gardens and
                      recycling programs to energy-efficient infrastructure. We
                      believe in leaving a positive impact on our environment
                      and setting an example for future generations.
                    </p>
                    {/* <p>
                      LML Homes is more than a residential community; It’s a
                      place where bonds are formed, dreams are nurtured, and the
                      spirit of unity thrives. We invite you to be a part of our
                      ongoing journey as we continue to build stronger
                      communities together. Stay tuned for more stories, events,
                      and updates that showcase the beauty and vitality of LML
                      Homes. Thank you for being a part of our special
                      neighborhood.
                    </p> */}
                  </Col>

                  <Col lg={6}>
                    <Row>
                      <div className={styles.grid1}>
                        <Image
                          src={communityImg1}
                          alt=""
                          className={styles.communityImg + " my-2"}
                        />
                        <Image
                          src={communityImg2}
                          alt=""
                          className={styles.communityImg + " my-2"}
                        />
                      </div>

                      <div className={styles.grid2}>
                        <Image
                          src={communityImg3}
                          alt=""
                          className={styles.communityImg + " my-2"}
                        />
                      </div>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <Testimonial />
        <Promise />
        <FollowYourJourney />
      </section>
    </PageWrapper>
  );
};

export default about;
