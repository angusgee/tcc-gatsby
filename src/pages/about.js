import * as React from "react";
import Layout from "../components/layout";

function AboutPage() {
  return (
    <Layout pageTitle="About">
      <main className="flex flex-col max-w-lg mx-auto">
        <p className="mt-10">This is the about page</p>
      </main>
    </Layout>
  );
}

export const Head = () => <title>About dev</title>;

export default AboutPage;
