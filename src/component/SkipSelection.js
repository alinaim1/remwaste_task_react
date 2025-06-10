import React from "react";
import { SkipCard } from "./SkipCard";
import { useToast } from "../hooks/use-toast.js";
import Copyright from "./Ui/copyright";

// Skip data array
const skipData = [
  { size: 4, price: 333.6, allowed_on_road: true, allows_heavy_waste: true },
  { size: 6, price: 366, allowed_on_road: true, allows_heavy_waste: true },
  { size: 8, price: 450, allowed_on_road: true, allows_heavy_waste: true },
  { size: 10, price: 480, allowed_on_road: false, allows_heavy_waste: false },
  { size: 12, price: 526.8, allowed_on_road: false, allows_heavy_waste: false },
  { size: 14, price: 564, allowed_on_road: false, allows_heavy_waste: false },
  { size: 16, price: 595.2, allowed_on_road: false, allows_heavy_waste: false },
  { size: 20, price: 1190.4, allowed_on_road: false, allows_heavy_waste: true },
  { size: 40, price: 1190.4, allowed_on_road: false, allows_heavy_waste: false }
];

// Progress steps data for dynamic rendering
const steps = [
  { icon: "📍", label: "Postcode", active: true },
  { icon: "🗑️", label: "Waste Type", active: true },
  { icon: "📦", label: "Select Skip", active: true },
  { icon: "✓", label: "Permit Check", active: false },
  { icon: "📅", label: "Choose Date", active: false },
  { icon: "💳", label: "Payment", active: false },
];

function SkipSelection() {
  const { toast } = useToast();

  const handleSkipSelect = (size, price) => {
    toast({
      title: "Skip Selected!",
      description: `You've selected the ${size} yard skip for £${price.toFixed(0)} inc. VAT`,
    });
  };

  return (
    <div className="min-vh-100 bg-light">
      {/* Hero Section */}
      <section
        className="py-5 mb-4"
        style={{
          background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
          color: "#fff",
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold mb-2">Choose Your Skip Size</h1>
          <p className="lead mb-0" style={{ maxWidth: 600, margin: "0 auto" }}>
            Select the skip size that best suits your needs.<br />
            <span className="fw-semibold">
              All prices include VAT and a 14-day hire period.
            </span>
          </p>
        </div>
      </section>

      {/* Progress Steps */}
      <div className="container mb-5">
        <div className="d-flex justify-content-center align-items-center gap-3 flex-wrap">
          {steps.map((step, idx) => (
            <React.Fragment key={step.label}>
              <div className="d-flex flex-column align-items-center">
                <div
                  className="rounded-circle d-flex align-items-center justify-content-center shadow-sm mb-1"
                  style={{
                    width: "2.5rem",
                    height: "2.5rem",
                    fontSize: "1.3rem",
                    fontWeight: "bold",
                    background: step.active ? "#007bff" : "#f8f9fa",
                    color: step.active ? "#fff" : "#6c757d",
                    border: step.active ? "none" : "2px solid #dee2e6",
                    transition: "all 0.2s",
                  }}
                >
                  {step.icon}
                </div>
                <span
                  className={`small fw-semibold ${
                    step.active ? "text-primary" : "text-secondary"
                  }`}
                  style={{ minWidth: 80, textAlign: "center" }}
                >
                  {step.label}
                </span>
              </div>
              {idx < steps.length - 1 && (
                <div
                  style={{
                    width: 32,
                    height: 3,
                    background: idx < 2 ? "#007bff" : "#dee2e6",
                    borderRadius: 2,
                  }}
                />
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Skip Cards Grid */}
      <div className="container pb-5">
        <div className="row g-4 justify-content-center">
          {skipData.map((skip) => (
            <div className="col-12 col-md-6 col-lg-4 d-flex" key={skip.size}>
              <SkipCard
                size={skip.size}
                price={skip.price}
                allowedOnRoad={skip.allowed_on_road}
                allowsHeavyWaste={skip.allows_heavy_waste}
                onSelect={() => handleSkipSelect(skip.size, skip.price)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Help Section */}
      <section className="bg-white border-top py-5">
        <div className="container">
          <div className="row g-4 justify-content-center">
            <div className="col-md-6">
              <div className="p-4 rounded-3 shadow-sm h-100">
                <h3 className="fw-bold mb-3 text-primary">💡 Skip Size Guide</h3>
                <ul className="mb-0 ps-3 text-secondary">
                  <li>4-8 yards: Small home projects, garden clearance</li>
                  <li>10-16 yards: Medium renovation, office clearance</li>
                  <li>20-40 yards: Large construction, commercial projects</li>
                </ul>
              </div>
            </div>
            <div className="col-md-6">
              <div className="p-4 rounded-3 shadow-sm h-100">
                <h3 className="fw-bold mb-3 text-primary">📋 Important Notes</h3>
                <ul className="mb-0 ps-3 text-secondary">
                  <li>Road placement may require permits</li>
                  <li>Heavy waste includes soil, rubble, concrete</li>
                  <li>14-day hire period included in all prices</li>
                </ul>
              </div>
            </div>
          </div>
          {/* CopyRight Section */}
          <div className="d-flex justify-content-center mt-4">
            <Copyright />
          </div>
        </div>
      </section>
    </div>
  );
}

export { SkipSelection };
