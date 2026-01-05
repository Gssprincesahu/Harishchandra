import { BookOpen } from "lucide-react";
import publications from "./PublicationData";

function Publications() {
  return (
    <div className="min-h-screen px-4 py-12 bg-gray-50 mb-16">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Publications
          </h1>
          <p className="text-gray-600">
            Dr. Harish Chandra, Assistant Professor
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {publications.map((pub, index) => (
            <div
              key={index}
              className="bg-linear-to-br from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300"
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
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Publications;
