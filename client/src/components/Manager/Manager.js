import FirstQuery from "./Queries/FirstQuery"
import ForthQuery from "./Queries/ForthQuery"
import FifthQuery from "./Queries/FifthQuery"
import SixteenQuery from "./Queries/SixteenQuery"
import SecondQuery from "./Queries/SecondQuery"

export default function Manager() {
  const basePath = 'http://localhost:3001/api/manager';

  return (
    <div className="manager-queries">
      <FirstQuery path={basePath + '/list-sellers'}/>
      <SecondQuery path={basePath + '/products-by-category-sorted'}/>
      <ForthQuery path={basePath + '/products'}/>
      <FifthQuery path={basePath + '/categories'}/>
      <SixteenQuery path={basePath + '/customers-pib-phone-address'}/>


    </div>
  );
}

