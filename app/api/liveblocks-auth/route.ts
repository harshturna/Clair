import { Liveblocks } from "@liveblocks/node";
import { NextRequest } from "next/server";

const liveblocks = new Liveblocks({
  secret: process.env.LIVEBLOCKS_SECRET!,
});

const names = [
  "Anonymous Frog",
  "Lazy Bear",
  "Sleeping Panda",
  "Wise Turtle",
  "Smiling Cat",
  "Cunning Fox",
];

export async function POST(request: NextRequest) {
  const userId = request.nextUrl.searchParams.get("user_id");

  const userName = names[Math.floor(Math.random() * names.length)];

  const guestIds = process.env.GUEST_IDS!.split("__");
  const guestId = guestIds[Math.floor(Math.random() * guestIds.length)];

  const { room } = await request.json();

  const userInfo = {
    name: userName,
    picture: "",
  };

  const session = liveblocks.prepareSession(guestId || `Guest_${Date.now()}`, {
    userInfo,
  });

  if (room) {
    session.allow(room, session.FULL_ACCESS);
  }

  const { status, body } = await session.authorize();

  return new Response(body, { status });
}
