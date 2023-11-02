import Appbar from "@/components/home/AppbarUi/page";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Fisio Sync",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Appbar>{children}</Appbar>
      </body>
    </html>
  );
}
