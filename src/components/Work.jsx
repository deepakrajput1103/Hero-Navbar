"use client";

export default function Work() {
  const projects = [
    {
      id: 1,
      title: "Creative Branding",
      img: "https://images.unsplash.com/photo-1506765515384-028b60a970df",
    },
    {
      id: 2,
      title: "UI/UX Design",
      img: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f",
    },
    {
      id: 3,
      title: "App Development",
      img: "https://images.unsplash.com/photo-1481277542470-605612bd2d61",
    },
  ];

  return (
    <section id="work" className="py-20 bg-gray-50">
      <h2 className="text-5xl font-extrabold text-center mb-14 text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">
        Our Work
      </h2>
      <div className="grid md:grid-cols-3 gap-10 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl hover:scale-105 transform transition duration-500"
          >
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-72 object-cover"
            />
            <div className="p-6 bg-white">
              <h3 className="text-2xl font-semibold text-gray-800">{project.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
