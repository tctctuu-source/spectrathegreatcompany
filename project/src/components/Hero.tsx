import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-[90vh] bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden py-20">
      <div className="absolute top-20 right-20 w-32 h-32 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-40 left-20 w-40 h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full"></div>

      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block px-4 py-2 bg-purple-100 rounded-full">
              <span className="text-purple-600 text-sm font-medium">Education Goal</span>
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Learn From </span>
              <span className="text-purple-600">Best Teacher</span>
            </h1>

            <p className="text-lg text-gray-600 max-w-lg leading-relaxed">
              Spectra is a Global training provider based across the India that specialises in
              accredited and bespoke training courses.
            </p>

            <div className="flex gap-4">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-6 text-base rounded-lg"
                onClick={() => window.open('https://wa.me/917619396441', '_blank')}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-gray-900 hover:bg-gray-100 px-6 py-6 text-base rounded-lg"
              >
                <Play className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="flex items-center gap-8 pt-6">
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-gray-900">1K+</div>
                <div className="text-sm text-gray-600">Active<br />students</div>
              </div>
              <div className="h-12 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="text-4xl font-bold text-gray-900">4</div>
                <div className="text-sm text-gray-600">Total<br />Courses</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-4xl">💡</span>
              </div>

              <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-3xl">📚</span>
              </div>

              <div className="absolute top-1/2 -left-8 w-16 h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-2xl">🎯</span>
              </div>

              <div className="relative bg-gradient-to-br from-green-100 via-white to-purple-100 rounded-[3rem] p-8 shadow-2xl">
                <div className="w-full h-[500px] bg-gradient-to-br from-purple-200 to-blue-200 rounded-[2rem] flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-9xl mb-4">👨‍🏫</div>
                    <div className="text-2xl font-semibold text-gray-800">Expert Teacher</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
