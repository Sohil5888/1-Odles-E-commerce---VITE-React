import React, { useRef } from 'react';

const Useref = () => {
    const inputref = useRef(null)
    function inputdata(){
        console.log(inputref.current.value.toUpperCase());
        // inputref.current.focus()
        // inputref.current.value.toUpperCase()
    }
    return (
        <>

        <table>
            <tr>
                <td>user-name</td>
                <td><input type="text" ref={inputref}/></td>
                <td><button onClick={inputdata}>login</button></td>
            </tr>
        </table>
         
        </>
      );
}
 
export default Useref;