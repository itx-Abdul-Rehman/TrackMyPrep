import { Lightbulb, BookOpenCheck, BarChart2, Users } from "lucide-react";

const PRIMARY_COLOR = "#3B82F6";

const WhyTechMyPrep = () => {
  const features = [
    {
      icon: <Lightbulb size={40} color={PRIMARY_COLOR} />,
      title: "Smart Paper Generation",
      desc: "Create topic‑wise papers instantly and save time while preparing for exams.",
    },
    {
      icon: <BookOpenCheck size={40} color={PRIMARY_COLOR} />,
      title: "Mock Exams",
      desc: "Practice with unlimited mock exams and track your improvement over time.",
    },
    {
      icon: <BarChart2 size={40} color={PRIMARY_COLOR} />,
      title: "Auto Progress Analyzer",
      desc: "Get detailed reports on your strong and weak chapters to focus your learning.",
    },
    {
      icon: <Users size={40} color={PRIMARY_COLOR} />,
      title: "User Dashboard",
      desc: "Track performance and progress through an easy‑to‑use dashboard.",
    },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      {/* Heading */}
      <h2
        className="text-3xl md:text-4xl font-extrabold text-center mb-12"
        style={{ color: PRIMARY_COLOR }}
      >
        Why TrackMyPrep?
      </h2>

      {/* Features Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {features.map((f, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center bg-white rounded-2xl p-6 shadow hover:shadow-xl transition-shadow cursor-pointer"
          >
            <div
              className="mb-4 transform hover:scale-110 transition-transform"
              style={{ color: PRIMARY_COLOR }}
            >
              {f.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{f.title}</h3>
            <p className="text-gray-600">{f.desc}</p>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 flex justify-center">
        <button
          className="px-6 py-3 text-white rounded-xl font-semibold transition-colors hover:cursor-pointer"
          style={{ backgroundColor: PRIMARY_COLOR }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#2563EB")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = PRIMARY_COLOR)}
        >
          Get Started Today
        </button>
      </div>
    </div>
  );
};

export default WhyTechMyPrep;
