import { CheckCircle, Calendar, Phone, Mail, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Link } from "react-router-dom";

export default function BookingSuccess() {
  return (
    <div className="min-h-screen py-12 bg-gradient-to-br from-success/5 to-primary/5">
      <div className="container px-4 mx-auto max-w-2xl">
        <div className="text-center animate-fade-in">
          {/* Success Icon */}
          <div className="bg-success/10 w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-8 animate-scale-in">
            <CheckCircle className="w-12 h-12 text-success" />
          </div>

          {/* Success Message */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">
            Booking Request <span className="text-success">Submitted!</span>
          </h1>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Thank you for choosing GymFinder! Your membership request has been successfully submitted. 
            Our team will contact you shortly to confirm your booking and help you get started.
          </p>
        </div>

        {/* What's Next Card */}
        <Card className="mb-8 animate-slide-up card-elevated">
          <CardHeader>
            <CardTitle className="flex items-center">
              <Calendar className="w-5 h-5 mr-2 text-primary" />
              What Happens Next?
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-semibold">Confirmation Call</h3>
                  <p className="text-muted-foreground text-sm">
                    We'll call you within 24 hours to confirm your membership details and answer any questions.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-semibold">Schedule Your Visit</h3>
                  <p className="text-muted-foreground text-sm">
                    Book a convenient time for your gym tour and membership setup.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="bg-primary/10 w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary font-semibold text-sm">3</span>
                </div>
                <div>
                  <h3 className="font-semibold">Start Your Journey</h3>
                  <p className="text-muted-foreground text-sm">
                    Complete your registration and begin your fitness journey!
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Info Card */}
        <Card className="mb-8 animate-slide-up">
          <CardHeader>
            <CardTitle>Need Help?</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              If you have any questions or need to make changes to your booking, feel free to contact us:
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91-9426836149</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@gymfinder.com</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
          <Link to="/dashboard" className="flex-1">
            <Button variant="outline" size="lg" className="w-full">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Browse More Gyms
            </Button>
          </Link>
          
          <Link to="/" className="flex-1">
            <Button variant="hero" size="lg" className="w-full">
              Back to Home
            </Button>
          </Link>
        </div>

        {/* Additional Info */}
        <div className="text-center mt-8 animate-fade-in">
          <p className="text-sm text-muted-foreground">
            Booking ID: <span className="font-mono font-semibold">#GF{Date.now().toString().slice(-6)}</span>
          </p>
          <p className="text-xs text-muted-foreground mt-2">
            Please keep this ID for your records
          </p>
        </div>
      </div>
    </div>
  );
}