import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Section from "./components/Section";
import NavSection from "./components/NavSection/NavSection";
import Hero from "./components/HeroSection/Hero";
import Intro from "./components/Intro";
import Experience from "./components/ExperienceSection/Experience";
import Contact from "./components/Contact";
import Title from "./components/Title";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>William Schutte</title>
        <meta
          name="description"
          content="Portfolio and Resume of William Schutte"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <NavSection />

        <Section background>
          <Title />
        </Section>
        <Section>
          <Hero />
        </Section>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Experience />
        </Section>
        <Section background>
          <Contact />
        </Section>
      </main>
    </>
  );
}
