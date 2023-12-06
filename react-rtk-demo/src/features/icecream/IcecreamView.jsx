import { useDispatch, useSelector } from "react-redux";
import { ordered, rstocked } from "./icecreamSlice";
import { useState } from "react";

const IcecreamView = () => {
    const [value, setValue] = useState(1)
    const numberOfIcecreams = useSelector(state => state.icecream.numberOfIcecreams);
    const dispatch = useDispatch()

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
