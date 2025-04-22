import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { BrainCircuit } from 'lucide-react'

const certificate1 = [
  { certificate: "Basic of python(Udemy 2022)"},
  { certificate: "Data vizualization using python(EDX 2021)"},
  { certificate: "Data Scientist(IBM 2021)"},
]

export default function Certificate() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Certificate</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {certificate1.map((edu, index) => (
            <div key={index} className="flex items-start space-x-4">
              <BrainCircuit className="h-6 w-6 mt-1" aria-hidden="true" />
              <div>
                <h3 className="text-lg font-semibold">{edu.certificate}</h3>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}