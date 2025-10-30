import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import mock01 from "../assets/images/mock01.png";
import mock02 from "../assets/images/mock02.png";
import mock03 from "../assets/images/mock03.png";

const projects = [
  {
    title: "GhumoFiro",
    description:
      "A travel itinerary platform integrating SerpAI for real-time flights, attractions, and personalized AI-based trip planning.",
    image: mock01,
    link: "https://github.com/Sambhav-3010",
    color: "from-blue-500/10 to-indigo-500/10",
  },
  {
    title: "PropChain",
    description:
      "A decentralized land registry dApp with blockchain-based ownership verification, built using Next.js and Web3 smart contracts.",
    image: mock02,
    link: "https://github.com/Sambhav-3010",
    color: "from-cyan-500/10 to-green-500/10",
  },
  {
    title: "Rythmo",
    description:
      "A Spotify-inspired full-stack music platform with artist dashboards, analytics, and real-time playback functionality.",
    image: mock03,
    link: "https://github.com/Sambhav-3010",
    color: "from-purple-500/10 to-pink-500/10",
  },
];

export default function Project({ mode }: { mode: string }) {
  return (
    <section
      id="profile"
      className={`relative py-24 w-full overflow-hidden transition-colors duration-500 ${
        mode === "dark"
          ? "bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950 text-white"
          : "bg-gradient-to-b from-gray-50 via-white to-gray-50 text-gray-900"
      }`}
    >
      {/* Subtle gradient background overlays */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,rgba(59,130,246,0.08),transparent_60%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(236,72,153,0.08),transparent_60%)]"></div>

      <div className="container mx-auto px-6 md:px-10 lg:px-20 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl font-extrabold text-center mb-16 tracking-tight"
        >
          Personal Projects
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <Card
                className={`group relative overflow-hidden border-none shadow-xl rounded-2xl p-6 transition-all duration-300 hover:shadow-2xl ${
                  mode === "dark"
                    ? "bg-gray-900 hover:bg-gray-800 text-white"
                    : "bg-white hover:bg-gray-100"
                }`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-700`}
                ></div>

                <CardHeader className="p-0 mb-5">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="block overflow-hidden rounded-lg"
                  >
                    <motion.img
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.4 }}
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover rounded-lg shadow-md"
                    />
                  </a>
                </CardHeader>

                <CardContent className="text-center relative z-10">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-block mb-3"
                  >
                    <CardTitle
                      className={`text-xl font-bold transition-colors duration-300 hover:text-blue-500 ${
                        mode === "dark" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {project.title}
                    </CardTitle>
                  </a>
                  <p
                    className={`text-base leading-relaxed ${
                      mode === "dark" ? "text-gray-300" : "text-gray-700"
                    }`}
                  >
                    {project.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
