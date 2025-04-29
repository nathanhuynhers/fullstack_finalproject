import React from 'react';
import { auth } from '../firebase';
import PetProfileCreation from './PetProfileCreation';


export default function Dashboard() {

  return (
    <>
      <PetProfileCreation></PetProfileCreation>
    </>
    // Remove this as needed to style
  );
}
