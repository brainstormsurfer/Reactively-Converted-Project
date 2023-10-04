import { Specialize, Process, Stats, Header, Footer } from "../sections";

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
      {/* Footer */}
      <Footer />
    </>
  );
};

export default Home;
