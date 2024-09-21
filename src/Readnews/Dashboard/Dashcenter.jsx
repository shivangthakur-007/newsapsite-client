import React, { Fragment } from "react";
import NewsCard from "./NewsCard";
import { useInfiniteQuery, useQueries } from "react-query";
import axiosInstance from "../../Helper/axiosInstance";

const fetchnews = ({ pageParam = 1 }) => {
  return axiosInstance.get(`/news?limit=2&page=${pageParam}`);
};
function Dashcenter() {
  const {
    isLoading,
    isError,
    error,
    data,
    hasNextPage,
    fetchNextPage,
    isFetching,
    isFetchingNextPage,
  } = useInfiniteQuery(["news"], fetchnews, {
    getNextPageParam: (_lastpage, pages) => {
      if (pages.length < 6) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
  // console.log(data?.pages)
  if (isLoading) {
    return <h2>Loading...</h2>;
  }
  if (isError) {
    return <h2>{error.message}</h2>;
  }
  return (
    <>
      <div className="flex flex-col items-center mt-12 gap-10 ">
        {data?.pages.map((group, i) => {
          // console.log(group.data.news);
          return (
            <Fragment key={i}>
              {group.data.news.map((element) => (
                <NewsCard key={element._id} data={element} />
              ))}
            </Fragment>
          );
        })}
        <div>
          <button disabled={!hasNextPage} onClick={fetchNextPage}>
            Load more
          </button>
        </div>
        <div>{isFetching && !isFetchingNextPage ? "Fetching..." : null}</div>
      </div>
    </>
  );
}

export default Dashcenter;
// const dispatch = useDispatch();
// const { newsData } = useSelector((state) => state.news);
// async function loadNews() {
//   await dispatch(getAllnews());
// }
// useEffect(() => {
//   loadNews();
// }, []);
