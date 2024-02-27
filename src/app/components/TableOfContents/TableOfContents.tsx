import { useEffect, useState } from "react";
import cx from "clsx";
import { Box, ScrollArea } from "@mantine/core";
import classes from "./TableOfContents.module.css";
import Link from "next/link";


export function TableOfContents() {
  const [active, setActive] = useState(0);
  const [links, setLinks] = useState<Link[]>([]);
  const [items, setItems] = useState<JSX.Element[]>([]);

  type Link = {
    label: string;
    link: string;
    order: number;
  };

  useEffect(() => {
    const headers = Array.from(
      document.querySelectorAll("h1, h2, h3, h4, h5, h6")
    );    
    const filteredHeaders = headers.filter(
      (header) => (header as HTMLElement).innerText !== "Tabla de Contenido"
    );
    const newLinks = filteredHeaders.map((header, index) => ({
      label: (header as HTMLElement).innerText,
      link: `#header${index}`,
      order: parseInt(header.tagName[1]),
    }));
    filteredHeaders.forEach((header, index) => {
      (header as HTMLElement).id = `header${index}`;
    });
    setLinks(newLinks);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const index = links.findIndex((link) => {
        const element = document.querySelector(link.link);
        return element && element.getBoundingClientRect().top >= 0;
      });
      setActive(index === -1 ? links.length - 1 : index);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [links]);

  useEffect(() => {
    let temp = links.map((item, index) => {
      return (
        <Link
          key={item.label}
          href={item.link}
          style={{ textDecoration: "none" }}
          onClick={(e) => {
            e.preventDefault();
            const element = document.querySelector(item.link);
            if (element) {
              window.scrollTo({
                top: element.getBoundingClientRect().top + window.scrollY - 80,
                behavior: "instant",
              });
            }
          }}
        >
          <Box
            className={cx(classes.link, {
              [classes.linkActive]: active === index,
            })}
            style={{
              paddingLeft: `calc(${item.order} * var(--mantine-spacing-md))`,
            }}
          >
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                fontWeight: item.order === 1 ? 500 : "normal",
              }}
            >
              {item.label}
            </Box>
          </Box>
        </Link>
      );
    });
    setItems(temp);
  }, [links]);

  return (
    <>
      {/* <Group m="md">
        <Text fw={500}>Contenido</Text>
      </Group> */}
      <ScrollArea scrollbars="y" p={"sm"}>
        <div className={classes.root}>
          <div
            className={classes.indicator}
            style={{
              transform: `translateY(calc(${active} * var(--link-height) + var(--indicator-offset)))`,
              height: "100%",
            }}
          />
          {items}
        </div>
      </ScrollArea>
    </>
  );
}
