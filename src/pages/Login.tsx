import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Eye, EyeOff, Lock, User } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { supabase } from "@/lib/supabaseClient";
import { toast } from "sonner";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isGoogleLoading, setIsGoogleLoading] = useState(false);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsLoading(true);

    try {
      if (!email.trim() || !password.trim()) {
        throw new Error("Por favor, preencha todos os campos");
      }

      if (!email.includes("@")) {
        throw new Error("Por favor, insira um email válido");
      }

      const { data, error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (signInError) throw signInError;

      toast.success("Login realizado com sucesso!");
      navigate("/dashboard");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login");
      console.error("Login error:", err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    setError(null);
    setIsGoogleLoading(true);

    try {
      await supabase.auth.signInWithOAuth({ 
        provider: 'google'
      });
      
      // Não é necessário navegação aqui, pois o Supabase e o AuthCallback cuidarão disso
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao fazer login com Google");
      console.error("Google login error:", err);
      setIsGoogleLoading(false);
    }
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center px-4">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center">
            <h1 className="text-3xl font-extrabold">Entrar na FodaCerta™</h1>
            <p className="mt-2 text-gray-400">
              Acesse sua conta para obter conselhos de relacionamento
            </p>
          </div>

          {error && (
            <Alert variant="destructive" className="border-cyber-neon-red">
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}

          <form onSubmit={handleLogin} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="email" className="text-cyber-light-gray">
                Email
              </Label>
              <div className="relative">
                <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  id="email"
                  type="email"
                  placeholder="seu@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 border-gray-700 bg-black focus:border-cyber-neon-cyan focus:ring-cyber-neon-cyan"
                  autoComplete="email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password" className="text-cyber-light-gray">
                Senha
              </Label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 h-4 w-4" />
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 border-gray-700 bg-black focus:border-cyber-neon-cyan focus:ring-cyber-neon-cyan"
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-cyber-neon-cyan"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <div className="text-sm">
                <Link
                  to="/forgot-password"
                  className="text-cyber-neon-cyan hover:underline"
                >
                  Esqueceu sua senha?
                </Link>
              </div>
              <div className="text-sm">
                <Link to="/register" className="text-cyber-neon-red hover:underline">
                  Criar conta
                </Link>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full neon-button-cyan"
              disabled={isLoading}
            >
              {isLoading ? "Entrando..." : "Entrar"}
            </Button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <span className="w-full border-t border-gray-700" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-black px-2 text-gray-400">
                  Ou continue com
                </span>
              </div>
            </div>

            <Button
              type="button"
              className="w-full border border-gray-700 bg-transparent hover:bg-gray-900"
              disabled={isGoogleLoading}
              onClick={handleGoogleLogin}
            >
              <img
                src="https://www.svgrepo.com/show/506498/google.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              {isGoogleLoading ? "Conectando..." : "Google"}
            </Button>
          </form>
        </div>
      </div>
    </Layout>
  );
};

export default Login;
