import React from 'react'

const textInfo = [
    {
        name: "t1",
        title: "검색 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    },
    {
        name: "t2",
        title: "클릭 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    },
    {
        name: "t3",
        title: "찾기 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    },
    {
        name: "t4",
        title: "보기 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    },
    {
        name: "t5",
        title: "오버 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    },
    {
        name: "t6",
        title: "검색 이팩트",
        desc: "자바스크립트의 기본 메서드를 통해 검색 스크립트를 완성하는 튜토리얼입니다.",
    }
]

const Text = (props) => {
  return (
    <section id="textType" className={`text__wrap ${props.element}`}>
        <span className='blind'>텍스트 유형</span>
        <h2>{props.title}</h2>
        <div className="text__inner container">
            {textInfo.map((info, key) => (
                <div className={`text ${info.name}`} key={key}>
                <h3 className="title">{info.title}</h3>
                <p className="desc">{info.desc}</p>
                <a href="/" className="btn">더보기</a>
            </div>
            ))}
        </div>
    </section>
  )
}

export default Text