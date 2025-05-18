import { Card, CardContent } from "../components/ui/card";

// Define sections data
const sections = [
  {
    id: "problem",
    title: "The Problem",
    top: "1105px",
    content: `When I set out to create the site, my goal was to make it look clean and elegant, striking a balance between simplicity and sophistication. 
    Along the way, we faced quite a few challenges, like figuring out how to program directly within Shopify's platform, which wasn't always straightforward. Another hurdle was designing certain paid features, but in the end, we decided to build them from scratch to keep costs down while still delivering exactly what we needed.
    At its core, the main purpose of the site is to help the artist showcase her work and share it with the world, creating a space where she can promote herself and sell her art seamlessly..

    Aayra, an abstract artist, sought to establish an online presence that would: 
    • Showcase her unique art pieces in a modern, immersive layout. 
    • Build a personal connection through storytelling and visuals. 
    • Provide an easy-to-navigate e-commerce experience. 
    • Drive users to purchase or inquire about customized art. 
    • Integrate social proof through reviews and Instagram.`,
  },
  {
    id: "solution",
    title: "The Solution",
    top: "2071px",
    content: `We designed a responsive website that:
    Features a full-width hero section with ambient interior imagery and compelling typography to evoke emotion.
    Presents a clean product grid with consistent pricing and styling.
    Tells Aayra's story through an "About the Artist" section with a personal portrait.
    Incorporates a reviews carousel for social proof.
    Includes a strong call-to-action in the footer to encourage communication.`,
  },
];

// Define design process subsections
const designProcessSections = [
  {
    title: "Discovery",
    content: `
    User Research: Identified target audiences, including art enthusiasts, interior decorators, and online shoppers seeking unique pieces.
    Competitive Analysis: Studied competitor artist sites and e-commerce art platforms to understand industry standards and opportunities for differentiation.`,
  },
  {
    title: "Wireframing",
    content: `
    Drafted a clean homepage layout prioritizing visual storytelling with large product images and minimal text.
    Established a clear hierarchy: Hero → Product Showcase → About → Reviews → Contact.`,
  },
  {
    title: "Visual Design",
    content: `
    Color Scheme: Earthy tones with contrast (e.g., white, dark brown, soft peach) to reflect the artist's palette.
    Typography: Elegant serif for headlines, modern sans-serif for body copy to balance sophistication and readability.
    Imagery: High-quality mockups of artwork in real spaces to build emotional appeal.
    CTA Buttons: Clear, accessible "Shop Art" and "See Instagram" actions to guide user interaction.`,
  },
  {
    title: "Implementation",
    content: `
    Platform: Built on Shopify for robust e-commerce capabilities.
    Custom Features: Integrated Instagram feed and WhatsApp chat button for enhanced user engagement.
    Performance Optimization: Compressed images and implemented lazy loading to ensure fast load times.

    I have created a foreign exchange tool. 
    Automatic scrolling content slider with text. Hover
    interaction stops animation for improved readability
    and user control.`,
  },
];

// Define final sections
const finalSections = [
  {
    title: "Results",
    content: `
    User Engagement: Increased time on site and lower bounce rates due to improved navigation and storytelling.
    Sales Conversion: Higher conversion rates attributed to streamlined checkout process and compelling product presentation.
    Brand Perception: Positive feedback from visitors and early customers, noting the site's aesthetic alignment with Aayra's artwork.`,
  },
  {
    title: "Future Enhancements",
    content: `
    Product Filters: Implement filters by size, type, and color to enhance user experience.
    Personalized Art Requests: Enable custom art inquiries through a dedicated form.
    SEO Optimization: Enhance discoverability through targeted keywords and metadata improvements.`,
  },
  {
    title: "Conclusion",
    content: `
    The ArtByAayra project successfully merges artistic expression with functional design. By blending storytelling, visual
    harmony, and intuitive UX, the site delivers a memorable user experience that reflects Aayra's vision and values.`,
  },
];

