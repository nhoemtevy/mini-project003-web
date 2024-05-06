import SidebarComponent from "@/components/DashBoardComponent.tsx/SildeBarDashBordComponent";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "DashBoard",
  description: "This is DashBoard Page Shop",
  keywords: ["shop", "ecommerce", "dashBoard"],
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <aside className="flex">
      <SidebarComponent />
      {children}
    </aside>
  );
}
