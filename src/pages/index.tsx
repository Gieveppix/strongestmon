import { type NextPage } from "next";
// import Head from "next/head";
// import { signIn, signOut, useSession } from "next-auth/react";
import { trpc } from "../utils/trpc";

const Home: NextPage = () => {
  return (
      <div className="h-screen w-screen flex flex-col justify-center items-center">
      <div className="text-2xl text-center">Which Pokémon is Stronger?</div>
      <div className="p-2" />
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-16 h-16 bg-red-400" />
        <div className="p-8">Vs</div>
        <div className="w-16 h-16 bg-red-400" />
      </div>
    </div>
  );
};

export default Home;

// const AuthShowcase: React.FC = () => {
//   const { data: sessionData } = useSession();

//   const { data: secretMessage } = trpc.auth.getSecretMessage.useQuery(
//     undefined, // no input
//     { enabled: sessionData?.user !== undefined },
//   );
//   return (
//     <div className="flex flex-col items-center justify-center gap-4">
//       <p className="text-center text-2xl text-white">
//         {sessionData && <span>Logged in as {sessionData.user?.name}</span>}
//         {secretMessage && <span> - {secretMessage}</span>}
//       </p>
//       <button
//         className="rounded-full bg-white/10 px-10 py-3 font-semibold text-white no-underline transition hover:bg-white/20"
//         onClick={sessionData ? () => signOut() : () => signIn()}
//       >
//         {sessionData ? "Sign out" : "Sign in"}
//       </button>
//     </div>
//   );
// };
