import {
  AboutSection,
  ContactSection,
  Layout,
  MainSection,
  ProjectsSection,
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
      <ProjectsSection />
      <ContactSection />
    </Layout>
  );
};

export default PortfolioMainPage;
