"use client"
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

const offerings = [
  {
    title: "Full Stack Application",
    img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVUMNKPDhzSHxiL9yCeg8GzwAQT61PyqVnhtdwlquUZ9eSFdNF0SxWZlTMzQIQjOT_O78&usqp=CAU",
    description:
      "I build complete end-to-end web applications with seamless frontend, backend, and database integration. Using modern technologies like React, Next.js, Node.js, Express, and MongoDB, I deliver fast, scalable, and secure digital solutions crafted for real business needs.",
  },
  {
    title: "Backend or Frontend",
    img: "https://i.ytimg.com/vi/v0t42xBIYIs/maxresdefault.jpg",
    description:
      "Whether it's a beautiful and responsive UI or a secure, high-performance backend system, I ensure each layer is crafted with precision. From React/Next.js interfaces to Express/Node.js APIs and databases — everything works in harmony.",
  },
  {
    title: "UI/UX Design",
    img: "https://bif.telkomuniversity.ac.id/wp-content/uploads/2024/09/Mengapa-UI-UX-Design-Sangat-Penting-dalam-Pengembangan-Aplikasi.png",
    description:
      "I create clean, intuitive, user‑focused designs that feel effortless to navigate. From wireframes to prototypes, every layout is crafted to deliver smooth and meaningful digital experiences using Figma and Adobe XD.",
  },
];

export default function Offering() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-20 px-4">
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center text-center gap-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-4 max-w-3xl"
        >
          <h2 className="text-4xl font-bold tracking-tight uppercase text-gray-900">
            My Offerings to Clients
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            When browsing online, you'll find many service options — but not all deliver the
            same value. I focus on providing high-quality, custom solutions crafted with
            care, creativity, and clear communication. Every project is built to match your
            goals and deliver real, measurable results.
          </p>
        </motion.div>

        {/* Offering Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 mt-6">
          {offerings.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            >
              <Card className="rounded-2xl shadow-sm hover:shadow-lg transition-all bg-white overflow-hidden border">
                <CardContent className="p-6 flex flex-col gap-4 text-left">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-48 object-cover rounded-lg shadow-sm"
                  />
                  <h3 className="text-xl font-semibold uppercase tracking-wide text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
