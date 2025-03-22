import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import { GoShare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";

function Model({ setModelopen }) {
  return (
    <div className="h-screen px-10 bg-white absolute top-0 right-0 w-full z-50">
      <div className="flex justify-between mt-5">
        <IoChevronBackOutline
          onClick={() => setModelopen(false)}
          className="bg-slate-200 size-6 rounded-xl"
        />
        <div className="flex items-center pr-10 underline gap-2">
          <span className="flex items-center gap-x-2 font-medium">
            <GoShare className="size-5" />
            Share
          </span>
          <span className=" flex items-center gap-x-2 font-medium">
            <CiHeart className="size-5" />
            Save
          </span>
        </div>     
      </div>
      <div>
        <div className="font-semibold text-2xl item-center mt-10">Living room</div>
        <p className="mt-1 text-sm text-gray-500">Sound system.TV</p>
      </div>
      <div className="h-[80vh] space-y-5">
        <img className="h-full w-full" src="https://a0.muscache.com/im/pictures/miso/Hosting-1208478853883571250/original/a12ce129-0944-4226-b279-0cc7c14642a0.jpeg?im_w=1200" alt="" />
        <img className="h-full w-full" src="https://a0.muscache.com/im/pictures/miso/Hosting-1208478853883571250/original/6279d0b6-72f1-4641-a840-bc65d2d2a2a1.jpeg?im_w=720" alt="" />
        <img className="h-full w-full" src="https://a0.muscache.com/im/pictures/miso/Hosting-1208478853883571250/original/e54e7401-f9da-4380-b9f8-abf2071a60fa.jpeg?im_w=720" alt="" />
      </div>
    </div>
  );
}

export default Model;
