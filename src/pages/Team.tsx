/**
 * File: src/pages/Team.tsx
 * Purpose: Team/authors page listing the treatment developers and bios.
 * Influenced by: UI Card components; Influences: linked from navigation.
 */

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const authors = [
    {
      name: "Denise M. Sloan, Ph.D.",
      credentials: "Senior Psychologist Clinician Investigator, Behavioral Science Division, National Center for PTSD at VA Boston Healthcare System & Professor of Psychiatry, Boston University Chobanian & Avedisian School of Medicine",
      bio: `Dr. Sloan is a clinical psychologist who is an expert on psychosocial interventions for traumatic stress disorders. She co-developed Written Exposure Therapy and has conducted a systematic line of work investigating the effectiveness of the treatment, in addition to the implementation of the treatment in various settings. This work has been funded by several organizations, including the Department of Veterans Affairs, the National Institute for Mental Health, and the Department of Defense. Dr. Sloan regularly trains therapists in the delivery of WET. She has published over 170 scientific articles and written and co-edited several books, including the Handbook of Traumatic Stress Disorders. She is the past Editor of Behavior Therapy and current Editor of Journal of Traumatic Stress. She has received several professional awards, including Outstanding Scientific Achievements from the International Society for Traumatic Stress Studies, Outstanding Contributions to Clinical Psychology from the Society for Clinical Psychology (Division 12 of the American Psychological Association), and outstanding mentor awards from both the International Society for Traumatic Stress Studies and Division 12 of the American Psychological Association.`,
      imageUrl: "/assets/Denise.JPG",
    },
    {
      name: "Brian P. Marx, Ph.D.",
      credentials: "Deputy Director and Senior Psychologist Clinician Investigator, Behavioral Science Division, National Center for PTSD at VA Boston Healthcare System & Professor of Psychiatry, Boston University Chobanian & Avedisian School of Medicine",
      bio: `Dr. Marx is a clinical psychologist who has expertise in psychosocial treatments for PTSD and assessment of PTSD. Along with Dr. Sloan, he has co-developed written exposure therapy and conducted a line of work investigating the treatment. He is a co-author of all the most used measures of PTSD diagnostic status and symptom severity and regularly conducts research on the best methods to assess PTSD and symptom change. He has held funding simultaneously from both federal and non-federal agencies and has published over 300 peer-reviewed scientific articles. Dr. Marx is the recipient of the Robert L. Laufer Memorial Award for Outstanding Scientific Achievement from the International Society for Traumatic Stress Studies and an Award for Outstanding Scientific Contributions from Division 56 (Trauma Psychology) of the American Psychological Association.`,
      imageUrl: "/assets/Marx.JPG",
    },
  ];

  return (
    <div className="min-h-screen py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto space-y-12">
          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">Treatment Authors</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Meet the developers of Written Exposure Therapy, leading researchers in trauma psychology and PTSD treatment
            </p>
          </div>

          {/* Author Cards */}
          <div className="space-y-8">
            {authors.map((author, index) => (
              <Card key={index} className="overflow-hidden bg-card/50">
                <CardContent className="p-6 sm:p-8">
                  <div className="flex flex-col md:flex-row gap-8 items-start">
                    {/* Image Section - Portrait Rectangle */}
                    <div className="w-full md:w-64 flex-shrink-0">
                      <div className="relative aspect-[3/4] w-full overflow-hidden rounded-xl border bg-muted shadow-sm">
                        <img
                          src={author.imageUrl}
                          alt={author.name}
                          className="absolute inset-0 h-full w-full object-cover object-top"
                        />
                      </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 space-y-4">
                      <div>
                        <h3 className="text-2xl font-bold">{author.name}</h3>
                        <p className="text-primary font-medium text-lg leading-snug">
                          {author.credentials}
                        </p>
                      </div>
                      <div className="space-y-4 text-muted-foreground leading-relaxed">
                        {author.bio.split("\n\n").map((paragraph, i) => (
                          <p key={i}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Training CTA */}
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl p-8 text-center space-y-4 border border-primary/20">
            <h2 className="text-2xl sm:text-3xl font-bold">
              More Resources
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Clinicians seeking training in Written Exposure Therapy can explore
              available resources and continuing education opportunities.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button size="lg" asChild>
                <Link to="/resources">View Training Resources</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link to="/contact" className="flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;