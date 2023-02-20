import {
  AboutSection,
  ContactSection,
  Footer,
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
      <Footer />
    </Layout>
  );
};

export default PortfolioMainPage;
