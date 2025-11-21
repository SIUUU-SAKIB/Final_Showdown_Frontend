


export async function loginUser(email: string, password: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  });

  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Login failed');
  return data;
}


export async function fetchCurrentUser() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/user`, {
    next:{revalidate:30},
    method: "GET",
    credentials: "include",
  });
  if (!res.ok) throw new Error("Not authenticated");
  return res.json();
}

export async function logoutUser () {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/logout`, {
    method: "POST",
    credentials: "include",
  });
  if (!res.ok) throw new Error("logout failed 😔");

  return res.json();
}