export const UxAayra = (): JSX.Element => {
  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-full max-w-[1440px] relative">
        {/* Header */}

        {/* Project Introduction */}
        <section className="px-[99px] pt-[163px]">
          <div className="relative w-full max-w-[1354px]">
            <h1 className="font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Art by Aayra
            </h1>

            <p className="mt-[62px] font-text-1 text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              Art by Aayra is a website for an artist that my brother and I
              created. I enjoyed <br />
              the challenged to improve the logo and released this new page.
            </p>

            <div className="mt-[70px] flex flex-row gap-16">
              <div className="flex-1">
                <div className="flex items-center gap-4">
                  <img
                    className="w-[39px] h-[39px] object-cover"
                    alt="Image"
                    src="/image-5.png"
                  />
                  <h3 className="font-h4 text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                    The product
                  </h3>
                </div>
                <p className="mt-6 font-text-1 text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                  A responsive e-commerce website showcasing Aayra's modern wall
                  art, designed to:
                  <br />
                  Elevate her brand as an artist-engineer.
                  <br />
                  Simplify art buying for collectors.
                  <br />
                  Increase sales through immersive storytelling.
                </p>

                <div className="mt-12 flex items-start gap-4">
                  <div className="w-[39px] h-[39px] bg-[#e71a1a] rounded-[19.5px]" />
                  <div>
                    <h3 className="font-h4 text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                      Project duration
                    </h3>
                    <p className="mt-2 font-text-1 text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                      Apr 2025 to May 2025
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <div className="relative w-[348px] h-[564px] mx-auto">
                  <img
                    className="absolute w-[348px] h-[19px] top-[545px] left-0"
                    alt="Group"
                    src="/group.png"
                  />
                  <div className="absolute w-[262px] h-[529px] top-0 left-[43px]">
                    <img
                      className="absolute w-[258px] h-[529px] top-0 left-0.5"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                    <img
                      className="absolute w-[255px] h-[527px] top-px left-[3px]"
                      alt="Vector"
                      src="/vector-3.svg"
                    />
                    <img
                      className="absolute w-[249px] h-[521px] top-1 left-[7px]"
                      alt="Vector"
                      src="/vector-7.svg"
                    />
                    <img
                      className="absolute w-[233px] h-[504px] top-3 left-[15px]"
                      alt="Mask group"
                      src="/qwe.png"
                    />
                    <div className="absolute w-[262px] h-[129px] top-[84px] left-0">
                      <img
                        className="absolute w-0.5 h-16 top-[51px] left-[260px]"
                        alt="Group"
                        src="/group-1.png"
                      />
                      <img
                        className="absolute w-0.5 h-10 top-[38px] left-0"
                        alt="Group"
                        src="/group-2.png"
                      />
                      <img
                        className="absolute w-0.5 h-10 top-[89px] left-0"
                        alt="Group"
                        src="/group-3.png"
                      />
                      <img
                        className="absolute w-0.5 h-[21px] top-0 left-0"
                        alt="Group"
                        src="/group-4.png"
                      />
                    </div>
                    <div className="absolute w-[58px] h-[17px] top-5 left-[101px] bg-[url(/vector-2.svg)] bg-[100%_100%]">
                      <div className="relative w-[7px] h-[7px] top-[5px] left-11 bg-[url(/vector-6.svg)] bg-[100%_100%]">
                        <div className="relative w-1 h-1 top-0.5 left-0.5 bg-[url(/vector.svg)] bg-[100%_100%]">
                          <img
                            className="absolute w-1 h-1 top-0 left-0"
                            alt="Camera"
                            src="/camera.png"
                          />
                          <img
                            className="absolute w-px h-px top-0.5 left-[3px] bg-blend-screen"
                            alt="Vector"
                            src="/vector-10.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creating the brand */}
        <section className="px-[99px] mt-[100px]">
          <h2 className="font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Creating the brand
          </h2>
          <p className="mt-6 font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
            I had a lot of fun transforming the logo into a good quality vector,
            which now she can modify the logo, colors or even to send to print.
            Moreover I designed other graphics related to improve the website.
          </p>

          <div className="flex justify-center mt-8">
            <div className="flex gap-8">
              <img
                className="w-[349px] h-[157px] object-cover"
                alt="Logo home page"
                src="/logo-home-page-1.png"
              />
              <img
                className="w-[214px] h-[165px]"
                alt="Rectangle"
                src="/rectangle-19.png"
              />
            </div>
          </div>
        </section>

        {/* Problem and Solution Sections */}
        {sections.map((section) => (
          <section
            key={section.id}
            className="px-[99px] mt-16"
            style={{ marginTop: section.top === "1105px" ? "80px" : "120px" }}
          >
            <h2 className="font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              {section.title}
            </h2>
            <p className="mt-6 font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] whitespace-pre-line">
              {section.content}
            </p>

            {section.id === "problem" && (
              <div className="mt-8 flex justify-center">
                <img
                  className="w-[723px] h-[460px]"
                  alt="Image"
                  src="/borra.png"
                />
              </div>
            )}

            {section.id === "solution" && (
              <div className="mt-12 flex justify-center gap-12">
                <Card className="w-[531px]">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-[39px] h-[39px] object-cover"
                        alt="Image"
                        src="/image-7.png"
                      />
                      <p className="mt-4 font-text-1 text-black text-[length:var(--text-1-font-size)] text-center tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                        My role:
                        <br />
                        UX Research: Interviews, competitive analysis.
                        <br />
                        Design: Wireframes → high-fidelity prototypes.
                        <br />
                        Testing: Conducted usability studies with art buyers.
                        <br />
                        Accessibility: Color contrast, scalable fonts, video
                        subtitles..
                      </p>
                    </div>
                  </CardContent>
                </Card>

                <Card className="w-[504px]">
                  <CardContent className="pt-6">
                    <div className="flex flex-col items-center">
                      <img
                        className="w-[39px] h-[39px] object-cover"
                        alt="Image"
                        src="/image-8.png"
                      />
                      <p className="mt-4 font-text-1 text-black text-[length:var(--text-1-font-size)] text-center tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                        Responsibilities:
                        <br />
                        Conducting interviews, paper and digital wireframing,
                        low and high-fidelity prototyping, conducting usability
                        studies, accounting for accessibility, iterating on
                        designs and responsive design.
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            )}
          </section>
        ))}

        {/* Design Process Section */}
        <section className="px-[99px] mt-16">
          <h2 className="font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
            Design process
          </h2>

          {designProcessSections.map((section, index) => (
            <div key={index} className="mt-10">
              <h3 className="ml-7 font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
                {section.title}
              </h3>
              <p className="mt-4 ml-16 font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] whitespace-pre-line">
                {section.content}
              </p>

              {section.title === "Wireframing" && (
                <div className="mt-8 flex justify-center">
                  <img
                    className="w-[484px] h-[998px]"
                    alt="Wireframe art by"
                    src="/wireframe-art-by-aayra-1.png"
                  />
                </div>
              )}

              {section.title === "Visual Design" && (
                <div className="mt-8 flex justify-center">
                  <div className="w-[667px] h-[408px] bg-[url(/sticket-sheet-art-by-aayra-1.png)] bg-cover bg-[50%_50%]">
                    <img
                      className="mt-[351px] ml-6 w-[350px] h-[39px]"
                      alt="Frame"
                      src="/frame-5.svg"
                    />
                  </div>
                </div>
              )}

              {section.title === "Implementation" && (
                <div className="mt-8 flex justify-between">
                  <img
                    className="w-[654px] h-[329px]"
                    alt="Aayra full design"
                    src="/aayra-full-design-1.png"
                  />
                </div>
              )}
            </div>
          ))}

          {/* Additional Implementation Images */}
          <div className="mt-16 grid grid-cols-2 gap-8">
            <div>
              <img
                className="w-[654px] h-[359px]"
                alt="Aayra full design"
                src="/aayra-full-design-3.png"
              />
              <p className="mt-4 text-right font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Image gallery showing the artwork and <br />
                how it will look on a wall.
                <br />
                <br />
                Animated count from 0 to the <br />
                number of artworks that have sold out.
              </p>
            </div>
            <div className="mt-16">
              <img
                className="w-[655px] h-[169px]"
                alt="Aayra full design"
                src="/aayra-full-design-3-1.png"
              />
              <p className="mt-4 font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                I have added testimonials this is
                <br />
                basically to gain confidence in our <br />
                our next buyers
              </p>
            </div>
          </div>

          <div className="mt-8 flex justify-between">
            <div>
              <img
                className="w-[654px] h-[273px]"
                alt="Aayra full design"
                src="/aayra-full-design-2.png"
              />
            </div>
            <div className="mt-8">
              <p className="font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                I needed to think about how the footer can be simple
                <br />
                but at the same time elegantly designed.&nbsp;&nbsp;
                <br />I also added the floating whatsapp so that everyone
                <br />
                scrolling can see the logo and communicate with <br />
                our artist.
              </p>
            </div>
          </div>
        </section>

        {/* Final Sections */}
        {finalSections.map((section, index) => (
          <section key={index} className="px-[99px] mt-16">
            <h2 className="font-h3 text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              {section.title}
            </h2>
            <p className="mt-6 ml-12 font-text-1 text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] whitespace-pre-line">
              {section.content}
            </p>
          </section>
        ))}
      </div>
    </div>
  );
};
