import { FC } from 'react'
import './App.css'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import Contacts from './components/Contacts'
import Social from './components/Social'
import Footer from './components/Footer'
import data from './db/index.json'
import img from './assets/owner-photo.jpg'

const App: FC = () => {
  return (
    <>
      <main>
        <section className="py-16">
          <div className="container mx-auto">
            <div className="grid gap-8 grid-cols-1 md:grid-cols-2 text-white">
              <div className="flex flex-col items-center gap-6 p-8 rounded-lg shadow-md bg-gradient-to-r from-blue-500 to-cyan-500">
                <img className="w-32 h-32 rounded-full" src={img} alt="" />
                <div className="text-center">
                  <h1 className="mb-4 text-5xl font-semibold">{data.name}</h1>
                  <h2 className="text-4xl font-medium text-white/80">
                    {data.position}
                  </h2>
                </div>
              </div>

              <div className=" p-8 rounded-lg shadow-md bg-gradient-to-r from-green-500 to-lime-500">
                <Heading>About Me</Heading>
                <Paragraph>{data.about}</Paragraph>
              </div>

              <div className="p-8 rounded-lg shadow-md bg-gradient-to-r from-orange-500 to-yellow-500">
                <Heading>Skills</Heading>
                <Paragraph>{data.skills}</Paragraph>
              </div>

              <div className="p-8 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 to-pink-500">
                <Heading>Contacts</Heading>
                <Paragraph>
                  <div className="flex flex-col h-full">
                    <Contacts data={data.contacts} />
                    <Social data={data.social} />
                  </div>
                </Paragraph>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export default App
