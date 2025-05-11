
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/lib/supabaseClient";
import Layout from "@/components/layout/Layout";
import { toast } from "sonner";

export default function AuthCallback() {
  const navigate = useNavigate();

  useEffect(() => {
    async function handleAuthCallback() {
      console.log("AuthCallback: Processando retorno do OAuth");

      try {
        const { data, error } = await supabase.auth.getSessionFromUrl({ 
          storeSession: true 
        });
        
        if (error || !data.session) {
          console.error("Erro de autenticação:", error);
          toast.error("Falha na autenticação. Por favor, tente novamente.");
          return navigate("/login");
        }

        console.log("AuthCallback: Autenticação bem-sucedida, redirecionando para dashboard");
        toast.success("Login realizado com sucesso!");
        navigate("/dashboard");
      } catch (err) {
        console.error("Erro ao processar callback de autenticação:", err);
        toast.error("Ocorreu um erro inesperado. Por favor, tente novamente.");
        navigate("/login");
      }
    }

    handleAuthCallback();
  }, [navigate]);

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Autenticando...</h1>
          <p className="text-gray-400">Aguarde enquanto processamos seu login.</p>
        </div>
      </div>
    </Layout>
  );
}
