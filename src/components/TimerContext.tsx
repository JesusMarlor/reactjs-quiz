import { createContext, useContext, useState, useRef, useEffect } from 'react'

type TimerContext = {
    time: number;
    startTimer: () => void
    stopTimer: () => void
    resetTimer: () => void
}

const TimerContext = createContext<TimerContext | null>(null);

export const TimerSuper = ({children} : {children: React.ReactNode}) => {
    const [time, setTime] = useState<number>(0)
    const intervalRef = useRef<NodeJS.Timeout | null>(null)

        const startTimer = () => {
    if (intervalRef.current)return;
     intervalRef.current = setInterval(() => {
      setTime((prev) => prev + 1)
    }, 1000);
   }

  const stopTimer = () => {
    if (intervalRef.current){
    clearInterval(intervalRef.current)
    intervalRef.current =  null
    }
  }

  const resetTimer = () => {
    setTime(0);
    if(intervalRef.current){
        clearInterval(intervalRef.current)
        intervalRef.current = null
    }
  }

  useEffect( () =>{
        return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [])
  return(
    <TimerContext.Provider value={{time, startTimer, stopTimer, resetTimer}}>   
        {children}
    </TimerContext.Provider>
  )
}

export const useTimer = () => {
  const context = useContext(TimerContext);
  if (!context) {
    throw new Error("useTimer must be used within TimerProvider");
  }
  return context;
}