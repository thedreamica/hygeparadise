import Carousel from '../Components/Carousel/Carousel'
import fsPromises from 'fs/promises';
import path from 'path';
interface HomeProps {
props: any;
}
 const Home: React.FC<HomeProps> = (props) => {
   
  return (
    <>
      <Carousel {...props}/>
    </>
  )
}


export async function getStaticProps() {
  const filePath = path.join(process.cwd(), '/Content/HomeContent.json');
  const jsonData: any = await fsPromises.readFile(filePath);
  const pageData = JSON.parse(jsonData);

  return {
    props: pageData
  }
}

export default Home