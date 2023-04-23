import Image from "next/image";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import Link from "next/link";

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
      <main
        className={`flex flex-col items-center justify-between wrapper-container ${inter.className}`}
      >
        <div className="about-container">
          <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
            <ul className="honeycomb wrapper-container" lang="es">
              <Link href="/play-around-projects/threejs" className={"flex-auto"}/>
              <li className="honeycomb-cell">
                <Image
                  className="honeycomb-cell__image"
                  src="/Darth_Vader.png"
                  width={500}
                  height={500}
                  alt="ThreeJs Play-around"
                />
                <div className="honeycomb-cell__title">ThreeJs Play-around</div>
              </li>

              <li className="honeycomb-cell flex-auto">
                <Image
                  className="honeycomb-cell__image"
                  src="/SH-Beach.png"
                  width={500}
                  height={500}
                  alt="SH-Beach"
                />
                <div className="honeycomb-cell__title flex-auto">SH-Beach</div>
              </li>

              <a href="https://example.com/LH-Leap" className={"flex-auto"}>
              <li className="honeycomb-cell">
                <Image
                  className="honeycomb-cell__image"
                  src="/Digital_Aristoteles.png"
                  width={500}
                  height={500}
                  alt="Digital Aristoteles"
                />
                <div className="honeycomb-cell__title">Digital Aristoteles</div>
              </li>
              </a>
              <a href="https://example.com/LH-Leap" className={"flex-auto"}>
              <li className="honeycomb-cell">

                <Image
                  className="honeycomb-cell__image"
                  src="/Lh-leap.png"
                  width={500}
                  height={500}
                  alt="LH-Leap"
                />

                <div className="honeycomb-cell__title">LH-Leap</div>

              </li>
              </a>
              <li className="honeycomb-cell">
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="Polygon Pipeline"
                />
                <div className="honeycomb-cell__title">
                  In Progress...<small>Coming up soon...</small>
                </div>
              </li>
              <li className="honeycomb-cell">
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                />
                <div className="honeycomb-cell__title">
                  In Progress...<small>Wait for it...</small>
                </div>
              </li>
              <li className="honeycomb-cell">
                <Image
                  className="honeycomb-cell__image"
                  src="/Not_Found.png"
                  width={500}
                  height={500}
                  alt="In Progress"
                />
                <div className="honeycomb-cell__title">
                  In Progress...<small>Just a second...</small>
                </div>
              </li>
              <li className="honeycomb-cell honeycomb__placeholder"></li>
            </ul>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
