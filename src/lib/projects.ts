
export async function getAllProjects(page: number, limit: number) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/project/all-projects?page=${page}&limit=${limit}`,
    {
      cache: "no-store", 
      method: "GET",
    },
  );

  if (!res.ok) throw new Error("Failed to fetch projects");
  return res.json();
}

export async function getAllProject() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/all-projects`, {
    next:{revalidate:30},
    method: "GET",

  });
  if (!res.ok) throw new Error("Failed to fetch projects");

  return res.json();
}
export async function createProject(payload: any) {

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/create-project`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to create project");
    }

    return await res.json();
  } catch (err) {
    console.error("Error creating project:", err);
    throw err;
  }
}

export async function updateProject(payload:any, id:string) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/project/update-project/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.message || "Failed to UPDATE project");
    }

    return await res.json();
  } catch (err) {
    console.error("Error updting project:", err);
    throw err;
  }
}