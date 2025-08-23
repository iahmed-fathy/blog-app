import { useContext } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../AppCpntext";

export default function ArticleDetailsPage() {
  const { id } = useParams();
  const context = useContext(AppContext);

  const article = context?.filterData.find((article) => article?.id === id);
  const blocks = article?.content ? [...article.content] : [];

  blocks.splice(Math.floor(blocks.length / 2), 0, {
    type: "ad",
    src: "https://placehold.co/750x100/E8E8EA/333333?text=Advertisement%0AYou+can+place+ads%0A750x100",
    alt: "ad-image",
    link: "https://www.linkedin.com/in/iahmedfathy/",
  });

  return (
    <article className="flex justify-center py-15">
      <div className=" max-w-[800px] flex flex-col gap-5">
        <span className="bg-[#4B6BFB] px-2.5 py-1.5 rounded-[6px] w-fit text-white font-medium">
          {article?.category}
        </span>
        <h1 className="font-semibold text-[36px] max-sm:text-[22px]">
          {article?.title}
        </h1>
        <address className="flex justify-between items-center w-[300px]">
          <div className="flex gap-3 items-center ">
            <img
              loading="lazy"
              src={article?.publisherImage}
              alt="publisher-Image"
              className="w-[36px] rounded-[28px]"
            />
            <p className="font-medium text-[14px] text-[#97989F]">
              {article?.author}
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
        </address>
        <img
          loading="lazy"
          src={article?.urlToImage}
          alt="Article-Image"
          className="rounded-[12px] max-h-[462px]"
        />
        <section className="flex flex-col">
          {blocks.map((block: any, index: number) => {
            switch (block.type) {
              case "paragraph":
                return (
                  <p
                    key={index}
                    className="font-normal text-[20px] max-sm:text-[18px] mb-6"
                  >
                    {block.text}
                  </p>
                );
              case "heading":
                return (
                  <h2
                    key={index}
                    className="font-semibold text-[24px] max-sm:text-[20px] mb-1"
                  >
                    {block.text}
                  </h2>
                );
              case "image":
                return (
                  <img
                    loading="lazy"
                    key={index}
                    className="rounded-[12px] mb-6 max-h-[462px]"
                    src={block.src}
                    alt={block.alt}
                  />
                );
              case "quote":
                return (
                  <blockquote
                    key={index}
                    className="mb-6 bg-[#E8E8EA] max-sm:text-[16px] p-8 font-normal text-[24px] rounded-[12px] text-center"
                  >
                    “ {block.text} ”
                  </blockquote>
                );
              case "ad":
                return (
                  <a
                    key={index}
                    href={block.link}
                    target="_blank"
                    className="w-fit self-center"
                  >
                    <img
                      loading="lazy"
                      className="mb-6 bg-[#E8E8EA] rounded-[12px]"
                      src={block.src}
                    />
                  </a>
                );
            }
          })}
        </section>
      </div>
    </article>
  );
}
