import { Link } from 'react-router-dom';
import { Users, BookOpen, ClipboardCheck } from 'lucide-react';

const workflows = [
  {
    icon: Users,
    title: 'Identify Goals',
    description: 'Students view their competency map and select their next learning target.',
    link: { text: 'View Map', href: '/curriculum' },
    color: 'border-t-emerald-500',
  },
  {
    icon: BookOpen,
    title: 'Engage & Submit',
    description: 'Access resources and upload evidence of mastery directly to the teacher.',
    link: { text: 'Upload Evidence', href: '/upload' },
    color: 'border-t-emerald-500',
  },
  {
    icon: ClipboardCheck,
    title: 'Review Mastery',
    description: 'Teachers evaluate evidence against rubrics and update progress heatmaps.',
    link: { text: 'See Progress', href: '/progress' },
    color: 'border-t-emerald-500',
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            The Nonea Workflow
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Seamless collaboration between students, teachers, and parents for better results.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {workflows.map((workflow, index) => {
            const Icon = workflow.icon;
            return (
              <div
                key={index}
                className={`bg-card rounded-xl p-8 border-t-4 ${workflow.color} shadow-sm hover:shadow-md transition-shadow`}
              >
                <Icon className="w-8 h-8 text-emerald-600 mb-6" />
                <h3 className="text-xl font-bold text-foreground mb-3">{workflow.title}</h3>
                <p className="text-muted-foreground mb-6">{workflow.description}</p>
                <Link
                  to={workflow.link.href}
                  className="text-primary font-medium hover:underline"
                >
                  {workflow.link.text}
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
