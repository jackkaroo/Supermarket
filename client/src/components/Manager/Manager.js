import FirstQuery from "./Queries/FirstQuery"
import ForthQuery from "./Queries/ForthQuery"
import FifthQuery from "./Queries/FifthQuery"
import SixteenQuery from "./Queries/SixteenQuery"
import SecondQuery from "./Queries/SecondQuery"
import ThirdQuery from "./Queries/ThirdQuery"
import SixthQuery from "./Queries/SixthQuery"
import SeventhQuery from "./Queries/SeventhQuery"
import EightQuery from "./Queries/EightQuery"
import Seventeenth from "./Queries/Seventeenth"
import EighteenthQuery from "./Queries/EighteenthQuery"
import NinthQuery from "./Queries/NinthQuery"
import TenthQuery from "./Queries/TenthQuery"
import Header from "../Header"
import EleventhQuery from "./Queries/EleventhQuery"

export default function Manager() {
  const basePath = 'http://localhost:3001/api/manager';

  return (
    <div className="manager-queries">
      <Header/>
      <h1 className="mb-30">Manager Queries</h1>
      <FirstQuery path={basePath + '/list-sellers'}/>
      <SecondQuery path={basePath + '/products-by-category-sorted'}/>
      <ThirdQuery path={basePath + '/phone-address-by-employee'}/>
      <ForthQuery path={basePath + '/products'}/>
      <FifthQuery path={basePath + '/categories'}/>
      <SixthQuery path={basePath + '/products-by-category'}/>
      <SeventhQuery path={basePath + '/store-products-by-product'}/>
      <EightQuery path={basePath + '/price-quantity-by-upc'}/>
      <NinthQuery path={basePath}/>
      <TenthQuery path={basePath}/>
      <EleventhQuery path={basePath + '/checks-by-seller-by-time'}/>
      <SixteenQuery path={basePath + '/customers-pib-phone-address'}/>
      <Seventeenth path={basePath + '/customers-by-percent'}/>
      <EighteenthQuery path={basePath + '/info-by-upc'}/>


    </div>
  );
}

