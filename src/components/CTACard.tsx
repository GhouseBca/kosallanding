
import { GradientCTA } from "./gradient-cta"

export default function AccelerateSection() {
  return (
    <div className=" mx-auto px-20 space-y-8">



      {/* CTA with gradient background */}
      <GradientCTA className="p-8 h-[400px] text-center" colors={["#060521", "#bb66e8", "#5c5fff", "#f97eff"]} speed={0.9}>
        <h2 className="text-3xl font-bold text-white mb-4"> Ready to accelerate your development?</h2>
        <p className="text-white/90 mb-6 text-lg"> Join hundreds of companies that trust Kosal to deliver high-<br />quality software engineering talent.</p>
        <button className="bg-white text-gray-900 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
          Contact Us
        </button>
      </GradientCTA>

      {/* Another regular section */}

    </div>
  )
}
