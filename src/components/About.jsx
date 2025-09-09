"use client";

export default function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-r from-gray-100 to-gray-200 flex flex-col md:flex-row items-center gap-12 px-8">
      <div className="md:w-1/2 group">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="About us"
          className="rounded-2xl shadow-lg transform group-hover:scale-105 group-hover:rotate-1 transition duration-500"
        />
      </div>
      <div className="md:w-1/2">
        <h2 className="text-5xl font-extrabold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-500">
          About Us
        </h2>
        <p className="text-gray-700 mb-4 leading-relaxed">
          We are a creative digital studio passionate about transforming ideas into engaging user experiences. 
          Our team specializes in design, development, and strategy to help brands thrive in the digital era.
        </p>
        <p className="text-gray-700 leading-relaxed">
          With a focus on innovation and collaboration, we craft meaningful digital products tailored to your unique business goals.
        </p>
      </div>
    </section>
  );
}
