import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const GetStartedFree = () => {
  return (
    <>
      <div className="flex justify-center items-center flex-col border-b">
        <div className="text-4xl xl:text-5xl font-medium  text-center">
          Free forever
        </div>
        <div className="py-4 xl:w-1/3  text-center px-10">
          Clair is and will always remain free for you and your team to
          collaborate
        </div>
        <div className="text-sky-500 hover:underline hover:cursor-pointer">
          <Link href="/dashboard" className="flex items-center gap-1">
            Get started <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <Image
          src="/assets/free.svg"
          alt="Free section image"
          width={1000}
          height={1000}
          className="w-80 pt-10"
        />
      </div>
    </>
  );
};

export default GetStartedFree;
