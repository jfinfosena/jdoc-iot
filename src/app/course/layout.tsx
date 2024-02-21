"use client";
import {
  ActionIcon,
  AppShell,
  Burger,
  Center,
  Drawer,
  Group,
  Text,
  Tooltip,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { homepage } from "./page.data";
import Logo from "../components/Logo/Logo";
import { ActionToggle } from "../components/ActionToggle/ActionToggle";
import { NavbarSimple } from "../components/NavbarSimple/NavbarSimple";
import { TableOfContents } from "../components/TableOfContents/TableOfContents";
import { IconMenuDeep } from "@tabler/icons-react";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [navbarOpened, { toggle: toggleNavbar }] = useDisclosure();
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <AppShell
        header={{ height: 60 }}
        navbar={{
          width: 300,
          breakpoint: "md",
          collapsed: { mobile: !navbarOpened },
        }}
        // aside={{ width: 250, breakpoint: "md", collapsed: { mobile: true } }}
        footer={{ height: 40 }}
        padding="md"
      >
        <AppShell.Header>
          <Group justify="space-between" h="100%">
            <Group h="100%" px="md">
              <Burger
                opened={navbarOpened}
                onClick={toggleNavbar}
                hiddenFrom="sm"
                size="sm"
              />
              <Logo />
            </Group>
            <Group m="sm">
              <Tooltip label={"Tabla de Contenido"}>
                <ActionIcon
                  // className={classes.showbutton}
                  onClick={() => {
                    open();
                  }}
                  variant="light"
                  size="md"
                  aria-label="Toggle color scheme"
                  color="blue"
                >
                  <IconMenuDeep stroke={1.5} />
                </ActionIcon>
              </Tooltip>
              <ActionToggle />
            </Group>
          </Group>
        </AppShell.Header>
        <AppShell.Navbar>
          <NavbarSimple toggle={toggleNavbar} />
        </AppShell.Navbar>
        <AppShell.Main>{children}</AppShell.Main>
        {/* <AppShell.Aside>
          <TableOfContents />
        </AppShell.Aside> */}
        <AppShell.Footer>
          <Center mt={10}>
            <Text
              size="sm"
              fw={900}
              variant="gradient"
              gradient={{ from: "orange", to: "yellow", deg: 90 }}
              style={{ textOverflow: "ellipsis" }}
            >
              {homepage.title}
            </Text>
            <Text size="xs" ml={"sm"}>
              &copy; 2024 JFVG
            </Text>
          </Center>
        </AppShell.Footer>
      </AppShell>
      <Drawer
        // offset={8}
        // radius="md"
        position="right"
        opened={opened}
        onClose={close}
        onClick={close}
        title="Tabla de Contenido"
      >
        <TableOfContents />
      </Drawer>
    </>
  );
}
