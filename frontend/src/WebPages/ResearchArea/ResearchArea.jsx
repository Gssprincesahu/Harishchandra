import {
  Award,
  Trophy,
  BookOpen,
  GraduationCap,
  Star,
  Medal,
} from "lucide-react";

export default function ResearchArea() {
  const researchProject = {
    title: "Study of Derived Length and Nilpotency Class of Group Algebras",
    funding: "DST (SERB) New Delhi",
    period: "2017-2020",
    amount: "Rs. 5.45 Lac",
  };

  return (
    <>
      <div className="min-h-screen mb-16">
        <div className="max-w-7xl mx-auto px-4 py-12">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
              <Award className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-2">
              Research Area
            </h1>
            <p className="text-gray-600">
              Dr. Harish Chandra, Assistant Professor
            </p>
          </div>
          {/* Research Grant */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8">Research Grant</h2>
            <div className="bg-white rounded-xl p-8 shadow-md border border-gray-300">
              <h3 className="text-xl font-bold mb-2">
                {researchProject.title}
              </h3>
              <p className="text-gray-700">
                <b>Period:</b> {researchProject.period}
              </p>
              <p className="text-gray-700">
                <b>Funding:</b> {researchProject.funding}
              </p>
              <p className="text-gray-700">
                <b>Amount:</b> {researchProject.amount}
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
