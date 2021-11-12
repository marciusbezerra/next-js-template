import Head from "next/head"
import Image from 'next/image'
import { useState } from "react";
// import styles from '../styles/Home.module.css'

import RocketseatLogo from '../assets/rocketseat.svg'
import { ButtonOK, Container } from '../styles/pages/Home';
// import '../styles/pages/home.scss';

const Home: React.FC = (props) => {


  console.log(props['className']);

  return (
    <Container>
      <Head>
        <title>Homepage</title>
      </Head>

      <RocketseatLogo />
      <h1>ReactJS Structure</h1>
      <p>A ReactJS + Next.js structure made by Rocketseat.</p>
      <ButtonOK className="mainButton">Test State!</ButtonOK>
    </Container>
  )
}

export default Home