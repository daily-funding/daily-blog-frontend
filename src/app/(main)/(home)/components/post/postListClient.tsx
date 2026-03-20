/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
"use client";

import { PostListResponse } from "@/src/types/post";
import PostItem from "./postItem";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";

type PostListClientProps = {
  initialData: PostListResponse;
};

export default function PostListClient({ initialData }: PostListClientProps) {
  const [posts, setPosts] = useState(initialData.results);
  const [page, setPage] = useState(1);
  const [next, setNext] = useState(initialData.next);
  const [isLoading, setIsLoading] = useState(false);
  const searchParams = useSearchParams();
  const currentCategoryId = Number(searchParams.get("category_id")) || 0;

  useEffect(() => {
    if (page === 1) return;

    const fetchMorePost = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `/api/post?page=${page}&category_id=${currentCategoryId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }

        const data: PostListResponse = await response.json();

        setPosts((prev) => [...prev, ...data.results]);
        setNext(data.next);
      } catch (error) {
        console.error("Error etching post", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMorePost();
  }, [page]);

  useEffect(() => {
    setPage(1);
    const fetchMorePost = async () => {
      setIsLoading(true);

      try {
        const response = await fetch(
          `/api/post?page=1&category_id=${currentCategoryId}`,
        );

        if (!response.ok) {
          throw new Error("Failed to fetch post data");
        }

        const data: PostListResponse = await response.json();

        setPosts(data.results);
        setNext(data.next);
      } catch (error) {
        console.error("Error fetching posts:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMorePost();
  }, [currentCategoryId]);

  return (
    <div className="postListSection">
      {posts.map((post) => (
        <PostItem key={post.post_id} post={post} />
      ))}
      {next ? (
        <div
          className="morePostButton"
          onClick={() => (isLoading ? null : setPage((current) => current + 1))}
        >
          <p>{"MORE"}</p>
          <img src={"/post/more-down-arrow.png"} alt="more Content Button" />
        </div>
      ) : null}
    </div>
  );
}
