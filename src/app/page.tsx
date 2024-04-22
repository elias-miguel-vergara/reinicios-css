import { HeadingMain } from "@/components/heading/HeadingMain";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <text className="text-3xl font-bold underline">Hello world!</text>
      <HeadingMain />
    </main>
  );
}
