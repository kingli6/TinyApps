// ContactPage.js

const ContactPage = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-2">About Me</h2>
          <p>
            Welcome to my website! I&apos;m Jonathan, a recent graduate in .Net System Development from ITH Yrkeshögskolan (2024). Living in Örnsköldsvik, I&apos;m a father to a adorable 5-year-old and an avid explorer of our civilization&apos;s development.
          </p>
          <p>
          IT for me, is not just a career but a window to vast knowledge that I fear I may never have time to fully explore. Due to my unique background I&apos;ve adopted a stance which lets me feel compasion and admiration towards those that touch the essence of life and its wonders. So I want to place myself where I can be apart of this magic.          </p>
          <p>
          While I educate myself in the arts of programming, I&apos;m also learning data analytics, improving writing and problem-solving skills, and honing my newfound side gig as a FloorBall referee (Innebandy domare).          </p>
        </div>

        <div>
        <h2 className="text-2xl font-semibold mb-2">Skills</h2>
        <ul className="list-disc pl-4">
            <li>JavaScript (React, Node.js)</li>
            <li>HTML, CSS</li>
            <li>Version Control (Git)</li>
            <li>ASP.NET (REST)</li>
            <li>Content Writing</li>
            <li>VSCode</li>
            <li>AI tools (ChatGPT)</li>
            <li>Scrum system</li>
        </ul>
        </div>

        <div>
        <h2 className="text-2xl font-semibold mb-2">Projects</h2>
        <div className="mb-4">
            <h3 className="text-xl font-semibold">Tiny Apps</h3>
            <p>
            Welcome to my space! Here, I&apos;ll be crafting small, useful apps and delightful widgets for both personal enjoyment and my son&apos;s entertainment. Additionally, you can explore a section where I experiment with new techniques, evaluating their effectiveness for potential implementation in various projects.
            </p>
            <p>Technologies: React, Firbebase (Google&apos;s cloud service)</p>
            <a href="https://github.com/kingli6/TinyApps" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            View on GitHub
            </a>
        </div>

        <div className="mb-4">
            <h3 className="text-xl font-semibold">NoQ</h3>
            <p>
                NoQ - en IT-lösning för att boka sovplats för de som inte har boende.
            </p>
            <p>
                Jag är en volontär som arbetar som fullstack developer. Det är en mycket spännande fas där vi har möjlighet att forma plattformen. Vi har ungefär 10 eller fler volontärer, varav många är skickliga utvecklare. Jag har möjlighet att se hur de arbetar och delta i ganska breda roller. Hittills har jag skapat en hosting- och CMS-lösning med Firebase där vi kan publicera nyheter om allt inom NoQ.
            </p>
            <p>Technologies: React, Firbebase (Google&apos;s cloud service), SpringBoot Java </p>
            <a href="https://noq-cms.web.app/" target="_blank" rel="noopener noreferrer" className="text-blue-500">
            NoQ websidan
            </a>
            
        </div>
        {/* //add the mvc project */}
        {/* Repeat for other projects */}
        </div>

        <div>
            <h2 className="text-2xl font-semibold mb-2">Achievements</h2>
            <h3 className="text-xl font-semibold">Mastered the art of healthy cooking</h3>
            <p>Where I can manage a super healthy meal while maintining cost and longevity of the meal</p>
            <h3 className="text-xl font-semibold">Mastered the art of exercising</h3>
            <p>Where I manage a balance between cardio and strength training, while focusing on flexibilty, speed and precision.</p>
            <p>But sadly it is hard to devote yourself so you turn out like BruceLee. I do not have the time.</p>
            <h3 className="text-xl font-semibold">Developing skills on how to foster a child.</h3>
            <p>It is an ongoing achievement.</p>

        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-2">Contact Information</h2>
          <p>
            Connect with me on:
            <a
              href="https://github.com/kingli6"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/j07isher/"
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 text-blue-500"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
