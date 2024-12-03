import { Link, useNavigate } from "react-router-dom";
import {
  BlogMobile,
  BlogTex,
  Emogi,
  SearchIcon,
  Unavailable,
} from ".././../Utils/Assets";
import { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import { apiRequest } from "../../Utils/ApiRequest";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { blogDummyData } from "../DummyData/blogData";
import { useAuth } from "../Context/AuthContext";
import { EmptyPage } from "../../Utils/EmptyPage";
import { ErrorPage } from "../../Utils/ErrorPage";

const Blog = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [searchLoading, setSearchLoading] = useState(false);
  const { blogs, blogsLoading, blogsError } = useAuth();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const search = async () => {
      setSearchLoading(true);
      try {
        const response = await apiRequest(
          "GET",
          `/blogs/async_filter/?search=${searchTerm}`,
        );
        setSearchResults(response);
      } catch (error) {
        console.error("Error searching:", error);
      }
    };

    if (searchTerm.trim() !== "") {
      search();
    } else {
      setSearchLoading(false);
      setSearchResults([]);
    }
  }, [searchTerm]);

  const handleInputChange = e => {
    setSearchTerm(e.target.value);
  };

  const handleOutsideClick = () => {
    setSearchTerm("");
  };

  return (
    <div className="w-full">
      <>
        <Header headerCol={false} />
        <div className="container_ w-full">
          <div className="flex px-4 w-full lg:px-16 lgl:px-[100px] xl:px-[60px] xll:px-[120px] pb-[160px] flex-col">
            <div className="flex flex-col gap-4 mt-[60px] items-center justify-center">
              <img src={BlogTex} className="lg:block hidden" alt="" />
              <img src={BlogMobile} className="block lg:hidden" alt="" />
              <span className="text-[20px] sm:hidden lg:block text-center font-normal leading-[30px] text-lightB">
                Learn everything you need to launch you into the job market
              </span>
            </div>
            <div className="w-full mt-10 flex items-center justify-center">
              <div className="w-[384px] bg-lightGray h-[60px] rounded-[20px] flex items-center py-1.5 pl-5 pr-1.5 justify-between ">
                <input
                  type="text"
                  placeholder="Search a blog post"
                  value={searchTerm}
                  className="text-[16px] w-[84%] text-footerCol  bg-transparent focus:outline-none focus:shadow-outline "
                  onChange={handleInputChange}
                />
                <div className="w-12 h-12 rounded-[16px] flex items-center justify-center bg-black">
                  <img src={SearchIcon} alt="" />
                </div>
              </div>
            </div>
            {searchTerm != "" && searchResults && (
              <div
                onClick={() => handleOutsideClick()}
                className="absolute top-0 right-0 left-0 z-1 w-full h-full"
              ></div>
            )}
            {/*  */}
            <div className="">
              {searchTerm != "" && searchResults?.length != 0 && (
                <ul className="absolute w-full left-0 ">
                  <div className="w-full flex mt-2 items-center flex-col ">
                    <div className="flex flex-col px-2 py-3 rounded-[12px] mt-2 z-10 bg-white searchGra w-[360px]  ">
                      {searchResults.map((blog, index) => (
                        <li
                          key={index}
                          onClick={() =>
                            navigate(
                              `/blog/${blog?.id}/${
                                blog.author_name
                              }/${encodeURIComponent(
                                blog?.title.substring(0, 20),
                              )}`,
                            )
                          }
                          className="px-2 rounded-lg py-0.5 hover:cursor-pointer w-full hover:bg-[#f1f1f1]"
                        >
                          <span className=" w-full">
                            {blog?.title.length > 40
                              ? `${blog?.title.substring(0, 40)}...`
                              : blog?.title}
                          </span>
                        </li>
                      ))}
                    </div>
                  </div>
                </ul>
              )}
            </div>
            {searchTerm != "" &&
            searchTerm.length > 2 &&
            searchResults?.length == 0 ? (
              <div className="flex w-full items-center justify-center">
                <div className="flex mt-[80px] gap-3.5 flex-col items0center justify-center">
                  <img src={Emogi} className="h-[75px]" alt="" />
                  <span className="">
                    No search results with the term {`“${searchTerm}”`}
                  </span>
                </div>
              </div>
            ) : (
              <>
                {!blogsLoading ? (
                  <>
                    {blogs && blogs?.length >= 1 ? (
                      <SingleBlog blogs={blogs} />
                    ) : (
                      <div className="mt-14">
                        {!blogsError ? (
                          <EmptyPage text="No Blog post available at the moment!" />
                        ) : (
                          <ErrorPage />
                        )}
                      </div>
                    )}
                  </>
                ) : (
                  <div className="flex w-full flex-col gap-[24px items-center justify-center">
                    <div className="flex flex-col mt-[80px] w-full lg:flex-row justify-center items-center gap-[24px]">
                      <Skeleton
                        style={{ borderRadius: "20px" }}
                        className="w-[140px]"
                        width={343}
                        height={400}
                      />
                      <Skeleton
                        style={{ borderRadius: "20px" }}
                        className="w-[140px]"
                        width={343}
                        height={400}
                      />
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <Footer />
      </>
    </div>
  );
};

export default Blog;

const SingleBlog = ({ blogs, isDummy }) => {
  return (
    <div className="mt-[80px] items-center place-items-center flex flex-col lg:grid lg:grid-cols-2 xl:grid-cols-3 sm:gap-y-7 lg:gap-y-8">
      {blogs &&
        blogs.map((blog, index) => (
          <div
            key={index}
            className="blog-card2 w-[340px] lg:w-[395px] sm:h-[386px] lg:h-[423px] flex flex-col gap-4 pb-5 rounded-[36px] "
          >
            <div className="w-full h-[180px] lg:h-[212px]">
              <img
                src={blog?.featured_image}
                alt=""
                className="rounded-t-[34px] w-full h-[180px] lg:h-[220px]"
              />
            </div>
            <div className="px-3 lg:px-4 flex flex-col gap-[13px]">
              <h1 className="font-semibold line-clamp-1 text-nowrap   sm:text-[18px] lg:text-[20px] sm:leading-[21px] lg:leading-[24px] ">
                {blog?.title.length > 36
                  ? `${blog?.title?.substring(0, 36) + ".."}`
                  : `${blog?.title}`}
              </h1>
              <span className="font-normal line-clamp-3 text-[14px] leading-[21px] text-lightB">
                {blog?.short_description.length > 140
                  ? `${blog?.short_description?.substring(0, 140) + ".."}`
                  : `${blog?.short_description}`}
              </span>
            </div>
            <div className="flex flex-row justify-between px-5 mt-4 items-center">
              <div className="flex flex-row gap-2 ">
                {blog?.author_image ? (
                  <img
                    src={blog?.author_image}
                    alt=""
                    className="rounded-[100%] w-8 h-8"
                  />
                ) : (
                  <img
                    src={Unavailable}
                    alt=""
                    className="rounded-[100%] w-8 h-8"
                  />
                )}
                <div className="flex flex-col">
                  <h3 className="text-[14px] font-medium leading-[17px] text-lightB">
                    {blog?.author_name}
                  </h3>
                  <h3 className="text-[12px] font-normal leading-[14px] text-lightB">
                    5 min read
                  </h3>
                </div>
              </div>
              {!isDummy ? (
                <Link
                  to={`/blog/${blog?.id}/${
                    blog.author_name
                  }/${encodeURIComponent(blog?.title.substring(0, 20))}`}
                  className="flex items-center justify-center hover:bg-[#F5F7F9] transition ease-in-out duration-300  readMore rounded-[16px] w-[113px] h-12"
                >
                  <span className="text-[14px] leading-[17px] font-normal">
                    Read more
                  </span>
                </Link>
              ) : (
                <div className="flex items-center justify-center hover:bg-[#F5F7F9] transition ease-in-out duration-300  readMore rounded-[16px] w-[113px] h-12">
                  <span className="text-[14px] leading-[17px] font-normal">
                    Read more
                  </span>
                </div>
              )}
            </div>
          </div>
        ))}
    </div>
  );
};
