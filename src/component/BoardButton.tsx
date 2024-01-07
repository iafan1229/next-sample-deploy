"use client";

import { useSession } from "next-auth/react";
import Link from "next/link";

export default function BoardButton() {
  const { data: session } = useSession();
  return (
    <p className="button">
      {!session ? (
        "로그인을 해야 글쓰기 버튼이 보입니다"
      ) : (
        <Link href="/board/create">글쓰기</Link>
      )}
    </p>
  );
}
