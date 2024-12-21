"use client";
import Link from "next/link";
import { UserDataProps } from "@/lib/types";
import { Container } from "../container";
import { Logo } from "../logo";
import { ThemeToggle } from "../theme-toggle";
import { Button } from "../ui/button";
import { UserMenu } from "../user-menu";

export const Navbar = ({ userData }: { userData: UserDataProps }) => {
  return (
    <nav className="shadow-md md:shadow-none md:border-b border-input sticky top-0 z-20 bg-background">
      <Container>
        <div className="flex items-center justify-between">
          <Logo />

          <div className="flex items-center gap-4">
            <div className="md:hidden">
              <ThemeToggle />
            </div>

            <Button
              icon="menu"
              className="md:hidden"
              onClick={() => console.log("open menu")}
            >
              menu
            </Button>
            <div className="hidden md:flex gap-4 items-center">
              <Link href="/wishlist" passHref>
                <Button icon="heart" variant="outline">
                  <span>19</span>
                </Button>
              </Link>

              <UserMenu userData={userData} />
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
    </nav>
  );
};
