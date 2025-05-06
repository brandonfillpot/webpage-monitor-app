import express from "express";
import metrics from "./routes/metrics.routes";
import health from "./routes/health.routes";

const app = express();

app.use("/api/metrics", metrics);
app.use("/api/health", health);

export default app;
