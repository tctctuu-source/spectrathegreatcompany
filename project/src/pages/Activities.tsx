import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Users, MapPin, Star } from "lucide-react";

const Activities = () => {
  const activities = [
    {
      id: 1,
      title: "Interactive Coding Workshop",
      description: "Learn programming fundamentals through hands-on projects and real-world applications.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Technology",
      duration: "3 hours",
      participants: "15-20",
      level: "Beginner",
      date: "Every Saturday",
      location: "Online & In-Person",
      rating: 4.8,
      features: ["Live Coding", "Project-Based", "Mentorship", "Certificate"]
    },
    {
      id: 2,
      title: "Creative Writing Circle",
      description: "Develop your storytelling skills in a supportive, collaborative environment.",
      image: "https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Arts & Literature",
      duration: "2 hours",
      participants: "8-12",
      level: "All Levels",
      date: "Wednesdays",
      location: "Community Center",
      rating: 4.9,
      features: ["Peer Review", "Publishing Opportunities", "Guest Authors", "Portfolio Building"]
    },
    {
      id: 3,
      title: "Science Discovery Lab",
      description: "Explore scientific concepts through exciting experiments and investigations.",
      image: "https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Science",
      duration: "2.5 hours",
      participants: "10-15",
      level: "Intermediate",
      date: "Fridays",
      location: "Science Lab",
      rating: 4.7,
      features: ["Hands-on Experiments", "Lab Equipment", "Research Projects", "Science Fair Prep"]
    },
    {
      id: 4,
      title: "Digital Art & Design",
      description: "Master digital art tools and techniques to create stunning visual content.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Design",
      duration: "3 hours",
      participants: "12-16",
      level: "Beginner to Advanced",
      date: "Sundays",
      location: "Design Studio",
      rating: 4.6,
      features: ["Professional Software", "Portfolio Development", "Industry Mentors", "Showcase Events"]
    },
    {
      id: 5,
      title: "Language Exchange Café",
      description: "Practice languages in a relaxed, conversational setting with native speakers.",
      image: "https://images.pexels.com/photos/1181533/pexels-photo-1181533.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Languages",
      duration: "1.5 hours",
      participants: "20-30",
      level: "All Levels",
      date: "Tuesdays & Thursdays",
      location: "Café Lounge",
      rating: 4.8,
      features: ["Native Speakers", "Cultural Exchange", "Games & Activities", "Progress Tracking"]
    },
    {
      id: 6,
      title: "Entrepreneurship Bootcamp",
      description: "Learn to build and launch your own business with expert guidance and mentorship.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Business",
      duration: "4 hours",
      participants: "8-12",
      level: "Intermediate",
      date: "Monthly Intensive",
      location: "Business Hub",
      rating: 4.9,
      features: ["Business Plan Development", "Investor Pitch Training", "Networking", "Funding Guidance"]
    }
  ];

  const categories = ["All", "Technology", "Arts & Literature", "Science", "Design", "Languages", "Business"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Learning Activities</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover engaging, hands-on activities designed to enhance your learning experience 
              and connect you with like-minded learners.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="outline" className="px-4 py-2 cursor-pointer hover:bg-primary hover:text-primary-foreground">
                  {category}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {activities.map((activity) => (
              <Card key={activity.id} className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={activity.image} 
                    alt={activity.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{activity.category}</Badge>
                    <div className="flex items-center gap-1">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm font-medium">{activity.rating}</span>
                    </div>
                  </div>
                  <CardTitle className="text-xl">{activity.title}</CardTitle>
                  <p className="text-muted-foreground">{activity.description}</p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{activity.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users className="w-4 h-4 text-primary" />
                      <span>{activity.participants}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{activity.location}</span>
                    </div>
                  </div>
                  
                  <div>
                    <p className="text-sm font-medium mb-2">What's Included:</p>
                    <div className="flex flex-wrap gap-1">
                      {activity.features.map((feature, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {feature}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center pt-4">
                    <Badge variant={activity.level === "Beginner" ? "default" : activity.level === "Intermediate" ? "secondary" : "destructive"}>
                      {activity.level}
                    </Badge>
                    <Button className="bg-primary hover:bg-primary/90">
                      Join Activity
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join our community of learners and start your journey with activities that match your interests and goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary hover:bg-primary/90">
              Browse All Activities
            </Button>
            <Button size="lg" variant="outline">
              Create Custom Activity
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Activities;