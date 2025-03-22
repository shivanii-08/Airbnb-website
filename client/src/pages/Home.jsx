import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import Card from '../components/Card'
import { Footer } from 'flowbite-react'
function Home() {
  return (
    <Layout>
      <Header/>
      <div>
        <Card/>
      </div>
      <Footer/>
    </Layout>
  )
}

export default Home