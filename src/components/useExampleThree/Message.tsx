import { FC, Suspense, use, useState } from 'react';

type MessageContainerProps = {
    messagePromise: Promise<string>;
};

const fetchMessage = (): Promise<string> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Hello, World!');
        }, 1000);
    });
};

const MessageOutput: FC<MessageContainerProps> = ({ messagePromise }) => {
    const message = use(messagePromise);

    return <p className="text-xl">{message}</p>;
};

const MessageContainer: FC<MessageContainerProps> = ({ messagePromise }) => {
    return (
        <Suspense fallback={<p className="text-xl">Downloading message...</p>}>
            <MessageOutput messagePromise={messagePromise} />
        </Suspense>
    );
};

const Message = () => {
    const [messagePromise, setMessagePromise] =
        useState<Promise<string> | null>(null);
    const [isShow, setIsShow] = useState(false);

    const donwload = () => {
        setMessagePromise(fetchMessage());
        setIsShow(true);
    };

    if (isShow) {
        return (
            <MessageContainer
                messagePromise={messagePromise as Promise<string>}
            />
        );
    }

    return (
        <button
            onClick={donwload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
            Download Message
        </button>
    );
};

export default Message;
