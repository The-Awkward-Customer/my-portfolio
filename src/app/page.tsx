import Link from "next/link";
import TopNav from "@/components/top-nav/top-nav";

export default function Home() {

const links = [
  {label: 'home', href: '/'},
  {label: 'About me', href: '/about-me'}
]


  return (
    <div>
      <h1>Peter Abbott</h1>
      <p>Hello World!</p>
      <TopNav title="Peter Abbott" links={links}/>
      <nav>
        <Link href={"/about-me"}>About me</Link>
      </nav>
    </div>
  );
}
