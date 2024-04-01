import * as React from "react";

function IndexPage() {
  return (
    <main className="flex flex-col max-w-lg mx-auto">
      <h1 className="mt-10 text-4xl font-bold">Welcome to my Gatsby site!</h1>
      <p className="mt-10">I'm making this by following the Gatsby Tutorial.</p>
    </main>
  );
}

export default IndexPage;

export const Head = () => <title>Dev env</title>;
