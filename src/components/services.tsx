import CustomSection from "./smallgrid";

export default function ServicesSection() {
  return (
    <section
      className="flex flex-col w-full h-fit gap-2 opacity-100 p-4"
    >
      <h1
        className="flex flex-col gap-2 opacity-100 px-2"
      >
        {/* You can add your title text here */}
        Our Services
      </h1>

      <div className="w-fit h-fit grid grid-cols-3 grid-row-2 gap-4">
        <CustomSection
          heading="Web Development"
          paragraph="A Restaurant Management Tool"
          imageSrc="/icons/Group.svg"
          imageAlt="web icon"
        />
        <CustomSection
          heading="App Development"
          paragraph="A Collection Management Software"
          imageSrc="/icons/Mobile.svg"
          imageAlt="app icon"
        />
        <CustomSection
          heading="Backend Development"
          paragraph="A Collection Management Software"
          imageSrc="/icons/Server.svg"
          imageAlt="backend icon"
        />
        <CustomSection
          heading="API Development"
          paragraph="AI Agent for Content Creation"
          imageSrc="/icons/Code.svg"
          imageAlt="api icon"
        />
        <CustomSection
          heading="Data Analytics"
          paragraph="CRM Software for Retail Businesses."
          imageSrc="/icons/Data.svg"
          imageAlt="data icon"
        />
        <CustomSection
          heading="UI/UX Design"
          paragraph="CRM Software for Retail Businesses."
          imageSrc="icons/Design.svg"
          imageAlt="ui/ux icon"
        />
      </div>
    </section>
  );
}
