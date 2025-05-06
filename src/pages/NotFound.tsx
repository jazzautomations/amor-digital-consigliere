
import React from "react";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Layout from "@/components/layout/Layout";

const NotFound = () => {
  const location = useLocation();

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center max-w-md">
          <h1 className="text-6xl font-bold mb-4 text-brand-purple">404</h1>
          <h2 className="text-2xl font-bold mb-4">Página não encontrada</h2>
          <p className="text-lg text-gray-600 mb-8">
            Ops! A página que você está procurando não existe ou foi movida.
          </p>
          <Link to="/">
            <Button className="bg-brand-purple hover:bg-brand-purple-dark">
              Voltar para o início
            </Button>
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
