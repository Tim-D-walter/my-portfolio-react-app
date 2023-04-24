import Image from 'next/image'
import {Inter} from 'next/font/google'

import {motion} from "framer-motion";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    return (
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{
                type: "spring",
                stiffness: 260,
                damping: 40
            }}
        >
        <main
            className={`flex min-h-screen flex-col items-center justify-between p-24 wrapper-container ${inter.className}`}
        >
            {/*<div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">*/}
            {/*    <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">*/}
            {/*        About me &nbsp;*/}
            {/*        <code className="font-mono font-bold"></code>*/}
            {/*    </p>*/}
            {/*    <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">*/}
            {/*        <a*/}
            {/*            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"*/}
            {/*            href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template-tw&utm_campaign=create-next-app"*/}
            {/*            target="_blank"*/}
            {/*            rel="noopener noreferrer"*/}
            {/*        >*/}
            {/*            By{' '}*/}
            {/*            <Image*/}
            {/*                src="/TimTechSolutionsNew.png"*/}
            {/*                alt="TimTech Solutions"*/}
            {/*                width={150}*/}
            {/*                height={24}*/}
            {/*                priority*/}
            {/*            />*/}
            {/*        </a>*/}
            {/*    </div>*/}
            {/*</div>*/}

            <div className="relative flex place-items-center before:absolute before:h-[300px] before:w-[480px] 
            before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent 
            before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] 
            after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl 
            after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 
            after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px]">
                <Image
                    className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] rounded-full"
                    src="/TDW-LOGO.png"
                    alt="Tim Daniel Walter"
                    width={300}
                    height={200}
                    priority
                />

            </div>
            <p>Hello friend - Nice seeing you here :)</p>

            <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
                <a
                    href="https://www.linkedin.com/in/tim-d-walter/"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer">
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Linkedin{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about me on Linkedin.
                    </p>
                </a>

                <a
                    href="https://www.xing.com/profile/Tim_Walter96/cv"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Xing{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Find in-depth information about me on Xing.
                    </p>
                </a>

                <a
                    href="https://github.com/Tim-D-walter"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Github{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Discover my source code for my public projects. &nbsp;
                    </p>
                </a>

                <a
                    href="mailto:abc@example.com"
                    className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-cyan-300"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <h2 className={`mb-3 text-2xl font-semibold`}>
                        Contact{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              -&gt;
            </span>
                    </h2>
                    <p className={`m-0 max-w-[30ch] text-sm opacity-50`}>
                        Contact me via email
                    </p>
                </a>
            </div>
        </main>
        </motion.div>
    )
}
