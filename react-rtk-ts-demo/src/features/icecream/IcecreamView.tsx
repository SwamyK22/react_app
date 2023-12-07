import { ordered, rstocked } from "./icecreamSlice";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numberOfIcecreams = useAppSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useAppDispatch()

    return (
        <div>
            <h2>Number of icecream - {numberOfIcecreams}</h2>
            <button onClick={() => dispatch(ordered())}>Order icecream</button>
            <input type="number" value={value} onChange={(e) => setValue(parseInt(e.target.value))} />
            <button onClick={() => dispatch(rstocked(value))}>Restock icecreams</button>
        </div>
    )
}
export default IcecreamView;
