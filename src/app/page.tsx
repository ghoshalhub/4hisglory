"use client";

import Image from "next/image";
import { useState } from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const images = {
  hero: "/img/9.png",
  product: "/img/11.png",
  marketing: "/img/12.png",
  automation: "/img/14.png",
  outreach: "/img/29.png",
  hosting: "/img/30.png",
  chatbot: "/img/31.png",
  about: "/img/35.png",
  healthcare: "/img/38.png",
  retail: "/img/39.png",
  startup: "/img/42.png",
  professional: "/img/2.png",
};

const services = [
  {
    title: "4HISGLORY Jewelry",
    description:
      "Faith you can wear every day—crosses and Christian motifs crafted with intention so conversations about Christ begin with what you adorn.",
    icon: "M12 5v14m7-7H5",
    image: images.product,
  },
  {
    title: "4HISGLORY Entertainment",
    description:
      "Positive music, stories, and visual content inspired by Christ’s love—created to motivate people to live with integrity, hope, and purpose.",
    icon: "M12 4v4m0 0l3-3m-3 3-3-3",
    image: images.marketing,
  },
  {
    title: "Community Giveaways & Outreach",
    description:
      "Giveaways, roof builds, and acts of generosity that reflect the heart of Christ—meeting real needs throughout the Inland Empire and beyond.",
    icon: "M5 13l4 4L19 7",
    image: images.outreach,
  },
];

const missionCards = [
  {
    title: "Mission",
    copy:
      "To influence, uplift, and motivate people to follow the path of Christ through faith-based creativity, positive messaging, and real-world impact.",
  },
  {
    title: "Vision",
    copy:
      "A community where faith is lived out daily—through words, actions, art, generosity, and love. 4HISGLORY is a movement of encouragement, hope, and purpose.",
  },
];

const overviewFacts = [
  { label: "Company Name", value: "4HISGLORY" },
  { label: "Category", value: "Faith-Based Brand | Jewelry | Entertainment | Community Giveaways" },
  { label: "Service Area", value: "Inland Empire & Beyond" },
];

