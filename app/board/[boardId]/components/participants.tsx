"use client";

import { connectionIdToColor } from "@/lib/utils";
import { UserAvatar } from "./user-avatar";
import { useSelf, useOthers } from "@liveblocks/react/suspense";

const MAX_SHOWN_OTHER_USERS = 2;

const Participants = () => {
  const users = useOthers();
  const currentUser = useSelf();

  const hasMoreUsers = users.length > MAX_SHOWN_OTHER_USERS;

  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md">
      <div className="flex gap-x-2">
        {users.slice(0, MAX_SHOWN_OTHER_USERS).map((user) => {
          return (
            <UserAvatar
              borderColor={connectionIdToColor(user.connectionId)}
              key={user.connectionId}
              src={user.info.picture}
              name={user.info.name}
              fallback={user.info.name[0] || "T"}
            />
          );
        })}

        {currentUser && (
          <UserAvatar
            borderColor={connectionIdToColor(currentUser.connectionId)}
            src={currentUser.info.picture}
            name={`${currentUser.info.name} (You)`}
            fallback={currentUser.info.name[0]}
          />
        )}
      </div>

      {hasMoreUsers && (
        <UserAvatar
          name={`${users.length - MAX_SHOWN_OTHER_USERS} more`}
          fallback={`+${users.length - MAX_SHOWN_OTHER_USERS}`}
        />
      )}
    </div>
  );
};

export default Participants;

export const ParticipantsSkeleton = function ParticipantsSkeleton() {
  return (
    <div className="absolute h-12 top-2 right-2 bg-white rounded-md p-3 flex items-center shadow-md w-[100px]" />
  );
};
