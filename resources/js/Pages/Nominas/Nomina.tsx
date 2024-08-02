import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import Loading from '@/components/ui/Loading'
import Modal from '@/components/ui/Modal'
import Dashboard from '@/Layout/Dashboard'
import { IconCancel, IconCheckbox, IconEye, IconEyeOff, IconLock, IconMessage2, IconWaveSine } from '@tabler/icons-react'
import { useState } from 'react'

export default function Nomina() {
  const [showModal, setShowModal] = useState(false)
  const [isPassword, setIsPassword] = useState(false)

  return (
    <div className="p-5">
      <h1>Nomina</h1>
      <Button className="mb-2" primary left={IconCheckbox}>Realizar acción</Button>
      <Button disabled className="mb-2" primary left={IconCheckbox}>Realizar acción</Button>
      <Button className="mb-2" destroy right={IconCancel}>Realizar acción</Button>
      <Button className="mb-2" left={IconWaveSine}>Realizar acción</Button>
      <Button className="mb-2">Realizar acción</Button>
      <Button loading className="mb-2" primary left={IconCheckbox}>Realizar acción</Button>
      <Button loading className="mb-2" destroy right={IconCancel}>Realizar acción</Button>
      <Button loading className="mb-2" left={IconWaveSine}>Realizar acción</Button>
      <Button loading className="mb-2">Realizar acción</Button>

      <Loading className="mb-2"/>
      
      <Input className="mb-2" placeholder="dinero" />
      <Input password={isPassword} right={isPassword ? IconEyeOff : IconEye} onRightClick={() => setIsPassword(!isPassword)} className="mb-2" placeholder="Email" />
      <Input left={IconLock} className="mb-2" placeholder="Email" />

      <Button left={IconMessage2} className="mb-2" onClick={() => setShowModal(true)}>Launch modal</Button>

      <Modal visible={showModal} onClose={() => setShowModal(false)}>
        <p>¿quieres realizar esta acción?</p>
      </Modal>
    </div>
  )
}

Nomina.layout = (page: JSX.Element) => <Dashboard>{page}</Dashboard>
