import { Fragment } from "react";
import SkeletonPost from "../SkeletonPost";
import { useGetPostsQuery } from "../../../../services/blog.service";
import PostItem from "../PostItem/PostItem";

export default function PostList() {
  const { data, isFetching } = useGetPostsQuery();
  console.log(data);

  return (
    <div className="mx-auto max-w-screen-xl grid gap-4 sm:grid-cols-1 md:gap-12 lg:grid-cols-1 xl:grid-cols-1 xl:gap-8">
      {isFetching && (
        <Fragment>
          <SkeletonPost />
          <SkeletonPost />
          <SkeletonPost />
        </Fragment>
      )}
      {!isFetching &&
        data?.map((post) => <PostItem key={post.id} post={post} />)}
    </div>
  );
}
