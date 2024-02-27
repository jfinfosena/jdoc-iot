"use client";
import { Group, Burger } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import classes from "./HeaderMain.module.css";
import Logo from "../Logo/Logo";
import { ActionToggle } from "../ActionToggle/ActionToggle";
import Link from "next/link";

const links = [{ link: "/course", label: "Contenido" }];

export function HeaderMain() {
  const [opened, { toggle }] = useDisclosure(false);

  const items = links.map((link) => (
    <Link key={link.label} href={link.link} className={classes.link}>
      {link.label}
    </Link>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.inner}>
        <Group>          
          <Logo />
        </Group>

        <Group>
          <Group ml={50} gap={5} className={classes.links} visibleFrom="md">
            {items}
          </Group>
          <ActionToggle />         
        </Group>
      </div>
    </header>
  );
}
