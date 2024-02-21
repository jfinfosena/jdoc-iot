"use client";
import { homepage } from "@/app/course/page.data";
import { Center, Text } from "@mantine/core";

export function FooterSimple() {
  return (
    <div style={{ position: "fixed", bottom: "0px", textAlign:'center', width:'100%' }}>
      <Center mb={5}>
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
    </div>
  );
}
