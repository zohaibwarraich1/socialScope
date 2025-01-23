import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    price: "$29",
    description: "Perfect for small businesses and individuals",
    features: [
      "5 social profiles",
      "50 scheduled posts",
      "Basic analytics",
      "24/7 support",
    ],
  },
  {
    name: "Professional",
    price: "$99",
    description: "Ideal for growing businesses and teams",
    features: [
      "15 social profiles",
      "Unlimited scheduled posts",
      "Advanced analytics",
      "Team collaboration",
      "Custom reports",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "For large organizations with complex needs",
    features: [
      "Unlimited social profiles",
      "Unlimited scheduled posts",
      "Advanced analytics and AI insights",
      "Dedicated account manager",
      "API access",
      "Custom integrations",
    ],
  },
];

export default function Pricing() {
  return (
    <main className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">
            Simple, Transparent Pricing
          </h1>
          <p className="text-xl text-muted-foreground">
            Choose the plan thats right for your business
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <Card key={plan.name} className="flex flex-col">
              <CardHeader>
                <CardTitle>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <ul className="space-y-2">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-2" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <button className="w-full">
                  {plan.name === "Enterprise" ? "Contact Sales" : "Get Started"}
                </button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold mb-4">
            Not sure which plan is right for you?
          </h2>
          <button variant="outline" size="lg">
            Schedule a Demo
          </button>
        </div>
      </div>
    </main>
  );
}
