import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET!,
});

const names = ["Alisha Minter", "Kevin Don", "Anonymous frog", "Harsh Turna"];

export async function POST(request: NextRequest) {
  let user_id = request.nextUrl.searchParams.get("user_id");

  if (!user_id) {
    user_id = `Guest_${Date.now()}`;
  }

  const { room } = await request.json();

  const userInfo = {
    name: names[Math.floor(Math.random() * names.length)],
    picture: "",
  };

  const session = liveblocks.prepareSession(user_id, { userInfo });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}
