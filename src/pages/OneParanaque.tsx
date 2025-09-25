import React, { useEffect, useMemo, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Chart,
  ArcElement,
  Tooltip,
  Legend,
  DoughnutController, // 👈 this is available if you’re on chart.js >= 4
} from "chart.js";

Chart.register(ArcElement, Tooltip, Legend, DoughnutController);

type OfficeKey = "BPLO" | "Treasurer" | "Veterinary" | "TPMO" | "DRRMO";

export default function OneParanaque() {
  const [activePillar, setActivePillar] = useState<
    "pillar1" | "pillar2" | "pillar3" | "pillar4" | "pillar5"
  >("pillar1");
  const [flowMode, setFlowMode] = useState<"before" | "after">("before");
  const [selectedOffice, setSelectedOffice] = useState<OfficeKey | null>(null);

  // Chart
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstanceRef = useRef<Chart | null>(null);

  const egovData = useMemo(
    () => ({
      labels: [
        "BPLO",
        "Treasurer",
        "Veterinary",
        "TPMO",
        "DRRMO",
      ] as OfficeKey[],
      datasets: [
        {
          label: "Unified Services",
          data: [1, 1, 1, 1, 1],
          backgroundColor: [
            "#4A7C59",
            "#6A994E",
            "#A7C957",
            "#F2E8CF",
            "#BC4749",
          ],
          hoverOffset: 4,
        },
      ],
    }),
    []
  );

  const egovDetails: Record<OfficeKey, { title: string; description: string }> =
    useMemo(
      () => ({
        BPLO: {
          title: "Business Permits & Licensing",
          description:
            "End-to-end digital workflow for new applications and renewals, from submission to digital certificate issuance.",
        },
        Treasurer: {
          title: "City Treasurer's Office",
          description:
            "Online portal for real property and business tax assessments and payments, reducing queues and improving collection efficiency.",
        },
        Veterinary: {
          title: "Veterinary Service Office",
          description:
            "Digital system for pet registration, vaccination scheduling, and accessing other animal welfare services.",
        },
        TPMO: {
          title: "Traffic & Parking Management",
          description:
            "Online platform to handle traffic violation inquiries, payments, and applications for parking permits.",
        },
        DRRMO: {
          title: "Disaster Risk Reduction",
          description:
            "Centralized hub for public advisories, incident reporting, and coordination during emergencies.",
        },
      }),
      []
    );

  useEffect(() => {
    // Build/destroy chart only when pillar2 is active
    if (activePillar !== "pillar2") {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
        chartInstanceRef.current = null;
      }
      return;
    }
    if (!chartRef.current) return;

    const instance = new Chart(chartRef.current.getContext("2d")!, {
      type: "doughnut",
      data: egovData as any,
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "top" },
          tooltip: {
            callbacks: { label: (ctx) => (ctx.label ? String(ctx.label) : "") },
          },
        },
        onClick: (_evt, elements) => {
          if (!elements?.length) return;
          const idx = (elements[0] as any).index as number;
          setSelectedOffice(egovData.labels[idx]);
        },
      },
    });

    chartInstanceRef.current = instance;
    return () => {
      instance.destroy();
      chartInstanceRef.current = null;
    };
  }, [activePillar, egovData]);

  const beforeFlow = (
    <>
      <h5 className="font-bold mb-4">Current Manual Process</h5>
      <ol className="list-decimal list-inside space-y-2 text-gray-600">
        <li>Manual filing of case documents at court.</li>
        <li>Physical transfer of records between departments.</li>
        <li>Manual scheduling and notification via post.</li>
        <li>Difficulty in tracking case status without physical follow-up.</li>
        <li>High risk of document loss and delays.</li>
      </ol>
    </>
  );

  const afterFlow = (
    <>
      <h5 className="font-bold mb-4">Proposed Digital Workflow</h5>
      <ol className="list-decimal list-inside space-y-2 text-green-700">
        <li>Online submission of all case documents via the portal.</li>
        <li>Instantaneous and secure digital record sharing.</li>
        <li>Automated scheduling and real-time notifications (SMS/Email).</li>
        <li>24/7 online access to case status for authorized parties.</li>
        <li>Immutable audit trail for all actions, ensuring transparency.</li>
      </ol>
    </>
  );

  return (
    <div
      className="antialiased scroll-smooth"
      style={{
        fontFamily: "'Inter', sans-serif",
        backgroundColor: "#F8F7F4",
        color: "#3D3B3A",
      }}
    >
      {/* Per-page head (title + favicon override) */}
      <Helmet>
        <title>One Parañaque — Verity Group</title>

        {/* add cache-busting query + explicit types */}
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicons/onep-32.png?v=onep1"
        />

        <link
          rel="shortcut icon"
          type="image/png"
          href="/favicons/onep-32.png?v=onep1"
        />
        <link rel="apple-touch-icon" href="/favicons/onep-32.png?v=onep1" />
        {/* optional (Safari pinned tabs): */}
        {/* <link rel="mask-icon" href="/favicons/onep-safari.svg" color="#4A7C59" /> */}

        <meta name="theme-color" content="#4A7C59" />
      </Helmet>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-lg fixed top-0 left-0 right-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2 flex-shrink-0">
              <img
                src="/favicons/onep-32.png"
                alt="One Parañaque Logo"
                className="w-6 h-6"
              />
              <h1 className="text-xl font-bold text-[#4A7C59]">
                One Parañaque
              </h1>
            </div>
            <nav className="hidden md:flex md:space-x-8">
              <a
                href="#vision"
                className="text-gray-600 hover:text-[#4A7C59] font-medium"
              >
                The Vision
              </a>
              <a
                href="#pillars"
                className="text-gray-600 hover:text-[#4A7C59] font-medium"
              >
                The Pillars
              </a>
              <a
                href="#why-verity"
                className="text-gray-600 hover:text-[#4A7C59] font-medium"
              >
                Why Verity?
              </a>
              <a
                href="#next-steps"
                className="text-gray-600 hover:text-[#4A7C59] font-medium"
              >
                Next Steps
              </a>
            </nav>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="pt-24 pb-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-base font-semibold text-[#B88A6A] tracking-wider">
              A Proposal for a Unified Digital Ecosystem
            </p>
            <h2 className="mt-2 text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              Building a Future-Ready Parañaque
            </h2>
            <p className="mt-6 max-w-3xl mx-auto text-lg text-gray-600">
              Presented by Verity to the Honorable Mayor Eric L. Olivarez and
              the City Government of Parañaque.
            </p>
            <div className="mt-8">
              <a
                href="#vision"
                className="inline-block bg-[#4A7C59] text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:bg-opacity-90 transition"
              >
                Explore the Vision
              </a>
            </div>
          </div>
        </section>

        {/* Vision */}
        <section id="vision" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">
                What is &quot;One Parañaque&quot;?
              </h3>
              <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-600">
                One Parañaque is more than just a website or an app; it is a
                single, secure, and intuitive digital gateway for everyone in
                the city. It's an all-in-one ecosystem designed to empower
                citizens, simplify processes for businesses, and provide the
                local government with tools for more efficient, transparent, and
                data-driven operations.
              </p>
            </div>
            <div className="mt-12 grid md:grid-cols-2 gap-8 items-center">
              <div className="bg-white p-8 rounded-xl shadow-md border border-gray-200">
                <h4 className="text-xl font-semibold mb-3">
                  Learning from the Best
                </h4>
                <p className="text-gray-600">
                  Before designing our solution, we studied the pioneering
                  digital governance work of your neighbors to incorporate best
                  practices and build a truly next-generation platform for
                  Parañaque.
                </p>
              </div>
              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h5 className="font-bold text-lg">
                    Inspiration from Pasig City
                  </h5>
                  <p className="text-gray-600 mt-1">
                    Their focus on a unified digital identity via the PasigPass
                    is a model for citizen-centric service access, which we'll
                    adopt.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
                  <h5 className="font-bold text-lg">
                    Lessons from Quezon City
                  </h5>
                  <p className="text-gray-600 mt-1">
                    The QC E-Services portal demonstrates the power of
                    centralizing transactional services, a core principle of our
                    E-Gov Portal.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pillars */}
        <section id="pillars" className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">
                The Five Pillars of the Ecosystem
              </h3>
              <p className="mt-4 max-w-4xl mx-auto text-lg text-gray-600">
                We propose building this ecosystem on five powerful, integrated
                pillars. Click on a pillar to explore its features and impact.
              </p>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-6">
              {[
                { id: "pillar1", icon: "👥", label: "Community Hub" },
                { id: "pillar2", icon: "🏛️", label: "E-Gov Portal" },
                { id: "pillar3", icon: "🛡️", label: "Verity Command" },
                { id: "pillar4", icon: "📚", label: "e-Learning System" },
                { id: "pillar5", icon: "⚖️", label: "Digital Justice" },
              ].map(({ id, icon, label }) => {
                const active = activePillar === (id as any);
                return (
                  <button
                    key={id}
                    onClick={() => setActivePillar(id as any)}
                    className={`bg-white p-6 rounded-xl border-2 text-center transition ${
                      active
                        ? "border-[#4A7C59] bg-green-50"
                        : "border-transparent"
                    }`}
                    style={{
                      transition:
                        "transform 0.3s ease, boxShadow 0.3s ease" as any,
                    }}
                  >
                    <span className="text-4xl">{icon}</span>
                    <h4 className="mt-4 font-bold">{label}</h4>
                  </button>
                );
              })}
            </div>

            <div className="mt-12">
              {/* Pillar 1 */}
              {activePillar === "pillar1" && (
                <div className="bg-gray-50 p-8 rounded-xl animate-[fadeIn_0.5s_ease-in-out]">
                  <h4 className="text-2xl font-bold text-center">
                    Pillar 1: The Parañaque Community Hub
                  </h4>
                  <p className="text-center mt-2 text-gray-600">
                    This pillar is about empowering citizens and strengthening
                    community bonds through a city-wide networking app. It
                    provides tools for direct engagement and boosts the local
                    economy.
                  </p>
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg">
                      <h5 className="font-semibold text-lg">
                        Citizen Complaint &amp; Resolution
                      </h5>
                      <p className="mt-2 text-gray-600">
                        A transparent and accountable channel for citizens to
                        file complaints against LGU officers, with a clear
                        adjudication and management process for LGU leadership.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h5 className="font-semibold text-lg">
                        Comprehensive Business Directory
                      </h5>
                      <p className="mt-2 text-gray-600">
                        A one-stop, categorized directory of all registered
                        private businesses and services in Parañaque to boost
                        local commerce and make services easily discoverable.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pillar 2 */}
              {activePillar === "pillar2" && (
                <div className="bg-gray-50 p-8 rounded-xl animate-[fadeIn_0.5s_ease-in-out]">
                  <h4 className="text-2xl font-bold text-center">
                    Pillar 2: The E-Gov Transaction Portal
                  </h4>
                  <p className="text-center mt-2 text-gray-600">
                    This pillar moves beyond simple web pages to a truly online
                    service delivery platform where government processes are
                    initiated, processed, and completed efficiently.
                  </p>
                  <div className="mt-8 grid md:grid-cols-2 gap-8 items-center">
                    <div>
                      <h5 className="font-semibold text-lg text-center mb-4">
                        Unified Service Center
                      </h5>
                      <div className="relative w-full max-w-[450px] mx-auto h-[300px] md:h-[350px]">
                        <canvas ref={chartRef} />
                      </div>
                    </div>
                    <div className="bg-white p-6 rounded-lg h-full">
                      <h5 className="font-bold text-lg">
                        Interactive Service Map
                      </h5>
                      <p className="mt-2 text-gray-600">
                        Click on a segment of the chart to learn about the
                        services that will be digitized for each key office.
                        This portal provides a single point of access for all
                        transactions.
                      </p>
                      {selectedOffice && (
                        <div className="mt-4 border-t pt-4">
                          <h6 className="font-semibold">
                            {egovDetails[selectedOffice].title}
                          </h6>
                          <p className="text-gray-600">
                            {egovDetails[selectedOffice].description}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Pillar 3 */}
              {activePillar === "pillar3" && (
                <div className="bg-gray-50 p-8 rounded-xl animate-[fadeIn_0.5s_ease-in-out]">
                  <h4 className="text-2xl font-bold text-center">
                    Pillar 3: Verity Command for Parañaque
                  </h4>
                  <p className="text-center mt-2 text-gray-600">
                    A localized and powerful implementation of Verity's proven
                    public safety platform, creating a seamless public-private
                    security partnership to enhance peace and order.
                  </p>
                  <div className="mt-8 grid md:grid-cols-3 gap-6 text-center">
                    {[
                      {
                        t: "Centralized Command",
                        d: "A unified dashboard for Parañaque police districts to monitor, dispatch, and manage incidents in real-time.",
                      },
                      {
                        t: "Integrated Citizen App",
                        d: "Residents can report incidents with evidence-grade data (geo-tagged photos/videos) for swift, verifiable responses.",
                      },
                      {
                        t: "HOA Security Pilot",
                        d: "Private villages can manage their own security, with data reporting up to a city administrator.",
                      },
                    ].map((item) => (
                      <div key={item.t} className="bg-white p-6 rounded-lg">
                        <h5 className="font-semibold text-lg">{item.t}</h5>
                        <p className="mt-2 text-gray-600">{item.d}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Pillar 4 */}
              {activePillar === "pillar4" && (
                <div className="bg-gray-50 p-8 rounded-xl animate-[fadeIn_0.5s_ease-in-out]">
                  <h4 className="text-2xl font-bold text-center">
                    Pillar 4: The One Parañaque e-Learning System
                  </h4>
                  <p className="text-center mt-2 text-gray-600">
                    A centralized hub for knowledge, education, and city
                    information, powered by reliable connectivity to ensure
                    equitable access for all residents.
                  </p>
                  <div className="mt-8 grid md:grid-cols-2 gap-8">
                    <div className="bg-white p-6 rounded-lg">
                      <h5 className="font-semibold text-lg">
                        City-Wide Knowledge Base
                      </h5>
                      <p className="mt-2 text-gray-600">
                        A one-stop shop for learning materials, &quot;How to Do
                        Business&quot; guides, local history, tourism
                        information, and official announcements.
                      </p>
                    </div>
                    <div className="bg-white p-6 rounded-lg">
                      <h5 className="font-semibold text-lg">
                        Powered by Community Wifi
                      </h5>
                      <p className="mt-2 text-gray-600">
                        Supported by the same successful Community Wifi Program
                        model Verity piloted in General Tinio, Nueva Ecija.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Pillar 5 */}
              {activePillar === "pillar5" && (
                <div className="bg-gray-50 p-8 rounded-xl animate-[fadeIn_0.5s_ease-in-out]">
                  <h4 className="text-2xl font-bold text-center">
                    Pillar 5: The Digital Justice System
                  </h4>
                  <p className="text-center mt-2 text-gray-600">
                    A specialized legal management system to streamline and
                    manage judicial processes end to end.
                  </p>
                  <div className="mt-8 text-center">
                    <div
                      className="inline-flex rounded-md shadow-sm"
                      role="group"
                    >
                      <button
                        type="button"
                        onClick={() => setFlowMode("before")}
                        className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-l-lg ${
                          flowMode === "before"
                            ? "text-white bg-[#4A7C59]"
                            : "text-gray-900 bg-white hover:bg-gray-100"
                        }`}
                      >
                        Current Process
                      </button>
                      <button
                        type="button"
                        onClick={() => setFlowMode("after")}
                        className={`px-4 py-2 text-sm font-medium border border-gray-200 rounded-r-md ${
                          flowMode === "after"
                            ? "text-white bg-[#4A7C59]"
                            : "text-gray-900 bg-white hover:bg-gray-100"
                        }`}
                      >
                        Digital Workflow
                      </button>
                    </div>
                    <div className="mt-6 text-left p-6 bg-white rounded-lg max-w-3xl mx-auto">
                      {flowMode === "before" ? beforeFlow : afterFlow}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* Why Verity */}
        <section id="why-verity" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Why Partner with Verity?</h3>
            </div>
            <div className="mt-12 grid md:grid-cols-3 gap-8 text-center">
              {[
                {
                  t: "Proven Expertise",
                  d: "We have demonstrable experience building the core components of this ecosystem, from community wifi to high-security platforms.",
                },
                {
                  t: "Integrated Approach",
                  d: "We don't just build apps; we build interconnected systems where data from one pillar can intelligently inform another.",
                },
                {
                  t: "Local Understanding",
                  d: "As a Philippine-based firm, we understand the local context while applying global best practices in technology and security.",
                },
              ].map((i) => (
                <div
                  key={i.t}
                  className="bg-white p-8 rounded-xl shadow-md border border-gray-200"
                >
                  <h4 className="font-semibold text-lg">{i.t}</h4>
                  <p className="mt-2 text-gray-600">{i.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Next steps */}
        <section id="next-steps" className="py-20 bg-gray-800 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold">Let's Build Together</h3>
              <p className="mt-4 max-w-2xl mx-auto text-gray-300">
                We are confident that the One Parañaque ecosystem will be a
                landmark achievement. We propose the following next steps to
                begin this transformative journey.
              </p>
            </div>
            <div className="mt-12 max-w-3xl mx-auto space-y-4">
              {[
                "A detailed technical workshop with key department heads to map out user journeys.",
                "Development of a phased implementation roadmap, starting with a high-impact pilot project.",
                "A formal submission of the project's technical and financial scope.",
              ].map((t, i) => (
                <div
                  key={i}
                  className="bg-gray-700 p-4 rounded-lg flex items-center"
                >
                  <span className="bg-[#4A7C59] text-white rounded-full h-8 w-8 flex items-center justify-center font-bold mr-4">
                    {i + 1}
                  </span>
                  <p>{t}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-600">
            &copy; 2025 Verity. All rights reserved.
          </p>
          <p className="text-gray-500 mt-2">
            Presented to the City of Parañaque.
          </p>
        </div>
      </footer>
    </div>
  );
}
