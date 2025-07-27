import React from 'react';

const Announcements = () => {
  const announcements = [
    { id: 1, title: "New TestGem Event ", date: "July 28, 2025", detail: "Get ready for the upcoming TestGem challenge. Prizes await!" },
    { id: 2, title: "PrizeQuiz Announced ", date: "August 2, 2025", detail: "Participate to win exciting rewards. Register before July 30!" },
    { id: 3, title: "Updated Date Sheet ", date: "August 5, 2025", detail: "Final exam schedule is out now. Check the dashboard." },
  ];

  return (
    <div className="bg-white p-6 rounded-2xl shadow-xl max-w-4xl mx-auto mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-4"> Announcements</h2>
      <ul className="space-y-4">
        {announcements.map((item) => (
          <li key={item.id} className="p-4 bg-gray-50 border-l-4 border-blue-500 rounded-md shadow-sm hover:bg-blue-50 transition">
            <h3 className="text-lg font-semibold text-gray-700">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
            <p className="text-gray-600 mt-1">{item.detail}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Announcements;
