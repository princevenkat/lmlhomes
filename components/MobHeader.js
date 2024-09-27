import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import logoLight from "@/public/assets/images/header-logo-transparent.png";
import logo from "@/public/assets/images/logo.png";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Image from "next/image";
import Link from "next/link";

export default function MobHeader() {
  const pathname = usePathname();

  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    // document.body.style.overflow = !isActive ? 'hidden' : 'initial';
  };

  return (
    <header
      id="mobHeader"
      className={`mobHeader ${isActive ? "" : "trans"} ${
        pathname === "/" ? "" : "bg"
      }`}
    >
      <Container>
        <div className="mobHeaderLogoBox">
          {pathname === "/" ? (
            <>
              {isActive ? (
                <Navbar.Brand href="/">
                  <Image src={logo} alt="LML Logo" priority />
                </Navbar.Brand>
              ) : (
                <Navbar.Brand href="/">
                  <Image src={logoLight} alt="LML Logo" priority />
                </Navbar.Brand>
              )}
            </>
          ) : (
            <>
              {isActive ? (
                <Navbar.Brand href="/">
                  <Image src={logo} alt="LML Logo" priority />
                </Navbar.Brand>
              ) : (
                <Navbar.Brand href="/">
                  <Image src={logo} alt="LML Logo" priority />
                </Navbar.Brand>
              )}
            </>
          )}

          {/* <button className={isActive ? 'active burger' : 'burger' + pathname === '/' ? null : 'burger burgerBlack'}/> */}

          <button
            className={
              isActive
                ? "active burger"
                : pathname === "/"
                ? "burger"
                : "burger burgerBlack"
            }
            onClick={handleClick}
          />
        </div>

        <ul className={isActive ? "MobHeaderUl" : "d-none"}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/projects">Projects</a>
          </li>

          <li>
            <a href="/about">About</a>
          </li>
          <ul>
            <li>
              <a href="/about">About LML Homes</a>
            </li>
            <li>
              <a href="/about/management">Management</a>
            </li>
            <li>
              <a href="/about/awards">Awards & Recognition</a>
            </li>
          </ul>

          <li>
            <a href="/partners">Partners</a>
          </li>
          <ul>
            <li>
              <a href="/partners">Partners</a>
            </li>
            <li>
              <a href="/partners/channel-partners">Channel Partners</a>
            </li>
            <li>
              <a href="/partners/joint-ventures">Joint Ventures</a>
            </li>
          </ul>

          <li>
            <a href="/blogs">Blogs</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy Policy</a>
          </li>
          <li style={{ border: "unset" }}>
            <a href="/contact">Contact</a>
          </li>

          <div className="contactMobMenu">
            <ul>
              <li>
                No.271 (Old No. 182) Mc Nichols Road,
                <br />
                Poonamalli High Road, Kilpauk,
                <br />
                Chennai - 600 010.
              </li>

              <li className="fw500 pt-3">For Enquiry</li>

              <li>
                <a href="">044 420 83 999</a>
              </li>
              <li>
                <a href="">+918760088999</a>
              </li>
              <li>
                <a href="">enquiry@lmlhomes.in</a>
              </li>
              <li>Opening Hours: Monday- Saturday</li>
            </ul>
          </div>
        </ul>
      </Container>
    </header>
  );
}
