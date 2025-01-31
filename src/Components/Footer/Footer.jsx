import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer className="bg-slate-200  mt-10 ">
        <div className="w-[90%] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between border-b-[1px] border-slate-800">
          <div className=" py-4">
            <h3 className="font-bold text-lg">About Us</h3>
            <p className="text-sm mt-2">
              Learn more about our company, mission, and vision.
            </p>
            <a
              href="https://www.linkedin.com/in/osama-shehta"
              target="_blank"
              className=" hover:text-slate-500 mt-2 block"
            >
              Read more
            </a>
          </div>

          <div className=" py-4">
            <h3 className="font-bold text-lg">Customer Service</h3>
            <ul className="text-sm mt-2">
              <li>
                <a
                  href="https://www.linkedin.com/in/osama-shehta"
                  target="_blank"
                  className=" hover:text-slate-500"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/osama-shehta"
                  target="_blank"
                  className=" hover:text-slate-500"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/osama-shehta"
                  target="_blank"
                  className=" hover:text-slate-500"
                >
                  Return & Refund Policy
                </a>
              </li>
            </ul>
          </div>

          <div className=" py-4">
            <h3 className="font-bold text-lg">Quick Links</h3>
            <ul className="text-sm mt-2">
              <li>
                <Link to="/" className="hover:text-slate-500">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-slate-500">
                  Cart
                </Link>
              </li>
            </ul>
          </div>

          <div className="  py-4">
            <h3 className="font-bold text-lg">Follow Us</h3>
            <div className="flex space-x-4 mt-2">
              <a
                href="https://www.linkedin.com/in/osama-shehta"
                target="_blank"
                className="hover:text-blue-500"
              >
                Linkedin{" "}
                <i className="fa-brands fa-linkedin text-blue-700 text-xl"></i>
              </a>
              <a
                href="https://github.com/osamashehta"
                target="_blank"
                className="hover:text-slate-500"
              >
                Github <i className="fa-brands fa-square-github text-xl"></i>
              </a>
            </div>
          </div>
        </div>

        <div className=" w-[90%] mx-auto  py-4 border-b-[1px] border-slate-800">
          <div className=" px-6">
            <h4 className="text-lg font-bold ">Subscribe to Our Newsletter</h4>
            <form className="flex items-center mt-2">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 w-1/2 rounded-l-md focus:outline-none"
              />
              <button
                type="button"
                className="px-4 py-2 bg-blue-500 text-white rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="  text-center text-xl  py-4 ">
          <div className="container mx-auto px-6 ">
            <p className="font-bold ">Payment Partners</p>
            <div className="flex justify-center space-x-4 mt-2 text-3xl">
              <i className="fa-brands fa-cc-visa"></i>
              <i className="fa-brands fa-cc-mastercard"></i>
              <i className="fa-brands fa-cc-paypal"></i>
            </div>
          </div>
          <div className=" text-center  py-2 ">
            <a
              href="https://www.linkedin.com/in/osama-shehta"
              target="_blank"
              className="hover:text-slate-600"
            >
              &copy; {new Date().getFullYear()} <strong>Cartify</strong>. All
              Rights Reserved.
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
