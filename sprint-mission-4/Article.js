export function getArticleList() {
  fetch("https://sprint-mission-api.vercel.app/articles")
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("article list:", data);
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });
}
