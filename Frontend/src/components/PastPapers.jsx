const PastPapers = () => {
  const papers = [
    { title: "8th Class Papers" },
    { title: "9th Class Papers" },
    { title: "10th Class Papers" },
    { title: "11th Class Papers" },
    { title: "12th Class Papers" },
    { title: "MDCAT Papers" },
    { title: "ECAT Papers" },
    { title: "NTS Papers" },
  ];

  return (
    <div className="w-full bg-gray-50 py-16 px-6">
      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-extrabold text-center text-[#3B82F6] mb-12">
        Past Papers
      </h2>

      {/* Grid */}
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-w-6xl mx-auto">
        {papers.map((paper, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow hover:shadow-xl transition-shadow cursor-pointer text-center font-medium text-lg border border-gray-100 hover:scale-105 transform"
          >
            {paper.title}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PastPapers;
