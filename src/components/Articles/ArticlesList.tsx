import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../AppCpntext";
import Card from "./Article";

export default function CardList() {
  const context = useContext(AppContext);
  const [visibleCount, setVisibleCount] = useState(9);

  if (!context) return null;

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!context) return;

    context.filterData.slice(0, visibleCount).forEach((article) => {
      const img = new Image();
      const img2 = new Image();
      img.src = article.urlToImage;
      img2.src = article.publisherImage;
    });

    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, [context]);

  const loadMoreHandler = () => {
    setVisibleCount((prev) => prev + 6);
  };

  return (
    <>
      <main className="grid grid-cols-3 max-sm:grid-cols-1 max-lg:grid-cols-2  gap-10 mt-10">
        {context.filterData.slice(0, visibleCount).map((article, index) => (
          <Card key={index} article={article} loading={loading} />
        ))}
      </main>
      {visibleCount < context.filterData.length && (
        <div className="flex justify-center">
          <button
            className="px-5 py-3 border-1 border-[#696A754D] rounded-[6px] text-[#696A75] font-medium mt-7 cursor-pointer"
            onClick={loadMoreHandler}
          >
            Load More
          </button>
        </div>
      )}
    </>
  );
}
