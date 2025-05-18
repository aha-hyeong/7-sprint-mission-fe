import {
  createArticle,
  getArticle,
  getArticleList,
  patchArticle,
  deleteArticle,
} from "./Article.js";

// 게시글 리스트 전체 가져오기
getArticleList();

// 2페이지, 5개씩, '테스트' 키워드 포함된 게시글 가져오기
getArticleList(2, 5, "테스트");

// 특정 ID 게시글 가져오기
getArticle(258);

// 게시글 생성 테스트
createArticle(
  "API 테스트",
  "이렇게 하는게 맞는가",
  "https://www.google.com/url?sa=i&url=https%3A%2F%2Fnamu.wiki%2Fw%2F%25EA%25B3%25A0%25EC%2596%2591%25EC%259D%25B4&psig=AOvVaw37DAtupRSN_iR4qQt5S4qv&ust=1747665596205000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCNiDsOqfrY0DFQAAAAAdAAAAABAE"
);

// 게시글 수정 테스트(이건 안먹히는거 같음🤔)
patchArticle(
  258,
  "진짜 API 테스트",
  "맞는거 같기도 하고?",
  "https://i.namu.wiki/i/3D5pr65yuDpTVopBVuMZbfSeUGe5psHPlKPiqsnqJoQ6QIKFOzVvH-vSJdQDjsIqKMXGDM-tLKaIgrHTU6ROqfXNwU5RV3Hat_Yq2avCcAdnJLgdRxKoMnUxsTs-giewCNYncTBtXia4R4nvWfTrQg.webp"
);

// 게시글 삭제 테스트
deleteArticle(244);
