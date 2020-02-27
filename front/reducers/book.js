import produce from 'immer';

export const initalState = {
  likedBookList: [
    {
      writer: '글슬슬',
      bookname: '천재배우의 아우라',
    },
    {
      writer: '준슬',
      bookname: '시스템 에러로 종족초월',
    },
    {
      writer: '하이엔드',
      bookname: '천재의 게임방송',
    },
    {
      writer: '디다트',
      bookname: 'BJ대마도사',
    },
    {
      writer: '김강현',
      bookname: '천마는 조용히 살고싶다.',
    },
    {
      writer: '마교졸개',
      bookname: '회귀자가 다 뺏어먹음',
    },
    {
      writer: '근서',
      bookname: '내가 키운 S급들',
    },
    {
      writer: '판미손',
      bookname: '빌린어 방송을 너무 잘함',
    },
    {
      writer: '테스트작가',
      bookname: '박박박박박박박박박박박박박박박박박박박박박박박박박박박박박박',
    },
  ],
};

const reducer = (state = initalState, action) => {
  return produce(state, draft => {
    switch (action.type) {
      default:
        break;
    }
  });
};
export default reducer;
