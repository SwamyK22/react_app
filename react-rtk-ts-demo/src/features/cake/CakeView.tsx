
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { ordered, restocked } from "./cakeSlice";

const CakeView = () => {
    const numberOfCakes = useAppSelector(state => state.cake.numberOfCakes);
    const dispatch = useAppDispatch()
    return (
        <div>
            <h2>Number of cakes - {numberOfCakes}</h2>
            <button onClick={() => dispatch(ordered())}>Order cake</button>
            <button onClick={() => dispatch(restocked(5))}>Restock cakes</button>
        </div>
    );
}

export default CakeView;
