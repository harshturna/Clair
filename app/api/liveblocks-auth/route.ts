import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";
import { fetchQuery } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET!,
});

const names = [
  "Anonymous Frog",
  "Lazy Bear",
  "Sleeping Fox",
  "Wise Turtle",
  "Smiling Cat",
];

export async function POST(request: NextRequest) {
  const user = await fetchQuery(api.user.getCurrentUser);

  const userName =
    user?.name || names[Math.floor(Math.random() * names.length)];

  const { room } = await request.json();

  const userInfo = {
    name: userName,
    picture: "",
  };

  const session = liveblocks.prepareSession(
    user?._id || `Guest_${Date.now()}`,
    { userInfo }
  );

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}
