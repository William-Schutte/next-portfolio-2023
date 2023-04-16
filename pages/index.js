import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

import Section from "./components/Section";
import NavSection from "./components/NavSection/NavSection";
import Story from "./components/Story";
import Experience from "./components/ExperienceSection/Experience";
import Contact from "./components/ContactSection/Contact";
import Hero from "./components/Hero";
import Intro from "./components/IntroSection/Intro";

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
          <Hero />
        </Section>
        <Section>
          <Intro />
        </Section>
        <Section>
          <Story />
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
