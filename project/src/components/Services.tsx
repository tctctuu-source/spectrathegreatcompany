import { Card, CardContent } from "@/components/ui/card";
import { Palette, Users, Code, Briefcase, DollarSign, FileText, Music, PenTool } from "lucide-react";

const categories = [
  {
    icon: Palette,
    title: "Design",
    courses: "400+ Course",
    color: "from-orange-100 to-orange-50",
    iconColor: "text-orange-500"
  },
  {
    icon: Users,
    title: "Management",
    courses: "400+ Course",
    color: "from-blue-100 to-blue-50",
    iconColor: "text-blue-500"
  },
  {
    icon: Code,
    title: "Programming",
    courses: "400+ Course",
    color: "from-pink-100 to-pink-50",
    iconColor: "text-pink-500"
  },
  {
    icon: Briefcase,
    title: "Business",
    courses: "400+ Course",
    color: "from-teal-100 to-teal-50",
    iconColor: "text-teal-500"
  },
  {
    icon: Music,
    title: "Audio + Music",
    courses: "400+ Course",
    color: "from-green-100 to-green-50",
    iconColor: "text-green-500"
  },
  {
    icon: DollarSign,
    title: "Finance",
    courses: "400+ Course",
    color: "from-purple-100 to-purple-50",
    iconColor: "text-purple-500"
  },
  {
    icon: FileText,
    title: "Accounting",
    courses: "400+ Course",
    color: "from-cyan-100 to-cyan-50",
    iconColor: "text-cyan-500"
  },
  {
    icon: PenTool,
    title: "Content Writing",
    courses: "400+ Course",
    color: "from-yellow-100 to-yellow-50",
    iconColor: "text-yellow-600"
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Popular Topic, Which are Most
            <br />
            Favourite To Students
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet, consectetur.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {categories.map((category, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 cursor-pointer border-0 overflow-hidden"
            >
              <CardContent className={`p-8 bg-gradient-to-br ${category.color} h-full flex flex-col items-center justify-center text-center space-y-4`}>
                <div className={`w-16 h-16 rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className={`w-8 h-8 ${category.iconColor}`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.courses}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
