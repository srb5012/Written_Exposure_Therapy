/**
 * File: src/pages/WETTraining.tsx
 * Purpose: Page describing WET Training, Provider Status, Workshops, and Consultation.
 */

import { CheckCircle2, Calendar, DollarSign, Video } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const WETTraining = () => {
  return (
    <div className="min-h-screen py-12 sm:py-16 text-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-12">

          {/* Header */}
          <div className="text-center space-y-4">
            <h1 className="text-4xl sm:text-5xl font-bold">WET Training</h1>
            <p className="text-xl text-muted-foreground">
              Achieving Provider Status, Workshops, and Consultation
            </p>
          </div>

          {/* Achieving Provider Status */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">
                Achieving Provider Status
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                To achieve WET Provider Status, you must meet the following requirements:
              </p>

              <div className="grid gap-4">
                {[
                  "Licensed mental health provider",
                  "Attendance of a WET workshop conducted by one of the treatment developers or an approved WET trainer.",
                  "Attendance at consultation calls (minimum of 8 sessions) conducted by one of the treatment developers or an approved WET consultant",
                  "Completion of two cases during the consultation period that have been approved by the consultant as being delivered with adherence to the protocol"
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-4 p-4 bg-secondary/20 rounded-lg"
                  >
                    <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Workshops */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">Workshops</CardTitle>
            </CardHeader>

            <CardContent className="space-y-8">

              {/* Upcoming Workshops */}
              <div className="space-y-6">
                <h3 className="text-xl font-semibold">Upcoming Workshops</h3>

                {/* Workshop 1 */}
                <div className="p-4 border rounded-lg bg-secondary/10 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">April 17, 2026</span>
                  </div>

                  <p className="font-semibold">
                    Written Exposure Therapy: Foundational Training (full day)
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Presented by Dr. Denise Sloan
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Location: University of Vermont
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Contact: Dr. Matthew Price (matthew.price@uvm.edu)
                  </p>
                </div>

                {/* Workshop 2 */}
                <div className="p-4 border rounded-lg bg-secondary/10 space-y-2">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-5 w-5 text-primary" />
                    <span className="font-medium">July 10, 2026</span>
                  </div>

                  <p className="font-semibold">
                    Written Exposure Therapy: Foundational Training (full day)
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Presented by Dr. Denise Sloan
                  </p>

                  <p className="text-sm text-muted-foreground">
                    Location (virtual): Family and Children Services of Oklahoma
                  </p>

                  <p className="text-sm text-muted-foreground">
  Contact:{" "}
  <a
    href="https://www.fcsok.org/services/clinical-training/"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline hover:opacity-80"
  >
    https://www.fcsok.org/services/clinical-training/
  </a>
</p>
                </div>
              </div>

              {/* On Demand Workshop */}
              <div className="p-4 border rounded-lg bg-secondary/5">
                <h3 className="font-semibold mb-2 text-lg">
                  WET Workshop on Demand
                </h3>

                <p className="text-sm text-muted-foreground">
  Written Exposure Therapy (WET) for PTSD:{" "}
  <a
    href="https://www.pesi.com/item/written-exposure-therapy-wet-ptsd-evidencebased-treatment-reduced-dropouts-improved-outcomes-sessions-144320"
    target="_blank"
    rel="noopener noreferrer"
    className="text-primary underline hover:opacity-80"
  >
    A Brief Evidence-Based Treatment for Reduced Dropouts...
  </a>
</p>
              </div>
            </CardContent>
          </Card>

          {/* Consultation */}
          <Card className="bg-gradient-to-br from-primary/5 to-accent/10 border-primary/20">
            <CardHeader>
              <CardTitle className="text-2xl sm:text-3xl">
                Consultation
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">

              <p className="text-muted-foreground">
                Consultation is a core requirement for becoming a rostered WET
                Provider. As clinicians begin implementing WET, consultation
                offers structured support to address clinical questions and
                ensure adherence to the protocol. Through guidance and feedback
                from experienced WET Consultants, clinicians build confidence
                and competence in delivering WET. Consultation is offered in
                both individual and group formats, each conducted weekly via
                video conference and led by a licensed mental health clinician
                with advanced training and extensive experience in WET. The
                following section outlines the components and typical structure
                of WET consultation.
              </p>

              {/* Included */}
              <div className="space-y-4">
                <h3 className="font-semibold text-lg">
                  Included with WET Consultation
                </h3>

                <ul className="grid sm:grid-cols-2 gap-3 text-muted-foreground">
                  {[
                    "Assignment of an approved WET Consultant",
                    "Initial coordination of consultant and clinician(s)",
                    "Up to 60 minutes of live consultation each week",
                    "Administration of consultation documentation",
                    "Documentation processing and updates to clinician status as outlined on the Achieving Provider Status webpage"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Individual Consultation */}
              <div className="p-4 border rounded-lg bg-secondary/10 space-y-2">
                <h3 className="font-semibold text-lg">
                  Individual WET Consultation Structure
                </h3>

                <p className="text-sm text-muted-foreground">
                  Number of Sessions Offered: 8–10
                </p>

                <p className="text-sm text-muted-foreground">
                  Attendance Policy: For provider status, clinicians must attend
                  at least 8 sessions
                </p>

                <p className="text-sm text-muted-foreground">
                  Session duration: 30–45 minutes
                </p>

                <p className="text-sm text-muted-foreground">
                  Time between each session: Approximately 7 days
                </p>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Video className="h-4 w-4 text-primary" />
                  Delivery method: Video conference platform
                </p>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Total Cost: $800–$1000 (or $100 per session)
                </p>
              </div>

              {/* Group Consultation */}
              <div className="p-4 border rounded-lg bg-secondary/10 space-y-2">
                <h3 className="font-semibold text-lg">
                  Group WET Consultation Structure
                </h3>

                <p className="text-sm text-muted-foreground">
                  Size (number of clinicians): 3–6
                </p>

                <p className="text-sm text-muted-foreground">
                  Number of Sessions Offered: 16
                </p>

                <p className="text-sm text-muted-foreground">
                  Attendance Policy: For provider status, clinicians must attend
                  a minimum of 12 sessions
                </p>

                <p className="text-sm text-muted-foreground">
                  Session duration: 60 minutes
                </p>

                <p className="text-sm text-muted-foreground">
                  Time between each session: Approximately 7 days
                </p>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <Video className="h-4 w-4 text-primary" />
                  Delivery method: Video conference platform
                </p>

                <p className="text-sm text-muted-foreground flex items-center gap-2">
                  <DollarSign className="h-4 w-4 text-primary" />
                  Total Cost: $800
                </p>
              </div>

              {/* Eligibility */}
              <div className="pt-4 border-t">
                <h3 className="font-semibold text-lg mb-2">
                  Eligibility and Payment Information
                </h3>

                <p className="text-sm text-muted-foreground">
                  Licensed mental health clinicians who have completed a WET
                  workshop are eligible for WET consultation services.
                  Provisionally licensed providers who are under the direct
                  supervision of someone trained in WET can also receive WET
                  consultation services, but they cannot be placed on the
                  roster until they have become fully licensed.
                </p>
              </div>

            </CardContent>
          </Card>

        </div>
      </div>
    </div>
  );
};

export default WETTraining;