import Link from "next/link";
import TopNav from "@/components/top-nav/top-nav";
import ProgressBar from "@/components/progressBar/progressBar";

export default function Home() {
  const links = [
    { label: "home", href: "/" },
    { label: "About me", href: "/about-me" },
  ];

  return (
    <div>
      <h1>Peter Abbott</h1>
      <p>Hello World!</p>
      <TopNav title="Peter Abbott" links={links} />
      <nav>
        <Link href={"/about-me"}>About me</Link>
      </nav>

      <ProgressBar>
        <p>Congratulations! You&apos;ve reached the bottom of the page!</p>
      </ProgressBar>
      <div style={{ height: "2000px", padding: "1rem" }}>
        <h1>Welcome to My Portfolio</h1>
        <p>Scroll down to see the progress bar in action!</p>
      </div>
    </div>
  );
}
