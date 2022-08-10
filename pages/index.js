import Hero from "../components/home-page/hero";

function Homepage(props) {
  return (
    <>
      <Hero />
      {/* <FeaturedPosts /> */}
    </>
  );
}

export default Homepage;

// TODO 1) hero section
// TODO 2) featured posts section

//getServerSideProps
export async function getServerSideProps() {
  return {
    props: {},
  };
}
