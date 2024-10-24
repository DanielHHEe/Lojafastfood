import { Footer } from "@/components/footer";
import { Header } from "@/components/Header";
import { Tabskeleton } from "@/components/produtos/Skeleton";
import { Produtos } from "@/components/produtos/tab";
import { Suspense } from "react";

const Page = () => {
  return (
    <div className="w-full max-w-4xl mx-auto ">
      <Header />
      <div className="my-3">
        <Suspense fallback={<Tabskeleton />}>
          <Produtos />
        </Suspense>
      </div>
      <Footer />
    </div>
  );
};

export default Page; // Correção aqui
