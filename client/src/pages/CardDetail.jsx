import { useState, useEffect } from "react";
import Layout from "../components/Layout";
import { GoShare } from "react-icons/go";
import { CiHeart } from "react-icons/ci";
import { useParams } from "react-router-dom";
import products from "../data/CardData";
import Model from "../utils/Model";
import { FaStar } from "react-icons/fa6";
import { TbBeachOff } from "react-icons/tb";
import { PiWind } from "react-icons/pi";
import { GoKey } from "react-icons/go";
import { MdKeyboardArrowDown } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'

export default function CardDetail() {
  const [data, setData] = useState({});
  const { id } = useParams();
  const [isModelopen, setModelopen] = useState(false);

  useEffect(() => {
    const product = products.find((item) => item.id == id);
    setData(product);
  }, [id]);
  //increment decrement
  const [counts, setCounts] = useState({
    adults: 1,
    children: 0,
    infants: 0,
    pets: 0,
  });
  const handleIncrement = (type) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (type === "adults" && prevCounts.adults < 2) {
        newCounts.adults++;
        if (newCounts.children > newCounts.adults) newCounts.children = newCounts.adults;
      } else if (type === "children" && prevCounts.children < prevCounts.adults) {
        newCounts.children++;
      } else if (type === "infants" && prevCounts.infants < 5) {
        newCounts.infants++;
      }
      return newCounts;
    });
  };

  const handleDecrement = (type) => {
    setCounts((prevCounts) => {
      const newCounts = { ...prevCounts };
      if (type === "adults" && prevCounts.adults > 1) {
        newCounts.adults--;
        if (newCounts.children > newCounts.adults) newCounts.children = newCounts.adults;
      } else if (type === "children" && prevCounts.children > 0) {
        newCounts.children--;
      } else if (type === "infants" && prevCounts.infants > 0) {
        newCounts.infants--;
      }
      return newCounts;
    });
  };
  return (
    <Layout>
      {isModelopen ? <Model setModelopen={setModelopen} /> : null}

      <div className="bg-white px-10">
        <div className="pt-6">
          <div className="flex justify-between">
            <h1 className="font-semibold text-2xl item-center">
              Eastbury w/ Balconies, Valley View
            </h1>
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
        </div>

        {/* Image gallery */}
        <div className="mx-auto mt-6 lg:grid lg:grid-cols-5 lg:gap-x-2 relative">
          <div
            key={data?.id}
            className="col-span-3 h-96 hidden overflow-hidden lg:block"
          >
            <img
              className="h-full w-full object-cover object-center rounded-s-xl"
              alt={data?.imgURL?.[0]}
              src={data?.imgURL?.[0]}
              id={data?.id}
            />
          </div>
          <div className="hidden h-96 lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className=" overflow-hidden">
              <img
                alt={data?.imgURL?.[1]}
                src={data?.imgURL?.[1]}
                className="h-full w-full object-cover object-center"
              />
            </div>
            <div className="overflow-hidden">
              <img
                alt={data?.imgURL?.[2]}
                src={data?.imgURL?.[2]}
                className="h-full w-full object-cover object-center"
              />
            </div>
          </div>
          <div className="hidden h-96 lg:grid lg:grid-cols-1 lg:gap-y-2">
            <div className="aspect-h-2 aspect-w-3 overflow-hidden">
              <img
                alt={data?.imgURL?.[3]}
                src={data?.imgURL?.[3]}
                className="h-full w-full object-cover object-center rounded-tr-xl"
              />
            </div>
            <div className="aspect-h-2 aspect-w-2 overflow-hidden">
              <img
                alt={data?.imgURL?.[4]}
                src={data?.imgURL?.[4]}
                className="h-full w-full object-cover object-center rounded-br-xl"
              />
            </div>
          </div>
          <div className="absolute bottom-4 right-10">
            <button onClick={() => setModelopen(true)} className=" flex items-center gap-2 bg-white text-black border px-2 py-1 rounded-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25A2.25 2.25 0 0 1 13.5 18v-2.25Z"
                />
              </svg>
              Show all photos
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="">
            <div className="flex items-center gap-x-96 w-6/12">
              <div className="leading-normal mt-6">
                <h1 className="font-semibold text-2xl item-center">Entire bungalow in Udaipur,India</h1>
                <p>12 guests•6 bedrooms•7 beds•5 bathrooms</p>
                <h2 className="flex items-center gap-1 font-medium mb-8"><FaStar className="mb-0.5" />5.0 • <span className="underline">3 reviews</span></h2>
              </div>
              <div className="border absolute px-5 top-8 right-0 w-96 bg-white rounded-xl">
                <div className="py-3">
                  <h1>₹ 22,950night</h1>
                </div>
                <div className="border rounded-xl">
                  <div className=" border-b-2 flex font-semibold ">
                    <div className="pr-20 pl-2 py-3 border-r-2 text-xs">
                      <h6 className="">CHECK-IN</h6>
                      <p>11/11/2024</p>
                    </div>
                    <div className="pr-20 pl-2 py-3 text-xs">
                      <h6>CHECKOUT</h6>
                      <p>11/16/2024</p>
                    </div>
                  </div>
                  <div>
                    <Menu as="div" className="relative ">
                      <div className="flex">
                        <MenuButton className="flex py-3 text-sm font-semibold text-gray-900 shadow-sm">
                          <div className=" text-xs pl-2 font-semibold">
                            <h2>Guests</h2>
                            <p>1 guest</p>
                          </div>
                          <div className="ml-64">
                            <MdKeyboardArrowDown className="size-6 " />
                          </div>
                        </MenuButton>
                      </div>

                      <MenuItems
                        transition
                        className="absolute right-0 z-10 mt-2 w-full px-5 origin-top-right rounded-md bg-white shadow-lg "
                      >
                        <div className="py-1">
                          <MenuItem>
                            <div className="flex py-5">
                              <div>
                                <h3 className="font-semibold">Adults</h3>
                                <p className="text-sm">Age 13-</p>
                              </div>
                              <div className="flex ml-36 gap-x-1 mt-5">
                                <button 
                                disabled={counts.adults >= 1}
                                onClick={() => handleDecrement("adults")} 
                                className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                -
                                </button>
                                <span className="text-xl">{counts.adults}</span>
                                <button
                                 disabled={counts.adults >= 2}
                                  onClick={() => handleIncrement("adults")}
                                  className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                  +
                                </button>
                              </div>
                            </div>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex py-5">
                              <div>
                                <h3 className="font-semibold">Childrens</h3>
                                <p className="text-sm">Age 2-12</p>
                              </div>
                              <div className="flex ml-32 gap-x-1 mt-5">
                                <button 
                                disabled={counts.children <= 0}
                                onClick={() => handleDecrement("Childerns")} 
                                className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                -
                                </button>
                                <span className="text-xl">{counts.children}</span>
                                <button 
                                disabled={counts.children >= counts.adults}
                                onClick={() => handleIncrement("Childrens")} 
                                className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                +
                                </button>
                              </div>
                            </div>
                          </MenuItem>
                        </div>
                        <div className="py-1">
                          <MenuItem>
                            <div className="flex py-5">
                              <div>
                                <h3 className="font-semibold">Infants</h3>
                                <p className="text-sm">Under 2</p>
                              </div>
                              <div className="flex ml-36 gap-x-1 mt-5">
                                <button
                                  disabled={counts.infants <= 0}
                                 onClick={() => handleDecrement("Infants")} 
                                 className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                 -
                                 </button>
                                <span className="text-xl">{counts.infants}</span>
                                <button 
                                disabled={counts.infants >= 5}
                                onClick={() => handleIncrement("Infants")}
                                 className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">
                                 +
                                 </button>
                              </div>
                            </div>
                          </MenuItem>
                          <MenuItem>
                            <div className="flex py-5">
                              <div>
                                <h3 className="font-semibold">Pets</h3>
                                <p className="text-sm underline">Bringing a service animal?</p>
                              </div>
                              <div className="flex ml-10 gap-x-1 mt-5">
                                <button disabled className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">-</button>
                                <span className="text-xl">{counts.pets}</span>
                                <button disabled className="border h-9 w-9 rounded-full hover:shadow-md text-2xl">+</button>
                              </div>
                            </div>
                          </MenuItem>
                        </div>
                        <div>
                          <span className="text-xs">This place has a maximum of 2 guests, not including infants. Pets aren't allowed.</span>
                        </div>
                        <div className="p-5 ml-56 underline font-semibold">
                          Close
                        </div>
                      </MenuItems>
                    </Menu>
                  </div>
                </div>
                <div className="mt-3">
                  <h5 className="text-xs">Rates</h5>
                </div>
                <div className="border text-sm rounded-xl">
                  <div className="border-b-2 pr-10 pl-2 py-3">
                    <h3 className="font-medium">Non-refundable · ₹1,30,950 total</h3>
                    <p className="text-slate-500">This reservation is non-refundable.</p>
                  </div>
                  <div className="pr-10 pl-2 py-3">
                    <h3>Refundable · ₹1,45,500 total</h3>
                    <p className="text-slate-500">Free cancellation before 3:00 pm on 10 Nov. Cancel before check-in on 11 Nov for a partial refund.</p>
                  </div>
                </div>
                <div className="my-3">
                  <button className="bg-pink-600 text-white font-semibold px-32 py-3 rounded-lg ml-3">Reserve</button>
                </div>
                <div className="my-3">
                  <h4 className="text-slate-500 text-sm ml-20">You won't be charged yet</h4>
                </div>
              </div>
            </div>
            <div className="border-t-2 border-b-2 flex items-center gap-6">
              <div className="flex items-center">
                <img src="https://a0.muscache.com/im/pictures/user/User-112321899/original/52049e1c-7ff5-4322-b386-11b61650772e.jpeg?im_w=240" alt=""
                  className="h-11 w-11 rounded-3xl"
                />
              </div>
              <div className="mt-5 mb-5">
                <h2 className="font-medium">Hosted by Megha</h2>
                <p className="text-slate-500">Superhost•2 years hosting</p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-7 mt-7">
                <div className="flex items-center">
                  <TbBeachOff className="size-7" />
                </div>
                <div>
                  <h3 className="font-medium">6-min walk to the lake</h3>
                  <p className="text-slate-500">This home is by the Fateh Sagar</p>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5">
                <div className="flex items-center">
                  <PiWind className="size-7" />
                </div>
                <div>
                  <h3 className="font-medium">Unwind in the hot tub</h3>
                  <p className="text-slate-500">This is one of the few places in the area with this amenity.</p>
                </div>
              </div>
              <div className="flex items-center gap-7 mt-5 mb-7">
                <div className="flex items-center">
                  <GoKey className="size-7" />
                </div>
                <div>
                  <h3 className="font-medium">Exceptional check-in experience</h3>
                  <p className="text-slate-500">Recent guests gave the check-in process a 5-star rating.</p>
                </div>
              </div>
            </div>
            <div className="border-t-2 w-7/12">
              <p className="mt-5">Nestled atop a charming hill, with an unobstructed view of the lakes & enchanting city of Udaipur, Sky Villa, a 6-bedroom architectural masterpiece, offers a truly unique living experience.
                With a modern & vintage charm, it is located in a premium & traffic-free neighborhood.
                With multiple outdoor and indoor sitouts and 2 private terraces overlooking the lake , it offers majestic views of the  Sunrise over lake Swaroop Sagar, sunset over Lake Fateh...</p>
              <h3 className="font-medium mt-3 underline mb-5">Show more ˃</h3>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
