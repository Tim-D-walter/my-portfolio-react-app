import { Inter } from "next/font/google";

import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <motion.div
      initial={{ x: 300, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      exit={{ x: 300, opacity: 0 }}
      transition={{
        type: "spring",
        stiffness: 230,
        damping: 30,
      }}
    >
      <main className={`wrapper-container ${inter.className}`}>
        <div className="about-container">
            <h1> Skills & Technologies</h1>
          <div className="m-2 grid grid-cols-12 gap-2">
            <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-white-100">
              <div className="Row">
                <ul>
                  <li>macOS</li>
                  <li>Windows 7, 8, and 10</li>
                  <li>Raspbian Stretch</li>
                  <li>Ubuntu</li>
                  <li>Java</li>
                  <li>JavaScript (including TypeScript)</li>
                  <li>C++, C</li>
                  <li>Python</li>
                  <li>MicroPython</li>
                  <li>IntelliJ IDEA Ultimate &amp; Community</li>
                  <li>Android Studio</li>
                  <li>MATLAB / Simulink</li>
                  <li>Arduino IDE</li>
                  <li>Eclipse</li>
                  <li>Qt</li>
                  <li>Microsoft Visual Studio CE 2017/18</li>
                  <li>LabVIEW</li>
                  <li>XCode</li>
                  <li>LOGO!</li>
                  <li>ATOM</li>
                  <li>JavaScript (including TypeScript)</li>
                  <li>MySQL</li>
                  <li>MariaDB</li>
                  <li>AzureSQL</li>
                  <li>StarUML</li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-white-100">
              <div className="Row">
                <ul>
                  <li>Monolithic Systems</li>
                  <li>Cloud Systems</li>
                  <li>Client-Server</li>
                  <li>P2P - IDSC</li>
                  <li>M2M - OPCUA</li>
                  <li>Azure</li>
                  <li>Openshift</li>
                  <li>Kubernetes</li>
                  <li>Keycloak</li>
                  <li>Java Spring Boot</li>
                  <li>Jenkins</li>
                  <li>Angular</li>
                  <li>Helm-Charts</li>
                  <li>HTML5</li>
                  <li>CSS</li>
                  <li>XHTML</li>
                  <li>AJAX</li>
                  <li>JSON</li>
                  <li>REST</li>
                  <li>JDBC</li>
                  <li>JSF</li>
                  <li>Apache Shiro</li>
                  <li>Eclipse Milo</li>
                  <li>Maven</li>
                  <li>Gradle</li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-white-100">
              <div className="Row">
                <ul>
                  <li>Spring Security</li>
                  <li>JavaServer Faces</li>
                  <li>Primefaces</li>
                  <li>Swagger</li>
                  <li>Confluence</li>
                  <li>VM Ware-Player 8</li>
                  <li>MySQL Workbench</li>
                  <li>Docker</li>
                  <li>Sequel Pro</li>
                  <li>GitLab</li>
                  <li>Gitbucket</li>
                  <li>Scrum</li>
                  <li>Kanban</li>
                </ul>
              </div>
            </div>
            <div className="col-span-6 md:col-span-4 lg:col-span-3 aspect-video w-full bg-white-100">
              <div className="Row">
                <ul>
                  <li>Tekton</li>
                  <li>ArgoCD</li>
                  <li>Openshift Pipelines</li>
                  <li>AzureDevOps</li>
                  <li>NextJS</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </motion.div>
  );
}
