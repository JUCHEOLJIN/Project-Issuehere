# Project - IssueHere

## 프로젝트 설명

자주 방문하는 Github의 Public Repository의 Issue들을 모아서 볼 수 있는 웹 페이지입니다.

### 개요
- 기간 : 21년 11월 17일(수) ~ 21년 11월 22일(월)
- 사용 기술 : `React`, `Styled-Components`, `eslint`, `prettier`


## 구현 사항

1. 검색창에 Repository명을 입력해서 Repository를 검색할 수 있다.
   - [x] Repository를 검색하여, repo 페이지에서 볼 수 있다.
   
2. 검색된 Public Repository를 등록할 수 다.
   - [x] 검색된 Repository를 등록 버튼을 눌러 등록할 수 있다.
   - [x] 최대 등록 개수는 4개로 제한한다.
   - [x] LocalStorage을 이용하여 저장한다.
   
3. 등록된 Repository를 삭제할 수 있다.
   - [x] 취소 버튼을 누르거나, 삭제 버튼을 이용해 등록된 Repository를 삭제할 수 있다.
   
4. 등록된 각각의 Public Repository의 issue를 한 페이지에서 모아서 볼 수 있다.
   - [x] 각 issue 마다 제목, Repository 명은 필수로 표현되어야 한다. 그 이외의 데이터 중 필요하다고 생각되는 부분은 추가한다.(state 추가)
   - [x] 해당 issue를 클릭하면 Github의 상세 페이지로 이동할 수 있다.
   - [x] 페이지네이션을 통해서 계속해서 issue를 모아서 볼 수 있다.

## 시작 방법

### 설치방법

```
npm intall
```

### 실행방법

```
npm start
```


## 구현 화면

### repository 검색 기능

![repo 검색기능](https://user-images.githubusercontent.com/77040128/142815668-acafe999-a30e-42e3-aeec-4b83fb755807.gif)

### repository 등록 & 삭제 기능

![repo 등록, 삭제](https://user-images.githubusercontent.com/77040128/142815801-d75018ff-8fab-4bfc-9e33-3cbd40aa8ad5.gif)

### 페이지네이션 기능

![페이지네이션1](https://user-images.githubusercontent.com/77040128/142815963-4f61c331-2b52-4821-a0bd-954d1549b3b0.gif)

![페이지네이션2](https://user-images.githubusercontent.com/77040128/142815984-5626154a-f440-4d19-9bb1-a0e9b8283a90.gif)

### github 링크로 이동

![링크이동](https://user-images.githubusercontent.com/77040128/142816086-4543847e-a58a-4e57-8b9d-48a0a6950ae6.gif)





