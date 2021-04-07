import FirstQuery from "./Queries/FirstQuery"

export default function Manager() {
  const basePath = 'http://localhost:3001/api/manager';

  return (
    <div>
      <FirstQuery path={basePath + '/list-sellers'}/>


    </div>
  );
}

