import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <Link href={"/"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <style jsx>{`
        nav {
          background-color: tomato;
        }
      `}</style>
    </nav>
  );
}

//styled jsx는 next.js 고유의 방법이라고 할 수 있음
