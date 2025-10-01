import { Card, CardContent } from "@/components/ui/card";

const Milestones = () => {
  const milestones = [
    {
      image: "https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "Over 3000+",
      subtitle: "Satisfied Students",
      description: "Join thousands of successful learners who have transformed their careers with our programs"
    },
    {
      image: "https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=800",
      title: "10+ Study",
      subtitle: "Centers",
      description: "Modern learning facilities equipped with state-of-the-art technology and resources"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
      <div className="container mx-auto px-4">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-primary mb-4">Our Milestone</h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {milestones.map((milestone, index) => (
            <Card 
              key={index} 
              className="border-0 shadow-xl hover:shadow-2xl transition-all duration-500 bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden group hover:scale-105"
            >
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden">
                  <img 
                    src={milestone.image} 
                    alt={milestone.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                </div>
                
                <CardContent className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">{milestone.title}</h3>
                    <h4 className="text-2xl font-semibold opacity-90">{milestone.subtitle}</h4>
                  </div>
                </CardContent>
              </div>
              
              <CardContent className="p-8">
                <p className="text-muted-foreground leading-relaxed">
                  {milestone.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Additional stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Success Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">50+</div>
            <div className="text-muted-foreground">Expert Instructors</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">200+</div>
            <div className="text-muted-foreground">Courses Available</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Support Available</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Milestones;