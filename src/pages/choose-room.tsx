import ChooseRoomContainer from '../Containers/ChooseRoom/ChooseRoomContainer';
import fsPromises from 'fs/promises';
import path from 'path';
import React from 'react';

interface ChooseRoomPageProps {
  props: any;
}
const ChooseRoomPage: React.FC<ChooseRoomPageProps> = (props) => {

  return (
    <>
    <ChooseRoomContainer/>
    </>
  )
}


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/Content/chooseRoomContent.json');
  const jsonData: any = await fsPromises.readFile(filePath);
  const pageData = JSON.parse(jsonData);

  return {
    props: pageData
  }
}

export default ChooseRoomPage