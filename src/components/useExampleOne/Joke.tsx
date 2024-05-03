import { use, Suspense } from 'react';

type JokeType = {
    value: string;
};

const fetchData = async () => {
    const res = await fetch('https://api.chucknorris.io/jokes/random');

    return res.json();
};

const JokeItem = () => {
    const joke = use<JokeType>(fetchData());

    return (
        <div className="bg-blue-50 shadow-md p-4 my-6 rounded-lg">
            <h2 className="text-xl font-bold">{joke.value}</h2>
        </div>
    );
};

const Joke = () => {
    return (
        <Suspense
            fallback={
                <h2 className="text-2xl text-center font-bold">Loading...</h2>
            }
        >
            <JokeItem />
        </Suspense>
    );
};
export default Joke;
