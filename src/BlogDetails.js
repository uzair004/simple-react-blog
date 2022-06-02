import { useParams } from "react-router-dom";

const BlogDetails = () => {
  const { id } = useParams();

  return (
    <div className="blog-details">
      <h2>Blog Details of id: {id}</h2>
    </div>
  );
};

export default BlogDetails;