const overviewHighlights = [
  "Christ-centered creativity that glorifies God",
  "Meaningful products and uplifting entertainment",
  "Acts of generosity that reflect the heart of Christ",
  "Everything we do is for His glory",
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    reason: "",
    message: "",
  });

  const [newsletterEmail, setNewsletterEmail] = useState("");
  const [collaborationPrompt, setCollaborationPrompt] = useState({
    name: "",
    email: "",
    idea: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{type: 'success' | 'error', message: string} | null>(null);

  const handleContactSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: '🙏 Thank you! Your message has been received. We\'ll respond within 1-2 business days.'});
        setFormData({name: "", email: "", phone: "", reason: "", message: ""});
      } else {
        setSubmitStatus({type: 'error', message: data.error || 'Failed to send message. Please try again.'});
      }
    } catch (error) {
      setSubmitStatus({type: 'error', message: 'Network error. Please check your connection and try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCollaborationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/collaboration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(collaborationPrompt),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: '✝️ Thank you for sharing your idea! We\'ll be in touch soon.'});
        setCollaborationPrompt({name: "", email: "", idea: ""});
      } else {
        setSubmitStatus({type: 'error', message: data.error || 'Failed to submit idea. Please try again.'});
      }
    } catch (error) {
      setSubmitStatus({type: 'error', message: 'Network error. Please check your connection and try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: newsletterEmail}),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus({type: 'success', message: '✝️ Welcome to the 4HISGLORY community! Check your email for confirmation.'});
        setNewsletterEmail("");
      } else {
        setSubmitStatus({type: 'error', message: data.error || 'Failed to subscribe. Please try again.'});
      }
    } catch (error) {
      setSubmitStatus({type: 'error', message: 'Network error. Please check your connection and try again.'});
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-transparent text-white">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-gold/40">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/img/logo3.png"
              alt="4HISGLORY Logo"
              width={40}
              height={40}
              className="rounded-lg pointer-events-none select-none"
              draggable={false}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div>
              <div className="text-xl font-bold tracking-tight">4HISGLORY</div>
              <div className="text-xs tracking-[0.3em] uppercase text-gray-400">Faith • Purpose • Impact</div>
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-8 text-gray-300">
            <a href="#overview" className="hover:text-white transition-colors">
              Overview
            </a>
            <a href="#mission" className="hover:text-white transition-colors">
              Mission
            </a>
            <a href="#services" className="hover:text-white transition-colors">
              Services
            </a>
            <a href="#founder" className="hover:text-white transition-colors">
              Founder
            </a>
            <a href="#contact" className="hover:text-white transition-colors">
              Contact
            </a>
          </div>
          <a href="#contact" className="btn-animated px-5 py-2.5">
            Connect with 4HISGLORY
          </a>
        </div>
      </nav>

      <header className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-40">
          <Image src={images.hero} alt="Luminous background" fill className="object-cover" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 pt-20 text-center">
          <p className="text-xs uppercase tracking-[0.5em] text-gold mb-4">4HISGLORY on Lainland</p>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Faith-led Creativity<br />
            <span className="gradient-text">Purpose-filled Impact</span>
          </h1>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-10">
            4HISGLORY is a Christ-centered brand created on Lainland to inspire every person to walk in faith, purpose, and love through jewelry, entertainment, and giving back.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#contact" className="btn-animated px-7 py-4 text-lg">
              🙏 Send Message
            </a>
            <a href="#services" className="btn-animated btn-animated-secondary px-7 py-4 text-lg">
              Explore Services
            </a>
          </div>
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-400">
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              Inland Empire & Beyond
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              Everything for His glory
            </span>
            <span className="flex items-center gap-2">
              <span className="w-1 h-1 rounded-full bg-gold" />
              Faith • Purpose • Impact
            </span>
          </div>
        </div>
        <div className="absolute top-1/4 left-12 w-20 h-20 rounded-full bg-gold/30 blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-12 w-32 h-32 rounded-full bg-black/40 border border-gold/40 blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />
      </header>

      <section id="overview" className="py-24 dotted-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-[1.05fr,0.95fr] gap-12">
            <div>
              <p className="text-sm uppercase tracking-[0.5em] text-gold mb-4">Company Overview</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                4HISGLORY exists to glorify God through creative expression, meaningful products, uplifting entertainment, and generosity.
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                Rooted in Christianity, 4HISGLORY was born to remind people that God loves them, has a purpose for them, and calls them to walk in faith. Our movement brings together jewelry, entertainment, and outreach so hearts are encouraged and needs are met.
              </p>
              <ul className="space-y-4">
                {overviewHighlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-3">
                    <span className="mt-1 w-2 h-2 rounded-full bg-gold" />
                    <span className="text-gray-300">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-3xl border border-gold/40 bg-black/50 p-8">
              <div className="space-y-6">
                {overviewFacts.map((fact) => (
                  <div key={fact.label}>
                    <div className="text-xs uppercase tracking-[0.3em] text-gray-400">{fact.label}</div>
                    <div className="text-xl font-semibold text-white">{fact.value}</div>
                  </div>
                ))}
                <div className="rounded-2xl bg-gradient-to-br from-black/70 to-black/40 border border-gold/40 p-4">
                  <p className="text-sm text-gray-300">&ldquo;Everything we do is for His glory.&rdquo;</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="mission" className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image src={images.about} alt="Soft light" fill className="object-cover" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.6em] text-gold mb-4">Mission & Vision</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              A community where faith is lived out daily—through words, actions, art, generosity, and love.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {missionCards.map((card) => (
              <div key={card.title} className="rounded-3xl border border-gold/40 bg-black/60 p-8 shadow-[0_10px_40px_rgba(0,0,0,0.4)]">
                <div className="text-sm uppercase tracking-[0.4em] text-gray-400 mb-4">{card.title}</div>
                <p className="text-lg text-gray-200 leading-relaxed">{card.copy}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24 dotted-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-4">Service Spotlight</p>
            <h2 className="text-4xl md:text-5xl font-bold">
              4HISGLORY Inspires Through Jewelry, Entertainment, and Outreach.
            </h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-4">
              Each offering reflects our faith, creativity, and commitment to glorify God through every touchpoint.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service) => (
              <CardContainer key={service.title} className="inter-var">
                <CardBody className="bg-black relative group/card border-gold/30 w-full h-auto rounded-2xl p-6 border hover:border-gold/70 transition-colors">
                  <CardItem
                    translateZ="50"
                    className="w-12 h-12 rounded-xl bg-gradient-to-br from-gold/40 to-black/40 flex items-center justify-center mb-4"
                  >
                    <svg className="w-6 h-6 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.icon} />
                    </svg>
                  </CardItem>
                  <CardItem translateZ="60" className="text-xl font-semibold text-white mb-2">
                    {service.title}
                  </CardItem>
                  <CardItem as="p" translateZ="50" className="text-gray-400 text-sm max-w-sm mb-6">
                    {service.description}
                  </CardItem>
                  <CardItem translateZ="100" className="w-full">
                    <div className="aspect-video relative rounded-xl overflow-hidden">
                      <Image
                        src={service.image}
                        alt={service.title}
                        fill
                        className="object-cover group-hover/card:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            ))}
          </div>
        </div>
      </section>

      <section id="founder" className="py-24 relative">
        <div className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-black via-transparent to-black opacity-70" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.6em] text-gold mb-4">Message from the Founder</p>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">“God placed this vision on my heart…”</h2>
              <p className="text-lg text-gray-300 leading-relaxed">
                “God placed this vision on my heart to influence people to follow the path of Christ. 4HISGLORY exists to remind people that no matter where they are in life, God loves them, has a purpose for them, and calls them to walk in faith. Through jewelry, entertainment, and giving back, my goal is to spread positivity, inspire hope, and glorify God in everything we do.”
              </p>
            </div>
            <div className="rounded-3xl border border-gold/40 bg-black/60 p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
              <p className="text-gray-300 text-sm uppercase tracking-[0.4em] mb-3">Lainland Faith & Community Note</p>
              <p className="text-gray-200 text-lg leading-relaxed">
                4HISGLORY is a faith-driven brand on Lainland, spreading positivity, generosity, and Christian values throughout the Inland Empire and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 dotted-grid">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-sm uppercase tracking-[0.5em] text-gold mb-4">Contact 4HISGLORY</p>
            <h2 className="text-4xl md:text-5xl font-bold">Connect with us for jewelry, entertainment, or outreach</h2>
            <p className="text-gray-400 max-w-3xl mx-auto mt-4">
              Share your thoughts, testimony, or inquiry and we’ll respond within 1–2 business days.
            </p>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="bg-black border border-gold/30 rounded-3xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Contact Form</h3>
              <form onSubmit={handleContactSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    placeholder="email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Phone Number <span className="text-xs text-gray-500">(optional)</span></label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    placeholder="(123) 456-7890"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Reason for Contact</label>
                  <select
                    value={formData.reason}
                    onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="" disabled>
                      Select reason
                    </option>
                    <option value="jewelry">Jewelry Inquiry</option>
                    <option value="entertainment">Entertainment / Media</option>
                    <option value="giveaway">Giveaways & Outreach</option>
                    <option value="general">General Message</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Share your testimony, inquiry, or encouragement"
                  />
                </div>
                <button type="submit" disabled={isSubmitting} className="btn-animated w-full justify-center py-4 text-lg">
                  {isSubmitting ? 'Sending...' : '🙏 Send Message'}
                </button>
                {submitStatus && (
                  <div className={`mt-4 p-4 rounded-xl ${submitStatus.type === 'success' ? 'bg-green-900/30 border border-green-500/50' : 'bg-red-900/30 border border-red-500/50'}`}>
                    <p className={`text-sm ${submitStatus.type === 'success' ? 'text-green-200' : 'text-red-200'}`}>{submitStatus.message}</p>
                  </div>
                )}
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">Response Time: 1–2 business days</p>
            </div>
            <div className="bg-black border border-gold/30 rounded-3xl p-8 space-y-6">
              <div>
                <h3 className="text-2xl font-semibold mb-2">Share an Idea</h3>
                <p className="text-gray-400">
                  Tell us about a collaboration, giveaway, or outreach moment you’d like to see. Our movement is about encouraging hearts and making space for generosity.
                </p>
              </div>
              <form onSubmit={handleCollaborationSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Name</label>
                  <input
                    type="text"
                    value={collaborationPrompt.name}
                    onChange={(e) => setCollaborationPrompt({ ...collaborationPrompt, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Email Address</label>
                  <input
                    type="email"
                    value={collaborationPrompt.email}
                    onChange={(e) => setCollaborationPrompt({ ...collaborationPrompt, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                    placeholder="email@example.com"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-400 mb-2">Your Idea</label>
                  <textarea
                    value={collaborationPrompt.idea}
                    onChange={(e) => setCollaborationPrompt({ ...collaborationPrompt, idea: e.target.value })}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors resize-none"
                    placeholder="Wholesale, outreach, entertainment, or testimony moment..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 border border-gold/30 rounded-xl font-semibold text-lg hover:bg-gold/10 transition-colors disabled:opacity-50"
                >
                  {isSubmitting ? 'Submitting...' : '✝️ Submit Idea'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section id="newsletter" className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="rounded-3xl border border-gold/30 bg-black/70 p-8 md:p-10 flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <p className="text-sm uppercase tracking-[0.5em] text-gold mb-3">Newsletter & Faith Updates</p>
              <h3 className="text-3xl font-bold mb-4">Join the 4HISGLORY Community</h3>
              <p className="text-gray-300">
                Stay connected with new jewelry releases, faith-based content & entertainment, giveaway announcements, and encouraging messages & testimonies.
              </p>
            </div>
            <form onSubmit={handleNewsletterSubmit} className="flex-1 flex flex-col gap-4 w-full">
              <input
                type="email"
                value={newsletterEmail}
                onChange={(e) => setNewsletterEmail(e.target.value)}
                className="w-full px-4 py-3 bg-white/5 border border-gold/20 rounded-xl focus:outline-none focus:border-gold transition-colors"
                placeholder="Email Address"
                required
              />
              <button type="submit" disabled={isSubmitting} className="btn-animated justify-center py-4 text-lg">
                {isSubmitting ? 'Subscribing...' : '✝️ Join for His Glory'}
              </button>
              <p className="text-sm text-gray-500">
                Positive messages only. No spam. You may unsubscribe anytime.
              </p>
            </form>
          </div>
        </div>
      </section>

      <footer className="relative border-t border-gold/30">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute -top-24 left-1/3 h-64 w-64 rounded-full bg-gold/10 blur-3xl" />
          <div className="absolute -bottom-24 right-1/3 h-64 w-64 rounded-full bg-gold/20 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-6 py-14">
          <div className="rounded-3xl border border-gold/40 bg-black/60 backdrop-blur-md p-8 md:p-10">
            <div className="grid gap-10 md:grid-cols-12 items-start">
              <div className="md:col-span-5">
                <div className="flex items-center gap-3">
                  <Image
                    src="/img/logo3.png"
                    alt="4HISGLORY Logo"
                    width={44}
                    height={44}
                    className="rounded-xl border border-gold/40 bg-black/40 pointer-events-none select-none"
                    draggable={false}
                    onContextMenu={(e) => e.preventDefault()}
                  />
                  <div>
                    <div className="text-xl font-bold tracking-tight">4HISGLORY</div>
                    <div className="text-xs text-gray-400 tracking-widest uppercase">Faith • Purpose • Impact</div>
                  </div>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-gray-300">
                  A Christ-centered brand on Lainland—celebrating faith, purpose, and impact through jewelry, entertainment, and acts of generosity for the Inland Empire and beyond.
                </p>
                <div className="mt-5 flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center rounded-full border border-gold/30 bg-gold/10 px-3 py-1 text-xs text-gold">
                    Serving Inland Empire, California
                  </span>
                  <span className="inline-flex items-center rounded-full border border-gold/30 bg-black/40 px-3 py-1 text-xs text-gray-300">
                    Partner Movement
                  </span>
                </div>
              </div>
              <div className="md:col-span-3">
                <div className="text-sm font-semibold text-white">Quick Links</div>
                <div className="mt-4 grid gap-3 text-sm">
                  <a href="#overview" className="text-gray-300 hover:text-white transition-colors">
                    Overview
                  </a>
                  <a href="#mission" className="text-gray-300 hover:text-white transition-colors">
                    Mission
                  </a>
                  <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                    Services
                  </a>
                  <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </a>
                </div>
              </div>
              <div className="md:col-span-4">
                <div className="text-sm font-semibold text-white">Partner with 4HISGLORY</div>
                <p className="mt-4 text-sm text-gray-300 leading-relaxed">
                  Interested in jewelry, entertainment, or giveaways? Share what inspires you and we’ll reply with a clear next step.
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-3">
                  <a href="#contact" className="btn-animated btn-animated-md">
                    Get in Touch
                  </a>
                  <a href="#services" className="btn-animated btn-animated-secondary btn-animated-md">
                    Explore Services
                  </a>
                </div>
              </div>
            </div>
            <div className="mt-10 pt-6 border-t border-gold/30 flex flex-col md:flex-row items-center justify-between gap-4">
              <p className="text-sm text-gray-500">© {new Date().getFullYear()} 4HISGLORY. All rights reserved.</p>
              <div className="flex items-center gap-6 text-sm">
                <a href="https://lainland.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                  Visit Lainland
                </a>
                <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                  Work With 4HISGLORY
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
