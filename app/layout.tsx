import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Muhammad Afran | Senior Unity Developer",
  description: "Senior Unity Developer specializing in simulators, VR/AR, multiplayer training systems and real-time hardware integration.",
  keywords: ["Unity Developer", "Simulator Developer", "VR", "AR", "Unreal Engine", "Meta Quest", "C#", "Muhammad Afran"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}