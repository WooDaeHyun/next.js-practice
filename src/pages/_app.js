import Layout from "components/Layout";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

// 이건 규칙이다 _app을 통해서 App 컴포넌트를 컨트롤하는 것이고,
// 글로벌 스타일을 적용하거나 모든 컴포넌트에 공통적으로 적용할 컴포넌트는 여기서 붙이는 것이다. 프레임워크의 규칙이다!
// 그리고 글로벌 css는 일반 컴포넌트에서 붙이면 error가 발생하고 오로지 _app컴포넌트 내에서만 불러올 수 있다!!!!!
// 그래서 .module.css 가 중요한 이유가 이것이다.
// 일반 컴포넌트 내에서 css 파일을 불러오기 위해서는 확장자 명이 .module.css여야 한다!
