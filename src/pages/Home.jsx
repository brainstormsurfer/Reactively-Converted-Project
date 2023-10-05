import { Specialize, Process, Stats, Header } from "../sections";

const Home = () => {
  return (
    <>
      {/* Header */}
      <Header />
      {/* <!-- Section A: Specialize --> */}
      <Specialize />
      {/* <!-- Section B: Stats --> */}
      <Stats />
      {/* <!-- Section C: Process --> */}        
      <Process />      
    </>
  );
};

export default Home;
