import { Link } from "react-router-dom";

const posts = [
  { id: 1, title: "Bible" },
  { id: 2, title: "Chapters" },
  { id: 3, title: "Verses" },
];

const BlogList = () => {
  return (
    <div>
      <h1>Blog Posts</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <Link to={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;

