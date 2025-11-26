function Filter({ handleFilter }) {
  function handleChangeFilter(event) {
    handleFilter(event.target.value);
  }

  return (
    <>
      <div className="w-full max-w-md mx-auto lg:mx-0 lg:mr-auto px-2">
        <form className="py-4 my-6">
          <div className="relative">
            <div className="flex items-center gap-2 mb-3">
              <div className="flex items-center justify-center w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg shadow-md">
                <i className="fa-solid fa-filter text-white text-sm"></i>
              </div>
              <label
                htmlFor="category"
                className="text-gray-800 text-lg font-semibold"
              >
                Filter Products
              </label>
            </div>

            <div className="relative">
              <select
                id="category"
                className="w-full appearance-none bg-white border-2 border-gray-200 text-gray-700 py-3 px-4 pr-10 rounded-xl 
                          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent
                          hover:border-blue-300 hover:shadow-md
                          transition-all duration-300 cursor-pointer
                          text-sm font-medium shadow-sm"
                onChange={handleChangeFilter}
                defaultValue="All"
              >
                <option value="All" className="font-semibold">
                  🔍 All Products
                </option>

                <optgroup
                  label="━━━━ Categories ━━━━"
                  className="font-semibold text-gray-700"
                >
                  <option value="Men's Fashion">👔 Men's Fashion</option>
                  <option value="Women's Fashion">👗 Women's Fashion</option>
                  <option value="Electronics">📱 Electronics</option>
                </optgroup>

                <optgroup
                  label="━━━━ Brands ━━━━"
                  className="font-semibold text-gray-700"
                >
                  <option value="Defacto">Defacto</option>
                  <option value="Adidas">Adidas</option>
                  <option value="LC Waikiki">LC Waikiki</option>
                  <option value="Samsung">Samsung</option>
                  <option value="Sony">Sony</option>
                  <option value="Dell">Dell</option>
                </optgroup>
              </select>

              {/* Custom Dropdown Arrow */}
              <div className="absolute inset-y-0 right-0 flex items-center px-3 pointer-events-none">
                <i className="fa-solid fa-chevron-down text-blue-500 text-sm"></i>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Filter;
