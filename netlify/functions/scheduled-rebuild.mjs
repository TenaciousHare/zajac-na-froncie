// Codzienny rebuild bloga, żeby opublikować wpisy z pubDate "na dziś".
export default async () => {
  const hook = process.env.BUILD_HOOK_URL;
  if (!hook) {
    console.error("Brak zmiennej BUILD_HOOK_URL");
    return new Response("Brak BUILD_HOOK_URL", { status: 500 });
  }
  const res = await fetch(hook, { method: "POST" });
  console.log("Rebuild wyzwolony, status:", res.status);
  return new Response("OK");
};

export const config = {
  schedule: "0 5 * * *", // 05:00 UTC = 07:00 w Polsce (CEST)
};
