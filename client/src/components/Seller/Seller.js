
import SecondQuery from "./Queries/SecondQuery"
import ThirdQuery from "./Queries/ThirdQuery"
import ForthQuery from "./Queries/ForthQuery"
import FifthQuery from "./Queries/FifthQuery"
import SixthQuery from "./Queries/SixthQuery"
import NinthQuery from "./Queries/NinthQuery"
import TenthQuery from "./Queries/TenthQuery"
import EleventhQuery from "./Queries/EleventhQuery"
import SeventhQuery from "./Queries/SeventhQuery"
import EightQuery from "./Queries/EightQuery"
import Header from "../Header"
import FirstQuery from "./Queries/FirstQuery"
import FirstAddQuery from "./Queries/FirstAddQuery"
import EleventhAddQuery from "./Queries/EleventhAddQuery"

export default function Seller() {
  const basePath = 'http://localhost:3001/api/seller';

  return (
    <div className="seller-queries">
      <Header/>
      <h1 className="mb-30">Seller Queries</h1>
      <FirstQuery path={basePath + '/checks-by-seller-by-time'}/>
      {/*<FirstAddQuery path={basePath + '/checks-by-seller-by-time'}/>*/}
      <SecondQuery path={basePath + '/info-by-check'}/>
      <ThirdQuery path={basePath + '/customer-info-by-surname'}/>
      <ForthQuery path={basePath + '/customers-by-percent'}/>
      <FifthQuery path={basePath + '/products-by-category-sorted'}/>
      <SixthQuery path={basePath + '/products'}/>
      <SeventhQuery path={basePath}/>
      <EightQuery path={basePath}/>
      <NinthQuery path={basePath + '/info-product-by-check'}/>
      <TenthQuery path={basePath + '/info-by-upc'}/>
      <EleventhQuery path={basePath + '/employee-info-by-id'}/>
      <EleventhAddQuery path={basePath + '/employee-info-by-id'}/>

    </div>
  );
}

