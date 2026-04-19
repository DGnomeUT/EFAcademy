export default function EnrolPage() {
  return (
    <>
      <section className="bg-[#1A2E4A] pt-36 pb-16 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto">
          <p className="text-[#C9A84C] text-xs font-bold tracking-[0.2em] uppercase mb-3">Enrol & Get in Touch</p>
          <h1 className="font-serif text-white text-4xl md:text-5xl font-bold mb-4 max-w-2xl">
            Speak to Us Before You Commit.
          </h1>
          <p className="text-[#E8D4A0] text-lg max-w-xl leading-relaxed">
            We respond to all enquiries within 2 business days.
          </p>
        </div>
      </section>

      <section className="bg-white py-20 px-6 lg:px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-14">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="gold-rule" />
            <h2 className="font-serif text-[#1A2E4A] text-2xl font-bold mb-8">Send an Enquiry</h2>
            <form className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Full Name *</label>
                  <input type="text" required className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Your full name" />
                </div>
                <div>
                  <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Job Title *</label>
                  <input type="text" required className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Your current role" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Organisation *</label>
                  <input type="text" required className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="Company / institution" />
                </div>
                <div>
                  <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Email Address *</label>
                  <input type="email" required className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="your@email.com" />
                </div>
              </div>
              <div>
                <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Course of Interest</label>
                <select className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors bg-white">
                  <option value="">Select a course</option>
                  <option>Real World Tokenization — Foundation ($500)</option>
                  <option>Real World Tokenization — Executive ($1,250)</option>
                  <option>Islamic Finance & Shariah-Compliant Structuring (Notify Me)</option>
                  <option>Group / Institutional Licensing</option>
                  <option>General Enquiry</option>
                  <option>Corporate Partnership</option>
                </select>
              </div>
              <div id="group">
                <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Number of Participants (for group enquiries)</label>
                <input type="number" min="1" className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors" placeholder="e.g. 5" />
              </div>
              <div>
                <label className="block text-[#1A2E4A] text-sm font-medium mb-1">Message</label>
                <textarea rows={5} className="w-full border border-[#D0D4D8] px-4 py-3 text-sm text-[#1A2E4A] focus:outline-none focus:border-[#C9A84C] transition-colors resize-none" placeholder="Tell us about your background and what you are looking to achieve..." />
              </div>
              <button type="submit" className="w-full py-4 bg-[#C9A84C] text-[#1A2E4A] font-bold text-sm tracking-wide hover:bg-[#E8D4A0] transition-colors">
                Submit Enquiry
              </button>
              <p className="text-[#4A5568] text-xs text-center">We respond to all enquiries within 2 business days.</p>
            </form>
          </div>

          {/* Sidebar info */}
          <aside>
            <div className="bg-[#F4F5F6] p-6 mb-6">
              <h3 className="font-serif text-[#1A2E4A] text-lg font-bold mb-4">Contact Details</h3>
              <div className="space-y-3 text-sm">
                <div>
                  <p className="text-[#C9A84C] font-semibold text-xs uppercase tracking-wider mb-1">General Enquiries</p>
                  <a href="mailto:hello@executivefinanceacademy.com" className="text-[#4A5568] hover:text-[#C9A84C]">hello@executivefinanceacademy.com</a>
                </div>
                <div>
                  <p className="text-[#C9A84C] font-semibold text-xs uppercase tracking-wider mb-1">Corporate & Group</p>
                  <a href="mailto:corporate@executivefinanceacademy.com" className="text-[#4A5568] hover:text-[#C9A84C]">corporate@executivefinanceacademy.com</a>
                </div>
              </div>
            </div>

            <div className="bg-[#1A2E4A] p-6">
              <h3 className="font-serif text-white text-lg font-bold mb-3">Group & Institutional Licensing</h3>
              <p className="text-[#E8D4A0] text-sm leading-relaxed mb-4">
                Executive Finance Academy offers institutional access for teams of three or more. Group enrolments receive all course materials, a dedicated Q&A session with course authors, and a custom cohort option for teams of 10+.
              </p>
              <p className="text-[#C9A84C] text-sm font-semibold">Contact us to discuss pricing and structure.</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
