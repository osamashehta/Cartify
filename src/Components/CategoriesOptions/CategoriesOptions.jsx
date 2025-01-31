function CategoriesOptions({ handleCategory, handleBrand }) {
  function handleChangeCategory(event) {
    handleCategory(event.target.value);
  }

  function handleChangeBrand(event) {
    handleBrand(event.target.value);
  }

  return (
    <>
      <div className="flex justify-center">
        <div className=" w-1/2 px-2">
          <form className="max-w-sm mx-auto py-4 my-8">
            <label
              htmlFor="category"
              className="block mb-4 text-lg font-bold text-blue-600 text-center"
            >
              Categories
            </label>
            <select
              id="category"
              className="bg-blue-100 border border-gray-300   rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5   "
              onChange={handleChangeCategory}
            >
              <option value="All">All</option>
              <option value="Men's Fashion">Men's Fashion</option>
              <option value="Women's Fashion">Women's Fashion</option>
              <option value="Electronics">Electronics</option>
            </select>
          </form>
        </div>
        <div className="w-1/2 px-2">
          <form className="max-w-sm mx-auto py-4 my-8">
            <label
              htmlFor="category"
              className="block mb-4 text-lg font-bold text-blue-600 text-center"
            >
              Brands
            </label>
            <select
              id="category"
              className="bg-blue-100 border border-gray-300   rounded-lg focus:ring-gray-500 focus:border-blue-500 block w-full p-2.5   "
              onChange={handleChangeBrand}
            >
              <option value="All">All</option>
              <option value="Defacto">Defacto</option>
              <option value="Adidas">Adidas</option>
              <option value="LC Waikiki">LC Waikiki</option>
              <option value="Samsung">Samsung</option>
              <option value="Sony">Sony</option>
              <option value="Dell">Dell</option>
            </select>
          </form>
        </div>
      </div>
    </>
  );
}

export default CategoriesOptions;
