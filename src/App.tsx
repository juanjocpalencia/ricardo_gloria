import AboutMe from "./components/AboutMe";
import { Header } from "./components/Header";
import ProfileCard from "./components/ProfileCard";
import { Projects } from "./components/Projects";



export default function App() {
  return (
    <>
      <Header />
      <div className="grid lg:grid-flow-col gap-4">
        <ProfileCard  />
        <AboutMe />
      </div>
      <Projects/>
    </>
  )
}