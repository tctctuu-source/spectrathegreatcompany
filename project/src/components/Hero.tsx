import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen md:min-h-[90vh] bg-gradient-to-br from-purple-50 via-white to-blue-50 relative overflow-hidden py-12 md:py-20">
      <div className="absolute top-10 md:top-20 right-10 md:right-20 w-20 md:w-32 h-20 md:h-32 bg-green-200/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 md:bottom-40 left-10 md:left-20 w-28 md:w-40 h-28 md:h-40 bg-purple-200/30 rounded-full blur-3xl"></div>
      <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-purple-400 rounded-full hidden md:block"></div>
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-orange-400 rounded-full hidden md:block"></div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-purple-100 rounded-full">
              <span className="text-purple-600 text-xs md:text-sm font-medium">Education Goal</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
              <span className="text-gray-900">Learn From </span>
              <span className="text-purple-600">Best Teacher</span>
            </h1>

            <p className="text-base md:text-lg text-gray-600 max-w-lg leading-relaxed">
              Spectra is a Global training provider based across the India that specialises in
              accredited and bespoke training courses.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 pt-2 md:pt-4">
              <Button
                size="lg"
                className="bg-gray-900 hover:bg-gray-800 text-white px-6 md:px-8 py-5 md:py-6 text-sm md:text-base rounded-lg w-full sm:w-auto"
                onClick={() => window.open('https://wa.me/917619396441', '_blank')}
              >
                Get Started
              </Button>
              <Button
                size="lg"
                variant="ghost"
                className="text-gray-900 hover:bg-gray-100 px-4 md:px-6 py-5 md:py-6 text-sm md:text-base rounded-lg w-full sm:w-auto"
              >
                <Play className="w-4 md:w-5 h-4 md:h-5 mr-2" />
                Learn More
              </Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8 pt-4 md:pt-6">
              <div className="flex items-center gap-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">1K+</div>
                <div className="text-xs md:text-sm text-gray-600">Active<br />students</div>
              </div>
              <div className="hidden sm:block h-12 w-px bg-gray-300"></div>
              <div className="flex items-center gap-3">
                <div className="text-3xl md:text-4xl font-bold text-gray-900">4</div>
                <div className="text-xs md:text-sm text-gray-600">Total<br />Courses</div>
              </div>
            </div>
          </div>

          <div className="relative mt-12 lg:mt-0">
            <div className="relative">
              <div className="absolute -top-3 md:-top-6 -right-3 md:-right-6 w-16 md:w-24 h-16 md:h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-2xl md:text-4xl">💡</span>
              </div>

              <div className="absolute -bottom-3 md:-bottom-6 -left-3 md:-left-6 w-12 md:w-20 h-12 md:h-20 bg-green-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-xl md:text-3xl">📚</span>
              </div>

              <div className="absolute top-1/2 -left-4 md:-left-8 w-12 md:w-16 h-12 md:h-16 bg-purple-400 rounded-full flex items-center justify-center shadow-lg z-10">
                <span className="text-lg md:text-2xl">🎯</span>
              </div>

              <div className="relative bg-gradient-to-br from-green-100 via-white to-purple-100 rounded-2xl md:rounded-[3rem] p-6 md:p-8 shadow-2xl">
                <div className="w-full h-[300px] sm:h-[400px] md:h-[500px] bg-gradient-to-br from-purple-200 to-blue-200 rounded-xl md:rounded-[2rem] flex items-center justify-center">
                  <div className="text-center px-4">
                    <div className="text-6xl sm:text-7xl md:text-9xl mb-2 md:mb-4">👨‍🏫</div>
                    <div className="text-lg md:text-2xl font-semibold text-gray-800">Expert Teacher</div>
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
