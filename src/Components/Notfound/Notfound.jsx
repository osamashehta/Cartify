import error from "../../assets/error.png";

function Notfound() {
  return (
    <>
      <div>
        <img src={error} alt="Not found Page" className="w-full object-cover" />
      </div>
    </>
  );
}

export default Notfound;
