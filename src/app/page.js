"use client";
import React, { useEffect, useRef } from "react";
import { ReactLenis } from "lenis/react";
import gsap from "gsap";
import { Footer } from "@/components/Footer";
import Image from "next/image";

export default function Home() {
  const lenisRef = useRef();

  useEffect(() => {
    function update(time) {
      lenisRef.current?.lenis?.raf(time * 1000);
    }

    gsap.ticker.add(update);

    return () => gsap.ticker.remove(update);
  }, []);
  return (
    <>
      <ReactLenis options={{ autoRaf: false }} ref={lenisRef} root>
        <main className="flex min-h-screen flex-col">
          {/* Hero Section */}
          <section className="pt-32 pb-24 bg-gradient-to-br from-emerald-900 via-emerald-800 to-emerald-900">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="text-white space-y-6">
                  <h1 className="text-5xl font-bold leading-tight">
                    A powerful solution for social media management
                  </h1>
                  <p className="text-lg text-emerald-100">
                    Our all-in-one social media management platform unlocks the
                    full potential of social to transform not just your
                    marketing strategy—but every area of your organization.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <button className="bg-white p-2 text-emerald-900 hover:bg-emerald-50">
                      Start your free trial
                    </button>
                    <button className="text-white p-2 bg-zinc-700 border-white hover:bg-white/10">
                      Request a demo
                    </button>
                  </div>
                  <p className="text-sm text-emerald-100">
                    No credit card required.
                  </p>
                </div>
                <div className="relative">
                  <div className="relative aspect-video rounded-lg overflow-hidden shadow-2xl">
                    <Image
                      src={"/ass.jpg"}
                      alt="Platform Preview"
                      width={1280}
                      height={720}
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Features Section */}
          <section className="py-24 bg-gray-50">
            <div className="container mx-auto px-4">
              <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl font-bold mb-4">
                  Everything you need to succeed on social
                </h2>
                <p className="text-gray-600 text-lg">
                  Powerful features to help you grow, engage, analyze, and
                  manage your social media presence.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Analyze Social Trends",
                    description:
                      "Connect with audiences across all major social platforms from one dashboard.",
                  },
                  {
                    title: "Generate Reports",
                    description:
                      "Engage with your audience using AI-powered responses and scheduling.",
                  },
                  {
                    title: "Integrate Social Data",
                    description:
                      "Get detailed insights and analytics to optimize your social strategy.",
                  },
                  {
                    title: "Receive Real-Time Alerts",
                    description:
                      "Work seamlessly with your team using robust collaboration tools.",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="bg-white text-black p-6 rounded-lg shadow-sm border hover:shadow-md transition-shadow"
                  >
                    {/* <feature.icon className="w-12 h-12 text-emerald-600 mb-4" /> */}
                    <h3 className="text-xl font-semibold mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
          <section className="py-24 bg-emerald-900">
            <div className="container mx-auto px-4">
              <div className="max-w-4xl mx-auto text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                  Ready to transform your social media strategy?
                </h2>
                <p className="text-emerald-100 text-lg mb-8">
                  Join thousands of businesses that trust SocialBlade to manage
                  their social media presence.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <button className="bg-white p-2 text-emerald-900 hover:bg-emerald-50">
                    Get started for free
                  </button>
                  <button className="text-white p-2 bg-zinc-500 border-white hover:bg-white/10">
                    Talk to sales
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Footer */}
          <Footer />
        </main>
      </ReactLenis>
    </>
  );
}
