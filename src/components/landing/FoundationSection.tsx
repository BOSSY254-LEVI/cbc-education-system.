const steps = [
  {
    number: '01',
    title: 'Set Clear Outcomes',
    description: 'Every lesson is mapped to specific competencies, so students know exactly what they need to master.',
  },
  {
    number: '02',
    title: 'Personalized Pace',
    description: 'Students move forward when they prove mastery, ensuring no one is left behind or held back.',
  },
  {
    number: '03',
    title: 'Evidence-Based Growth',
    description: 'Real-world projects and assessments provide a rich portfolio of what a student can actually do.',
  },
];

export default function FoundationSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Foundation of Success
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Our CBE system shifts the focus from "time spent in class" to "demonstrated mastery of skills."
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="text-center md:text-left">
              <div className="text-6xl font-bold text-muted/50 mb-4">{step.number}</div>
              <h3 className="text-xl font-bold text-primary mb-3">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
