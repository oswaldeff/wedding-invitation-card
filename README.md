# wedding-invitation-card

## 인트로

개발자로서 모바일 청첩장은 직접 만들자란 생각과 프론트엔드를 조금이나마 체험해볼 수 있는 좋은 기회라 여겨
10여일간(2023.10.07 ~ 2023.10.17)에 걸친 퇴근 후 및 주말동안 필요한 기능들을 리스트업하고 개발하였습니다.

---

## 기능기획

- [x] 모바일 UI
- [ ] 스크롤 애니메이션
- [x] 초대말 CANVAS
- [x] 핸드폰 연락
- [x] 웨딩사진 CAROUSEL
- [x] 지도주소 COPY
- [x] 네이버맵 연동
- [x] 카카오맵 연동
- [x] 티맵 연동
- [x] 계좌 COPY
- [x] 토글메뉴
- [x] 카카오톡 공유
- [x] 공유링크 COPY
- [x] OG TAG

---

## 기술스택

- AWS EC2 -> s3
- react 18.2 version

---

## 개발환경

- yarn 1.22 version

---

## KPT회고

- Keep:
  - 리액트 훅을 제대로 사용하지 못해봤지만, 리액트가 어떻게 설계되어 있는지 정도는 살펴볼 수 있는 기회였습니다.
  - 다시금 초기 기획의 중요성을 되짚어보게 되는 시간이었습니다.
- Problem:
  - 처음 기획했던 스크롤 애니메이션을 locomotive라이브러리를 사용하여 일부구현했지만 이미지 resize에 따른 quality문제가 발생하였습니다.
  - 사진 갤러리를 보여주는 CAROUSEL에서 각 사진의 이미지크기가 다르기도 하고 CAROUSEL라이브러리 옵션을 숙지하지 못하여 외곽 경계선을 일부 사진이 벗어나는 문제가 발생하였습니다.
  - 계좌 토글메뉴를 열었을때 토글메뉴가 담고있는 컨텐츠의 높이에 유연하게 애니메이션되지 않는 문제가 발견되었습니다.
- Try:
  - locomotive라이브러리를 사용할때 CANVAS에서 픽셀에 대한 스케일을 적용하여 이미지 quality는 소폭 개선하였지만, 모바일환경에서 브라우저의 url부분에 대한 문제로 스크롤에 따른 resizing이 발생하여 일반적인 대문으로 변경하였습니다.
  - 사진 크기를 일정 비율로 통일하고 CAROUSEL의 centerSlidePercentage속성을 통해 외곽선 안에 사진이 100%로 차도록 적용하였습니다. 또한 좌우 이동버튼의 가시성 확보를 위하여 carousel css속성에 접근하여 사진과 버튼의 간격을 조정하였습니다.
  - 토글메뉴를 열었을때 동적으로 width가 변하면서 height에 대한 margin이 auto로 적용되는데 이때의 과정이 매끄럽지 않은것으로 추정되었고 transition속성을 설정하여 개선해볼 수 있는것 같아 개선과정을 적용해보는중입니다.

---

## 완성된 모바일 청첩장

- ![wic](https://github.com/oswaldeff/wedding-invitation-card/assets/66583879/cc8747d5-7617-490d-8677-d9d73d38e62e)
- full: https://youtube.com/shorts/uXt39Wtb9QE

## 청첩장 방문 추이(카카오 API 호출)

- <img width="1433" alt="wic-kakao-api-call" src="https://github.com/oswaldeff/wedding-invitation-card/assets/66583879/5ed2928a-6b7f-4f60-a223-0f201506b3cd">
