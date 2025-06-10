import React from "react";
import { Flag, Weight } from "lucide-react";
import { Card, CardContent, CardFooter } from "./Ui/card";
import { Button } from "./Ui/button";
import { Badge } from "./Ui/badge";

// SkipCard: Card component to display skip size, price, and features for selection.
function SkipCard({ size, price, allowedOnRoad, allowsHeavyWaste, onSelect }) {
  return (
    <Card
      className="group border-0 shadow-sm bg-white w-100 h-100 rounded-4 position-relative overflow-hidden"
      style={{
        transition: "box-shadow 0.3s, transform 0.3s",
        boxShadow: "0 4px 24px 0 rgba(0, 123, 255, 0.08)",
      }}
    >
      {/* Decorative gradient bar at the top of the card */}
      <div
        style={{
          height: 6,
          width: "100%",
          background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
          position: "absolute",
          top: 0,
          left: 0,
          borderTopLeftRadius: "1rem",
          borderTopRightRadius: "1rem",
        }}
      />
      <CardContent className="p-4 rounded-4">
        {/* Badge showing skip size in yards */}
        <div className="text-center mb-3">
          <Badge
            variant="secondary"
            className="fs-6 px-4 py-2 rounded-pill shadow-sm custom-gradient"
          >
            {size} Yards
          </Badge>
        </div>

        {/* Highlighted SKIP BIN label */}
        <div
          className="rounded-4 p-4 text-center mb-3"
          style={{
            background: "linear-gradient(90deg, #ffc107 0%, #ffecb3 100%)",
            color: "#212529",
            fontWeight: 700,
            letterSpacing: "0.04em",
            boxShadow: "0 2px 8px 0 rgba(255,193,7,0.08)",
          }}
        >
          SKIP BIN
        </div>

        {/* Skip size title in blue */}
        <h3 className="card-title text-center mb-1" style={{ fontWeight: 700, fontSize: "1.6rem", color: "#007bff" }}>
          {size} Yard Skip
        </h3>
        {/* Hire period info */}
        <p className="text-muted text-center mb-3" style={{ fontSize: "1rem" }}>
          14 day hire period
        </p>

        {/* Price in blue and VAT info */}
        <div className="text-center my-3">
          <span
            className="h2 fw-bold"
            style={{
              color: "#007bff",
              fontSize: "2.2rem",
              letterSpacing: "0.03em",
            }}
          >
            £{price.toFixed(0)}
          </span>
          <span className="text-muted ms-1" style={{ fontSize: "1rem" }}>
            inc. VAT
          </span>
        </div>

        {/* Feature badges: Road Legal and Heavy Waste */}
        <div className="d-flex flex-wrap gap-2 justify-content-center mb-3">
          {allowedOnRoad && (
            <Badge
              variant="outline"
              className="d-flex align-items-center px-3 py-2 rounded-pill border-primary text-primary"
              style={{
                background: "#e3f2fd",
                borderWidth: 2,
                fontWeight: 500,
              }}
            >
              <Flag size={18} className="me-1" />
              Road Legal
            </Badge>
          )}
          {allowsHeavyWaste && (
            <Badge
              variant="outline"
              className="d-flex align-items-center px-3 py-2 rounded-pill border-warning text-warning"
              style={{
                background: "#fff8e1",
                borderWidth: 2,
                fontWeight: 500,
              }}
            >
              <Weight size={16} className="me-1" />
              Heavy Waste
            </Badge>
          )}
        </div>

        {/* Warning badge if not allowed on road */}
        {!allowedOnRoad && (
          <div className="text-center">
            <Badge
              variant="destructive"
              className="rounded-pill px-3 py-2"
              style={{
                background: "linear-gradient(90deg, #ff1744 0%, #ff8a80 100%)",
                color: "#fff",
                fontWeight: 600,
                border: "none",
              }}
            >
              ⚠️ Not Allowed On Road
            </Badge>
          </div>
        )}
      </CardContent>

      {/* Select button for the skip */}
      <CardFooter className="bg-transparent border-0">
         <Button onClick={onSelect} size="lg" className="w-100 group-hover:bg-primary/90 transition-colors"
          style={{
            background: "linear-gradient(90deg, #007bff 0%, #00c6ff 100%)",
            color: "#fff",
            fontSize: "1.1rem",
            letterSpacing: "0.04em",
            boxShadow: "0 2px 8px 0 rgba(0,123,255,0.10)",
            transition: "background 0.2s, box-shadow 0.2s",
          }}
        >
          Select This Skip →
        </Button>
      </CardFooter>
    </Card>
  );
}
// SkipCard: Use this component to display each skip option in the selection grid.
export { SkipCard };