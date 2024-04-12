import { Button } from "@/components/ui/button";
import { ArrowRight, Pen } from "lucide-react";
import Link from "next/link";
import React from "react";

const MarketingPage = () => {
  return (
    <div className="flex items-center justify-center flex-col">
      <div className=" max-w-2xl md:max-w-4xl flex items-center justify-center flex-col">
        <div className="flex mb-4 items-center border shadow-lg px-5 py-2 bg-sky-200 rounded-full uppercase text-sm">
          <Pen className="h-6 w-6 mr-2" />
          Where Words Come to Life
        </div>
        <h1 className="text-3xl md:text-5xl text-center text-neutral-800 mb-6 font-bold">
          Unlock Your Storytelling Potential with{" "}
          <span className="text-sky-800">ScriptEase</span>
        </h1>
      </div>
      <div className="text-sm md:text-xl text-neutral-400 mt-4 max-w-sm md:max-w-2xl text-center mx-auto">
        ScriptEase makes structuring and writing stories a breeze. Our intuitive
        tools empower you to seamlessly craft narratives, whether you&apos;re a
        seasoned author or just starting out. Say goodbye to writer&apos;s block
        and hello to effortless storytelling with ScriptEase.
      </div>
      <Button className="mt-6" size="lg" asChild>
        <Link href="/sign-up">
          Try ScriptEase
          <ArrowRight className="h-4 w-4 ml-2" />
        </Link>
      </Button>
    </div>
  );
};

export default MarketingPage;
