const SearchAndFilter = () => {
  return (
    <section className="mt-8 flex flex-col gap-8 rounded-md">
      <div className="flex justify-between items-center">
        <h3 className="font-bold text-2xl">Search properties to rent</h3>
        <input
          type={"search"}
          placeholder="Search with search bar"
          className=" rounded-md text-violet-800 border-gray-200 border-solid border-2 px-2 py-1 text-sm placeholder:font-bold"
        />
      </div>
      <div className="bg-white py-4 px-3">
        <ul className="flex items-center justify-between">
          <li className="px-4 ">
            <p className="text-gray-500 text-xs font-semibold">Location</p>
            <h5 className="font-bold">hey</h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200">
            <p className="text-gray-500 text-xs font-semibold">When</p>
            <h5 className="font-bold">hey</h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200">
            <p className="text-gray-500 text-xs font-semibold">Price</p>
            <h5 className="font-bold">hey</h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200">
            <p className="text-gray-500 text-xs font-semibold">Property Type</p>
            <h5 className="font-bold">hey</h5>
          </li>
          <li className="px-4 border-l-2 border-l-gray-200">
            <button className="font-semibold rounded-md px-4 py-2 bg-violet-500 text-white">
              search
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default SearchAndFilter;
