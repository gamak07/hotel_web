import React from 'react'

const Filter = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-lg w-full max-w-lg">
  <h2 className="text-xl font-bold mb-4">Filter Hotels</h2>

  {/* Date Range Picker */}
  <div className="mb-4">
    <label className="block font-semibold mb-2">Check-in & Check-out</label>
    <input type="text" className="w-full p-2 border rounded-md" placeholder="Select Dates" />
  </div>

  {/* Guest Count */}
  <div className="mb-4 flex space-x-4">
    <div className="flex-1">
      <label className="block font-semibold mb-2">Guests</label>
      <input type="number" className="w-full p-2 border rounded-md" min="1" />
    </div>
    <div className="flex-1">
      <label className="block font-semibold mb-2">Rooms</label>
      <input type="number" className="w-full p-2 border rounded-md" min="1" />
    </div>
  </div>

  {/* Room Type */}
  <div className="mb-4">
    <label className="block font-semibold mb-2">Room Type</label>
    <select className="w-full p-2 border rounded-md">
      <option>Single</option>
      <option>Double</option>
      <option>Suite</option>
    </select>
  </div>

  {/* Price Range */}
  <div className="mb-4">
    <label className="block font-semibold mb-2">Price Range</label>
    <input type="range" min="50" max="500" className="w-full" />
  </div>

  {/* Amenities */}
  <div className="mb-4">
    <label className="block font-semibold mb-2">Amenities</label>
    <div className="flex flex-wrap gap-2">
      <label className="flex items-center space-x-2">
        <input type="checkbox" /> <span>Free Wi-Fi</span>
      </label>
      <label className="flex items-center space-x-2">
        <input type="checkbox" /> <span>Swimming Pool</span>
      </label>
    </div>
  </div>

  {/* Filter Button */}
  <button className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600">
    Apply Filters
  </button>
</div>

  )
}

export default Filter