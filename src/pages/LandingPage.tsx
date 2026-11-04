import { Calendar, Clock, MapPin, X, Check, Users, TrendingUp, Camera } from 'lucide-react'
import Navbar from '../components/Navbar'
import Chip from '../components/Chip'
import Card from '../components/Card'
import CtaButton from '../components/CtaButton'
import DetailItem from '../components/DetailItem'
import Gallery from '../components/Gallery'
import MiniFooter from '../components/MiniFooter'
import Reveal from '../components/Reveal'
import LiveDot from '../components/LiveDot'
import Countdown from '../components/Countdown'
import RegistrationForm from '../components/RegistrationForm'

const WHO_LINES = [
  "You started trading last week and you're still finding your feet? Come.",
  "You've been trading for months but your results keep swinging up and down? Come.",
  "You're already deep in synthetic indices and you want to sharpen your edge? Come.",
  "You have capital and you're looking for where smart money is moving? Definitely come.",
]

const NEGATIVES = [
  'Guessing the market and hoping for the best',
  'Inconsistent results with nobody to ask why',
  'Watching strangers flex profits online with zero proof',
  'Learning from random videos with no real strategy',
]

const POSITIVES = [
  'Live market breakdowns from experienced analysts, in real time',
  'A room full of your people. The network that determines your trading level',
  'Access to the Weltrade Copy Trading Platform, even if you opened your first chart yesterday',
  'Real giveaways: phones, power banks, refreshments',
]

function BoldTail({ text, tail }: { text: string; tail: string }) {
  const head = text.slice(0, text.length - tail.length)
  return (
    <>
      {head}
      <strong>{tail}</strong>
    </>
  )
}

