import {
  AboutSection,
  Layout,
  MainSection,
  Sidebar,
  WorkSection,
} from "@/components";

const PortfolioMainPage = () => {
  return (
    <Layout>
      <Sidebar />
      <MainSection />
      <AboutSection />
      <WorkSection />
    </Layout>
  );
};

export default PortfolioMainPage;
