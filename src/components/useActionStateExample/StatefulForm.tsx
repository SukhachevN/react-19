import { FC, useActionState, useRef } from 'react';

async function increment(previousState: number) {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    return previousState + 1;
}

type InputProps = {
    ref: React.RefObject<HTMLInputElement | null>;
};

const Input: FC<InputProps> = ({ ref }) => {
    return (
        <input
            ref={(inputRef) => {
                if (inputRef) {
                    ref.current = inputRef;
                }

                return () => {
                    console.log('cleanup');
                };
            }}
        />
    );
};

const StatefulForm = () => {
    const [state, formAction, isPending] = useActionState(increment, 0);
    const ref = useRef<HTMLInputElement>(null);

    return (
        <form>
            <title>FormExample</title>
            <div>{state}</div>
            <div>{isPending ? 'Loading...' : ''}</div>
            <button formAction={formAction}>Increment</button>
            {!isPending && <Input ref={ref} />}
        </form>
    );
};

export default StatefulForm;
