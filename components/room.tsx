"use client";

import { ReactNode } from "react";
import {
  LiveblocksProvider,
  RoomProvider,
  ClientSideSuspense,
} from "@liveblocks/react/suspense";
import { LiveList, LiveMap, LiveObject } from "@liveblocks/client";
import { Layer } from "@/types/canvas";
import { getUser } from "@/lib/utils";

export function Room({
  children,
  roomId,
  fallback,
}: {
  children: ReactNode;
  roomId: string;
  fallback: NonNullable<ReactNode> | null;
}) {
  const user = getUser();

  return (
    <LiveblocksProvider
      authEndpoint={`/api/liveblocks-auth?user_id=${user}`}
      throttle={16}
    >
      <RoomProvider
        id={roomId}
        initialPresence={{
          cursor: null,
          selection: [],
          pencilDraft: null,
          penColor: null,
        }}
        initialStorage={{
          layers: new LiveMap<string, LiveObject<Layer>>(),
          layerIds: new LiveList([]),
        }}
      >
        <ClientSideSuspense fallback={fallback}>{children}</ClientSideSuspense>
      </RoomProvider>
    </LiveblocksProvider>
  );
}
