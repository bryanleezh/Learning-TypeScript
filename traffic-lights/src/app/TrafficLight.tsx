"use client";
import { useEffect, useState } from 'react';
import './App.css'

type trafficLightState = "stop" | "slowdown" | "go";

// delays for timings
const STOP_DELAY = 3000;
const SLOW_DELAY = 2000;
const GO_DELAY = 4000;

export function TrafficLight( { initialState } : { initialState ?: trafficLightState }) { //have an optional initial state of traffic light
  const [state, setState] = useState<trafficLightState>(initialState ?? "stop"); //defaults to stop if no initial state passed in

  function getStoplightClass(light: trafficLightState) {
    return `trafficlight ${light}` + (state === light ? " on" : "");
  }

  useEffect(() => {
    // setting timeout for stop
    if (state === "stop") {
      setTimeout(() => setState('go'), STOP_DELAY);
    }
    // setting timeout for slowdown
    else if (state === "slowdown") {
      setTimeout(() => setState('stop'), SLOW_DELAY);
    }
    // setting timeout for go
    else {
      setTimeout(() => setState('slowdown'), GO_DELAY);
    }
  }, [state])

  return (
    <div className='alllights'>
      <div className={getStoplightClass('stop')}></div>
      <div className={getStoplightClass('slowdown')}></div>
      <div className={getStoplightClass('go')}></div>
    </div>
  )
}
