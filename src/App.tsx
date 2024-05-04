// import Joke from './components/useExampleOne/Joke';

import AddToCartForm from './components/useFormStateExample/AddToCartForm';

// import Posts from './components/useFormStatusExample/Posts';

// import ShoppingCart from './components/actionExampleTwo/ShoppingCart';

// import Posts from './components/actionExampleOne/Posts';

// import Theme from './components/useExampleContext/Theme';

// import Message from './components/useExampleThree/Message';

// import Posts from './components/useExampleTwo/Posts';

const App = () => {
    return (
        <div className="m-auto w-full max-w-[1440px] p-4">
            {/* <JokeUseEffect /> */}
            {/* <Joke /> */}
            {/* <PostsUseEffect /> */}
            {/* <Posts /> */}
            {/* <Message /> */}
            {/* <Theme /> */}
            {/* <Posts /> */}
            {/* <ShoppingCart /> */}
            {/* <Posts /> */}
            <AddToCartForm
                itemID="1"
                itemTitle="JavaScript: The Definitive Guide"
            />
            <AddToCartForm itemID="2" itemTitle="JavaScript: The Good Parts" />
        </div>
    );
};

export default App;
