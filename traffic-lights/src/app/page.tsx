"use client";

import './App.css'
import { TrafficLight } from './TrafficLight';

export default function Home() {

  return (
    <div className='page'>
      <TrafficLight/>
      <TrafficLight initialState='slowdown'/>
      <TrafficLight/>
      <TrafficLight initialState='go'/>
      <TrafficLight/>
      <TrafficLight initialState='slowdown'/>
      <TrafficLight/>
    </div>
  )
}
