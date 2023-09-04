import React from "react";
import { Page, Seo, Section, Animation } from "gatsby-theme-portfolio-minimal";

export default function FirstPage() {
  return (
    <>
      <Seo title="FirstPage" />
      <Page useSplashScreenAnimation>
        <Animation type="fadeIn" delay="0.5s">
          <Section id="first">
            <h1>First Page</h1>
          </Section>
        </Animation>
      </Page>
    </>
  );
}
