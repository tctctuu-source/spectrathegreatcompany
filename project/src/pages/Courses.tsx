import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BookOpen, Clock, Users, Star, Award, Video } from "lucide-react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Web Development Bootcamp",
      category: "Programming",
      instructor: "Ibrahim Khaleel",
      rating: 4.8,
      students: 2500,
      duration: "12 weeks",
      level: "Beginner",
      price: "₹4,999",
      image: "https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Master web development from scratch with HTML, CSS, JavaScript, React, and Node.js",
      features: ["50+ Hours Video", "Live Sessions", "Projects", "Certificate"]
    },
    {
      id: 2,
      title: "Digital Marketing Masterclass",
      category: "Marketing",
      instructor: "Mohammed Ashfaque",
      rating: 4.9,
      students: 3200,
      duration: "8 weeks",
      level: "Intermediate",
      price: "₹3,999",
      image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Learn SEO, Social Media Marketing, Content Strategy, and Analytics",
      features: ["40+ Hours Video", "Case Studies", "Tools Access", "Certificate"]
    },
    {
      id: 3,
      title: "UI/UX Design Complete Course",
      category: "Design",
      instructor: "Mohammed Ashiq",
      rating: 4.7,
      students: 1800,
      duration: "10 weeks",
      level: "Beginner",
      price: "₹5,499",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Create stunning user interfaces and experiences with Figma and modern design principles",
      features: ["45+ Hours Video", "Design Projects", "Portfolio", "Certificate"]
    },
    {
      id: 4,
      title: "Data Science & Analytics",
      category: "Data Science",
      instructor: "Ibrahim Khaleel",
      rating: 4.9,
      students: 2100,
      duration: "14 weeks",
      level: "Advanced",
      price: "₹6,999",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Master Python, Machine Learning, Data Visualization and Statistical Analysis",
      features: ["60+ Hours Video", "Real Projects", "Job Support", "Certificate"]
    },
    {
      id: 5,
      title: "Mobile App Development",
      category: "Programming",
      instructor: "Mohammed Ashiq",
      rating: 4.8,
      students: 1600,
      duration: "12 weeks",
      level: "Intermediate",
      price: "₹5,999",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Build cross-platform mobile apps with React Native and Flutter",
      features: ["55+ Hours Video", "5 Apps Built", "Play Store Guide", "Certificate"]
    },
    {
      id: 6,
      title: "Business Management",
      category: "Business",
      instructor: "Mohammed Ashfaque",
      rating: 4.6,
      students: 2800,
      duration: "6 weeks",
      level: "Beginner",
      price: "₹3,499",
      image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
      description: "Learn essential business skills, leadership, and strategic management",
      features: ["35+ Hours Video", "Case Studies", "MBA Insights", "Certificate"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <section className="py-20 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Explore Our <span className="text-purple-600">Courses</span>
            </h1>
            <p className="text-xl text-gray-600">
              Learn from industry experts and advance your career with our comprehensive courses
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map((course) => (
              <Card
                key={course.id}
                className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {course.level}
                  </div>
                </div>

                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-purple-600 font-semibold">{course.category}</span>
                    <span className="text-lg font-bold text-gray-900">{course.price}</span>
                  </div>
                  <CardTitle className="text-xl mb-2 group-hover:text-purple-600 transition-colors">
                    {course.title}
                  </CardTitle>
                  <p className="text-sm text-gray-600 mb-4">{course.description}</p>

                  <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                      <span className="font-semibold">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{course.students}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-purple-600">
                        {course.instructor.charAt(0)}
                      </span>
                    </div>
                    <span className="text-sm text-gray-600">{course.instructor}</span>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-2 gap-2 mb-4">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center gap-2 text-sm text-gray-600">
                        <Award className="w-4 h-4 text-purple-600" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Button
                    className="w-full bg-purple-600 hover:bg-purple-700 text-white"
                    onClick={() => window.open('https://wa.me/917619396441', '_blank')}
                  >
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6">Why Choose Our Courses?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Video className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Expert Instructors</h3>
                <p className="text-gray-600">Learn from industry professionals with years of experience</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Practical Projects</h3>
                <p className="text-gray-600">Build real-world projects to enhance your portfolio</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Certification</h3>
                <p className="text-gray-600">Get industry-recognized certificates upon completion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Courses;
