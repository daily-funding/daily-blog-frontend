import { API_URLS } from "@/src/constants/api";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const page = searchParams.get("page") || "1";
  const categoryId = searchParams.get("category_id");

  try {
    const params = new URLSearchParams();
    params.set("page", page);

    if (categoryId && categoryId !== "0") {
      params.set("category_id", categoryId);
    }

    const response = await fetch(`${API_URLS.posts}?${params.toString()}`, {
      next: { revalidate: 60 * 60 * 6, tags: ["posts"] },
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch post" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching post:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
