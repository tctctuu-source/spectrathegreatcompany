import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Smartphone, 
  Download, 
  Star, 
  Play, 
  BookOpen, 
  Trophy, 
  Users, 
  Zap,
  Shield,
  Globe,
  Heart,
  TrendingUp
} from "lucide-react";

const LearningApp = () => {
  const features = [
    {
      icon: <BookOpen className="w-8 h-8" />,
      title: "Interactive Lessons",
      description: "Engage with multimedia content, quizzes, and hands-on exercises designed for maximum retention."
    },
    {
      icon: <Trophy className="w-8 h-8" />,
      title: "Achievement System",
      description: "Earn badges, certificates, and rewards as you progress through your learning journey."
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Learning",
      description: "Connect with fellow learners, join study groups, and participate in collaborative projects."
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "AI-Powered Personalization",
      description: "Get personalized learning paths and recommendations based on your progress and preferences."
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Offline Access",
      description: "Download content for offline learning, perfect for studying on the go without internet."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Multi-Language Support",
      description: "Learn in your preferred language with content available in 15+ languages."
    }
  ];

  const courses = [
    {
      title: "Web Development Fundamentals",
      progress: 75,
      lessons: 24,
      duration: "8 weeks",
      level: "Beginner",
      rating: 4.9,
      students: 1250
    },
    {
      title: "Data Science with Python",
      progress: 45,
      lessons: 32,
      duration: "12 weeks",
      level: "Intermediate",
      rating: 4.8,
      students: 890
    },
    {
      title: "Digital Marketing Mastery",
      progress: 90,
      lessons: 18,
      duration: "6 weeks",
      level: "Beginner",
      rating: 4.7,
      students: 2100
    }
  ];

  const stats = [
    { label: "Active Users", value: "50K+", icon: <Users className="w-6 h-6" /> },
    { label: "Courses Available", value: "200+", icon: <BookOpen className="w-6 h-6" /> },
    { label: "Success Rate", value: "94%", icon: <TrendingUp className="w-6 h-6" /> },
    { label: "User Rating", value: "4.8/5", icon: <Star className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary/10 to-accent/10">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl font-bold mb-6">Let's Up Learning App</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your learning experience with our cutting-edge mobile app. 
                Learn anywhere, anytime with personalized content and AI-powered recommendations.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  <Download className="w-5 h-5 mr-2" />
                  Download for iOS
                </Button>
                <Button size="lg" variant="outline">
                  <Download className="w-5 h-5 mr-2" />
                  Download for Android
                </Button>
              </div>
              <div className="grid grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="flex justify-center mb-2 text-primary">
                      {stat.icon}
                    </div>
                    <div className="font-bold text-lg">{stat.value}</div>
                    <div className="text-sm text-muted-foreground">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative mx-auto w-80 h-96 bg-gradient-to-br from-primary to-accent rounded-3xl p-1">
                <div className="w-full h-full bg-background rounded-3xl p-6 flex flex-col">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center">
                      <Smartphone className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <Badge variant="secondary">Learning Mode</Badge>
                  </div>
                  <h3 className="text-lg font-semibold mb-4">Today's Progress</h3>
                  <div className="space-y-4 flex-1">
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">JavaScript Basics</span>
                        <span className="text-xs text-muted-foreground">75%</span>
                      </div>
                      <Progress value={75} className="h-2" />
                    </div>
                    <div className="bg-muted/50 rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium">React Components</span>
                        <span className="text-xs text-muted-foreground">45%</span>
                      </div>
                      <Progress value={45} className="h-2" />
                    </div>
                  </div>
                  <Button className="w-full mt-4">
                    <Play className="w-4 h-4 mr-2" />
                    Continue Learning
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Powerful Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Our app is packed with features designed to make your learning journey effective, engaging, and enjoyable.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardHeader className="text-center">
                  <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <div className="text-primary">
                      {feature.icon}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Course Preview */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Your Learning Dashboard</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Track your progress, manage your courses, and stay motivated with our intuitive dashboard.
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="grid gap-6">
              {courses.map((course, index) => (
                <Card key={index} className="border-0 shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="text-lg font-semibold">{course.title}</h3>
                          <Badge variant={course.level === "Beginner" ? "default" : "secondary"}>
                            {course.level}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                          <span>{course.lessons} lessons</span>
                          <span>{course.duration}</span>
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            <span>{course.rating}</span>
                          </div>
                          <span>{course.students} students</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <Progress value={course.progress} className="flex-1 h-2" />
                          <span className="text-sm font-medium">{course.progress}%</span>
                        </div>
                      </div>
                      <Button className="bg-primary hover:bg-primary/90">
                        <Play className="w-4 h-4 mr-2" />
                        Continue
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Start Learning Today</h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of learners who are already transforming their careers and lives with our app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                <Download className="w-5 h-5 mr-2" />
                Download Now - Free
              </Button>
              <Button size="lg" variant="outline">
                <Play className="w-5 h-5 mr-2" />
                Watch Demo
              </Button>
            </div>
            <div className="flex items-center justify-center gap-8 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Heart className="w-4 h-4 text-red-500" />
                <span>Loved by 50K+ users</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% Secure</span>
              </div>
              <div className="flex items-center gap-2">
                <Download className="w-4 h-4 text-blue-500" />
                <span>Free to download</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LearningApp;