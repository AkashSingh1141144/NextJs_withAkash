import Image from "next/image";

export default function About() {
	return (
		<>
			<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
				  <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
					<Image
					  className="dark:invert"
					  src="/next.svg"
					  alt="Next.js logo"
					  width={180}
					  height={38}
					  priority
					/>
					<h1 className="text-9xl font-bold text-center">Madhuri Singh | Akash Singh</h1>
					<p className="text-2xl text-center bg-amber-700 p-2">About Page</p>
				  </main>
				</div>
		</>
	)
}