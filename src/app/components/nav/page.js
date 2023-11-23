"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = ["Beranda", "Destinasi"];

  return (
    <Navbar
      className="p-2"
      style={{ maxWidth: "2000px", position: "fixed", top: 0 }}
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="sm:hidden p-2" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <Image src="/assets/img/logo2.webp" width={150} height={150} />
          <p className="font-bold text-inherit"></p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <Image src="/assets/img/logo2.webp" width={150} height={150} />
          <p className="font-bold text-inherit"></p>
        </NavbarBrand>
        <NavbarItem>
          <Link
            className="text-slate-200 hover:text-white hover:border-b-2 hover:border-white duration-300 rounded-sm hover:scale-110"
            href="/"
          >
            Beranda
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            href="/destinasi"
            className="text-slate-200 hover:text-white hover:border-b-2 hover:border-white duration-300 rounded-sm hover:scale-110"
          >
            Destinasi
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Link
            // as={Link}
            className=" px-4 py-2 rounded-full hover:scale-[1.05] duration-500 bg-white backdrop-blur-md text-gray-900 font-semibold"
            color="warning"
            href="/auth/login"
            variant="flat"
          >
            Join Us
          </Link>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="p-10 text-xl text-gray-800 font-bold">
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                  ? "danger"
                  : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
