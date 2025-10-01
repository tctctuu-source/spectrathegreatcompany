import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, Target, Award, Heart } from "lucide-react";

const About = () => {
  const values = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Our Mission",
      description: "To revolutionize education by making learning accessible, engaging, and effective for everyone, regardless of their background or learning style."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Our Team",
      description: "A diverse group of educators, technologists, and innovators passionate about transforming the educational landscape through cutting-edge methods."
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Our Achievements",
      description: "Over 10,000 successful learners, 95% satisfaction rate, and recognition as a leading educational innovation platform in the industry."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Our Values",
      description: "We believe in inclusivity, innovation, integrity, and the power of education to transform lives and communities worldwide."
    }
  ];

  const team = [
    {
      name: "Mohammed Ashfaque",
      role: "Founder & CEO",
      bio: "MArketing Specialsit",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Ibrahim Khaleel",
      role: "Head of Technology",
      bio: "Web&App Developer , Marketing Specialist < Financila Advisor , Seo Specialist",
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      name: "Mohammed Ashiq Muloor",
      role: "Chief Learning Officer",
      bio: "Educational psychologist with expertise in personalized learning",
      image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">About Spectra Learning</h1>
            <p className="text-xl text-muted-foreground mb-8">
              We're on a mission to transform education through innovative learning experiences 
              that inspire curiosity, foster creativity, and drive real-world success.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">01K+</div>
                <div className="text-muted-foreground">Students Taught</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">95%</div>
                <div className="text-muted-foreground">Satisfaction Rate</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">50+</div>
                <div className="text-muted-foreground">Expert Instructors</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">Our Story</h2>
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-muted-foreground mb-6">
                Founded in 2020, Anon Learning emerged from a simple yet powerful belief: that everyone deserves 
                access to high-quality, engaging education. Our founders, a team of educators and technologists, 
                recognized the need for a more personalized, interactive approach to learning.
              </p>
              <p className="text-lg text-muted-foreground mb-6">
                What started as a small initiative to help students during the pandemic has grown into a 
                comprehensive learning platform that serves thousands of learners worldwide. We've maintained 
                our core commitment to making education accessible, affordable, and effective for everyone.
              </p>
              <p className="text-lg text-muted-foreground">
                Today, we continue to innovate and expand our offerings, always keeping our learners at the 
                center of everything we do. Our success is measured not just in numbers, but in the 
                transformative impact we have on individual lives and communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">What Drives Us</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="text-center border-0 shadow-lg">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {value.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12">Meet Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <CardHeader>
                  <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <p className="text-primary font-medium">{member.role}</p>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;