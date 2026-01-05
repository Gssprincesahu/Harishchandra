import {
  Award,
  BriefcaseBusiness,
  BookOpen,
  UserRound,
} from "lucide-react";

function WorkExperience() {
  const work = [
    {
      year: "2007-2008",
      title: "Contractual Faculty",
      institution: "Lucknow University",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2008-2011",
      title: "Guest Faculty Under UGC Norms",
      institution: "Lucknow University",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2012-2014",
      title: "Senior Research Fellow",
      institution: "BBD University, Lucknow",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
    {
      year: "2015-Present",
      title: "Assistant Professor, Dept. of Mathematics and Scientific Computing",
      institution: "MMMUT, Gorakhpur",
      icon: <BookOpen className="w-6 h-6 text-white" />,
    },
  ];

  const experience = [
    {
      year: "2015-2017",
      title: "Officer In Charge, Lawn Tennis",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2015",
      title: "Member, Library Affairs Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2015-2021",
      title: "Dy. O/C Timetable",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2016",
      title: "Assistant Centre Superintendent Exams",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "O/C Guest House",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "Joint Controller of Examination",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2018",
      title: "Member, Steering Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2018",
      title: "Warden, Tilak Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2020",
      title: "Member, Cultural Society",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2020",
      title: "Warden, Sarojini Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017-2021",
      title: "Member, Women’s Grievance Redressal Cell",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2017",
      title: "Member, ITRC Management Committee",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C Horticulture",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "Member Secretary, Campus Development Cell (CDC)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C, Cultural Sub Council (Council of Student Activities)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "O/C Badminton (Council of Student Activities)",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2020",
      title: "Warden, Tagore Hostel",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
    {
      year: "2021",
      title: "Member, EDP Cell",
      institution: "MMMUT, Gorakhpur",
      icon: <UserRound className="w-6 h-6 text-white" />,
    },
  ];


  
  
  return (
    <div className="min-h-screen mb-16">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-green-600 rounded-full mb-6">
            <BriefcaseBusiness className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-2">
            Work & Experiences
          </h1>
          <p className="text-gray-600">
            Dr. Harish Chandra, Assistant Professor
          </p>
        </div>

        {/* Professional Positions */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">
            Professional Positions
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {work.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-300"
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

        {/* Administrative Experiences */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-8">Administrative Experiences</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {experience.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-gray-300"
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

        
      </div>
    </div>
  );
}

export default WorkExperience;
