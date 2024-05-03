import { Suspense, use } from 'react';

type Post = {
    id: number;
    title: string;
    body: string;
};

const fetchData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');

    return res.json();
};

const PostItems = () => {
    const posts = use<Post[]>(fetchData());

    return (
        <ul>
            {posts.map((post) => (
                <div
                    key={post.id}
                    className="bg-blue-50 shadow-md p-4 my-6 rounded-lg"
                >
                    <h2 className="text-xl font-bold">{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </ul>
    );
};

const Posts = () => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <PostItems />
        </Suspense>
    );
};

export default Posts;
