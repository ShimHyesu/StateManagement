//
// JSONPlaceholder에 Get 요청을 하여 데이터를 받아옴
// JSONPlaceholder: API 요청 테스팅할때 사용할 수 있는 공개 API를 제공해주는 웹사이트
//
import axios from "axios";

export async function getPosts() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/posts"
  );
  return response.data;
}
