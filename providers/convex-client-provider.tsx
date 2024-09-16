"use client";

import { ConvexAuthNextjsProvider } from "@convex-dev/auth/nextjs";
import { AuthLoading, ConvexReactClient } from "convex/react";
import { Loading } from "@/components/auth/loading";
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
      <AuthLoading>
        <Loading />
      </AuthLoading>
      {children}
    </ConvexAuthNextjsProvider>
  );
};
