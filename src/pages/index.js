import * as React from "react";
import Layout from "../components/layout";

function IndexPage() {
  return (
    <Layout pageTitle="Home">
      <main className="flex flex-col max-w-lg mx-auto">
        <p className="mt-10">
          I'm making this by following the Gatsby Tutorial.
        </p>
      </main>
    </Layout>
  );
}

export const Head = () => <title>Dev env</title>;

export default IndexPage;
