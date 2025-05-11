import { useState } from 'react'
import { supabase } from '../lib/supabaseClient'
import Layout from '../components/layout/Layout'

export default function Login() {
  const [aceitou, setAceitou] = useState(false)

  const handleLogin = async () => {
    if (!aceitou) {
      alert('Aceita os termos, vagabundo iluminado.')
      return
    }

    const { error } = await supabase.auth.signInWithOAuth({
      provider: 'google',
    })

    if (error) {
      console.error('Erro no login:', error)
      alert('Erro ao tentar logar com Google. Confere o Supabase aí.')
    }
  }

  return (
    <Layout>
      <div className="min-h-[70vh] flex flex-col justify-center items-center text-white p-4">
        <h1 className="text-3xl font-bold mb-6">Entrar na FodaCerta™</h1>

        <label className="flex items-center gap-2 mb-4 text-sm">
          <input
            type="checkbox"
            checked={aceitou}
            onChange={(e) => setAceitou(e.target.checked)}
          />
          <span>
            Eu aceito os{' '}
            <a href="/termos" className="underline text-cyber-neon-cyan">Termos</a> e a{' '}
            <a href="/privacidade" className="underline text-cyber-neon-cyan">Política de Privacidade</a>
          </span>
        </label>

        <button
          onClick={handleLogin}
          className="flex items-center justify-center border border-gray-700 bg-black hover:bg-gray-900 px-4 py-2 rounded"
        >
          <img
            src="https://www.svgrepo.com/show/506498/google.svg"
            alt="Google"
            className="w-5 h-5 mr-2"
          />
          Entrar com Google
        </button>
      </div>
    </Layout>
  )
}
