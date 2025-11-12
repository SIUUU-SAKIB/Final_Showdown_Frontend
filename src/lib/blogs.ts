
export async function getAllBlogs(page: number, limit: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/all-blogs?page=${page}&limit=${limit}`,
    {
      cache: "no-store", 
      method: "GET",
    }
  );

  if (!res.ok) throw new Error("Failed to fetch blogs");
  return res.json();
}

export async function getAllBlog() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/all-blogs`, {
    next:{revalidate:30},
    method: "GET",

  });
  if (!res.ok) throw new Error("Failed to fetch blogs");

  return res.json();
}
export async function createBlog(payload: any) {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/create-blog`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create blog");
    }

    return await res.json();
  } catch (err) {
    console.error("Error creating blog:", err);
    throw err;
  }
}

export async function updateBlog(payload:any, id:string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/update-blog/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to UPDATE blog");
    }

    return await res.json();
  } catch (err) {
    console.error("Error updting blog:", err);
    throw err;
  }
}