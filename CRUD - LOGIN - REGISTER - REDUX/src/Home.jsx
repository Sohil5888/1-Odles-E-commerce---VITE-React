import React from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { IncriNumber, DecriNumber } from './Action';



const Home = () => {
    const myState = useSelector((state) => state.ChangeNumber)
    const dispatch = useDispatch()

    return (
        <>
            <div className='bg-green-100'>
                <div className="container mx-auto">
                    <h1 className='text-center  text-3xl'>This is home page</h1>
                    <button onClick={() => dispatch(IncriNumber())}> Click to Incriment</button>
                    <h1>{myState}</h1>
                    <button onClick={() => dispatch(DecriNumber())}> Click to Derciment</button>
                </div>
            </div>
        </>
    );
}

export default Home;