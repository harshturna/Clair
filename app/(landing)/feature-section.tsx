"use client";

import Image from "next/image";
import { useRef, useState } from "react";

const tabs = [
  {
    text: "20+",
    subtext: "Prebuilt elements",
  },
  {
    text: "5+",
    subtext: "Unique features",
  },
  {
    text: "∞",
    subtext: "Ways to use",
  },

  {
    header: "Brainstorming",
    subheading:
      "Facilitate remote team ideation sessions with real-time visual collaboration.",

    image: "/assets/brainstorm.svg",
  },

  {
    header: "UX Design",
    subheading:
      "Create and iterate on wireframes and user flows collaboratively with stakeholders.",
    image: "/assets/ux-design.svg",
  },

  {
    images: [
      {
        title: "Visualize your ideas instantly",
        picture: "/assets/carousel-1.svg",
      },
      {
        title: "Accelerate workflow with ready-made elements",
        picture: "/assets/carousel-2.svg",
      },
      {
        title: "Work together seamlessly from anywhere",
        picture: "/assets/carousel-3.svg",
      },
      {
        title: "Track changes and revert changes with ease",
        picture: "/assets/carousel-4.svg",
      },
    ],
  },
  {
    title: "Project planning",
    description: (
      <div className="md:mt-6">
        Visualize project timelines, tasks, and dependencies using interactive
        diagrams and icons.
      </div>
    ),
  },
  {
    title: "Strategic Mapping",
    description: (
      <div className="md:mt-6">
        Develop and refine business strategies using shared mind maps and
        flowcharts.
      </div>
    ),
  },
  {
    title: "Education",
    description: (
      <div className="md:mt-6">
        Enhance online learning through interactive visual explanations and
        group exercises.
      </div>
    ),
  },
];

const FeatureSection = () => {
  const ref = useRef(null);

  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handleDotClick = (index: any) => {
    setActiveImageIndex(index);
  };

  return (
    <>
      <div className="pt-20  xl:pt-24 flex justify-center items-center flex-col ">
        <div className="text-3xl w-3/4 xl:text-5xl font-medium xl:w-1/2 text-center">
          Supercharge Your Collaboration
        </div>
        <div className="py-4 px-10  xl:w-1/2 2xl:w-1/3 md:w-2/3 text-center">
          Unlock boundless creativity with powerful tools at your fingertips
        </div>
        <div className="grid grid-cols-12 md:row-span-2 gap-4 xl:gap-6 mt-8 px-8  md:px-16 xl:px-0 xl:w-3/4 2xl:w-[55%] mx-auto md:w-full">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className={`
              col-span-12
              ${
                index <= 2
                  ? "md:col-span-6 lg:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex"
                  : index <= 4
                    ? "md:col-span-6 bg-[#f6f5f4] p-6 rounded-xl flex"
                    : index === 5
                      ? " md:col-span-6  lg:col-span-8  lg:row-span-3    bg-[#f6f5f4] p-6 rounded-xl "
                      : index > 5
                        ? "col-span-12 lg:col-span-4  md:col-span-4 bg-[#f6f5f4] p-6 rounded-xl flex-col "
                        : "l"
              }
            `}
            >
              {index <= 2 ? (
                <div className="flex flex-col">
                  <div className=" text-5xl font-medium text-sky-600">
                    {tab.text}
                  </div>
                  <div className="text-sm">{tab.subtext}</div>
                </div>
              ) : index <= 4 ? (
                <div>
                  <div className="text-2xl font-medium">{tab.header}</div>
                  <div className="text-sm mt-2">{tab.subheading}</div>
                  <div className="flex justify-center items-center flex-col">
                    <Image
                      src={tab.image || ""}
                      width={1025}
                      height={500}
                      alt="logo"
                      className="w-full  rounded-xl p-10 xl:p-20"
                    />
                  </div>
                </div>
              ) : index === 5 ? (
                <>
                  {tab.images && (
                    <div className="flex justify-center items-center flex-col ">
                      <Image
                        src={tab.images[activeImageIndex].picture}
                        alt={`${tab.images[activeImageIndex].title} Image`}
                        width={1025}
                        height={500}
                        className="w-full rounded-xl "
                      />

                      <div>
                        <div className="text-xl font-medium mt-10 md:mt-0  pb-4">
                          {tab.images[activeImageIndex].title}
                        </div>
                      </div>

                      <div className="flex space-x-2 xl:space-x-6 xl:mt-10">
                        {tab.images.map((image, index) => (
                          <div
                            key={index}
                            onClick={() => handleDotClick(index)}
                            className={`${
                              index === activeImageIndex
                                ? "p-2 rounded-full bg-green-400 "
                                : "  p-2 rounded-full bg-blue-400"
                            }  `}
                          ></div>
                        ))}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                index > 5 && (
                  <>
                    <div className="text-xl font-normal ">{tab.title}</div>
                    <div className="text-sm font-normal mt-10 md:mt-0  pb-2">
                      {tab.description}
                    </div>
                  </>
                )
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default FeatureSection;
