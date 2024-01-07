"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Update({ params }: { params: { id: string } }) {
  const router = useRouter();
  const props = params.id;
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const id = props;
  async function refresh() {
    const resp = await fetch(`http://localhost:9999/posts/${id}`);
    const topic = await resp.json();
    setTitle(topic.title);
    setBody(topic.body);
  }
  useEffect(() => {
    refresh();
  }, []);
  return (
    <div className="board-list">
      <form
        onSubmit={async (evt: React.ChangeEvent<HTMLFormElement>) => {
          evt.preventDefault();
          // const title = evt.target.title.value;
          // const body = evt.target.body.value;
          const resp = await fetch(`http://localhost:9999/posts/${id}`, {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, body }),
          });
          const topic = await resp.json();
          router.push(`/board/read/${topic.id}`);
          router.refresh();
        }}
      >
        <h2>Update</h2>
        <p>
          <input
            type="text"
            name="title"
            placeholder="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </p>
        <p>
          <textarea
            name="body"
            placeholder="body"
            onChange={(e) => setBody(e.target.value)}
            value={body}
          ></textarea>
        </p>
        <p>
          <input type="submit" value="update" />
        </p>
      </form>
    </div>
  );
}
