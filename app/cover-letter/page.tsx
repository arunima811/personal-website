import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent } from "@/components/ui/card"

export default function CoverLetterPage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Cover Letter</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <Separator className="my-6" />

      <Card className="p-6 md:p-8">
        <CardContent className="p-0 space-y-6">
          {/* Header */}
          <div className="space-y-2">
            <h2 className="text-2xl font-bold">Arunima Shukla</h2>
            <p className="text-muted-foreground">Software and Data Engineer</p>
            <div className="text-sm text-muted-foreground">
              <p>New York, NY</p>
              <p>shukla.arunima0811@gmail.com • +1-812-606-9650</p>
            </div>
          </div>

          <Separator />

          {/* Date and Recipient */}
          <div className="space-y-4">
            <p>[Current Date]</p>

            <div>
              <p>[Recipient Name]</p>
              <p>[Company Name]</p>
              <p>[Company Address]</p>
              <p>[City, State ZIP]</p>
            </div>
          </div>

          {/* Greeting */}
          <p>Dear [Recipient Name],</p>

          {/* Body */}
          <div className="space-y-4">
            <p>
              I am writing to express my interest in the [Position Title] role at [Company Name]. With experience in
              software development, data engineering, and machine learning, I am excited about the opportunity to
              contribute to your team's success.
            </p>

            <p>
              Throughout my career at Goldman Sachs and Dell-EMC, I have focused on building resilient data pipelines,
              optimizing database performance, and developing scalable software solutions. My experience spans from
              migrating petabyte-scale databases to implementing high-throughput event processing systems.
            </p>

            <p>
              What particularly draws me to [Company Name] is your commitment to [specific company value or
              achievement]. I believe my skills in distributed systems, data engineering, and machine learning align
              perfectly with your needs for this role.
            </p>

            <p>Some of my key accomplishments include:</p>

            <ul className="list-disc pl-5 space-y-2">
              <li>Improving error analysis and resiliency by 30% for data orchestration pipelines at Goldman Sachs</li>
              <li>Leading the migration of a 2.8 PB database to AWS S3, saving millions in vendor payments</li>
              <li>
                Upgrading ElasticSearch data-store containing 5+ TB of critical order data while ensuring zero downtime
              </li>
              <li>Developing real-time anomaly detection systems using machine learning techniques</li>
            </ul>

            <p>
              I am particularly skilled in Python, Java, Kafka, and Elasticsearch, with experience in both cloud
              infrastructure and big data systems. My approach to development is pragmatic – I focus on delivering value
              while maintaining high standards for code quality, performance, and scalability.
            </p>

            <p>
              I would welcome the opportunity to discuss how my experience and skills can benefit [Company Name]. Thank
              you for considering my application. I look forward to the possibility of working with your team.
            </p>
          </div>

          {/* Closing */}
          <div>
            <p>Sincerely,</p>
            <p className="font-medium mt-4">Arunima Shukla</p>
          </div>
        </CardContent>
      </Card>

      <div className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">Customization Notes</h2>
        <p className="text-muted-foreground">
          This cover letter template is designed to be customized for specific job applications. Replace the placeholder
          text in brackets with relevant information for each application.
        </p>
        <div className="space-y-2">
          <h3 className="font-medium">Key elements to customize:</h3>
          <ul className="list-disc pl-5 space-y-1 text-muted-foreground">
            <li>Current date</li>
            <li>Recipient's name and company details</li>
            <li>Position title</li>
            <li>Company-specific information (values, achievements, mission)</li>
            <li>Relevant skills that match the job requirements</li>
            <li>Specific accomplishments that relate to the position</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
