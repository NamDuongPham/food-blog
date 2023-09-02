import { useGetPostsQuery } from "../../services/courseService";

function Home() {
  const { data } = useGetPostsQuery();
  console.log(data);
  
  return (
    <div>
      {/* <Link to={SITE_MAP.BLOG.url}>
        bấm vào đây tới trnag blog
      </Link> */}
    </div>
  );
}

export default Home;
