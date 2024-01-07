import { SignOutButton, UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <>
      <h1> Protected route </h1>
      <div className="flex items-center justify-between p-4">
        <UserButton afterSignOutUrl="/" />
        <SignOutButton />
      </div>
    </>
  );
}
