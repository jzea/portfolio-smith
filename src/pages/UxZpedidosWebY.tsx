import { Card, CardContent } from "../components/ui/card";

export const UxZpedidosWebY = (): JSX.Element => {
  // High-fidelity prototype images
  const prototypeImages = [
    { src: "/web-zpedidos.png", alt: "Web zpedidos" },
    { src: "/zp-web-2.png", alt: "Zp web" },
    { src: "/zp-web-3.png", alt: "Zp web" },
    { src: "/zp-web-4.png", alt: "Zp web" },
    { src: "/zp-web-5.png", alt: "Zp web" },
    { src: "/zp-web-6.png", alt: "Zp web", heightClass: "h-[472px]" },
  ];

  return (
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white overflow-hidden w-[1440px] h-[7073px] relative">
        {/* Main Content */}
        <main className="relative pt-[163px] px-[100px]">
          {/* Project Introduction */}
          <section className="mb-24">
            <h1 className="w-[281px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Zpedidos web
            </h1>
            <div className="mt-16 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              ZPedidos is a food delivery platform created to connect users with
              <br />
              local restaurants in Peru. The aim was to design a responsive,
              <br /> accessible web platform where users can browse, order, and
              <br />
              track meals easily—whether on mobile or desktop.
            </div>
          </section>

          {/* Project Duration */}
          <Card className="mb-24 w-[206px] h-14 border-0 bg-transparent shadow-none">
            <CardContent className="p-0">
              <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                Project duration
              </h3>
              <div className="mt-[29px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                March 2021 to July 2021
              </div>
            </CardContent>
          </Card>

          {/* My Role */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              My role
            </h2>
            <div className="mt-16 ml-[60px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              UX Research: Interviews, competitive analysis.
              <br />
              Design: Wireframes → high-fidelity prototypes.
              <br />
              Testing: Conducted usability studies.
              <br />
              Accessibility: Color contrast, scalable fonts.
            </div>
          </section>

          {/* The Problem */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              The problem
            </h2>
            <div className="mt-16 font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              In many Peruvian cities, food delivery was old-school—you had to
              call the restaurant, hope they got the order right, and pay in
              <br />
              cash. Most places didn&apos;t have a system to receive online
              orders, and paying by card just wasn&apos;t common. It was slow,
              unreliable, and <br />
              frustrating for both customers and restaurants.
            </div>
          </section>

          {/* The Goal */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              The Goal
            </h2>
            <div className="mt-16 ml-[80px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              Create a digital ordering system that replaces phone calls based
              food orders
              <br />
              Simplify the ordering experience with an intuitive, easy-to-use
              interface
              <br />
              Enable restaurants to receive and manage orders efficiently
              through a web platform
              <br />
              Provide flexible payment options, including cash and card, to
              match user habits
              <br />
              Build user trust through real-time order updates and transparent
              communication
              <br />
              Ensure responsive design for mobile users, who make up the
              majority of the market
            </div>
          </section>

          {/* User Research Summary */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              User Research Summary
            </h2>

            <div className="mt-16 ml-[19px]">
              <h3 className="font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] text-justify tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                Research Methods
              </h3>

              <div className="mt-5 ml-[61px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                10 semi-structured interviews with restaurant customers and
                owners
                <br />2 online surveys with 50+ responses from urban and
                semi-urban areas in different cities of Peru
                <br />
                Field observation in local restaurants during peak hours
                <br />
                Competitor analysis of existing platforms (Rappi, UberEats,
                Pedidosya, Phone calls, WhatsApp ordering)
              </div>

              <h3 className="mt-5 font-h4 font-[number:var(--h4-font-weight)] text-black text-[length:var(--h4-font-size)] text-justify tracking-[var(--h4-letter-spacing)] leading-[var(--h4-line-height)] [font-style:var(--h4-font-style)]">
                Key Insights
              </h3>

              <div className="mt-5 ml-[81px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
                Frustration with phone orders: Customers found it hard to
                explain orders, and restaurants often made mistakes.
                <br />
                Lack of visibility: No confirmation or status updates led to
                uncertainty.
                <br />
                Cash is still king: Many users preferred cash but were open to
                card payments if secure and easy.
                <br />
                Low digital adoption: Restaurants wanted to use tech but
                didn&apos;t know where to start.
                <br />
                Mobile-first behavior: Most customers used smartphones; very few
                accessed food services via desktop.
              </div>
            </div>
          </section>

          {/* User Journey Map */}
          <section className="mb-24">
            <h2 className="w-[321px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              User Journey Map
            </h2>

            <img
              className="mt-[46px] ml-[114px] w-[992px] h-[506px]"
              alt="User journey map"
              src="/user-journey-map-zpedidos-1-1.png"
            />
          </section>

          {/* Ideation & Sketching */}
          <section className="mb-24">
            <h2 className="w-[370px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Ideation &amp; Sketching
            </h2>

            <img
              className="w-[1060px] h-[636px] mt-[56px] ml-[80px] object-cover"
              alt="Sketch"
              src="/sketch1746955911038-1.png"
            />
          </section>

          {/* Wireframes & Prototypes */}
          <section className="mb-24">
            <h2 className="w-[446px] font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Wireframes &amp; Prototypes
            </h2>

            <div className="mt-[219px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              I used the Poppins family font because I wanted to convey a fun
              and elegant page, also, I added different circles representing
              images, like a hamburger, pizza and more. This is the cover page
              where the client has to put the address. After this process, the
              customer will see the restaurants and other services around his
              area.
            </div>

            <img
              className="absolute w-[337px] h-[569px] top-[63px] left-[824px] object-cover"
              alt="Wireframe"
              src="/wireframe1-1.png"
            />
          </section>

          {/* Usability Testing */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Usability Testing
            </h2>

            <div className="mt-[75px] ml-[130px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              Type: Remote, unmoderated
              <br />
              Participants: 5 users (3 customers, 2 restaurant owners)
              <br />
              Tools: Figma prototype, Zoom for recording
              <br />
              Tasks:
              <br />
              Find a restaurant and add an item to cart
              <br />
              Complete an order using cash
              <br />
              Track an order
              <br />
              Log in and view previous orders
            </div>

            <img
              className="w-[885px] h-[395px] mt-[172px] ml-[130px] object-cover"
              alt="Image"
              src="/image-9.png"
            />
          </section>

          {/* High-Fidelity Prototype */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              High-Fidelity Prototype
            </h2>

            <div className="mt-[85px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              Integrated brand colors (red, cyan, white)
              <br />
              Polished UI elements like buttons, icons, and typography
              <br />
              Accessible design: high contrast, readable type, and big touch
              areas
              <br />
              Responsive mockups for mobile and tablet breakpoints
            </div>

            <div className="flex flex-wrap w-[1082px] items-start gap-[6px_150px] mt-[104px] ml-[79px]">
              {prototypeImages.map((image, index) => (
                <img
                  key={index}
                  className={`relative w-[260px] ${
                    image.heightClass || "h-[439px]"
                  } object-cover`}
                  alt={image.alt}
                  src={image.src}
                />
              ))}
            </div>
          </section>

          {/* Outcomes */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Outcomes
            </h2>

            <div className="mt-[84px] font-text-1 font-[number:var(--text-1-font-weight)] text-black text-[length:var(--text-1-font-size)] text-justify tracking-[var(--text-1-letter-spacing)] leading-[var(--text-1-line-height)] [font-style:var(--text-1-font-style)]">
              60% drop in order abandonment
              <br />
              35% increase in weekly active users
              <br />
              Restaurants reported fewer support calls due to order visibility
            </div>
          </section>

          {/* Visit the Project */}
          <section className="mb-24">
            <h2 className="font-h3 font-[number:var(--h3-font-weight)] text-black text-[length:var(--h3-font-size)] text-justify tracking-[var(--h3-letter-spacing)] leading-[var(--h3-line-height)] [font-style:var(--h3-font-style)]">
              Visit the Project
            </h2>
          </section>
        </main>
      </div>
    </div>
  );
};
