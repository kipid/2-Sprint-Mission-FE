# 스프린트 미션 8 요구사항 확인

- [스프린트 미션 8 Figma 디자인 확인하러 바로가기](https://www.figma.com/design/EWfmnBJU3fdkeHKyYBQW6L/%5B%EC%88%98%EA%B0%95%EC%83%9D-%EA%B3%B5%EC%9C%A0%EC%9A%A9%5D-%ED%8C%90%EB%8B%A4%EB%A7%88%EC%BC%93?node-id=7713-14337&t=bccSto8eZgw11vMh-1)

## 요구사항

### 기본 요구사항

#### 공통

- [ ] Github에 스프린트 미션 PR을 만들어 주세요.
- [ ] Next.js를 사용해 진행합니다.

#### 자유 게시판 페이지

- [ ] 게시글 목록에서 드롭다운을 사용하여 "최신 순"으로 정렬할 수 있도록 합니다.
- [ ] 본인이 이전 미션에서 생성한 게시글 목록 조회 API를 활용해 GET 메서드로 데이터를 가져옵니다.
- [ ] 게시글 제목에 검색어가 일부 포함되면 해당 게시글을 검색할 수 있도록 합니다.
- [ ] 이미지는 디폴트 이미지로 프론트엔드에서 처리해 주세요.
- [ ] 게시글 닉네임 및 좋아요 개수 역시 임의값으로 프론트엔드에서 처리해주세요.
- [ ] 베스트 게시글은 최신순 3개 게시글을 요청으로 데이터를 가져와 구현해주세요.
- [ ] 자유게시판 페이지에서 특정 게시글을 클릭하면 해당 게시물의 상세 페이지로 이동합니다.

#### 게시글 등록 & 수정 페이지

- [ ] 각 input 필드에 정확한 placeholder 값을 입력합니다.
- [ ] 모든 input 필드에 값을 입력하면 '등록' 버튼이 활성화됩니다.
- [ ] 본인이 이전 미션에서 생성한 게시글 생성 API를 활용해 POST 메서드로 게시글을 등록합니다.
- [ ] '등록' 버튼을 누르면 해당 게시물 상세 페이지로 이동합니다.
- [ ] 게시글 수정 페이지 UI는 게시글 등록 페이지와 동일합니다.
- [ ] 본인이 이전 미션에서 생성한 게시글 상세 API의 PATCH 메소드를 사용하여 게시물을 수정합니다.

#### 게시글 상세 페이지

- [ ] 본인이 이전 미션에서 생성한 게시글 상세 API의 GET 메소드를 사용하여 데이터를 가져옵니다.
- [ ] 본인이 이전 미션에서 생성한 게시글 상세 API의 DELETE 메소드를 사용하여 게시물을 삭제합니다.
- [ ] 댓글 input에 값을 입력하면 '등록' 버튼이 활성화됩니다.
- [ ] 본인이 이전 미션에서 생성한 댓글 생성 API를 활용해 POST 메소드로 댓글을 등록합니다.
- [ ] 본인이 이전 미션에서 생성한 댓글 생성 API를 활용해 PATCH 메소드로 댓글을 수정합니다.
- [ ] 본인이 이전 미션에서 생성한 댓글 생성 API를 활용해 DELETE 메소드로 댓글을 삭제합니다.



### 심화 요구사항

#### 공통

- [ ] 디자인 시안에 따라 반응형 디자인을 구현합니다.
- [ ] (생략 가능) 원한다면 지금까지 진행한 모든 React 코드를 Next.js로 마이그레이션 해주세요.
	- 마이그레이션에 상당한 시간이 소요될 수 있으므로 진행을 권장하지 않습니다.