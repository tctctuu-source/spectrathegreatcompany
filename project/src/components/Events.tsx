import { Card, CardContent } from "@/components/ui/card";

const Events = () => {
  const events = [
    {
      title: "Learning Workshop 2024",
      date: "March 15, 2024",
      description: "Interactive session on modern learning techniques",
      image: "/placeholder.svg"
    },
    {
      title: "Student Achievement Ceremony", 
      date: "March 20, 2024",
      description: "Celebrating our students' remarkable progress",
      image: "/placeholder.svg"
    },
    {
      title: "Innovation in Education Summit",
      date: "March 25, 2024", 
      description: "Exploring the future of learning and development",
      image: "/placeholder.svg"
    },
    {
      title: "Community Learning Festival",
      date: "March 30, 2024",
      description: "Bringing together learners from all backgrounds",
      image: "/placeholder.svg"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Events</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Join us in our exciting events that celebrate learning and achievement
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center text-primary">
                  <div className="text-4xl mb-2">📚</div>
                  <div className="text-sm font-medium">Event Image</div>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{event.title}</h3>
                  <p className="text-primary text-sm font-medium">{event.date}</p>
                  <p className="text-muted-foreground text-sm">{event.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Events;