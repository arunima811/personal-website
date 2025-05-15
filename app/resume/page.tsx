import Link from "next/link"
import { Download } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function ResumePage() {
  return (
    <div className="container max-w-4xl py-12">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-4xl font-bold">Resume</h1>
        <Button variant="outline" className="flex items-center gap-2">
          <Download className="h-4 w-4" />
          Download PDF
        </Button>
      </div>
      <Separator className="my-6" />

      {/* Personal Information */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold">Arunima Shukla</h2>
        <p className="text-xl text-muted-foreground">Software and Data Engineer</p>
        <div className="mt-2 flex flex-wrap gap-2 text-sm text-muted-foreground">
          <span>New York, NY</span>
          <span>•</span>
          <Link href="mailto:shukla.arunima0811@gmail.com" className="hover:text-primary">
            shukla.arunima0811@gmail.com
          </Link>
          <span>•</span>
          <Link href="tel:+18126069650" className="hover:text-primary">
            +1-812-606-9650
          </Link>
          <span>•</span>
          <Link href="https://linkedin.com" className="hover:text-primary">
            LinkedIn
          </Link>
          <span>•</span>
          <Link href="https://github.com" className="hover:text-primary">
            GitHub
          </Link>
        </div>
      </div>

      {/* Experience */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Experience</h2>

        <Card className="mb-4">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle>Software Development Engineer II</CardTitle>
              <CardDescription>March 2023 - Present</CardDescription>
            </div>
            <CardDescription className="text-base font-medium text-foreground">
              Goldman Sachs, New York, NY
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Improved error analysis and resiliency by 30% by on-boarding two data orchestration pipeline stages;
                facilitating daily market risk calculation of over 60M trading positions and 50+ trade attributes into
                risk calculation models
              </li>
              <li>
                Designed and directed the database migration of internal object datastore containing 2.8 Peta-Bytes of
                data to AWS S3; Saving millions in vendor payments
              </li>
              <li>
                Improved user experience and performance (by 5%) of GS Bank's budgeting app by decoupling heavy
                projection calculations from the user API with Kafka; lead to no user request loss and establishment of
                end-to-end data pipeline
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card className="mb-4">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle>Software Development Engineer</CardTitle>
              <CardDescription>January 2019 - August 2021</CardDescription>
            </div>
            <CardDescription className="text-base font-medium text-foreground">
              Dell-EMC, Bangalore, India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Infrastructure, Data Management, Data Pipelining, and Productization</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground mb-4">
              <li>
                Led the upgrade of ElasticSearch data-store containing 5+ TB of critical order data including status,
                sanctions, pricing and customer information, in a rolling manner ensuring no outage. This DB is used as
                a primary real-time data source by 30+ order-management and order-experience services.
              </li>
              <li>
                Improved schema structure, security, resiliency, caching, and performance of the legacy database by
                tuning memory parameters, sharding and indexing; while ensuring zero data loss in the migration of over
                3.5 years of order and customer data.
              </li>
              <li>
                Led the Harshicorp Vault implementation drastically improving the security posture by reducing the
                vulnerability by over 60%.
              </li>
              <li>
                Dockerized 30+ Scala subscribers over Kubernetes (PKS) and modernized 10+ cloud native Spring Boot
                microservices over to PCF, saving more than 5 developer's hours per deployment activity.
              </li>
              <li>
                Performed capacity planning for holiday sales and provided support for 30+ processes having multiple
                subscribers-responsible for order-data flow of 5 types of business models. Managed end-to-end
                coordination with teams, log analysis, and business requirement clarifications.
              </li>
            </ul>

            <h3 className="font-semibold mb-2">
              Backend Application Development, Performance Optimization, and Data Visualization
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Automated high throughput event flow (100K+ events/hour) with pub-sub based Spring Boot applications
                using RabbitMQ and IBM MQ based messaging infrastructure and rewrote the end-to-end flow into
                microservices.
              </li>
              <li>
                Developed a React and Spring Boot based tool to analyze developers' progress in production release by
                analyzing Gitlab commit history.
              </li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle>Data Engineering Intern</CardTitle>
              <CardDescription>May 2018 - July 2018</CardDescription>
            </div>
            <CardDescription className="text-base font-medium text-foreground">
              Niyo (Finew Solutions), Bangalore, India
            </CardDescription>
          </CardHeader>
          <CardContent>
            <h3 className="font-semibold mb-2">Data pre-processing, Analytics, Visualization, and Pipelining</h3>
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                Designed and developed a realtime anomaly detection dashboard with candlestick visualizations by
                analysing application access logs. Used Apache Spark and ElasticSearch to streamline the service to
                ingest over 70GB of data from AWS based deployment infrastructure.
              </li>
              <li>
                Experimented with ARIMA, Random Forest, SVM and XG-Boost models for high accuracy and low latency.
                Enabled realtime anomaly visualizations and alerts to reduce the error detection and mitigation process
                time.
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Education */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Education</h2>

        <Card className="mb-4">
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle>M.S. in Data Science</CardTitle>
              <CardDescription>2021 - 2022</CardDescription>
            </div>
            <CardDescription className="text-base font-medium text-foreground">
              Indiana University, Bloomington, IN
            </CardDescription>
          </CardHeader>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-2">
              <CardTitle>B.Tech in Computer Science and Engineering, Minor in Economics</CardTitle>
              <CardDescription>Graduated May 2019</CardDescription>
            </div>
            <CardDescription className="text-base font-medium text-foreground">
              Shiv Nadar University, India
            </CardDescription>
          </CardHeader>
        </Card>
      </section>

      {/* Skills */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Technical Skills</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Distributed Systems</Badge>
              <Badge>Platform and Infrastructure</Badge>
              <Badge>Algorithm</Badge>
              <Badge>Machine Learning</Badge>
              <Badge>Big-Data Systems</Badge>
              <Badge>Cloud</Badge>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-base">Technologies</CardTitle>
            </CardHeader>
            <CardContent className="flex flex-wrap gap-2">
              <Badge>Python</Badge>
              <Badge>Java</Badge>
              <Badge>Kafka</Badge>
              <Badge>Elasticsearch</Badge>
              <Badge>RabbitMQ</Badge>
              <Badge>Scala</Badge>
              <Badge>PySpark</Badge>
              <Badge>Linux</Badge>
              <Badge>Git</Badge>
              <Badge>Pytorch</Badge>
              <Badge>Tensorflow</Badge>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Achievements */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Achievements</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>Scholar - Grace Hopper Conference'22</li>
              <li>President - Data Science Club at Indiana University</li>
              <li>Open-Source Mentor GHC'21</li>
              <li>Winner - Dell Hack-to-Hire Machine Learning Hackathon</li>
              <li>Full Academic scholarship by Shiv-Nadar Foundation for undergrad</li>
            </ul>
          </CardContent>
        </Card>
      </section>

      {/* Publications */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Publications</h2>
        <Card>
          <CardContent className="p-6">
            <p className="text-muted-foreground">
              Arunima Shukla, Aryan Aggrawal. 2016. National Conference Channelizing Potential Of Indian Youth In Nation
              Building: Transforming Dreams Into Reality at G.B Pant University Of Agriculture & Technology, Pantnagar
            </p>
          </CardContent>
        </Card>
      </section>

      {/* Projects */}
      <section>
        <h2 className="text-xl font-semibold mb-4">Projects</h2>
        <Card>
          <CardContent className="p-6">
            <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
              <li>
                LSTM-based RL model to simulate the working of Grid and Place brain cells for navigation in a 2-D
                environment, using human test subjects data as opposed to state-of-the-art artificial rat trajectories.
              </li>
              <li>
                Git | File-based, cloud-agnostic, Key-Value store (from scratch), utilizing Map-Reduce for efficient
                search and storage. One-click deploy on GCP; using Google Cloud functions
              </li>
            </ul>
          </CardContent>
        </Card>
      </section>
    </div>
  )
}
