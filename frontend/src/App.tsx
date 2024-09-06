import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";

export default function App() {
  return (
    <header className=" justify-center flex item-center text-center">
      <h1 className="">Insurgence</h1>
      <p>Insurgence is a web-based game that is currently in development.</p>
      <p>It is a fan-made project and is not affiliated with Nintendo.</p>
      <p>For more information, please visit the <a href='/'>Insurgence website</a>.</p>
      <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </header>
  );
}


   