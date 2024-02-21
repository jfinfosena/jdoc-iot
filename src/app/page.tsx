import { FooterSimple } from "./components/FooterSimple/FooterSimple";
import { HeaderMain } from "./components/HeaderMain/HeaderMain";
import { HeroImageBackground } from "./components/HeroImageBackground/HeroImageBackground";


export default function Home() {
  return (
    <>
      <HeaderMain />
      <HeroImageBackground />
      <FooterSimple />
    </>
  );
}
