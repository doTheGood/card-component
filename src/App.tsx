import './App.css'
import { Badge } from './components/Badge'
import { Button } from './components/Button'
import { PaperAirplaneIcon } from '@heroicons/react/24/solid'
import { Card } from './components/Card'

function App() {
  return (
    <div className="App">
      <section className="card-container">
        <Card
          body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio suscipit impedit dolores explicabo. Ipsum distinctio alias, suscipit enim, tenetur qui, inventore modi animi sequi dolorem dignissimos expedita est ducimus consectetur."
          title="people!"
          indicator="sold"
          subtitle="Nice subtitle"
          image="https://github.com/dothegood.png"
          badge={{
            text: 'hi',
            filled: true,
          }}
          btn={{
            text: 'send',
            type: 'secondary',
            href: '#',
            filled: false,
            icon: <PaperAirplaneIcon />,
          }}
        />
        <Card
          body="Hi"
          title="people!"
          indicator="sold"
          subtitle="Nice subtitle"
          image="https://github.com/dothegood.png"
          badge={{
            text: 'hi',
            filled: true,
          }}
          btn={{
            text: 'send',
            type: 'secondary',
            href: '#',
            filled: false,
            icon: <PaperAirplaneIcon />,
          }}
        />
        <Card
          body="Hi"
          title="people!"
          indicator="sold"
          subtitle="Nice subtitle"
          image="https://github.com/dothegood.png"
          badge={{
            text: 'hi',
            filled: true,
          }}
          btn={{
            text: 'send',
            type: 'secondary',
            href: '#',
            filled: false,
            icon: <PaperAirplaneIcon />,
          }}
        />
      </section>
    </div>
  )
}

export default App
