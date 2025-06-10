import type { FunctionComponent } from 'react';
import Hero from '../components/Hero';
import SpecialityMenu from '../components/SpecialityMenu';
import TopDoctors from '../components/TopDoctors';

interface HomeProps {}

const Home: FunctionComponent<HomeProps> = () => {
  return (
    <>
      <Hero />
      <SpecialityMenu />
      <TopDoctors />
    </>
  );
};

export default Home;
