import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  return (
    <nav>
      <img src="/vercel.svg" />
      {/* public에 들어있는건 그냥 확장자명만 작성하면 됨! 편리함 */}
      <div>
        <a href="/" className={router.pathname === "/" ? "active" : ""}>
          Home
        </a>

        <a
          href="/about"
          className={router.pathname === "/about" ? "active" : ""}
        >
          About
        </a>
      </div>
      <style jsx>{`
        nav {
          display: flex;
          gap: 10px;
          flex-direction: column;
          align-items: center;
          padding-top: 20px;
          padding-bottom: 10px;
          box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px,
            rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
        }
        img {
          max-width: 100px;
          margin-bottom: 5px;
        }
        nav a {
          font-weight: 600;
          font-size: 18px;
        }
        .active {
          color: tomato;
        }
        nav div {
          display: flex;
          gap: 10px;
        }
      `}</style>
    </nav>
  );
}

//styled jsx는 next.js 고유의 방법이라고 할 수 있음
//style의 적용 범위는 해당 컴포넌트 내에서만 적용된다. 스코프가 해당 지금 컴포넌트로 한정됨!!!
//그래서 글로벌 css를 적용하기 위해서는 다른 방법을 찾아봐야함! _app.js 주석 참고
//NavBar는 라우터 역할
