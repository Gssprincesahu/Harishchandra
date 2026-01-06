import { BookOpen } from "lucide-react";
import publications from "./PublicationData";
import { motion } from 'framer-motion';

function Publications() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div 
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6"
          >
            <BookOpen className="w-10 h-10 text-white" />
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-5xl font-bold text-gray-900 mb-2"
          >
            Publications
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-gray-600"
          >
            Dr. Harish Chandra, Assistant Professor
          </motion.p>
        </motion.div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              whileHover={{ y: -10, boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)' }}
              className="bg-linear-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6"
            >
              <h2 className="text-lg font-bold text-gray-900 mb-2">
                {pub.title}
              </h2>

              <p className="text-sm text-gray-700 mb-3">
                <span className="font-semibold">Authors:</span> {pub.authors}
              </p>

              {pub.article && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Article:</span> {pub.article}
                </p>
              )}

              {pub.Conferencepaper && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Conference Paper:</span>{" "}
                  {pub.Conferencepaper}
                </p>
              )}

              {pub.journalarticle && (
                <p className="text-sm text-gray-700 mb-1">
                  <span className="font-semibold">Journal Article:</span>{" "}
                  {pub.journalarticle}
                </p>
              )}

              {pub.link && (
                <a
                  href={pub.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-green-600 font-semibold hover:underline"
                >
                  View Publication →
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
