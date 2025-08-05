import CustomSection from "./smallgrid";

export default function ServicesSection() {
  return (
    <section className="flex flex-col w-full h-fit gap-2 opacity-100 p-4">
      <h1 className="flex flex-col gap-2 opacity-100 px-2 text-xl font-semibold">
        Our Services
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full max-w-full h-fit">
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
