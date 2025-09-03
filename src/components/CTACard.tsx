import { GradientCTA } from "./gradient-cta";

export default function AccelerateSection() {
  return (
    <div className="dark:bg-gradient-to-b dark:from-[#161616] dark:to-black mx-auto w-full h-fit space-y-[32px] opacity-100 rounded-[40px] p-[24px] md:rounded-[48px] md:p-[40px] lg:space-y-[40px] lg:rounded-[56px] lg:p-[48px] xl:space-y-[40px] xl:rounded-[56px] xl:p-[48px]">

      {/* Light mode GradientCTA */}
      <div className="block dark:hidden">
        <GradientCTA
          className="p-8 h-[400px] text-center"
          colors={["#060521", "#bb66e8", "#5c5fff", "#f97eff"]}
          speed={0.9}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to accelerate your development?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Join hundreds of companies that trust Kosal to deliver high-<br />
            quality software engineering talent.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </GradientCTA>
      </div>

      {/* Dark mode GradientCTA */}
      <div className="hidden dark:block">
        <GradientCTA
          className="p-8 h-[400px] text-center"
          colors={["#161616", "#0f766e", "#9333ea", "#1f2937"]} // dark colors
          speed={0.9}
        >
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to accelerate your development?
          </h2>
          <p className="text-white/90 mb-6 text-lg">
            Join hundreds of companies that trust Kosal to deliver high-<br />
            quality software engineering talent.
          </p>
          <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
            Contact Us
          </button>
        </GradientCTA>
      </div>

    </div>
  );
}
