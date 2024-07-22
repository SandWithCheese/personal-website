import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

function BodyLayout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <Navbar />
      <main className="wrapper">{children}</main>
      <Footer />
    </body>
  );
}

export default BodyLayout;
