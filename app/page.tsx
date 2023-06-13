import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className="font-bold text-4xl mb-12">Main Page</h1>
      <p>
        <Link href="/products">Products</Link>
      </p>
    </main>
  );
}
