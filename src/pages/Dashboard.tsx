import { useState } from "react";
import { Search, Filter, MapPin, Star } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { GymCard } from "@/components/GymCard";
import { gymsData } from "@/lib/gymData";

export default function Dashboard() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("rating");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredGyms = gymsData
    .filter(gym => 
      gym.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gym.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gym.amenities.some(amenity => amenity.toLowerCase().includes(searchTerm.toLowerCase()))
    )
    .filter(gym => {
      if (priceFilter === "all") return true;
      if (priceFilter === "low") return gym.price <= 35;
      if (priceFilter === "medium") return gym.price > 35 && gym.price <= 50;
      if (priceFilter === "high") return gym.price > 50;
      return true;
    })
    .sort((a, b) => {
      if (sortBy === "rating") return b.rating - a.rating;
      if (sortBy === "price-low") return a.price - b.price;
      if (sortBy === "price-high") return b.price - a.price;
      if (sortBy === "name") return a.name.localeCompare(b.name);
      return 0;
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container px-4 mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h1 className="text-3xl lg:text-5xl font-bold mb-4">
            Find Your Perfect <span className="gradient-text">Gym</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover amazing gyms in your area. Compare prices, read reviews, and book your perfect fitness destination.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-card rounded-2xl p-6 mb-8 shadow-lg animate-slide-up">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="relative md:col-span-2">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
              <Input
                placeholder="Search gyms, locations, or amenities..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger>
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="rating">
                  <div className="flex items-center">
                    <Star className="w-4 h-4 mr-2" />
                    Highest Rated
                  </div>
                </SelectItem>
                <SelectItem value="price-low">Price: Low to High</SelectItem>
                <SelectItem value="price-high">Price: High to Low</SelectItem>
                <SelectItem value="name">Name A-Z</SelectItem>
              </SelectContent>
            </Select>

            <Select value={priceFilter} onValueChange={setPriceFilter}>
              <SelectTrigger>
                <Filter className="w-4 h-4 mr-2" />
                <SelectValue placeholder="Price Range" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Prices</SelectItem>
                <SelectItem value="low">Under $35</SelectItem>
                <SelectItem value="medium">$35 - $50</SelectItem>
                <SelectItem value="high">Over $50</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results Summary */}
        <div className="flex items-center justify-between mb-6 animate-fade-in">
          <div className="flex items-center text-muted-foreground">
            <MapPin className="w-4 h-4 mr-2" />
            <span>{filteredGyms.length} gyms found</span>
          </div>
          
          {searchTerm && (
            <Button 
              variant="ghost" 
              size="sm"
              onClick={() => setSearchTerm("")}
            >
              Clear search
            </Button>
          )}
        </div>

        {/* Gym Grid */}
        {filteredGyms.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredGyms.map((gym, index) => (
              <div 
                key={gym.id} 
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <GymCard gym={gym} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 animate-fade-in">
            <div className="bg-muted/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-muted-foreground" />
            </div>
            <h3 className="text-xl font-semibold mb-2">No gyms found</h3>
            <p className="text-muted-foreground mb-4">
              Try adjusting your search terms or filters
            </p>
            <Button 
              variant="outline" 
              onClick={() => {
                setSearchTerm("");
                setPriceFilter("all");
              }}
            >
              Clear all filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}