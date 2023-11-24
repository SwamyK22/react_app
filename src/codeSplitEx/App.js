import React, { Suspense, lazy } from 'react';
// import Counter from './Counter';
// import { sum } from './sum';

const Counter = lazy(() => wait(1000).then(() => import('./Counter')))
// const Counter = lazyLoad('./Counter')


function wait(time) {
    return new Promise(resolve => {
        setTimeout(resolve, time)
    })
};

function lazyLoad(path, namedExort) {
    return lazy(() => {
        const promise = import(path);
        if (namedExort == null) {
            return promise
        } else {
            return promise.then(module => ({ default: module[namedExort] }))
        }
    })
}

const App = () => {
    return (
        <div>
            <button onClick={() => {
                import('./sum').then(module => alert(module.sum(3, 3)))
            }}>Click</button>
            <Suspense fallback={<h1>Loading..</h1>}>

                <Counter />
            </Suspense>
        </div>
    );
}

export default App;
