

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export default function Login() {
  return (
    <div className="w-full lg:grid lg:grid-cols-2 min-h-[100vh]">
      <div className="hidden bg-muted lg:flex bg-gray-900 justify-center items-center flex-col">
        <img src="https://lapaz.gob.mx/images/ayuntamiento-logo-full-color.png" width={150} />
        <h1 className="text-3xl font-bold text-white">Nóminas</h1>
      </div>

      <div className="flex items-center justify-center py-12">
        <div className="mx-auto grid w-[350px] gap-6">
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Inicio de sesión</h1>
          </div>
          <div className="grid gap-4">
            <div className="grid gap-2">
              <Label htmlFor="email">Usuario</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
              />
            </div>
            <div className="grid gap-2">
              <div className="flex items-center">
                <Label htmlFor="contrasena">Contraseña</Label>
                <a
                  href="/forgot-password"
                  className="ml-auto inline-block text-sm underline"
                >
                  Recuperar
                </a>
              </div>
              <Input id="contrasena" type="contrasena" required />
            </div>
            <Button type="submit" className="w-full">
              Iniciar sesión
            </Button>
          </div>
          <div className="mt-4 text-center text-sm">
            Don&apos;t have an account?{" "}
            <a href="#" className="underline">
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
