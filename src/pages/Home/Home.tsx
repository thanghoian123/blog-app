import { BigHead } from "@bigheads/core";
import { useContext, useEffect } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { useDispatch, useSelector } from "react-redux";
import CardBox from "../../components/CardBox/CardBox";
import CardStack from "../../components/CardBox/CardStack";
import Button from "../../components/FormComponent/Button";
import Loader from "../../components/Loader";
import Section from "../../components/Section";
import { ETag, Tag } from "../../components/tag";
import { AuthContext } from "../../context/Auth/AuthProvider";
import { getRandomOptions } from "../../helper/randomAvatar";
import { fetchNextPostRequest, fetchPostRequest } from "../../saga/action";
import { RootState } from "../../saga/reducers/reducer";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, providers } from "../../firebase";
export interface IPost {
  comments: any;
  content: string;
  created: string;
  tag: ETag;
  title: string;
  thumbnail: string;
  author?: string;
}

function Home() {
  const { posts, lastKey, pending } = useSelector(
    (state: RootState) => state.posts
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostRequest());
  }, [dispatch]);

  const moreFn = () => {
    setTimeout(() => {
      dispatch(fetchNextPostRequest({ lastKey }));
    }, 1500);
  };

  // const signUp = async (email: string, password: string) => {
  //   try {
  //     if (firebaseAppAuth) {
  //       const user = await firebaseAppAuth.createUserWithEmailAndPassword(
  //         email,
  //         password
  //       );
  //       console.log("user", user);
  //       alert(`Welcome ${email}!`);
  //     }
  //   } catch (error: any) {
  //     console.log("error", error);
  //     alert(error.message);
  //   }
  // };

  return (
    <div className="m-auto">
      <div className="container m-auto mt-20 grid md:grid-cols-3 sm:grid-cols-1 md:gap-6 sm:gap-y-0 ">
        <div className="col-span-2">
          <div className="grid md:grid-cols-2 gap-6 sm:mb-[20px]">
            {(posts || []).slice(0, 2).map((item: IPost, index: number) => (
              <CardStack
                key={index}
                description={item.content}
                image={`${item.thumbnail}?random=${index}`}
                title={item.title}
                tag={item.tag}
                created={item.created}
                comments={item?.comments?.length || 0}
                isLarge={index === 2}
              />
            ))}
            <div className="md:col-span-2">
              {(posts || []).slice(2, 3).map((item: IPost, index: number) => (
                <CardStack
                  key={index}
                  description={item.content}
                  image={`${item.thumbnail}?random=1003`}
                  title={item.title}
                  tag={item.tag}
                  created={item.created}
                  comments={item?.comments?.length || 0}
                  isLarge={true}
                />
              ))}
            </div>
          </div>

          <InfiniteScroll
            dataLength={posts?.length ?? 0}
            next={moreFn}
            hasMore={!!lastKey}
            style={{ overflow: "hidden" }}
            loader={
              <div className="flex justify-center items-center" key={0}>
                <Loader />
              </div>
            }
          >
            <div className="grid grid-cols-1 gap-10">
              {(posts || []).slice(3).map((item: IPost, index: number) => (
                <div key={index} className="col-span-2">
                  <CardBox
                    description={item.content}
                    image={`${item.thumbnail}?random=${index}`}
                    title={item.title}
                    tag={item.tag}
                    created={item.created}
                    comments={item?.comments?.length || 0}
                    isLarge={true}
                    author={item.author}
                  />
                </div>
              ))}
            </div>
          </InfiniteScroll>
          <div className="py-[45px] px-[60px] bg-[#364F6B] text-center mt-[20px]">
            <h2 className="font-bold text-white text-[40px] leading-[56px]">
              Newsletter
            </h2>
            <p className="text-white text-[20px] leading-[28px] font-normal">
              Subscribe my Newsletter for new blog posts, tips & new photos.
              Let's stay updated!
            </p>
          </div>
        </div>

        <div className="bg-[#F5F5F5] h-fit">
          <Section metaTitle="About me">
            <div className="mb-[15px]">
              <BigHead {...getRandomOptions()} />

              <p className="leading-5 font-normal text-xs">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
                eget massa sollicitudin, cursus risus eu, vehicula metus.{" "}
              </p>
            </div>
          </Section>

          <Section metaTitle="Tags">
            <div className="flex justify-start">
              {(Object.keys(ETag) as Array<keyof typeof ETag>).map(
                (key: string) => {
                  return <Tag key={key} variant={key as ETag} />;
                }
              )}
            </div>
          </Section>

          <Section metaTitle="Latest Articles">
            <div className="">
              {(posts || []).slice(0, 3).map((item: IPost, index: number) => (
                <CardBox
                  key={index}
                  description={item.content}
                  title={item.title}
                  tag={item.tag}
                  created={item.created}
                  comments={item?.comments?.length || 0}
                  isLarge={true}
                  author={item.author}
                />
              ))}
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

export default Home;
