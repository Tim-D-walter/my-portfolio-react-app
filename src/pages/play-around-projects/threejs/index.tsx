import {motion} from "framer-motion";
import Image from "next/image";
import {Inter} from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40,
            }}
        >
            <main className={`wrapper-container ${inter.className}`}>
                <div className="about-container">
                    <div
                        className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px]
            before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent
            before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px]
            after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl
            after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10
            after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]"
                    >
                        <Image
                            className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
                            src="/NoPic.png"
                            alt="This will show a threeJs project when I am finished"
                            width={300}
                            height={200}
                            priority
                        />
                    </div>
                    <p>**This will show a threeJs project when I am finished**</p>

                </div>
            </main>
        </motion.div>
    );
}