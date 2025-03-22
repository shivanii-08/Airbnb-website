import React, { useState } from 'react'
const data = [
  [
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Hotspring", type: "House Rental" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Lake Martin", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Menton", type: "House rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ],
  [
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Mijas", type: "House rentals" },
    { name: "Canmore", type: "Pet-friendly rentals" },
    { name: "Benalmádena", type: "Flat rentals" },
    { name: "Marbella", type: "Beachfront rentals" },
    { name: "Showmore" },
  ]
]
function Footer() {
  const [index, setIndex] = useState(0);
  return (
    <div className='bg-stone-100 mt-10 w-full'>
      {/* <div className='flex py-8 border-b-2 border-t-2 ml-8'>
        <ul className='flex gap-x-3'>
          <li className='flex gap-x-3 hover:underline cursor-pointer'>Airbnb <span className='mt-1'><IoIosArrowForward /></span></li>
          <li className='flex gap-x-3 hover:underline cursor-pointer'>India<span className='mt-1'><IoIosArrowForward /></span></li>
          <li className='flex gap-x-3 hover:underline cursor-pointer'>Rajasthan<span className='mt-1'><IoIosArrowForward /></span></li>
          <li className='hover:underline cursor-pointer'>Udaipur</li>
        </ul>
      </div> */}
      <div className='border-b-2 '>
        <div className='ml-8 text-xl font-medium pt-10'>
          <h2>Inspiration for future getaways</h2>
        </div>
        <div className=' flex border-b-2 py-4 ml-8 gap-5 text-gray-500 text-sm font-medium'>
          <button onClick={() => setIndex(0) } >Popular</button>
          <button onClick={() => setIndex(1)}>Arts & culture</button>
          <button onClick={() => setIndex(2)}>Outdoor</button>
          <button onClick={() => setIndex(3)}>Mountains</button>
          <button onClick={() => setIndex(4)}>Beach</button>
          <button onClick={() => setIndex(5)}>Unique style</button>
          <button onClick={() => setIndex(6)}>Categories</button>
          <button onClick={() => setIndex(7)}>Things to do</button>
          </div>
          <div>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-8 border-b-2">
        {data[index]?.map((items
        ) => (
          <div className=" text-sm px-8 rounded ">
            <h3 className="font-semibold">{items.name}</h3>
            <p className="text-gray-600">{items.type}</p>
          </div>
        ))}
      </div>
          <div></div>
        </div>
        <div className='grid grid-cols-3 p-8 border-b-2 '>
          <section>
            <h2 className='font-medium'>Support</h2>
            <ul className='text-sm leading-7 mt-2'>
              <li>Help Centre</li>
              <li>AirCover</li>
              <li>Anti-discrimination</li>
              <li>Disability support</li>
              <li>Cancellation options</li>
              <li>Report neighbourhood concern</li>
            </ul>
          </section>
          <section>
            <h2 className='font-medium'>Hosting</h2>
            <ul className='text-sm leading-7 mt-2'>
              <li>Airbnb your home</li>
              <li>AirCover for Hosts</li>
              <li>Hosting resources</li>
              <li>Community forum</li>
              <li>Hosting responsibly</li>
              <li>Join a free Hosting class</li>
              <li>Find a co‑host</li>
            </ul>
          </section>
          <section>
            <h2 className='font-medium'>Airbnb</h2>
            <ul className='text-sm leading-7 mt-2'>
              <li>Newsroom</li>
              <li>New features</li>
              <li>Careers</li>
              <li>Investors</li>
              <li>Airbnb.org emergency stays</li>
            </ul>
          </section>
        </div>
        <div className='flex gap-x-2 p-5'>
            <div>© 2024 Airbnb, Inc.</div>
            <div>·</div>
              <div>Privacy</div>
              <div>·</div>
              <div>Terms</div>
              <div>·</div>
              <div>Sitemap</div>
              <div>·</div>
              <div>Comapany details</div>
        </div>
      </div>
      </div>
      )
}
  export default Footer