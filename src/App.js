import React from 'react'
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Slider from "./components/Slider";
import Image from "./components/Image";
import ImgText from "./components/ImgText";
import Card from "./components/Card";
import Banner from "./components/Banner";
import Text from "./components/Text";
import './assets/css/reset.css'
import './assets/css/style.css'


const App = () => {
  return (
    <>
        <Header fonts="nexon" />
        <Main>
            <Slider element="nexon" />
            <Image element="nexon section" title="포트폴리오가 실력이다." />
            <ImgText element="nexon section" title="이미지 텍스트 유형" />
            <Card element="nexon section" title="Green 사이트" />
            <Banner element="nexon" title="Green" />
            <Text element="nexon section" title="스크립트를 익히는 방법" />
        </Main>
        <Footer element="nexon section" />
    </>
  )
}

export default App