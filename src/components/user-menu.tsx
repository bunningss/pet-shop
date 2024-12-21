"use client";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useRouter } from "next/navigation";
import { Icon } from "./icon";
import { UserDataProps } from "@/lib/types";

export function UserMenu({ userData }: { userData: UserDataProps }) {
  const router = useRouter();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar>
          <AvatarImage
            src=""
            alt={userData?.payload?.name ? userData.payload?.name : ""}
          />
          <AvatarFallback>ZE</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel className="capitalize">
          {userData?.payload?.name ? userData.payload?.name : "My account"}
        </DropdownMenuLabel>
        <DropdownMenuSeparator />
        {(!userData || userData?.error) && (
          <>
            <Link passHref href="/sign-in" className="w-full">
              <DropdownMenuItem>
                <span>login</span>
                <Icon name="log-in" size={22} />
              </DropdownMenuItem>
            </Link>
            <Link passHref href="/sign-up" className="w-full">
              <DropdownMenuItem>
                <span>create account</span>
                <Icon name="user-round-plus" size={22} />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        {userData?.error !== undefined && !userData.error && (
          <>
            <Link passHref href="/user/profile" className="w-full">
              <DropdownMenuItem>
                <span>profile</span>
                <Icon size={22} name="user" />
              </DropdownMenuItem>
            </Link>
            <Link passHref href="/user/orders" className="w-full">
              <DropdownMenuItem>
                <span>orders</span>
                <Icon size={22} name="package" />
              </DropdownMenuItem>
            </Link>
          </>
        )}
        {userData?.payload?.role === "admin" && (
          <Link href="/dashboard" passHref>
            <DropdownMenuItem>
              <span>dashboard</span>
              <Icon size={22} name="layout-dashboard" />
            </DropdownMenuItem>
          </Link>
        )}
        {userData?.error === undefined ||
          (!userData?.error && (
            <>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => {
                  //   logout();
                  router.refresh();
                }}
              >
                <span>logout</span>
                <Icon name="log-out" size={22} />
              </DropdownMenuItem>
            </>
          ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
