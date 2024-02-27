import React from 'react';
import { Routes, Route } from "react-router-dom";
import Fuctioncompomenu from "./Fuctioncompomenu"
import Functioncompointro from './01Functioncompointro';
import Functioncompoprops from './02Functioncompoprops';
import Usestate from './03Usestate';
import Useeffect from './04Useeffect';
import Uselayouteffect from './05Uselayouteffect';
import Usememo from './06Usememo';
import Usecallback from './07Usecallback';
import Usecontext from './08Usecontext';
import Usecontextmain from './09Usecontextmain';
import Usereducer from './10Usereducer';
import Useref from './11Useref';
import Api from './12Api';
import Apipost from './13Apipost';
const Fuctioncomporoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Fuctioncompomenu />}>
        <Route path='Functioncompointro' element={<Functioncompointro />} />
        <Route path='Functioncompoprops' element={<Functioncompoprops />} />
        <Route path='Usestate' element={<Usestate />} />
        <Route path='Useeffect' element={<Useeffect />} />
        <Route path='Uselayouteffect' element={<Uselayouteffect />} />
        <Route path='Usememo' element={<Usememo />} />
        <Route path='Usecallback' element={<Usecallback />} />
        <Route path='Usecontext' element={<Usecontext />} />
        <Route path='Usecontextmain' element={<Usecontextmain />} />
        <Route path='Usereducer' element={<Usereducer />} />
        <Route path='Useref' element={<Useref />} />
        <Route path='Api' element={<Api />} />
        <Route path='Apipost' element={<Apipost />} />
      </Route>
    </Routes>

  )
}
export default Fuctioncomporoutes