"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Create() {
  const { data: session } = useSession();

  const router = useRouter();
  return (
    <div className="board-list">
      <form
        onSubmit={async (evt: any) => {
          evt.preventDefault();
          const title = evt.target.title.value;
          const body = evt.target.body.value;
          const resp = await fetch("http://localhost:9999/posts/", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              title,
              body,
              author: session?.user?.name ? session?.user.name : "",
            }),
          });
          const topic = await resp.json();
          alert("글이 생성되었습니다");
          router.push("/board/read");
          // router.push(`/board/read/${topic.id}`);
          router.refresh();
        }}
      >
        <h2>글쓰기</h2>
        <p>
          <input
            type="text"
            name="title"
            placeholder="글 제목을 입력해주세요"
          />
        </p>
        <p>작성자 :{session ? session.user?.name : ""}</p>

        <p>
          <textarea
            name="body"
            placeholder="글쓸 내용을 입력해주세요"
          ></textarea>
        </p>
        <p>
          <input type="submit" value="create" />
        </p>
      </form>
    </div>
  );
}
