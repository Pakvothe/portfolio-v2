import { Layout, MainSection, Sidebar, WorkSection } from "@/components";

const PortfolioMainPage = () => {
  return (
    <Layout>
      <Sidebar />
      <MainSection />
      <WorkSection />
      {/* <h1 className="text-primary">Primary color test</h1>
      <h3 className="text-secondary">secondary color test</h3>
      <p className="text-accent">accent color test</p>
      <p className="text-text">texto</p> */}
    </Layout>
  );
};

export default PortfolioMainPage;