export default function LandingPage() {
  return (
    <>
      <Navbar />
      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden bg-wt-blue-deep scroll-mt-24 pt-32 pb-[clamp(56px,9vw,110px)] px-4"
        >
          <div className="absolute inset-0 hero-glow-dark pointer-events-none" />
          <div className="candlestick-bg" />
          <span className="float-dot-a absolute top-20 left-[12%] w-2 h-2 rounded-full bg-wt-gold pointer-events-none" />
          <span className="float-dot-b absolute top-40 right-[14%] w-1.5 h-1.5 rounded-full bg-wt-gold pointer-events-none" />
          <span className="float-dot-c absolute bottom-28 left-[38%] w-2 h-2 rounded-full bg-wt-gold pointer-events-none" />
          <div className="relative z-10 max-w-5xl mx-auto grid lg:grid-cols-2 gap-8 lg:gap-x-12">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:col-start-1 lg:row-start-1">
              <div className="inline-flex items-center gap-2 rounded-full px-4 py-2 bg-[rgba(30,155,250,0.15)] text-white text-[clamp(13px,1vw,15px)] font-semibold uppercase tracking-[0.06em]">
                <LiveDot />
                LIVE TRADING EXPERIENCE
              </div>
              <h1 className="text-[clamp(34px,7vw,60px)] leading-[1.1] tracking-[-0.02em] font-bold text-white max-w-xl">
                Lagos, <span className="text-gradient-headline-dark">We're Back!!!</span>
              </h1>
            </div>

            <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2">
              <RegistrationForm />
            </div>

            <div className="flex flex-col items-center lg:items-start text-center lg:text-left gap-6 lg:col-start-1 lg:row-start-2">
              <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-blue-100/80 max-w-xl">
                The first Lagos edition was a hit. This one is bigger. Welcome to the Weltrade Lagos Synthetic Trading Summit 2.0. Now the biggest synthetic trading event of the year is back to LAGOS.
              </p>
              <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-blue-100/80 max-w-xl">
                Curious about synthetic trading? Just starting out? Already in the industry? There is a seat for you. Come and learn, connect with other synthetic traders, explore market insights and discover new strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-6 bg-white/10 border border-white/10 rounded-3xl px-[clamp(18px,3vw,28px)] py-4">
                <DetailItem icon={Calendar} text="Saturday, November 28th" dark />
                <DetailItem icon={Clock} text="9:00 AM" dark />
                <DetailItem icon={MapPin} text="Water Cress, Ikeja, Allen, Lagos" dark />
              </div>
              <Countdown />
              <p className="text-white font-semibold">
                Entry is 100% FREE. Seats are not. Once the hall is full, the doors close. <br>Giveaway and refreshments on the day.</br>
              </p>
            </div>
          </div>
        </section>

        {/* Who Should Sign Up */}
        <section id="who-this-is-for" className="scroll-mt-24 py-[clamp(56px,9vw,110px)] px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            <Reveal className="flex flex-col items-center gap-6">
              <Chip label="WHO THIS IS FOR" icon={Users} />
              <h2 className="text-[clamp(28px,5vw,44px)] leading-[1.15] font-bold text-wt-blue-deep max-w-2xl">
                If you trade, or you want to, this room was built for you.
              </h2>
            </Reveal>
            <div className="w-full max-w-2xl flex flex-col gap-3">
              {WHO_LINES.map((line, index) => {
                const tail = line.endsWith('Definitely come.') ? 'Definitely come.' : 'Come.'
                return (
                  <Reveal key={line} delayMs={index * 80}>
                    <Card className="accent-bar-left text-left !py-4 transition-transform duration-200 hover:translate-x-1">
                      <p className="text-wt-blue-deep">
                        <BoldTail text={line} tail={tail} />
                      </p>
                    </Card>
                  </Reveal>
                )
              })}
            </div>
            <CtaButton scrollTo="hero-form">RESERVE MY FREE SEAT &rarr;</CtaButton>
          </div>
        </section>

        {/* Gallery */}
        <section id="gallery" className="scroll-mt-24 py-[clamp(56px,9vw,110px)] px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            <Reveal className="flex flex-col items-center gap-6">
              <Chip label="PROOF, NOT PROMISES" icon={Camera} />
              <h2 className="text-[clamp(28px,5vw,44px)] leading-[1.15] font-bold text-wt-blue-deep max-w-2xl">
                We've done this before. Many times.
              </h2>
            </Reveal>
            <Reveal className="w-full">
              <Gallery />
            </Reveal>
            <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-wt-gray-text max-w-2xl">
              Packed halls. Live sessions. Traders connecting. Now it's coming back to Lagos on 28 November.
            </p>
          </div>
        </section>

        {/* What Happens Inside */}
        <section id="what-happens-inside" className="scroll-mt-24 py-[clamp(56px,9vw,110px)] px-4">
          <div className="max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            <Reveal className="flex flex-col items-center gap-6">
              <Chip label="WHAT HAPPENS INSIDE" icon={TrendingUp} />
              <h2 className="text-[clamp(28px,5vw,44px)] leading-[1.15] font-bold text-wt-blue-deep max-w-2xl">
                This time, it is <span className="text-gradient-headline">"BIGGER!"</span>
              </h2>
              <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-wt-gray-text max-w-2xl">
                Nobody is reading PowerPoint slides to you for four hours. This is a LIVE Trading
                Experience. Charts open. Markets moving. Real analysis happening in front of you,
                in real time.
              </p>
            </Reveal>
            <Reveal className="w-full">
              <div className="w-full grid md:grid-cols-2 gap-8 text-left mt-4">
                <div className="flex flex-col gap-3 bg-red-500/[0.03] rounded-3xl p-4 sm:p-6">
                  <h3 className="font-bold text-wt-blue-deep">Trading alone looks like:</h3>
                  {NEGATIVES.map((line) => (
                    <Card key={line} className="flex items-center gap-3 !py-4">
                      <span className="shrink-0 w-8 h-8 rounded-full bg-wt-red-soft flex items-center justify-center">
                        <X size={16} className="text-wt-blue-deep" />
                      </span>
                      <span className="text-wt-gray-text">{line}</span>
                    </Card>
                  ))}
                </div>
                <div className="flex flex-col gap-3 bg-wt-blue/[0.03] rounded-3xl p-4 sm:p-6">
                  <h3 className="font-bold text-wt-blue-deep">November 28th looks like:</h3>
                  {POSITIVES.map((line) => (
                    <Card
                      key={line}
                      className="accent-bar-left flex items-center gap-3 !py-4 shadow-[0_2px_8px_rgba(10,20,69,0.08),0_16px_40px_rgba(10,20,69,0.12)]"
                    >
                      <span className="shrink-0 w-8 h-8 rounded-full bg-wt-green-soft flex items-center justify-center">
                        <Check size={16} className="text-wt-blue-deep" />
                      </span>
                      <span className="text-wt-blue-deep">{line}</span>
                    </Card>
                  ))}
                </div>
              </div>
            </Reveal>
            <CtaButton scrollTo="hero-form">I'M COMING. SAVE MY SEAT &rarr;</CtaButton>
          </div>
        </section>

        {/* Final Push */}
        <section
          id="final-push"
          className="relative overflow-hidden bg-wt-blue-deep scroll-mt-24 py-[clamp(56px,9vw,110px)] px-4"
        >
          <div className="absolute inset-0 hero-glow-dark pointer-events-none" />
          <div className="candlestick-bg" />
          <Reveal className="relative z-10 max-w-5xl mx-auto flex flex-col items-center text-center gap-6">
            <h2 className="text-[clamp(28px,5vw,44px)] leading-[1.15] font-bold text-white max-w-2xl">
              One Saturday. One room. Zero excuses. <span className="text-wt-gold">LAGOS 2.0</span>
            </h2>
            <p className="text-[clamp(15px,1.2vw,18px)] leading-[1.6] text-blue-100/80 max-w-2xl">
              You heard what happened at the first edition. This one is bigger. Don't just hear the stories this time. Come and experience it for yourself.
            </p>
            <div className="flex flex-col gap-2 bg-white/10 border border-white/10 rounded-3xl px-[clamp(18px,3vw,28px)] py-4 w-full max-w-md">
              <DetailItem icon={MapPin} text="Water Cress, Ikeja, Allen, Lagos" dark />
              <DetailItem icon={Calendar} text="Saturday, November 28th, 2026" dark />
              <DetailItem icon={Clock} text="9:00 AM prompt" dark />
            </div>
            <CtaButton scrollTo="hero-form">RESERVE MY FREE SEAT NOW &rarr;</CtaButton>
            <p className="text-blue-100/60 text-sm">
              Free entry. Limited seats. First come, first seated. Giveaway and refreshments on the day.
            </p>
          </Reveal>
        </section>

        <MiniFooter />
      </main>
    </>
  )
}
