import { API_URLS } from "@/src/constants/api";

export async function GET() {
  try {
    const response = await fetch(API_URLS.categories, {
      cache: "no-cache"
    });

    if (!response.ok) {
      return Response.json(
        { error: "Failed to fetch categories" },
        { status: response.status },
      );
    }

    const data = await response.json();
    return Response.json(data);
  } catch (error) {
    console.error("Error fetching categories:", error);
    return Response.json({ error: "Internal server error" }, { status: 500 });
  }
}
