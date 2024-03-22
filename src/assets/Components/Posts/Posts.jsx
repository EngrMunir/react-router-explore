import { useLoaderData } from "react-router-dom";
import Post from "../Post/Post";

const Posts = () => {
    const posts = useLoaderData();
    return (
        <div>
            <h2>Posts: {posts.length}</h2>
            <div className="users">
                {
                    posts.map((post,idx) => <Post key={idx} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;