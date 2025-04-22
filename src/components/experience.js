import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Briefcase, Calendar } from 'lucide-react'

const jobs = [
  {
    title: "Associate Software Engineer",
    company: "Cross ML pvt ltd",
    date: "Current",
    duties: [
      "Regularly updated and maintained the Demo e-commerce application, ensuring its smooth operation and timely resolution of any issues.",
      "Utilized Trello to manage tasks and project workflow, collaborating with team members to prioritize and track progress on development tasks.",
      "Developed new features and resolved bugs as assigned in Trello cards, adhering to project timelines and quality standards.",
      "Pushed code changes to the appropriate Git branches for development, and production environments. Utilized Docker to containerize applications and deploy code to servers."
    ]
  },
  {
    title: "Software Engineer",
    company: "Sevya it pvt ltd",
    date: "Previous",
    duties: [
      "Created Flask RESTful APIs to facilitate communication between the frontend and backend of the application.",
      "Developed and deployed an AWS Lambda function to send custom emails to customers for promotional offers, utilizing AWS SES (Simple Email Service) for email delivery.",
      "Created a Python Script to fetch real-time cryptocurrency data from external APIs, such as CoinGecko or CoinMarketCap and save it to mongoDB."
    ]
  }
]

export default function Experience() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Work Experience</CardTitle>
      </CardHeader>
      <CardContent>
        <ScrollArea className="h-[600px] pr-4">
          <div className="space-y-8">
            {jobs.map((job, index) => (
              <div key={index} className="relative pl-6 border-l-2 border-muted">
                <div className="absolute left-[-9px] top-2 w-4 h-4 bg-background border-2 border-primary rounded-full"></div>
                <h3 className="text-xl font-semibold">{job.title}</h3>
                <CardDescription className="flex items-center gap-2">
                  <Briefcase className="h-4 w-4" aria-hidden="true" />
                  {job.company}
                </CardDescription>
                <CardDescription className="flex items-center gap-2 mb-2">
                  <Calendar className="h-4 w-4" aria-hidden="true" />
                  {job.date}
                </CardDescription>
                <ul className="list-disc list-inside space-y-1">
                  {job.duties.map((duty, dutyIndex) => (
                    <li key={dutyIndex}>{duty}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}