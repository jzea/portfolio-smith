import { Card, CardContent } from "../components/ui/card";

export const UxZrestaurant = (): JSX.Element => {
  // Role details
  const roleDetails = [
    "UX Research: Interviews, competitive analysis.",
    "Design: Wireframes → high-fidelity prototypes.",
    "Testing: Conducted usability studies.",
    "Accessibility: Color contrast, scalable fonts.",
  ];

  // Problem details
  const problemDetails = [
    "Many restaurants in smaller cities in Peru lacked any system for handling digital orders. Orders were usually taken over the phone, which led to:",
    "Human error in order details",
    "No tracking or preparation estimates",
    "Confusion about payment and pickup/delivery timing",
  ];

  // Goal details
  const goalDetails = [
    "Provide an intuitive dashboard for restaurants to manage online orders",
    "Allow restaurants to set preparation times for each order",
    "Enable staff to monitor order status in real-time (New, Preparing, Ready, Delivered)",
    "Design a responsive interface that works on desktops and tablets",
  ];

  // Research summary details
  const researchSummaryDetails = [
    "We interviewed 8 restaurant owners and staff:",
    "75% said taking orders by phone was stressful and error-prone",
    "Most had never used a digital order system before",
    "Simplicity and visibility were top priorities",
    "They wanted to avoid installing new apps—browser-based was preferred",
  ];

  // High-fidelity prototype details
  const highFidelityDetails = [
    "Integrated brand colors (red, cyan, white)",
    "Polished UI elements like buttons, icons, and typography",
    "Accessible design: high contrast, readable type, and big touch areas",
    "Sound when entering an order",
  ];

  // Outcomes details
  const outcomesDetails = [
    "Over 50 restaurants onboarded within the first month",
    "70% reported fewer mistakes and faster order management",
    "Increased delivery completion rate during peak COVID months",
    "Became a reliable tool for food and medicine distribution during lockdowns",
  ];

  // Final prototype images
  const prototypeImages = [
    { src: "/desktop---4.png", alt: "Desktop" },
    { src: "/desktop---3.png", alt: "Desktop" },
    { src: "/desktop---1.png", alt: "Desktop" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] relative">
        <main className="px-[100px] py-16">
          <section className="flex flex-col md:flex-row gap-10 mb-16">
            <div className="flex-1">
              <h1 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
                ZAliados (App Restaurant Management)
              </h1>

              <p className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] mb-10 max-w-[593px]">
                To support the growing demand for online orders during and after
                the pandemic, we built a restaurant-facing web app for ZPedidos.
                This tool empowers local restaurants to manage online orders
                with ease, helping them adapt to a new digital workflow.
              </p>

              <div className="mb-10">
                <h2 className="font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)] mb-2">
                  Project duration
                </h2>
                <p className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                  March 2021 to July 2021
                </p>
              </div>
            </div>

            <div className="relative w-full md:w-[498px] h-[332px]">
              <img
                className="absolute w-[258px] h-6 top-[273px] left-[120px]"
                alt="Background"
                src="/background.png"
              />
              <div className="absolute w-full h-[332px] top-0 left-0">
                <div className="h-[332px]">
                  <div className="relative w-full h-[332px]">
                    <img
                      className="absolute w-full h-72 top-0 left-0"
                      alt="Group"
                      src="/group.png"
                    />
                    <img
                      className="absolute w-[467px] h-[261px] top-[71px] left-[15px]"
                      alt="Mask group"
                      src="/mask-group.png"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              My role
            </h2>
            <ul className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] ml-[60px]">
              {roleDetails.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              The problem
            </h2>
            <div className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] max-w-[1238px]">
              {problemDetails.map((detail, index) => (
                <p key={index} className="mb-1">
                  {detail}
                </p>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              The Goal
            </h2>
            <ul className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] ml-[80px]">
              {goalDetails.map((detail, index) => (
                <li key={index} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              User Research Summary
            </h2>
            <ul className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] ml-[80px]">
              {researchSummaryDetails.map((detail, index) => (
                <li key={index} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              User Journey Map
            </h2>
            <div className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] ml-[251px] mb-6">
              <p>Persona: Omar, restaurant owner</p>
              <p>Scenario: Receiving and processing a new online order</p>
            </div>
            <div className="flex justify-center mb-10">
              <img
                className="w-[991px] h-[510px]"
                alt="Rectangle"
                src="/rectangle-61.png"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              Ideation &amp; Sketching
            </h2>
            <div className="flex justify-center mb-10">
              <img
                className="w-[1060px] h-[408px]"
                alt="Sketch"
                src="/sketch1746955911038-1.png"
              />
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              Wireframes &amp; Prototypes
            </h2>
            <div className="flex flex-col md:flex-row gap-10 mb-6">
              <div className="flex-1">
                <p className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                  I used the Poppins family font because I wanted to convey a
                  fun and elegant page, also, I added different circles
                  representing images, like a hamburger, pizza and more. This is
                  the cover page where the client has to put the address. After
                  this process, the customer will see the restaurants and other
                  services around his area.
                </p>
              </div>
              <div className="flex-none">
                <img
                  className="w-[425px] h-[302px] object-cover"
                  alt="Wireframe zaliados"
                  src="/wireframe-zaliados-1.png"
                />
              </div>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              Usability Testing
            </h2>
            <div className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] max-w-[642px] mx-auto">
              <p>Conducted with 4 real users from partner restaurants.</p>
              <p className="font-bold mt-2">Findings:</p>
              <ul className="list-disc pl-6 mb-2">
                <li>All completed tasks successfully</li>
                <li>Liked the visual clarity and status progression</li>
                <li>
                  Requested sound notifications for new orders (added later)
                </li>
              </ul>
              <p className="font-bold mt-2">Changes Made:</p>
              <ul className="list-disc pl-6">
                <li>Increased font sizes</li>
                <li>Added &#34;undo&#34; on status changes</li>
                <li>Enabled sound + pop-up for new orders</li>
              </ul>
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              High-Fidelity Prototype
            </h2>
            <ul className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)] mb-6">
              {highFidelityDetails.map((detail, index) => (
                <li key={index} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap justify-center gap-[33px] mb-10">
              {prototypeImages.map((image, index) => (
                <Card key={index} className="border-none shadow-none">
                  <CardContent className="p-0">
                    <img
                      className="w-[361px] h-[257px] object-cover"
                      alt={image.alt}
                      src={image.src}
                    />
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)] mb-6">
              Outcomes
            </h2>
            <ul className="font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              {outcomesDetails.map((detail, index) => (
                <li key={index} className="mb-1">
                  {detail}
                </li>
              ))}
            </ul>
          </section>
        </main>
      </div>
    </div>
  );
};
