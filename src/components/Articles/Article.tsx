import { Link } from "react-router-dom";
import type { ArticlesType } from "../../../AppCpntext";
import SkeletonCark from "./SkeletonCard";

type articleType = { article: ArticlesType; loading: boolean };

export default function Card({ article, loading }: articleType) {
  if (loading) {
    return <SkeletonCark />;
  }

  return (
    <Link to={`/articles/${article.id}`}>
      <article className="flex flex-col gap-3 shadow rounded-[10px] p-3">
        <img
          src={article.urlToImage}
          alt="article-Img"
          className="w-full rounded-[6px] self-center"
        />
        <span className="text-[#4B6BFB] bg-[#4B6BFB0D] w-fit p-1 font-medium text-[14px] rounded-[6px]">
          {article.category}
        </span>
        <p className="font-semibold test-[24px] h-12 overflow-hidden">
          {article.title}
        </p>
        <div className="flex justify-between items-center">
          <div className="flex gap-3 items-center ">
            <img
              loading="lazy"
              src={article.publisherImage}
              alt="publisher-Image"
              className="w-[36px] rounded-[28px]"
            />
            <p className="font-medium text-[14px] text-[#97989F]">
              {article.author}
            </p>
          </div>
          <time
            className="font-medium text-[14px] text-[#97989F]"
            dateTime={article?.publishedAt || ""}
          >
            {article?.publishedAt
              ? new Date(article.publishedAt).toLocaleDateString("en-US", {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })
              : "No date"}{" "}
          </time>
        </div>
      </article>
    </Link>
  );
}
