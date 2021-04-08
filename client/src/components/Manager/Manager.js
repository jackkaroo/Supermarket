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

export default function Manager() {
  const basePath = 'http://localhost:3001/api/manager';

  return (
    <div className="manager-queries">
      <FirstQuery path={basePath + '/list-sellers'}/>
      <SecondQuery path={basePath + '/products-by-category-sorted'}/>
      <ThirdQuery path={basePath + '/phone-address-by-employee'}/>
      <ForthQuery path={basePath + '/products'}/>
      <FifthQuery path={basePath + '/categories'}/>
      <SixthQuery path={basePath + '/products-by-category'}/>
      <SeventhQuery path={basePath + '/store-products-by-product'}/>
      <EightQuery path={basePath + '/price-quantity-by-upc'}/>
      <SixteenQuery path={basePath + '/customers-pib-phone-address'}/>
      <Seventeenth path={basePath + '/customers-by-percent'}/>
      <EighteenthQuery path={basePath + '/info-by-upc'}/>


    </div>
  );
}

