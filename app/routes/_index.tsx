import { Code } from "@heroui/code";
import { Snippet } from "@heroui/snippet";
import type { MetaFunction } from "react-router";
import { Navbar } from "components/navbar";

export const meta: MetaFunction = () => {
  return [
    { title: "HeroUI + Remix App" },
    { name: "description", content: "Welcome to HeroUI!" },
  ];
};

export default function Index() {
  return (
    <div className="relative flex flex-col h-screen">
      <Navbar />
      <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
        <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
          <div className="mt-8">
            <Snippet hideCopyButton hideSymbol variant="bordered">
              <span>
                Get started by editing{" "}
                <Code color="primary">app/routes/_index.tsx</Code>
              </span>
            </Snippet>
          </div>
        </section>
      </main>
      <footer className="w-full flex items-center justify-center py-3"></footer>
    </div>
  );
}
