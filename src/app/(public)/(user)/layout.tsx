import React from "react";
import { Container } from "@/components/container";
import { ProfileSidebar } from "@/components/sidebar/profile-sidebar";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container>
      <div className="lg:flex gap-4">
        <ProfileSidebar />

        <div className="w-full">{children}</div>
      </div>
    </Container>
  );
}
