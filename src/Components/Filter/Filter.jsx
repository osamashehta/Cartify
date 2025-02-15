function Filter({ handleFilter }) {
  function handleChangeFilter(event) {
    handleFilter(event.target.value);
  }

  return (
    <>
      <div className=" w-fit px-2 mr-auto">
        <form className="max-w-sm mx-auto py-4 my-8">
          <div className="flex items-center">
            <label
              htmlFor="category"
              className=" text-blue-600  text-xl font-bold  block text-center me-4"
            >
              Filter
            </label>
            <select
              id="category"
              className=" bg-blue-100 border border-gray-300   rounded-lg focus:ring-gray-500 focus:border-blue-500  w-full p-2.5   "
              onChange={handleChangeFilter}
            >
              <option value="All">All</option>
              <option value="Men's Fashion">Men's Fashion</option>
              <option value="Women's Fashion">Women's Fashion</option>
              <option value="Electronics">Electronics</option>
              <option value="Defacto">Defacto</option>
              <option value="Adidas">Adidas</option>
              <option value="LC Waikiki">LC Waikiki</option>
              <option value="Samsung">Samsung</option>
              <option value="Sony">Sony</option>
              <option value="Dell">Dell</option>
            </select>
          </div>
        </form>
      </div>
    </>
  );
}

export default Filter;
