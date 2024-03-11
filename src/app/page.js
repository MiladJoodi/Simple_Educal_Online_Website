import HomeContent from "@/components/HomeContent";
import AboutPage from "./about/page";
import CoursesPage from "./courses/page";
import InstructorPage from "./instructor/page";
import BlogPage from "./blog/page";

export default function Home() {
  return (
    <>
      <HomeContent />
      <AboutPage />
      <br />
      <br />
      <br />
      <CoursesPage />
      <InstructorPage />
      <BlogPage />
    </>
  );
}
