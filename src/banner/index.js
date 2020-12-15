import React, { useState } from 'react';
import {
  Col,
  Container, Row, UncontrolledCollapse, CardBody, Card, Label, Input
} from 'reactstrap';
import { Fullwrap, Heading, Text, Button, } from './style';
import "./style.css";
import { IoIosArrowForward, IoMdContact } from "react-icons/io";
import { IoCallOutline, } from "react-icons/io5";
import { RiStarSFill } from "react-icons/ri";
import { FiMail,FiInstagram } from "react-icons/fi";
import { GoLocation } from "react-icons/go";
import { AiOutlineMail,AiOutlineTwitter } from "react-icons/ai";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";




const Banner = (props) => {

  return (
    <>
      <Fullwrap>
        <Container>
          <Row>
            <Col md="6"><Heading className="heading_first_header">Crafted for Business</Heading>
              <Text className="text_header">we blend insights and strategy to create digital products for forward-thinking organisations.</Text>
              <Button>Get Started</Button>
              <Button>Download</Button>

            </Col>
            <Col md="6"><img className="banner_image" src="/images/1.png" /></Col>
          </Row>
        </Container>
      </Fullwrap>

      <div className="ourwrap">
        <Container>

          <h1 className="our_heading">Our Services</h1>
          <p className="our_text">stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>

          <Row>
            <Col md="4">
              <div className="card">
                <h1>Graphics<br /> Design</h1>
                <p>short description for the ones who look for something new. short description for the ones who look for something new.</p>
                <a className="learnmore_button" href="#">LEARN MORE</a>

              </div>

            </Col>
            <Col md="4">
              <div className="card">
                <h1>Website<br /> Design</h1>
                <p>short description for the ones who look for something new. short description for the ones who look for something new.</p>
                <a className="learnmore_button" href="#">LEARN MORE</a>
              </div>

            </Col>
            <Col md="4">
              <div className="card">
                <h1>Digital<br /> Marketing</h1>
                <p>short description for the ones who look for something new. short description for the ones who look for something new.</p>
                <a className="learnmore_button" href="#">LEARN MORE</a>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="featured_wrap">
        <Container>
          <h1 className="featured_heading">Featured Works</h1>
          <p className="featured_text">stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
          <Row>
            <div className="images_wrap">
              <Col md="3">
                <ul className="featured_li">
                  <li><button className="active">ALL WORK</button></li>
                  <li><button>BRANDING</button></li>
                  <li><button>MARKETING</button></li>
                  <li><button>PLANNING</button></li>
                  <li><button>RESEARCH</button></li>
                </ul>
              </Col>

              <Col className="featured_images_section" md="9">
                <img className="featured_image" src="/images/featured_1.png" />
                <img className="featured_image" src="/images/featured_2.png" />
                <img className="featured_image" src="/images/featured_3.png" />
                <img className="featured_image" src="/images/featured_4.png" />
                <img className="featured_image" src="/images/featured_5.png" />
                <img className="featured_image" src="/images/featured_6.png" />
                <img className="featured_image" src="/images/featured_7.png" />
                <img className="featured_image" src="/images/featured_8.png" />
                <img className="featured_image" src="/images/featured_9.png" />
              </Col>
            </div>
          </Row>

        </Container>
      </div>


      <div className="pricing_wrap">
        <Container>

          <h1 className="heading_wrap">Pricing Plans</h1>
          <p className="heading_text">stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>

          <Row>
            <Col md="4">
              <div className="pricing_card">
                <div className="pricing_section">
                  <img className="pricing_image" src="/images/pricing_1.svg" />
                  <h3 className="heading_pricing">Basic</h3>
                  <h4 className="payment_mode_pricing">$ 199/month</h4>
                  <p className="text_pricing">carefully crafted components amazing page examples</p>
                  <button className="button_pricing">Get Started</button>
                </div>
              </div>
            </Col>

            <Col md="4">
              <div className="pricing_card">
                <div className="pricing_section">
                  <img className="pricing_image" src="/images/pricing_2.svg" />
                  <h3 className="heading_pricing">Pro</h3>
                  <h4 className="payment_mode_pricing">$ 399/month</h4>
                  <p className="text_pricing">carefully crafted components amazing page examples</p>
                  <button className="button_pricing">Get Started</button>
                </div>

              </div>
            </Col>

            <Col md="4">
              <div className="pricing_card">
                <div className="pricing_section">
                  <img className="pricing_image" src="/images/pricing_3.svg" />
                  <h3 className="heading_pricing">Enterprise</h3>
                  <h4 className="payment_mode_pricing">$ 699/month</h4>
                  <p className="text_pricing">carefully crafted components amazing page examples</p>
                  <button className="button_pricing">Get Started</button>
                </div>
              </div>
            </Col>
          </Row>

        </Container>
      </div>

      <div className="after_pricing_section">
        <Container>
          <Row>
            <Col md="6">
              <h5 className="heading_after_pricing">A LITTLE MORE ABOUT US</h5>
              <h1 className="second_heading_pricing">Frequently Asked Questions About Our Site</h1>

              <Button className="button_collapse" color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question One <IoIosArrowForward />

              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question Two <IoIosArrowForward />
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question Three <IoIosArrowForward />
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question Four <IoIosArrowForward />
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question Five <IoIosArrowForward />
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

              <Button color="primary" id="toggler" style={{ marginBottom: '1rem' }}>
                Frequently Asked Question Six <IoIosArrowForward />
              </Button>
              <UncontrolledCollapse toggler="#toggler">
                <Card>
                  <CardBody>
                    Morbi vehicula arcu et pellentesque tincidunt. Nunc ligula nulla, lobortis a elementum non, vulputate ut arcu. Aliquam erat volutpat. Nullam lacinia felis.
        </CardBody>
                </Card>
              </UncontrolledCollapse>

            </Col>
            <Col md="6">
              <img className="image_after_pricing" src="/images/after_pricing.jpg" />
            </Col>
          </Row>

        </Container>
      </div>

      <div className="testimonial_section">
        <Container>
          <Row>
            <Col md="6">
              <h4 className="heading_testimonial_section">TESTIMONIALS</h4>
              <h1 className="second_heading-testimonial">What Clients Says<br /> About Us </h1>
              <p className="text_testimonial_section">Duis et metus et massa tempus lacinia. class aptent<br />taciti sociosqu ad litora torquent per conubia nastro<br /> per inceptos himanaeos.maecenas ultricies, orci<b />molestie blandit interdum. </p>
              <p>ipsum ante pellentesque nisl, eget mollis turpis quam<br /> nec eros. ultricies, orci molestie blandit interdum.</p>

            </Col>
            <Col md="6">
              <div className="card_testimonial_section">
                <div className="card2_testimonial_section">
                  <p className="text_card">"praesant scelerisque, odio eu<br />fermentum malesuada, nisi arcu<br /> volutpat nisl,sit amet convalis nunc<br />turp." </p>
                  <divider className="divider_testimonial_section"></divider>
                  <div className="before_author_imformation">
                    <div className="before_author_imformation">
                      <img className="author_image_testimonial" src="/images/author-1.jpg" />
                      <div className="after_author_image">
                        <h3 className="author_name_information">Mr. Jems Bond</h3>
                        <p className="text_author_information">CEO Mbuild Firm</p>
                      </div>
                      <div>
                        <div className="before_author_imformation">
                          <div className="author_rewiews"><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /><RiStarSFill /></div>
                        </div>
                        <p>( 7 Reviews)</p>
                      </div>
                    </div>
                  </div>




                </div>
              </div>
            </Col>

          </Row>
        </Container>
      </div>

      <div className="meet_team_section">
        <Container>
          <h1 className="heading_team_section">Meet The Team</h1>
          <p className="text_team_section">stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>

          <Row>
            <Col md="4">
              <div className="card_team_section">
              <img className="images_team_section" src="/images/team-1.jpg" />
                <div className="card_inimage">
                  <h3 className="heading_card_inimage">Jeffery Riley</h3>
                  <p className="text_card_inimage">Art Director</p>
                </div>
              </div>
            </Col>

            <Col md="4">
              <div className="card_team_section">
                <img className="images_team_section" src="/images/team-2.jpg" />
                <div className="card_inimage">
                  <h3 className="heading_card_inimage">Riley Beata</h3>
                  <p className="text_card_inimage">Web Developer</p>
                </div>
              </div>
            </Col>

            <Col md="4">
              <div className="card_team_section">
                <img className="images_team_section" src="/images/team-3.jpg" />
                <div className="card_inimage">
                  <h3 className="heading_card_inimage">Mark A. Parker</h3>
                  <p className="text_card_inimage">UX Designer</p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>

      <div className="contact_section">
        <Container>
          <h1 className="heading_contact_section">Contact</h1>
          <p className="text_contact_section">stop wasting time and money designing and managing a website that doesn't get results. Happiness guaranteed!</p>
          <Row>
            <Col md="4"><div className="fonts_contact_section1"><GoLocation /><p>Elizabeth St, Melbourne<br />1202 Australia.</p></div></Col>
            <Col md="4"><div className="fonts_contact_section2"><FiMail /><p>hello@ayroui.com<br />Support@uideck.com</p></div></Col>
            <Col md="4"><div className="fonts_contact_section3"><IoCallOutline /><p>+333 789-321-654<br />+333 985-458-609</p></div></Col>
          </Row>

          <div className="message_contact_section">
            <AiOutlineMail /><h2><b>Leave</b> A Message.</h2>
          </div>

          <Row>
            <Col md="6">
              <Label className="label_input">Name</Label>
              <Input className="input_name" type="text" placeholder="Name">
                <IoMdContact />
              </Input>
            </Col>

            <Col md="6">
              <Label className="label_input">Email</Label>
              <Input className="input_name" type="text" placeholder="Email"></Input>
            </Col>

          </Row>

          <Row>
            <Col md="12">
              <Label className="label_input">Message</Label>
              <textarea className="message_input" name="message" placeholder="Message"></textarea>
            </Col>
          </Row>

          <button className="button_after_message_input">SEND MESSAGE</button>


        </Container>
      </div>

      <div className="footer_section">
        <Container>
          <img className="logo_footer_section" src="/images/logo.svg" />
          <div className="before_icons_footer">
            <div className="icons_footer"><FaFacebookF /><AiOutlineTwitter /><FiInstagram /><FaLinkedinIn />
            </div>
          </div>
          <p className="phone_after_icons">+8801234567890</p>
          <p className="email_after_icons">Support@uideck.com</p>

          <p className="last_text_footer">Designed by <a className="href_footer" href="#">UIdeck</a> and Built-with <a className="href_footer" href="#">Ayro UI</a></p>
        </Container>
      </div>


    </>
  );
}

export default Banner;