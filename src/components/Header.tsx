import { Dumbbell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Link, useLocation } from "react-router-dom";

export function Header() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link 
          to="/" 
          className="flex items-center space-x-2 hover:opacity-80 transition-smooth"
        >
          <Dumbbell className="h-8 w-8 text-primary" />
          <span className="font-bold text-xl gradient-text">GymFinder</span>
        </Link>

        <nav className="hidden md:flex items-center space-x-6">
          <Link 
            to="/" 
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              location.pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Home
          </Link>
          <Link 
            to="/dashboard" 
            className={`text-sm font-medium transition-smooth hover:text-primary ${
              location.pathname === "/dashboard" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            Find Gyms
          </Link>
        </nav>

        <div className="flex items-center space-x-2">
          <ThemeToggle />
          {location.pathname === "/" && (
            <Link to="/dashboard">
              <Button variant="hero" size="sm" className="hidden md:inline-flex">
                Find Gyms
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}