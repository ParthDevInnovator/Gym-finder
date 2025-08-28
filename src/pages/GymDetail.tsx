import { useParams, useNavigate } from "react-router-dom";
import { useState } from "react";
import { Star, MapPin, Clock, Phone, Mail, ArrowLeft, Calendar, Users, Wifi, Car, Coffee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { gymsData } from "@/lib/gymData";
import { toast } from "@/hooks/use-toast";

const amenityIcons: Record<string, any> = {
  "Pool": "🏊",
  "Sauna": "🧘",
  "Personal Training": Users,
  "Group Classes": Users,
  "Parking": Car,
  "Free Weights": "🏋️",
  "Powerlifting": "💪",
  "Coaching": Users,
  "24/7 Access": Clock,
  "Supplements": "💊",
  "Yoga Classes": "🧘",
  "Meditation": "🧘",
  "Wellness Programs": "🌿",
  "Workshops": "📚",
  "Retail": "🛍️",
  "CrossFit": "🏃",
  "Olympic Lifting": "🏋️",
  "Community Events": Users,
  "Nutrition": "🍎",
  "Water Aerobics": "🏊",
  "Swimming Lessons": "🏊",
  "Aquatic Therapy": "💧",
  "Locker Rooms": "🚿",
  "Modern Equipment": "⚙️",
  "Flexible Membership": "📋",
  "Security": "🔒",
  "App Integration": "📱",
  "Heavy Weights": "🏋️",
  "Bodybuilding Focus": "💪",
  "Experienced Members": Users,
  "Posing Room": "🪞",
  "Dance Classes": "💃",
  "Zumba": "💃",
  "Barre": "🤸",
  "Mirrors": "🪞",
  "Sound System": "🔊",
  "Rock Climbing": "🧗",
  "Bouldering": "🧗",
  "Equipment Rental": "🎒",
  "Instruction": Users,
  "Safety Training": "⚠️",
  "Recovery Services": "🔄",
  "Massage": "💆",
  "Cryotherapy": "❄️",
  "Infrared Sauna": "🔥",
  "Wellness Coaching": Users
};

export default function GymDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [isBooking, setIsBooking] = useState(false);

  const gym = gymsData.find(g => g.id === id);

  if (!gym) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Gym not found</h1>
          <Button onClick={() => navigate("/dashboard")}>
            Back to Dashboard
          </Button>
        </div>
      </div>
    );
  }

  const handleBooking = async () => {
    setIsBooking(true);
    
    // Simulate booking process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    toast({
      title: "Booking Request Submitted!",
      description: "We'll contact you shortly to confirm your membership.",
    });
    
    navigate("/booking/success");
  };

  const getAmenityIcon = (amenity: string) => {
    const icon = amenityIcons[amenity];
    if (typeof icon === "string") {
      return <span className="text-lg">{icon}</span>;
    }
    if (icon) {
      const IconComponent = icon;
      return <IconComponent className="w-4 h-4" />;
    }
    return <span className="text-lg">✨</span>;
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 mx-auto max-w-6xl">
        {/* Back Button */}
        <Button 
          variant="ghost" 
          onClick={() => navigate("/dashboard")}
          className="mb-6 animate-fade-in"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Gyms
        </Button>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Hero Image and Basic Info */}
            <Card className="overflow-hidden animate-fade-in">
              <div className="relative">
                <img 
                  src={gym.imageUrl} 
                  alt={gym.name}
                  className="w-full h-64 lg:h-80 object-cover"
                />
                <div className="absolute top-4 right-4">
                  <Badge variant="secondary" className="bg-background/90 backdrop-blur">
                    <Star className="w-4 h-4 mr-1 fill-current text-yellow-500" />
                    {gym.rating} Rating
                  </Badge>
                </div>
              </div>
              
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-2xl lg:text-3xl">{gym.name}</CardTitle>
                    <div className="flex items-center text-muted-foreground mt-2">
                      <MapPin className="w-4 h-4 mr-2" />
                      {gym.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-3xl font-bold text-primary">${gym.price}</div>
                    <div className="text-sm text-muted-foreground">per month</div>
                  </div>
                </div>
              </CardHeader>
            </Card>

            {/* Description */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>About This Gym</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {gym.description}
                </p>
              </CardContent>
            </Card>

            {/* Amenities */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Amenities & Features</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {gym.amenities.map((amenity, index) => (
                    <div 
                      key={index} 
                      className="flex items-center space-x-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-smooth"
                    >
                      {getAmenityIcon(amenity)}
                      <span className="font-medium">{amenity}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Hours */}
            <Card className="animate-slide-up">
              <CardHeader>
                <CardTitle>Operating Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-lg font-medium">{gym.hours}</span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Booking Card */}
            <Card className="sticky top-24 animate-scale-in">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Calendar className="w-5 h-5 mr-2" />
                  Book Your Membership
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-1">
                    ${gym.price}
                  </div>
                  <div className="text-sm text-muted-foreground">per month</div>
                </div>
                
                <Separator />
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span>Monthly Membership</span>
                    <span>Rupees{gym.price}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Setup Fee</span>
                    <span className="text-success">Free</span>
                  </div>
                  <div className="flex justify-between font-semibold border-t pt-2">
                    <span>Total</span>
                    <span>Rupees{gym.price}/month</span>
                  </div>
                </div>
                
                <Button 
                  onClick={handleBooking}
                  disabled={isBooking}
                  size="lg"
                  variant="hero"
                  className="w-full"
                >
                  {isBooking ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                      Processing...
                    </>
                  ) : (
                    <>
                      <Calendar className="w-4 h-4 mr-2" />
                      Request Booking
                    </>
                  )}
                </Button>
                
                <p className="text-xs text-muted-foreground text-center">
                  No long-term commitments. Cancel anytime.
                </p>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>info@{gym.name.toLowerCase().replace(/\s+/g, '')}.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{gym.location}</span>
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="animate-scale-in">
              <CardHeader>
                <CardTitle>Quick Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Rating</span>
                  <div className="flex items-center">
                    <Star className="w-4 h-4 fill-current text-yellow-500 mr-1" />
                    <span className="font-semibold">{gym.rating}/5</span>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Amenities</span>
                  <span className="font-semibold">{gym.amenities.length}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-muted-foreground">Price Range</span>
                  <span className="font-semibold">
                    {gym.price <= 35 ? "Budget" : gym.price <= 50 ? "Mid-range" : "Premium"}
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}