# 리액트를 이용한 웹 사이트 만들기
리액트 사이트 만들기 기초

리액트는 UI 라이브러리로서, 웹 애플리케이션 및 모바일 애플리케이션의 사용자 인터페이스를 구축하는 데 사용

## 설치
터미널에서 만들려는 디렉에 들어간 후
npx create-react-app .

## 라이브러리 설치
sass 설치 : `npm i sass`
react-router-dom 설치 : `npm i react-router-dom`
react-icons 설치 : `npm i react-icons`

## 디자인
디자인은 웹상에 공유되어 있는 디자인으로 작업했습니다. [피그마 디자인](https://www.figma.com/file/4Nk6nkorKyLzXkFUfoqRR4/falin?type=design&node-id=64%3A265&mode=design&t=8bdbou94xu3UuUfa-1)

## 작업 순서
- 필요없는 파일 삭제
- rafce : 기본 문법 단축키 --> 확장프로그램 (ES7 설치해야 가능)
- 리액트 시작 : npm start

## 터미널로 git commit하는 방법
git add .
git status
git commit -m "커밋 제목"
git push -u origin main

## git 초기 세팅
### 윈도우와 맥의 엔터방식 차이로 인한 오류 방지
git config --global core.autocrlf true 

### 사용자 이름, 이메일 주소 설정
git config --global user.name "(본인 이름)"
git config --global user.email "(본인 이메일)"

### 사용자 이름, 이메일 주소 설정 확인
git config --global user.name
git config --global user.email