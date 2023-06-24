import React from "react";
import Image from 'next/image'

export default function Task2() {
  return (
    <>
      <div className="bg-gray-300 grid place-items-center p-10">
      <p className="md:text-xl">This is Second Task</p>
        <div className="bg-white grid place-items-center grid-cols-3 p-5 rounded-2xl">
          <div className="col-span-2 space-y-4">
            <div className="text-gray-400 text-2xl font-semibold">Title content</div>
            <div className="text-2xl font-bold font-[poppins] text-[30px]">Top 15 metaverse coin with a unit price of under $1</div>
            <div className="text-gray-400 text-xl font-bold">Today 2 h min read</div>
          </div>
          <div className="col-span-1">
            <Image
              src="/dog.jpg"
              alt=""
              width="100"
              height="100"
              className="rounded-2xl h-40 w-auto"
            />
          </div>
        </div>
      </div>
    </>
  );
}
