import { useContext, useRef } from "react";
import debounce from "lodash.debounce";
import { AppContext } from "../../../AppCpntext";
import { useNavigate, useLocation } from "react-router-dom";

export default function SearchBar() {
  const inputRef = useRef<HTMLInputElement>(null);
  const context = useContext(AppContext);
  const navigate = useNavigate();
  const location = useLocation();
  if (!context) return;

  const { articles, setFilterData } = context;

  const onSearchHandler = debounce(() => {
    const query = inputRef.current?.value?.toLowerCase() || "";

    if (location.pathname !== "/") {
      navigate("/");
    }

    setFilterData(
      articles.filter((article) => {
        const inTitle = article.title.toLowerCase().includes(query);
        const inCategory = article.category.toLowerCase().includes(query);
        const inContent = article.content.some((block) =>
          block.text?.toLowerCase().includes(query)
        );
        return inTitle || inCategory || inContent;
      })
    );
  }, 1000);

  return (
    <div
      className="flex relative shadow items-center px-5 py-2 w-[166px] h-[36px] cursor-pointer bg-[#F4F4F5] rounded-[5px]"
      onClick={() => {
        inputRef.current?.focus();
      }}
    >
      <input
        ref={inputRef}
        onChange={onSearchHandler}
        type="text"
        name=""
        id=""
        placeholder="Search"
        className="pr-5 py-2 w-full focus:outline-0"
      />
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.90906 2C5.93814 2 4.98903 2.28791 4.18174 2.82733C3.37444 3.36674 2.74524 4.13343 2.37368 5.03045C2.00213 5.92746 1.90491 6.91451 2.09433 7.86677C2.28375 8.81904 2.75129 9.69375 3.43783 10.3803C4.12438 11.0668 4.99909 11.5344 5.95135 11.7238C6.90362 11.9132 7.89067 11.816 8.78768 11.4444C9.6847 11.0729 10.4514 10.4437 10.9908 9.63639C11.5302 8.8291 11.8181 7.87998 11.8181 6.90906C11.818 5.60712 11.3008 4.35853 10.3802 3.43792C9.45959 2.51731 8.211 2.00008 6.90906 2Z"
          stroke="#52525B"
          strokeWidth="1.5"
          strokeMiterlimit="10"
        />
        <path
          d="M10.5718 10.5716L14.0002 14"
          stroke="#52525B"
          strokeWidth="1.5"
          strokeMiterlimit="10"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}
