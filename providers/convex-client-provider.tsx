"use client";

import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { Loading } from "@/components/auth/loading";
import SignIn from "@/app/sign-in/page";

interface ConvexClientProviderProps {
  children: React.ReactNode;
}

const convexUrl = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexUrl);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ConvexAuthNextjsProvider client={convex}>
      <Unauthenticated>
        <SignIn />
      </Unauthenticated>
      <AuthLoading>
        <Loading />
      </AuthLoading>
      <Authenticated>{children}</Authenticated>
    </ConvexAuthNextjsProvider>
  );
};
