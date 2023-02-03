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
//style의 적용 범위는 해당 컴포넌트 내에서만 적용된다. 스코프가 해당 지금 컴포넌트로 한정됨!!!
//그래서 글로벌 css를 적용하기 위해서는 다른 방법을 찾아봐야함! _app.js 주석 참고
//NavBar는 라우터 역할
