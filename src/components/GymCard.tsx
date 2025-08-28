import { Star, MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Gym } from "@/lib/gymData";

interface GymCardProps {
  gym: Gym;
}

export function GymCard({ gym }: GymCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-xl transition-smooth card-elevated animate-fade-in group">
      <div className="relative">
        <img 
          src={gym.imageUrl} 
          alt={gym.name}
          className="w-full h-48 object-cover group-hover:scale-105 transition-smooth"
        />
        <div className="absolute top-4 right-4">
          <Badge variant="secondary" className="bg-background/90 backdrop-blur">
            <Star className="w-3 h-3 mr-1 fill-current text-yellow-500" />
            {gym.rating}
          </Badge>
        </div>
      </div>

      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <h3 className="font-semibold text-lg leading-tight">{gym.name}</h3>
          <div className="text-right">
            <div className="text-2xl font-bold text-primary">₹{gym.price}</div>
            <div className="text-xs text-muted-foreground">per month</div>
          </div>
        </div>
        
        <div className="flex items-center text-sm text-muted-foreground">
          <MapPin className="w-4 h-4 mr-1" />
          {gym.location}
        </div>
      </CardHeader>

      <CardContent className="py-0">
        <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
          {gym.description}
        </p>
        
        <div className="flex items-center text-sm text-muted-foreground mb-3">
          <Clock className="w-4 h-4 mr-1" />
          {gym.hours}
        </div>

        <div className="flex flex-wrap gap-1">
          {gym.amenities.slice(0, 3).map((amenity) => (
            <Badge key={amenity} variant="outline" className="text-xs">
              {amenity}
            </Badge>
          ))}
          {gym.amenities.length > 3 && (
            <Badge variant="outline" className="text-xs">
              +{gym.amenities.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="pt-4">
        <Link to={`/gym/${gym.id}`} className="w-full">
          <Button className="w-full" variant="default">
            <Users className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
}