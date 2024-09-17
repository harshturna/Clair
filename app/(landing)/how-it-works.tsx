import { Box, Copy, PaintBucket } from "lucide-react";
import Image from "next/image";

const features = [
  {
    name: "Step 1",
    description: "Start by creating your board",
    icon: Box,
  },
  {
    name: "Step 2",
    description: "Copy the board link and share with your team",
    icon: Copy,
  },
  {
    name: "Step 3",
    description:
      "Let those creative juices flow and visualize your ideas with realtime communication between you and your team",
    icon: PaintBucket,
  },
];

export default function HowItWorks() {
  return (
    <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-sky-500">
                Built for ease
              </h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                How it works
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Clair is designed to be fast, easy and a joy to work with
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
                {features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon
                        aria-hidden="true"
                        className="absolute left-1 top-1 h-5 w-5 text-sky-500"
                      />
                      {feature.name}
                    </dt>{" "}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <Image
            alt="Product screenshot"
            src="/assets/how-it-works.png"
            width={2432}
            height={1442}
            className="w-[48rem] max-w-none rounded-xl shadow-sm ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0 mt-6"
          />
        </div>
      </div>
    </div>
  );
}
