import { Card, CardContent } from "@/components/ui/card";
import { Award, Users } from "lucide-react";

const ExpertTeachers = () => {
  const teachers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      specialization: "Web Development",
      experience: "12+ Years",
      students: "3000+",
      image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Expert in full-stack development with passion for teaching modern web technologies.",
      rating: 4.9
    },
    {
      id: 2,
      name: "Prof. Anjali Singh",
      specialization: "Data Science",
      experience: "10+ Years",
      students: "2500+",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Data scientist and educator dedicated to making AI accessible to everyone.",
      rating: 4.8
    },
    {
      id: 3,
      name: "Mark Thompson",
      specialization: "Digital Marketing",
      experience: "15+ Years",
      students: "4000+",
      image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Marketing strategist with proven track record of successful campaigns.",
      rating: 4.9
    },
    {
      id: 4,
      name: "Emily Rodriguez",
      specialization: "Design & UI/UX",
      experience: "9+ Years",
      students: "2000+",
      image: "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Creative designer passionate about creating beautiful user experiences.",
      rating: 4.8
    },
    {
      id: 5,
      name: "David Park",
      specialization: "Business & Finance",
      experience: "18+ Years",
      students: "3500+",
      image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Business consultant with expertise in financial planning and strategy.",
      rating: 4.9
    },
    {
      id: 6,
      name: "Sarah Chen",
      specialization: "Programming Fundamentals",
      experience: "11+ Years",
      students: "2800+",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400",
      bio: "Coding enthusiast committed to making programming easy for beginners.",
      rating: 4.7
    }
  ];

  return (
    <section className="py-12 md:py-20 bg-gradient-to-br from-white via-purple-50 to-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4 leading-snug">
            Meet Our Expert
            <br />
            Teachers
          </h2>
          <p className="text-sm md:text-base text-gray-600 max-w-3xl mx-auto leading-relaxed px-2">
            Learn from highly experienced and passionate educators who are committed to your success.
            Our expert teachers bring real-world knowledge and industry expertise to every class.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {teachers.map((teacher) => (
            <Card
              key={teacher.id}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden rounded-xl md:rounded-2xl h-full flex flex-col"
            >
              <div className="relative overflow-hidden h-48 sm:h-56 bg-gradient-to-br from-purple-200 to-blue-200">
                <img
                  src={teacher.image}
                  alt={teacher.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>

              <CardContent className="p-4 md:p-6 flex-1 flex flex-col justify-between">
                <div className="space-y-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-1">{teacher.name}</h3>
                    <p className="text-sm md:text-base text-purple-600 font-medium">{teacher.specialization}</p>
                  </div>

                  <div className="flex items-center gap-4 text-xs md:text-sm pt-2">
                    <div className="flex items-center gap-1">
                      <Award className="w-4 h-4 text-yellow-500" />
                      <span className="text-gray-600">{teacher.experience}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4 text-blue-500" />
                      <span className="text-gray-600">{teacher.students}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold text-gray-800">{teacher.rating}</span>
                  </div>

                  <p className="text-xs md:text-sm text-gray-600 leading-relaxed pt-2">{teacher.bio}</p>
                </div>

                <button className="mt-4 w-full bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white py-2 rounded-lg text-sm font-medium transition-all duration-300 transform group-hover:scale-105">
                  Learn More
                </button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12 md:mt-16">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-10 py-3 md:py-4 rounded-lg text-sm md:text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl w-full sm:w-auto">
            Explore All Teachers
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertTeachers;
