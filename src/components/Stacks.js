import Image from "next/image";
import Link from "next/link";

export function Stacks({stacks}) {
    return Object.keys(stacks).map((stackKey) => {
        const stack = stacks[stackKey];
        return (
            <Link
                key={stack.href}
                href={stack.href}
                className={`${stack.hoverClass} w-20 h-20 relative border-2 border-solid m-2 ronded-xl`}
            >
                <Image
                    src={stack.logo}
                    className="object-cover p-2"
                    fill
                    alt=""
                />
            </Link>
        )
    })
}