import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";

interface JobEntry {
  id: string;
  role: string;
  company: string;
  duration: string;
  location: string;
  responsibilities: string[];
  achievements: string[];
}

interface ExperienceSectionProps {
  entries?: JobEntry[];
}

const ExperienceSection = ({
  entries = defaultEntries,
}: ExperienceSectionProps) => {
  return (
    <section
      className="py-16 bg-zinc-900"
      style={{
        backgroundImage:
          "radial-gradient(circle, rgba(192, 192, 192, 0.1) 1px, transparent 1px)",
        backgroundSize: "20px 20px",
      }}
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-100 mb-4">
            Professional Experience
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            My career journey at Honda, showcasing leadership and business expertise in the automotive industry.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          {entries.map((entry) => (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <Card className="overflow-hidden border-l-4 border-gray-400 shadow-lg hover:shadow-xl transition-shadow bg-zinc-800 text-gray-200">
                <CardContent className="p-6">
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-100">
                      {entry.role}
                    </h3>
                    <p className="text-gray-300 font-medium">
                      {entry.company}
                    </p>
                    <div className="flex gap-3 mt-2">
                      <Badge className="bg-zinc-700 text-gray-300 border-zinc-600">
                        {entry.duration}
                      </Badge>
                      <Badge className="bg-zinc-700 text-gray-300 border-zinc-600">
                        {entry.location}
                      </Badge>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-zinc-700">
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-100 mb-2">
                        Key Responsibilities:
                      </h4>
                      <ul className="list-disc pl-5 space-y-1">
                        {entry.responsibilities.map((item, i) => (
                          <li key={i} className="text-gray-300">
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-semibold text-gray-100 mb-2">
                        Key Achievements:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {entry.achievements.map((achievement, i) => (
                          <Badge
                            key={i}
                            variant="outline"
                            className="bg-zinc-700 text-gray-300 border-zinc-600"
                          >
                            {achievement}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const defaultEntries: JobEntry[] = [
  {
    id: "1",
    role: "Product Specialist",
    company: "lynnwoodhonda",
    duration: "2023 - Present",
    location: "lynnwood, The United States",
    responsibilities: [
      "Built personalized, pressure-free relationships with customers to earn trust and drive long-term satisfaction through consistent follow-ups.",
      "Guided customers through leasing options, aligning features and terms with their personal and financial goals.",
      "Identified key customer needs by asking targeted questions and customizing presentations to match their priorities.",
      "Ensured a smooth, end-to-end experience by coordinating across sales, finance, and delivery teams with a focus on speed and clarity."
    ],
    achievements: [
      "Achieved 98%+ customer satisfaction score through consistent follow-ups and personalized service.",
      "Closed over 150 successful lease agreements by matching customers with the right vehicle and terms.",
      "Generated repeat business and referrals by building lasting client relationships and trust.",
      "Recognized by management for delivering a seamless sales-to-delivery experience across departments."
    ]
  }
];

export default ExperienceSection;
