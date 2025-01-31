function ArrowUp() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <button
      onClick={handleScrollToTop}
      aria-label="Scroll to top"
      className="fixed bottom-[5%] right-[5%] bg-blue-500 w-8 h-8 text-white   rounded-full flex justify-center items-center z-50"
    >
      <i className="fa-solid fa-arrow-up"></i>
    </button>
  );
}

export default ArrowUp;
