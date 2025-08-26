"use client";

import Aboutpage from './About/page';
import Clientspage from './Clients/page';
import Contactpage from './Contact/page';
import HomePage from './Home/page';
import Servicespage from './Services/page';



export default function Home() {
  return (
    <>

      <HomePage />
      <Aboutpage/>
      <Servicespage/>
      <Clientspage/>
      <Contactpage/>
      

    </>
  );
}
