import { Briefcase, Code, User } from "lucide-react";
import { Link as ScrollLink } from "react-scroll";
export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Aspiring Web Developer & Software Enthusiast
            </h3>

            <p className="text-muted-foreground">
              As a recent graduate majoring in Software Development, I have
              hands-on experience in building responsive and dynamic web
              applications using technologies like ReactJS, Tailwind CSS, Spring
              Boot, Java, and MySQL.
            </p>

            <p className="text-muted-foreground">
              I’m passionate about developing practical solutions, learning new
              technologies, and improving my skills in both frontend and backend
              development. I'm eager to contribute to real-world projects and
              grow within a collaborative, professional environment.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <ScrollLink
                to="contact"
                smooth="easeInOutCubic"
                duration={200}
                offset={-60}
                className="cosmic-button cursor-pointer">
                Get In Touch
              </ScrollLink>

              <a
                href="https://drive.google.com/file/d/1VA_Yihl4QNT_DNnkL6pwUCgfxTABunfQ/view?usp=drive_link"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300">
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Building responsive websites and applications using modern
                    frontend and backend technologies.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">API Integration</h4>
                  <p className="text-muted-foreground">
                    Connecting frontend interfaces with backend services through
                    RESTful APIs to ensure smooth data flow and application
                    functionality.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">Project Management</h4>
                  <p className="text-muted-foreground">
                    Working on team-based projects and following agile
                    development practices to deliver functional software.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
