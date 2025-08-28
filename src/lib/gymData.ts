export interface Gym {
  id: string;
  name: string;
  location: string;
  price: number; // Price is now always a number
  description: string;
  imageUrl: string;
  rating: number;
  amenities: string[];
  hours: string;
}

export const gymsData: Gym[] = [
  {
    id: "1",
    name: "Fitflex Fitness",
    location: "Ghogha Circle, Bhavnagar",
    price: 1800, // Assumed price in INR
    description: "Premium gym with an in-house cafe, offering cardio, Zumba, weight lifting, personal training, and a steam room.",
    imageUrl: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=400&fit=crop&crop=center",
    rating: 4.6,
    amenities: ["Cafe", "Cardio", "Zumba", "Weight Lifting", "Personal Training", "Steam room", "Locker Facility"],
    hours: "Contact for hours"
  },
  {
    id: "2",
    name: "Reform Fitness Studio",
    location: "Waghawadi Road, Opp. Gulista Ground, Bhavnagar",
    price: 1500, // Assumed price in INR
    description: "A popular studio with a high rating, specializing in Bodybuilding, Cardio, CrossFit, Aerobics, Zumba, and Yoga.",
    imageUrl: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&h=400&fit=crop&crop=center",
    rating: 4.5,
    amenities: ["Bodybuilding", "Cardio", "CrossFit", "Aerobics", "Zumba", "Yoga", "Personal Training"],
    hours: "Contact for hours"
  },
  {
    id: "3",
    name: "Body Fuel Fitness",
    location: "Waghawadi Road Bhavnagar HO, Bhavnagar",
    price: 1250, // Assumed price in INR
    description: "Highly-rated fitness center focused on group classes including Aerobics, Zumba, and Yoga sessions.",
    imageUrl: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=400&fit=crop&crop=center",
    rating: 4.9,
    amenities: ["Aerobics", "Zumba", "Yoga", "Personal Trainers"],
    hours: "Contact for hours"
  },
  // {
  //   id: "4",
  //   name: "AR Fitness",
  //   location: "Tarsamiya Road, Ghogha, Bhavnagar",
  //   price: 1300, // Assumed price in INR
  //   description: "A well-regarded fitness center offering personalized services like nutrition counselling and dedicated personal trainers for weight loss.",
  //   imageUrl: "https://images.unsplash.com/photo-1594736797933-d0a3ca3c3db5?w=800&h=400&fit=crop&crop=center",
  //   rating: 4.4,
  //   amenities: ["Nutrition Counselling", "Personal Trainers", "Weight Loss Programs"],
  //   hours: "Contact for hours"
  // },
  {
    id: "5",
    name: "Marvel Fitness Studio",
    location: "Jail Road, Bhavnagar",
    price: 1100, // Assumed price in INR
    description: "A fitness studio on Jail Road providing personal trainers and group aerobics classes to help members achieve their goals.",
    imageUrl: "https://images.unsplash.com/photo-1522163723043-478ef79a5bb4?w=800&h=400&fit=crop&crop=center",
    rating: 4.4,
    amenities: ["Personal Trainers", "Aerobics"],
    hours: "Contact for hours"
  },
  {
    id: "6",
    name: "The Iscon Club & Resort",
    location: "Bhavnagar",
    price: 2000, // Assumed base price for gym access in INR
    description: "A comprehensive club and resort with extensive sports and fitness facilities, including a gymnasium, steam room, and various sports courts.",
    imageUrl: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&h=400&fit=crop&crop=center",
    rating: 4.5,
    amenities: ["Gymnasium", "Steam", "Tennis", "Squash", "Badminton", "Volley Ball", "Table Tennis"],
    hours: "Varies by facility"
  }
];
