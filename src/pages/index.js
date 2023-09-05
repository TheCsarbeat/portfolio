import React from "react";
import {
  AboutSection,
  ArticlesSection,
  ContactSection,
  HeroSection,
  InterestsSection,
  Page,
  ProjectsSection,
  Seo,
} from "gatsby-theme-portfolio-minimal";

export default function IndexPage() {
  return (
    <>
      <Seo title="Cesar Jimenez" />
      <Page useSplashScreenAnimation>
        <HeroSection sectionId="hero" />
        <AboutSection sectionId="about" heading="About me" />
        <InterestsSection sectionId="details" heading="Skills" />
        <ProjectsSection sectionId="projects" heading="My projects" />
        <ContactSection sectionId="contact" heading="Wanna reach out?" />
      </Page>
    </>
  );
}
