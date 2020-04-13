# Backpot

- 개요

  웹소설 플랫폼

- 기술 스택

  > Back-End : Express, Sequelize, Bcrypt, Passport, Axios, Dotenv, Helmet, Hpp, Morgan, Multer, Pm2

  > Front-End : Express + Next, React, Redux, Redux-Saga, Immer, CKEditor, Styled Component, Babel, Axios, Cookie-Parser, Moment, Morgan, Prop-Types, Pm2

  > 배포환경 : AWS, S3, Linux-Ubuntu

- 느낀점

  평소에 웹소설을 읽는 것을 좋아해서 React 공부할 겸 프로젝트를 진행했다.

  프로젝트를 만들기 앞서 <code>인프런 - React로 NodeBird SNS 만들기</code>를 수강했다.

  > 위 기술스택의 대부분을 사용하는 강의였다.

  하루에 3시간씩 천천히 만들어 가는것을 목표로 시작을 해서 완성할 당시에는 한 달정도의 시간이 흘렀다.

  그 동안은 React로 만들어 본 건 정말 간단한 SPA (ToDo App)였기에 처음으로 어느정도 규모가 있는 프로젝트를 만들어 보는 것이였다.

  내가 느끼기에는 CRA로 만드는 것보다 Next를 이용해서 하는 것이 여러모로 쉬웠던 것 같다.

  하지만, Redux, Redux-Saga 를 프로젝트에 접목해서 사용해본 것은 처음이여서 State 구조 등으로 아쉬운 부분이 많았다.

  어떤 부분은 굳이 없어도 되는 State 였으며 어떤 부분은 너무 복잡했다.
  
  또한, 다만들고 보니 Styled-Component를 따로 분리해서 사용하는편이 훨씬 깔끔했겠다라는 생각을 하게 되었다.
  
  그리고 여러모로 겹치는 코드들이 많아서 따로 분리해서 Import 를 시켰어야 했던 부분들도 보여서 아쉬웠다.

  향후, 이 프로젝트를 Ver.2를 낸다면 앞선 문제에 대해 더 깔끔하게 다듬고 싶다.

  Back-End 에서는 Sequelize와 같은 ORM을 처음 써보았다.

  DB를 좀더 쉽게 다루고 더 직관적으로 볼수 있다는 점은 좋았던 것같지만, 아무래도 나는 SQL을 그대로 쓰는것이 훨씬 편했던 것 같다.

  그 이유라면 내 지도교수님이 DB, PL/SQL 담당 교수님이셔서 지독하게 볶음을 당해서 그런 것 같다.

  그래도 써보지 못했던 것에 대해서 사용을 해보았다는 점에 의의를 두며 다음 프로젝트에 사용 할지는 미지수이지만 좋은 인상을 가지게 되었다.

  배포환경으로는 AWS와 S3를 사용하였다.

  AWS 프리티어를 사용해서 그런지 많이 느린게 좀 답답했지만 무엇보다도 아쉬웠던 점은 Domain을 연결해서 테스트해보고 싶었던 것을 하지 못했던 것이다.

  S3는 처음 사용해보는 것이었는데 강의에서도 다루었던 내용임에도 설정하는데 애를 먹었다.

  결론은 오타여서 허탈했다.

  마지막으로, 메인페이지는 광고같은 배너를 넣고싶었는데 무엇을 넣어야할지 감이 안잡혀서 못넣었다. :)

  이번 프로젝트를 진행하면서 다시 한번 React의 즐거움에 빠졌고 나는 역시나 코딩공부가 즐겁다는 것을 또 한번 느꼈던 것같다.

  다음 Ver.2를 만들게 된다면 위에 서술했던 아쉬운 점들을 토대로 고쳐나가며 디자인도 바꾸고싶다.

  즐거웠던 프로젝트였다.

- Reference

  > 인프런 - React로 NodeBird SNS 만들기 / 제로초

  > https://sequelize.org/v5/

  > https://react.vlpt.us/
