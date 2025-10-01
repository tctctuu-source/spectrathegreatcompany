import { Card, CardContent } from "@/components/ui/card";
import { Video, Headphones, BookOpen } from "lucide-react";

const WhyChooseUs = () => {
  const features = [
    {
      icon: Video,
      title: "Audio Classes",
      description: "We provide an online class with user-friendly audio classes where students can learn at their convenience.",
      color: "text-orange-500",
      bgColor: "bg-orange-50"
    },
    {
      icon: Headphones,
      title: "Live Classes",
      description: "We provide online classes with live interactions where students can engage directly with teachers.",
      color: "text-gray-700",
      bgColor: "bg-gray-50"
    },
    {
      icon: BookOpen,
      title: "Recorded Class",
      description: "We provide recorded class sessions that students can watch at their own pace and convenience.",
      color: "text-green-500",
      bgColor: "bg-green-50"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-purple-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enjoy Learning with video, audio
            <br />
            & live classes
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Sit nec vitae purus lectus dui pellentesque.
            Cursus pharetra faucibus vulputate tincidunt vitae nulla augue. Elit morbi scelerisque
            ipsum consequat non lectus scelerisque pretium.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-2xl transition-all duration-300 border-0 overflow-hidden"
            >
              <CardContent className={`p-8 ${feature.bgColor} text-center space-y-6`}>
                <div className={`w-16 h-16 mx-auto rounded-2xl bg-white flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <button className="bg-gray-900 hover:bg-gray-800 text-white px-10 py-4 rounded-lg text-lg font-medium transition-all duration-300 shadow-lg hover:shadow-xl">
            Get Started
          </button>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
