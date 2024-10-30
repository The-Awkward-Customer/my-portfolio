import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Peter Abbott</h1>
      <p>Hello World!</p>

      <nav>
        <Link href={"/about-me"}>About me</Link>
      </nav>
    </div>
  );
}
