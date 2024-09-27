import React, { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import logoLight from "@/public/assets/images/header-logo-transparent.png";
import logo from "@/public/assets/images/logo.png";
import Link from "next/link";
import { motion } from "framer-motion";
import { menu } from "@/data/menu";

export default function Header() {
  const pathname = usePathname();

  const [dropdownStates, setDropdownStates] = useState({
    projects: false,
    about: false,
    partners: false,
  });

  useEffect(() => {
    const dropdownToggle = document.querySelectorAll(".dropdown-toggle");
    dropdownToggle.forEach((toggle) => {
      toggle.addEventListener("mouseover", function () {
        const dropdownId = toggle.getAttribute("data-dropdown-id");
        setDropdownStates((prevStates) => ({
          ...prevStates,
          [dropdownId]: true,
        }));
      });
      toggle.addEventListener("mouseleave", function () {
        const dropdownId = toggle.getAttribute("data-dropdown-id");
        setDropdownStates((prevStates) => ({
          ...prevStates,
          [dropdownId]: false,
        }));
      });
    });
  }, []);

  return (
    <>
      <Navbar
        id="header"
        className={
          // pathname == '/' ? 'HeaderTransparent Header' : 'Header headerWhite'
          pathname === "/"
            ? "HeaderTransparent Header"
            : pathname === "/prakriti"
            ? "HeaderTransparent Header"
            : pathname === "/arshiya"
            ? "HeaderTransparent Header"
            : pathname === "/iconia"
            ? "HeaderTransparent Header"
            : pathname === "/league-one"
            ? "HeaderTransparent Header"
            : "Header headerWhite"
        }
      >
        <Container>
          <Link href="/">
            {pathname === "/" ? (
              <Image src={logoLight} alt="LML Logo" className="" priority />
            ) : pathname === "/prakriti" ? (
              <Image src={logoLight} alt="LML Logo" className="" priority />
            ) : pathname === "/arshiya" ? (
              <Image src={logoLight} alt="LML Logo" className="" priority />
            ) : pathname === "/iconia" ? (
              <Image src={logoLight} alt="LML Logo" className="" priority />
            ) : (
              <Image src={logo} alt="LML Logo" className="" priority />
            )}
          </Link>
          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <ul>
                {menu.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      {item.hasDropDown === true ? (
                        <NavDropdown
                          title={item.title}
                          show={dropdownStates[item.id]}
                          onMouseEnter={() => setDropdownStates((prevStates) => ({ ...prevStates, [item.id]: true }))}
                          onMouseLeave={() => setDropdownStates((prevStates) => ({ ...prevStates, [item.id]: false }))}
                        >
                          {item.dropdown?.map((submenu) => {
                            return (
                              <Link className="dropdown-item" href={submenu.slug} key={submenu.title}>
                                {submenu.title}
                              </Link>
                            );
                          })}
                        </NavDropdown>
                      ) : (
                        <Link href={item.slug}>
                          {pathname === item.slug ? <motion.span layoutId="underline" /> : null}

                          <li>{item.title}</li>
                        </Link>
                      )}
                    </React.Fragment>
                  );
                })}
              </ul>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
