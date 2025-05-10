import React from "react";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

interface HeroSectionProps {
  name?: string;
  title?: string;
  introduction?: string;
  imageUrl?: string;
  onContactClick?: () => void;
}

const HeroSection = ({
  name = "Ken Nakamura",
  title = "Senior Business Development Executive",
  introduction = "With over 15 years of experience at Honda, I've led strategic initiatives that have expanded our market presence and driven sustainable growth across North America and Asia Pacific regions.",
  imageUrl = "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&q=80",
  onContactClick = () => console.log("Contact button clicked"),
}: HeroSectionProps) => {
  return (
    <section className="w-full min-h-[600px] bg-white flex items-center relative overflow-hidden">
      {/* Background with subtle Honda red accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-white to-gray-50 z-0">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-red-50 to-transparent opacity-50" />
      </div>

      <div className="container mx-auto px-4 md:px-6 py-12 flex flex-col md:flex-row items-center z-10">
        {/* Content */}
        <div className="md:w-3/5 md:pr-8 mb-8 md:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">
            {name}
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-red-600 mb-6">
            {title} | Honda Motor Co.
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl">{introduction}</p>
          <div className="flex flex-wrap gap-4">
            <Button
              onClick={onContactClick}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-md"
            >
              Contact Me <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              className="border-red-600 text-red-600 hover:bg-red-50"
            >
              View Resume
            </Button>
          </div>
        </div>

        {/* Image */}
        <div className="md:w-2/5 relative">
          <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl mx-auto">
            <img
              src={imageUrl}
              alt={`${name} - ${title} at Honda`}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&q=80"
              alt="Honda Logo"
              className="w-16 h-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
