
const Post = ({post}) => {
    const {id, title} = post;
    const postStyle = {
        border: '2px solid yellow',
        padding: '10px',
        borderRadius: '10px'
    }
    return (
        <div style={postStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
        </div>
    );
};

export default Post;