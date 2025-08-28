import { ArrowRight, Search, Calendar, Dumbbell, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-gym.jpg";

export default function Landing() {
  const steps = [
    {
      icon: Search,
      title: "Browse Gyms",
      description: "Discover gyms in your area with detailed information and real photos"
    },
    {
      icon: Calendar,
      title: "Request Booking", 
      description: "Select your preferred gym and submit a booking request"
    },
    {
      icon: Dumbbell,
      title: "Start Workout",
      description: "Get confirmation and start your fitness journey"
    }
  ];

  const features = [
    "10+ Premium Gyms",
    "Real-time Availability",
    "Detailed Reviews & Ratings", 
    "Flexible Membership Options",
    "Professional Equipment",
    "Expert Trainers"
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 hero-gradient">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
                Find & Book{" "}
                <span className="gradient-text">Gyms Near You</span>
              </h1>
              <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
                Discover the perfect gym that matches your fitness goals. Browse through premium facilities, compare prices, and book your spot instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/dashboard">
                  <Button size="xl" variant="hero" className="w-full sm:w-auto">
                    Find Gyms Now
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button size="xl" variant="outline" className="w-full sm:w-auto">
                  Learn More
                </Button>
              </div>
            </div>
            
            <div className="relative animate-slide-up">
              <img 
                src={heroImage} 
                alt="Modern gym with people working out"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl p-6 shadow-xl animate-scale-in">
                <div className="flex items-center space-x-3">
                  <div className="bg-primary/10 p-2 rounded-full">
                    <Dumbbell className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold">1000+ Members</div>
                    <div className="text-sm text-muted-foreground">Trust us daily</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-muted/30">
        <div className="container px-4 mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Getting started with your fitness journey is easier than ever. Follow these simple steps.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <Card key={index} className="text-center card-elevated hover:shadow-xl transition-smooth animate-fade-in group" style={{ animationDelay: `${index * 0.2}s` }}>
                <CardContent className="p-8">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-smooth">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container px-4 mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-3xl lg:text-5xl font-bold mb-6">
                Why Choose <span className="gradient-text">GymFinder</span>?
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                We connect you with the best gyms in your area, ensuring you find the perfect fit for your fitness goals and budget.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3 animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <CheckCircle className="w-5 h-5 text-success flex-shrink-0" />
                    <span className="text-sm font-medium">{feature}</span>
                  </div>
                ))}
              </div>

              <Link to="/dashboard">
                <Button size="lg" variant="hero">
                  Start Exploring
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>

            <div className="relative animate-scale-in">
              <div className="grid grid-cols-2 gap-4">
                <img 
                  src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop&crop=center"
                  alt="Gym equipment"
                  className="rounded-xl"
                />
                <img 
                  src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300&h=200&fit=crop&crop=center"
                  alt="People exercising"
                  className="rounded-xl mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1594736797933-d0a3ca3c3db5?w=300&h=200&fit=crop&crop=center"
                  alt="Modern gym interior"
                  className="rounded-xl -mt-8"
                />
                <img 
                  src="https://images.unsplash.com/photo-1518611012118-696072aa579a?w=300&h=200&fit=crop&crop=center"
                  alt="Fitness classes"
                  className="rounded-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 hero-gradient">
        <div className="container px-4 mx-auto text-center">
          <div className="max-w-3xl mx-auto animate-fade-in">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">
              Ready to Start Your <span className="gradient-text">Fitness Journey</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Join thousands of fitness enthusiasts who have found their perfect gym through GymFinder.
            </p>
            <Link to="/dashboard">
              <Button size="xl" variant="hero" className="animate-pulse-glow">
                Browse Gyms Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}