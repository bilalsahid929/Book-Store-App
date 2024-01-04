"use client";

import { Container, Flex } from "@radix-ui/themes";
import classNames from "classnames";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavBar = () => {
  return (
    <nav className=" border-b mb-5 px-5 h-14 py-3">
      <Container>
        <Flex justify="between">
          <Link href="/">
            <h1>Book Store</h1>
          </Link>
          <Flex align="center" gap="3">
            <NavLinks />
          </Flex>
        </Flex>
      </Container>
    </nav>
  );
};

export default NavBar;

const NavLinks = () => {
  const currentPath = usePathname();

  const links = [
    { label: "Home", href: "/" },
    { label: "Add Book", href: "/books/new" },
  ];
  return (
    <ul className="flex space-x-6 ">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            className={classNames({
              "nav-link": true,
              " !text-zinc-900": link.href === currentPath,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
