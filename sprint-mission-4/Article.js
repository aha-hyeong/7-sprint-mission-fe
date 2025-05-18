export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  const url = `https://sprint-mission-api.vercel.app/articles?page=${page}&pageSize=${pageSize}&keyword=${keyword}`;

  fetch(url)
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

export function getArticle(id) {
  const url = `https://sprint-mission-api.vercel.app/articles/${id}`;

  fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`article ${id}:`, data);
    })
    .catch((error) => {
      console.error("에러 발생:", error);
    });
}

export function createArticle(title, content, image) {
  const url = "https://sprint-mission-api.vercel.app/articles";
  const data = {
    title,
    content,
    image,
  };

  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("게시물 생성 성공:", data);
    })
    .catch((error) => {
      console.error("게시물 생성 실패:", error.message);
    });
}

export function patchArticle(id, title, content, image) {
  const url = `https://sprint-mission-api.vercel.app/articles/${id}`;
  const data = {
    title,
    content,
    image,
  };

  fetch(url, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태 코드: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log(`게시물 수정 성공 (ID: ${id}):`, data);
    })
    .catch((error) => {
      console.error(`게시물 수정 실패 (ID: ${id}):`, error.message);
    });
}

export function deleteArticle(id) {
  const url = `https://sprint-mission-api.vercel.app/articles/${id}`;

  fetch(url, {
    method: "DELETE",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP 오류! 상태코드: ${response.status}`);
      }
      console.log(`게시물 삭제 성공 (ID: ${id})`);
    })
    .catch((error) => {
      console.error(`게시물 삭제 실패 (ID: ${id}):`, error.message);
    });
}
