import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";

export default function Home() {
	return (
		<>
			{/* Left side */}
			<section className="flex-1 max-w-md h-full p-6">
				<div className="flex items-center justify-center h-full bg-neutral-300">
					Left side
				</div>
			</section>
			{/* Right side */}
			<section className="flex-1 h-full p-6">
				<div className="flex items-center justify-center h-full bg-neutral-300">
					Left side
				</div>
			</section>
		</>
	);
}
