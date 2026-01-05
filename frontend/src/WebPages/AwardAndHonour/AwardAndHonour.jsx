import {
  Award,
  Trophy,
  BookOpen,
  GraduationCap,
  Star,
  Medal,
} from "lucide-react";

function AwardAndHonour() {
  const scholarships = [
    {
      year: "2006-07",
      title: "RBS M Mate Fellow",
      institution: "Lucknow University",
      icon: <GraduationCap className="w-6 h-6 text-white" />,
    },
    {
      year: "2008-2010",
      title: "Junior Research Fellow",
      institution: "University Grant Commission (UGC), India",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2010-2012",
      title: "Senior Research Fellow",
      institution: "University Grant Commission (UGC), India",
      icon: <Medal className="w-6 h-6 text-white" />,
    },
  ];

  const qualifications = [
    {
      year: "2007",
      title: "NET (JRF) - Mathematics",
      institution: "University Grant Commission, India",
      icon: <Star className="w-6 h-6 text-white" />,
    },
  ];

  const moocCertificates = [
    {
      year: "2019",
      title: "Introduction to Abstract and Linear Algebra",
      description: "8-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      year: "2019",
      title: "Modern Algebra",
      description: "8-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "Mathematical Methods and its Application",
      description:
        "12-week AICTE approved online course with Elite Certificate",
      platform: "SWAYAM",
      icon: <Trophy className="w-6 h-6 text-white" />,
    },
  ];



  return (
    <div className="min-h-screen mb-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <Award className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Awards & Honours
          </h1>
          <p className="text-gray-600">
            Dr. Harish Chandra, Assistant Professor
          </p>
        </div>

        {/* Scholarships */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Scholarships & Fellowships
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {scholarships.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-300"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Qualifications */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Qualifications</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {qualifications.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-300"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.institution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>



        {/* MOOC */}
        <section>
          <h2 className="text-3xl font-bold mb-8">
            MOOC / AICTE Certifications
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {moocCertificates.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 border border-gray-300"
              >
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center">
                    {item.icon}
                  </div>
                  <div>
                    <div className="text-sm text-gray-500">{item.year}</div>
                    <h3 className="font-bold text-gray-900">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.description}</p>
                    <span className="text-xs text-gray-500">
                      {item.platform}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

export default AwardAndHonour;
