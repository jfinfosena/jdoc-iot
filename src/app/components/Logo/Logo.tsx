import React from "react";
import Image from "next/image";
import { Flex, Text } from "@mantine/core";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/" passHref style={{ textDecoration: "none" }}>
      <div
        className="logo-container"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Flex
          mih={50}
          gap="xs"
          justify="flex-start"
          align="center"
          direction="row"
          wrap="wrap"
        >
          <Image src="/logo.png" alt="me" width={32} height={32} />
          <Text
            size="xl"
            fw={900}
            variant="gradient"
            gradient={{ from: "cyan", to: "blue", deg: 76 }}
          >
            JDOCode
          </Text>
        </Flex>
      </div>
    </Link>
  );
};

export default Logo;
